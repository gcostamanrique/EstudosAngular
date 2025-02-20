import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaViewChildComponent } from './instancia-view-child.component';

describe('InstanciaViewChildComponent', () => {
  let component: InstanciaViewChildComponent;
  let fixture: ComponentFixture<InstanciaViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstanciaViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstanciaViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
