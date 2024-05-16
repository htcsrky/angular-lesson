import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { capitalLetterValidators } from '../validator/capitalLetter';

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
      <div *ngIf="!fcName.valid && (fcName.dirty || fcName.touched)">
        {{ fcName.errors | json }}
      </div>
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
  }

  createForm() {
    this.validatorsForm = this.fBuilder.group({
      name: ['', [Validators.required, capitalLetterValidators()]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      phone: [''],
      pasword: [''],
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
    console.log(this.validatorsForm.value);
    console.log('form valid', this.validatorsForm.valid);
    console.log(this.submitted);
  }

  public get faSkills(): FormArray {
    return this.validatorsForm.controls['skills'] as FormArray;
  }

  public get fcName(): FormControl {
    return this.validatorsForm.controls['name'] as FormControl;
  }
}
