import * as ProductActions from '../common/actions/product';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: FormGroup;
  public types: {value: string}[] = [
    {value: 'sandwich'},
    {value: 'dessert'},
    {value: 'drink'}
  ];
  public constructor(
    private _fb: FormBuilder,
    private _store: Store<any>
  ) { }

  public ngOnInit(): void {
    this.product = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', [Validators.required]]
    });
  }

  public submit(product: Product): void {
    this._store.dispatch(new ProductActions.AddProduct(product));
  }
}
