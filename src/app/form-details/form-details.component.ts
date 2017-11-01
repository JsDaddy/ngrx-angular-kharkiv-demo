import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as FormActions from '../common/actions/form';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  public userForm: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<AppState>
  ) {
    this.userForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {
    this._store.select('form').take(1).subscribe((value: UserForm) => {
      Object.keys(value).forEach((name: string) => {
        this.userForm.controls[name].setValue(value[name]);
      });
    });

    this.userForm
      .valueChanges
      .distinctUntilChanged()
      .debounceTime(1000)
      .subscribe((value: UserForm) => this._store.dispatch(new FormActions.UpdateForm(value)));
  }

  public createOrder(order: FormGroup): void {
    // get cart and send to server
    this._store.dispatch(new FormActions.ClearForm());
  }
}

