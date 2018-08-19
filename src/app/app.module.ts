import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { HistoricoPage } from '../pages/historico/historico';
import { TabsPage } from '../pages/tabs/tabs';

import { DiarioPage } from '../pages/diario/lista/diario';
import { PesquisarPage } from '../pages/diario/pesquisar/pesquisar';
import { DetalhePage } from '../pages/diario/detalhe/detalhe';

import { MensagemPopoverPage } from '../pages/mensagem-popover/mensagem-popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DiarioPage,
    InicioPage,
    HistoricoPage,
    PesquisarPage,
    DetalhePage,
    MensagemPopoverPage,
    TabsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiarioPage,
    InicioPage,
    HistoricoPage,
    PesquisarPage,
    DetalhePage,
    MensagemPopoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
