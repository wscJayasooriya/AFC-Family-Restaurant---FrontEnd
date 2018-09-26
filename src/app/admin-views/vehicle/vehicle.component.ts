import {Component, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from '../../services/vehicle.service';
import {Employee} from '../../dtos/employee';
import {Vehicle} from '../../dtos/vehicle';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Array<Vehicle> = [];
  selectedVehicle: Vehicle = new Vehicle();
  tempVehicle: Vehicle = null;
  manuallySelected: boolean ;
  @ViewChild('frmVehicle') frmVehicle: NgForm;
  constructor(private vehicleService: VehicleService, private http: HttpClient) { }

  ngOnInit() {
    this.loadAllVehicles();
  }

  loadAllVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(
      (result) => {
        this.vehicles = result;
        console.log(this.vehicles);
      }
    );
  }

  selectVehicle(vehicle: Vehicle): void {
    this.clear();
    this.selectedVehicle = vehicle;
    this.tempVehicle = Object.assign({}, vehicle);
    this.manuallySelected = true;
  }

  clear(): void {
    const index = this.vehicles.indexOf(this.selectedVehicle);
    if (index !== -1) {
      this.vehicles[index] = this.tempVehicle;
      this.tempVehicle = null;
    }
    this.selectedVehicle = new Vehicle();
    this.manuallySelected = false;
  }

  saveVehicle(): void {
    this.vehicleService.saveVehicle(this.selectedVehicle).subscribe(
      (result) => {
        if (result) {
          swal('Congrats!', 'You Successfully Saved', 'success');
          this.clear();
          this.loadAllVehicles();
        } else {
          swal('OOPs!', 'Something wents wrong try again', 'error');
        }
      }
    );
  }

  deleteVehicle(vehicle: Vehicle): void {
    if (confirm('Are you sure ? Remove this Employee')) {
      this.vehicleService.deleteVehicle(vehicle.veh_ID).subscribe(
        (result) => {
          if (result) {
            swal({
              position: 'center',
              type: 'success',
              title: 'Employee has been Deleted',
              showConfirmButton: false,
              timer: 1500
            });
            this.clear();
            this.loadAllVehicles();
          } else {
            swal({
              position: 'center',
              type: 'error',
              title: 'Deleted Failed !',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      );
    }
  }

}
