import { ModuleWithProviders } from '@angular/core';
import { DependecyComponent } from './dependecy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dependency',
    pathMatch: 'full',
  },
  {
    path: 'dependency',
    component: DependecyComponent,
  },
];

export const DependencyRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
