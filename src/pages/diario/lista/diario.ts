import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { PesquisarPage } from '../pesquisar/pesquisar';
import { DetalhePage } from '../detalhe/detalhe';
import { Alimento } from '../../../models/alimento';

@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html'
})
export class DiarioPage {
  constructor(public navCtrl: NavController, public storage: Storage) {}

  getAlimentos() {
    return Alimento.lista;
  }

  pesquisar() {
    this.navCtrl.push(PesquisarPage);
  }

  detalhar(alimento) {
    this.navCtrl.push(DetalhePage, { alimento: alimento });
  }
}
