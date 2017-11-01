import { product } from './mocks/cart';
import * as CartActions from '../../actions/cart';
import { Action, ActionReducer } from '@ngrx/store';
import { cartReducer } from '../cart';

describe('cartReducer', () => {

  it('should handle ADD_TO_CART', () => {
    const initialState: Product[] = [];
    const expected: Product[] = [{...product, amount: 1}];

    expect(cartReducer(initialState, new CartActions.AddToCart(product)))
    .toEqual(expected);
  });

  it('should handle ADD_TO_CART +1', () => {
    const initialState: Product[] = [{...product, amount: 1}];
    const expected: Product[] = [{...product, amount: 2}];

    expect(cartReducer(initialState, new CartActions.AddToCart(product)))
    .toEqual(expected);
  });

  it('should handle DELETE_ITEM', () => {
    const initialState: Product[] = [product];
    const expected: Product[] = [];

    expect(cartReducer(initialState, new CartActions.DeleteItem(product)))
    .toEqual(expected);
  });

  it('should handle REDUCE_ITEM', () => {
    const initialState: Product[] = [{...product, amount: 4}];
    const expected: Product[] = [{...product, amount: 3}];

    expect(cartReducer(initialState, new CartActions.ReduceItem({...product, amount: 4})))
    .toEqual(expected);
  });

  it('should handle INCREASE_ITEM', () => {
    const initialState: Product[] = [{...product, amount: 1}];
    const expected: Product[] = [{...product, amount: 2}];

    expect(cartReducer(initialState, new CartActions.IncreaseItem({...product, amount: 1})))
    .toEqual(expected);
  });

});

