import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralAddComponent } from './referral-add.component';

describe('ReferralAddComponent', () => {
  let component: ReferralAddComponent;
  let fixture: ComponentFixture<ReferralAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralAddComponent]
    });
    fixture = TestBed.createComponent(ReferralAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
