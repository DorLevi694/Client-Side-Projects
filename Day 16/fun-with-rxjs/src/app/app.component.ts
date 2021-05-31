import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  CreateIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  CreateObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`observer ${id}: next${val}`),
      complete: () => console.log(`observer ${id}: complete`),
      error: err => console.log(`observer ${id}: complete${err}`)
    };

  }

  CreateIntervalCustomObservable(): Observable<number> {

    return new Observable<number>(
      observer => {
        observer.next(100);
        setTimeout(() => observer.next(200), 2000);
        setTimeout(() => observer.next(300), 4000);
        setTimeout(() => observer.next(400), 6000);
        setTimeout(() => observer.complete(), 8000);
      }
    )
  }

  createcSub(): Observable<number> {

    let res = new Subject<number>();
    res.next(100);
    setTimeout(() => res.next(200), 1);
    setTimeout(() => res.next(300), 2000);
    setTimeout(() => res.next(400), 6000);
    setTimeout(() => res.complete(), 8000);
    return res;

  }

  createCustomBehaviorSubject(): Observable<number> {

    let res = new BehaviorSubject<number>(100);

    setTimeout(() => res.next(200), 2000);
    setTimeout(() => res.next(300), 5000);
    setTimeout(() => res.complete(), 8000);
    setTimeout(() => res.next(400), 10000);
    return res;

  }



  go() {
    let observer1 = this.CreateObserver('A');
    let observer2 = this.CreateObserver('B');

    let obsrvable = this.createCustomBehaviorSubject();

    obsrvable.subscribe(observer1);

    setTimeout(() => {
      obsrvable.subscribe(observer2);

    }, 2500);
  }
}
