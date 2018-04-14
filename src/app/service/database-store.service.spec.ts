import { TestBed, inject } from '@angular/core/testing';

import { DatabaseStoreService } from './database-store.service';

describe('DatabaseStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseStoreService]
    });
  });

  it('should be created', inject([DatabaseStoreService], (service: DatabaseStoreService) => {
    expect(service).toBeTruthy();
  }));
});
