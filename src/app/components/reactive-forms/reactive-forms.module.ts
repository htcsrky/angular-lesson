import { NgModule } from '@angular/core';

import { ReactiveFormsRouting } from './reactive-forms.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [ReactiveFormsRouting, ReactiveFormsModule, CommonModule],
  exports: [],
  providers: [],
})
export class ModulDrivenFormsModule {}
