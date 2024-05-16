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

export function matchPassword(
  password: string,
  secondPassword: string
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const firstPassword: string = control.get(password)?.value;
    const confirmPassword: string = control.get(secondPassword)?.value;

    if (
      firstPassword !== confirmPassword ||
      firstPassword != null ||
      secondPassword != null
    ) {
      control.get(secondPassword)!.setErrors({ notEquivalent: true });
    } else {
      control.get(secondPassword)!.setErrors(null);
    }

    return null;
  };
}

export function PasswordStrengthValidator(
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';
  let msg = '';
  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;
  let lowerCaseCharacters = /[a-z]+/g;
  let numberCharacters = /[0-9]+/g;
  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (
    upperCaseCharacters.test(value) === false ||
    lowerCaseCharacters.test(value) === false ||
    numberCharacters.test(value) === false ||
    specialCharacters.test(value) === false
  ) {
    return {
      passwordStrength: true,
    };
  }

  return null;
}
