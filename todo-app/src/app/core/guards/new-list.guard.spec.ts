import { TestBed } from '@angular/core/testing';

import { NewListGuard } from './new-list.guard';

describe('NewListGuard', () => {
  let guard: NewListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
