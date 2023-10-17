import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  API_URL = 'http://localhost:8080';
  private dataUpdated = new Subject<void>();
  deleteEmployee: any;

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(){
    return this.httpClient.get<Employee[]>(`${this.API_URL}/employee`);
  }
  saveemployee(employee: Employee) {
    return this.httpClient.post<Employee>(`${this.API_URL}/employee`, employee);
  } 
  getEmployeeBymobilenumber(mobileNumber : string):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.API_URL}/employee/mobile/${mobileNumber}`);
  }
  updateEmployee(employee : Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.API_URL}/${employee.mobileNumber}`,employee);
  }
  deleteemployee(mobileNumber : number):Observable<any>{
    return this.httpClient.delete(`${this.API_URL}/employee/${mobileNumber}`);
  }
  searchEmployeesByName(name : string) : Observable<Employee[]>{
   const queryParams = name ? `?name=${name}` : '';
    return this.httpClient.get<Employee[]>(`${this.API_URL}/employee/searchByName${queryParams}`);
  }
  notifyDataUpdated(){
    this.dataUpdated.next();
  } 
  onDataUpdated(): Observable<void>{
    return this.dataUpdated.asObservable();
  }

}
