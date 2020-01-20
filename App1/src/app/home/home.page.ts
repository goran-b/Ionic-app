import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public userName: String
  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.authService.UserNameChange.subscribe((d) => {
      this.userName = d as String
    })
  }
  logout() {
    this.authService.logOut()
  }
}
