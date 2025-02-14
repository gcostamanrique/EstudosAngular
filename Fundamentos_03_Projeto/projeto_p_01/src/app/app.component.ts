import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { FilterComponent } from './Components/filter/filter.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { IUser } from './Interfaces/User/user.interface';
import { NgIf } from '@angular/common';

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
export class AppComponent { 
  userSelected: IUser = {} as IUser;

  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
