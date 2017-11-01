import * as CartActions from './../common/actions/cart';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/reducers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public sum$: Observable<number>;
  public cart: Observable<Product[]>;

  public constructor(
    private _store: Store<AppState>
  ) {
    this.cart = _store.select('cart');
  }

  public ngOnInit(): void {
    this.sum$ = this._store.select(fromRoot.getCartTotalSum);
  }

  public removeItem(product: Product): void {
    this._store.dispatch(new CartActions.DeleteItem(product));
  }

  public reduceItem(product: Product): void {
    this._store.dispatch(new CartActions.ReduceItem(product));
  }

  public increaseItem(product: Product): void {
    this._store.dispatch(new CartActions.IncreaseItem(product));
  }

}
