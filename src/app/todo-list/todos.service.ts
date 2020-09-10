import { Injectable } from '@angular/core';
import todo from '../todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: todo[] = [
    { id: 1, completed: false, text: 'Eat' },
    { id: 2, completed: true, text: 'Sleep' },
    { id: 3, completed: false, text: 'Code' },
  ];

  constructor() {}

  getTodos(): todo[] {
    return this.todos;
  }

  addTodo(text): void {
    this.todos.push({ id: Date.now(), completed: false, text });
  }

  markComplete(id): void {
    this.todos = this.todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });

    console.log(this.todos);
  }

  deleteTodo(id): void {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}
