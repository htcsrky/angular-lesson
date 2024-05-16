import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  PasswordStrengthValidator,
  capitalLetterValidators,
  matchPassword,
  maxPasswordCount,
} from '../validator/customValidator';

@Component({
  selector: 'app-validation-component',
  template: `<div class="content" role="main">
    <form [formGroup]="validatorsForm" (ngSubmit)="submit()">
      <h1>Lütfen Formu Doldurunuz!!!</h1>
      <input
        type="text"
        placeholder="name"
        formControlName="name"
        [appValidator]="validatorsForm.controls['name']"
        [submitted]="submitted"
      />
      <span *ngIf="!fcName.valid && (fcName.dirty || fcName.touched)">
        {{ fcName.errors | json }}
      </span>
      <input
        type="text"
        placeholder="surname"
        formControlName="surname"
        [appValidator]="validatorsForm.controls['surname']"
        [submitted]="submitted"
      />
      <input
        type="email"
        placeholder="email"
        formControlName="email"
        [appValidator]="validatorsForm.controls['email']"
        [submitted]="submitted"
      />
      <input type="tel" placeholder="phone" formControlName="phone" />
      <div formGroupName="address">
        <input type="text" placeholder="country" formControlName="country" />
        <input type="text" placeholder="city" formControlName="city" />
        <br />
        <textarea
          type="text"
          placeholder="address"
          formControlName="address"
          rows="5"
          maxlength="200"
        ></textarea>
      </div>
      <div formArrayName="skills">
        <div *ngFor="let s of faSkills.controls; let index = index">
          <input
            #input
            type="text"
            placeholder="skill"
            [formControlName]="index"
          />
          <button (click)="remove(index)" *ngIf="index > 0">Remove</button>
          <button (click)="addSkills(input.value)">Add Skill</button>
        </div>
      </div>
      <div formGroupName="password">
        <input
          type="password"
          placeholder="firstPassword"
          formControlName="firstPassword"
          [appValidator]="fgPassword.controls['firstPassword']"
          [submitted]="submitted"
        />
        <input
          type="password"
          placeholder="confirmPassword"
          formControlName="confirmPassword"
          [appValidator]="fgPassword.controls['confirmPassword']"
          [submitted]="submitted"
        />
      </div>

      <button>At The Form Send</button>
    </form>
  </div>`,
  styles: [
    `
      input {
        margin: 10px;
        width: 70%;
        padding: 10px;
      }

      textarea {
        margin: 10px;
        width: 87%;
        padding: 10px;
      }
      button {
        padding: 10px;
        float: right;
        margin: 10px 30px;
      }
    `,
  ],
})
export class ValidationComponent {
  validatorsForm!: FormGroup;
  public submitted = false;

  constructor(private fBuilder: FormBuilder) {
    this.createForm();
    console.log(this.validatorsForm)
  }

  createForm() {
    this.validatorsForm = this.fBuilder.group({
      name: ['', [Validators.required, capitalLetterValidators]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      phone: [''],
      password: this.fBuilder.group(
        {
          firstPassword: [null, Validators.required],
          confirmPassword: [null, Validators.required],
        },
        { validator: matchPassword('firstPassword', 'confirmPassword') }
      ),

      address: this.fBuilder.group({
        country: [''],
        city: [''],
        address: [''],
      }),
      skills: this.fBuilder.array([new FormControl('')]),
    });
  }

  addSkills(e: string) {
    this.faSkills.push(new FormControl(e));
  }

  remove(i: number) {
    this.faSkills.removeAt(i);
  }

  submit() {
    this.submitted = true;
    console.log('fgPassword.errors', this.fgPassword);
  }

  public get faSkills(): FormArray {
    return this.validatorsForm.controls['skills'] as FormArray;
  }

  public get fcName(): FormControl {
    return this.validatorsForm.controls['name'] as FormControl;
  }

  public get fgPassword(): FormGroup {
    return this.validatorsForm.controls['password'] as FormGroup;
  }

  public get fcFirstPassword(): FormControl {
    return this.fgPassword.controls['firstPassword'] as FormControl;
  }

  public get fcConfirmPassword(): FormControl {
    return this.fgPassword.controls['confirmPassword'] as FormControl;
  }
}
