import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userServ: UserService) {}
  login() {
    const body = {
      email: this.email,
      password: this.password
    };
    this.userServ.signin(body).subscribe(
      (ret: any) => {
        console.log('ret===', ret);
      }
    );
  }
}
