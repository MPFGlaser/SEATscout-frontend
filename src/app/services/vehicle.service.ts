import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<Vehicle[]>(`${this.apiBaseUrl}/vehicles`);
  }

  getVehicle(name: string) {
    return this.http.get<Vehicle>(`${this.apiBaseUrl}/vehicles/${name}`);
  }
}
