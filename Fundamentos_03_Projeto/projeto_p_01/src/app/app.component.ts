import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { FilterComponent } from './Components/filter/filter.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { IUser } from './Interfaces/User/user.interface';
import { NgIf } from '@angular/common';
import { UsersList } from './Data/users-list';
import { IFilterOptions } from './Interfaces/filter-option.interface';
import { filterUsersList } from './Utils/filter-users-list';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];

  usersListFiltered: IUser[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  }

  userSelected: IUser = {} as IUser;

  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
