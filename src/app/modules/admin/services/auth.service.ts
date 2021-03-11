import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FirebaseUser } from '../models';
import { first, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<FirebaseUser>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFirestore.doc<FirebaseUser>(`users/${user.uid}`).valueChanges();
        }

        return of(null);
      })
    );
  }

  public async signIn(email: string, password: string): Promise<void> {
    const result = await this.angularFireAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['admin']);
  }

  public async signOut(): Promise<void> {
    await this.angularFireAuth.signOut();
    this.router.navigate(['/']);
  }

  public isAuthenticated(): Promise<FirebaseUser> {
    return this.angularFireAuth.authState.pipe(first()).toPromise();
  }
}
