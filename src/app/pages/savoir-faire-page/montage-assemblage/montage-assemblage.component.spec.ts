import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontageAssemblageComponent } from './montage-assemblage.component';

describe('MontageAssemblageComponent', () => {
  let component: MontageAssemblageComponent;
  let fixture: ComponentFixture<MontageAssemblageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontageAssemblageComponent]
    });
    fixture = TestBed.createComponent(MontageAssemblageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
