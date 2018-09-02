import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALIMENTOS } from '../../../constantes/alimentos';

import { Alimento } from '../../../models/alimento';
import { DiariosProvider } from '../../../providers/services-diarios/services-diarios';

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {
  lista: Array<any>;
  header: string;
  alimentos;

  edit: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dService: DiariosProvider
  ) {}

  ionViewDidLoad() {
    this.lista = this.navParams.get('lista');
    this.header = this.navParams.get('header');
    this.alimentos = this.navParams.get('alimentos');
    this.edit = this.navParams.get('edit');
    console.log('ionViewDidLoad PesquisarPage');
  }

  getLista() {
    return this.lista;
  }

  getAlimentos(categoria) {
    this.navCtrl.push(PesquisarPage, {
      lista: ALIMENTOS.filter(a => a.categoria === categoria._id),
      alimentos: ALIMENTOS.filter(a => a.categoria === categoria._id),
      header: categoria.descricao,
      edit: true
    });
  }

  adicionaAlimento(item) {
    this.dService.insertAlimento(item);
    this.navCtrl.popToRoot();
  }

  onInput(event) {
    const val = event.target.value;

    if (val && val.trim() != '') {
      this.lista = this.alimentos.filter(
        a => a.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
      this.header =
        this.lista.length > 1
          ? `${this.lista.length} resultados`
          : `${this.lista.length} resultado`;
      this.edit = true;
    } else {
      this.lista = this.navParams.get('lista');
      this.header = this.navParams.get('header');
      this.edit = this.navParams.get('edit');
    }
  }

  onCancel(event) {}
}
