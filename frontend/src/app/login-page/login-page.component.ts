import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  errormessage='invalid credetials';
  Email =''
  password =''
  invalidlogin=false
  //dependency injection
 constructor(private router: Router,
  public authService : AuthService){}
 login() {
  if (this.Email === "jalaacademy@gmail.com" && this.password === "jobprogram") {
    this.authService.setAuthenticated(true);
    this.router.navigate(['/homepage'])
    this.invalidlogin = false;
  } else {
    this.invalidlogin = true;
    this.errormessage;
    console.log('Error: Invalid credentials'); 
  }
}

}
