import { TestBed } from '@angular/core/testing';

import { DadosHistoricosService } from './dados-historicos.service';

describe('DadosHistoricosService', () => {
  let service: DadosHistoricosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosHistoricosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
