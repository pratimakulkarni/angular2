import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AccessFormComponent} from './access-form.component';
import {ChildComponent} from './child-component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
   RouterModule.forRoot([
      {
        path:'formExample',
        component: AccessFormComponent,
        pathMatch:'full'
      }
    ])
  ],
  declarations: [
                  AppComponent,
                  AccessFormComponent,
                  ChildComponent
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
