import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SafeModule } from '../core/components/pipes/safe.module';
import { LipdCropperModule } from '../core/components/shared/crop-image/crop-image.module';
import { HTMLEditorModule } from '../core/components/shared/html-editor/html-editor.module';
import { ReceitaDetalhe } from '../pages/receitas/detail/receita.detail';
import { ReceitaFormulario } from '../pages/receitas/formulario/receita.form';
import { ReceitaLista } from '../pages/receitas/lista/receita.lista';
import { ReceitaService } from '../providers/impl/receita.service';

const routes: Routes = [
  {
    path: '',
    component: ReceitaLista
  },
  {
    path: 'add/0',
    component: ReceitaFormulario
  },
  {
    path: ':uid',
    component: ReceitaDetalhe
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
  declarations: [ReceitaDetalhe, ReceitaFormulario, ReceitaLista],
  providers: [ReceitaService]
})
export class ReceitasPageModule {}
