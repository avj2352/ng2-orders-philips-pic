import{Component,Input} from "@angular/core"
import {Router} from "@angular/router"
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OrderComponennt} from '../../orders/ordercomponent';
import {Order} from '../../../services/ordersservice/order';
import {OrderService} from '../../../services/ordersservice/ordersservice';
import {ORDERS} from '../../../services/ordersservice/mockorders';

@Component(
    {
        selector: "vieworders-comp",
        templateUrl:"vieworderscomponent.html"
      
       
    }
)

export class ViewOrdersComponent{

    orders : Order[];
    
     constructor(private routeService:Router)
     {
      this.orders=ORDERS;
     }
 
     getInfo(i)
     {
         alert("clicked i is "+i);
         console.log(this.orders[i].date+"is the selected order")
         this.routeService.navigate(['/orderdetails',i ]);
     }

}