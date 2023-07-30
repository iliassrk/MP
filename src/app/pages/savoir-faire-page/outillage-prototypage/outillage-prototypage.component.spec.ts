import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutillagePrototypageComponent } from './outillage-prototypage.component';

describe('OutillagePrototypageComponent', () => {
  let component: OutillagePrototypageComponent;
  let fixture: ComponentFixture<OutillagePrototypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutillagePrototypageComponent]
    });
    fixture = TestBed.createComponent(OutillagePrototypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
