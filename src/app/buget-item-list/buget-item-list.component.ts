import { BudgetItem } from '../../shared/models/buget-item.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[]|any;


  constructor() { }

  ngOnInit(): void {
  }

}
