import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  public constructor(
    private _db: AngularFireDatabase
  ) { }

  public getProducts(): Observable<Product[]> {
    return this._db.list('/products').valueChanges();
  }

  public getProduct(id: string): Observable<Product> {
    return this._db.object(`/products/${id}`).valueChanges();
  }

  public addProduct(product: Product): Observable<Product> {
    return Observable.of(product);
    // return this._db.list(`/products`).push(product)
  }
}
