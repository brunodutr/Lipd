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

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../constantes/firebase.config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
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
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
