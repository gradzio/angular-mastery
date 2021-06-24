import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadCredentialsComponent } from './standard-approach/credentials/bad-credentials.component';
import { BadPersonalDataComponent } from './standard-approach/personal-data/bad-personal-data.component';
import { BadAddressComponent } from './standard-approach/address/bad-address.component';
import { BadSocialMediaComponent } from './standard-approach/social-media/bad-social-media.component';
import { AddressComponent } from './registry-approach/address/address.component';
import { CredentialsComponent } from './registry-approach/credentials/credentials.component';
import { PersonalDataComponent } from './registry-approach/personal-data/personal-data.component';
import { SocialMediaComponent } from './registry-approach/social-media/social-media.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  declarations: [
    UserRegistrationComponent,
    BadCredentialsComponent,
    BadPersonalDataComponent,
    BadAddressComponent,
    BadSocialMediaComponent,
    AddressComponent,
    CredentialsComponent,
    PersonalDataComponent,
    SocialMediaComponent
  ],
  exports: [UserRegistrationComponent]
})
export class RegistryPatternModule {}
