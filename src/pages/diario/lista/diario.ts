import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PesquisarPage } from '../pesquisar/pesquisar';
import { DetalhePage } from '../detalhe/detalhe';
import { DiarioService } from '../../../services/diario.service';
import { Alimento } from '../../../models/alimento';

@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html'
})
export class DiarioPage {
  lista;
  constructor(public navCtrl: NavController, public dService: DiarioService) {}

  async ionViewDidEnter() {
    this.lista = await this.dService.getDiario();
  }

  pesquisar() {
    this.navCtrl.push(PesquisarPage);
  }

  detalhar(alimento) {
    this.navCtrl.push(DetalhePage, { alimento: alimento });
  }
}
