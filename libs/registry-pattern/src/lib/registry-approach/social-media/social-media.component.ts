import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormRegistry } from '../form.registry';

@Component({
  selector: 'angular-mastery-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  form = new FormGroup({
    facebook: new FormControl(),
    twitter: new FormControl(),
    instagram: new FormControl(),
    linkedin: new FormControl()
  });
  constructor(private formRegistry: FormRegistry) { }

  ngOnInit(): void {
    this.formRegistry.register('socialMedia', this.form)
  }

}
