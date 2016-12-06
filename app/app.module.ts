import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { PatternDetailComponent } from './pattern-detail.component';
import { PatternsComponent } from './patterns.component';
import { PatternService } from './pattern.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'patterns',
                component: PatternsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'detail/:id',
                component: PatternDetailComponent
            },
        ])
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
