import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LipdCropperModule } from '../core/components/shared/crop-image/crop-image.module';
import { HTMLEditorModule } from '../core/components/shared/html-editor/html-editor.module';
import { ArtigosFormulario } from '../pages/artigos/formulario/artigos.page';
import { ArtigosLista } from '../pages/artigos/lista/artigos.page';
import { ArtigoService } from '../providers/impl/artigo.service';
import { ArtigosDetalhe } from '../pages/artigos/detail/artigos.page';
import { SafeModule } from '../core/components/pipes/safe.module';

const routes: Routes = [
  {
    path: '',
    component: ArtigosLista
  },
  {
    path: 'add/0',
    component: ArtigosFormulario
  },
  {
    path: ':uid',
    component: ArtigosDetalhe
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HTMLEditorModule,
    LipdCropperModule,
    SafeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArtigosLista, ArtigosFormulario, ArtigosDetalhe],
  providers: [ArtigoService]
})
export class ArtigosPageModule {}
