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
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var pattern_service_1 = require('./pattern.service');
var pattern_1 = require('./pattern');
var PatternDetailComponent = (function () {
    function PatternDetailComponent(patternService, route, location) {
        this.patternService = patternService;
        this.route = route;
        this.location = location;
    }
    PatternDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.patternService.getPattern(+params['id']); })
            .subscribe(function (pattern) { return _this.pattern = pattern; });
    };
    PatternDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PatternDetailComponent.prototype.save = function () {
        var _this = this;
        this.patternService.update(this.pattern)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pattern_1.Pattern)
    ], PatternDetailComponent.prototype, "pattern", void 0);
    PatternDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pattern-detail',
            templateUrl: 'pattern-detail.component.html',
            styleUrls: ['pattern-detail.component.css']
        }), 
        __metadata('design:paramtypes', [pattern_service_1.PatternService, router_1.ActivatedRoute, common_1.Location])
    ], PatternDetailComponent);
    return PatternDetailComponent;
}());
exports.PatternDetailComponent = PatternDetailComponent;
//# sourceMappingURL=pattern-detail.component.js.map