import { AbstractControl, ValidationErrors} from "@angular/forms";

export function notNullNameValidator(control: AbstractControl): ValidationErrors | null {
    const valueInput:string = control.value;
    if (valueInput.trim().length === 0){
        return {notNullNameValidator: true};
    }

    return null;
}