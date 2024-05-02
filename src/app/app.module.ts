import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent-to-child-communication/parent/parent.component';
import { ChildComponent } from './components/parent-to-child-communication/child/child.component';
import { ChildComponent as ChildComponent2 } from './components/chil-to-parent-communication/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/chil-to-parent-communication/parent/parent.component';
import { ParentAComponent } from './components/child-to-child-communication/parent-a/parent-a.component';
import { Child1Component } from './components/child-to-child-communication/child1/child1.component';
import { Child2Component } from './components/child-to-child-communication/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildComponent2,
    ParentComponent2,
    ParentAComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
