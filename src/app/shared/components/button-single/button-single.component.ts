import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { IProduct } from 'shared/models/product';
@Component({
  selector: 'app-button-single',
  templateUrl: './button-single.component.html',
  styleUrls: ['./button-single.component.css']
})
export class ButtonSingleComponent implements OnInit {

    @Input('product') product: IProduct;
    @Input('width') width = '20';
    @Input('show-actions') showActions = true;
    @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {




  }




}
