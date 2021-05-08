import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { EventBubblingModule } from './event-bubbling/event-bubbling.module';

@NgModule({
  imports: [CommonModule, EventBubblingModule],
  declarations: [
    ListComponent,
    ListItemComponent,
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    EventBubblingModule
  ]
})
export class UiModule {}
