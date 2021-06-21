import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myDate = new Date();
  countOfLists$!:Observable<number>;
  countOfItems$!:Observable<number>;
  countOfActiveItems$!:Observable<number>;

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.countOfLists$ = this.dataService.getCountOfLists();
    this.countOfItems$ = this.dataService.getCountOfItems();
    this.countOfActiveItems$ = this.dataService.getCountOfActiveItems();
  }

}
