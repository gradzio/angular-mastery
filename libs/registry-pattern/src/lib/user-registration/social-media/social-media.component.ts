import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'registry-bad-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  @Input() form: FormGroup;

  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formData => this.changed.emit(this.form));
  }

}
