import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { ModalComponent } from './components/modal/modal.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import {MenuBComponent} from './components/menu-b/menu-b.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { DirecUserComponent } from './components/direc-user/direc-user.component';
import { FormsModule } from '@angular/forms';
import { PageErrorComponent } from './components/page-error/page-error.component';

@NgModule({
  imports: [
    SharedModule,
    ShoppingModule,
   FormsModule,

    RouterModule.forChild([

      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent },
      {path: 'registro', component: RegisterComponent },
      {path: 'about', component: AboutComponent},
      {path: 'perfil', component: ProfileComponent, canActivate: [AuthGuardService]},
      //{path: '**', component: PageErrorComponent}
    ])
  ],
  declarations: [
    BsNavbarComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    AboutComponent,
    FaqComponent,
    ErrorComponent,
    ContactComponent,
    ProfileComponent,
    RegisterComponent,
    DirecUserComponent,
    MenuBComponent,
    PageErrorComponent,
  ],
  exports: [
    BsNavbarComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    RouterModule,
    MenuBComponent,
    PageErrorComponent

  ]

})
export class CoreModule { }
