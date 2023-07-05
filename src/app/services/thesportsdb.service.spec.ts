import { TestBed } from '@angular/core/testing';

import { ThesportsdbService } from './thesportsdb.service';

describe('ThesportsdbService', () => {
  let service: ThesportsdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThesportsdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
