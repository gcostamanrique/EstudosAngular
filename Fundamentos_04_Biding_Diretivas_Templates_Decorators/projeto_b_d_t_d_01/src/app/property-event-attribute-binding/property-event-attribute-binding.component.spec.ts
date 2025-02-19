import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventAttributeBindingComponent } from './property-event-attribute-binding.component';

describe('PropertyEventAttributeBindingComponent', () => {
  let component: PropertyEventAttributeBindingComponent;
  let fixture: ComponentFixture<PropertyEventAttributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyEventAttributeBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyEventAttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
