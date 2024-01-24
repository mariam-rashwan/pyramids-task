import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySurveyComponent } from './quantity-survey.component';

describe('QuantitySurveyComponent', () => {
  let component: QuantitySurveyComponent;
  let fixture: ComponentFixture<QuantitySurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuantitySurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuantitySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
