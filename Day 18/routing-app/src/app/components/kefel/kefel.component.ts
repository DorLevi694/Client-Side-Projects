import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kefel',
  templateUrl: './kefel.component.html',
  styleUrls: ['./kefel.component.css']
})
export class KefelComponent implements OnInit {

  size: number = 0;
  values: Array<{ x: number, y: number }> = [];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.size = this.activatedRoute.snapshot.params.sizenum;

    for (let xIndex = 1; xIndex <= this.size; xIndex++) {
      for (let yIndex = 1; yIndex <= this.size; yIndex++) {
        this.values.push({x:xIndex,y:yIndex});
      }
    }

  }

}
