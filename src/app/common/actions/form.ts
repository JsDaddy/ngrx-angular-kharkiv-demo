import { Action } from '@ngrx/store';

export const CLEAR_FORM: string = '[Form] Clear form';
export const UPDATE_FORM: string = '[Form] Update form';

export class ClearForm implements Action {
  public readonly type: string = CLEAR_FORM;
  public constructor(public payload?: null) { }
}

// tslint:disable-next-line
export class UpdateForm implements Action {
  public readonly type: string = UPDATE_FORM;
  public constructor(public payload: UserForm) { }
}

export type Actions
= ClearForm
| UpdateForm;
