import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import * as moment from 'moment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class DiariosProvider {
  diarioDoc;
  diario;

  constructor(public firestore: AngularFirestore, public auth: AuthService) {}

  async iniatialize() {
    this.diarioDoc = undefined;
    this.diario = [];

    this.diarioDoc = await this.firestore
      .collection('app')
      .doc(this.auth.getUID())
      .collection('diarios')
      .doc(this.getDate());

    this.diarioDoc.ref.onSnapshot(
      doc => {
        if (doc.exists) {
          this.diario = doc.data();
        }
      },
      err => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }

  getDate() {
    return moment(new Date()).format('DDMMYYYY');
  }

  insertAlimento(item) {
    item.qtd = 50;

    this.diario.alimentos = this.verificaLista(this.diario.alimentos, item);

    this.diario.alimentos.push(item);

    let Diario = {
      alimentos: this.diario.alimentos,
      data_atualizacao: new Date()
    };
    this.diarioDoc.ref.set(Diario);
  }

  update() {}

  delete() {}

  private verificaLista(lista, item) {
    if (lista) {
      lista.filter(x => {
        if (x._id === item._id) {
          item.qtd += x.qtd;
          let index = lista.indexOf(x);
          lista.splice(index, 1);
        }
      });
      return lista;
    } else {
      return [];
    }
  }
}
