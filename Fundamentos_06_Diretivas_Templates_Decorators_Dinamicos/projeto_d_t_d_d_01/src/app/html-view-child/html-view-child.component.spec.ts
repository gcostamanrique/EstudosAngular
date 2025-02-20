import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlViewChildComponent } from './html-view-child.component';

describe('HtmlViewChildComponent', () => {
  let component: HtmlViewChildComponent;
  let fixture: ComponentFixture<HtmlViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
