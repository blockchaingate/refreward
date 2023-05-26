import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-referral-edit',
  templateUrl: './referral-edit.component.html',
  styleUrls: ['./referral-edit.component.scss']
})
export class ReferralEditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private referralServ: ReferralService) {}
  id: string = '';
  user: string = '';
  referral: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        if(!id) {
          return;
        }
        this.id = id;
        this.referralServ.get(id).subscribe(
          (ret: any) => {
            if(ret.success) {
              const referral = ret.data;
              this.user = referral.user;
              this.referral = referral.referral;
            }
          }
        );
      }
    );
    
  }

  update() {
    this.referralServ.update(this.id, this.user, this.referral).subscribe(
      (ret: any) => {
        if(ret.success) {
          this.router.navigate(['/admin/referrals']);
        }
      }
    );
  }
}
