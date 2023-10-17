import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  constructor(private router : Router){}
  homecontent(){
    this.router.navigate(['home'])
  }

}
