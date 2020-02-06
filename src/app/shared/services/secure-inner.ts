import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable()

export class SecureInner implements CanActivate {

    constructor(
      public authService: AuthService,
      public router: Router
    ) { }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isUserLoggedIn) {
         window.alert('You are not allowed to access this URL!');
         this.router.navigate(['/Productos']);
      }
      return true;
    }
}

