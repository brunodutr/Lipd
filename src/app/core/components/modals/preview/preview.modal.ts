import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  templateUrl: './preview.modal.html'
})
export class PreviewModal implements OnInit {
  data: number;
  thumbnail: any;
  titulo: string;
  html: string;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit(): void {
    this.html = this.navParams.get('html');
    this.titulo = this.navParams.get('titulo');
    this.thumbnail = this.navParams.get('thumbnail');
    this.data = Date.now();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
