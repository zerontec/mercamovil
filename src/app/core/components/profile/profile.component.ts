import { Component, OnInit, Input } from '@angular/core';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  appUser: IAppUser = {} as IAppUser;
  @Input('perfil') perfil: Observable<any>;
  totalCart$: Observable<ShoppingCart>;
  @Input('cart') cart: ShoppingCart;

  constructor(private authservices: AuthService,
    private cartServices: ShoppingCartService,

    ) { }

   async ngOnInit() {
     this.authservices.appUser$.subscribe(user => this.appUser = user);
     this.totalCart$ = await this.cartServices.getCart();
  }

  logout(){

    this.authservices.logout();
  }

}
