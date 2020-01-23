import { Component, OnInit } from '@angular/core';
import { Order } from 'shared/models/order';
import {OrderService  } from 'shared/services/order.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

 
 order:Order = {} as Order;
 id;
 
 
  constructor(  
    private orderservices:OrderService,
    private router: Router,
    private route: ActivatedRoute) { 




    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.orderservices.getOrderById(this.id)
        .take(1)
        .subscribe(order => this.order = order);


  }
}

  save(order) {
    if (this.id) this.orderservices.updateById(this.id, order);


    this.router.navigate(['/order']);
  }
}

