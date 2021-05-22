import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../apps/anti-patterns/src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  email: string;
  lastLogin: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userSubject = new BehaviorSubject<User>(null);
  get user$(): Observable<User> {
    return this.userSubject;
  }

  constructor(private client: HttpClient) { }

  login(email: string, password: string): void {
    this.client.post<User>(`${environment.userService}/v1/login`, { email, password })
      .subscribe(user => this.userSubject.next(user));
  }
}
