import { Component } from '@angular/core';

const PATTERNS: Pattern[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>

        <h2>Patterns</h2>
        <ul class="patterns">
        <li *ngFor="let pattern of patterns">
            <span class="badge">{{pattern.id}}</span> {{pattern.name}}
        </li>
        </ul>

        <h2>{{pattern.name}} details!</h2>
        <div><label>id: </label>{{pattern.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="pattern.name" placeholder="name">
        </div>
      `,
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
    `]
})

export class AppComponent {
    title = 'Browse patterns';
    pattern: Pattern = {
        id: 1,
        name: 'Architect also implements'
    };
    patterns = PATTERNS;
}

export class Pattern {
    id: number;
    name: string;
}