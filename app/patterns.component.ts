import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pattern } from './pattern';
import { PatternService } from './pattern.service'

@Component({
    selector: 'my-patterns',
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .patterns {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .patterns li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .patterns li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .patterns li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .patterns .text {
            position: relative;
            top: -3px;
        }
        .patterns .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    template:`
        

        <h2>Patterns</h2>
        <ul class="patterns">
        <li *ngFor="let pattern of patterns" 
            [class.selected]="pattern === selectedPattern" 
            (click)="onSelect(pattern)">
            <span class="badge">{{pattern.id}}</span> {{pattern.name}}
        </li>
        </ul>

        <my-pattern-detail [pattern]="selectedPattern"></my-pattern-detail>
      `
})

export class PatternsComponent implements OnInit {
    ngOnInit(): void {
        this.getPatterns();
    }

    selectedPattern: Pattern;
    patterns;

    constructor(private patternService: PatternService) { 
        
    }

    getPatterns(): void {
        this.patternService.getPatterns().then(patterns => this.patterns = patterns);
    }

    onSelect(pattern: Pattern): void {
        this.selectedPattern = pattern;
    }
}