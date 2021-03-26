import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journey } from '../interfaces/journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getJourneys(){
    return this.http.get<Journey[]>(`${this.apiBaseUrl}/journeys`);
  }
}
