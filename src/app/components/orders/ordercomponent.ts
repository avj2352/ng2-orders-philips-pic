import{Component,Input} from "@angular/core"
import {Router} from "@angular/router"
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router'

@Component(
    {
        selector: "order-comp",
        templateUrl:"ordercomponent.html",
        styleUrls:["ordercomponent.scss"]
    }
)
export class OrderComponennt{


    
    stateForm: FormGroup;
    
      showDropDown = false;
      states = ['Alabama', 'Alaska',  'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware'];
  
    
      initForm(): FormGroup {
        return this.stateForm = this.fb.group({
          search: [null]
        })
      }
    
      ngOnInit(): void {
        this.route.params.subscribe(params => {
            // alert(params['id']+"id is ");

        });
    }
     selectValue(value) {
       this.stateForm.patchValue({"search": value});
       this.showDropDown = false;
     }
      closeDropDown() {
        this.showDropDown = false;
      }
    
      openDropDown() {
        this.showDropDown = true;
      }
    
      getSearchValue() {
        return this.stateForm.value.search;
      }





    welcome : string;
    procedures : [{
        procedure: string,
        indication : string
       
    }];
    
    pushValueToList()
    {
        // alert("caleed");
        this.procedures.push({
            procedure:"puched",
            indication:"pusing"
        });

        // alert(this.procedures);
    }

    constructor(private fb: FormBuilder,private route: ActivatedRoute){
        this.welcome = "Display List using ngFor in Angular 2"
        this.initForm()
        this.procedures = [{
            procedure : "MRI Brain With Perfusion",
            indication: "Enter Indication",
          
        },
        {
            procedure  : "MRI Brain With Perfusion",
            indication: "Enter Indication",
          
        }
       ]
       
    };
}