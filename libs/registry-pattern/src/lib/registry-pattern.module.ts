import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CredentialsComponent } from './user-registration/credentials/credentials.component';
import { AddressComponent } from './user-registration/address/address.component';
import { PersonalDataComponent } from './user-registration/personal-data/personal-data.component';
import { SocialMediaComponent } from './user-registration/social-media/social-media.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  declarations: [
    UserRegistrationComponent,
    CredentialsComponent,
    PersonalDataComponent,
    AddressComponent,
    SocialMediaComponent,
    CredentialsComponent,
    AddressComponent,
    PersonalDataComponent,
    SocialMediaComponent
  ],
  exports: [UserRegistrationComponent]
})
export class RegistryPatternModule {}
