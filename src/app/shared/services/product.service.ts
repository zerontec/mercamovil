import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { IProduct } from 'shared/models/product';


@Injectable()
export class ProductService {
  idProduc: any;

  private basePath = '/product';

  products:FirebaseListObservable<IProduct[]> = null; //  list of objects
  product: FirebaseObjectObservable<IProduct> = null; //   single object

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products', {
      query: {
        orderByChild: 'category'
      }
    });
  }

  getProductOther(){

return this.db.list('/products');

  }

  getOfferProduct() {
   return  this.db.object('/products/' + 'oferta');

  }

  getById(productId: string) {
    return this.db.object('/products/' + productId);
  }

// Return a single observable item
getItem(key: string): FirebaseObjectObservable<IProduct> {
  const itemPath =  `${this.basePath}/${key}`;
  this.product = this.db.object(itemPath)
  return this.product;
}




  // getOneProduc(idProduc: string){
  //   this.idProduc = this.db.object( `products/${idProduc}`);
  //   return this.products = this.snapshotChanges().pipe(map(action => {
  //     if (action.payload.exists == false ){
  //       return null;
  
  //     } else {
  //       const data = action.payload.data() as IProduct;
  //       data.id = action.payload.id;
  //       return data;
  //     }
  //   }));
  // }

  updateById(id, product) {
    return this.db.object('/products/' + id).update(product);
  }

  deleteById(id) {
    return this.db.object('/products/' + id).remove();
  }


  // searchProducts(){
  //     return this.db.list('/products', {
  //       query: {
  //         orderByChild: 'title'
  //       }
  // }

 
}
