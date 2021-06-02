import { Component, OnInit } from '@angular/core';
import { combineLatest, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rgb } from './models/types';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private colorService: ColorService) { }
  myColor$!: Observable<string>;
  randomColor$!: Observable<string>;
  succses$!: Observable<boolean>;


  ngOnInit(): void {
    let r$ = this.colorService.getRed();
    let g$ = this.colorService.getGreen();
    let b$ = this.colorService.getBlue();
    
    
    this.randomColor$ = this.colorService.rgbRandomColor().pipe(
      map(arr => `rgb(${arr[0]},${arr[1]},${arr[2]})`)
    );


    this.myColor$ = combineLatest([r$, g$, b$]).pipe(
      map(arr => `rgb(${arr[0]},${arr[1]},${arr[2]})`)
    );


    this.succses$ = combineLatest([this.randomColor$,this.myColor$]).pipe(
      map( colors =>  colors[0] === colors[1] )
    );

  }

  setRandomColor(){
    this.colorService.setNewRandomColor();
  }
}
