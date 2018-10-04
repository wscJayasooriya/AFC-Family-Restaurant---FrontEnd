import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.css']
})
export class MenuDashComponent implements OnInit {

  constructor(private http: HttpClient, private  router: Router) { }

  ngOnInit() {
  }
  buttonClick = function () {
    this.router.navigateByUrl('check-out');
  };


}
