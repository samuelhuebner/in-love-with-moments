import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(user: User): void {
    console.log(user)
    this.authService.signIn(user.username, user.password);
  }
}
