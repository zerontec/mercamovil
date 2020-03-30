import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { IAppUser } from 'shared/models/app-user';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'shared/services/toastr.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  appUser: IAppUser = {} as IAppUser;
  public email:string;
  public password: string ;
  recordarme = false;

//*************** */
  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = ''
  isForgotPassword: boolean;
  userDetails: any;
 



  constructor(private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute,
    private flashMensaje: FlashMessagesService) { 

this.selectedVal = 'login';
this.isForgotPassword = false;
    }

    //metodo que muestra mensaje 

    showMessage( type, msg){
this.responseMessageType = type;
this.responseMessage = msg;
setTimeout(( ) => {
this.responseMessage = '';

}, 2000);

    }

// Called on switching Login/ Register tabs
//para cambio de login a register misma ventana 
public onValChange(val: string) {
  this.showMessage('', '');
  this.selectedVal = val;
}

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.appUser = this.authService.isUserLoggedIn();
  }



  ngOnInit() {

    if( localStorage.getItem('email')) {

      this.appUser.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }



  Login(form: NgForm) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.authService.login(this.appUser.email, this.appUser.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
      // this.router.navigate(['/Productos']);
    }).catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });

    if (this.recordarme) {

      localStorage.setItem('email', this.appUser.email);
    }
  }


forgotPassword(){

this.authService.sendPasswordResetEmail(this.appUser.email)
.then(res => {

  console.log(res);
  this.isForgotPassword = false;
this.flashMensaje.show('Porfavor revise su email para Resetear Password')

  this.showMessage(' error', ' porfavor revise su email');
}, err => {
  this.flashMensaje.show(err.messages,
    {cssClass: 'alert-danger', timeouy: 4000});
  this.showMessage( 'error', err.message);
});
}



  //Inicio con redes sociales 

  loginGoogle() {
    this.authService.loginc(new firebase.auth.GoogleAuthProvider());

  }

  loginFacebook() {
    this.authService.doFacebookLogin(new firebase.auth.FacebookAuthProvider());
  }

}




    // PARA CUANDO LOGRE CONFIGURAR TOAST
    // .then((res) => {
    //   this.toast.success('Authentication Success', 'Logging in please wait');

    //   const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

    //   setTimeout(() => {
    //     this.router.navigate([returnUrl || '/']);
    //   }, 1500);

    //   this.router.navigate(['/']);
    // })
    // .catch((err) => {
    //   this.toast.error('Authentication Failed', 'Invalid Credentials, Please Check your credentials');
    // });


    //this.router.navigateByUrl('/perfil');

    // tslint:disable-next-line:no-unused-expression




