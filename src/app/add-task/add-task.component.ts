import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatHeaderCell } from '@angular/material/table';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder
  ) { }

  taskForm:FormGroup;

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      task: new FormControl('',[Validators.required]),
      snoozed: 'No',
      assigned: new FormControl(new Date(),[Validators.required]),
      completion: new FormControl('',[Validators.required]),
      status: 'On going',
      remarks: new FormControl('',[Validators.required]),
    })

    if(this.data.row)
    {
      this.taskForm.patchValue(this.data.row)
      this.taskForm.get('completion').setValue(new Date(this.data.row.completion))    
    }
  }

  closeDialog(){
    if(this.data.row && this.taskForm.valid )
    this.dialogRef.close(  {
      ...this.taskForm.value,
      id: this.data.row.id
    });
    else
    this.dialogRef.close(  {
      id: Math.round(Math.random()*100),
      ...this.taskForm.value
    });
  }

}
