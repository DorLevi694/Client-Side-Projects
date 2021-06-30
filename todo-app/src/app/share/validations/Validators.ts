import { AbstractControl, ValidationErrors } from "@angular/forms";


export function wordsValidator(minWords: number): (control: AbstractControl) => ValidationErrors | null {

    return (control) => {
        if (control == null) return null;
        if (control.value == null) return null;
        if (typeof (control.value) !== 'string') return null;

        let wordsCount = control.value
            .split(/\s/)
            .filter(word => word)
            .length;

        if (wordsCount >= minWords) return null;

        return {
            'minWords': {
                actual: wordsCount,
                minimum: minWords
            }

        }
    }
}