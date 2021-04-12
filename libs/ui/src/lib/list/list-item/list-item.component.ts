import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit, Renderer2
} from '@angular/core';
import { ListComponent } from '../list.component';

@Component({
  selector: 'ngm-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  constructor() { }
}
