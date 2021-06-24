import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'registry-bad-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  @Input() form: FormGroup;

  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formData => this.changed.emit(this.form));
  }

}
