import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemParametroEscopoComponent } from './passagem-parametro-escopo.component';

describe('PassagemParametroEscopoComponent', () => {
  let component: PassagemParametroEscopoComponent;
  let fixture: ComponentFixture<PassagemParametroEscopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagemParametroEscopoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagemParametroEscopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
