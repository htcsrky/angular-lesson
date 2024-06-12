import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<div class="content" role="main">
    <section>
      <h3>Create User Component</h3>
      <app-create-user />
      <hr />
      <h3>List User Component</h3>
      <app-list-user />
    </section>
  </div> `,
  styles: [
    `
      hr {
        border-top: 5px dashed red;
        width: 100%;
        margin: 20px 0;
      }
    `,
  ],
})
export class UserComponent {}
