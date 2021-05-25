import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //data
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;
  
  //methods

  setKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    this.isBusy = true;
    console.log("SSSSSS");
    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword+"1",
        this.keyword+"2",
        this.keyword+"3",
        this.keyword+"4",
      ]
    }, 2000);

  }



}
