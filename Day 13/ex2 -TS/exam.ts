import { Question } from "./question";


export class Exam {
    private questions: Question[] = [];

    addQuestion(question: Question): void {
        this.questions.push(question);
    }



    print(): void {
        let questionNumber = 0;
        console.log("Exam :");
        for (const question of this.questions) {
            console.log(`${questionNumber++} - ${question.caption}?`);
            let answerNumber = 1;
            for (const answer of question.answers) {
                console.log(`\t${answerNumber++}. ${answer}`);
            }
            console.log("");
        }

    }

    grade(answers: number[]): number {
        let finalGrade: number = 0;

        for (let i = 0; i < answers.length; i++) {
            if (typeof (this.questions[i]) !== 'undefined') {
                if (answers[i] == this.questions[i].correctIndex)
                    finalGrade++;
            }
        }

        let retVal = finalGrade / this.questions.length * 100;

        return retVal;
    }
}