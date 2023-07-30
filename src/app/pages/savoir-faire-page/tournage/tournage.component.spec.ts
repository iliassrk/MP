import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournageComponent } from './tournage.component';

describe('TournageComponent', () => {
  let component: TournageComponent;
  let fixture: ComponentFixture<TournageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournageComponent]
    });
    fixture = TestBed.createComponent(TournageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
