import { NgModule } from '@angular/core';
import { FormChangingStatusRouting } from './form-changing-status.routing';
import { CommonModule } from '@angular/common';
import { FormChangingStatusComponent } from './form-changing-status.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormChangingStatusComponent],
  imports: [FormChangingStatusRouting, CommonModule, ReactiveFormsModule],
  exports: [],
  providers: [],
})
export class FormChangingStatusModule {}
