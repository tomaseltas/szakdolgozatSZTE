import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[mustMatch]',
  providers: [ {provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true} ]
})
export class MustMatchDirective implements Validator {
  
  @Input('mustMatch') mustMatch: string[] = [];

  
  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors{
    return this.mustMatchValidator(this.mustMatch[0], this.mustMatch[1])
    (formGroup)
  }
  mustMatchValidator(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      //return null if control haven't initialized 
      if (!control || !matchingControl ) {
        return null;
      }

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return null;
      }

      if(control.value !== matchingControl.value) {
        return matchingControl.setErrors({mustMatch: true});
      }

      return matchingControl.setErrors(null);
    }
  }

}
