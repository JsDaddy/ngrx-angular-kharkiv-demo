import { ActionReducerMap } from '@ngrx/store';

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
