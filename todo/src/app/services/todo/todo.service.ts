import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoListsArray: TodoList[]=[];

  constructor() {
    const todoList = new TodoItem('default');
    todoList.todos.push(new TodoItem('something to do'));
    todoList.todos.push(new TodoItem('same other thing to do '));

    const todoList2 = new TodoItem('work');
    todoList.todos.push(new TodoItem('work to do'));
    todoList.todos.push(new TodoItem('same other work to do '));
     todoList.todos.push(new TodoItem('add work to do '));

      const todoList3 = new TodoItem('personnal');
      this.todoListsArray.push(todoList);
      this.todoListsArray.push(todoList2);
      this.todoListsArray.push(todoList3);
  }
  getTodoLists(){
    return this.todoListsArray;
  }
}
