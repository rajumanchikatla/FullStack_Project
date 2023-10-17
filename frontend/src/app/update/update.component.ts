import { Component, OnInit } from '@angular/core';
import { Employee } from '../common/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employee: Employee = new Employee(
    '','','',1,new Date(),'','','');
  constructor(private router : Router,
              private http : HttpClient,
              private route : ActivatedRoute){}
             
        ngOnInit(){
         this.route.params.subscribe(params =>{
          const employeeData =params['employeeData'];
          if(employeeData){
            this.employee = JSON.parse(employeeData);
          }
         })
        }
    updateEmployee(){
     this.http.put(`http://localhost:8080/employee/${this.employee.mobileNumber}`, this.employee)
      .subscribe(
      (res :any) => {console.log('Employee updated successfully',res);
    this.router.navigate(['homepage/updated']);
  },(err:any) =>{
    console.error('error while updating the employee', err)
  }

   );
  }
  gotocreate(){
    this.router.navigate(['cancel']);
  }
}
