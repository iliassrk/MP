import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteAutomobileComponent } from './activite-automobile.component';

describe('ActiviteAutomobileComponent', () => {
  let component: ActiviteAutomobileComponent;
  let fixture: ComponentFixture<ActiviteAutomobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteAutomobileComponent]
    });
    fixture = TestBed.createComponent(ActiviteAutomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
