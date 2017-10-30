import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  public transform(products: Product[]): string[] {
    //  return  [...new Set(products.map(item => item.type)) as any]; why???
    const types: string[] = products
      .map(item => item.type)
      .filter((value, index, self) => self.indexOf(value) === index);
    types.push('all');
    types.sort();
    return types;
  }

}
