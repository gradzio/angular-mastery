import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User {
  id: number;
  email: string;
}

@Injectable()
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }
}

@Injectable()
export class UserValidationService {
  validateUser(user: User): void {
    if (!user.email.toLowerCase().includes('@cobiro.com')) {
      throw new Error('Not cobiro user!')
    }
  }
}

@Injectable()
export class BadUserService extends LoggerService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`/v1/users/${userId}`)
      .pipe(
        tap(user => this.log(`User logged in`))
      );
  }
}

@Injectable()
export class GoodUserService {
  constructor(
    private httpClient: HttpClient,
    private logger: LoggerService,
    private validator: UserValidationService
  ) {}

  getUser(userId: number) {
    return this.httpClient.get<User>(`/v1/users/${userId}`)
      .pipe(
        tap(user => this.validator.validateUser(user)),
        tap(user => this.logger.log(`User logged in`))
      );
  }
}
