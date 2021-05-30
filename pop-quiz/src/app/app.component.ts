import { Component, Output } from '@angular/core';
import { QuestionPresentorComponent } from './components/question-presentor/question-presentor.component';
import { Question } from './question';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    currentQuestionNumber: number = 1;
    isQuizOver: boolean = false;
    summeryList: Question[] = [];


    setNewQuestion(): void {

        this.summeryList.push(this.questionList[this.currentQuestionNumber - 1]);

        if (this.questionList.length > this.currentQuestionNumber)
            this.currentQuestionNumber++;
        else
            this.isQuizOver = true;
    }


    getQuizResult(): number {
        let score: number = 0;
        this.questionList.forEach(element => {
            if (element.correctAnswer == element.userAnswer)
                score++;
        });
        return Math.ceil(100 * (score / this.questionList.length));
    }

    resetGame() {
        this.currentQuestionNumber = 1;
        this.isQuizOver = false;
        this.summeryList = []
    }


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
}

