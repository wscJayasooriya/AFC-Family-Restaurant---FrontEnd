import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerRegisterService} from '../../services/customer-register.service';
import {HttpClient} from '@angular/common/http';
import {CustomerRegister} from '../../dtos/customerRegister';
import {NgForm} from '@angular/forms';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor( private http: HttpClient, private  router: Router) { }
  ngOnInit() {
  }
  buttonClick = function () {
    this.router.navigateByUrl('client-login');
  };
}
