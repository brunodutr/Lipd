export class Artigo {
  uid: string = '';

  titulo: string = '';

  thumbnail: string = '';

  html: string = '';

  nid: string = '';

  data: number;

  img_seq: number;

  constructor(object?: any) {
    this.uid = object.uid;
    this.titulo = object.titulo;
    this.thumbnail = object.thumbnail;
    this.html = object.html;
    this.nid = object.nid;
    this.data = object.data;
    this.img_seq = object.img_seq;
  }
}
