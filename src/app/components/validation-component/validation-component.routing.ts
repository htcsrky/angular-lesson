import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationComponent } from './validation-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'validators',
    pathMatch: 'full',
  },
  {
    path: 'validators',
    component: ValidationComponent,
  },
];

export const ValidationComponentRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
