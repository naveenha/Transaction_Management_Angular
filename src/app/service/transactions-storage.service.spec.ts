import { TestBed } from '@angular/core/testing';

import { TransactionsStorageService } from './transactions-storage.service';

describe('TransactionsStorageService', () => {
  let service: TransactionsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
