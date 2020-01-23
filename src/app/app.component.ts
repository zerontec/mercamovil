import { UserService } from 'shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';
import { fadeAnimation } from './shared/animations/fadeInRoute';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})



export class AppComponent {
  userService: any;

  constructor(authService: AuthService, userService: UserService, route: ActivatedRoute, router: Router) {
    authService.user$.subscribe((user) => {
      if (user) {
        userService.add(user);
        let returnUrl = route.snapshot.queryParamMap.get('returnUrl');
        if (returnUrl || router.url === '/login')  {
          router.navigate([returnUrl || '/']);
        }
      }
    });


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }

  }

  setGeoLocation(position: any) {
    this.userService.setLocation(
      position['coords'].latitude,
      position['coords'].longitude
    );
  }



}
