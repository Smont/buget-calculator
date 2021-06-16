import { BudgetItem } from '../../shared/models/buget-item.models';
 
 
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
   budgetItems: BudgetItem[] =  new Array<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
  }
}
