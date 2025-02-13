import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersList } from '../../Data/users-list';
import { IUser } from '../../Interfaces/User/user.interface';

@Component({
  selector: 'app-users-list',
  imports: [
    MatTableModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  usersList: IUser[] = UsersList;

  displayedColumns = ['name', 'date', 'status'];

  onUserSelected(user: IUser) {

  }
}
