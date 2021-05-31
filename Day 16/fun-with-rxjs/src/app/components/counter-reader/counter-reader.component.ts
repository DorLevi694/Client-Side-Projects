import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit,OnDestroy {

  value: number = 0;
  subscription: Subscription| null = null;
  constructor(private counterService: CounterService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    let observable = this.counterService.getValue();
    this.subscription = observable.subscribe(val => 
      { 
        this.value = val; 
        console.log("CounterReader: "+ val) ;
      });
  }

}
