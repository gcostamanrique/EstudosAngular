import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleClassBindingComponent } from './style-class-binding.component';

describe('StyleClassBindingComponent', () => {
  let component: StyleClassBindingComponent;
  let fixture: ComponentFixture<StyleClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleClassBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
