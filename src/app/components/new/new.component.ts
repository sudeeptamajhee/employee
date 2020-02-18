import { Component, OnInit } from '@angular/core';
import { CreateService } from 'src/app/_services/create.service';
import { Employee } from 'src/app/models/Employee';
import { FindService } from 'src/app/_services/find.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  allEmployees: any;
  employee: Employee = new Employee();
  error: any;
  message: any;

  constructor(private _createService: CreateService,
              private _findService: FindService) { 
  }

  ngOnInit() {
    this.findAllEmployees();
  }

  generateEmployeeID(){
    var maxId: number = 0;
    for(var e of this.allEmployees){
      if(e.id > maxId){
        maxId = e.id;
      }
    }
    return maxId+1;
  }

  findAllEmployees(){
      this._findService.findAllEmployees()
        .subscribe(
          (output: {}) => {
            this.allEmployees = output;
            //console.log(this.allEmployees);
          },
          (error: {}) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }

  createEmployee(){
    this.employee.id = this.generateEmployeeID();
    this.employee.profile_image = 'https://source.unsplash.com/50x50/?employee';
    console.log(this.employee);    
    this.message = "";
    this.error = "";
    this._createService.createEmployee(this.employee)
        .subscribe(
          (output: Employee) => {
            this.employee = output;
            this.message = "Employee # " + this.employee.id + " is created.";
          },
          (error: {}) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }
}
