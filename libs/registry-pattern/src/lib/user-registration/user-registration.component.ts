import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormRegistry } from '../registry-approach/form.registry';

@Component({
  selector: 'angular-mastery-user-registration',
  templateUrl: './user-registration.component.html',
})
export class UserRegistrationComponent {

  credentialsForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  personalDataForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    title: new FormControl()
  });
  addressForm = new FormGroup({
    street: new FormControl(),
    houseNr: new FormControl(),
    aptNr: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl()
  });
  socialMediaForm = new FormGroup({
    facebook: new FormControl(),
    twitter: new FormControl(),
    instagram: new FormControl(),
    linkedin: new FormControl()
  });

  allFormData = new Map<string, FormGroup>([
    ['credentials', null], ['address', null], ['personalData', null], ['socialMedia', null]
  ]);

  constructor(private formRegistry: FormRegistry) {}


  onCredentialsChanged(credentialsForm: FormGroup) {
    if (credentialsForm.valid) {
      this.allFormData.set('credentials', credentialsForm);
    }
  }

  onAddressChanged(addressForm: FormGroup) {
    if (addressForm.valid) {
      this.allFormData.set('address', addressForm);
    }
  }

  onPersonalDataChanged(personalDataForm: FormGroup) {
    if (personalDataForm.valid) {
      this.allFormData.set('personalData', personalDataForm);
    }
  }

  onSocialMediaChanged(socialMediaForm: FormGroup) {
    if (socialMediaForm.valid) {
      this.allFormData.set('socialMedia', socialMediaForm);
    }
  }

  standardSendIfCompleted() {
    if (this.allFormData.get('personalData') && this.allFormData.get('address') && this.allFormData.get('credentials') && this.allFormData.get('socialMedia')) {
      console.log('Sent to the backend!', this.allFormData);
    } else {
      console.log('Some data is invalid! cannot send it')
    }
  }

  registrySendIfCompleted() {
    this.formRegistry.sendIfCompleted();
  }

}
