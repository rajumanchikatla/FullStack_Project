import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
  
})
export class AccessComponent {
  message:string = '';
  constructor(private router:ActivatedRoute){
    this.router.queryParams.subscribe((params)=>{
      this.message = params['message'];  
    });
 }

}
