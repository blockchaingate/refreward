import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { ReferralAddComponent } from './referral-add/referral-add.component';
import { ReferralEditComponent } from './referral-edit/referral-edit.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'referrals', component: ReferralsComponent },
            { path: 'referral/add', component: ReferralAddComponent },
            { path: 'referral/:id', component: ReferralEditComponent },
            
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
