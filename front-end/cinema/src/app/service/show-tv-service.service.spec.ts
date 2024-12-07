import { TestBed } from '@angular/core/testing';

import { ShowTvServiceService } from './show-tv-service.service';

describe('ShowTvServiceService', () => {
  let service: ShowTvServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTvServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
