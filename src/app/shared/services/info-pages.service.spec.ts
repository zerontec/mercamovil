import { TestBed, inject } from '@angular/core/testing';

import { InfoPagesService } from './info-pages.service';

describe('InfoPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPagesService]
    });
  });

  it('should be created', inject([InfoPagesService], (service: InfoPagesService) => {
    expect(service).toBeTruthy();
  }));
});
