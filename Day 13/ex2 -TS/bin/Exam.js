"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Exam.prototype.print = function () {
        var questionNumber = 0;
        console.log("Exam :");
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            console.log(questionNumber++ + " - " + question.caption + "?");
            var answerNumber = 1;
            for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                var answer = _c[_b];
                console.log("\t" + answerNumber++ + ". " + answer);
            }
            console.log("");
        }
    };
    Exam.prototype.grade = function (answers) {
        var finalGrade = 0;
        for (var i = 0; i < answers.length; i++) {
            if (typeof (this.questions[i]) !== 'undefined') {
                if (answers[i] == this.questions[i].correctIndex)
                    finalGrade++;
            }
        }
        var retVal = finalGrade / this.questions.length * 100;
        return retVal;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map