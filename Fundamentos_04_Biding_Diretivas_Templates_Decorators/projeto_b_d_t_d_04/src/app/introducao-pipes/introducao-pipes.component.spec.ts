import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducaoPipesComponent } from './introducao-pipes.component';

describe('IntroducaoPipesComponent', () => {
  let component: IntroducaoPipesComponent;
  let fixture: ComponentFixture<IntroducaoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroducaoPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroducaoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
