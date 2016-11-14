import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <h2>{{pattern.name}} details!</h2>
        <div><label>id: </label>{{pattern.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="pattern.name" placeholder="name">
        </div>
      `
})

export class AppComponent {
    title = 'Browse patterns';
    pattern: Pattern = {
        id: 1,
        name: 'Architect also implements'
    }
}

export class Pattern {
    id: number;
    name: string;
}