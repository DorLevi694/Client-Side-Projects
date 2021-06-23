import { TestBed } from '@angular/core/testing';

import { ListExistGuard } from './list-exist.guard';

describe('ListExistGuard', () => {
  let guard: ListExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
