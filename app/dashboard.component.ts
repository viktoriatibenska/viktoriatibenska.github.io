import { Component, OnInit } from '@angular/core';

import { Pattern } from './pattern';
import { PatternService } from './pattern.service'

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    patterns: Pattern[] = [];
    
    constructor(private patternService: PatternService) { }

    ngOnInit(): void {
        this.patternService.getPatterns()
        .then(patterns => this.patterns = patterns.slice(1, 5));
    }
}