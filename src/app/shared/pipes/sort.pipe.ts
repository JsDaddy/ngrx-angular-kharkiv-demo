import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(products: Product[], queryString?: string): Product[] {
    if (!queryString || queryString === 'all') {
      return products;
    }
    return products.filter((product: Product) => {
      return  product.type.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
    });
  }

}
