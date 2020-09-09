import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoItems = [
    { id: 1, completed: false, text: 'Eat' },
    { id: 2, completed: true, text: 'Sleep' },
    { id: 3, completed: false, text: 'Code' },
  ];

  text: string;
  constructor() {}

  addTodo(): void {
    this.todoItems.push({ id: Date.now(), completed: false, text: this.text });
    this.text = '';
  }

  markComplete(id): void {
    this.todoItems = this.todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
  }

  deleteTodo(id): void {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }

  ngOnInit(): void {}
}
