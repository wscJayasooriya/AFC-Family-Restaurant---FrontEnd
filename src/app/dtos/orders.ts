import {OrderDetails} from './orderDetails';
import {Customer} from './customer';

export class Orders {
  o_ID: number;
  o_Date: string;
  o_Time: string;
  d_Name: string;
  d_Address: string;
  d_Tele: string;
  customerName: string;
  orderDetailsDTOS: Array<OrderDetails>;
}
