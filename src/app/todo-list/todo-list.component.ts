import { TodosService } from './../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private ts: TodosService) {}
  todos: any;

  ngOnInit() {
    this.ts.getTodos().subscribe((results) => {
      this.todos = results;
    });
  }
}
