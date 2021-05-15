import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { User, UserService } from '../../../../users/src/lib/services/user.service';
import { concatMap, map, switchMap } from 'rxjs/operators';

export interface Comment {
  message: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private userService: UserService) { }

  getByPostId(postId: string): Observable<Comment[]> {
    const commentsData = {
      '1': [
        { userEmail: 'user2@gmail.com', message: 'Great work!' },
        { userEmail: 'user2@gmail.com', message: 'Read it all, looking for more!' }
      ],
      '2': [
        { userEmail: 'user1@gmail.com', message: 'Awesome Work' },
      ]
    }

    return of(commentsData[postId])
      .pipe(
        switchMap(postComments =>
          this.userService.getAll()
            .pipe(
              map(users =>
                postComments.map(comment =>
                  ({
                    message: comment.message,
                    user: users.find(user => user.email === comment.userEmail)
                  })
                )
              )
            )
        )
      )
  }
}
