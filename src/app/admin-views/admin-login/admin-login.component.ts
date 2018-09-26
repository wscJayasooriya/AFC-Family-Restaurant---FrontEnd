import { Component, OnInit } from '@angular/core';
import {User} from '../../dtos/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user: User = new User();
  failed: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.user).subscribe(
      (result) => {
        this.failed = !result;
      }
    );
  }
}
