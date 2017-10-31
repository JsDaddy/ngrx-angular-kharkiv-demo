import * as ProductActions from './../actions/product';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Product[] = [];

export function productReducer(state: Product[] = initialState, action: ProductActions.Actions): Product[] {
  switch (action.type) {

    case ProductActions.LOAD_PRODUCTS_SUCCESS: {
      return [...action.payload];
    }

    case ProductActions.ADD_PRODUCT_SUCCESS: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
