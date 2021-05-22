import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Post, PostService } from '../services/post.service';
import { User, UserService } from '../../../../users/src/lib/services/user.service';
import { Comment, CommentsService } from '../../../../comments/src/lib/services/comments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-mastery-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts$ = this.postService.getAll()
    .pipe(
      switchMap(posts =>
        this.userService.getAll()
          .pipe(
            map((users: User[]) =>
              posts.map((post: Post) =>
                ({
                  ...post,
                  user: users.find(user => user.email === post.writerEmail)
                })
              )
            )
          )
      )
    );
  showList$ = this.userService.userEmail.asObservable().pipe(map(userEmail => userEmail === null ));

  constructor(private postService: PostService, private userService: UserService, private commentsService: CommentsService) { }

  getPostComments(postId: string): Observable<Comment[]> {
    return this.commentsService.getByPostId(postId);
  }

  readMore(userEmail: string) {
    this.userService.setUserEmail(userEmail);
  }
}
