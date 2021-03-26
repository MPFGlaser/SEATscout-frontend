import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicles!: Vehicle[];

  vehicleSearch!: string;
  searchedVehicle!: Vehicle;

  constructor(public vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  async getVehicles() {
    const vehicles = await this.vehicleService.getVehicles().toPromise();
    this.vehicles = vehicles;
  }

  async getVehicle() {
    const vehicle = await this.vehicleService.getVehicle(this.vehicleSearch).toPromise();
    this.searchedVehicle = vehicle;
  }

}
