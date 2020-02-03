/* import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  appUser: IAppUser = {} as IAppUser;
  TotalCarts$: Observable<ShoppingCart>;
  cart$: Observable<ShoppingCart>;
  @Input('cart') cart: ShoppingCart;


  constructor(private cartService: ShoppingCartService, private authService: AuthService) { }

 async ngOnInit() {

    this.authService.appUser$.subscribe(user => this.appUser = user);
    this.cart$ = await this.cartService.getCart();
  }

  clearAll() {
    this.cartService.clearAllCart();
  }

}
 */