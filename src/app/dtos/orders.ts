import {CustomerRegister} from './customerRegister';
import {OrderDetails} from './orderDetails';

export class Orders {
  o_ID: number;
  o_Date: string;
  o_Time: string;
  customer: CustomerRegister;
  orderDetailsDTO: Array<OrderDetails>;
}
