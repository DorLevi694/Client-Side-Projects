import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-presentor',
  templateUrl: './question-presentor.component.html',
  styleUrls: ['./question-presentor.component.css']
})

export class QuestionPresentorComponent implements OnInit {
  
  currentQuestion$! : Observable<Question> | null;
  
    constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.currentQuestion$ = this.questionsService.getCurrentQuestion();
  }


  answerChosen(answer: number): void {
    this.questionsService.setNewQuestion(answer);
  }


}
