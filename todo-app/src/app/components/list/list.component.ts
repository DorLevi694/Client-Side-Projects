import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/entities/todoItem';
import { TodoList } from 'src/app/core/models/entities/todoList';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list$!: Observable<TodoList>;
  items$!: Observable<TodoItem[]>;
  listId!: number;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async params => {
      this.listId = params.listId;
      this.reloadData();
    });
  }

  reloadData() {
    this.list$ = this.dataService.getList(this.listId).pipe(
      tap(i=>console.log("load"))
    );
    this.items$ = this.dataService.getItemsOfList(this.listId);
  }
  
  async endTask(item: TodoItem) {
    await this.dataService.doneTask(item).toPromise();
    //  this.reloadData();
  }

  async deleteList(listId: number) {
    try {
      //need to go after building the server
      let items = await this.dataService.getItemsOfList(listId).toPromise();

      for (let item of items) {
        await this.dataService.deleteItem(item.id).toPromise();
      }
      //until here
      await this.dataService.deleteList(listId).toPromise();
      alert("The list has been successfully deleted");
      this.router.navigate(['/lists'])
    }
    catch {
      alert("The delete failed");
    }


  }
}
