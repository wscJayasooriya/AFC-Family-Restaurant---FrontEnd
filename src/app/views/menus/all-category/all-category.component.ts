import { Component, OnInit } from '@angular/core';
import {Meal} from '../../../dtos/meal';
import {Router} from '@angular/router';
import {MealService} from '../../../services/meal.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  getSelectedMeal: Array<Meal> = [];
  meals: Array<Meal> = [];
  selectedMeal: Meal = new Meal();
  tempMeal: Meal = null;
  searchTerm: string;
  manuallySelected = false;

  public show = false;
  public buttonName: any = 'Show';


  constructor(private router: Router, private mealService: MealService) { }

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }


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
  buttonClick = function () {
    this.router.navigateByUrl('shopping-cart');
  };
}
