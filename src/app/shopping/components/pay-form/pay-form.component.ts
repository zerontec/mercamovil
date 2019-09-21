import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import {IPay} from 'shared/models/pay';
import {PayService} from 'shared/services/pay.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.css']
})
export class PayFormComponent implements OnInit {

  pay:IPay = {} as IPay;
  id;
  disableBtn: boolean;
  userId: string;
  userName: string;
  userSubscription: Subscription;

  constructor(
    private payServices: PayService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,

  ) { }

  ngOnInit() {

    this.userSubscription = this.auth.user$
      .subscribe(user => {
        this.userId = user.uid;
        this.userName = user.displayName || user.email;
      });

    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.payServices.getById(this.id)
      .take(1)
      .subscribe(pay => this.pay = pay);



    }

  }

  save(datos) {

   let pay = new IPay(this.userId, this.userName, datos );

    this.payServices.create(pay)
      .then(ref => {
        this.router.navigate(['order-success', ref.key]);
      })
     .catch(err => {
        this.disableBtn = false;
     console.log(err);
    });
    } 

/**save(pay) {


 if (this.id) this.payServices.updateById(this.id, pay);
 else this.payServices.create(pay )
 .then(ref => {
  this.router.navigate(['order-success', ref.key]);
})//cambiar a pago recibido 

}

delete(){

if (confirm('Esta seguro de borrar este registro')) {

  if(this.id) {

    this.payServices.deleteById(this.id);
    this.router.navigate(['/pay']);

  }
}

}*/


}
