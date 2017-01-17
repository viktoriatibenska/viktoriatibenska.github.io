import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PatternService } from './pattern.service';
import { Pattern } from './pattern';

@Component({
    moduleId: module.id,
    selector: 'my-pattern-detail',
    templateUrl: 'pattern-detail.component.html',
    styleUrls: ['pattern-detail.component.css']
})

export class PatternDetailComponent implements OnInit {
    @Input()
    pattern: Pattern;

    ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.patternService.getPattern(+params['id']))
        .subscribe(pattern => this.pattern = pattern);
    }

    constructor (
        private patternService: PatternService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
}