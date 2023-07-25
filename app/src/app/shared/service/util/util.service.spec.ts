import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getFormatHour', () =>{
    let date = new Date();
    expect(service.getFormatHour()).toBe(`${date.getHours()}:${date.getMinutes()}`);
  });

  it('should call getQtdeNotas', () => {
    let valor = 15330;
    let listQtdeNota = [50,20,10];
    let objQtdeNota:object = {qtdNotas:[306,1,1], valor_notas: [50,20,10], valor_resto: 0 }
    expect(service.getQtdeNotas(valor,listQtdeNota)).toStrictEqual(objQtdeNota)
  });

  it('should get 1000 in the checkSaqueMax', () => {
    expect(service.checkSaqueMax('23:00')).toBe(1000);
  });

  it('should get 10000 in the checkSaqueMax', () => {
    expect(service.checkSaqueMax('6:01')).toBe(10000);
  });

});
