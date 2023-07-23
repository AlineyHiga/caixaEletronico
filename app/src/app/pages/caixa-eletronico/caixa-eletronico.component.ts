import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilService } from '../../shared/service/util/util.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit, OnDestroy {
  hour:string;
  saqueMax: number;
  valueSaque = 10;
  formCaixa:FormGroup;
  sub$: Subscription | undefined;
  constructor(
    private utilService: UtilService,
  ){
    this.hour = this.utilService.getFormatHour();
    this.saqueMax = this.utilService.checkSaqueMax(this.hour);
    this.formCaixa = new FormGroup({
      valueSaque: new FormControl(this.valueSaque,[Validators.max(this.saqueMax), Validators.min(10)]),
    });

  }
  ngOnInit(): void {
    this.sub$ = this.formCaixa.valueChanges.subscribe(()=> {
      this.hour = this.utilService.getFormatHour();
      this.saqueMax = this.utilService.checkSaqueMax(this.hour);
    })
  }
  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }
  saque(){
    let notas=this.utilService.getQtdeNotas(this.valueSaque,[10,20,50]);
    console.log(notas);
  }

  errorMensagem(): string {
    return this.formCaixa.controls['valueSaque'].hasError('min')?
      'O valor mínimo do saque é de R$ 10':
      `O valor máximo do saque é R$ ${this.saqueMax}`;
  }
}
