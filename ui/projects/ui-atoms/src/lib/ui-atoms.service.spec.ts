import { TestBed } from '@angular/core/testing';

import { UiAtomsService } from './ui-atoms.service';

describe('UiAtomsService', () => {
  let service: UiAtomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiAtomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
