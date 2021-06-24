import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormRegistry } from '../form.registry';

@Component({
  selector: 'angular-mastery-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private formRegistry: FormRegistry) { }

  ngOnInit(): void {
    this.formRegistry.register('credentials', this.form)
  }

}
