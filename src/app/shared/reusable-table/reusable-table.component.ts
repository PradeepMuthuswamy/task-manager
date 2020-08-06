import { Component, OnInit, Input, ViewChild, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reusabletable',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusabletableComponent implements OnInit, OnChanges {

  @Input() tableDataSource;
  @Input() keys;
  @Input() isEdit;
  @Input() isView;
  @Input() isDelete;
  @Input() uploadEnabled;
  @Input() buttonText;
  @Input() topButton;

  @Output() buttonClick=new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  dataSource;
  displayedColumns=[];


  loadData() {
    this.dataSource = new MatTableDataSource(this.tableDataSource)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 //  console.log(this.dataSource.data);
  }

  ngOnChanges() {
    this.loadData();
   
  }

  ngOnInit() {
    this.displayedColumns = [...this.keys];
    if(this.isView)
    this.displayedColumns.push('view')
    if(this.isEdit)
    this.displayedColumns.push('edit')
    if(this.isDelete)
    this.displayedColumns.push('delete')
    if(this.uploadEnabled)
    this.displayedColumns.push('upload')
    if(this.buttonText)
    this.displayedColumns.push('action')

    this.loadData();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleButtonClick(event:Event,text:string,row?){
    if(row)
    this.buttonClick.emit({event:event,text:text,row:row});
    else
    this.buttonClick.emit({event:event,text:text});
  }

}
