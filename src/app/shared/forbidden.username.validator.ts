import { AbstractControl, ValidationErrors } from "@angular/forms";

export function forbiddenWordsValidator(forbiddenWords: string[]): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const username: string = control.value;
  
      if (username && forbiddenWords.some(word => username.toLowerCase().includes(word.toLowerCase()))) {
        return { forbiddenWords: true }; // key here will be used in template
      }
  
      return null;
    };
  }