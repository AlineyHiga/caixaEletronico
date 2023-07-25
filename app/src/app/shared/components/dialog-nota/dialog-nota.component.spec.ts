import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotaComponent } from './dialog-nota.component';

describe('DialogNotaComponent', () => {
  let component: DialogNotaComponent;
  let fixture: ComponentFixture<DialogNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNotaComponent]
    });
    fixture = TestBed.createComponent(DialogNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
