import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  error:string=''
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router : Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email === 'jalaacademy@gmail.com' && password === 'Admin@123') {
        this.router.navigate(['/admin/homepage']);
      } else {
        this.error = "invalid credentials";
        console.log('eror',this.error)
      }
    }
  }
}
