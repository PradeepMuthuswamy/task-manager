import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data = [
  ];

  ngOnInit() {
    this.tabelData = new MatTableDataSource(this.data);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) { }


  tabelData = new MatTableDataSource<any>();
  columns = ['name', 'task', 'snoozed', 'assigned', 'completion', 'status', 'remarks']

  handleButtonClick(event) {

    switch (event.text) {
      case 'topButton':
        this.createTask();

        break;
      case 'edit':
        this.editTask(event.row);
        break;
      case 'delete':
        this.deleteTask(event.row.id);
        break;

    }


  }

  createTask() {
    const dialogRef = this.dialog.open(AddTaskComponent,{
      width:'500px',
    });

    dialogRef.afterClosed().subscribe(val => {

      if (val) {
        this.data.push(val)
        this.tabelData.data = [...this.data];
      }
    })
  }

  editTask(row) {
    const dialogRef = this.dialog.open(AddTaskComponent,{
      width:'500px',
      data: {
        row: row,
        text: 'Update Task'
      },
    });
  }

  deleteTask(id) {
    this.data = this.data.filter(v => v.id != id)
    this.tabelData.data = this.data;
  }

}
