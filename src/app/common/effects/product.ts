import { MatSnackBar } from '@angular/material';
import { ProductService } from './../../shared/services/product.service';
import * as ProductActions from './../actions/product';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductEffects {

  @Effect()
  public loadProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.LOAD_PRODUCTS)
    .switchMap(() => this._productService.getProducts())
    .map((products: Product[]) => new ProductActions.LoadProductsSuccess(products))
    .do(() => this._matSnackBar.open('Products were loaded', '', {duration: 1000}))
    .catch((err: Error) => {
      // tslint:disable-next-line
      console.log(err);
      return of(new ProductActions.LoadProductsFail());
    });

  @Effect()
  public addProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.ADD_PRODUCT)
    .map((action: any) => action.payload)
    .switchMap((product: Product) => this._productService.addProduct(product))
    .map((product: Product) => new ProductActions.AddProductSuccess(product))
    .do(() => this._matSnackBar.open('Product has been added', '', {duration: 3000}));

  public constructor(
    private actions$: Actions,
    private _productService: ProductService,
    private _matSnackBar: MatSnackBar
  ) {}
}

