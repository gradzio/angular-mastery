import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface User {
  email: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersData = [
    { email: 'user1@gmail.com', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png' },
    { email: 'user2@gmail.com', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' },
  ];

  getByEmail(email: string): Observable<User[]> {
    return of(this.usersData).pipe(
      map(users => users.filter(user => user.email === email))
    );
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
