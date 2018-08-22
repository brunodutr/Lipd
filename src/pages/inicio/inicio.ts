import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MensagemPage } from './mensagem/mensagem';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  constructor(public navCtrl: NavController) {}

  showMsg() {
    this.navCtrl.push(MensagemPage);
  }
}
