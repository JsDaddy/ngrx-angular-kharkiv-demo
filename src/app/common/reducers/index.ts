import { ActionReducerMap } from '@ngrx/store';
import { createFeatureSelector, createSelector  } from '@ngrx/store';

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

export const getCartState: any = createFeatureSelector<Product[]>('cart');

export const getCartAmount: any = createSelector(
  getCartState,
  (items: Product[]) => items.length
);
export const getCartTotalSum: any = createSelector(
  getCartState,
  (items: Product[]) => items.reduce((acc: number, item: Product) => acc + item.amount * item.price, 0)
);
