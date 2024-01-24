import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingManagementRoutingModule } from './binding-management-routing.module';
import { QuantitySurveyComponent } from './quantity-survey/quantity-survey.component';
import { EstimationComponent } from './estimation/estimation.component';


@NgModule({
  declarations: [
    QuantitySurveyComponent,
    EstimationComponent
  ],
  imports: [
    CommonModule,
    BindingManagementRoutingModule
  ]
})
export class BindingManagementModule { }
