import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() dataSource1: number[];
  @Input() dataSource2: number[];
  @Input() theLabels: String[];
  @Input() theLegend: String[];
  public barChartOptions;
  public barChartLabels;
  public barChartType;
  public barChartLegend;
  public barChartData;
  public difPrecent: number;

    constructor() {}
    ngOnInit() {}
    ngOnChanges(changes: SimpleChanges) {
      this.barChartOptions = {
        showScale: true,
        scaleShowGridLines: true,
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.3,
        pointDot: false,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: `<ul class=\"<%=name.toLowerCase()%>-legend\">
        <% for (var i=0; i<datasets.length; i++){%><li>
          <span style=\"background-color:<%=datasets[i].lineColor%>\"></span>
          <%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>`,
        maintainAspectRatio: true,
        responsive: true,
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
      };
      this.barChartLabels = this.theLegend;
      this.barChartType = 'bar';
      this.barChartLegend = true;
      this.barChartData = [
        {data: this.dataSource1, label: this.theLabels[0]},
        {data: this.dataSource2, label: this.theLabels[1]}
      ];
      this.difPrecent = parseFloat((this.dataSource1[0] * 100 / this.dataSource2[0]).toFixed(2));
      if (this.dataSource1[0] < this.dataSource2[0]) {
        this.difPrecent *= -1;
      }
    }

}
