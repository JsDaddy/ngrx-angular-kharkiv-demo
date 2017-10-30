import { Action } from '@ngrx/store';

export const ADD_TO_CART: string = '[Cart] Add Product To Cart';
export const DELETE_ITEM: string = '[Cart] Delete Item';
export const REDUCE_ITEM: string = '[Cart] Reduce Item';
export const INCREASE_ITEM: string = '[Cart] Increase Item';

// tslint:disable-next-line
export class AddToCart implements Action {
  public readonly type: string = ADD_TO_CART;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class DeleteItem implements Action {
  public readonly type: string = DELETE_ITEM;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class ReduceItem implements Action {
  public readonly type: string = REDUCE_ITEM;
  public constructor(public payload: Product) { }
}

// tslint:disable-next-line
export class IncreaseItem implements Action {
  public readonly type: string = INCREASE_ITEM;
  public constructor(public payload: Product) { }
}

export type Actions
  = AddToCart
  | DeleteItem
  | ReduceItem
  | IncreaseItem;
