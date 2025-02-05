import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForFilhoComponent } from './ng-for-filho.component';

describe('NgForFilhoComponent', () => {
  let component: NgForFilhoComponent;
  let fixture: ComponentFixture<NgForFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForFilhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
