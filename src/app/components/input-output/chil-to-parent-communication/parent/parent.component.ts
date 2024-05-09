import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-out',
  template: `<p>parent component!</p>
    <app-child-out
      (dataEvent)="childEvent($event)"
      (newItem)="addNewItem($event)"
    ></app-child-out>

    <ul>
      <li *ngFor="let item of items; let i = index">
        {{ item }} <button (click)="deleteItem(i)">delete</button>
      </li>
    </ul> `,
})
export class ParentComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  childEvent(event: MouseEvent) {
    alert('message');
  }

  addNewItem(newItem: string) {
    this.items.push(newItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
