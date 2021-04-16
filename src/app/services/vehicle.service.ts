import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  apiBaseUrl = 'http://localhost:8080/api/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<Vehicle[]>(`${this.apiBaseUrl}/all`);
  }

  getVehicle(name: string) {
    return this.http.get<Vehicle>(`${this.apiBaseUrl}/type_name/${name}`);
  }
}
