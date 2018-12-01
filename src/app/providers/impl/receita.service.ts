import { Injectable } from '@angular/core';
import { StringUtils } from '../../core/utils/string.utils';
import { Receita } from '../../models/receita.model';
import { StorageService } from '../abstract.firestorage';
import { AbstractFirestore } from '../abstract.firestore';
import { AuthService } from '../auth.service';
import { AngularFireStoragePaciente, AngularFirestorePaciente } from '../paciente.firestore';

@Injectable()
export class ReceitaService extends AbstractFirestore<Receita> {
  _storage: StorageService;

  st: StringUtils = new StringUtils();

  constructor(
    firestore: AngularFirestorePaciente,
    public storage: AngularFireStoragePaciente,
    private auth: AuthService
  ) {
    super('Receitas', firestore);
    this._storage = new StorageService('Receitas', storage);
  }

  async getReceitas() {
    let uid = await this.getUID();

    let result = await this.collection.ref
      .where('nid', '==', uid)
      .orderBy('data', 'desc')
      .get();

    return result.docs.map(doc => doc.data());
  }

  async getUID() {
    return await this.auth.getUID();
  }

  async create(receita: Receita) {
    receita.nid = await this.getUID();
    receita.uid = await super.getId();
    receita.data = Date.now();

    receita.thumbnail = await this._storage.uploadPhoto(
      receita.uid,
      'thumbnail',
      receita.thumbnail
    );

    let images = this.st.getBetween(receita.html, `<img src="`, `"`);

    for (const image of images) {
      if (image.startsWith('data')) {
        let download_url = await this._storage.uploadPhoto(
          receita.uid,
          receita.img_seq,
          image
        );
        receita.html = receita.html.replace(image, download_url);
        receita.img_seq++;
      }
    }

    super.create(Receita, receita);
  }
}
