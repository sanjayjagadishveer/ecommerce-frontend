import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl){
    const password = control.get('password');
    const confirmassword = control.get('confirmassword');
    console.log(password,confirmassword);

    if(!password?.pristine && confirmassword?.pristine){
        return null;
    }
    return password && confirmassword && password.value !== confirmassword.value
    ? { doNotMatch: true}
    : null;


}