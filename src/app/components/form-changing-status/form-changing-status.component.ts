import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-changing-status',
  template: `<div class="content" role="main">
    <form [formGroup]="myGroup" (ngSubmit)="submit()">
      <input type="text" placeholder="firstName" formControlName="firstName" />
      <input type="text" placeholder="lastName" formControlName="lastName" />
      <input
        type="text"
        placeholder="firstEmail"
        formControlName="firstEmail"
      />
      <input
        type="text"
        placeholder="firstPhone"
        formControlName="firstPhone"
      />
      <div formArrayName="firstSkills">
        <div *ngFor="let s of FaSkills.controls; let i = index">
          <input
            #inputSkills
            type="text"
            placeholder="skill"
            [formControlName]="i"
          />
          {{ inputSkills.value }}
          <button
            (click)="removeSkill(i)"
            *ngIf="i != 0"
            style="margin-right:10px"
          >
            Remove Skill
          </button>
          <button (click)="addSkills(inputSkills.value )">Add Skills</button>
        </div>
      </div>
      <div
        formArrayName="firstHobbies"
        *ngFor="let h of FaHobbies.controls; let i = index"
      >
        <div [formGroupName]="i">
          <input type="text" placeholder="hobi" formControlName="name" />
          <input type="text" placeholder="degree" formControlName="degree" />
          <button
            (click)="removeHobbi(i)"
            *ngIf="i != 0"
            style="margin-right:10px"
          >
            Remove Hobi
          </button>
          <button (click)="getHobbies()">Add Skills</button>
        </div>
      </div>
      <button type="submit" style="float:right">Send Form</button>
    </form>

    <hr />
    <button (click)="disable()" style="margin-bottom:3px">
      first name disable
    </button>
    <button (click)="enable()">first name enable</button>
    <hr />
    <p>MarkAsTouched</p>
    <span>form.touched = {{ myGroup.touched }}</span>
    <span
      >form control firstName touched =
      {{ myGroup.controls['firstName'].touched }}</span
    >
    <button (click)="markAsTouched()">markAsTouched</button>
    <hr />
    <p>markAllAsTouched</p>
    <span>form all touched = {{ myGroup.touched }}</span>

    <button (click)="markAllAsTouched()">markAllAsTouched</button>
    <hr />
    <p>markAsUntouched</p>
    <span>form all unTouched = {{ myGroup.touched }}</span>
    <span
      >form control lastName unTouched =
      {{ myGroup.controls['lastName'].touched }}</span
    >
    <button (click)="markAsUntouched()">markAsUntouched</button>
    <hr />
    <p>markAsDirty</p>
    <span>form all markAsDirty = {{ myGroup.dirty }}</span>
    <span
      >form control lastName markAsDirty =
      {{ myGroup.controls['lastName'].dirty }}</span
    >
    <button (click)="markAsDirty()">markAsDirty</button>
    <hr />
    <p>markAsPristine</p>
    <span>form all markAsPristine = {{ !myGroup.pristine }}</span>
    <span
      >form control lastName markAsPristine =
      {{ !myGroup.controls['lastName'].pristine }}</span
    >
    <button (click)="markAsDirty()">markAsPristine</button>
    <hr />
  </div>`,
  styles: [
    `
      input {
        margin: 10px;
        width: 300px;
        padding: 10px;
      }
      hr {
        border-top: 5px dashed red;
        width: 100%;
        margin: 10px;
      }
    `,
  ],
})
export class FormChangingStatusComponent {
  myGroup!: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myGroup = this.FormBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      firstPhone: [''],
      firstEmail: [''],
      firstSkills: this.FormBuilder.array([new FormControl('')]),
      firstHobbies: this.FormBuilder.array([]),
    });
    this.getHobbies();
  }

  submit() {
    console.log(this.myGroup.value);
  }

  getHobbies() {
    const fg = this.FormBuilder.group({
      name: [''],
      degree: [''],
    });
    this.FaHobbies.push(fg);
  }
  removeHobbi(i: number) {
    this.FaHobbies.removeAt(i);
  }
  addSkills(e:string) {
    this.FaSkills.push(new FormControl(e));
  }
  removeSkill(i: number) {
    this.FaSkills.removeAt(i);
  }

  public get FaSkills(): FormArray {
    return this.myGroup.controls['firstSkills'] as FormArray;
  }

  public get FaHobbies(): FormArray {
    return this.myGroup.controls['firstHobbies'] as FormArray;
  }

  //#region form Changing Status function
  markAsTouched() {
    this.myGroup.markAsTouched();
    this.myGroup.controls['firstName'].markAsTouched();
  }
  markAllAsTouched() {
    this.myGroup.markAllAsTouched();
  }

  markAsUntouched() {
    this.myGroup.markAsUntouched();
    this.myGroup.controls['lastName'].markAsUntouched();
  }

  markAsDirty() {
    this.myGroup.markAsDirty();
    this.myGroup.controls['lastName'].markAsDirty();
  }
  markAsPristine() {
    this.myGroup.markAsPristine();
    this.myGroup.controls['lastName'].markAsPristine();
  }

  disable() {
    this.myGroup.controls['firstName'].disable();
  }

  enable() {
    this.myGroup.controls['firstName'].enable();
  }

  //#endregion
}
