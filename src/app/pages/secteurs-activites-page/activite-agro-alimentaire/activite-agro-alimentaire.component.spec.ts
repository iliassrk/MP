import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteAgroAlimentaireComponent } from './activite-agro-alimentaire.component';

describe('ActiviteAgroAlimentaireComponent', () => {
  let component: ActiviteAgroAlimentaireComponent;
  let fixture: ComponentFixture<ActiviteAgroAlimentaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteAgroAlimentaireComponent]
    });
    fixture = TestBed.createComponent(ActiviteAgroAlimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
