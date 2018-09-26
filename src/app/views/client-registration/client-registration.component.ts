import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerRegister} from '../../dtos/customerRegister';
import {NgForm} from '@angular/forms';
import {CustomerRegisterService} from '../../services/customer-register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {

  customers: Array<CustomerRegister> = [];
  selectedCustomer: CustomerRegister = new CustomerRegister();
  tempCustomer: CustomerRegister = null;
  manuallySelected: false;
  @ViewChild('frmCustomers') frmCustomers: NgForm;

  constructor(private customerService: CustomerRegisterService, private router: Router) { }

  ngOnInit() {
  }

  saveCustomer(): void {
    this.customerService.saveCustomer(this.selectedCustomer).subscribe(
      (result) => {
        if (result) {
          alert('Registration has been successfully. Thank You!');
            this.router.navigateByUrl('nevigation/menu-dash');

        } else {
          alert('Your Registration Faild.. Pleac Try!');
        }
      }
    );
  }

}
