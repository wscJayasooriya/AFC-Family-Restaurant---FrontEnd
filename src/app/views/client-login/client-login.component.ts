import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClientLoginService} from '../../services/client-login.service';
import {Comment} from '../../dtos/comment';
import {CustomerRegister} from '../../dtos/customerRegister';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  customer: CustomerRegister = new CustomerRegister();
  failed: boolean;
  @ViewChild('frmLogin') frmLogin = NgForm;

  constructor(private http: HttpClient, private router: Router, private clientLoginService: ClientLoginService) { }

  ngOnInit() {
  }

  buttonClick = function () {
    this.router.navigateByUrl('registration');
  };

  login(): void {
    this.clientLoginService.login(this.customer).subscribe(
      (result) => {
        this.failed = !result;
      }
    );
  }

}
