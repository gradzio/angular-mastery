import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { PostsComponent } from './posts/posts.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    UserPostsComponent,
    PostsComponent
  ],
  exports: [
    PostsComponent,
    UserPostsComponent
  ]
})
export class SpaghettiCodePostsModule {}
