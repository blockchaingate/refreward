import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private storage: StorageMap,
    private userServ: UserService
    ) {}
  login() {
    const body = {
      email: this.email,
      password: this.password
    };
    this.userServ.signin(body).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
        if(ret.success) {
          const data = ret.data;
          this.storage.set('token', data.token).subscribe(() => {
            const path = '/admin';
            this.router.navigate([path]); 
          })

        }
      }
    );
  }
}
