import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, PostService } from '../../../../posts/src/lib/services/post.service';

export interface User {
  email: string;
  avatar: string;
  posts?: Post[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersData: User[] = [
    { email: 'user1@gmail.com', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png' },
    { email: 'user2@gmail.com', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' },
  ];

  public userEmail = new BehaviorSubject(null);

  constructor(private postService: PostService) {}

  getUserPosts(): Observable<User> {
    const user = this.usersData.find(user => user.email === this.userEmail.getValue());
    return this.postService.getAll()
      .pipe(
        map(posts => ({
          ...user,
          posts: posts
            .filter(post => post.writerEmail === this.userEmail.getValue())
          })
        )
      )
  }

  setUserEmail(userEmail: string) {
    this.userEmail.next(userEmail);
  }

  getByEmails(emails: string[]): Observable<User[]> {
    return of(this.usersData)
      .pipe(
        map(users => users.filter(user => emails.indexOf(user.email)))
      )
      ;
  }

  getAll(): Observable<User[]> {
    return of(this.usersData);
  }
}
