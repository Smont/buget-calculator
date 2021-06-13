import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugetItemCardComponent } from './buget-item-card.component';

describe('BugetItemCardComponent', () => {
  let component: BugetItemCardComponent;
  let fixture: ComponentFixture<BugetItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugetItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugetItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
