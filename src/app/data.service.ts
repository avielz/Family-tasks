import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http) { }

  gettasklist(): Observable<any> {
    return this.http.get("/tasklist");
  }

  getMembers(): Observable<any> {
    return this.http.get("/member");
  }
// want to add this feature also to get all tasks for a member by clicking name on member list
  
  getMemberById(memberId: number): Observable<any> {
    return this.http.get(`/member/${memberId}`);
  }

  getMemberNames(): Observable<any> {
    return this.http.get(`/membernames`);
  }
  
  setTask(taskData:any): Observable<any> {
    return this.http.post('/setTask', taskData);
  }
}
