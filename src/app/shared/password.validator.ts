import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:boolean}| null {

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if(password?.pristine || confirmPassword?.pristine){
        console.log('inside pristin')
        return null;
    }
    if(password?.value !== confirmPassword?.value){
        console.log(`working password mismatch ${password} and confirm password ${confirmPassword}`)
        return {misMatch:true}
    }
    else{
        console.log('wokring equals')
        return null;    
    }
    return password && confirmPassword && password !== confirmPassword? {'misMatch':true}: null;
}