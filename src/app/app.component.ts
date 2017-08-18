import { Component, style } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})

export class AppComponent{
    constructor(private route:Router){ }

    value : NgForm;
    onsubmit(form:NgForm,event:Event){
        event.preventDefault();
        this.value = form;
        console.log(this.value);
    }

    redirect(){
        alert("hiii");
        this.route.navigate(['/formExample']);
    }
}