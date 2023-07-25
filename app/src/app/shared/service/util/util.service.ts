import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { IQtdeNota } from '../../interface/qtdeNota';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {}

  getFormatHour(): string {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  getQtdeNotas(valor: number, listNumNotas: number[]): IQtdeNota {
    let val = valor;
    let sortNumNotas = listNumNotas.sort().reverse();
    let listQtdeNota:any =
    {
      qtdNotas:[],
      valor_notas:[],
      valor_resto:0,
    };
    sortNumNotas.forEach((numNota) => {
      let qtdeNota =(val - (val % numNota) ) / numNota;
      val = val % numNota;
      if(qtdeNota != 0 ){
        listQtdeNota.valor_notas.push(numNota);
        listQtdeNota.qtdNotas.push(qtdeNota);
      }
    });
    listQtdeNota = {... listQtdeNota, valor_resto: val};
    return listQtdeNota;
  }

  checkSaqueMax(hour: string): number {
    let compareHour =new Date('jul 1 ' + hour);
    if (
      compareHour <= new Date('jul 1 06:00') ||
      compareHour >= new Date('jul 1 22:00')
    ) {
      return 1000;
    } else {
      return 10000;
    }
  }

}
