import { TestBed } from '@angular/core/testing';

import { HasListGuard } from './has-list.guard';

describe('HasListGuard', () => {
  let guard: HasListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
