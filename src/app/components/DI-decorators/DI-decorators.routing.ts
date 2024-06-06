import { ModuleWithProviders } from '@angular/core';
import { DIDecoratorsComponent } from './DI-decorators.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'DIdec',
    pathMatch: 'full',
  },
  {
    path: 'DIdec',
    component: DIDecoratorsComponent,
  },
];

export const DIDecoratorsRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
