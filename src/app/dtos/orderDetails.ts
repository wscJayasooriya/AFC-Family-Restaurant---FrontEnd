import {Meal} from './meal';
import {Orders} from './orders';

export class OrderDetails {
  qty: number;
  gross_Amount: number;
  meal: Meal;
  orderDTO: Orders;

  constructor(qty: number, gross_Amount: number, meal: Meal) {
    this.qty = qty;
    this.gross_Amount = gross_Amount;
    this.meal = meal;
  }
}
