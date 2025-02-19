import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criacao-change-detection',
  imports: [
    FormsModule,
  ],
  templateUrl: './criacao-change-detection.component.html',
  styleUrl: './criacao-change-detection.component.scss'
})
export class CriacaoChangeDetectionComponent {
  
  constructor(
    private _cdRef: ChangeDetectorRef
  ) {}
  
  changeDetection() {
    this._cdRef.detectChanges
  }


  valorMeuInput03 = 'Guilherme';
}
