import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PatternSearchService } from './pattern-search.service';
import { Pattern } from './pattern';

@Component({
    moduleId: module.id,
    selector: 'pattern-search',
    templateUrl: 'pattern-search.component.html',
    styleUrls: ['pattern-search.component.css'],
    providers: [PatternSearchService]
})

export class PatternSearchComponent implements OnInit {
    patterns: Observable<Pattern[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private patternSearchService: PatternSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.patterns = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.patternSearchService.search(term)
                // or the observable of empty patterns if no search term
                : Observable.of<Pattern[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Pattern[]>([]);
            });
    }

    gotoDetail(pattern: Pattern): void {
        let link = ['/detail', pattern.id];
        this.router.navigate(link);
    }
}