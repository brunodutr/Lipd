import { Injectable } from '@angular/core';
import { StringUtils } from '../../core/utils/string.utils';
import { Artigo } from '../../models/artigo.model';
import { StorageService } from '../abstract.firestorage';
import { AbstractFirestore } from '../abstract.firestore';
import { AuthService } from '../auth.service';
import {
  AngularFireStoragePaciente,
  AngularFirestorePaciente
} from '../paciente.firestore';

@Injectable()
export class ArtigoService extends AbstractFirestore<Artigo> {
  _storage: StorageService;

  st: StringUtils = new StringUtils();

  constructor(
    firestore: AngularFirestorePaciente,
    public storage: AngularFireStoragePaciente,
    private auth: AuthService
  ) {
    super('Artigos', firestore);
    this._storage = new StorageService('Artigos', storage);
  }

  async getArtigos() {
    let uid = await this.getUID();

    let result = await this.collection.ref
      .where('nid', '==', uid)
      .orderBy('data', 'desc')
      .get();

    return result.docs.map(doc => doc.data());
  }

  async getUID() {
    return await this.auth.getUID();
  }

  async create(artigo: Artigo) {
    artigo.nid = await this.getUID();
    artigo.uid = await super.getId();
    artigo.data = Date.now();

    artigo.thumbnail = await this._storage.uploadPhoto(
      artigo.uid,
      'thumbnail',
      artigo.thumbnail
    );

    let images = this.st.getBetween(artigo.html, `<img src="`, `"`);

    for (const image of images) {
      if (image.startsWith('data')) {
        let download_url = await this._storage.uploadPhoto(
          artigo.uid,
          artigo.img_seq,
          image
        );
        artigo.html = artigo.html.replace(image, download_url);
        artigo.img_seq++;
      }
    }

    super.create(Artigo, artigo);
  }
}
