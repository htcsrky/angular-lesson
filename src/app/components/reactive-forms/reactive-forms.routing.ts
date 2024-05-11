import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactiveForm',
    pathMatch: 'full',
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormsComponent,
  },
];

export const ReactiveFormsRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
