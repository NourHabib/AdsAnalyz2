import { TestBed } from '@angular/core/testing';

import { AdvsServiceService } from './advs-service.service';

describe('AdvsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvsServiceService = TestBed.get(AdvsServiceService);
    expect(service).toBeTruthy();
  });
});
