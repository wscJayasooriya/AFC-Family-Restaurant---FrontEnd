import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../dtos/employee';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Array<Employee> = [];
  selectedEmployee: Employee = new Employee();
  tempEmployee: Employee = null;
  manuallySelected: boolean ;
  @ViewChild('frmEmployee') frmEmployee: NgForm;
  constructor(private employeeService: EmployeeService, private http: HttpClient) { }

  ngOnInit() {
    this.loadAllEmployees();
  }

  loadAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (result) => {
        this.employees = result;
        console.log(this.employees);
      }
    );
  }

  selectEmployee(employee: Employee): void {
    this.clear();
    this.selectedEmployee = employee;
    this.tempEmployee = Object.assign({}, employee);
    this.manuallySelected = true;
  }

  clear(): void {
    const index = this.employees.indexOf(this.selectedEmployee);
    if (index !== -1) {
      this.employees[index] = this.tempEmployee;
      this.tempEmployee = null;
    }
    this.selectedEmployee = new Employee();
    this.manuallySelected = false;
  }

  saveEmployee(): void {
    this.employeeService.saveEmployee(this.selectedEmployee).subscribe(
      (result) => {
        if (result) {
          swal('Congrats!', 'You Successfully Saved', 'success');
          this.clear();
          this.loadAllEmployees();
        } else {
          swal('OOPs!', 'Something wents wrong try again', 'error');
        }
      }
    );
  }

  deleteEmployee(employee: Employee): void {
    if (confirm('Are you sure ? Remove this Employee')) {
      this.employeeService.deleteEmployee(employee.emp_ID).subscribe(
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
            this.loadAllEmployees();
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
