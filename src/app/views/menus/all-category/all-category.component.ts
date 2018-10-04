import { Component, OnInit } from '@angular/core';
import {Meal} from '../../../dtos/meal';
import {Router} from '@angular/router';
import {MealService} from '../../../services/meal.service';
import {OrderDetails} from '../../../dtos/orderDetails';
import {OrderdetailService} from '../../../services/orderdetail.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  getSelectedMeal: Array<Meal> = [];
  meals: Array<Meal> = [];
  selectedMeal: Meal = new Meal();
  closeResult: string;
  tempMeal: Meal = null;
  searchTerm: string;
  manuallySelected = false;
  gross_Amount = 0;
  sub_Total = 0;
  orderDetails: Array<OrderDetails> = [];
  orderDetail: OrderDetails;


  public show = false;
  public buttonName: any = 'Show';


  constructor(private router: Router, private mealService: MealService, private httpClient: HttpClient) { }

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
  addToAccount(meal, quantity) {
    const total = quantity * meal.price;
    this.gross_Amount = this.gross_Amount + total;
    this.sub_Total =  + this.gross_Amount;
    const remainingQTY = meal.qtyOnHand - quantity;
    this.orderDetail = new OrderDetails(quantity, total, meal);
    this.orderDetails.push(this.orderDetail);
    document.getElementById('finaltotal').setAttribute('value', this.gross_Amount.toString());
    document.getElementById('subtotal').setAttribute('value1', this.sub_Total.toString());
  }

  buttonClick = function () {
    this.router.navigateByUrl('check-out');
  };

  clear(): void {

  }
}
