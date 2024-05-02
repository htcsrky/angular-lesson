import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<p>parent works!</p>
    <app-child [title]="title"></app-child>`,
})
export class ParentComponent {
  title: string = 'Parent-to-child Communication';
}
