import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: string[] = ['User 1', 'User 2'];

  addUser(name: string) {
    this.users.push(name);
  }

  get usersList(): string[] {
    return this.users;
  }

  constructor() {}
}
