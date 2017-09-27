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

Object.defineProperty(exports, "__esModule", { value: true });
const dyna_node_fs_1 = __webpack_require__(1);
class DynaConfigHandler {
    constructor(settings = {}) {
        this._settings = settings;
        this._config = this._settings.config || {};
        this.setDefaults(this._settings.defaults);
    }
    get config() {
        return this._config;
    }
    get c() {
        return this._config;
    }
    setDefaults(defaults = {}) {
        this._config = Object.assign({}, defaults, this._config);
        return this.config;
    }
    reset() {
        this._config = this._settings.defaults || {};
    }
    save(humanReadable = true) {
        if (!this._settings.filename)
            return Promise.resolve();
        return dyna_node_fs_1.mkdir(dyna_node_fs_1.getPath(this._settings.filename))
            .then(() => dyna_node_fs_1.saveJSON(this._settings.filename, JSON.stringify(this.config, null, humanReadable ? 2 : 0)));
    }
    load() {
        if (!this._settings.filename)
            return Promise.resolve();
        return dyna_node_fs_1.loadJSON(this._settings.filename)
            .then((data) => {
            this._config = data;
            this.setDefaults(this._settings.defaults);
        });
    }
    delete() {
        if (!this._settings.filename)
            return Promise.resolve(false);
        return dyna_node_fs_1.deleteFile(this._settings.filename);
    }
}
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