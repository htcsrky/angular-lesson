import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  template: `<ul>
    <li *ngFor="let name of userService.usersList">{{ name }}</li>
  </ul>`,
  styles: [``],
})
export class ListUserComponent {
  constructor(public userService: UserService) {}
}
