import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PatternDetailComponent } from './pattern-detail.component';
import { PatternsComponent } from './patterns.component';
import { PatternService } from './pattern.service';
import { DashboardComponent } from './dashboard.component';
import { PatternSearchComponent } from './pattern-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        PatternDetailComponent,
        PatternsComponent,
        DashboardComponent,
        PatternSearchComponent
    ],
    providers: [ PatternService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
