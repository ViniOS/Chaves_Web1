import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChaveDialogComponent } from './create-chave-dialog.component';

describe('CreateChaveDialogComponent', () => {
  let component: CreateChaveDialogComponent;
  let fixture: ComponentFixture<CreateChaveDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChaveDialogComponent]
    });
    fixture = TestBed.createComponent(CreateChaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
