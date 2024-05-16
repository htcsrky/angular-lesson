import { AbstractControl, ValidatorFn } from '@angular/forms';

export function capitalLetterValidators(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value as string;
    if (value[0] != value[0]?.toUpperCase()) {
      return {
        capitalLetter: true,
      };
    }

    return null;
  };
}
