import { Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'angular-mastery-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'anti-patterns';

  products$ = of([
    { name: 'Product 1', price: '$1' },
    { name: 'Product 2', price: '$2' },
    { name: 'Product 3', price: '$3' }
  ]);

  users$ = of([
    { email: 'email1@cobiro.com' },
    { email: 'email2@cobiro.com' },
    { email: 'email3@cobiro.com' }
  ]);
}
