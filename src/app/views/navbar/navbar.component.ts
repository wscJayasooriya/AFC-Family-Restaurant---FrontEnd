import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerRegisterService} from '../../services/customer-register.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cus_UName = '';

  constructor(private router: Router, private customerRegister: CustomerRegisterService) {
    this.cus_UName = localStorage.getItem('user');
  }

  ngOnInit() {
  }

}
