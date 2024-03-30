import { TestBed } from '@angular/core/testing';

import { MultiplicatorService } from './multiplicator.service';

describe('MultiplicatorService', () => {
  let service: MultiplicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
