import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public email:string;
  public pass: string ;

  constructor(private authService: AuthService) { }



  ngOnInit() {
  }



  onLogin(): void {

    this.authService.loginEmail(this.email, this.pass)
    .then((res) => {

    }).catch(err => console.log('err', err.message));
  }

  loginGoogle() {
    this.authService.login(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    this.authService.login(new firebase.auth.FacebookAuthProvider());
  }

}
