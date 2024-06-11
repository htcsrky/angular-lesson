import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserRouting } from './user.routing';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [UserComponent, CreateUserComponent, ListUserComponent],
  imports: [UserRouting, CommonModule],
  exports: [],
  providers: [],
})
export class UserModule {}
