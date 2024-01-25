import { Component ,ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-animate-chart',
  standalone: true,
  imports: [
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './animate-chart.component.html',
  styleUrl: './animate-chart.component.css'
})
export class AnimateChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      
      series: [
        {
          name: "Project Management",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          color: "rgb(0,139,139)",

          
        }
      ],
      
      chart: {
        height: 350,
        type: "area"
      },
      title: {
        // text: "My First Angular Chart"
      },
      
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }

}
