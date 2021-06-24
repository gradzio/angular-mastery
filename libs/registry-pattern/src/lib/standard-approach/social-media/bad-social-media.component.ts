import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'registry-bad-social-media',
  templateUrl: './bad-social-media.component.html',
  styleUrls: ['./bad-social-media.component.css']
})
export class BadSocialMediaComponent implements OnInit {

  @Input() form: FormGroup;

  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formData => this.changed.emit(this.form));
  }

}
