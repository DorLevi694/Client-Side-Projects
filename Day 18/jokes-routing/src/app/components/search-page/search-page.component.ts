import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/models/joke';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {


  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }


  search(keyword:string){
    this.router.navigate(['joke',keyword,'1']);
  }


}
