import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, Input} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  navbarCollapsed: boolean;
  appUser: IAppUser = {} as IAppUser;
  totalCart$: Observable<ShoppingCart>;
  @Input('cart') cart: ShoppingCart;


  constructor(private cartService: ShoppingCartService, 
    private authService: AuthService,
    private flashMensaje: FlashMessagesService) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => this.appUser = user);
    this.totalCart$ = await this.cartService.getCart();
  }

  logout() {
    this.authService.logout()

    .then(res => {
      console.log(res);
      this.flashMensaje.show('Hasta Pronto .',
      {cssClass: 'alert-success', timeout: 4000});
  });

}

}
