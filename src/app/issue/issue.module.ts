import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, IssueViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'issue/view/:issueId',
        component:IssueViewComponent
      }
    ])
  ]
})
export class IssueModule { }
