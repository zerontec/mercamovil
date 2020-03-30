import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Order } from 'shared/models/order';

@Injectable()
export class OrderService {
  [x: string]: any;

  orders:FirebaseListObservable<Order[]> = null; //  list of objects
  order: FirebaseObjectObservable<Order> = null; //   single object


  constructor(private db: AngularFireDatabase,
    private cartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/order').push(order);
    this.cartService.clearAllCart();
    return result;
  }

  getAllOrders() {
    return this.db.list('/order');
  }

  getOrderByUser(userId: string) {
    return this.db.list('/order', {
      query: {
        orderByChild: 'user/userId',
        equalTo: userId
      }
    });
  }

  getOrderById(orderId: string) {
    return this.db.object('/order/' + orderId)
  }

  updateById(orderId, order){

    return this.db.object('/order/' + orderId).update(order);



  }


  deleteById(orderId) {
    return this.db.object('/order/' + orderId).remove();
  }



}
