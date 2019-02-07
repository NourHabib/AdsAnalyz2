import { Component, OnInit, Input } from '@angular/core';
import { Adv } from '../../objects/adv';
import { Camp } from '../../objects/camp';
import { Report } from '../../objects/report';
import { CampiagnsService } from '../../services/campiagns.service';
import { ReportsService } from '../../services/reports.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() adv: Adv;
  camps: Camp[];
  selectedCamp: Camp;
  reports: Report[];
  selectedRep: Report;
  compairRep: Report;
  dataSet1: Number[];
  dataSet2: Number[];
  labels: String[];
  timeLineCamp: Camp;

  constructor(private campService: CampiagnsService, private repService: ReportsService) { }
  ngOnInit() {}

  getCamp(id): void {
    this.campService.getCamps(id).subscribe(camps => this.camps = camps);
  }
  getLastReportByCamp(id): void {
    this.repService.getLastReportByCampId(id).subscribe(report => this.selectedRep = report);
  }
  getReportsByCamp(id): void {
    this.repService.getReportsByCampId(id).subscribe(report => this.reports = report);
  }
  childCampSelected(camp: Camp): void {
    this.selectedCamp = camp;
    this.getLastReportByCamp(camp.id);
    this.getReportsByCamp(camp.id);
  }
  childRepSelected(rep: Report): void {
    this.compairRep = rep;
    this.dataSet1 = [ this.selectedRep.impressions, this.selectedRep.clicks, this.selectedRep.installs, this.selectedRep.cost_micros];
    this.dataSet2 = [this.compairRep.impressions, this.compairRep.clicks, this.compairRep.installs, this.compairRep.cost_micros];
    this.labels = ['impressions', 'clicks', 'installs', 'cost_micros'];
  }
  childRepTimeline(camp: any): void {
    this.getReportsByCamp(camp.id);
    this.timeLineCamp = camp;
  }
  backToCampians(): void {
    this.selectedRep = null;
    this.timeLineCamp = null;
  }
  backToReports(): void {
    this.compairRep = null;
  }

}
