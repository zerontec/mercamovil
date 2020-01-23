import { Observable } from 'rxjs/Observable';
import { IAppUser } from '../models/app-user';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  location = {
    lat: null,
    lon: null
  };


  constructor(private db: AngularFireDatabase) { }

  add(user: firebase.User) {
    this.db.object('/user/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      foto: user.photoURL,


    });
  }

  get(uid: string) {
    return this.db.object('/user/' + uid) as Observable<IAppUser>;

  }


setLocation( lat, lon){
  this.location.lat = lat;
  this.location.lon = lon;



}

}
