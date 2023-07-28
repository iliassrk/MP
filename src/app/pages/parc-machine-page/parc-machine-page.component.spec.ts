import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcMachinePageComponent } from './parc-machine-page.component';

describe('ParcMachinePageComponent', () => {
  let component: ParcMachinePageComponent;
  let fixture: ComponentFixture<ParcMachinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcMachinePageComponent]
    });
    fixture = TestBed.createComponent(ParcMachinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
