import { UserService } from './user.service';
import { IAppUser } from '../models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { AngularFireDatabase } from 'angularfire2/database';

import { HttpClient } from '@angular/common/http';

import {ToastrService} from './toastr.service';





@Injectable()
export class AuthService {
user$: Observable<firebase.User>;
private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
private apikey = 'AIzaSyAAMV8-pFHnxi6P8M2_7rlDF2BYw7jOJqk';

userToken: string;
  authState: any;
  subscribe: any;

  constructor(private userService: UserService, 
    private afAuth: AngularFireAuth, 
    afDta: AngularFireDatabase,
    private http: HttpClient,
    private toast: ToastrService,
    ) {
    this.user$ = afAuth.authState;
  }

//REGISTRO CON GMAIL 

   loginc(provider: firebase.auth.AuthProvider) {
    this.afAuth.auth.signInWithPopup(provider);
  }

  
//INICIO CON FACE

doFacebookLogin(provider: firebase.auth.FacebookAuthProvider) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res =>  resolve(res),
     err =>
      reject(err));
    });

}



  //REGISTRO USURIO EMAIL PASSWORD

async  signupUser(email: string, password: string) {

  return await  new Promise((resolve, reject) => {
this.afAuth.auth.createUserWithEmailAndPassword(email, password )
.then(userInfo => resolve (userInfo),



  err => reject (err));
});

}



// ENVIAR VERIFICACION EMAIL

async sendEmailVerification() {

  return await this.afAuth.auth.currentUser.sendEmailVerification();

  }


//INICIO SESION EMAIL Y PASSWORD 

async  login(email: string, password: string){
return await new Promise((resolve, reject)  => {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(userInfo => resolve(userInfo) ,

  err => reject (err));

    });
  }



//ENVIAR PASSWORD RESET
async sendPasswordResetEmail(passwordResetEmail: string){
return await this. afAuth.auth.sendPasswordResetEmail(passwordResetEmail);

}


isUserLoggedIn() {
  return JSON.parse(localStorage.getItem('user'));
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

getToken(){

  return firebase.auth().currentUser.getToken();
}


async  logout() {
     return await this.afAuth.auth.signOut();


 }


  // nuevoUsuario( user: IAppUser ) {

  //   const authData = {
  //     ...user,
  //     returnSecureToken: true,

  //   };

  //   return this.http.post(
  //     `${ this.url }/signupNewUser?key=${ this.apikey }`,
  //     authData
  //   ).pipe(
  //     map( resp => {
  //       this.guardarToken( resp['idToken'] );
  //       return resp;
  //     })
  //   );

  // }

  // private guardarToken( idToken: string ) {

  //   this.userToken = idToken;
  //   localStorage.setItem('token', idToken);

  //   let hoy = new Date();
  //   hoy.setSeconds( 3600 );

  //   localStorage.setItem('expira', hoy.getTime().toString() );


  // }


  // login( user: IAppUser ) {

  //   const authData = {
  //     ...user,
  //     returnSecureToken: true
  //   };

  //   return this.http.post(
  //     `${ this.url }/verifyPassword?key=${ this.apikey }`,
  //     authData
  //   ).pipe(
  //     map( resp => {
  //       this.guardarToken( resp['idToken'] );
  //       return resp;
  //     })
  //   );

  // }

  // leerToken() {

  //   if ( localStorage.getItem('token') ) {
  //     this.userToken = localStorage.getItem('token');
  //   } else {
  //     this.userToken = '';
  //   }

  //   return this.userToken;

  // }

  // logout() {
  //      this.afAuth.auth.signOut();
  // }

//   registerUser(email: string,  password: string ) {

// return new Promise ((resolve, reject ) => {

//   this.afAuth.auth.createUserWithEmailAndPassword(email,  password)
//   .then(user =>  {
//     resolve (user)
//   }).catch(err => console.log(reject(err)));

// });
// }

// loginEmail(email: string, password: string){

// return new Promise ((resolve, reject ) => {
//   this.afAuth.auth.signInWithEmailAndPassword(email, password)
//   .then(user => {
//     resolve (user)

//   }).catch(err => console.log(reject(err)));
// });
// }

 

//   login(provider: firebase.auth.AuthProvider) {
//     this.afAuth.auth.signInWithPopup(provider);
//   }

//   logout() {
//     this.afAuth.auth.signOut();
//   }




  // estaAutenticado(): boolean {

  //   if ( this.userToken.length < 2 ) {
  //     return false;
  //   }

  //   const expira = Number(localStorage.getItem('expira'));
  //   const expiraDate = new Date();
  //   expiraDate.setTime(expira);

  //   if ( expiraDate > new Date() ) {
  //     return true;
  //   } else {
  //     return false;
  //   }


  // }

}
