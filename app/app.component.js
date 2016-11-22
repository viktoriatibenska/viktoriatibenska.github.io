"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PATTERNS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Browse patterns';
        this.patterns = PATTERNS;
    }
    AppComponent.prototype.onSelect = function (pattern) {
        this.selectedPattern = pattern;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n        .patterns {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .patterns li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n        }\n        .patterns li.selected:hover {\n            background-color: #BBD8DC !important;\n            color: white;\n        }\n        .patterns li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n        }\n        .patterns .text {\n            position: relative;\n            top: -3px;\n        }\n        .patterns .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n        }\n    "],
            template: "\n        <h1>{{title}}</h1>\n\n        <h2>Patterns</h2>\n        <ul class=\"patterns\">\n        <li *ngFor=\"let pattern of patterns\" [class.selected]=\"pattern === selectedPattern\" (click)=\"onSelect(pattern)\">\n            <span class=\"badge\">{{pattern.id}}</span> {{pattern.name}}\n        </li>\n        </ul>\n\n        <div *ngIf=\"selectedPattern\">\n            <h2>{{selectedPattern.name}} details!</h2>\n            <div><label>id: </label>{{selectedPattern.id}}</div>\n            <div>\n                <label>name: </label>\n                <input [(ngModel)]=\"selectedPattern.name\" placeholder=\"name\">\n            </div>\n        </div>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Pattern = (function () {
    function Pattern() {
    }
    return Pattern;
}());
exports.Pattern = Pattern;
//# sourceMappingURL=app.component.js.map