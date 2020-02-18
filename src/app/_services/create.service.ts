import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const CREATE_EMPLOYEE = 'http://localhost:3000/employees';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  createEmployee(employee: any){
    return this.http.post(CREATE_EMPLOYEE, employee);
  }
}
