import { Component } from '@angular/core';

const PATTERNS: Pattern[] = [
    { id: 11, name: 'Divide and conquer' },
    { id: 12, name: 'Organization follows location' },
    { id: 13, name: 'Face to face before working remotely' },
    { id: 14, name: 'Architect controls product' },
    { id: 15, name: 'Stand up meeting' },
    { id: 16, name: 'Deploy along the grain' },
    { id: 17, name: 'Architect also implements' },
    { id: 18, name: 'Standards linking locations' },
    { id: 19, name: 'Code ownership' },
    { id: 20, name: 'Variation behind interface' }
];

@Component({
    selector: 'my-app',
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
        <h1>{{title}}</h1>

        <h2>Patterns</h2>
        <ul class="patterns">
        <li *ngFor="let pattern of patterns" [class.selected]="pattern === selectedPattern" (click)="onSelect(pattern)">
            <span class="badge">{{pattern.id}}</span> {{pattern.name}}
        </li>
        </ul>

        <div *ngIf="selectedPattern">
            <h2>{{selectedPattern.name}} details!</h2>
            <div><label>id: </label>{{selectedPattern.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedPattern.name" placeholder="name">
            </div>
        </div>
      `
})

export class AppComponent {
    title = 'Browse patterns';
    selectedPattern: Pattern;
    patterns = PATTERNS;

    onSelect(pattern: Pattern): void {
        this.selectedPattern = pattern;
    }
}

export class Pattern {
    id: number;
    name: string;
}