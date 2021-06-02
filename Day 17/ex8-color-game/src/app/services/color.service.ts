import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RgbColorEditorComponent } from '../components/rgb-color-editor/rgb-color-editor.component';
import { Rgb } from '../models/types';


@Injectable({
  providedIn: 'root'
})


export class ColorService {
  r: number = 0;
  g: number = 0;
  b: number = 0;

  r$ = new BehaviorSubject<number>(this.r);
  g$ = new BehaviorSubject<number>(this.g);
  b$ = new BehaviorSubject<number>(this.b);
  rgbRandomColor$ = new BehaviorSubject<Rgb>([0,0,0]);

  constructor() { }


  getRed() {
    return this.r$.asObservable();
  }
  getGreen() {
    return this.g$.asObservable();
  }
  getBlue() {
    return this.b$.asObservable();
  }

  
  rgbRandomColor(): Observable<Rgb> {
    return this.rgbRandomColor$.asObservable();
  }
  setRed(num: number) {
    this.r=this.checkNumber(num);
    this.r$.next(this.r);
  }
  setGreen(num: number) {
    this.g=this.checkNumber(num);;
    this.g$.next(this.g);
  }
  setBlue(num: number) {
    this.b=this.checkNumber(num);;
    this.b$.next(this.b);
  }

  
  setNewRandomColor(): void {

    let temp :Rgb =[
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    ];

    this.rgbRandomColor$.next(temp);
  }

  private checkNumber(number:number):number{

    return Math.min( Math.max(  0 , number   ), 255);

  };

}
