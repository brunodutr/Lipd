import { Alimento } from '../models/alimento';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as moment from 'moment';

@Injectable()
export class DiarioService {
  constructor(private storage: Storage, private auth: AuthService) {}

  getActualKey() {
    const dataAtual = moment(new Date()).format('DDMMYYYY');
    return `${dataAtual}_${this.auth.getUID()}`;
  }

  private insertDiario(diario: Array<Alimento>) {
    let key = this.getActualKey();
    return this.storage.set(key, diario);
  }

  public async insertAlimento(item) {
    let diario = await this.getDiario();
    item.qtd = 50;
    diario.filter(x => {
      if (x._id === item._id) {
        item.qtd += x.qtd;
        let index = diario.indexOf(x);
        diario.splice(index, 1);
      }
    });
    diario.push(item);
    this.insertDiario(diario);
  }

  public async get(key: string) {
    return await this.storage.get(key);
  }

  public async getDiario() {
    let result = await this.storage.get(this.getActualKey());

    if (!result) {
      this.insertDiario([]);
      return [];
    }
    return result;
  }
}
