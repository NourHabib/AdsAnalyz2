import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report } from '../objects/report';
import { RepTimeLine } from '../objects/repTimeLine';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  timeLine: RepTimeLine;
  reports: Report[];
  constructor(private http: HttpClient) { }

  getLastReportByCampId(id: Number):  Observable<Report> {
    return this.http.get<Report>('http://localhost:3000/api/reportsByCampOne/' + id);
  }

  getReportsByCampId(id: Number):  Observable<Report[]> {
    return this.http.get<Report[]>('http://localhost:3000/api/reportsByCamp/' + id);
  }
}
