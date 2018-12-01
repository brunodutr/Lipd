import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable, NgZone } from '@angular/core';
import { FIREBASE_CONFIG } from '../core/constants/firebase.config';

@Injectable()
export class AngularFirestorePaciente extends AngularFirestore {}

export function AngularFirestorePacienteFactory(
  platformId: Object,
  zone: NgZone
) {
  return new AngularFirestore(
    FIREBASE_CONFIG.PACIENTE,
    'FirestorePacientes',
    false,
    null,
    platformId,
    zone
  );
}

@Injectable()
export class AngularFireStoragePaciente extends AngularFireStorage {}

export function AngularFireStoragePacienteFactory(
  platformId: Object,
  zone: NgZone
) {
  return new AngularFireStorage(
    FIREBASE_CONFIG.PACIENTE,
    'FireStorage Pacientes',
    null,
    platformId,
    zone
  );
}
