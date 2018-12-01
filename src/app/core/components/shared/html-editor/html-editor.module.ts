import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { HTMLEditor } from './html-editor.component';
import { FormsModule } from '@angular/forms';
import { PreviewModal } from '../../modals/preview/preview.modal';
import { IonicModule } from '@ionic/angular';
import { SafeModule } from '../../pipes/safe.module';

@NgModule({
  imports: [CommonModule, FormsModule, SafeModule, IonicModule, QuillModule],
  declarations: [HTMLEditor, PreviewModal],
  entryComponents: [PreviewModal],
  exports: [HTMLEditor]
})
export class HTMLEditorModule {}
