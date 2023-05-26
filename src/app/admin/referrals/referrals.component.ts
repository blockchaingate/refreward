import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../../services/referral.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit{
  pageSize: number = 10;
  pageNum: number = 0;
  referrals: any;
  constructor(
    private referralServ: ReferralService) {}

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll() {
    this.referralServ.getAll(this.pageSize, this.pageNum).subscribe(
      (ret: any) => {
        if(ret.success) {
          this.referrals = ret.data;
        }
      }
    );
  }

  next() {
    if(this.referrals && this.referrals.length == this.pageSize) {
      this.pageNum ++;
      this.getAll();
    }
  }

  prev() {
    if(this.pageNum >= 1) {
      this.pageNum --;
      this.getAll();
    }
  }

  delete(id: string) {
    this.referralServ.delete(id).subscribe(
      (ret: any) => {
        if(ret.success) {
          this.getAll();
        }
      }
    );
  }
}
