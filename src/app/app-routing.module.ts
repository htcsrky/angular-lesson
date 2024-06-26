import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterExampleComponent } from './components/routerExample/routerExample.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'InputOutPut',
    loadChildren: () =>
      import('./components/input-output/Input_OutPut.module').then(
        (x) => x.InputOutPutModule
      ),
  },
  {
    path: 'templateForms',
    loadChildren: () =>
      import(
        './components/template-driven-forms/template-driven-forms.module'
      ).then((x) => x.TemplateDrivenFormsModule),
  },
  {
    path: 'reactiveForm',
    loadChildren: () =>
      import('./components/reactive-forms/reactive-forms.module').then(
        (x) => x.ModulDrivenFormsModule
      ),
  },
  {
    path: 'changeStatus',
    loadChildren: () =>
      import(
        './components/form-changing-status/form-changing-status.module'
      ).then((x) => x.FormChangingStatusModule),
  },
  {
    path: 'validators',
    loadChildren: () =>
      import(
        './components/validation-component/validation-component.modul'
      ).then((x) => x.ValidationComponentModule),
  },
  {
    path: 'dependency',
    loadChildren: () =>
      import('./components/dependecy/dependecy.module').then(
        (x) => x.DependencyModule
      ),
  },
  {
    path: 'DIdec',
    loadChildren: () =>
      import('./components/DI-decorators/DI-decorators.module').then(
        (x) => x.DIDecoratorsModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((x) => x.UserModule),
    component: UserComponent,
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./components/routerExample/routerExample.module').then(
        (x) => x.RouterExampleModule
      ),
    component: RouterExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
