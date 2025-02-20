import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticViewChildComponent } from './static-view-child.component';

describe('StaticViewChildComponent', () => {
  let component: StaticViewChildComponent;
  let fixture: ComponentFixture<StaticViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
