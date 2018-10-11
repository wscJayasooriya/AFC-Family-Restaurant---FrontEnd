import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../dtos/customer';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  tempCustomer: Customer = null;
  manuallySelected: false;
  @ViewChild('frmCustomers') frmCustomers: NgForm;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  saveCustomer(): void {
    this.customerService.saveCustomer(this.selectedCustomer).subscribe(
      (result) => {
        if (result) {
          swal('Congrats!' , 'You Successfully Registered' , 'success');
          this.router.navigate(['client-login']);
        } else {
          swal('OOPs!' , 'Registerd Failed' , 'error');
        }
      }
    );
  }

}
