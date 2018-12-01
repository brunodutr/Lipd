import { Component, OnInit } from '@angular/core';
import { Receita } from '../../../models/receita.model';
import { ReceitaService } from '../../../providers/impl/receita.service';

@Component({
  templateUrl: './receita.form.html',
  styleUrls: ['./receita.form.scss']
})
export class ReceitaFormulario implements OnInit {
  receita = {
    titulo: '',
    thumbnail: '',
    html: '',
    img_seq: 0
  };

  constructor(private aService: ReceitaService) {}

  ngOnInit() {}

  async teste() {
    this.aService.create(new Receita(this.receita));
  }
}
