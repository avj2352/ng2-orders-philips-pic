import{ NgModule } from "@angular/core"
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Custom Components
import { LetterBoldPipe } from './modules/shared/letter-bold.pipe';
import { MainComponent } from "./components/maincomponent/maincomponent";
import { ViewOrdersComponent } from "./components/orders/vieworderscomponent/vieworderscomponent";
import { SearchFilterPipe } from './modules/shared/filter-pipe';
import { ClickOutsideDirective } from './modules/shared/dropdown.directive';
import {OrderComponennt} from './components/orders/ordercomponent';
import { appRoutingModule } from './modules/routes/app.route';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations:[
        MainComponent,
        SearchFilterPipe,
        LetterBoldPipe,
        ClickOutsideDirective,
        OrderComponennt,
        ViewOrdersComponent,
        NavbarComponent        
    ],
    bootstrap:[MainComponent],
    imports:[BrowserModule,ReactiveFormsModule,FormsModule,appRoutingModule],
   exports:[ SearchFilterPipe,LetterBoldPipe,ClickOutsideDirective]
   })
export class AppModule{}