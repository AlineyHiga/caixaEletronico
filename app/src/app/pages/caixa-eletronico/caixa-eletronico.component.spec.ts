import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaEletronicoComponent } from './caixa-eletronico.component';

describe('CaixaEletronicoComponent', () => {
  let component: CaixaEletronicoComponent;
  let fixture: ComponentFixture<CaixaEletronicoComponent>;
  let lateHour ='23:00:00';
  let dayHour ='19:30:00';
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaixaEletronicoComponent]
    });
    fixture = TestBed.createComponent(CaixaEletronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
