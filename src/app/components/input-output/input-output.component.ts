import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  template: `
    <div class="content" role="main">
      <app-parent />
      <hr />

      <app-parent-out></app-parent-out>
      <hr />
      <hr />
      <app-parent-a></app-parent-a>
    </div>
  `,
})
export class InputOutputComponent {}
