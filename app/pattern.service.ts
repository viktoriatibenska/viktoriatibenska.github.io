import { Injectable } from '@angular/core';

import { Pattern } from './pattern';
import { PATTERNS } from './mock-patterns'

@Injectable()
export class PatternService {
    getPatterns(): Promise<Pattern[]> {
        return Promise.resolve(PATTERNS);
    }
    getPatternsSlowly(): Promise<Pattern[]> {
        return new Promise<Pattern[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getPatterns());
    }
    getPattern(id: number): Promise<Pattern> {
        return this.getPatterns()
                .then(patterns => patterns.find(pattern => pattern.id === id));
    }
}