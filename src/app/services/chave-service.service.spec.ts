import { TestBed } from '@angular/core/testing';

import { ChaveServiceService } from './chave-service.service';

describe('ChaveServiceService', () => {
  let service: ChaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
