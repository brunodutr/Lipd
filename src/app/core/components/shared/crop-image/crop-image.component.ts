import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'lipd-cropper',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss']
})
export class LipdCropper implements OnInit {
  imageChangedEvent: any;

  @ViewChild('file')
  file: ElementRef;

  @Input()
  image;

  @Output()
  imageChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  fileChangeEvent(event) {
    this.imageChangedEvent = event;
  }

  imageCropped(image: string) {
    this.image = image;
    this.imageChange.emit(this.image);
  }
}
