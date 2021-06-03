import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {

  summeryQuestionList$!: Observable<Question[]>;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.summeryQuestionList$= this.questionsService.getSummeryList();
  }

}
