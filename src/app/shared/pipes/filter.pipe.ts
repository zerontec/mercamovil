import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProducts = [];
    for(const product of value ){

if (product.title.indexOf(arg) > -1) {

  resultProducts.push(product);

}

    }
    return resultProducts;

  }

}
