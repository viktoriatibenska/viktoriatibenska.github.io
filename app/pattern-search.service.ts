import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Pattern } from './pattern';

@Injectable()

export class PatternSearchService {
    constructor(private http: Http) { }
    search(term: string): Observable<Pattern[]> {
        return this.http
            .get(`app/patterns/?name=${term}`)
            .map((r: Response) => r.json().data as Pattern[]);
    }
}