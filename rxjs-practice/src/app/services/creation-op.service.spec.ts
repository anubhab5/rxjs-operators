import { TestBed } from '@angular/core/testing';

import { CreationOpService } from './creation-op.service';

describe('CreationOpService', () => {
  let service: CreationOpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationOpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
