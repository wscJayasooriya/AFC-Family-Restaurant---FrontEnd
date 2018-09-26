import { Component, OnInit } from '@angular/core';
import {Meal} from '../../../dtos/meal';
import {Router} from '@angular/router';
import {MealService} from '../../../services/meal.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  getSelectedMeal: Array<Meal> = [];
  meals: Array<Meal> = [];
  selectedMeal: Meal = new Meal();
  tempMeal: Meal = null;
  manuallySelected = false;
  constructor(private router: Router, private mealService: MealService) { }

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
