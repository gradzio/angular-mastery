import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { UserService } from '../../../../users/src/lib/services/user.service';
import { map, switchMap } from 'rxjs/operators';
import { CommentsService, Comment } from '../../../../comments/src/lib/services/comments.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'angular-mastery-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {

  userPosts$ = this.postService.getAll()
    .pipe(
      switchMap(posts =>
        this.userService.getAll()
          .pipe(
            map(users =>
              posts.map(post =>
                ({
                  ...post,
                  user: users.find(user => user.email === post.writerEmail)
                })
              )
            )
          )
      )
    );

  constructor(private postService: PostService, private userService: UserService, private commentsService: CommentsService) { }

  getPostComments(postId: string): Observable<Comment[]> {
    return this.commentsService.getByPostId(postId);
  }
}
