import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [
    UserPostsComponent
  ],
  exports: [
    UserPostsComponent
  ]
})
export class SpaghettiCodePostsModule {}
