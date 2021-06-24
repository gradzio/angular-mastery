import { Component, OnInit } from '@angular/core';
import { FormRegistry } from '../form.registry';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'angular-mastery-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    title: new FormControl()
  });

  constructor(private formRegistry: FormRegistry) { }

  ngOnInit(): void {
    this.formRegistry.register('personalData', this.form)
  }
}
