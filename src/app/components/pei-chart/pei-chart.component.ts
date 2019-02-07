import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pei-chart',
  templateUrl: './pei-chart.component.html',
  styleUrls: ['./pei-chart.component.css']
})
export class PeiChartComponent implements OnInit {

  @Input() dataSource1: number;
  @Input() dataSource2: number;
  @Input() theLabels: String[];
  data1: number;
  data2: number;
  public pieChartLabels: String[];
  public pieChartData: Number[];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
    console.log(this.dataSource1);
    this.data1 = parseFloat(( this.dataSource1[0] * 100 / this.dataSource2[0]).toFixed(2));
    this.data2 = (100 - this.data1);
    this.pieChartLabels = this.theLabels;
    this.pieChartData = [this.dataSource1[0], this.dataSource2[0]];

  }

}
