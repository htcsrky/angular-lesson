import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<main>
    <a href="javascript:void(0)" routerLink="../../routing"> Geri </a>
    <h3>Where can I get some?</h3>
    There are many variations of passages of Lorem Ipsum available, but the
    majority have suffered alteration in some form, by injected humour, or
    randomised words which don't look even slightly believable. If you are going
    to use a passage of Lorem Ipsum, you need to be sure there isn't anything
    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
    the Internet tend to repeat predefined chunks as necessary, making this the
    first true generator on the Internet. It uses a dictionary of over 200 Latin
    words, combined with a handful of model sentence structures, to generate
    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
    always free from repetition, injected humour, or non-characteristic words
    etc.
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
export class HomeComponent {}
