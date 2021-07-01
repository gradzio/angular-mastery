import { Component, Inject } from '@angular/core';
import { GETS_PRODUCTS, GetsProducts } from '../../domain/gets-products';

@Component({
  selector: 'angular-mastery-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products$ = this.getsProducts.getAll();

  constructor(@Inject(GETS_PRODUCTS) private getsProducts: GetsProducts) { }

}
