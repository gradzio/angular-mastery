import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormRegistry {
  private allForms: Map<string, FormGroup>
  register(id: string, formData: FormGroup): void {
    this.allForms.set(id, formData);
  }

  sendIfCompleted() {
    if ([...this.allForms].find(([formId, form]) => !form.valid)) {
      console.log('Some data is invalid! cannot send it')
    } else {
      console.log('Sent to the backend!', this.allForms);
    }
  }
}
