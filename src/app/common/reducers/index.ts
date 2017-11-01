import { ActionReducerMap } from '@ngrx/store';
import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';

import { productReducer } from './product';
import { cartReducer } from './cart';
import { authReducer } from './auth';
import { formReducer } from './form';

// tslint:disable-next-line
export const reducers: ActionReducerMap<AppState> = {
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
  form: formReducer
};

export const getCartState: MemoizedSelector<object, Product[]> = createFeatureSelector<Product[]>('cart');

export const getCartAmount: MemoizedSelector<AppState, number> = createSelector(
  getCartState,
  (items: Product[]) => items.length
);
export const getCartTotalSum: MemoizedSelector<AppState, number> = createSelector(
  getCartState,
  (items: Product[]) => items.reduce((acc: number, item: Product) => acc + item.amount * item.price, 0)
);
