import { Component, OnInit } from '@angular/core';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-profile-dire',
  templateUrl: './profile-dire.component.html',
  styleUrls: ['./profile-dire.component.css']
})
export class ProfileDireComponent implements OnInit {

  appUser: IAppUser = {} as IAppUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.appUser$.subscribe(user => this.appUser = user);


  }

}
