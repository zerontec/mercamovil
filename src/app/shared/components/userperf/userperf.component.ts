import { Observable} from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-userperf',
  templateUrl: './userperf.component.html',
  styleUrls: ['./userperf.component.css']
})
export class UserperfComponent implements OnInit {

  appUser: IAppUser = {} as IAppUser;
  totalCart$: Observable<ShoppingCart>;
  @Input('cart') cart: ShoppingCart;
  @Input('userper$') userper$: Observable<any>;
  perfil: Observable<any>;

  constructor(private cartService: ShoppingCartService, private authService: AuthService) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => this.appUser = user);
    this.totalCart$ = await this.cartService.getCart();
  }

  logout() {
    this.authService.logout();
  }

}
