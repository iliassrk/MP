import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteursActivitesComponent } from './secteurs-activites.component';

describe('SecteursActivitesComponent', () => {
  let component: SecteursActivitesComponent;
  let fixture: ComponentFixture<SecteursActivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecteursActivitesComponent]
    });
    fixture = TestBed.createComponent(SecteursActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
