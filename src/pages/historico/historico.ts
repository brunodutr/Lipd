import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {
  registros: Array<any> = [
    {
      data: '17/08/2018',
      qtd: 0
    },
    {
      data: '18/08/2018',
      qtd: 0
    },
    {
      data: '19/08/2018',
      qtd: 0
    }
  ];

  constructor(public navCtrl: NavController) {}
}
