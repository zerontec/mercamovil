import { Component, OnInit, Input } from '@angular/core';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  appUser: IAppUser = {} as IAppUser;
  @Input('perfil') perfil: Observable<any>;

  constructor(private authservices: AuthService) { }

   async ngOnInit() {
     this.authservices.appUser$.subscribe(user => this.appUser = user);
  }

  logout(){

    this.authservices.logout();
  }

}
