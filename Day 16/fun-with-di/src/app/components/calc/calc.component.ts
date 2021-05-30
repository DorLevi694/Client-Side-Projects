import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  a: number = 0;
  b: number = 0;
  res: number = 0;
   
  constructor(private service: AdditionService) { 
  }

  ngOnInit(): void {
  }


  setA(value: string) {
    this.a = Number(value);
  }


  setB(value: string) {
    this.b = Number(value);
  }

  calc(): void {
    this.res = this.service.add(this.a,this.b);
  }
}
