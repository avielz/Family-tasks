import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberslistComponent implements OnInit {

  // members:any;
  memberlist: any;
  cam: any;
  constructor(private getdata:DataService) { }

  // ngOnInit() :void {
  //   this.data.getMembers().subscribe( response=> {
  //     this.members=response.json();
  //   });
  // }

  ngOnInit() {
    this.getmember()
  }
  getmember() {
    this.cam = this.getdata.getMembers()
    this.cam.subscribe(
      res => {
        this.memberlist = res.json();
        console.log("from angular component: ");
        console.log(this.memberlist);
      });
  }
  
}

