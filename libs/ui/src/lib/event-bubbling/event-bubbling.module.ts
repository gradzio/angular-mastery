import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartComponent } from './anti-pattern/smart/smart.component';
import { ParentPresentationComponent } from './anti-pattern/parent-presentation/parent-presentation.component';
import { ChildPresentationComponent } from './anti-pattern/child-presentation/child-presentation.component';
import { MiddleComponent } from './anti-pattern/middle/middle.component';



@NgModule({
  declarations: [SmartComponent, ParentPresentationComponent, ChildPresentationComponent, MiddleComponent],
  imports: [
    CommonModule
  ],
  exports: [SmartComponent]
})
export class EventBubblingModule { }
