import { Component, Self } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Component({
  selector: 'app-b-comp',
  template: `
  <h3>App BComp => {{ randomService.random }}</h3>
    <h3 appD></h3>`,
  styles: [``],
  providers:[RandomService]
})
export class BCompComponent {
  constructor(@Self() public randomService: RandomService) {}
}
