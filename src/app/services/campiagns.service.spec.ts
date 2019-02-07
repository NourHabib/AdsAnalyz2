import { TestBed } from '@angular/core/testing';

import { CampiagnsService } from './campiagns.service';

describe('CampiagnsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampiagnsService = TestBed.get(CampiagnsService);
    expect(service).toBeTruthy();
  });
});
