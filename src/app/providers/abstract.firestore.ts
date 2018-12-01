import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { map, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { GenericUtils } from '../core/utils/generic.utils';

export class AbstractFirestore<T> {
  protected collection: AngularFirestoreCollection<T>;

  constructor(
    protected collectionName: string,
    protected db: AngularFirestore
  ) {
    this.collection = this.db.collection<T>(collectionName);
  }

  async getId() {
    return await this.collection.ref.doc().id;
  }
  
  async create(clazz: any, object: T) {
    let tObject = GenericUtils.getGenericObject(clazz, object);
    this.collection.doc(tObject['uid']).set(tObject);
  }

  update(clazz: any, id: string, object: T) {
    let tObject = GenericUtils.getGenericObject(clazz, object);
    this.collection.doc(id).update(tObject);
  }

  delete(id: string) {
    this.collection.doc(id).delete();
  }

  findBy(clazz: any, id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.collection
        .doc(id)
        .get()
        .toPromise()
        .then(doc => {
          if (doc.exists)
            resolve(GenericUtils.getGenericInstance(clazz, doc.data()));
          else resolve(GenericUtils.getGenericInstance(clazz));
        })
        .catch(error => reject(`Erro ao recuperar documento: ${error}`));
    });
  }

  findByField(text: string, field: string) {
    const start = text;
    const end = start + '\uf8ff';

    return Observable.create(subscriber => {
      this.collection.ref
        .orderBy(field)
        .startAt(start)
        .endAt(end)
        .onSnapshot(snapshot => {
          let results = [];
          snapshot.docs.forEach(doc => results.push(doc.data()));
          subscriber.next(results);
        });
    });
  }

  findAll() {
    return this.collection.snapshotChanges().pipe(
      map(results => {
        return results.map(result => {
          let doc = result.payload.doc.data() as T;
          doc['id'] = result.payload.doc.id;
          return doc;
        });
      })
    );
  }

  findOrderBy(
    orderField: string,
    orderType: firebase.firestore.OrderByDirection,
    limit?: number
  ) {
    return Observable.create(subscriber => {
      this.collection.ref
        .orderBy(orderField, orderType)
        .limit(10)
        .onSnapshot(snapshot => {
          let results = [];
          snapshot.docs.forEach(doc => results.push(doc.data()));
          subscriber.next(results);
        });
    });
  }
}
