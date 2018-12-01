import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

export class StorageService {
  ref: AngularFireStorageReference;

  constructor(protected pasta: string, protected storage: AngularFireStorage) {
    this.ref = storage.ref(this.pasta);
  }

  async uploadPhoto(path_id: string, id: string | number, data: string) {
    let task = await this.ref
      .child(`${path_id}/${id}`)
      .putString(data, 'data_url');

    return await task.ref.getDownloadURL();
  }
}
