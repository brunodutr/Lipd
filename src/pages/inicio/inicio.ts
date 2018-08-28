import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MensagemPage } from './mensagem/mensagem';
import { AuthService } from '../../services/auth.service';
import { ConfiguracaoPage } from '../configuracao/configuracao';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  usuario: { nome: string; foto: string; email: string };
  tab1Root;
  tab2Root;
  tab3Root;

  constructor(public navCtrl: NavController, private auth: AuthService) {}

  async ionViewDidEnter() {
    this.usuario = await this.auth.getUserInfo();
  }

  showMsg() {
    this.navCtrl.push(MensagemPage);
  }

  config() {
    this.navCtrl.push(ConfiguracaoPage);
  }
}
