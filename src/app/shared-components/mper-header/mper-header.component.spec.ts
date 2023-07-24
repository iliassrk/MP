import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MperHeaderComponent } from './mper-header.component';

describe('MperHeaderComponent', () => {
  let component: MperHeaderComponent;
  let fixture: ComponentFixture<MperHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MperHeaderComponent]
    });
    fixture = TestBed.createComponent(MperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
