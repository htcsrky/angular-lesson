import { Component, Inject } from '@angular/core';
import { productServiceIT } from '../injection-token';
import { ProductService } from 'src/app/service/productService';

@Component({
  selector: 'app-routerExample',
  template: `<div class="content" role="main">
      <a href="javascript:void(0)" routerLinkActive="active" routerLink="home">
        Home
      </a>
      <a
        href="javascript:void(0)"
        routerLinkActive="active"
        routerLink="abouth"
      >
        Abouth
      </a>
      <a
        href="javascript:void(0)"
        routerLinkActive="active"
        routerLink="contact"
      >
        Contact
      </a>
    </div>
    <router-outlet></router-outlet> `,
  styles: [
    `
      .content {
        flex-direction: row;
      }
      a {
        padding: 10px;
        background-color: black;
        color: white;
        border-color: transparent;
        margin: 0 19px;
        border-radius: 10px;
        cursor: pointer;
      }
      .active {
        background-color: blue;
      }
    `,
  ],
})
export class RouterExampleComponent {
  constructor() {}
}
