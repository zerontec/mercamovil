import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AuthService } from 'shared/services/auth.service';
import { IAppUser } from 'shared/models/app-user';

@Component({
  selector: 'app-profile-carrito',
  templateUrl: './profile-carrito.component.html',
  styleUrls: ['./profile-carrito.component.css']
})
export class ProfileCarritoComponent implements OnInit {
  userper$: Observable<any>;
  appUser: IAppUser = {} as IAppUser;
  cart$: Observable<ShoppingCart>;


  constructor(private shoppinCart: ShoppingCartService,
    private auth: AuthService,
    private authservices: AuthService

    ) { }

  async ngOnInit() {
    this.authservices.appUser$.subscribe(user => this.appUser = user);
    this.cart$ = await this.shoppinCart.getCart();
  }

  clearAll() {
this.shoppinCart.clearAllCart();

  }

}
