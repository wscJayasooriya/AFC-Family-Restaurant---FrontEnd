import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    swal({
      position: 'center',
      type: 'success',
      title: 'Your has been Sign out Now..',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
