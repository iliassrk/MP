import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteFerroviaireComponent } from './activite-ferroviaire.component';

describe('ActiviteFerroviaireComponent', () => {
  let component: ActiviteFerroviaireComponent;
  let fixture: ComponentFixture<ActiviteFerroviaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteFerroviaireComponent]
    });
    fixture = TestBed.createComponent(ActiviteFerroviaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
