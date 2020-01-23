import { NgModule } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { FormsModule } from '@angular/forms';


import { AuthGuardService } from 'shared/services/auth-guard.service';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { ModalComponent } from './components/modal/modal.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuBComponent } from './components/profile/menu-b/menu-b.component';

import { DirecUserComponent } from './components/profile/direc-user/direc-user.component';

import { PageErrorComponent } from './components/page-error/page-error.component';
import { ProfileDireComponent } from './components/profile/profile-dire/profile-dire.component';
import { ProfileDeseoComponent } from './components/profile/profile-deseo/profile-deseo.component';
import { ProfileMyordersComponent } from './components/profile/profile-myorders/profile-myorders.component';
import { ComoPagarComponent } from './components/como-pagar/como-pagar.component';
import { ProfileCarritoComponent } from './components/profile/profile-carrito/profile-carrito.component';
import { NofoundComponent } from './components/nofound/nofound.component';



@NgModule({
  imports: [
    SharedModule,
    ShoppingModule,
    FormsModule,
    HttpClientModule,



    RouterModule.forChild([
    
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'como-pagar', component: ComoPagarComponent },
      { path: 'contacto', component: ContactComponent },



      {
        path: 'perfil', component: ProfileComponent, canActivate: [AuthGuardService], children: [

          { path: 'detalle', component: ProfileDireComponent },
          { path: 'info', component: ProfileDeseoComponent },
          { path: 'ordenes', component: ProfileMyordersComponent },
          { path: 'carrito', component: ProfileCarritoComponent },
           {path: '**', component: PageErrorComponent},

        ]
      },
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
    ProfileDireComponent,
    ProfileDeseoComponent,
    ProfileMyordersComponent,
    ComoPagarComponent,
    ProfileCarritoComponent,
    NofoundComponent,
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
