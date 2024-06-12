import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<main>
    <a href="javascript:void(0)" routerLink="../../routing"> Geri </a>
    <h3>Why do we use it?</h3>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it look like readable
    English. Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem ipsum' will
    uncover many web sites still in their infancy. Various versions have evolved
    over the years, sometimes by accident, sometimes on purpose (injected humour
    and the like).
  </main>`,
  styles: [
    `
      main {
        margin: 32px auto;
      }
      a {
        padding: 10px;
        background-color: black;
        color: white;
        border-color: transparent;
        border-radius: 10px;
        cursor: pointer;
      }
      h3 {
        margin-top: 20px;
      }
    `,
  ],
})
export class ContactComponent {}
