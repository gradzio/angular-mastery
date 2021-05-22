import { Component } from '@angular/core';
import { UserService } from '../../../../users/src/lib/services/user.service';

@Component({
  selector: 'angular-mastery-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {
  userPosts$ = this.userService.getUserPosts()

  constructor(private userService: UserService) {}

  backToList() {
    this.userService.setUserEmail(null);
  }
}
