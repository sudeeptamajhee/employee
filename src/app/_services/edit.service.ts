import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const EDIT_EMPLOYEE = 'http://localhost:3000/employees/';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  
  constructor(private http: HttpClient) { }

  editEmployee(id: number, value: any){
    return this.http.put(EDIT_EMPLOYEE + id, value);
  }
}
