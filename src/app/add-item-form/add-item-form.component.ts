import { BudgetItem } from './../../shared/models/buget-item.models';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
 

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item:BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
  }

}
