import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { ReceitaService } from '../../../providers/impl/receita.service';

@Component({
  templateUrl: './receita.lista.html',
  styleUrls: ['./receita.lista.scss']
})
export class ReceitaLista implements OnInit {
  receitas: Observable<any[]>;

  constructor(private aService: ReceitaService, private router: Router) {}

  ngOnInit() {
    this.receitas = from(this.aService.getReceitas());
  }

  detalhe(uid: string) {
    this.router.navigate([`receitas/${uid}`]);
  }

  add() {
    this.router.navigate([`receitas/add/0`]);
  }
}
