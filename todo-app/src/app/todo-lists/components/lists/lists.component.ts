import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/entities/todoList';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  todoLists$!: Observable<TodoList[]>;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoLists$ = this.dataService.getTodoLists();
  }

  goToList(listId: number) {
    console.log(`ListsComponent: goToList:${listId}`);
    this.router.navigate(['/lists/', listId.toString()]);
  }


}

