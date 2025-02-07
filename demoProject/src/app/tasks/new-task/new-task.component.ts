import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../task/tasks.service';
@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userID!:string
  @Output() cancel=new EventEmitter<void>();
  @Output() add=new EventEmitter();
  private taskService=inject(TaskService)
  enteredTitle = '';
  enteredSummary='';
  enteredDate='';
  onCancelAddingTask()
  {
    this.cancel.emit();
  }
  
  onAddedNewTask(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate
    },this.userID)
    this.cancel.emit();
  }
  
}
