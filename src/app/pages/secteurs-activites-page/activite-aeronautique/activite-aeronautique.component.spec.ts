import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteAeronautiqueComponent } from './activite-aeronautique.component';

describe('ActiviteAeronautiqueComponent', () => {
  let component: ActiviteAeronautiqueComponent;
  let fixture: ComponentFixture<ActiviteAeronautiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteAeronautiqueComponent]
    });
    fixture = TestBed.createComponent(ActiviteAeronautiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
