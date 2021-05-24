"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
var exam_1 = require("./exam");
var q1 = {
    caption: "11111111111111111",
    answers: ["Answer1 (q1)", "Answer2 (q1)", "Answer3 (q1)", "Answer4 (q1)"],
    correctIndex: 1
};
var q2 = {
    caption: "2222222222222222",
    answers: ["Answer1 (q2)", "Answer2 (q2)", "Answer3 (q2)", "Answer3 (q2)"],
    correctIndex: 1
};
var q3 = {
    caption: "33333333333333333",
    answers: ["Answer1 (q3)", "Answer2 (q3)", "Answer3 (q3)", "Answer4 (q3)"],
    correctIndex: 1
};
var q4 = {
    caption: "444444444444444",
    answers: ["Answer1 (q4)", "Answer2 (q4)", "Answer3 (q4)", "Answer4 (q4)"],
    correctIndex: 1
};
var answerArray = [
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
var expectedResultArray = [0, 25, 50, 75, 100, 25, 50, 75, 100];
var ans1 = [13, 2, 4, 31]; // 0
var ans2 = [-10, 2, 4, 1]; // 25
var ans3 = [1, 2, 4, 1]; // 50
var ans4 = [1, 2, 1, 1]; // 75
var ans5 = [1, 1, 1, 1]; // 100
var ans6 = [1]; // 25
var ans7 = [1, 1]; // 50
var ans8 = [1, 1, 1]; // 75
var ans9 = [1, 1, 1, 1, 1, 1]; // 100
function test() {
    var exam = initializeExam();
    var retVal = checkGradeMethod(exam);
    return retVal;
}
exports.test = test;
function initializeExam() {
    var exam = new exam_1.Exam();
    exam.addQuestion(q1);
    exam.addQuestion(q2);
    exam.addQuestion(q3);
    exam.addQuestion(q4);
    return exam;
}
function checkGradeMethod(exam) {
    try {
        for (var i = 0; i < answerArray.length; i++) {
            checkEqualNumber(exam.grade(answerArray[i]), expectedResultArray[i]);
        }
        return true;
    }
    catch (error) {
        return false;
    }
}
function checkEqualNumber(grade, expectedResult) {
    if (grade != expectedResult)
        throw "checkEqualNumber";
}
//# sourceMappingURL=helper.js.map