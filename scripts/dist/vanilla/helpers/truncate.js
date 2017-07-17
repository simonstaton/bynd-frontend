'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = truncate;
// truncate('some string', 3) // some...

function truncate(value, limit) {
    if (value.length > limit) {
        var trimmed = value.substr(0, limit);
        var lastWordIndex = Math.min(trimmed.length, trimmed.lastIndexOf(' '));
        return trimmed.substr(0, lastWordIndex) + '...';
    }
    return value;
}