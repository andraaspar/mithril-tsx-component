"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
// Get global or window
var GLOBAL = new Function('return this')();
// Make Mithril globally available: TS will remove import from .tsx files.
GLOBAL.m = m;
var MithrilTsxComponent = (function () {
    function MithrilTsxComponent() {
    }
    return MithrilTsxComponent;
}());
exports.MithrilTsxComponent = MithrilTsxComponent;
