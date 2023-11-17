import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChavesDialogComponent } from './search-chaves-dialog.component';

describe('SearchChavesDialogComponent', () => {
  let component: SearchChavesDialogComponent;
  let fixture: ComponentFixture<SearchChavesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchChavesDialogComponent]
    });
    fixture = TestBed.createComponent(SearchChavesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
