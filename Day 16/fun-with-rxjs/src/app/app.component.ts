import { Component } from '@angular/core';
import { BehaviorSubject, interval, observable, Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShowingReader:boolean = true;

  toggleReader():void{
    this.isShowingReader = !this.isShowingReader;
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`observer ${id}: next${val}`),
      complete: () => console.log(`observer ${id}: complete`),
      error: err => console.log(`observer ${id}: complete${err}`)
    };

  }

  createCustomObservable(): Observable<number> {

    return new Observable<number>(
      observer => {
        observer.next(100);
        setTimeout(() => observer.next(200), 2000);
        setTimeout(() => observer.next(300), 5000);
        setTimeout(() => observer.next(400), 8000);
        setTimeout(() => observer.complete(), 10000);
      }
    )
  }

  createCustomSubjectObservable(): Observable<number> {

    let res = new Subject<number>();
    res.next(100);
    setTimeout(() => res.next(200), 1);
    setTimeout(() => res.next(300), 2000);
    setTimeout(() => res.next(400), 6000);
    setTimeout(() => res.complete(), 8000);
    return res;

  }

  createCustomBehaviorSubjectObservable(): Observable<number> {

    let res = new BehaviorSubject<number>(100);
    res.next(100);
    res.next(3333);
    setTimeout(() => res.next(200), 2000);
    setTimeout(() => res.next(300), 5000);
    setTimeout(() => res.complete(), 8000);
    setTimeout(() => res.next(400), 10000);
    setTimeout(() => res.error(400), 10000);
    return res;

  }



  go() {
    let observer1 = this.createObserver('A');
    let observer2 = this.createObserver('B');

    let obsrvable = this.createCustomBehaviorSubjectObservable();


    obsrvable.subscribe(observer1);

    setTimeout(() => {
      obsrvable.subscribe(observer2);
    }, 4000);


  }
}
