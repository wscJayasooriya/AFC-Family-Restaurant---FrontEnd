import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cus_UName = '';

  constructor(private router: Router, private customerService: CustomerService, private authService: AuthService) {
    this.cus_UName = localStorage.getItem('user');
  }

  ngOnInit() {
  }
  logout(): void {
    this.customerService.logout();
    localStorage.removeItem('user');
  }

}
