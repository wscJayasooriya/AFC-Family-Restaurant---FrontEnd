import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
