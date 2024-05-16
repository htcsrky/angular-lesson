import { NgModule } from '@angular/core';
import { ValidationComponent } from './validation-component.component';
import { ValidationComponentRouting } from './validation-component.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorDirective } from '../validator/validator.directive';

@NgModule({
  declarations: [ValidationComponent],
  imports: [ValidationComponentRouting, ReactiveFormsModule, CommonModule, ValidatorDirective],
  exports: [],
  providers: [],
})
export class ValidationComponentModule {}
