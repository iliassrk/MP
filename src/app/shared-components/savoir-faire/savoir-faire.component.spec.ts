import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFaireComponent } from './savoir-faire.component';

describe('SavoirFaireComponent', () => {
  let component: SavoirFaireComponent;
  let fixture: ComponentFixture<SavoirFaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavoirFaireComponent]
    });
    fixture = TestBed.createComponent(SavoirFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
