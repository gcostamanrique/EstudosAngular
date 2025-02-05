import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForPaiComponent } from './ng-for-pai/ng-for-pai.component';

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    //TwoWayDataBindingComponent,
    //NgIfComponent,
    //NgForComponent,
    //NgForPaiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
