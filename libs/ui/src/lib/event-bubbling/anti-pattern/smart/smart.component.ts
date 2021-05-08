import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngm-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(value: string) {
    // Do Service call or any other logic
    alert(value);
  }
}
