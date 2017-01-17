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
var router_1 = require('@angular/router');
var pattern_service_1 = require('./pattern.service');
var PatternsComponent = (function () {
    function PatternsComponent(patternService, router) {
        this.patternService = patternService;
        this.router = router;
    }
    PatternsComponent.prototype.ngOnInit = function () {
        this.getPatterns();
    };
    PatternsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPattern.id]);
    };
    PatternsComponent.prototype.getPatterns = function () {
        var _this = this;
        this.patternService.getPatterns().then(function (patterns) { return _this.patterns = patterns; });
    };
    PatternsComponent.prototype.onSelect = function (pattern) {
        this.selectedPattern = pattern;
    };
    PatternsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-patterns',
            styleUrls: ['patterns.component.css'],
            templateUrl: 'patterns.component.html'
        }), 
        __metadata('design:paramtypes', [pattern_service_1.PatternService, router_1.Router])
    ], PatternsComponent);
    return PatternsComponent;
}());
exports.PatternsComponent = PatternsComponent;
//# sourceMappingURL=patterns.component.js.map