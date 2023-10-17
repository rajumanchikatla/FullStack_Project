import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent {

  emailForm: FormGroup;
  showMessage: boolean = false;
  message: string = '';
  email: string='';
  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getPassword() {
    if (this.email === 'jalaacademy@gmail.com') {
      this.message = 'Password has been sent to your email';
    } else {
      this.message = 'This email does not exist.';
    }
    this.showMessage = true;
  }


}
