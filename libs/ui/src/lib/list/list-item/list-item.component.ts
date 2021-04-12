import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngm-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  constructor() { }
}
