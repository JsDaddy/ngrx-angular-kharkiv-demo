import * as CartActions from './../common/actions/cart';
import * as ProductActions from './../common/actions/product';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public products: Observable<Product[]>;

  public constructor(
    private _store: Store<AppState>,
    private _matSnackBar: MatSnackBar
  ) {
    this.products = _store.select('product');
  }

  public ngOnInit(): void {
    this._store.dispatch(new ProductActions.LoadProducts());
  }

  public addProduct(product: Product): void {
    this._store.dispatch(new CartActions.AddToCart(product));
    this._matSnackBar.open(`${product.title} +1`, '', {duration: 1000});
  }

}
