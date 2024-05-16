import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function capitalLetterValidators(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value as string;
  if (value[0] != value[0]?.toUpperCase()) {
    return {
      capitalLetter: true,
    };
  }

  return null;
}

export function maxPasswordCount(count: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (value.length != count) {
      return {
        passwordCount: true,
      };
    }

    return null;
  };
}
