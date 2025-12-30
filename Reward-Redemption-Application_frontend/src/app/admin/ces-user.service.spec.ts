import { TestBed } from '@angular/core/testing';

import { CesUserService } from './ces-user.service';

describe('CesUserService', () => {
  let service: CesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
