import { Component, OnInit } from '@angular/core';

import { TodosService } from './todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoItems;
  text = '';

  constructor(private todoService: TodosService) {}

  addTodo(): void {
    if (this.text) {
      this.todoService.addTodo(this.text);
      this.text = '';

      this.todoItems = this.todoService.getTodos();
    }
  }

  deleteTodo(id): void {
    this.todoService.deleteTodo(id);
    this.todoItems = this.todoService.getTodos();
  }

  markComplete(id): void {
    this.todoService.markComplete(id);
    this.todoItems = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.todoItems = this.todoService.getTodos();
  }
}
