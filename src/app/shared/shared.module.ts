import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserperfComponent} from '../core/components/profile/userperf/userperf.component';
import { ListOrderViewComponent } from './components/list-order-view/list-order-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { PayService} from './services/pay.service';

import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from './services/toastr.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DataService} from './services/data.service';
import { FilterPipe } from './pipes/filter.pipe';
import { InfoPagesService } from './services/info-pages.service';
import { ButtonSingleComponent } from './components/button-single/button-single.component';
import { ModalsComponent } from './components/modals/modals.component';
import { SppinerComponent } from './components/sppiner/sppiner.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FlashMessagesModule,
    BrowserAnimationsModule


  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ListOrderViewComponent,
    UserperfComponent,
    SliderComponent,
    FilterPipe,
    ButtonSingleComponent,
    ModalsComponent,
    SppinerComponent,
   
 
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    PayService,
    ToastrService,
    FlashMessagesService,
    DataService,
    InfoPagesService


  ],
  exports : [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot().ngModule,
    ProductCardComponent,
    ProductQuantityComponent,
    ListOrderViewComponent,
    UserperfComponent,
    SliderComponent,
    ButtonSingleComponent,
    ModalsComponent,
    SppinerComponent
  ]
})
export class SharedModule { }
