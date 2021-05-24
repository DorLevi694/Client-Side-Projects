import { Exam } from "./exam";


let q1 = {
    caption: "11111111111111111",
    answers: ["Answer1 (q1)", "Answer2 (q1)", "Answer3 (q1)", "Answer4 (q1)"],
    correctIndex: 1
};

let q2 = {
    caption: "2222222222222222",
    answers: ["Answer1 (q2)", "Answer2 (q2)", "Answer3 (q2)", "Answer3 (q2)"],
    correctIndex: 1
};

let q3 = {
    caption: "33333333333333333",
    answers: ["Answer1 (q3)", "Answer2 (q3)", "Answer3 (q3)", "Answer4 (q3)"],
    correctIndex: 1
};

let q4 = {
    caption: "444444444444444",
    answers: ["Answer1 (q4)", "Answer2 (q4)", "Answer3 (q4)", "Answer4 (q4)"],
    correctIndex: 1
};

let answerArray = [
    [13, 2, 4, 31],
    [-10, 2, 4, 1],
    [1, 2, 4, 1],
    [1, 2, 1, 1],
    [1, 1, 1, 1],
    [1],
    [1, 1],
    [1, 1, 1],
    [1, 1, 1, 1, 1, 1]
];

let expectedResultArray = [0, 25, 50, 75, 100, 25, 50, 75, 100];

let ans1 = [13, 2, 4, 31];   // 0
let ans2 = [-10, 2, 4, 1];   // 25
let ans3 = [1, 2, 4, 1];     // 50
let ans4 = [1, 2, 1, 1];     // 75
let ans5 = [1, 1, 1, 1];     // 100
let ans6 = [1];              // 25
let ans7 = [1, 1];           // 50
let ans8 = [1, 1, 1];        // 75
let ans9 = [1, 1, 1, 1, 1, 1]; // 100



export function test(): boolean {
    let exam = initializeExam();
    let retVal =  checkGradeMethod(exam);
    return retVal;
}

function initializeExam() {
    let exam = new Exam();
    exam.addQuestion(q1);
    exam.addQuestion(q2);
    exam.addQuestion(q3);
    exam.addQuestion(q4);
    return exam;
}


function checkGradeMethod(exam: Exam) {

    try {
        for (let i = 0; i < answerArray.length; i++) {
            checkEqualNumber(exam.grade(answerArray[i]), expectedResultArray[i]);
        }
        return true;
    } catch (error) {
        return false;
    }


}

function checkEqualNumber(grade: number, expectedResult: number): void{
    if(grade != expectedResult)
        throw "checkEqualNumber" ;
}
