import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {

  @Input()
  summeryQuestionList: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
