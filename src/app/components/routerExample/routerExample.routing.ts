import { ModuleWithProviders } from '@angular/core';
import { RouterExampleComponent } from './routerExample.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AbouthComponent } from './abouth/abouth.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'routing',
        component: RouterExampleComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'abouth',
        component: AbouthComponent,
      },
      {
        path: '**',
        component: ErrorComponent,
      },
    ],
  },
];

export const RouterExampleRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
