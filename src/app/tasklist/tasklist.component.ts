import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})

export class TasklistComponent implements OnInit {
  tasklist: any;
  cam: any;
  constructor(private getdata: DataService) { }

  ngOnInit() {
    this.gettask()
  }
  gettask() {
    this.cam = this.getdata.gettasklist()
    this.cam.subscribe(
      res => {
        this.tasklist = res.json();
        console.log("from angular component: ");
        console.log(this.tasklist);
      });
  }
  
}
