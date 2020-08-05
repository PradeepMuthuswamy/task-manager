import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data=[{
    name:'Pradeep',
    task: 'Build App',
    snoozed: 'No',
    assigned: '05/08/2020',
    completion:'20/08/2020',
    status: 'Ongoing',
    remarks:'Enterprise app'
  },
  {
    name:'Pradeep',
    task: 'Wire frame & Analyze reqmt',
    snoozed: 'No',
    assigned: '04/08/2020',
    completion:'05/08/2020',
    status: 'Completed',
    remarks:'Tasks App'
  }
];

  ngOnInit(){
    this.tabelData = new MatTableDataSource(this.data);
  }

  constructor(private breakpointObserver: BreakpointObserver) {}


  tabelData;
  columns = ['name','task','snoozed','assigned','completion','status','remarks']


}
