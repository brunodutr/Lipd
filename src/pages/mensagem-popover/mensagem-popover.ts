import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mensagem } from '../../models/mensagem';

/**
 * Generated class for the MensagemPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagem-popover',
  templateUrl: 'mensagem-popover.html'
})
export class MensagemPopoverPage {
  mensagens: Array<Mensagem> = [
    new Mensagem({
      nome: 'BD',
      texto: 'Mensagem de Teste',
      email: 'b@hotmail.com'
    }),
    new Mensagem({
      nome: 'SM',
      texto: 'Bom Dia',
      email: 's@hotmail.com',
      status: 'H'
    })
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPopoverPage');
  }
}
