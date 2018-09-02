import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { DiariosProvider } from '../providers/services-diarios/services-diarios';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    auth: AuthService,
    diarioService: DiariosProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    auth.afAuth.authState.subscribe(
      user => {
        if (user) {
          diarioService.iniatialize();
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
      },
      () => {
        this.rootPage = LoginPage;
      }
    );
  }
}
