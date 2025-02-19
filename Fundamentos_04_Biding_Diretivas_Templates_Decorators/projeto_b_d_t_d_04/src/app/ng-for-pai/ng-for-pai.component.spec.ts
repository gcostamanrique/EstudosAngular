import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForPaiComponent } from './ng-for-pai.component';

describe('NgForPaiComponent', () => {
  let component: NgForPaiComponent;
  let fixture: ComponentFixture<NgForPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForPaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
