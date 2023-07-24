import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MperBannerComponent } from './mper-banner.component';

describe('MperBannerComponent', () => {
  let component: MperBannerComponent;
  let fixture: ComponentFixture<MperBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MperBannerComponent]
    });
    fixture = TestBed.createComponent(MperBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
