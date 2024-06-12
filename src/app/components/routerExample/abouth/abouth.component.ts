import { Component } from '@angular/core';

@Component({
  selector: 'app-abouth',
  template: `<main>
    <a href="javascript:void(0)" routerLink="../../routing"> Geri </a>
    <h3>What is Lorem Ipsum?</h3>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
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
export class AbouthComponent {}
