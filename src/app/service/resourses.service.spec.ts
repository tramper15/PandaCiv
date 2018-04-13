import { TestBed, inject } from '@angular/core/testing';

import { ResoursesService } from './resourses.service';

describe('ResoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResoursesService]
    });
  });

  it('should be created', inject([ResoursesService], (service: ResoursesService) => {
    expect(service).toBeTruthy();
  }));
});
