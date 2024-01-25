import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatisticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
