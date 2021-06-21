import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ICONS_NAMES } from 'src/app/core/models/data/icons';
import { TodoList } from 'src/app/core/models/entities/todoList';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  list$!: Observable<TodoList>;
  listForm!: FormGroup;
  icons: string[] = ICONS_NAMES;
  emptyList: Observable<TodoList> = of({} as TodoList);
  listId111!: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => params.listId),
      switchMap(params => (params.listId == -1) ? this.getEmptyObservable() : this.dataService.getList(params.listId)),
      tap(list => console.log(list))
    ).subscribe(listFromServer => this.buildForm(listFromServer));
  }


  buildForm(list: TodoList) {
    this.listId111 = list.id;

    this.listForm = this.formBuilder.group({
      id: [list.id],
      caption: [list.caption, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      color: [list.color, [Validators.required]],
      description: [list.description, [Validators.required]],
      imageUrl: [list.imageUrl, [Validators.required]]
    });
  }

  async save() {
    if (this.listForm.value.id == -1) {
    delete this.listForm.value.id;
      let res = await this.dataService.addNewList(this.listForm.value).toPromise();
      this.listForm.value.id = res.id;
    }
    else
      await this.dataService.saveList(this.listForm.value).toPromise();

    this.router.navigate(['lists', this.listForm.value.id]);
  }

  private getEmptyObservable(): Observable<TodoList> {
    let x = {} as TodoList;
    x.id = -1;
    return of(x);
  }
}
