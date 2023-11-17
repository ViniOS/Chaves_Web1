import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaveDialogComponent } from './edit-chave-dialog.component';

describe('EditChaveDialogComponent', () => {
  let component: EditChaveDialogComponent;
  let fixture: ComponentFixture<EditChaveDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChaveDialogComponent]
    });
    fixture = TestBed.createComponent(EditChaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
