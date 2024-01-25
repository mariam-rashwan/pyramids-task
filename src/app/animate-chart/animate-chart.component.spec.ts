import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateChartComponent } from './animate-chart.component';

describe('AnimateChartComponent', () => {
  let component: AnimateChartComponent;
  let fixture: ComponentFixture<AnimateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
