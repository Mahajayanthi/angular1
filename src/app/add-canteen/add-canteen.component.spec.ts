import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcanteenComponent } from './add-canteen.component';

describe('AddcanteenComponent', () => {
  let component: AddcanteenComponent;
  let fixture: ComponentFixture<AddcanteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcanteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcanteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
