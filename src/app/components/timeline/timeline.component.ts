import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Report } from '../../objects/report';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnChanges {
  @Input() dataSource: Report[];
  theClicks: Number[];
  theInstalls: Number[];
  theImpressions: Number[];
  theCost: Number[];
  theDates: String[];
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.theClicks = this.dataSource.map(item => item.clicks);
    this.theInstalls = this.dataSource.map(item => item.installs);
    this.theImpressions = this.dataSource.map(item => item.impressions);
    this.theCost = this.dataSource.map(item => item.cost_micros);
    this.theDates = this.dataSource.map(item => item.date);
  }

}
