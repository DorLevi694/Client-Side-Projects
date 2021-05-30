


export interface Question {
    caption: string,
    answers: string[],
    correctAnswer: number,
    userAnswer: number
}


    function printQuestions(listQ: Question[]){
        listQ.forEach(element => {
            console.log(element)
            
        });
    }

