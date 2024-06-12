import { ModuleWithProviders } from '@angular/core';
import { RouterExampleComponent } from './routerExample.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AbouthComponent } from './abouth/abouth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'routing',
    pathMatch: 'full',
  },
  {
    path: 'routing',
    component: RouterExampleComponent,
  },
  {
    path: 'routing/home',
    component: HomeComponent,
  },
  {
    path: 'routing/contact',
    component: ContactComponent,
  },
  {
    path: 'routing/abouth',
    component: AbouthComponent,
  },
];

export const RouterExampleRouting: ModuleWithProviders<any> =
  RouterModule.forChild(routes);
