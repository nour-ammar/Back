import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordInvalid: boolean = false;

  validatePassword() {
    const passwordInput = <HTMLInputElement>document.getElementById("exampleInputPassword1");
    this.passwordInvalid = passwordInput.value.length < 8;
  }

}
