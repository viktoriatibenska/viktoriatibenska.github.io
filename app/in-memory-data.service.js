"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var patterns = [
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
        return { patterns: patterns };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map