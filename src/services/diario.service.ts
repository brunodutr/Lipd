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
  public insertDiario(diario: Array<Alimento>) {
    let key = this.getActualKey();
    return this.storage.set(key, diario);
  }

  public insertAlimento(alimento: Alimento) {}

  public get(key: string) {
    return this.storage.get(key);
  }

  public getDiario() {
    return this.storage
      .get(this.getActualKey())
      .then((result: Array<Alimento>) => {
        if (!result) {
          this.insert([]);
          return Promise.resolve([]);
        }
        return Promise.resolve(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
