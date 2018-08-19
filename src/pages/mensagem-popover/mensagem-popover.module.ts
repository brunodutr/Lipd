import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensagemPopoverPage } from './mensagem-popover';

@NgModule({
  declarations: [
    MensagemPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MensagemPopoverPage),
  ],
})
export class MensagemPopoverPageModule {}
