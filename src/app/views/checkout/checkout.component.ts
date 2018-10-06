import { Component, OnInit } from '@angular/core';
import {CustomerRegisterService} from '../../services/customer-register.service';
import {CustomerRegister} from '../../dtos/customerRegister';
import {OrderDetails} from '../../dtos/orderDetails';
import {OrderdetailService} from '../../services/orderdetail.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customerRegister: CustomerRegister = new CustomerRegister();
  constructor(private customerService: CustomerRegisterService) {}

  ngOnInit() {
    this.customerService.getCustomer(localStorage.getItem('user')).subscribe(

      ((result) => {
         this.customerRegister = result;
      })
    );
  }
}
