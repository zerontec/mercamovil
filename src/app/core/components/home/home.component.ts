import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import { IProduct } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  products: IProduct[] = [];
  public product = '';
 

  constructor(private productServices: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService,) { }


    async ngOnInit() {
      // this.cart$ = await this.cartService.getCart();
      // this.populateProducts();

      this.productServices.getProductOther().subscribe(products => {

        console.log('products', products);
        this.products = products;
      })
    }


       

    // private populateProducts() {
    //   this.productServices.getAll()
    //     .switchMap(products => {
    //       this.products = products;
    //       return this.route.queryParamMap;
    //     })
    //     .subscribe(params => {
    //       this.category = params.get('category');
    //       this.applyFilter();
    //     });
    // }


    

    // private applyFilter() {
    //   this.filteredProducts = !this.category ? this.products
    //     : this.products.filter(e => e.category === this.category);
    // }
  }
