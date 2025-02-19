import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IUser } from '../../Interfaces/User/user.interface';
import { StatusPipe } from '../../Pipes/status.pipe';
import { DatePipe } from '@angular/common';
import { DashIfEmptyPipe } from '../../Pipes/dash-if-empty.pipe';

@Component({
  selector: 'app-users-list',
  imports: [
    MatTableModule,
    StatusPipe,
    DatePipe,
    DashIfEmptyPipe,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = [];

  displayedColumns = ['name', 'date', 'status'];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
