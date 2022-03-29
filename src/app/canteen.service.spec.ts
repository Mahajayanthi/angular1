import { TestBed } from '@angular/core/testing';

import { canteenService } from './canteen.service';

describe('canteenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: canteenService = TestBed.get(canteenService);
    expect(service).toBeTruthy();
  });
});
