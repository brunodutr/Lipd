import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CATEGORIAS } from '../../../constantes/categorias';
import { ALIMENTOS } from '../../../constantes/alimentos';
import { PesquisarPage } from '../pesquisar/pesquisar';
import { DetalhePage } from '../detalhe/detalhe';
import { Alimento } from '../../../models/alimento';
import { DiariosProvider } from '../../../providers/services-diarios/services-diarios';

@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html'
})
export class DiarioPage {
  constructor(public navCtrl: NavController, public service: DiariosProvider) {}

  pesquisar() {
    const Dados = {
      lista: CATEGORIAS,
      alimentos: ALIMENTOS,
      header: 'Categorias',
      edit: false
    };
    this.navCtrl.push(PesquisarPage, Dados);
  }

  detalhar(alimento) {
    this.navCtrl.push(DetalhePage, { alimento: alimento });
  }
}
