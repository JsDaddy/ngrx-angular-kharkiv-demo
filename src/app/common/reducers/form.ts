import * as FormActions from './../actions/form';
import { Action, ActionReducer } from '@ngrx/store';

const initialState: UserForm = {
  name: '',
  email: '',
  phone: '',
  address: ''
};

export function formReducer(state: UserForm = initialState, action: FormActions.Actions): UserForm {
  switch (action.type) {

    case FormActions.UPDATE_FORM: {
      return action.payload;
    }

    case FormActions.CLEAR_FORM: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
