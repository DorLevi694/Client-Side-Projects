import { Injectable } from '@angular/core';
import { TodoItem } from '../models/entities/todoItem';
import { TodoList } from '../models/entities/todoList';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import {  map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl: string = environment.serverUrl;

  private todoLists$ = new BehaviorSubject<TodoList[]>([]);
  private todoItems$ = new BehaviorSubject<TodoItem[]>([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  getTodoLists():Observable<TodoList[]>{
    return this.todoLists$.asObservable();
  }

  
  getTodoItems():Observable<TodoItem[]>{
    return this.todoItems$.asObservable();
  }

  async loadLists(): Promise<TodoList[]>{
    const lists =await this.getAllLists().toPromise();
    this.todoLists$.next(lists);
    return lists;
  }

  async loadItems(): Promise<TodoItem[]>{
    const items =await this.getAllItems().toPromise();
    this.todoItems$.next(items);
    return items;
  }





  getList(id: number): Observable<TodoList> {
    return this.todoLists$.pipe(
      map(lists => lists.filter(list=> list.id==id)),
      map(lists => lists[0])
    );
  }

  async saveList(list: TodoList): Promise<TodoList> {
    let url = `${this.serverUrl}/todolists/${list.id}`;

    const ret = await this.httpClient.put<TodoList>(url, list).toPromise();
    this.loadLists();
    return ret;
  }


  async addNewList(newList: TodoList): Promise<TodoList> {
    let url = `${this.serverUrl}/todolists`;

    const ret = await  this.httpClient.post<TodoList>(url, newList).toPromise();
    this.loadLists();
    return ret;
  }

  async deleteList(listId: number): Promise<any> {
    let url = `${this.serverUrl}/todolists/${listId}`;

    await this.httpClient.delete<any>(url).toPromise();
    this.loadLists();
  }

  
  getItemsOfList(listId: number): Observable<TodoItem[]> {
    return this.todoItems$.pipe(
      map(items => items.filter(item=> item.listId==listId)),
    );
  }


  listExist(id: number): Observable<boolean> {
    return this.getList(id).pipe(
      map(ret => ret != null)
    );
  }

  getItem(id: number): Observable<TodoItem> {
    return this.todoItems$.pipe(
      map(items => items.filter(item=> item.id==id)),
      map(items => items[0])
    );
  }

  getAllActiveItems(): Observable<TodoItem[]> {
    return this.todoItems$.pipe(
      map(items => items.filter(item=> item.isCompleted==false)),
    );
  }
  async addNewItem(newItem: TodoItem): Promise<TodoItem> {
    let url = `${this.serverUrl}/todoitems`;

    const ret =  await this.httpClient.post<TodoItem>(url, newItem).toPromise();
    this.loadItems();
    return ret;
  }

  async deleteItem(itemId: number): Promise<any> {
    let url = `${this.serverUrl}/todoitems/${itemId}`;

    await this.httpClient.delete<any>(url).toPromise();
    this.loadItems();  
  }

  async doneTask(item: TodoItem): Promise<TodoItem> {
    let url = `${this.serverUrl}/todoitems/${item.id}`;
    item.isCompleted = true;

    const ret = await this.httpClient.put<TodoItem>(url, item).toPromise();
    this.loadItems();
    return ret;
  }

  getCountOfLists(): Observable<number> {
    return this.todoLists$.pipe(
      map(lists => lists.length)
    );
  }

  getCountOfItems(): Observable<number> {
    return this.todoItems$.pipe(
      map(items => items.length)
    );
  }

  getCountOfActiveItems(): Observable<number> {
    return this.todoItems$.pipe(
      map(items => items.filter(item=> item.isCompleted==false)),
      map(items=>items.length)
    );
  }


  private getAllLists(): Observable<TodoList[]> {
    let url = `${this.serverUrl}/todolists`;

    return this.httpClient.get<TodoList[]>(url);
  }

  private getAllItems(): Observable<TodoItem[]> {
    let url = `${this.serverUrl}/todoitems`;

    return this.httpClient.get<TodoItem[]>(url);
  }

}


