import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteursActivitesPageComponent } from './secteurs-activites-page.component';

describe('SecteursActivitesPageComponent', () => {
  let component: SecteursActivitesPageComponent;
  let fixture: ComponentFixture<SecteursActivitesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecteursActivitesPageComponent]
    });
    fixture = TestBed.createComponent(SecteursActivitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
