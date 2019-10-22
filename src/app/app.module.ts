import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AdminModule } from 'app/admin/admin.module';
import { CoreModule } from 'app/core/core.module';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import {ToastrService} from './shared/services/toastr.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    FlashMessagesModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent }
    ])
  ],
  providers: [ToastrService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
