import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FdCalculatorComponent } from './fd-calculator.component';
import { FormsModule } from '@angular/forms';

describe('FdCalculatorComponent', () => {
  let component: FdCalculatorComponent;
  let fixture: ComponentFixture<FdCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FdCalculatorComponent, FormsModule], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.investment).toBe(100000);
    expect(component.interestRate).toBe(6.5);
    expect(component.timePeriod).toBe(5);
  });

  it('should calculate FD correctly', () => {
    component.investment = 100000;
    component.interestRate = 6.5;
    component.timePeriod = 5;
    component.calculateFD();
    
    const expectedTotalValue = 100000 * Math.pow((1 + (6.5 / 100) / 4), 4 * 5);
    const expectedReturns = expectedTotalValue - 100000;

    expect(component.totalValue).toBeCloseTo(expectedTotalValue, 2);
    expect(component.estimatedReturns).toBeCloseTo(expectedReturns, 2);
  });
});
