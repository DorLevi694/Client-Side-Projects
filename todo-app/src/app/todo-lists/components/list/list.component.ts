import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TodoItem } from 'src/app/core/models/entities/todoItem';
import { TodoList } from 'src/app/core/models/entities/todoList';
import { DataService } from 'src/app/core/services/data.service';
import { wordsValidator } from 'src/app/share/validations/Validators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list$!: Observable<TodoList>;
  items$!: Observable<TodoItem[]>;
  listId!: number;

  deletePush$ = new BehaviorSubject<boolean>(false);
  newItemControl!: FormControl;
  newItem: string = '';

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newItemControl = this.formBuilder.control(this.newItem, [Validators.minLength(10), wordsValidator(3)]);

    this.activatedRoute.params.subscribe(async params => {
      this.listId = params.listId;
      this.list$ = this.dataService.getList(this.listId);
      this.reloadData();
    });

  }

  reloadData() {
    this.items$ = this.dataService.getItemsOfList(this.listId);
  }

  async endTask(item: TodoItem) {
    await this.dataService.doneTask(item).toPromise();
  }

  async deleteList(listId: number) {
    try {
      await this.dataService.deleteList(listId).toPromise();
      alert("The list has been successfully deleted");
      this.router.navigate(['/lists'])
    }
    catch {
      alert("The delete failed");
    }
    finally {
      this.deletePush$.next(false);
    }
  }


  async addItemToList() 
  {
    let newItem = {
      caption: this.newItemControl.value,
      listId: this.listId,
      isCompleted: false
    } as TodoItem;

    await this.dataService.addNewItem(newItem).toPromise();
    this.newItemControl.reset('');
    this.reloadData();
  }

  delete() {
    this.deletePush$.next(true);
  }

  cancel() {
    this.deletePush$.next(false);
  }
}
