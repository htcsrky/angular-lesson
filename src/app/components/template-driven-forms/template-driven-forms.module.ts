import { NgModule } from '@angular/core';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { TemplateDrivenFormsRouting } from './template-driven-forms.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenFormsComponent],
  imports: [TemplateDrivenFormsRouting, FormsModule],
  exports: [],
  providers: [],
})
export class TemplateDrivenFormsModule {}
