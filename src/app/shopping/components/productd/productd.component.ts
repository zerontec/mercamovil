import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { IProduct } from 'shared/models/product';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-productd',
  templateUrl: './productd.component.html',
  styleUrls: ['./productd.component.css']
})
export class ProductdComponent implements OnInit {

  product: any;
  products: IProduct[] = [];
  cart$: Observable<ShoppingCart>;


  constructor(private produS: ProductService,
    private route: ActivatedRoute,
    private cartServices: ShoppingCartService,
  ) { }

    ngOnInit() {
    
    const productId = this.route.snapshot.params['key'];
    this.geDetails(productId);



  }

  geDetails(productId: string) {

    this.produS.getById(productId).subscribe(product => {

      this.product = product;
    });

  }

}
