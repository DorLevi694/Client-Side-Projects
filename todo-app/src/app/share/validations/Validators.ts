import { AbstractControl, ValidationErrors } from "@angular/forms";

export function wordsValidator(minWords: number): (control: AbstractControl) => ValidationErrors | null {


    return (control) => {
        if (control == null) return null;
        if (control.value == null) return null;
        if (typeof (control.value) !== 'string') return null;
        console.log(control.value);
        let wordsCount = control.value
            .split(' ')
            .filter(word => word)
            .length;

        if (wordsCount >= minWords) return null;

        return {
            'words': {
                actual: wordsCount,
                minimum: minWords
            }

        }
    }
}