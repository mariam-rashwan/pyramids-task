import { Component } from '@angular/core';
import { AnimateChartComponent } from '../animate-chart/animate-chart.component';

@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [AnimateChartComponent],
  templateUrl: './project-management.component.html',
  styleUrl: './project-management.component.css'
})
export class ProjectManagementComponent {

}
