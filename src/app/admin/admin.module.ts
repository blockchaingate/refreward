import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { ReferralAddComponent } from './referral-add/referral-add.component';
import { ReferralEditComponent } from './referral-edit/referral-edit.component';
import { PlansComponent } from './plans/plans.component';
import { PlanAddComponent } from './plan-add/plan-add.component';
import { PlanEditComponent } from './plan-edit/plan-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    ReferralsComponent,
    ReferralAddComponent,
    ReferralEditComponent,
    PlansComponent,
    PlanAddComponent,
    PlanEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
