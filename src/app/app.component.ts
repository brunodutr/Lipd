import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './providers/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  logged: boolean;
  autenticate: Observable<boolean>;
  exit_icon: string = '/assets/custom-icon/exit.svg';

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: '/assets/custom-icon/home.svg'
    },
    {
      title: 'Pacientes',
      url: '/pacientes',
      icon: '/assets/custom-icon/users.svg'
    },
    {
      title: 'Mensagens',
      url: '/mensagens',
      icon: '/assets/custom-icon/chat.svg',
      badge: 31
    },
    {
      title: 'Artigos',
      url: '/artigos',
      icon: '/assets/custom-icon/article.svg'
    },
    {
      title: 'Receitas',
      url: '/receitas',
      icon: '/assets/custom-icon/recipe-book.svg'
    }
  ];

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.authService.isAuthenticate().then(value => {
      if (!value) this.router.navigate(['login']);
    });

    this.authService.logged.subscribe(value => {
      this.logged = value;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
