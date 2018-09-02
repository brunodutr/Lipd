import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/auth.service';
import { DiariosProvider } from '../../providers/services-diarios/services-diarios';

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html'
})
export class ConfiguracaoPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  logout() {
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
}
