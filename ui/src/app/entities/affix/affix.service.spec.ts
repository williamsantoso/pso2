import { TestBed, inject } from '@angular/core/testing';

import { AffixService } from './affix.service';

describe('AffixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffixService]
    });
  });

  it('should be created', inject([AffixService], (service: AffixService) => {
    expect(service).toBeTruthy();
  }));
});
