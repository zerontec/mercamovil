import { Component, OnInit } from '@angular/core';
import {IAppUser} from 'shared/models/app-user';
import { Observable } from 'rxjs/Observable';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
@Component({
  selector: 'app-profile-myorders',
  templateUrl: './profile-myorders.component.html',
  styleUrls: ['./profile-myorders.component.css']
})
export class ProfileMyordersComponent implements OnInit {

  order$: Observable<any[]>;
  userper$: Observable<any>;
  appUser: IAppUser = {} as IAppUser;
  showSpinner: boolean = true;
  
  constructor( private auth: AuthService,
                private orderservice: OrderService,
                private authservices: AuthService) { }

  ngOnInit() {

    this.authservices.appUser$.subscribe(user => this.appUser = user);
    this.order$ = this.auth.user$
    .switchMap(user => this.orderservice.getOrderByUser(user.uid));
    this.order$.subscribe(() => this.showSpinner = false);
  }
logout() {

  this.authservices.logout();
}
}
