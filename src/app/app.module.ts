import { NgModule, NgZone, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './providers/auth.service';
import {
  AngularFireauthNutri,
  AngularFireauthNutriciFactory
} from './providers/nutri.firestore';
import {
  AngularFirestorePaciente,
  AngularFirestorePacienteFactory,
  AngularFireStoragePaciente,
  AngularFireStoragePacienteFactory
} from './providers/paciente.firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    AuthService,
    AuthGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: AngularFireauthNutri,
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFireauthNutriciFactory
    },
    {
      provide: AngularFireStoragePaciente,
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFireStoragePacienteFactory
    },
    {
      provide: AngularFirestorePaciente,
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFirestorePacienteFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
