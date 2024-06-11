import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  template: ` <input
      type="text"
      #text
      placeholder="Lütfen kullanıcı adını giriniz"
    />
    <button (click)="createUser(text.value)">Add</button>`,
  styles: [
    `
      button {
        padding: 10px;
        background-color: black;
        color: white;
        border-color: transparent;
        margin: 0 19px;
        border-radius: 10px;
        cursor: pointer;
      }
      input {
        width: 300px;
        height: 35px;
      }
    `,
  ],
})
export class CreateUserComponent {
  constructor(private userService: UserService) {}
  createUser(name: string) {
    this.userService.addUser(name);
  }
}
