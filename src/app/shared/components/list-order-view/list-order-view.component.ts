import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { IAppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'list-order-view',
  templateUrl: './list-order-view.component.html',
  styleUrls: ['./list-order-view.component.css']
})
export class ListOrderViewComponent implements OnInit {



  appUser: IAppUser = {} as IAppUser;
  @Input('order$') order$: Observable<any[]>;
  constructor( private authservices:AuthService) { }

  ngOnInit() {
    this.authservices.appUser$.subscribe(user => this.appUser = user);
  }

}
