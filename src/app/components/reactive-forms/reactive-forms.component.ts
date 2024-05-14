import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  template: `<div class="content" role="main">
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input type="text" placeholder="name" formControlName="name" /> <br />
      <input type="text" placeholder="surname" formControlName="surname" />
      <br />
      <input type="email" placeholder="email" formControlName="email" /> <br />
      <input type="phone" placeholder="phone" formControlName="phone" /> <br />
      <div formGroupName="address">
        <input type="text" placeholder="country" formControlName="country" />
        <br />
        <input type="text" placeholder="city" formControlName="city" /> <br />
        <input type="text" placeholder="address" formControlName="address" />
        <br />
      </div>
      <div formArrayName="skills">
        <div *ngFor="let s of skills.controls; let i = index">
          <input type="text" placeholder="skills" [formControlName]="i" />
          <button (click)="addSkills()">Add Skills</button>
          <button style="margin:5px" (click)="removeSkills(i)" *ngIf="i != 0">
            Remove Skill
          </button>
        </div>
      </div>
      <div
        formArrayName="hobbies"
        *ngFor="let s of faHobbies.controls; let i = index"
      >
        <div [formGroupName]="i">
          <input type="text" placeholder="hobi" formControlName="hobbi" />
          <input type="text" placeholder="degree" formControlName="degree" />
          <button (click)="removeHobi(i)">Remove Hobi</button>
        </div>
      </div>
      <button (click)="addHobbies()">Add Hobbies</button>
      <button style="float: right;">Submit</button>
    </form>
    <button (click)="onlySelf()">onlySelf</button>
    <br />
    <div>Form Validators => {{ form.valid }}</div>
  </div>`,
  styles: [
    `
      input {
        margin: 10px;
        width: 300px;
        padding: 10px;
      }
    `,
  ],
})
export class ReactiveFormsComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      surname: [''],
      email: [''],
      phone: [''],
      address: fb.group({
        country: [''],
        city: [''],
        address: [''],
      }),
      skills: fb.array([this.fb.control('')]),
      hobbies: fb.array([]),
    });
    this.addHobbies();
  }

  addHobbies() {
    const fg = this.fb.group({
      hobbi: [''],
      degree: [''],
    });

    this.faHobbies.push(fg);
  }

  removeHobi(i: number) {
    this.faHobbies.removeAt(i);
  }

  addSkills() {
    this.skills.push(this.fb.control(''));
  }

  removeSkills(i: number) {
    this.skills.removeAt(i);
  }

  onlySelf() {
    this.form.get('name')?.setValue('Hatice', { onlySelf: true });
  }
  submit() {
    console.log(this.form.value);
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  public get faHobbies(): FormArray {
    return this.form.controls['hobbies'] as FormArray;
  }
}
