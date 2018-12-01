import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtigoService } from '../../../providers/impl/artigo.service';
import { Artigo } from '../../../models/artigo.model';
import { StringUtils } from '../../../core/utils/string.utils';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.page.html',
  styleUrls: ['./artigos.page.scss']
})
export class ArtigosFormulario implements OnInit {
  artigo = {
    titulo: '',
    thumbnail: '',
    html: '',
    img_seq: 0
  };

  constructor(private aService: ArtigoService) {}

  ngOnInit() {}

  async teste() {
    this.aService.create(new Artigo(this.artigo));
  }
}
