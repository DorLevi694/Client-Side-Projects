import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ex7-claculator';

  //data
  a: number | null = null;
  b: number | null = null;

  resultAdd: number | null = null;
  resultSub: number | null = null;
  resultMul: number | null = null;

  flag: boolean = false;
  //methods

  setA(value: string): void {
    this.a = Number(value);
    this.resetResults();
  }

  setB(value: string): void {
    this.b = Number(value);
    this.resetResults();
  }

  resetResults(): void {
    this.resultAdd = null;
    this.resultMul = null;
    this.resultSub = null;
    this.flag = false;
  }

  claculate(): void {
    if (this.a == null || this.b == null) {
      this.flag = false;
    }
    else {
      this.resultMul = this.a * this.b;
      this.resultAdd = this.a + this.b;
      this.resultSub = this.a - this.b;
      this.flag = true;
    }
  }



}
