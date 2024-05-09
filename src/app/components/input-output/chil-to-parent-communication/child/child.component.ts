import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-out',
  template: `<p>child component</p>
    <button (click)="handleClick($event)">Click Me!!!</button>
    <br />
    <div>
      <label>Add an Item: </label>
      <input type="text" #newItem />
      <button (click)="addNewItem(newItem.value)">Add New Item</button>
    </div> `,
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {}
  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
  @Output() newItem = new EventEmitter<string>();

  public handleClick(event: MouseEvent) {
    this.dataEvent.emit(event);
  }

  addNewItem(value: string) {
    this.newItem.emit(value);
  }
}
