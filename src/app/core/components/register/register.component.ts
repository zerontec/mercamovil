import { Component, OnInit } from '@angular/core';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  appUser: IAppUser = {} as IAppUser;
  public email: string;
  public password: string ;
  public name: string;
  recordarme = false;
  acuerdo= false;

  constructor(private authService: AuthService,
     private router:Router,
     private flashMensaje: FlashMessagesService   ) { }



  ngOnInit() {


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


  if (this.recordarme) {

    localStorage.setItem('email', this.appUser.email);
  }

}


}
