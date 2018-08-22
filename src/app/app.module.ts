import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { InicioPage } from '../pages/inicio/inicio';
import { HistoricoPage } from '../pages/historico/historico';
import { TabsPage } from '../pages/tabs/tabs';
import { DiarioPage } from '../pages/diario/lista/diario';
import { PesquisarPage } from '../pages/diario/pesquisar/pesquisar';
import { DetalhePage } from '../pages/diario/detalhe/detalhe';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { MensagemPage } from '../pages/inicio/mensagem/mensagem';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as Constantes from '../constantes/config';

@NgModule({
  declarations: [
    MyApp,
    DiarioPage,
    InicioPage,
    HistoricoPage,
    PesquisarPage,
    DetalhePage,
    MensagemPage,
    ConfiguracaoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, Constantes.APP_CONFIG),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiarioPage,
    InicioPage,
    HistoricoPage,
    PesquisarPage,
    DetalhePage,
    MensagemPage,
    ConfiguracaoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
