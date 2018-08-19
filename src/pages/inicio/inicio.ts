import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { MensagemPopoverPage } from '../mensagem-popover/mensagem-popover';
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  constructor(
    public navCtrl: NavController,
    public popCtrl: PopoverController
  ) {}

  showMsg() {
    this.popCtrl.create(MensagemPopoverPage).present();
  }
}
