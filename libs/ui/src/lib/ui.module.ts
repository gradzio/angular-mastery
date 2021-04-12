import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  exports: [
    ListComponent,
    ListItemComponent
  ]
})
export class UiModule {}
