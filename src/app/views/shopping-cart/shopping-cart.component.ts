import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  constructor(private http: HttpClient, private  router: Router) { }

  ngOnInit() {
  }
  buttonClick = function () {
    this.router.navigateByUrl('check-out');
  };

}
