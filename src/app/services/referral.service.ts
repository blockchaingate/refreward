import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class ReferralService {
  constructor(private api: ApiService) { }

  getAll(pageSize: number, pageNum: number) {
    return this.api.getPrivate('bnbreferral/' + pageSize + '/' + pageNum);
  }

  add(user: string, referral: string) {
    const data = {
        user,
        referral
    };

    return this.api.postPrivate('bnbreferral', data);
  }

  delete(id: string) {
    return this.api.deletePrivate('bnbreferral/' + id);
  }

  get(id: string) {
    return this.api.getPrivate('bnbreferral/' + id);
  }

  update(id: string, user: string, referral: string) {
    const data = {
      user,
      referral
    };

    return this.api.putPrivate('bnbreferral/' + id, data);
  }
}