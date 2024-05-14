import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FormChangingStatusComponent } from './form-changing-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'changeStatus',
    pathMatch: 'full',
  },
  {
    path: 'changeStatus',
    component: FormChangingStatusComponent,
  },
];

export const FormChangingStatusRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);