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


//*************** */

selectedVal: string;
responseMessage: string = '';
responseMessageType: string = '';
isForgotPassword: boolean;
userDetails: any;




  constructor(private authService: AuthService,
     private router:Router,
     private flashMensaje: FlashMessagesService   ) { 

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
      public onValChange(val: string) {
        this.showMessage('', '');
        this.selectedVal = val;
      }

        // Check localStorage is having User Data
        isUserLoggedIn() {
          this.userDetails = this.authService.isUserLoggedIn();
        }



  ngOnInit() {


  }

onSubmit( form: NgForm ){
  if ( form.invalid ) { return; }
  this.authService.signupUser(this.appUser.email, this.appUser.password)
  .then(res => {
  //envio verificacion de email 
  this.authService.sendEmailVerification().then (res => {
 console.log(res);
    this.isForgotPassword= false;
    this.showMessage('exitoso', 'Registro Exitoso porfavor Verifique su Email');

  }, err => {
  this.showMessage('Error', err.message);
  });

  this.isUserLoggedIn();

this.flashMensaje.show('Usuario Registrado Correctamente.',
{cssClass: 'alert-success', timeout: 4000});
this.router.navigate(['/Productos']);
console.log(res);
}).catch((err) => {
  this.flashMensaje.show(err.message,
    {cssClass: 'alert-danger', timeout: 4000});
    this.router.navigate(['/registro']);

});


  if (this.recordarme) {

    localStorage.setItem('email', this.appUser.email);
  }

}


sendVerificacion(){

  this.authService.sendEmailVerification()
  .then(() => {
  
    this.router.navigate(['verificacion-email']);
  
    });
  
  }




}
