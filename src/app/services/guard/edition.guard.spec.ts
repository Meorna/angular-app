import { TestBed } from '@angular/core/testing';

import { EditionGuard } from './edition.guard';

describe('EditionGuard', () => {
  let guard: EditionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
