import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'registry-bad-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() form: FormGroup;

  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formData => this.changed.emit(this.form));
  }

}
