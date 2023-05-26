import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralEditComponent } from './referral-edit.component';

describe('ReferralEditComponent', () => {
  let component: ReferralEditComponent;
  let fixture: ComponentFixture<ReferralEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralEditComponent]
    });
    fixture = TestBed.createComponent(ReferralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
