import { Action } from '@ngrx/store';

export const LOAD_PRODUCTS: string = '[Product] Load Products';
export const LOAD_PRODUCTS_SUCCESS: string = '[Product] Load Products Success';
export const LOAD_PRODUCTS_FAIL: string = '[Product] Load Products Success';
export const ADD_PRODUCT: string = '[Product] Add Product';
export const ADD_PRODUCT_SUCCESS: string = '[Product] Add Product Success';

export class LoadProducts implements Action {
  public readonly type: string = LOAD_PRODUCTS;
  public constructor(public payload?: null) { }
}

// tslint:disable-next-line
export class LoadProductsSuccess implements Action {
  public readonly type: string = LOAD_PRODUCTS_SUCCESS;
  public constructor(public payload: Product[]) { }
}

// tslint:disable-next-line
export class LoadProductsFail implements Action {
  public readonly type: string = LOAD_PRODUCTS_SUCCESS;
  public constructor(public payload?: null) { }
}

// tslint:disable-next-line
export class AddProduct implements Action {
  public readonly type: string = ADD_PRODUCT;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class AddProductSuccess implements Action {
  public readonly type: string = ADD_PRODUCT_SUCCESS;
  public constructor(public payload: Product) { }
}

export type Actions
= LoadProducts
| LoadProductsSuccess
| LoadProductsFail
| AddProduct
| AddProductSuccess;
