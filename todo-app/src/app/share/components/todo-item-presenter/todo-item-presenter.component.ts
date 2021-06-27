import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item-presenter',
  templateUrl: './todo-item-presenter.component.html',
  styleUrls: ['./todo-item-presenter.component.css']
})
export class TodoItemPresenterComponent implements OnInit {

  constructor() { }

  @Input()
  isCompleted:boolean = false;

  @Input()
  caption:string='';

  ngOnInit(): void {
  }

}