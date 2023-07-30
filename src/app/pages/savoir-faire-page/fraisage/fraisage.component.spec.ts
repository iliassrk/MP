import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisageComponent } from './fraisage.component';

describe('FraisageComponent', () => {
  let component: FraisageComponent;
  let fixture: ComponentFixture<FraisageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraisageComponent]
    });
    fixture = TestBed.createComponent(FraisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
