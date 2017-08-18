import {Component} from '@angular/core';

@Component({
    selector : 'child-component',
    template : `    <div>
                        <div>I am main child component </div>
                        <div><ng-content></ng-content></div>
                    </div>
                `
})

export class ChildComponent{

}