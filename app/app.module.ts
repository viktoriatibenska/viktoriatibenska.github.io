import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PatternDetailComponent } from './pattern-detail.component';
import { PatternsComponent } from './patterns.component';
import { PatternService } from './pattern.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PatternDetailComponent,
        PatternsComponent,
        DashboardComponent
    ],
    providers: [ PatternService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
