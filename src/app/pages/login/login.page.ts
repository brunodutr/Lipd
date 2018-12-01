import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });

    this._authService.isAuthenticate() && this._router.navigate(['home']);
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    this._authService
      .login(data.email, data.senha)
      .then(async () => {
        this._router.navigate(['home']);
      })
      .catch(err => {
        this.loginError = err;
      });
  }
}
