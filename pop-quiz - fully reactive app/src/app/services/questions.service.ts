import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Question } from '../models/question';
import { questionList } from '../models/questions';
import { map } from 'rxjs/operators';
import { SlicePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  currentQuestionNumber: number = 0;
  currentQuestionNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0);



  getCurrentQuestionNumber(): Observable<number> {
    return this.currentQuestionNumber$.asObservable();
  }

  getCurrentQuestion(): Observable<Question> {
    return this.currentQuestionNumber$.pipe(
      map(index => questionList[index])
    );
  }

  getIsQuizOver(): Observable<boolean> {
    return this.currentQuestionNumber$.pipe(
      map(index => questionList.length <= index)
    );
  }

  getSummeryList(): Observable<Question[]> {
    return this.currentQuestionNumber$.pipe(
      map(index => questionList.slice(0, index))
    );
  }

  setNewQuestion(answer: number): Promise<void> {
    questionList[this.currentQuestionNumber].userAnswer = answer;

    this.currentQuestionNumber++;
    this.currentQuestionNumber$.next(this.currentQuestionNumber);
    return Promise.resolve();
  }


  getQuizResult(): Promise<number> {

    let score: number = 0;
    questionList.forEach(element => {
      if (element.correctAnswer == element.userAnswer)
        score++;
    });
    let retVal = Math.ceil(100 * (score / questionList.length));
    return Promise.resolve(retVal);
  }

  startNewGame() : Promise<void>{
    this.currentQuestionNumber=0;
    this.currentQuestionNumber$.next(0);
    return Promise.resolve();
  }


}
