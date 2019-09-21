import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccssComponent } from './components/order-succss/order-succss.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { PagesViewComponent } from './components/pages-view/pages-view.component';
import { PayFormComponent } from './components/pay-form/pay-form.component';
import { PaySucssComponent } from './components/pay-sucss/pay-sucss.component';
import { MyPaysComponent } from './components/my-pays/my-pays.component';
import { AuthService } from 'shared/services/auth.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
    { path: 'cart', component: ShopingCartComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'myorders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
    { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService] },
    { path: 'order-success/:id', component: OrderSuccssComponent, canActivate: [AuthGuardService] },
    { path: 'order-details/:id', component: OrderViewComponent, canActivate: [AuthGuardService] },
    { path: 'pay/new', component: PayFormComponent, canActivate: [AuthGuardService] },
    { path: 'pay/:id', component: PagesViewComponent, canActivate: [AuthGuardService] },
    {path: 'pay-success/:id', component: PaySucssComponent, canActivate: [AuthGuardService]}
  ])
  ],
  declarations: [
    ProductsComponent,
    CheckOutComponent,
    OrderSuccssComponent,
    ShopingCartComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderViewComponent,
    PagesViewComponent,
    PayFormComponent,
    PaySucssComponent,
    MyPaysComponent
  ],
  exports: [

    ShopingCartComponent,


  ]

})
export class ShoppingModule { }
