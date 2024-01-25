import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Colors } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { AnimateChartComponent } from '../animate-chart/animate-chart.component';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [ 
     NgChartsModule,
     AnimateChartComponent
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end',
      // },
    },
    
  };
  public barChartType: ChartType = 'bar';
  // public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2018', '2019','2020', '2021', '2022', '2023','2024'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',
      backgroundColor: "#EF5350",
    },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' ,
      backgroundColor: "rgb(0,139,139)",
    },
    ],
    
    
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[
      
    ];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }


  // second chart *******************************************************
    // PolarArea
    public polarAreaChartLabels: string[] = [
      'New Projects',
      'In-Store Sales',
      'Mail Sales',
      'Telesales',
      'Corporate Sales',
    ];
    public polarAreaChartData: ChartData<'polarArea'> = {
      labels: this.polarAreaChartLabels,
      datasets: [
        {
          data: [300, 500, 100, 40, 120],
          label: 'Series 1',
          
        },
      ],
    };
    public polarAreaLegend = true;
  
    public polarAreaChartType: ChartType = 'polarArea';
  
  // //////////////////////////////


  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      // datalabels: {
      //   formatter: (value: any, ctx: any) => {
      //     if (ctx.chart.data.labels) {
      //       return ctx.chart.data.labels[ctx.dataIndex];
      //     }
      //   },
      // },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Finished', 'Projects'], ['projects','Management'], 'Teams'],
    
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: ["#ff6361","#bc5090","#003f5c"],

      },
      
    ],
  };
  public pieChartType: ChartType = 'pie';
  // public pieChartPlugins = [DatalabelsPlugin];


// ///////////////////////////////////////
 

 



}
