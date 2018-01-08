import { Injectable }    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router"
import { Order } from './order';

@Injectable()
export class OrderService {
   order:Order[];
    constructor(order:Order[])
    {
        this.order=[{
            
                    id:'1',
                    ordernumber:'123',
                    date:'01-01-2017',
                    patientname:'John Doe',
                    requestername:'Martin Samuels'
            
                    
                  },
                  {
                    
                    id:'2',
                    ordernumber:'456',
                    date:'02-02-2017',
                     patientname:'John Mart',
                    requestername:'Martin Samuels'
                    
                            
                  }
                ]
            
    }

    getOrders():Order[] {
        return this.order;
    }



}