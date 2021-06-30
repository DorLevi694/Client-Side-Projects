import { Injectable } from '@angular/core';
import { TodoItem } from '../models/entities/todoItem';
import { TodoList } from '../models/entities/todoList';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllLists(): Observable<TodoList[]> {
    let url = `${this.serverUrl}/todolists`;

    return this.httpClient.get<TodoList[]>(url);
  }

  getList(id: number): Observable<TodoList> {
    let url = `${this.serverUrl}/todoLists/${id}`;

    return this.httpClient.get<TodoList>(url);
  }

  saveList(list: TodoList): Observable<TodoList> {
    let url = `${this.serverUrl}/todolists/${list.id}`;

    return this.httpClient.put<TodoList>(url, list);
  }


  addNewList(newList: TodoList): Observable<TodoList> {
    let url = `${this.serverUrl}/todolists`;

    return this.httpClient.post<TodoList>(url, newList);
  }

  deleteList(listId: number): Observable<any> {
    let url = `${this.serverUrl}/todolists/${listId}`;

    return this.httpClient.delete<any>(url);
  }

  getAllItems(): Observable<TodoItem[]> {
    let url = `${this.serverUrl}/todoitems`;

    return this.httpClient.get<TodoItem[]>(url);
  }

  getItemsOfList(listId: number): Observable<TodoItem[]> {
    let url = `${this.serverUrl}/todolists/${listId}/items`;

    return this.httpClient.get<TodoItem[]>(url);
  }


  listExist(id: number): Observable<boolean> {
    return this.getList(id).pipe(
      map(ret => ret != null)
    );
  }

  getItem(id: number): Observable<TodoItem> {
    let url = `${this.serverUrl}/todoitems/${id}`;

    return this.httpClient.get<TodoItem>(url);
  }

  getAllActiveItems(): Observable<TodoItem[]> {
    let url = `${this.serverUrl}/todoitems/ActiveItems`;

    return this.httpClient.get<TodoItem[]>(url);
  }
  addNewItem(newItem: TodoItem): Observable<TodoItem> {
    let url = `${this.serverUrl}/todoitems`;
    return this.httpClient.post<TodoItem>(url, newItem);
  }

  deleteItem(itemId: number): Observable<any> {
    let url = `${this.serverUrl}/todoitems/${itemId}`;

    return this.httpClient.delete<any>(url);
  }




  doneTask(item: TodoItem): Observable<TodoItem> {
    let url = `${this.serverUrl}/todoitems/${item.id}`;
    item.isCompleted = true;

    return this.httpClient.put<TodoItem>(url, item);
  }

  getCountOfLists(): Observable<number> {
    let url = `${this.serverUrl}/todolists/count`;

    return this.httpClient.get<number>(url);
  }

  getCountOfItems(): Observable<number> {
    let url = `${this.serverUrl}/todoitems/count`;

    return this.httpClient.get<number>(url);
  }

  getCountOfActiveItems(): Observable<number> {
    let url = `${this.serverUrl}/todoitems/ActiveItems/count`;

    return this.httpClient.get<number>(url);
  }

}


