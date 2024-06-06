import { Component, Self } from '@angular/core';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-a-comp',
  template: `<h3>App AComp => {{ randomService.random }}</h3>
    <app-b-comp />`,
  styles: [``],
  providers:[],
  viewProviders:[RandomService]
})
export class ACompComponent {
  constructor(@Self() public randomService: RandomService) {}
}
