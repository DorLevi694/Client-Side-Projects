import { Injectable } from '@angular/core';
import { TodoItem } from '../models/entities/todoItem';
import { TodoList } from '../models/entities/todoList';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { BehaviorSubject, forkJoin, from, Observable, of } from 'rxjs';
import { catchError, every, filter, map, mapTo, switchMap, tap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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


  // async deleteList(id: number): Promise<any> {

  //   let temp: TodoItem[] = await this.getItemsOfList(id).toPromise();

  //   temp.forEach(element => {
  //     this.deleteItem(element.id);
  //   });

  //   return this.httpClient.delete<any>(`${this.serverUrl}/todoLists/${id}`).toPromise();
  // }




  // addItem(newItem: TodoItem): Observable<TodoItem> {
  //   return this.httpClient.post<TodoItem>(`${this.serverUrl}/todoItems`, newItem);
  // }


  // addList(newList: TodoList): Observable<TodoList> {
  //   return this.httpClient.post<TodoList>(`${this.serverUrl}/todoLists`, newList);
  // }


  // updateItem(item: TodoItem): Observable<TodoItem> {
  //   return this.httpClient.post<TodoItem>(`${this.serverUrl}/todoItems/${item.id}`, item);
  // }


  // updateList(list: TodoList): Observable<TodoList> {
  //   return this.httpClient.post<TodoList>(`${this.serverUrl}/todoLists/${list}`, list);
  // }


  // private reloadTodoLists() {
  //   let res = this.httpClient.get<TodoList[]>(`${this.serverUrl}/todolists`);
  //   res.pipe(
  //     map(newValue => this.todoLists$.next(newValue))
  //   );

  // }

  // private reloadTodoItems() {
  //   let res = this.httpClient.get<TodoItem[]>(`${this.serverUrl}/todoItems`);
  //   res.pipe(
  //     map(newValue => this.todoItems$.next(newValue))
  //   );
  // }

}


