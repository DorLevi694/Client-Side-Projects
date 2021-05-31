import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit {
  value: number = 0;
  constructor(private cS: CounterService) { }

  ngOnInit(): void {

    this.cS.getValue().subscribe(val => this.value = val);
  }

}
