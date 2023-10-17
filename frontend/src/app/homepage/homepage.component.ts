import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router:Router){}

  employeeMenuOpen = false;
  MoreMenuOpen =false;
  toggleEmployeeMenu() {
    this.employeeMenuOpen = !this.employeeMenuOpen;
  }
  toggleMoreMenu(){
    this.MoreMenuOpen = !this.MoreMenuOpen
  }
  logout(){
    this.router.navigate(['/'])
  }
}
function navigateToCreate() {
  throw new Error('Function not implemented.');
}

