import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

  constructor(private questionsService:QuestionsService) { }

  testResult$! :Promise<number>

  ngOnInit(): void {
    this.testResult$ = this.questionsService.getQuizResult();
  }


  @Input()
  str: string = "Hiii Quiz Over";

  resetGame() {
    this.questionsService.startNewGame();
  }
}
