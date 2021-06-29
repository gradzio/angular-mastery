import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [
    ProductListComponent
  ],
})
export class ArchitecturesSscModule {}
