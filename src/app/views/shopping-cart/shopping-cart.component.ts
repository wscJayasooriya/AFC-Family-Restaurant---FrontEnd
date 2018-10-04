import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MealService} from '../../services/meal.service';
import {Meal} from '../../dtos/meal';
import {OrderDetails} from '../../dtos/orderDetails';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  getSelectedMeal: Array<Meal> = [];
  meals: Array<Meal> = [];
  selectedMeal: Meal = new Meal();
  closeResult: string;
  tempMeal: Meal = null;
  searchTerm: string;
  manuallySelected = false;
  gross_Amount = 0;
  orderDetails: Array<OrderDetails> = [];
  orderDetail: OrderDetails;

  constructor(private http: HttpClient, private  router: Router, private mealService: MealService) { }

  ngOnInit() {
    this.loadAllMeals();
  }

  loadAllMeals(): void {
    this.mealService.getAllMeals().subscribe(
      (result) => {
        this.meals = result;
        for (let i = 0; i < this.meals.length; i++) {
          this.meals[i].imageURL = this.mealService.getImage(this.meals[i].imageURL);
        }
      }
    );
  }
}
