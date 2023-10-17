import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public isAuthenticated =false;

  constructor(private router:Router) {
  this.isAuthenticated = localStorage.getItem('authenticated') === 'true';
   }
   canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
    console.log('CanActivate Guard Triggered');
    console.log('IsAuthenticated:', this.isAuthenticated);
    if(this.isAuthenticated){
      return true;
    }else{
      this.router.navigate(['/access-denied'],{
        queryParams:{message:'Access denied.Please log-in.'},
      });
      return false;
    }
   }
   setAuthenticated(value : boolean){
    this.isAuthenticated = value; 
    localStorage.setItem('authenticated',value.toString());
  }
}
