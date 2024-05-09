import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<p>Child1 Component</p>`,
})
export class Child1Component implements OnInit {
  @Output() data = new EventEmitter<string>();

  ngOnInit(): void {
    this.data.emit("Child1 Componentten'den ParentA componente, ParentA component'ten Child2 Component'te veri aktarımı...")}
}
