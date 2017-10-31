/* tslint:disable */
import { Action } from '@ngrx/store';

export const CLEAR_FORM = '[Form] Clear form';
export const UPDATE_FORM = '[Form] Update form';

export class ClearForm implements Action {
  public readonly type = CLEAR_FORM;
}

export class UpdateForm implements Action {
  public readonly type = UPDATE_FORM;
  public constructor(public payload: UserForm) { }
}

export type Actions
= ClearForm
| UpdateForm;
