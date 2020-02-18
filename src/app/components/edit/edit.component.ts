import { Component, OnInit } from '@angular/core';
import { FindService } from 'src/app/_services/find.service';
import { EditService } from 'src/app/_services/edit.service';
import { DeleteService } from 'src/app/_services/delete.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any;
  error: any;
  message: any;

  constructor(private _findService: FindService,
              private _editService: EditService,
              private _deleteService: DeleteService) { }

  ngOnInit() {
  }

  findEmployeeById(empForm){
    let id = empForm.controls['id'].value;
    console.log(id);
    this.message = "";
    this.error = "";
    this._findService.findEmployeeById(id)
        .subscribe(
          (output: {}) => {
            this.employee = output;
            console.log(this.employee);
          },
          (error: {}) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }

  updateEmployee(id: number){
    this.message = "";
    this.error = "";
    this._editService.editEmployee(id, this.employee)
        .subscribe(
          (output: {}) => {
            this.employee = output;
            this.message = "Employee # " + this.employee.id + " is updated.";
          },
          (error: {}) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }

  deleteEmployee(id: number){
    this._deleteService.deleteEmployee(id)
        .subscribe(
          (output: {}) => {
            this.employee = output;
            this.message = "Employee # " + id + " is deleted.";
          },
          (error: {}) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }
}
