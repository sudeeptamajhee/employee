import { Component, OnInit } from '@angular/core';
import { FindService } from 'src/app/_services/find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  employee: any;
  error: any;

  constructor(private _findService: FindService) { }

  ngOnInit() {
  }

  findEmployeeById(empForm){
    let id = empForm.controls['id'].value;
    console.log(id);
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

}
