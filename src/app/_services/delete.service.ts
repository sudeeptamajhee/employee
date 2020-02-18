import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DELETE_EMPLOYEE = 'http://localhost:3000/employees/';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  deleteEmployee(id: number){
    return this.http.delete(DELETE_EMPLOYEE + id);
  }
}
