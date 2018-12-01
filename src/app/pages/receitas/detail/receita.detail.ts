import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../../../models/receita.model';
import { ReceitaService } from '../../../providers/impl/receita.service';

@Component({
  templateUrl: './receita.detail.html',
  styleUrls: ['./receita.detail.scss']
})
export class ReceitaDetalhe implements OnInit {
  receita: Receita;

  constructor(private aService: ReceitaService, private ac: ActivatedRoute) {}

  ngOnInit() {
    this.ac.params.subscribe(params => {
      this.aService
        .findBy(Receita, params.uid)
        .then((receita: Receita) => (this.receita = receita))
        .catch(err => console.log(err));
    });
  }
}
