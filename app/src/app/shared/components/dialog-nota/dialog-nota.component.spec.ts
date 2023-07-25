import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DialogNotaComponent } from './dialog-nota.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgFor, NgIf } from '@angular/common';

describe('DialogNotaComponent', () => {

  let component: DialogNotaComponent;
  let fixture: ComponentFixture<DialogNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, NgFor, NgIf],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(DialogNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
