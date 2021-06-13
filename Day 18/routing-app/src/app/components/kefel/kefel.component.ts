import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kefel',
  templateUrl: './kefel.component.html',
  styleUrls: ['./kefel.component.css']
})
export class KefelComponent implements OnInit {

  size: number = 5;
  values: Array<{ x: number, y: number }> = [];
  readonly DEFAULT_SIZE: number = 5;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.sizenum) {
        this.size = params.sizenum;
      }
      else{
        this.size = this.DEFAULT_SIZE;
      }

      this.values = [];
      for (let xIndex = 1; xIndex <= this.size; xIndex++) {
        for (let yIndex = 1; yIndex <= this.size; yIndex++) {
          this.values.push({ x: xIndex, y: yIndex });
        }
      }
    });


  }

}
