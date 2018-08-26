import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CATEGORIAS } from '../../../constantes/categorias';
import { ALIMENTOS } from '../../../constantes/alimentos';

import { Alimento } from '../../../models/alimento';

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
  header: string;

  isCategoria: boolean;
  isAlimento: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.lista = CATEGORIAS;
    this.header = 'Categorias';
    this.isCategoria = true;
    console.log('ionViewDidLoad PesquisarPage');
  }

  getLista() {
    return this.lista;
  }

  getAlimentos(categoria) {
    this.header = categoria.descricao;
    this.lista = ALIMENTOS.filter(a => a.categoria === categoria._id);
    this.isCategoria = false;
    this.isAlimento = true;

    return this.lista;
  }

  adicionaAlimento(alimento) {
    Alimento.lista.push(new Alimento({ nome: alimento.descricao, qtd: 100 }));
    this.navCtrl.pop();
  }

  onInput(event) {
    this.isCategoria = false;
    this.isAlimento = false;

    const val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.lista = ALIMENTOS.filter(
        a => a.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
      this.header =
        this.lista.length > 1
          ? `${this.lista.length} resultados`
          : `${this.lista.length} resultado`;
      this.isAlimento = true;
    } else {
      this.lista = CATEGORIAS;
      this.isCategoria = true;
      this.header = 'Categorias';
    }
  }

  onCancel(event) {}
}
