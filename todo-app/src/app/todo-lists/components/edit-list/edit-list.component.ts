import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { COLORS_NAMES } from 'src/app/core/models/data/colors';
import { ICONS_NAMES } from 'src/app/core/models/data/icons';
import { TodoList } from 'src/app/core/models/entities/todoList';
import { DataService } from 'src/app/core/services/data.service';
import { wordsValidator } from 'src/app/share/validations/Validators';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  listForm!: FormGroup;
  icons: string[] = ICONS_NAMES;
  colors: string[] = COLORS_NAMES;
  pageTitle$ = new BehaviorSubject<string>("Edit List");
  selectedIcon$ !: Observable<string>; 
  selectedColor$ !: Observable<string>; 


  get description() { return this.listForm.get('description'); }
  get imageUrl() { return this.listForm.get('imageUrl'); }
  get color() { return this.listForm.get('color'); }

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
    ).subscribe(listFromServer => {
        this.buildForm(listFromServer);
        let tempImageUrl = this.listForm.get('imageUrl');
        let tempColor = this.listForm.get('color');

        this.selectedIcon$ = tempImageUrl!.valueChanges.pipe(
          startWith(tempImageUrl!.value)
        );

        this.selectedColor$ = tempColor!.valueChanges.pipe(
          startWith(tempColor!.value)
        );
        
    });


  }


  buildForm(list: TodoList) {
    this.listForm = this.formBuilder.group({
      id: [list.id],
      caption: [list.caption, [Validators.required]],
      color: [list.color, [Validators.required]],
      description: [list.description, [Validators.required, Validators.minLength(30), wordsValidator(10)]],
      imageUrl: [list.imageUrl, [Validators.required]]
    });
    this.setTitle(list.id)

    this.listForm.get('imageUrl')!.valueChanges.subscribe(
      v => console.log("dddddddddd" ,v)
    );
    this.listForm.get('imageUrl')!.enable();


   //this.listForm.updateValueAndValidity({ onlySelf: true, emitEvent: true });
  }

  setTitle(listId: number) {
    let title: string;
    if (listId == -1)
      title = "Add List";
    else
      title = "Edit List";

    this.pageTitle$.next(title)
  }

  async save() {
    if (this.listForm.value.id == -1) {
      delete this.listForm.value.id;
      let res = await this.dataService.addNewList(this.listForm.value).toPromise();
      console.log("edit list - new listId ", res.id);
      this.listForm.value.id = res.id;
    }
    else
      await this.dataService.saveList(this.listForm.value).toPromise();

    this.router.navigate(['lists', this.listForm.value.id]);
  }

  private getEmptyObservable(): Observable<TodoList> {
    let emptyList = { id: -1 } as TodoList;
    return of(emptyList);
  }
}
