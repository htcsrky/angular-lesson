import { Component, Inject, Optional, Self } from '@angular/core';
import { ProductService } from 'src/app/productService';
import { productServiceIT } from '../injection-token';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-DI-decorators',
  template: `<h3>DI Decorators => {{ randomService?.random }}</h3>
    <app-a-comp />`,
  styles: [``],
  providers: [],
})
export class DIDecoratorsComponent {
  constructor(@Optional() @Self() public randomService: RandomService) {}
}
