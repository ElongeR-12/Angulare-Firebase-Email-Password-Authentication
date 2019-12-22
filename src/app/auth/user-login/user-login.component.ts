import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isNewUser = true;
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  changeForm() {
    this.isNewUser = !this.isNewUser
  }

}
