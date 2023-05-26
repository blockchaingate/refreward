import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class UserService {
  constructor(private api: ApiService) { }

  signin(user: any) {
    return this.api.postPublic('fundark/user/login', user);
  }
}