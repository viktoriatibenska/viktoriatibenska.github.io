import { Injectable } from '@angular/core';

import { Pattern } from './pattern';
import { PATTERNS } from './mock-patterns'

@Injectable()
export class PatternService {
    getPatterns(): Pattern[] {
        return PATTERNS;
    }
}