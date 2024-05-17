import { NgModule } from '@angular/core';
import { DependencyRouting } from './dependecy.routing';
import { DependecyComponent } from './dependecy.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DependecyComponent],
  imports: [DependencyRouting, CommonModule],
  exports: [],
  providers: [],
})
export class DependencyModule {}
