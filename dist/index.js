(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dyna-node-fs"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-config-handler", ["dyna-node-fs"], factory);
	else if(typeof exports === 'object')
		exports["dyna-config-handler"] = factory(require("dyna-node-fs"));
	else
		root["dyna-config-handler"] = factory(root["dyna-node-fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dyna_node_fs_1 = __webpack_require__(1);
var DynaConfigHandler = /** @class */ (function () {
    function DynaConfigHandler(settings) {
        if (settings === void 0) { settings = {}; }
        this._settings = settings;
        this._config = this._settings.config || {};
        this._setDefaults(this._settings.defaults);
    }
    Object.defineProperty(DynaConfigHandler.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynaConfigHandler.prototype, "c", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    DynaConfigHandler.prototype._setDefaults = function (defaults) {
        this._config = __assign({}, (defaults || {}), this._config);
        return this.config;
    };
    DynaConfigHandler.prototype.reset = function () {
        this._config = this._settings.defaults || {};
    };
    DynaConfigHandler.prototype.save = function (humanReadable) {
        if (humanReadable === void 0) { humanReadable = true; }
        if (!this._settings.filename)
            return Promise.resolve();
        return dyna_node_fs_1.saveJSON(this._settings.filename, this.config, true);
    };
    DynaConfigHandler.prototype.load = function () {
        var _this = this;
        if (!this._settings.filename)
            return Promise.resolve();
        return dyna_node_fs_1.loadJSON(this._settings.filename)
            .then(function (data) {
            _this._config = data;
            _this._setDefaults(_this._settings.defaults);
        });
    };
    DynaConfigHandler.prototype.delete = function () {
        if (!this._settings.filename)
            return Promise.resolve(false);
        return dyna_node_fs_1.deleteFile(this._settings.filename);
    };
    return DynaConfigHandler;
}());
exports.DynaConfigHandler = DynaConfigHandler;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("dyna-node-fs");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});