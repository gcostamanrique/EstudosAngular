import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { FilterComponent } from './Components/filter/filter.component';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    UserDetailsComponent,
    FilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
