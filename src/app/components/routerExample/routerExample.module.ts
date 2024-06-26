import { NgModule } from '@angular/core';
import { RouterExampleRouting } from './routerExample.routing';
import { RouterExampleComponent } from './routerExample.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AbouthComponent } from './abouth/abouth.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { QueryStringComponent } from './query-string/query-string.component';

@NgModule({
  declarations: [RouterExampleComponent, HomeComponent, AbouthComponent, ContactComponent, ErrorComponent, QueryStringComponent],
  imports: [RouterExampleRouting, CommonModule],
  exports: [],
  providers: [],
})
export class RouterExampleModule {}
