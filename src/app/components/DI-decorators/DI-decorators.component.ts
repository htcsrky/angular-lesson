import { Component, Inject, Optional, Self } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

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
