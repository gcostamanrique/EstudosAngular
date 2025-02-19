import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForPaiComponent } from './ng-for-pai/ng-for-pai.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { IntroducaoPipesComponent } from './introducao-pipes/introducao-pipes.component';

@Component({
  selector: 'app-root',
  imports: [
    //CommonModule,
    //BrowserModule,
    //RouterOutlet,
    // TwoWayDataBindingComponent,
    // NgIfComponent,
    // NgForComponent,
    // NgForPaiComponent,
    // NgStyleComponent,
    // NgClassComponent,
    // IntroducaoPipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
