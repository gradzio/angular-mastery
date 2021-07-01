import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { GETS_PRODUCTS } from './domain/gets-products';
import { HttpProductsService } from './infrastructure/http-products.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  declarations: [
    ProductListComponent
  ],
  providers: [
    { provide: GETS_PRODUCTS, useClass: HttpProductsService }
  ],
  exports: [
    ProductListComponent
  ]
})
export class ArchitecturesSscModule {}
