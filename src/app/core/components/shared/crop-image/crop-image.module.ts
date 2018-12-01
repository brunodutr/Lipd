import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LipdCropper } from './crop-image.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, ImageCropperModule, IonicModule],
  declarations: [LipdCropper],
  exports: [LipdCropper]
})
export class LipdCropperModule {}
