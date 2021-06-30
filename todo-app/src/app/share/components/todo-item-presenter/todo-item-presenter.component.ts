import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  itemMarked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  markMe(){
    console.log("Marked");
    this.itemMarked.emit(false);
  }
}
