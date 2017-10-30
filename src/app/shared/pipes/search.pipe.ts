import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(products: Product[], queryString?: string): Product[] {

    if (!queryString) {
      return products;
    }
    return products.filter((product: Product) => {
      return  product.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
    });
  }

}
