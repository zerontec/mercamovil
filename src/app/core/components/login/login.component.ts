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

  constructor(private authService: AuthService, 
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private flashMensaje: FlashMessagesService) { }



  ngOnInit() {
  }



  Login(form: NgForm) {

    if (  form.invalid ) { return; }

    this.authService.login(this.appUser.email, this.appUser.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/perfil']);
    }).catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });

    if (this.recordarme) {

      localStorage.setItem('email', this.appUser.email);
    }
  }


  onSubmit( form: NgForm ){
    if ( form.invalid ) { return; }

  this.authService.signupUser(this.appUser.email, this.appUser.password)
  .then((res) => {
  this.flashMensaje.show('Usuario Registrado Correctamente.',
  {cssClass: 'alert-success', timeout: 4000});
  this.router.navigate(['/perfil']);

  }).catch((err) => {
    this.flashMensaje.show(err.messages,
      {cssClass: 'alert-danger', timeouy: 4000});
      this.router.navigate(['/registro']);
  });


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

   

     



  loginGoogle() {
    this.authService.loginc(new firebase.auth.GoogleAuthProvider());
  
  }

  loginFacebook() {
    this.authService.loginc(new firebase.auth.FacebookAuthProvider());
  }

}
