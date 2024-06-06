import { NgModule } from '@angular/core';
import { DIDecoratorsComponent } from './DI-decorators.component';
import { CommonModule } from '@angular/common';
import { DIDecoratorsRouting } from './DI-decorators.routing';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { DDirective } from '../validator/d-directive.directive';

@NgModule({
  declarations: [DIDecoratorsComponent, ACompComponent, BCompComponent],
  imports: [DIDecoratorsRouting, CommonModule, DDirective],
  exports: [],
  providers: [],
})
export class DIDecoratorsModule {}
