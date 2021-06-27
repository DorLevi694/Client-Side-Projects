import { Component, Input, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/entities/todoList';

@Component({
  selector: 'app-todo-list-box',
  templateUrl: './todo-list-box.component.html',
  styleUrls: ['./todo-list-box.component.css']
})
export class TodoListBoxComponent implements OnInit {

  constructor() { }

  @Input()
  list  = {
    caption: 'New List',
    color: 'green',
    imageUrl: 'add_circle_outline',
    description: '',
    id: -1
  };

  ngOnInit(): void {
  }

}
