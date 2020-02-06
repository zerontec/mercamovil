import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { IAppUser } from 'shared/models/app-user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verifi-email',
  templateUrl: './verifi-email.component.html',
  styleUrls: ['./verifi-email.component.css']
})
export class VerifiEmailComponent implements OnInit {


  appUser: IAppUser = {} as IAppUser;

  constructor(private auhServices: AuthService,
    private router: Router
                ) { }

  ngOnInit() {
  }

sendVerificacion(){

this.auhServices.sendEmailVerification()
.then(() => {

  this.router.navigate(['verificacion-email']);

  });

}

}
