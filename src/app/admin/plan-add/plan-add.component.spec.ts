import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAddComponent } from './plan-add.component';

describe('PlanAddComponent', () => {
  let component: PlanAddComponent;
  let fixture: ComponentFixture<PlanAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanAddComponent]
    });
    fixture = TestBed.createComponent(PlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
