import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilhoViewChildComponent } from './instancia-filho-view-child.component';

describe('InstanciaFilhoViewChildComponent', () => {
  let component: InstanciaFilhoViewChildComponent;
  let fixture: ComponentFixture<InstanciaFilhoViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstanciaFilhoViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstanciaFilhoViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
