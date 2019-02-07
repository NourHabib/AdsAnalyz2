import { Injectable } from '@angular/core';
import { Camp } from '../objects/camp';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampiagnsService {

  constructor(private http: HttpClient) { }

  getCamps(id: Number):  Observable<Camp[]> {
    return this.http.get<Camp[]>('http://localhost:3000/api/campaings/' + id);
  }
}
