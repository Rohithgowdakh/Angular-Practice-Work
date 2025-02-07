import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddTask } from './task/task.model';
import { TaskService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
    @Input({required:true}) name!:string;
    isNewTaskAdded=false;
    constructor(private tasksSerive:TaskService){}
    get selectedUserTasks(){
        return this.tasksSerive.getUserTasks(this.userId);
    }
    onStartAddTask()
    {
      this.isNewTaskAdded=true;
    }
    onCancelAddNewTask()
    {
      this.isNewTaskAdded=false;
    }
    onAddNewTask(addTask:AddTask)
    {
      this.tasksSerive.addTask(addTask,this.userId)
      this.isNewTaskAdded=false;
    }
}
