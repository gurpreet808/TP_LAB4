import { TestBed, inject } from '@angular/core/testing';

import { JugadaService } from './jugada.service';

describe('JugadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JugadaService]
    });
  });

  it('should be created', inject([JugadaService], (service: JugadaService) => {
    expect(service).toBeTruthy();
  }));
});
