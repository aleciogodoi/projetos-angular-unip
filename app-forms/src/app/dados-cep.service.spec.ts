import { TestBed } from '@angular/core/testing';

import { DadosCepService } from './dados-cep.service';

describe('DadosCepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosCepService = TestBed.get(DadosCepService);
    expect(service).toBeTruthy();
  });
});
