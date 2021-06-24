import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormRegistry } from '../form.registry';

@Component({
  selector: 'angular-mastery-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  form = new FormGroup({
    street: new FormControl(),
    houseNr: new FormControl(),
    aptNr: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl()
  });

  constructor(private formRegistry: FormRegistry) { }

  ngOnInit(): void {
    this.formRegistry.register('address', this.form)
  }

}
