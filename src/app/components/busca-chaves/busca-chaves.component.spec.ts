import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaChavesComponent } from './busca-chaves.component';

describe('BuscaChavesComponent', () => {
  let component: BuscaChavesComponent;
  let fixture: ComponentFixture<BuscaChavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaChavesComponent]
    });
    fixture = TestBed.createComponent(BuscaChavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
