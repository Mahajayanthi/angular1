import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenListComponent } from './canteen-list.component';

describe('canteenListComponent', () => {
  let component: CanteenListComponent;
  let fixture: ComponentFixture<CanteenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
