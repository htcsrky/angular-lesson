import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
