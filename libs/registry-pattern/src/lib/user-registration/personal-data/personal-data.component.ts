import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'registry-bad-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  @Input() form: FormGroup;

  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formData => this.changed.emit(this.form));
  }

}
