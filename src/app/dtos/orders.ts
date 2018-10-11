import {OrderDetails} from './orderDetails';
import {Customer} from './customer';

export class Orders {
  o_ID: number;
  o_Date: string;
  o_Time: string;
  customerName: string;
  orderDetailsDTOS: Array<OrderDetails>;
}
