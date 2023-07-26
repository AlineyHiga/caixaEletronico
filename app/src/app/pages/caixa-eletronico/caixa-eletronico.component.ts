import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilService } from '../../shared/service/util/util.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, timeInterval, timeout } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogNotaComponent } from '../../shared/components/dialog-nota/dialog-nota.component';

@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit, OnDestroy {
  hour:string;
  saqueMax: number;
  saqueMin:number = 10;
  valueSaque = 10;
  formCaixa:FormGroup;
  sub$: Subscription | undefined;
  listNotas=[10,20,50];
  constructor(
    private utilService: UtilService,
    public dialog: MatDialog,
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
      this.formCaixa.controls['valueSaque'].setValidators([Validators.max(this.saqueMax), Validators.min(this.saqueMin)])
      this.formCaixa.controls['valueSaque'].markAsTouched();
    })
  }
  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }
  saque(){
    let notas=this.utilService.getQtdeNotas(this.valueSaque,this.listNotas);
    this.dialog.open(DialogNotaComponent,{
      data: {...notas, saque:this.valueSaque}
    })
  }

  errorMensagem(): string {
    return this.formCaixa.controls['valueSaque'].hasError('min')?
      'O valor mínimo do saque é de R$ 10':
      `O valor máximo do saque é R$ ${this.saqueMax}`;
  }
}
