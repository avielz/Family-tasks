import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

// ***************

export class AddTaskComponent implements OnInit {
    // taskID: number;
    description: any;
    date: any;
    ownerID: number;

    memberlist: any;
    helper:any;

    message: any;

    constructor(private pagedata: DataService) { }


    onSetTask(): void {
        this.pagedata.setTask({taskDescription: this.description, date: this.date, ownerID: this.ownerID })
        .subscribe(
            response=> this.message="Task has been entered.",
            err=> this.message=err.toString()
        );
    }

    ngOnInit() {
        this.onGetMember()
    }
    
    onGetMember() {
        this.helper = this.pagedata.getMemberNames()
        this.helper.subscribe(
          res => {
            this.memberlist = res.json();
            console.log("from angular component for add task: ");
            console.log(this.memberlist);
          },
          err => {
            this.message = err.toString()
            console.log(err);
          }
        );
      }


}