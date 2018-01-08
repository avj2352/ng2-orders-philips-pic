import { RouterModule,Routes } from "@angular/router"
import { MainComponent } from "../../components/maincomponent/maincomponent"
import { OrderComponennt } from "../../components/orders/ordercomponent"
import { ViewOrdersComponent } from "../../components/orders/vieworderscomponent/vieworderscomponent";

const routeList : Routes =[
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:ViewOrdersComponent},
{path:"orderdetails/:id",component:OrderComponennt},

];
export const appRoutingModule =RouterModule.forRoot(routeList);