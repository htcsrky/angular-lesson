import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `<p>Child2 Component..... {{ data }}</p>`,
})
export class Child2Component {
  @Input() data: string = '';
}
