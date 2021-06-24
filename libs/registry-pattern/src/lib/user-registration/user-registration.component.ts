import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  allFormData = {
    credentials: null,
    address: null,
    personalData: null,
    socialMedia: null
  }

  onCredentialsChanged(credentialsForm: FormGroup) {
    if (credentialsForm.valid) {
      this.allFormData.credentials = credentialsForm.value;
    }
  }

  onAddressChanged(addressForm: FormGroup) {
    if (addressForm.valid) {
      this.allFormData.address = addressForm.value;
    }
  }

  onPersonalDataChanged(personalDataForm: FormGroup) {
    if (personalDataForm.valid) {
      this.allFormData.personalData = personalDataForm.value;
    }
  }

  onSocialMediaChanged(socialMediaForm: FormGroup) {
    if (socialMediaForm.valid) {
      this.allFormData.socialMedia = socialMediaForm.value;
    }
  }

  sendIfCompleted() {
    if (this.allFormData.personalData && this.allFormData.address && this.allFormData.credentials && this.allFormData.socialMedia) {
      console.log('Sent to the backend!', this.allFormData);
    } else {
      console.log('Some data is invalid! cannot send it')
    }
  }

}
