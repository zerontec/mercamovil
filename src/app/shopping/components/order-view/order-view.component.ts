import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit, Input } from '@angular/core';
import {IPay} from 'shared/models/pay';
import { Router, ActivatedRoute } from '@angular/router';
import {PayService} from 'shared/services/pay.service';
import { AuthService } from 'shared/services/auth.service';
import { IAppUser } from 'shared/models/app-user';
@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  pay:IPay = {} as IPay;
  id;
  disableBtn: boolean;

  appUser: IAppUser = {} as IAppUser;
  orderId;
  order$: Observable<any>;

  userId: string;
  userName: string;
  userSubscription: Subscription;

estado = 'info';



  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService, 
    private  payServices: PayService,
    private router: Router,
    private auth: AuthService,
    ) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(user => this.appUser = user);
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.order$ = this.orderService.getOrderById(this.orderId);

    this.userSubscription = this.auth.user$
    .subscribe(user => {
      this.userId = user.uid;
      this.userName = user.displayName || user.email;
    });

  }

  save(datos) {

    let pay = new IPay(this.userId, this.userName, datos );
 
     this.payServices.create(pay)
       .then(ref => {
         this.router.navigate(['pay-success', ref.key]);
       })
      .catch(err => {
         this.disableBtn = false;
      console.log(err);
     });
     } 

}
