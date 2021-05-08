import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ParentPresentationComponent } from '../parent-presentation/parent-presentation.component';

@Component({
  selector: 'ngm-child-presentation',
  templateUrl: './child-presentation.component.html',
  styleUrls: ['./child-presentation.component.css']
})
export class ChildPresentationComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<string>();

  constructor(private parent: ParentPresentationComponent) { }

  ngOnInit(): void {
  }

  onButtonClicked(id: string): void {
    this.buttonClicked.emit(id);
    this.parent.selected = id;
  }

  isSelected(id: string): boolean {
    return this.parent.selected === id;
  }
}
