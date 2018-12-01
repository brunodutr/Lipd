import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Artigo } from '../../../models/artigo.model';
import { ArtigoService } from '../../../providers/impl/artigo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.page.html',
  styleUrls: ['./artigos.page.scss']
})
export class ArtigosLista implements OnInit {
  artigos: Observable<any[]>;

  constructor(private aService: ArtigoService, private router: Router) {}

  ngOnInit() {
    this.artigos = from(this.aService.getArtigos());
  }

  detalhe(uid: string) {
    this.router.navigate([`artigos/${uid}`]);
  }

  add() {
    this.router.navigate([`artigos/add/0`]);
  }
}
