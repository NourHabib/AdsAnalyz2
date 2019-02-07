import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adv } from '../objects/adv';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvsServiceService {

  constructor(private http: HttpClient) { }

  getAdvs():  Observable<Adv[]> {
    return this.http.get<Adv[]>('http://localhost:3000/api/advs');
  }
}
