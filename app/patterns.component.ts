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

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.patternService.create(name)
            .then(pattern => {
                this.patterns.push(pattern);
                this.selectedPattern = null;
        });
    }

    delete(pattern: Pattern): void {
        this.patternService
            .delete(pattern.id)
            .then(() => {
                this.patterns = this.patterns.filter(p => p !== pattern);
                if (this.selectedPattern === pattern) { this.selectedPattern = null; }
            });
    }
}