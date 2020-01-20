import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public show = false
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
   }
  togglePassword() {
    this.show = !this.show;
  }
  onLogin(form) { 
    this.authService.logIn(form.value)
  }

}
