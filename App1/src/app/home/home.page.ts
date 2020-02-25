import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public userName: String
  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    this.authService.UserNameChange.subscribe((d) => {
      this.userName = d as String
    })
  }
  logout() {
    this.authService.logOut()
  }
  toMalf(){
    this.router.navigate(['malf'])
  }

  toNotes(){
    this.router.navigate(['notes'])
  }

  toQuiz(){
    this.router.navigate(['quiz'])
  }

}
