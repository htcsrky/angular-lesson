import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <div
    style="background-color: cadetblue; color:white; padding:20px"
  >
    <p>child works!</p>
    <p>{{ title }}</p>
  </div>`,
})
export class ChildComponent {
  @Input() title!: string;
}
