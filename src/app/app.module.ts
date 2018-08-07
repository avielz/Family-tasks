import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MemberslistComponent } from './memberlist/memberlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    MemberslistComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
          path:'tasklist',
          component: TasklistComponent
      },
      // {
      //     path: '', 
      //     component: TasklistComponent
      // },
      {
          path:'memberslist',
          component: MemberslistComponent
      },
      {
          path:'addTask',
          component: AddTaskComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]

})


export class AppModule { }
