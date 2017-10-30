import * as CartActions from './../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: Product[] = [];

export function cartReducer(products: Product[] = initialState, action: any): Product[] {
  switch (action.type) {

    case CartActions.ADD_TO_CART: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === action.payload.id);
      if (itemIndex !== -1) {
        const updatedItem: Product = {...action.payload, amount: products[itemIndex].amount + 1};
        products.splice(itemIndex, 1, updatedItem);
        return [...products];
      }
      return [...products, ...{...action.payload, amount: 1}];
    }

    case CartActions.DELETE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === action.payload.id);
      products.splice(itemIndex, 1);
      return [...products];
    }

    case CartActions.REDUCE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === action.payload.id);
      if (action.payload.amount === 0) {
        return [...products];
      }
      const updatedItem: Product = {...action.payload, amount: action.payload.amount - 1};
      products.splice(itemIndex, 1, updatedItem);
      return [...products];
    }

    case CartActions.INCREASE_ITEM: {
      const itemIndex: number = products.findIndex((product: Product) => product.id === action.payload.id);
      const updatedItem: Product = {...action.payload, amount: action.payload.amount + 1};
      products.splice(itemIndex, 1, updatedItem);
      return [...products];
    }

    default: {
      return products;
    }
  }
}
