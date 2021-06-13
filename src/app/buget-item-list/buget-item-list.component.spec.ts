import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugetItemListComponent } from './buget-item-list.component';

describe('BugetItemListComponent', () => {
  let component: BugetItemListComponent;
  let fixture: ComponentFixture<BugetItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugetItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugetItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
