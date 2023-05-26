import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferralService } from 'src/app/services/referral.service';

@Component({
  selector: 'app-referral-add',
  templateUrl: './referral-add.component.html',
  styleUrls: ['./referral-add.component.scss']
})
export class ReferralAddComponent implements OnInit{

  constructor(
    private router: Router,
    private referralServ: ReferralService) {}
  user: string = '';
  referral: string = '';

  ngOnInit(): void {
    
  }

  add() {
    this.referralServ.add(this.user, this.referral).subscribe(
      (ret: any) => {
        if(ret.success) {
          this.router.navigate(['/admin/referrals']);
        }
      }
    );
  }

  
}
