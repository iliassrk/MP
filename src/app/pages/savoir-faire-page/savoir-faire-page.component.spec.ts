import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFairePageComponent } from './savoir-faire-page.component';

describe('SavoirFairePageComponent', () => {
  let component: SavoirFairePageComponent;
  let fixture: ComponentFixture<SavoirFairePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavoirFairePageComponent]
    });
    fixture = TestBed.createComponent(SavoirFairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
