import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Pattern } from './pattern';
import { PatternService } from './pattern.service'

@Component({
    moduleId: module.id,
    selector: 'my-patterns',
    styleUrls: ['patterns.component.css'],
    templateUrl: 'patterns.component.html'
})

export class PatternsComponent implements OnInit {
    ngOnInit(): void {
        this.getPatterns();
    }

    selectedPattern: Pattern;
    patterns;

    constructor(private patternService: PatternService, private router: Router) { 
        
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPattern.id]);
    }

    getPatterns(): void {
        this.patternService.getPatterns().then(patterns => this.patterns = patterns);
    }

    onSelect(pattern: Pattern): void {
        this.selectedPattern = pattern;
    }
}