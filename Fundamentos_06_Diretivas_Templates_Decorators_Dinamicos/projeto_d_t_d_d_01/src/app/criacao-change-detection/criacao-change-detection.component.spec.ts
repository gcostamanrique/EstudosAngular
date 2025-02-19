import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoChangeDetectionComponent } from './criacao-change-detection.component';

describe('CriacaoChangeDetectionComponent', () => {
  let component: CriacaoChangeDetectionComponent;
  let fixture: ComponentFixture<CriacaoChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
