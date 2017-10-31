/* tslint:disable */
import { Action } from '@ngrx/store';

export const LOAD_PRODUCTS = '[Product] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';
export const LOAD_PRODUCTS_FAIL = '[Product] Load Products Success';
export const ADD_PRODUCT = '[Product] Add Product';
export const ADD_PRODUCT_SUCCESS = '[Product] Add Product Success';

export class LoadProducts implements Action {
  public readonly type = LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  public readonly type = LOAD_PRODUCTS_SUCCESS;
  public constructor(public payload: Product[]) { }
}

export class LoadProductsFail implements Action {
  public readonly type = LOAD_PRODUCTS_FAIL;
  public constructor(public payload?: null) { }
}

export class AddProduct implements Action {
  public readonly type = ADD_PRODUCT;
  public constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
  public readonly type = ADD_PRODUCT_SUCCESS;
  public constructor(public payload: Product) { }
}

export type Actions
= LoadProducts
| LoadProductsSuccess
| LoadProductsFail
| AddProduct
| AddProductSuccess;
