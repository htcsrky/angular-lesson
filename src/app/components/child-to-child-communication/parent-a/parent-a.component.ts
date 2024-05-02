import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  template: `<div style="background-color: coral; color:white; padding:30px">
    <p>ParentA Component</p>
    <br />
    <app-child1 (data)="child1Message($event)"></app-child1>
    <br />
    <app-child2 [data]="childMessage"></app-child2>
  </div>`,
})
export class ParentAComponent {
  childMessage: string = '';
  child1Message(message: string) {
    this.childMessage = message;
  }
}
