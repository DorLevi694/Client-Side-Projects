import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Joke } from '../models/joke';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  keyword = '';
  keyWord$ = new BehaviorSubject<string>('');
  res$!: Observable<string>;

  readonly serverUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
    console.log('constructor')
    //  this.serverUrl = environment.serverUrl;
  }

  private getAllJokes(): Observable<Joke[]> {
    console.log('getAllJokes')
    const url = `${this.serverUrl}/jokes`;

    let g = this.httpClient.get<Joke[]>(url);
    return g;
  }

  
  getSearchResults(): Observable<Joke[]> {
    console.log('getSearchResults');

    let res = combineLatest([this.getAllJokes(), this.keyWord$]).pipe(
      map(arr => arr[0].filter(jock => jock.setup.includes(arr[1])))
    );
    return res;
  }

  search(keyword: string) {
    console.log('search for: ' + keyword);
    this.keyword = keyword;
    this.keyWord$.next(this.keyword);
  }

  // var employee: [number, string] = [1, "Steve"];

  async getJoke(keyword: string, index: number): Promise<[joke: Joke,hasNext: boolean]> {
    // http://localhost:3000/jokes?_start=10&_end=30&q=how
    
    console.log('getJoke '+ index);
    const url = `${this.serverUrl}/jokes?q=${keyword}&_start=${index-1}&_limit=2`;
    console.log(url);
    let g = await this.httpClient.get<Joke[]>(url).toPromise();
    return [g[0],g.length==2];
  }


}
