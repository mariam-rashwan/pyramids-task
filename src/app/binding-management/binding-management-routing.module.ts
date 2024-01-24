import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuantitySurveyComponent } from './quantity-survey/quantity-survey.component';
import { EstimationComponent } from './estimation/estimation.component';

const routes: Routes = [
  {path:'',redirectTo:'survey',pathMatch:'full'},
  {path:'survey',component:QuantitySurveyComponent,title:"Management Survey"},
  {path:'estimation',component:EstimationComponent,title:"Management Estimation"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingManagementRoutingModule { }
