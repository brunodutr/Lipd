import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Artigo } from '../../../models/artigo.model';
import { ArtigoService } from '../../../providers/impl/artigo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.page.html',
  styleUrls: ['./artigos.page.scss']
})
export class ArtigosDetalhe implements OnInit {
  artigo: Artigo;

  constructor(private aService: ArtigoService, private ac: ActivatedRoute) {}

  ngOnInit() {
    this.ac.params.subscribe(params => {
      this.aService
        .findBy(Artigo, params.uid)
        .then((artigo: Artigo) => (this.artigo = artigo))
        .catch(err => console.log(err));
    });
  }
}
