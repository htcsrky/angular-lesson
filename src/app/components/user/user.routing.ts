import { ModuleWithProviders } from '@angular/core';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'user',
        component: UserComponent,
      },
    ],
  },
];

export const UserRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
