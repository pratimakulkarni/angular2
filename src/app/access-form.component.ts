import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
    
@Component({
    selector:'my-form',
    templateUrl:'./access-form.component.html'
})

export class AccessFormComponent{
    value : NgForm;
    onsubmit(form:NgForm,event:Event){
        event.preventDefault();
        this.value = form;
        console.log(this.value);
    }
}