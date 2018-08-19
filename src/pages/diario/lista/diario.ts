import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PesquisarPage } from '../pesquisar/pesquisar';
import { DetalhePage } from '../detalhe/detalhe';
import { Alimento } from '../../../models/alimento';

@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html'
})
export class DiarioPage {
  static alimentos: Array<Alimento> = [
    new Alimento({ nome: 'Abacate', qtd: 5 }),
    new Alimento({ nome: 'Arroz', qtd: 10 })
  ];
  constructor(public navCtrl: NavController) {}

  getAlimentos() {
    return DiarioPage.alimentos;
  }
  pesquisar() {
    this.navCtrl.push(PesquisarPage);
  }

  detalhar(alimento) {
    this.navCtrl.push(DetalhePage, { alimento: alimento });
  }
}
