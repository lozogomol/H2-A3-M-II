import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorLogingComponent } from './contenedor-loging.component';

describe('ContenedorLogingComponent', () => {
  let component: ContenedorLogingComponent;
  let fixture: ComponentFixture<ContenedorLogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorLogingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContenedorLogingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
