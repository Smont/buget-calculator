import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buget-item-card',
  templateUrl: './buget-item-card.component.html',
  styleUrls: ['./buget-item-card.component.scss']
})
export class BugetItemCardComponent implements OnInit {

  @Input() isIncome: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
