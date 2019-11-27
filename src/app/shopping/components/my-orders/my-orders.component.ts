import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAppUser } from 'shared/models/app-user';
import { AuthGuardService } from 'shared/services/auth-guard.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$: Observable<any[]>;
  userper$: Observable<any>;
  appUser: IAppUser = {} as IAppUser;

  constructor(
    private auth: AuthService,
    private orderService: OrderService,
    private authservices:AuthService) { }

  ngOnInit() {
    this.authservices.appUser$.subscribe(user => this.appUser = user);
    this.order$ = this.auth.user$
      .switchMap(user => this.orderService.getOrderByUser(user.uid));
  }





  

}
