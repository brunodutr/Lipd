import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CATEGORIAS } from '../../../constantes/categorias';
import { ALIMENTOS } from '../../../constantes/alimentos';

/**
 * Generated class for the PesquisarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {
  lista: Array<any>;
  isAlimento: boolean;
  isCategoria: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.isCategoria = true;
    this.lista = CATEGORIAS;
    console.log('ionViewDidLoad PesquisarPage');
  }

  getLista() {
    return this.lista;
  }

  getAlimentos(id) {
    this.isCategoria = false;
    this.isAlimento = true;
    this.lista = ALIMENTOS.filter(a => a.classificacao === id);
    return this.lista;
  }

  getAlimento(id) {}

  onInput(event) {}
  onCancel(event) {}
}
