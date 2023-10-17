import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/data/employee-data.service';
import { Employee } from '../common/employee';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  name : string = '';
  clearMessages() {
  this.successMessage = null;
  this.errorMessage = null;
  }
  constructor(
    private router : Router,
    private employeeDataService: EmployeeDataService
  ){   }

  employees: Employee[] = [];
  gotocreate(){
    this.router.navigate(['homepage/create']);
  }

  refreshSearch(){
    console.log('search functipn cancelled');
    console.log('name',this.name);

      if (this.name.trim() === ''){
      this.employeeDataService.getEmployeeList().subscribe(
      res  => {console.log(res,'jhnjs');
        this.employees = res},
      err => {
        console.log('error while seaching the data' , err);
      }
    );
  }else{
      this.employeeDataService.searchEmployeesByName(this.name).subscribe(
        res => {console.log(res,'search');
        this.employees = res;
      },
      err =>{
        console.log('unable to fetch the data',err);
      }
      );
    }
  }
  ngOnInit(){
    this.refreshSearch();
    this.employeeDataService.onDataUpdated().subscribe(()=>{
      this.refreshSearch();
    }
    )
  }
  update(employee : Employee){
    this.router.navigate(['homepage/update',{employeeData:JSON.stringify(employee) }]);
    this.employeeDataService.updateEmployee(employee).subscribe(
      ()=>{
        this.successMessage = 'employee updated successfully';
        this.errorMessage = null;
      },
      (err : any)=>{
        console.log('error while updating the data',err)
        this.errorMessage = 'error while updating the employee';
        this.successMessage = null;
      }
    )
    setTimeout(() => {
      this.clearMessages();
    }, 5000);
  }
  deleteEmployee(mobileNumber : number){
    this.employeeDataService.deleteemployee(mobileNumber).subscribe(
      ()=>{
        const index = this.employees.findIndex(e => e.mobileNumber === mobileNumber)
      if(index !== -1){
        this.employees.splice(index ,1);
        this.successMessage = 'Deleted Successfully';
        this.errorMessage =null;
      }},
      (err :any) =>{
        console.log('error while deleting the employee' ,err);
        this.successMessage = null;
        this.errorMessage = 'failed to delete the employee';
      }
    );
    setTimeout(() => {
      this.clearMessages();
    }, 5000);
  }
  
  
}
