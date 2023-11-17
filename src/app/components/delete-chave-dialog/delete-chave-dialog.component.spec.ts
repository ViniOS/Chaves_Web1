import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChaveDialogComponent } from './delete-chave-dialog.component';

describe('DeleteChaveDialogComponent', () => {
  let component: DeleteChaveDialogComponent;
  let fixture: ComponentFixture<DeleteChaveDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChaveDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteChaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
