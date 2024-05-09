import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { InputOutputComponent } from './input-output.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'InputOutPut',
    pathMatch: 'full',
  },
  {
    path: 'InputOutPut',
    component: InputOutputComponent,
  },
];

export const InputOutPutRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
