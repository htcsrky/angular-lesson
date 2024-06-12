import { Component, Inject, Optional, Self } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Component({
  selector: 'app-DI-decorators',
  template: ` <div class="content" role="main">
    <h3>DI Decorators => {{ randomService?.random }}</h3>
    <app-a-comp />
  </div>`,
  styles: [`
  .content{
    align-items: flex-start; 
  }
  `],
  providers: [],
})
export class DIDecoratorsComponent {
  constructor(@Optional() @Self() public randomService: RandomService) {}
}
