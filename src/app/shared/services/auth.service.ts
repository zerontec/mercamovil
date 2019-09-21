import { UserService } from './user.service';
import { IAppUser } from '../models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, afDta: AngularFireDatabase) {
    this.user$ = afAuth.authState;
  }


  registerUser(email:string, pass:string ) {

return new Promise ((resolve, reject ) => {

  this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  .then(userData =>  {
    resolve (userData)
  }).catch(err => console.log(reject(err)));

});
}

loginEmail(email: string, pass: string){

return new Promise ((resolve, reject ) => {
  this.afAuth.auth.signInWithEmailAndPassword(email, pass)
  .then(userData => {
    resolve (userData)

  }).catch(err => console.log(reject(err)));
});
}

 

  login(provider: firebase.auth.AuthProvider) {
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<IAppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {
          return this.userService.get(user.uid);
        }

        return Observable.of(null);
      });
  }

}
