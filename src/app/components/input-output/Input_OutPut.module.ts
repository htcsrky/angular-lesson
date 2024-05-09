import { NgModule } from '@angular/core';
import { InputOutputComponent } from './input-output.component';
import { Child2Component } from './child-to-child-communication/child2/child2.component';
import { Child1Component } from './child-to-child-communication/child1/child1.component';
import { ParentAComponent } from './child-to-child-communication/parent-a/parent-a.component';
import { ParentComponent } from './parent-to-child-communication/parent/parent.component';
import { ParentComponent as ParentComponent2 } from './chil-to-parent-communication/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './chil-to-parent-communication/child/child.component';
import { ChildComponent } from './parent-to-child-communication/child/child.component';
import { InputOutPutRouting } from './Input-Output.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ParentAComponent,
    ParentAComponent,
    Child1Component,
    Child2Component,
    InputOutputComponent,
    ParentComponent2,
    ChildComponent2,
  ],
  imports: [InputOutPutRouting, CommonModule],
  exports: [],
  providers: [],
})
export class InputOutPutModule {}
