import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteMedicaleComponent } from './activite-medicale.component';

describe('ActiviteMedicaleComponent', () => {
  let component: ActiviteMedicaleComponent;
  let fixture: ComponentFixture<ActiviteMedicaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteMedicaleComponent]
    });
    fixture = TestBed.createComponent(ActiviteMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
