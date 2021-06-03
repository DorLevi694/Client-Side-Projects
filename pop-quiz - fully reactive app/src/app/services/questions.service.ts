import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService{

  currentQuestionNumber: number = 1;
  isQuizOver: boolean = false;
  summeryList: Question[] = [];

  questionList: Question[] =
    [
      {
        caption: 'Q11111111111111',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      },
      {
        caption: 'Q2222222222',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      },
      {
        caption: 'Q333333333333',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      },
      {
        caption: 'Q444444444444444',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      },
      {
        caption: 'Q555555555555',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      },
      {
        caption: 'Q6666666666666',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      },
      {
        caption: 'Q777777777777',
        answers: ["ans1", "ans2", "ans3", "ans4"],
        correctAnswer: 1,
        userAnswer: -1
      }
    ];
  currentQuestionNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currentQuestion$: BehaviorSubject<Question> = new BehaviorSubject<Question>(this.questionList[0]);;
  isQuizOver$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  summeryList$: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);


  getCurrentQuestion(): Observable<Question> {
    return this.currentQuestion$.asObservable();
  }
  getCurrentQuestionNumber(): Observable<number> {
    return this.currentQuestionNumber$.asObservable();
  }

  getIsQuizOver(): Observable<boolean> {
    return this.isQuizOver$.asObservable();
  }


  getSummeryList(): Observable<Question[]> {
    return this.summeryList$.asObservable();
  }

  setNewQuestion(answer: number): void {
    this.questionList[this.currentQuestionNumber-1].userAnswer = answer;

    this.summeryList.push(this.questionList[this.currentQuestionNumber - 1]);
    this.summeryList$.next(this.summeryList);

    if (this.questionList.length > this.currentQuestionNumber) {
      this.currentQuestionNumber++;
      this.currentQuestionNumber$.next(this.currentQuestionNumber);
      this.currentQuestion$.next(this.questionList[this.currentQuestionNumber-1]);
    }
    else {
      this.isQuizOver = true;
      this.isQuizOver$.next(this.isQuizOver);
    }
    console.log(this.isQuizOver);
  }


  getQuizResult(): Promise<number> {

    let score: number = 0;
    this.questionList.forEach(element => {
      if (element.correctAnswer == element.userAnswer)
        score++;
    });
    let retVal = Math.ceil(100 * (score / this.questionList.length));
    return Promise.resolve(retVal);
  }

  startNewGame() {
    
    this.currentQuestionNumber = 1;
    this.currentQuestionNumber$.next(1);

    this.isQuizOver = false;
    this.isQuizOver$.next(false);
    
    this.summeryList = [];
    this.summeryList$.next([]);
    
    this.currentQuestion$.next( this.questionList[this.currentQuestionNumber-1]);
  }


}
