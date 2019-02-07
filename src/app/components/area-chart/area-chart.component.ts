import { Component, OnInit, Input,ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit, OnChanges {

  @Input() dataSource: Number[];
  @Input() theLegend: String[];
  @Input() theLabels: String[];
  areaChartOptions;
  areaChartLabels;
  areaChartType;
  areaChartLegend;
  areaChartData;
  @ViewChild('baseChart') chart: BaseChartDirective;
    constructor() {
    }
    ngOnInit() {
    }
    reloadChart() {
        if (this.chart !== undefined) {
          this.chart.chart.destroy();
          this.chart.chart = 0;
          this.chart.datasets = this.areaChartData;
          this.chart.labels = this.theLabels;
          this.chart.ngOnInit();
        }
    }
    ngOnChanges(changes: SimpleChanges) {
      this.areaChartOptions = {
        showScale: true,
        scaleShowGridLines: false,
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
        responsive: true
      };
      this.areaChartLabels = this.theLabels;
      this.areaChartType = 'line';
      this.areaChartLegend = true;
      this.areaChartData = [
        {data: this.dataSource, label: this.theLegend}
      ];
      this.reloadChart();
    }
}
