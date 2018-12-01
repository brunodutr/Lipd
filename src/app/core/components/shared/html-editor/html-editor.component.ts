import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
import { EYE_SVG } from '../../../constants/eye.svg';
import { PreviewModal } from '../../modals/preview/preview.modal';

Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'lipd-editor',
  templateUrl: './html.editor.component.html'
})
export class HTMLEditor implements OnInit, AfterViewInit {
  editor_modules = {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ header: 1 }, { header: 2 }],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link', 'image'],
        ['preview']
      ],
      handlers: {
        preview: () => {
          this.showModal();
        }
      }
    },
    imageResize: true
  };

  @Input()
  placeholder = 'Escreva aqui';

  @Input()
  thumbnail;

  @Input()
  title;

  @Input()
  html;

  @Output()
  htmlChange = new EventEmitter<string>();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const previewBTN = document.querySelector('.ql-preview');
    previewBTN.innerHTML = EYE_SVG;
    previewBTN.setAttribute('title', 'Preview');
  }

  emit() {
    this.htmlChange.emit(this.html);
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: PreviewModal,
      componentProps: {
        html: this.html,
        titulo: this.title,
        thumbnail: this.thumbnail
      }
    });

    return await modal.present();
  }
}
