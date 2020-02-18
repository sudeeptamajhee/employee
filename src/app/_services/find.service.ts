import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ALL_EMPLOYEES = 'http://localhost:3000/employees/';
const FIND_EMPLOYEE = 'http://localhost:3000/employees/';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor(private http: HttpClient) { }

  findAllEmployees(){
    return this.http.get(ALL_EMPLOYEES);
  }

  findEmployeeById(id: number){
    return this.http.get(FIND_EMPLOYEE + id);
  }
  
  findEmployees():Promise<any>{
    return this.http.get(ALL_EMPLOYEES).toPromise();
  }
}
