import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './modules/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'pacientes',
    loadChildren: './modules/pacientes.module#PacientesPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'mensagens',
    loadChildren: './modules/mensagens.module#MensagensPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'artigos',
    loadChildren: './modules/artigos.module#ArtigosPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'receitas',
    loadChildren: './modules/receitas.module#ReceitasPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './modules/login.module#LoginPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
