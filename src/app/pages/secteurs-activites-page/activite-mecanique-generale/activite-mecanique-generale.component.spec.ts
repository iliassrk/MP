import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteMecaniqueGeneraleComponent } from './activite-mecanique-generale.component';

describe('ActiviteMecaniqueGeneraleComponent', () => {
  let component: ActiviteMecaniqueGeneraleComponent;
  let fixture: ComponentFixture<ActiviteMecaniqueGeneraleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteMecaniqueGeneraleComponent]
    });
    fixture = TestBed.createComponent(ActiviteMecaniqueGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
