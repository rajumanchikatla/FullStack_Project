import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../common/employee';
import { EmployeeDataService } from '../service/data/employee-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  employee: Employee = new Employee(
    '', '', '',91,new Date(),'','',''
  );

  constructor(private router:Router,
              private http:HttpClient,
              private formbuilder:FormBuilder,
              private employeeDataService: EmployeeDataService
              )
              {}
  //             ngOnInit(){
  //               // firstName: ['', Validators.required],
  //               // lastName: ['', Validators.required],
  //               // email: ['', [Validators.required, Validators.email]],
  //               this.employeeForm =this.formbuilder.group({
  //                 firstName: ['',Validators.required],
  //                 lastName: ['',Validators.required,Validators.minLength(3)],
  //                 email: ['',[Validators.required,Validators.email]],
  //                 mobileNumber: ['',[Validators.required,Validators.minLength(10)]],
  //                 dob: ['',Validators.required],
  //                 gender: ['',Validators.required],
  //                 country: ['',Validators.required],
  //                 city: ['',Validators.required],
  //                 skillAWS: [false],
  //                 skillJavaFullStack: [false],
  //                 skillMiddleware: [false],
  //                 skillDevOps: [false],
  //                 skillAutomation: [false],
  //                 skillWebServices: [false]
  //               })
  // }

  saveemployee() {
    const formData = this.employee
    console.log('submitted', formData);
    this.http.post('http://localhost:8080/employee', formData).subscribe(
      (res) => {
        console.log('data sent successfully', res);
        this.employeeDataService.notifyDataUpdated();
        this.employeeDataService.getEmployeeList();
        this.router.navigate(['/homepage/search']);
      },
      (err) => {
        console.log('something went wrong', err);
      }
    );
  }
}
