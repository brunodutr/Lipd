import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable, NgZone } from '@angular/core';
import { FIREBASE_CONFIG } from '../core/constants/firebase.config';

@Injectable()
export class AngularFireauthNutri extends AngularFireAuth {}

export function AngularFireauthNutriciFactory(
  platformId: Object,
  zone: NgZone
) {
  return new AngularFireAuth(
    FIREBASE_CONFIG.NUTRI,
    'FireAuthNutricionistas',
    platformId,
    zone
  );
}
