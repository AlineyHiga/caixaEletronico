import { MatDialog } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaEletronicoComponent } from './caixa-eletronico.component';
import { UtilService } from '../../shared/service/util/util.service';
import { mockUtil } from '../../shared/mock/mockUtil';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DialogNotaComponent } from '../../shared/components/dialog-nota/dialog-nota.component';
import { MatIconModule } from '@angular/material/icon';
import { mockDialog } from '../../shared/mock/mockDialog';

describe('CaixaEletronicoComponent', () => {
  let component: CaixaEletronicoComponent;
  let fixture: ComponentFixture<CaixaEletronicoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaixaEletronicoComponent],
      imports:[BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        DialogNotaComponent,
        MatIconModule,
      ],
      providers:[
        {provide: UtilService, useValue: mockUtil},
        {provide:MatDialog, useValue: mockDialog }
      ]
    });
    fixture = TestBed.createComponent(CaixaEletronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit', () => {
    component.ngOnInit();
    component.formCaixa.controls['valueSaque'].setValue(100);
    expect(component.hour).toBe('12:00');
    expect(component.saqueMax).toBe(10000);

  });

  it('should call onDestroy', () => {
    component.ngOnDestroy();
  });

  it('should get valor min message', () => {
    component.formCaixa.controls['valueSaque'].setValue('9');
    expect(component.errorMensagem()).toBe('O valor mínimo do saque é de R$ 10');
  });

  it('should get valor max message', () => {
    component.saqueMax=10000
    component.formCaixa.controls['valueSaque'].setValue('100000');
    expect(component.errorMensagem()).toBe('O valor máximo do saque é R$ 10000');
  });

  it('should call saque', () => {
    let spy = jest.spyOn(component.dialog,'open');
    component.saque();
    expect(spy).toBeCalled();
  });


});
