import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngm-parent-presentation',
  templateUrl: './parent-presentation.component.html',
  styleUrls: ['./parent-presentation.component.css']
})
export class ParentPresentationComponent implements OnInit {
  @Input() selected: string;

  constructor() { }

  ngOnInit(): void {}
}
