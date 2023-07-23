import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleSectionComponent } from './header-title-section.component';

describe('HeaderTitleSectionComponent', () => {
  let component: HeaderTitleSectionComponent;
  let fixture: ComponentFixture<HeaderTitleSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTitleSectionComponent]
    });
    fixture = TestBed.createComponent(HeaderTitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
