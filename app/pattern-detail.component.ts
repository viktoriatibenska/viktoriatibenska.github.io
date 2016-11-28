import { Component, Input } from '@angular/core';
import { Pattern } from './pattern';

@Component({
  selector: 'my-pattern-detail',
  template:`
        <div *ngIf="pattern">
            <h2>{{pattern.name}} details!</h2>
            <div><label>id: </label>{{pattern.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="pattern.name" placeholder="name">
            </div>
        </div>
  `
})

export class PatternDetailComponent {
    @Input()
    pattern: Pattern;
}