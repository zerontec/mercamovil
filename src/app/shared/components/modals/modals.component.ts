import { Component, OnInit } from '@angular/core';
import { IProduct } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {


  product: any;
  products: IProduct[] = [];
  
  constructor( private produS: ProductService,
    private route: ActivatedRoute,) { }

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