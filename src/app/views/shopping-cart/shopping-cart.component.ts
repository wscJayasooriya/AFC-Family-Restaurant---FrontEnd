import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MealService} from '../../services/meal.service';
import {Meal} from '../../dtos/meal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  meals: Array<Meal> = [];

  constructor(private http: HttpClient, private  router: Router, private mealService: MealService) { }

  ngOnInit() {
  }
  buttonClick = function () {
    this.router.navigateByUrl('check-out');
  };

}
