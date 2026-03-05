import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FondoLogingComponent } from './fondo-loging.component';

describe('FondoLoging', () => {
  let component: FondoLogingComponent;
  let fixture: ComponentFixture<FondoLogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoLogingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FondoLogingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
