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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PatternService = (function () {
    function PatternService(http) {
        this.http = http;
        this.patternsUrl = 'api/patterns';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PatternService.prototype.getPatterns = function () {
        return this.http.get(this.patternsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PatternService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PatternService.prototype.getPatternsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(resolve, 2000); }).then(function () { return _this.getPatterns(); });
    };
    PatternService.prototype.getPattern = function (id) {
        var url = this.patternsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PatternService.prototype.update = function (pattern) {
        var url = this.patternsUrl + "/" + pattern.id;
        return this.http
            .put(url, JSON.stringify(pattern), { headers: this.headers })
            .toPromise()
            .then(function () { return pattern; })
            .catch(this.handleError);
    };
    PatternService.prototype.create = function (name) {
        return this.http
            .post(this.patternsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PatternService.prototype.delete = function (id) {
        var url = this.patternsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PatternService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PatternService);
    return PatternService;
}());
exports.PatternService = PatternService;
//# sourceMappingURL=pattern.service.js.map