import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { IUser } from '../../Interfaces/User/user.interface';
import { PhonePipe } from '../../Pipes/phone.pipe';
import { AddressPipe } from '../../Pipes/address.pipe';

@Component({
  selector: 'app-user-details',
  imports: [
    MatListModule,
    MatDividerModule,
    PhonePipe,
    AddressPipe,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({required: true}) user: IUser = {} as IUser;
}
