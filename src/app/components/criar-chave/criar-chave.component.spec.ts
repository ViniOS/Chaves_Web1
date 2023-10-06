import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarChaveComponent } from './criar-chave.component';

describe('CriarChaveComponent', () => {
  let component: CriarChaveComponent;
  let fixture: ComponentFixture<CriarChaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarChaveComponent]
    });
    fixture = TestBed.createComponent(CriarChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
