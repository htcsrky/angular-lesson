import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'templateForms',
    pathMatch: 'full',
  },
  {
    path: 'templateForms',
    component: TemplateDrivenFormsComponent,
  },
];

export const TemplateDrivenFormsRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
