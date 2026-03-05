import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoLoging } from './fondo-loging';

describe('FondoLoging', () => {
  let component: FondoLoging;
  let fixture: ComponentFixture<FondoLoging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoLoging],
    }).compileComponents();

    fixture = TestBed.createComponent(FondoLoging);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
