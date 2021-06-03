import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionPresentorComponent } from './components/question-presentor/question-presentor.component';
import { Question } from './models/question';
import { QuestionsService } from './services/questions.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    isQuizOver$!: Observable<boolean>;

    constructor(private questionsService: QuestionsService) { }
    ngOnInit(): void {
        this.isQuizOver$ = this.questionsService.getIsQuizOver();
        
        this.questionsService.startNewGame();
    }
}

