import { Component, Inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-nota',
  templateUrl: './dialog-nota.component.html',
  styleUrls: ['./dialog-nota.component.css'],
  standalone:true,
  imports: [MatDialogModule, NgFor, NgIf],
})
export class DialogNotaComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

}
