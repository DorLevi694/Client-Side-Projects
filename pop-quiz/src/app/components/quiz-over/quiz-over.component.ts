import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  str: string = "Hiii Quiz Over";

  @Input()
  testResult: number = 99;

  @Output()
  resetGameEvent = new EventEmitter();


  resetGame() {
    this.resetGameEvent.emit();
  }
}
