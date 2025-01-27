import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  task: string[]=[];
  newTask:string="";

  addTask()
  {
    if (this.newTask.trim()){
      this.task.push(this.newTask);
      this.newTask="";
    }
  }

  removeTask(index:number)
  {
    this.task.splice(index,1)
  }
}
