import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage implements OnInit {
  dataAtual: string;

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

  ngOnInit(): void {
    this.dataAtual = moment(new Date()).format('YYYY-MM-DD');
  }
}
