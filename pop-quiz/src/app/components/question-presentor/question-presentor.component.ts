import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-question-presentor',
  templateUrl: './question-presentor.component.html',
  styleUrls: ['./question-presentor.component.css']
})

export class QuestionPresentorComponent implements OnInit {
  
    constructor() {
    }
  
    ngOnInit(): void {
    }

  @Input()
  currentQuestion: Question ={
    caption: "",
    answers: [],
    correctAnswer: -1,
    userAnswer: -1
  };

  @Output()
  choseEvent = new EventEmitter<number>();

  answerChosen(i:number):void{
    this.currentQuestion.userAnswer = i;
    console.log(`answerChosen: ${this.currentQuestion.userAnswer}`);
    this.choseEvent.emit();
  }


}
