import {Meal} from './meal';

export class OrderDetails {
  qty: number;
  gross_Amount: number;
  meal: Meal;

  constructor(qty: number, gross_Amount: number, meal: Meal) {
    this.qty = qty;
    this.gross_Amount = gross_Amount;
    this.meal = meal;
  }
}
