import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Alimento } from '../../../models/alimento';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html'
})
export class DetalhePage {
  qtd: number;
  alimento: Alimento;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.alimento = this.navParams.get('alimento');
    this.qtd = this.alimento.qtd;
    console.log('ionViewDidLoad DetalhePage');
  }

  // atualizar() {
  //   Alimento.lista.filter(x => {
  //     if (x.id === this.alimento.id) {
  //       x.qtd = this.qtd;
  //       this.alimento = x;
  //     }
  //   });
  // }

  // remover() {
  //   Alimento.lista = Alimento.lista.filter(x => x.id !== this.alimento.id);
  //   this.navCtrl.pop();
  // }
}
