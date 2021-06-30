import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/core/models/entities/todoItem';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  activeItems$!: Observable<TodoItem[]>;
  
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.loadItems();
  }
  
  loadItems() {
    this.activeItems$ = this.dataService.getAllActiveItems();
  }

  async endTask(item: TodoItem){
    await this.dataService.doneTask(item);
    this.loadItems();
  }
}
