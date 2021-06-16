import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, from, Observable, Subject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {

  keyword$!: Observable<string>;
  index$!: Observable<number>;
  joke$!: Observable<Joke> | null;
  hasNext$!: Observable<boolean>;
  hasPrevious$!: Observable<boolean>;

  constructor(
    private jokesService: JokesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.keyword$ = this.activatedRoute.params.pipe(
      map(parms => parms.keyword)
    );

    this.index$ = this.activatedRoute.params.pipe(
      map(parms => parms.index)
    );

    let newJoke$ = combineLatest([this.keyword$, this.index$]).pipe(
      switchMap(arr => this.jokesService.getJoke(arr[0], arr[1]))
    );

    this.joke$ = newJoke$.pipe(
      map( ([joke,hasNext]) =>joke)
    );

    this.hasNext$ = newJoke$.pipe(
      map( ([joke,hasNext]) =>hasNext)
    );

    this.hasPrevious$ = combineLatest([this.index$, this.joke$]).pipe(
      map( ([index,joke])=> index > 1 && joke != null)
    );
  }

  previousJoke() {
    let keyword = this.activatedRoute.snapshot.params.keyword;
    let index = this.activatedRoute.snapshot.params.index;

    this.router.navigate(['joke', keyword, String(index-1)]);
  }

  nextJoke() {

    let keyword = this.activatedRoute.snapshot.params.keyword;
    let index = this.activatedRoute.snapshot.params.index;

    this.router.navigate(['joke', keyword, String(++index)]);
  }

  newSearch(){
    this.router.navigate(['search']);
  }
}
