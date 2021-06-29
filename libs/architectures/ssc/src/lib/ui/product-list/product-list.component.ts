import { Component, Inject, OnInit } from '@angular/core';
import { GETS_PRODUCTS, GetsProducts } from '../../domain/gets-products';

@Component({
  selector: 'angular-mastery-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {

  products$ = this.getsProducts.getAll();

  constructor(@Inject(GETS_PRODUCTS) private getsProducts: GetsProducts) { }

}
