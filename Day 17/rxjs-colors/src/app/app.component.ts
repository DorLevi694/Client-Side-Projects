
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Color } from './models/color.model';
import { ColorService } from './services/color.service';
import { debounceTime, map,mergeMap,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  keyword$ !:  Observable<string>;
  results$ !:  Observable<Color[]>;
  search$ = new BehaviorSubject<string>('');

  constructor(private colorService: ColorService) { }

  setKeyword(keyword: string) {
    this.search$.next(keyword);
  }

  ngOnInit():void {
    this.results$ = this.search$.pipe(
      debounceTime(500),
      switchMap( kw => this.colorService.search(kw) )
    );
  }

}
