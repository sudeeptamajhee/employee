import { Component, OnInit } from '@angular/core';
import { FindService } from 'src/app/_services/find.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  allEmployees: any;
  error: any;
  
  constructor(private _findService: FindService) {
    this.findAllEmployees();
   }

  ngOnInit() {
  }

  findAllEmployees(){
    this._findService.findAllEmployees()
        .subscribe(
          (output: {}) => {
            this.allEmployees = output;
          },
          (error: {}) => {
            this.error = error;
            console.log(this.error);
          }
        );
  }

}
