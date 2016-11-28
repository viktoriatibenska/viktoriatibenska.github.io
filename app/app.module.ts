import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PatternDetailComponent } from './pattern-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        PatternDetailComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
