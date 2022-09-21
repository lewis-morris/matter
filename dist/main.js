/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin:0\n}\n.floor{\n    position: fixed;\n    bottom: 400px;\n    height: 100px;\n    width: 100%;\n    background: black;\n}\n.block{\n    position: fixed;\n    top: 2vh;\n    left: 50vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block1{\n    position: fixed;\n    top: 2vh;\n    left: 10vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block2{\n    position: fixed;\n    top: 2vh;\n    left: 20vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block3{\n    position: fixed;\n    top: 2vh;\n    left: 30vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block4{\n    position: fixed;\n    top: 2vh;\n    left: 70vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI;AACJ;AACA;IACI,eAAe;IACf,aAAa;IACb,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB","sourcesContent":["body{\n    margin:0\n}\n.floor{\n    position: fixed;\n    bottom: 400px;\n    height: 100px;\n    width: 100%;\n    background: black;\n}\n.block{\n    position: fixed;\n    top: 2vh;\n    left: 50vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block1{\n    position: fixed;\n    top: 2vh;\n    left: 10vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block2{\n    position: fixed;\n    top: 2vh;\n    left: 20vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block3{\n    position: fixed;\n    top: 2vh;\n    left: 30vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}\n.block4{\n    position: fixed;\n    top: 2vh;\n    left: 70vw;\n    height: 20px;\n    width: 40px;\n    background: gray;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1787__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
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
/******/ 	__nested_webpack_require_1787__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_1787__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_1787__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_1787__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_1787__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_1787__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_1787__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_1787__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_1787__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_1787__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_1787__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_1787__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());
    Common._warnedOnce = {};
    Common._decomp = null;
    
    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */
    Common.now = function() {
        if (typeof window !== 'undefined' && window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        if (Date.now) {
            return Date.now();
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */
    Common.warnOnce = function() {
        var message = Array.prototype.slice.call(arguments).join(' ');

        if (!Common._warnedOnce[message]) {
            Common.warn(message);
            Common._warnedOnce[message] = true;
        }
    };

    /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */
    Common.deprecated = function(obj, prop, warning) {
        obj[prop] = Common.chain(function() {
            Common.warnOnce('🔅 deprecated 🔅', warning);
        }, obj[prop]);
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */
    Common.setDecomp = function(decomp) {
        Common._decomp = decomp;
    };

    /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */
    Common.getDecomp = function() {
        // get user provided decomp if set
        var decomp = Common._decomp;

        try {
            // otherwise from window global
            if (!decomp && typeof window !== 'undefined') {
                decomp = window.decomp;
            }
    
            // otherwise from node global
            if (!decomp && typeof __webpack_require__.g !== 'undefined') {
                decomp = __webpack_require__.g.decomp;
            }
        } catch (e) {
            // decomp not available
            decomp = null;
        }

        return decomp;
    };
})();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_35378__) {

/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = __nested_webpack_require_35378__(2);
var Common = __nested_webpack_require_35378__(0);

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        scalar = typeof scalar !== 'undefined' ? scalar : 1;

        var verticesLength = vertices.length,
            translateX = vector.x * scalar,
            translateY = vector.y * scalar,
            i;
        
        for (i = 0; i < verticesLength; i++) {
            vertices[i].x += translateX;
            vertices[i].y += translateY;
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex,
            dx,
            dy,
            i;

        for (i = 0; i < verticesLength; i++) {
            vertex = vertices[i];
            dx = vertex.x - pointX;
            dy = vertex.y - pointY;
            vertex.x = pointX + (dx * cos - dy * sin);
            vertex.y = pointY + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        var pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex = vertices[verticesLength - 1],
            nextVertex;

        for (var i = 0; i < verticesLength; i++) {
            nextVertex = vertices[i];

            if ((pointX - vertex.x) * (nextVertex.y - vertex.y) 
                + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                return false;
            }

            vertex = nextVertex;
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_49501__) {

/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = __nested_webpack_require_49501__(0);

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        var events = object.events;
        
        if (events && Common.keys(events).length > 0) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();


/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_52699__) {

/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = __nested_webpack_require_52699__(4);
var Common = __nested_webpack_require_52699__(0);
var Bounds = __nested_webpack_require_52699__(1);
var Body = __nested_webpack_require_52699__(6);

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {},
            cache: {
                allBodies: null,
                allConstraints: null,
                allComposites: null
            }
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (isModified && composite.cache) {
            composite.cache.allBodies = null;
            composite.cache.allConstraints = null;
            composite.cache.allComposites = null;
        }

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for (var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);
        if (position !== -1) {
            Composite.removeCompositeAt(compositeA, position);
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);
        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        if (composite.cache && composite.cache.allBodies) {
            return composite.cache.allBodies;
        }

        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allBodies = bodies;
        }

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        if (composite.cache && composite.cache.allConstraints) {
            return composite.cache.allConstraints;
        }

        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allConstraints = constraints;
        }

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        if (composite.cache && composite.cache.allComposites) {
            return composite.cache.allComposites;
        }

        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allComposites = composites;
        }

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
            .concat(Composite.allConstraints(composite))
            .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */

})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_76386__) {

/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = __nested_webpack_require_76386__(3);
var Vector = __nested_webpack_require_76386__(2);
var Sleeping = __nested_webpack_require_76386__(7);
var Render = __nested_webpack_require_76386__(16);
var Common = __nested_webpack_require_76386__(0);
var Bounds = __nested_webpack_require_76386__(1);
var Axes = __nested_webpack_require_76386__(11);

(function() {

    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                }
            },
            events: null,
            bounds: null,
            chamfer: null,
            circleRadius: 0,
            positionPrev: null,
            anglePrev: 0,
            parent: null,
            axes: null,
            area: 0,
            mass: 0,
            inertia: 0,
            _original: null
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            if (!Object.prototype.hasOwnProperty.call(settings, property))
                continue;

            value = settings[property];
            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            case 'centre':
                Body.setCentre(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.isStatic = isStatic;

            if (isStatic) {
                part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                };

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                part._original = null;
            }
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia (i.e. second moment of area) of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */
    Body.setCentre = function(body, centre, relative) {
        if (!relative) {
            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
            body.position.x = centre.x;
            body.position.y = centre.y;
        } else {
            body.positionPrev.x += centre.x;
            body.positionPrev.y += centre.y;
            body.position.x += centre.x;
            body.position.y += centre.y;
        }
    };

    /**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */
    Body.setPosition = function(body, position) {
        var delta = Vector.sub(position, body.position);
        body.positionPrev.x += delta.x;
        body.positionPrev.y += delta.y;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */
    Body.setAngle = function(body, angle) {
        var delta = angle - body.angle;
        body.anglePrev += delta;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        body.positionPrev.x = body.position.x - velocity.x;
        body.positionPrev.y = body.position.y - velocity.y;
        body.velocity.x = velocity.x;
        body.velocity.y = velocity.y;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        body.anglePrev = body.angle - velocity;
        body.angularVelocity = velocity;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */
    Body.translate = function(body, translation) {
        Body.setPosition(body, Vector.add(body.position, translation));
    };

    /**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */
    Body.rotate = function(body, rotation, point) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.setAngle(body, body.angle + rotation);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */
    Body.update = function(body, deltaTime, timeScale, correction) {
        var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);

        // from the previous step
        var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale,
            velocityPrevX = body.position.x - body.positionPrev.x,
            velocityPrevY = body.position.y - body.positionPrev.y;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir * correction) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir * correction) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // track speed and acceleration
        body.speed = Vector.magnitude(body.velocity);
        body.angularSpeed = Math.abs(body.angularVelocity);

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        body.force.x += force.x;
        body.force.y += force.y;
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */

    /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */

    /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */

    /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */

    /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

    /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

    /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */
     
    /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */

})();


/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_119708__) {

/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Events = __nested_webpack_require_119708__(4);

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */
    Sleeping.update = function(bodies, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
            
            if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold)
                    Sleeping.set(body, true);
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Sleeping.afterCollisions = function(pairs, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();


/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_123800__) {

/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/

var Collision = {};

module.exports = Collision;

var Vertices = __nested_webpack_require_123800__(3);
var Pair = __nested_webpack_require_123800__(9);

(function() {
    var _supports = [];

    var _overlapAB = {
        overlap: 0,
        axis: null
    };

    var _overlapBA = {
        overlap: 0,
        axis: null
    };

    /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */
    Collision.create = function(bodyA, bodyB) {
        return { 
            pair: null,
            collided: false,
            bodyA: bodyA,
            bodyB: bodyB,
            parentA: bodyA.parent,
            parentB: bodyB.parent,
            depth: 0,
            normal: { x: 0, y: 0 },
            tangent: { x: 0, y: 0 },
            penetration: { x: 0, y: 0 },
            supports: []
        };
    };

    /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */
    Collision.collides = function(bodyA, bodyB, pairs) {
        Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);

        if (_overlapAB.overlap <= 0) {
            return null;
        }

        Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);

        if (_overlapBA.overlap <= 0) {
            return null;
        }

        // reuse collision records for gc efficiency
        var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)],
            collision;

        if (!pair) {
            collision = Collision.create(bodyA, bodyB);
            collision.collided = true;
            collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
            collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
            collision.parentA = collision.bodyA.parent;
            collision.parentB = collision.bodyB.parent;
        } else {
            collision = pair.collision;
        }

        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        var minOverlap;

        if (_overlapAB.overlap < _overlapBA.overlap) {
            minOverlap = _overlapAB;
        } else {
            minOverlap = _overlapBA;
        }

        var normal = collision.normal,
            supports = collision.supports,
            minAxis = minOverlap.axis,
            minAxisX = minAxis.x,
            minAxisY = minAxis.y;

        // ensure normal is facing away from bodyA
        if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
            normal.x = minAxisX;
            normal.y = minAxisY;
        } else {
            normal.x = -minAxisX;
            normal.y = -minAxisY;
        }
        
        collision.tangent.x = -normal.y;
        collision.tangent.y = normal.x;

        collision.depth = minOverlap.overlap;

        collision.penetration.x = normal.x * collision.depth;
        collision.penetration.y = normal.y * collision.depth;

        // find support points, there is always either exactly one or two
        var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1),
            supportCount = 0;

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, supportsB[0])) {
            supports[supportCount++] = supportsB[0];
        }

        if (Vertices.contains(bodyA.vertices, supportsB[1])) {
            supports[supportCount++] = supportsB[1];
        }

        // find the supports from bodyA that are inside bodyB
        if (supportCount < 2) {
            var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);

            if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                supports[supportCount++] = supportsA[0];
            }

            if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                supports[supportCount++] = supportsA[1];
            }
        }

        // account for the edge case of overlapping but no vertex containment
        if (supportCount === 0) {
            supports[supportCount++] = supportsB[0];
        }

        // update supports array size
        supports.length = supportCount;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */
    Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
        var verticesALength = verticesA.length,
            verticesBLength = verticesB.length,
            verticesAX = verticesA[0].x,
            verticesAY = verticesA[0].y,
            verticesBX = verticesB[0].x,
            verticesBY = verticesB[0].y,
            axesLength = axes.length,
            overlapMin = Number.MAX_VALUE,
            overlapAxisNumber = 0,
            overlap,
            overlapAB,
            overlapBA,
            dot,
            i,
            j;

        for (i = 0; i < axesLength; i++) {
            var axis = axes[i],
                axisX = axis.x,
                axisY = axis.y,
                minA = verticesAX * axisX + verticesAY * axisY,
                minB = verticesBX * axisX + verticesBY * axisY,
                maxA = minA,
                maxB = minB;
            
            for (j = 1; j < verticesALength; j += 1) {
                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;

                if (dot > maxA) { 
                    maxA = dot;
                } else if (dot < minA) { 
                    minA = dot;
                }
            }

            for (j = 1; j < verticesBLength; j += 1) {
                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;

                if (dot > maxB) { 
                    maxB = dot;
                } else if (dot < minB) { 
                    minB = dot;
                }
            }

            overlapAB = maxA - minB;
            overlapBA = maxB - minA;
            overlap = overlapAB < overlapBA ? overlapAB : overlapBA;

            if (overlap < overlapMin) {
                overlapMin = overlap;
                overlapAxisNumber = i;

                if (overlap <= 0) {
                    // can not be intersecting
                    break;
                }
            } 
        }

        result.axis = axes[overlapAxisNumber];
        result.overlap = overlapMin;
    };

    /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */
    Collision._projectToAxis = function(projection, vertices, axis) {
        var min = vertices[0].x * axis.x + vertices[0].y * axis.y,
            max = min;

        for (var i = 1; i < vertices.length; i += 1) {
            var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;

            if (dot > max) { 
                max = dot; 
            } else if (dot < min) { 
                min = dot; 
            }
        }

        projection.min = min;
        projection.max = max;
    };

    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */
    Collision._findSupports = function(bodyA, bodyB, normal, direction) {
        var vertices = bodyB.vertices,
            verticesLength = vertices.length,
            bodyAPositionX = bodyA.position.x,
            bodyAPositionY = bodyA.position.y,
            normalX = normal.x * direction,
            normalY = normal.y * direction,
            nearestDistance = Number.MAX_VALUE,
            vertexA,
            vertexB,
            vertexC,
            distance,
            j;

        // find deepest vertex relative to the axis
        for (j = 0; j < verticesLength; j += 1) {
            vertexB = vertices[j];
            distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);

            // convex hill-climbing
            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertexB;
            }
        }

        // measure next vertex
        vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
        nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);

        // compare with previous vertex
        vertexB = vertices[(vertexA.index + 1) % verticesLength];
        if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
            _supports[0] = vertexA;
            _supports[1] = vertexB;

            return _supports;
        }

        _supports[0] = vertexA;
        _supports[1] = vertexC;

        return _supports;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */

    /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */

    /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */

    /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */

    /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */

    /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */

    /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */

    /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * An array of body vertices that represent the support points in the collision.
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */

})();


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_135703__) {

/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = __nested_webpack_require_135703__(17);

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            collision: collision,
            contacts: [],
            activeContacts: [],
            separation: 0,
            isActive: true,
            confirmedActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: 0,
            friction: 0,
            frictionStatic: 0,
            restitution: 0,
            slop: 0
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var contacts = pair.contacts,
            supports = collision.supports,
            activeContacts = pair.activeContacts,
            parentA = collision.parentA,
            parentB = collision.parentB,
            parentAVerticesLength = parentA.vertices.length;
        
        pair.isActive = true;
        pair.timeUpdated = timestamp;
        pair.collision = collision;
        pair.separation = collision.depth;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
        pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
        pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
        pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;

        collision.pair = pair;
        activeContacts.length = 0;
        
        for (var i = 0; i < supports.length; i++) {
            var support = supports[i],
                contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index,
                contact = contacts[contactId];

            if (contact) {
                activeContacts.push(contact);
            } else {
                activeContacts.push(contacts[contactId] = Contact.create(support));
            }
        }
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.activeContacts.length = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        if (bodyA.id < bodyB.id) {
            return 'A' + bodyA.id + 'B' + bodyB.id;
        } else {
            return 'A' + bodyB.id + 'B' + bodyA.id;
        }
    };

})();


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_139447__) {

/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = __nested_webpack_require_139447__(3);
var Vector = __nested_webpack_require_139447__(2);
var Sleeping = __nested_webpack_require_139447__(7);
var Bounds = __nested_webpack_require_139447__(1);
var Axes = __nested_webpack_require_139447__(11);
var Common = __nested_webpack_require_139447__(0);

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */
    Constraint.solveAll = function(constraints, timeScale) {
        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;

        if (constraint.damping) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointAWorld = function(constraint) {
        return {
            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + constraint.pointA.x,
            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + constraint.pointA.y
        };
    };

    /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointBWorld = function(constraint) {
        return {
            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + constraint.pointB.x,
            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + constraint.pointB.y
        };
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_155865__) {

/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = __nested_webpack_require_155865__(2);
var Common = __nested_webpack_require_155865__(0);

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_157606__) {

/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = __nested_webpack_require_157606__(3);
var Common = __nested_webpack_require_157606__(0);
var Body = __nested_webpack_require_157606__(6);
var Bounds = __nested_webpack_require_157606__(1);
var Vector = __nested_webpack_require_157606__(2);

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
        var decomp = Common.getDecomp(),
            canDecomp,
            body,
            parts,
            isConvex,
            isConcave,
            vertices,
            i,
            j,
            k,
            v,
            z;

        // check decomp is as expected
        canDecomp = Boolean(decomp && decomp.quickDecomp);

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);
            isConcave = !isConvex;

            if (isConcave && !canDecomp) {
                Common.warnOnce(
                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
                );
            }

            if (isConvex || !canDecomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);
                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

            // offset such that body.position is at the centre off mass
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_171606__) {

/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = __nested_webpack_require_171606__(0);

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove);
        element.addEventListener('mousedown', mouse.mousedown);
        element.addEventListener('mouseup', mouse.mouseup);
        
        element.addEventListener('mousewheel', mouse.mousewheel);
        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

        element.addEventListener('touchmove', mouse.mousemove);
        element.addEventListener('touchstart', mouse.mousedown);
        element.addEventListener('touchend', mouse.mouseup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();


/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_178610__) {

/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/

var Detector = {};

module.exports = Detector;

var Common = __nested_webpack_require_178610__(0);
var Collision = __nested_webpack_require_178610__(8);

(function() {

    /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */
    Detector.create = function(options) {
        var defaults = {
            bodies: [],
            pairs: null
        };

        return Common.extend(defaults, options);
    };

    /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */
    Detector.setBodies = function(detector, bodies) {
        detector.bodies = bodies.slice(0);
    };

    /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */
    Detector.clear = function(detector) {
        detector.bodies = [];
    };

    /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */
    Detector.collisions = function(detector) {
        var collisions = [],
            pairs = detector.pairs,
            bodies = detector.bodies,
            bodiesLength = bodies.length,
            canCollide = Detector.canCollide,
            collides = Collision.collides,
            i,
            j;

        bodies.sort(Detector._compareBoundsX);

        for (i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                boundsA = bodyA.bounds,
                boundXMax = bodyA.bounds.max.x,
                boundYMax = bodyA.bounds.max.y,
                boundYMin = bodyA.bounds.min.y,
                bodyAStatic = bodyA.isStatic || bodyA.isSleeping,
                partsALength = bodyA.parts.length,
                partsASingle = partsALength === 1;

            for (j = i + 1; j < bodiesLength; j++) {
                var bodyB = bodies[j],
                    boundsB = bodyB.bounds;

                if (boundsB.min.x > boundXMax) {
                    break;
                }

                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                    continue;
                }

                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                    continue;
                }

                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                    continue;
                }

                var partsBLength = bodyB.parts.length;

                if (partsASingle && partsBLength === 1) {
                    var collision = collides(bodyA, bodyB, pairs);

                    if (collision) {
                        collisions.push(collision);
                    }
                } else {
                    var partsAStart = partsALength > 1 ? 1 : 0,
                        partsBStart = partsBLength > 1 ? 1 : 0;
                    
                    for (var k = partsAStart; k < partsALength; k++) {
                        var partA = bodyA.parts[k],
                            boundsA = partA.bounds;

                        for (var z = partsBStart; z < partsBLength; z++) {
                            var partB = bodyB.parts[z],
                                boundsB = partB.bounds;

                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x
                                || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                                continue;
                            }

                            var collision = collides(partA, partB, pairs);

                            if (collision) {
                                collisions.push(collision);
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

    /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */
    Detector._compareBoundsX = function(bodyA, bodyB) {
        return bodyA.bounds.min.x - bodyB.bounds.min.x;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */

})();


/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_184655__) {

/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = __nested_webpack_require_184655__(0);

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var parts = pattern.exec(range);
        var major = Number(parts[4]);
        var minor = Number(parts[5]);
        var patch = Number(parts[6]);

        return {
            isRange: Boolean(parts[1] || parts[2]),
            version: parts[3],
            range: range,
            operator: parts[1] || parts[2] || '',
            major: major,
            minor: minor,
            patch: patch,
            parts: [major, minor, patch],
            prerelease: parts[7],
            number: major * 1e8 + minor * 1e4 + patch
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var r = Plugin.versionParse(range),
            v = Plugin.versionParse(version);

        if (r.isRange) {
            if (r.operator === '*' || version === '*') {
                return true;
            }

            if (r.operator === '>') {
                return v.number > r.number;
            }

            if (r.operator === '>=') {
                return v.number >= r.number;
            }

            if (r.operator === '~') {
                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
            }

            if (r.operator === '^') {
                if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                }

                if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                }

                return v.patch === r.patch;
            }
        }

        return version === range || version === '*';
    };

})();


/***/ }),
/* 16 */
/***/ (function(module, exports, __nested_webpack_require_198010__) {

/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Common = __nested_webpack_require_198010__(0);
var Composite = __nested_webpack_require_198010__(5);
var Bounds = __nested_webpack_require_198010__(1);
var Events = __nested_webpack_require_198010__(4);
var Vector = __nested_webpack_require_198010__(2);
var Mouse = __nested_webpack_require_198010__(13);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    Render._goodFps = 30;
    Render._goodDelta = 1000 / 60;

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            controller: Render,
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                elapsedHistory: []
            },
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#14151f',
                wireframeBackground: '#14151f',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showStats: false,
                showPerformance: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        // for temporary back compatibility only
        render.options.showBroadphase = false;

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else if (!render.canvas.parentNode) {
            Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            
            _updateTiming(render, time);

            Render.world(render, time);

            if (render.options.showStats || render.options.showDebug) {
                Render.stats(render, render.context, time);
            }

            if (render.options.showPerformance || render.options.showDebug) {
                Render.performance(render, render.context, time);
            }
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.setTransform(
            render.options.pixelRatio / boundsScaleX, 0, 0, 
            render.options.pixelRatio / boundsScaleY, 0, 0
        );
        
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render, time) {
        var startTime = Common.now(),
            engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            timing = render.timing;

        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;

            if (render.options.pixelRatio !== 1) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            }
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);

        // log the time elapsed computing this update
        timing.lastElapsed = Common.now() - startTime;
    };

    /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */
    Render.stats = function(render, context, time) {
        var engine = render.engine,
            world = engine.world,
            bodies = Composite.allBodies(world),
            parts = 0,
            width = 55,
            height = 44,
            x = 0,
            y = 0;
        
        // count parts
        for (var i = 0; i < bodies.length; i += 1) {
            parts += bodies[i].parts.length;
        }

        // sections
        var sections = {
            'Part': parts,
            'Body': bodies.length,
            'Cons': Composite.allConstraints(world).length,
            'Comp': Composite.allComposites(world).length,
            'Pair': engine.pairs.list.length
        };

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(x, y, width * 5.5, height);

        context.font = '12px Arial';
        context.textBaseline = 'top';
        context.textAlign = 'right';

        // sections
        for (var key in sections) {
            var section = sections[key];
            // label
            context.fillStyle = '#aaa';
            context.fillText(key, x + width, y + 8);

            // value
            context.fillStyle = '#eee';
            context.fillText(section, x + width, y + 26);

            x += width;
        }
    };

    /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.performance = function(render, context) {
        var engine = render.engine,
            timing = render.timing,
            deltaHistory = timing.deltaHistory,
            elapsedHistory = timing.elapsedHistory,
            timestampElapsedHistory = timing.timestampElapsedHistory,
            engineDeltaHistory = timing.engineDeltaHistory,
            engineElapsedHistory = timing.engineElapsedHistory,
            lastEngineDelta = engine.timing.lastDelta;
        
        var deltaMean = _mean(deltaHistory),
            elapsedMean = _mean(elapsedHistory),
            engineDeltaMean = _mean(engineDeltaHistory),
            engineElapsedMean = _mean(engineElapsedHistory),
            timestampElapsedMean = _mean(timestampElapsedHistory),
            rateMean = (timestampElapsedMean / deltaMean) || 0,
            fps = (1000 / deltaMean) || 0;

        var graphHeight = 4,
            gap = 12,
            width = 60,
            height = 34,
            x = 10,
            y = 69;

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);

        // show FPS
        Render.status(
            context, x, y, width, graphHeight, deltaHistory.length, 
            Math.round(fps) + ' fps', 
            fps / Render._goodFps,
            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
        );

        // show engine delta
        Render.status(
            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
            lastEngineDelta.toFixed(2) + ' dt', 
            Render._goodDelta / lastEngineDelta,
            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
        );

        // show engine update time
        Render.status(
            context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length,
            engineElapsedMean.toFixed(2) + ' ut', 
            1 - (engineElapsedMean / Render._goodFps),
            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
        );

        // show render time
        Render.status(
            context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length,
            elapsedMean.toFixed(2) + ' rt', 
            1 - (elapsedMean / Render._goodFps),
            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
        );

        // show effective speed
        Render.status(
            context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, 
            rateMean.toFixed(2) + ' x', 
            rateMean * rateMean * rateMean,
            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
        );
    };

    /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */
    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
        // background
        context.strokeStyle = '#888';
        context.fillStyle = '#444';
        context.lineWidth = 1;
        context.fillRect(x, y + 7, width, 1);

        // chart
        context.beginPath();
        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
        for (var i = 0; i < width; i += 1) {
            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
        }
        context.stroke();

        // indicator
        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
        context.fillRect(x, y - 7, 4, 4);

        // label
        context.font = '12px Arial';
        context.textBaseline = 'middle';
        context.textAlign = 'right';
        context.fillStyle = '#eee';
        context.fillText(label, x + width, y - 5);
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = '#bbb';
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = '#bbb';
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x,
                    normalPosY = pair.activeContacts[0].vertex.y;

                if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */
    var _updateTiming = function(render, time) {
        var engine = render.engine,
            timing = render.timing,
            historySize = timing.historySize,
            timestamp = engine.timing.timestamp;

        timing.delta = time - timing.lastTime || Render._goodDelta;
        timing.lastTime = time;

        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
        timing.lastTimestamp = timestamp;

        timing.deltaHistory.unshift(timing.delta);
        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

        timing.elapsedHistory.unshift(timing.lastElapsed);
        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
    };

    /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */
    var _mean = function(values) {
        var result = 0;
        for (var i = 0; i < values.length; i += 1) {
            result += values[i];
        }
        return (result / values.length) || 0;
    };

    /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

    /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */
    
    /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */

    /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */

})();


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };

})();


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_255897__) {

/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var Sleeping = __nested_webpack_require_255897__(7);
var Resolver = __nested_webpack_require_255897__(19);
var Detector = __nested_webpack_require_255897__(14);
var Pairs = __nested_webpack_require_255897__(20);
var Events = __nested_webpack_require_255897__(4);
var Composite = __nested_webpack_require_255897__(5);
var Constraint = __nested_webpack_require_255897__(10);
var Common = __nested_webpack_require_255897__(0);
var Body = __nested_webpack_require_255897__(6);

(function() {

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(options) {
        options = options || {};

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0
            }
        };

        var engine = Common.extend(defaults, options);

        engine.world = options.world || Composite.create({ label: 'World' });
        engine.pairs = options.pairs || Pairs.create();
        engine.detector = options.detector || Detector.create();

        // for temporary back compatibility only
        engine.grid = { buckets: [] };
        engine.world.gravity = engine.gravity;
        engine.broadphase = engine.grid;
        engine.metrics = {};
        
        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */
    Engine.update = function(engine, delta, correction) {
        var startTime = Common.now();

        delta = delta || 1000 / 60;
        correction = correction || 1;

        var world = engine.world,
            detector = engine.detector,
            pairs = engine.pairs,
            timing = engine.timing,
            timestamp = timing.timestamp,
            i;

        // increment timestamp
        timing.timestamp += delta * timing.timeScale;
        timing.lastDelta = delta * timing.timeScale;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get all bodies and all constraints in the world
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);

        // update the detector bodies if they have changed
        if (world.isModified) {
            Detector.setBodies(detector, allBodies);
        }

        // reset all composite modified flags
        if (world.isModified) {
            Composite.setModified(world, false, false, true);
        }

        // update sleeping if enabled
        if (engine.enableSleeping)
            Sleeping.update(allBodies, timing.timeScale);

        // apply gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, engine.gravity);

        // update all body position and rotation by integration
        Engine._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // find all collisions
        detector.pairs = engine.pairs;
        var collisions = Detector.collisions(detector);

        // update collision pairs
        Pairs.update(pairs, collisions, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list, timing.timeScale);

        // trigger collision events
        if (pairs.collisionStart.length > 0)
            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

        // iteratively resolve position between collisions
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, timing.timeScale);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, timing.timeScale);
        }

        // trigger collision events
        if (pairs.collisionActive.length > 0)
            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

        if (pairs.collisionEnd.length > 0)
            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });

        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        // log the time elapsed computing this update
        engine.timing.lastElapsed = Common.now() - startTime;

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        Pairs.clear(engine.pairs);
        Detector.clear(engine.detector);
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // apply gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */
    Engine._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, deltaTime, timeScale, correction);
        }
    };

    /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     *
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the `delta` value used in the last engine update.
     *
     * @property timing.lastDelta
     * @type number
     * @default 0
     */

    /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */

    /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * The gravity to apply on all bodies in `engine.world`.
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

})();


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_272322__) {

/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = __nested_webpack_require_272322__(3);
var Bounds = __nested_webpack_require_272322__(1);

(function() {

    Resolver._restingThresh = 4;
    Resolver._restingThreshTangent = 6;
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            activeCount,
            pairsLength = pairs.length;

        // find total contacts on each body
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            activeCount = pair.activeContacts.length;
            pair.collision.parentA.totalContacts += activeCount;
            pair.collision.parentB.totalContacts += activeCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solvePosition = function(pairs, timeScale) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            contactShare,
            positionImpulse,
            positionDampen = Resolver._positionDampen,
            pairsLength = pairs.length;

        // find impulses required to resolve penetration
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            pair.separation = 
                normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x)
                + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
        }
        
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = (pair.separation - pair.slop) * timeScale;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        var positionWarming = Resolver._positionWarming,
            bodiesLength = bodies.length,
            verticesTranslate = Vertices.translate,
            boundsUpdate = Bounds.update;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i],
                positionImpulse = body.positionImpulse,
                positionImpulseX = positionImpulse.x,
                positionImpulseY = positionImpulse.y,
                velocity = body.velocity;

            // reset contact count
            body.totalContacts = 0;

            if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    verticesTranslate(part.vertices, positionImpulse);
                    boundsUpdate(part.bounds, part.vertices, velocity);
                    part.position.x += positionImpulseX;
                    part.position.y += positionImpulseY;
                }

                // move the body without changing velocity
                body.positionPrev.x += positionImpulseX;
                body.positionPrev.y += positionImpulseY;

                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                    // reset cached impulse if the body has velocity along it
                    positionImpulse.x = 0;
                    positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    positionImpulse.x *= positionWarming;
                    positionImpulse.y *= positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var pairsLength = pairs.length,
            i,
            j;
        
        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var contacts = pair.activeContacts,
                contactsLength = contacts.length,
                collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent;
    
            // resolve each contact
            for (j = 0; j < contactsLength; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    normalImpulse = contact.normalImpulse,
                    tangentImpulse = contact.tangentImpulse;
    
                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse,
                        impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += bodyA.inverseInertia * (
                            (contactVertex.x - bodyA.position.x) * impulseY
                            - (contactVertex.y - bodyA.position.y) * impulseX
                        );
                    }
    
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= bodyB.inverseInertia * (
                            (contactVertex.x - bodyB.position.x) * impulseY 
                            - (contactVertex.y - bodyB.position.y) * impulseX
                        );
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solveVelocity = function(pairs, timeScale) {
        var timeScaleSquared = timeScale * timeScale,
            restingThresh = Resolver._restingThresh * timeScaleSquared,
            frictionNormalMultiplier = Resolver._frictionNormalMultiplier,
            restingThreshTangent = Resolver._restingThreshTangent * timeScaleSquared,
            NumberMaxValue = Number.MAX_VALUE,
            pairsLength = pairs.length,
            tangentImpulse,
            maxFriction,
            i,
            j;

        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                bodyAVelocity = bodyA.velocity,
                bodyBVelocity = bodyB.velocity,
                normalX = collision.normal.x,
                normalY = collision.normal.y,
                tangentX = collision.tangent.x,
                tangentY = collision.tangent.y,
                contacts = pair.activeContacts,
                contactsLength = contacts.length,
                contactShare = 1 / contactsLength,
                inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass,
                friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier * timeScaleSquared;

            // update body velocities
            bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
            bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
            bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
            bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (j = 0; j < contactsLength; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex;

                var offsetAX = contactVertex.x - bodyA.position.x,
                    offsetAY = contactVertex.y - bodyA.position.y,
                    offsetBX = contactVertex.x - bodyB.position.x,
                    offsetBY = contactVertex.y - bodyB.position.y;
 
                var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity,
                    velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity,
                    velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity,
                    velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;

                var relativeVelocityX = velocityPointAX - velocityPointBX,
                    relativeVelocityY = velocityPointAY - velocityPointBY;

                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY,
                    tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;

                // coulomb friction
                var normalOverlap = pair.separation + normalVelocity;
                var normalForce = Math.min(normalOverlap, 1);
                normalForce = normalOverlap < 0 ? 0 : normalForce;
                
                var frictionLimit = normalForce * friction;

                if (tangentVelocity > frictionLimit || -tangentVelocity > frictionLimit) {
                    maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleSquared;
                    
                    if (tangentImpulse < -maxFriction) {
                        tangentImpulse = -maxFriction;
                    } else if (tangentImpulse > maxFriction) {
                        tangentImpulse = maxFriction;
                    }
                } else {
                    tangentImpulse = tangentVelocity;
                    maxFriction = NumberMaxValue;
                }

                // account for mass, inertia and contact offset
                var oAcN = offsetAX * normalY - offsetAY * normalX,
                    oBcN = offsetBX * normalY - offsetBY * normalX,
                    share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity * normalVelocity > restingThresh && normalVelocity < 0) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse += normalImpulse;
                    contact.normalImpulse = Math.min(contact.normalImpulse, 0);
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity * tangentVelocity > restingThreshTangent) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse += tangentImpulse;
                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse,
                    impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                }
            }
        }
    };

})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_287595__) {

/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = __nested_webpack_require_287595__(9);
var Common = __nested_webpack_require_287595__(0);

(function() {

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairsList = pairs.list,
            pairsListLength = pairsList.length,
            pairsTable = pairs.table,
            collisionsLength = collisions.length,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            collision,
            pairIndex,
            pair,
            i;

        // clear collision state arrays, but maintain old reference
        collisionStart.length = 0;
        collisionEnd.length = 0;
        collisionActive.length = 0;

        for (i = 0; i < pairsListLength; i++) {
            pairsList[i].confirmedActive = false;
        }

        for (i = 0; i < collisionsLength; i++) {
            collision = collisions[i];
            pair = collision.pair;

            if (pair) {
                // pair already exists (but may or may not be active)
                if (pair.isActive) {
                    // pair exists and is active
                    collisionActive.push(pair);
                } else {
                    // pair exists but was inactive, so a collision has just started again
                    collisionStart.push(pair);
                }

                // update the pair
                Pair.update(pair, collision, timestamp);
                pair.confirmedActive = true;
            } else {
                // pair did not exist, create a new pair
                pair = Pair.create(collision, timestamp);
                pairsTable[pair.id] = pair;

                // push the new pair
                collisionStart.push(pair);
                pairsList.push(pair);
            }
        }

        // find pairs that are no longer active
        var removePairIndex = [];
        pairsListLength = pairsList.length;

        for (i = 0; i < pairsListLength; i++) {
            pair = pairsList[i];
            
            if (!pair.confirmedActive) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);

                if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
                    removePairIndex.push(i);
                }
            }
        }

        // remove inactive pairs
        for (i = 0; i < removePairIndex.length; i++) {
            pairIndex = removePairIndex[i] - i;
            pair = pairsList[pairIndex];
            pairsList.splice(pairIndex, 1);
            delete pairsTable[pair.id];
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();


/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_291448__) {

var Matter = module.exports = __nested_webpack_require_291448__(22);

Matter.Axes = __nested_webpack_require_291448__(11);
Matter.Bodies = __nested_webpack_require_291448__(12);
Matter.Body = __nested_webpack_require_291448__(6);
Matter.Bounds = __nested_webpack_require_291448__(1);
Matter.Collision = __nested_webpack_require_291448__(8);
Matter.Common = __nested_webpack_require_291448__(0);
Matter.Composite = __nested_webpack_require_291448__(5);
Matter.Composites = __nested_webpack_require_291448__(23);
Matter.Constraint = __nested_webpack_require_291448__(10);
Matter.Contact = __nested_webpack_require_291448__(17);
Matter.Detector = __nested_webpack_require_291448__(14);
Matter.Engine = __nested_webpack_require_291448__(18);
Matter.Events = __nested_webpack_require_291448__(4);
Matter.Grid = __nested_webpack_require_291448__(24);
Matter.Mouse = __nested_webpack_require_291448__(13);
Matter.MouseConstraint = __nested_webpack_require_291448__(25);
Matter.Pair = __nested_webpack_require_291448__(9);
Matter.Pairs = __nested_webpack_require_291448__(20);
Matter.Plugin = __nested_webpack_require_291448__(15);
Matter.Query = __nested_webpack_require_291448__(26);
Matter.Render = __nested_webpack_require_291448__(16);
Matter.Resolver = __nested_webpack_require_291448__(19);
Matter.Runner = __nested_webpack_require_291448__(27);
Matter.SAT = __nested_webpack_require_291448__(28);
Matter.Sleeping = __nested_webpack_require_291448__(7);
Matter.Svg = __nested_webpack_require_291448__(29);
Matter.Vector = __nested_webpack_require_291448__(2);
Matter.Vertices = __nested_webpack_require_291448__(3);
Matter.World = __nested_webpack_require_291448__(30);

// temporary back compatibility
Matter.Engine.run = Matter.Runner.run;
Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_292984__) {

/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = __nested_webpack_require_292984__(15);
var Common = __nested_webpack_require_292984__(0);

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version =   true ? "0.18.0" : 0;

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();


/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_295892__) {

/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = __nested_webpack_require_295892__(5);
var Constraint = __nested_webpack_require_295892__(10);
var Common = __nested_webpack_require_295892__(0);
var Body = __nested_webpack_require_295892__(6);
var Bodies = __nested_webpack_require_295892__(12);
var deprecated = Common.deprecated;

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            x = xx,
            y = yy,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    x = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    x += columnGap;
                }
            }
            
            y += maxHeight + rowGap;
            x = xx;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
        });
    };

    /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(xx, yy, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };

    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
    
    /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(xx, yy, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

    /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
            return Bodies.circle(x, y, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_308502__) {

/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/

var Grid = {};

module.exports = Grid;

var Pair = __nested_webpack_require_308502__(9);
var Common = __nested_webpack_require_308502__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // temporary back compatibility bounds check
            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');

    /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            bucketLength = bucket.length,
            i;

        // add new pairs
        for (i = 0; i < bucketLength; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var id = pairId(body, bodyB),
                pair = gridPairs[id];

            if (pair) {
                pair[2] += 1;
            } else {
                gridPairs[id] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            i;

        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        var bucketLength = bucket.length;

        // update pair counts
        for (i = 0; i < bucketLength; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var pair = gridPairs[pairId(body, bucket[i])];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pair,
            gridPairs = grid.pairs,
            pairKeys = Common.keys(gridPairs),
            pairKeysLength = pairKeys.length,
            pairs = [],
            k;

        // iterate over grid.pairs
        for (k = 0; k < pairKeysLength; k++) {
            pair = gridPairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete gridPairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_318832__) {

/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = __nested_webpack_require_318832__(3);
var Sleeping = __nested_webpack_require_318832__(7);
var Mouse = __nested_webpack_require_318832__(13);
var Events = __nested_webpack_require_318832__(4);
var Detector = __nested_webpack_require_318832__(14);
var Constraint = __nested_webpack_require_318832__(10);
var Composite = __nested_webpack_require_318832__(5);
var Common = __nested_webpack_require_318832__(0);
var Bounds = __nested_webpack_require_318832__(1);

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_327327__) {

/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = __nested_webpack_require_327327__(2);
var Collision = __nested_webpack_require_327327__(8);
var Bounds = __nested_webpack_require_327327__(1);
var Bodies = __nested_webpack_require_327327__(12);
var Vertices = __nested_webpack_require_327327__(3);

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [],
            bodiesLength = bodies.length,
            bounds = body.bounds,
            collides = Collision.collides,
            overlaps = Bounds.overlaps;

        for (var i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                partsALength = bodyA.parts.length,
                partsAStart = partsALength === 1 ? 0 : 1;
            
            if (overlaps(bodyA.bounds, bounds)) {
                for (var j = partsAStart; j < partsALength; j++) {
                    var part = bodyA.parts[j];

                    if (overlaps(part.bounds, bounds)) {
                        var collision = collides(part, body);

                        if (collision) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_331702__) {

/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = __nested_webpack_require_331702__(4);
var Engine = __nested_webpack_require_331702__(18);
var Common = __nested_webpack_require_331702__(0);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    if (!_requestAnimationFrame) {
        var _frameTimeout;

        _requestAnimationFrame = function(callback){ 
            _frameTimeout = setTimeout(function() { 
                callback(Common.now()); 
            }, 1000 / 60);
        };

        _cancelAnimationFrame = function() {
            clearTimeout(_frameTimeout);
        };
    }

    /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            fps: 60,
            correction: 1,
            deltaSampleSize: 60,
            counterTimestamp: 0,
            frameCounter: 0,
            deltaHistory: [],
            timePrev: null,
            timeScalePrev: 1,
            frameRequestId: null,
            isFixed: false,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        runner.delta = runner.delta || 1000 / runner.fps;
        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
        runner.fps = 1000 / runner.delta;

        return runner;
    };

    /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */
    Runner.run = function(runner, engine) {
        // create runner if engine is first argument
        if (typeof runner.positionIterations !== 'undefined') {
            engine = runner;
            runner = Runner.create();
        }

        (function render(time){
            runner.frameRequestId = _requestAnimationFrame(render);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var timing = engine.timing,
            correction = 1,
            delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(runner, 'beforeTick', event);

        if (runner.isFixed) {
            // fixed timestep
            delta = runner.delta;
        } else {
            // dynamic timestep based on wall clock between calls
            delta = (time - runner.timePrev) || runner.delta;
            runner.timePrev = time;

            // optimistically filter delta over a few frames, to improve stability
            runner.deltaHistory.push(delta);
            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
            delta = Math.min.apply(null, runner.deltaHistory);
            
            // limit delta
            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

            // correction for delta
            correction = delta / runner.delta;

            // update engine timing object
            runner.delta = delta;
        }

        // time correction for time scaling
        if (runner.timeScalePrev !== 0)
            correction *= timing.timeScale / runner.timeScalePrev;

        if (timing.timeScale === 0)
            correction = 0;

        runner.timeScalePrev = timing.timeScale;
        runner.correction = correction;

        // fps counter
        runner.frameCounter += 1;
        if (time - runner.counterTimestamp >= 1000) {
            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
            runner.counterTimestamp = time;
            runner.frameCounter = 0;
        }

        Events.trigger(runner, 'tick', event);

        // update
        Events.trigger(runner, 'beforeUpdate', event);
        Engine.update(engine, delta, correction);
        Events.trigger(runner, 'afterUpdate', event);

        Events.trigger(runner, 'afterTick', event);
    };

    /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        _cancelAnimationFrame(runner.frameRequestId);
    };

    /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */
    Runner.start = function(runner, engine) {
        Runner.run(runner, engine);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */

})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_340745__) {

/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/

var SAT = {};

module.exports = SAT;

var Collision = __nested_webpack_require_340745__(8);
var Common = __nested_webpack_require_340745__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB) {
        return Collision.collides(bodyA, bodyB);
    };

    deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');

})();


/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_341815__) {

/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = __nested_webpack_require_341815__(1);
var Common = __nested_webpack_require_341815__(0);

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_349276__) {

/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/

var World = {};

module.exports = World;

var Composite = __nested_webpack_require_349276__(5);
var Common = __nested_webpack_require_349276__(0);

(function() {

    /**
     * See above, aliases for back compatibility only
     */
    World.create = Composite.create;
    World.add = Composite.add;
    World.remove = Composite.remove;
    World.clear = Composite.clear;
    World.addComposite = Composite.addComposite;
    World.addBody = Composite.addBody;
    World.addConstraint = Composite.addConstraint;

})();


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



let ww = window.innerWidth
wh = window.innerHeight

function rotate(array, angle) {
    return array.map(function (p) {
        function d2r(a) { return a * Math.PI / 180; }
        return [
            Math.cos(d2r(angle)) * p[0] - Math.sin(d2r(angle)) * p[1],
            Math.sin(d2r(angle)) * p[0] - Math.cos(d2r(angle)) * p[1],
        ];
    });
}

function degrees_to_radians(degrees) {
    let pi = Math.PI;
    return degrees * (pi / 180);
}
function radians_to_degrees(radians) {
    let pi = Math.PI;
    return radians * (180 / pi);
}


function Block(el, options = {}) {

    // set element 
    this.el = el
    const start_angle = el.getAttribute("data-angle")
    // set options 
    const merged_options = {
        ...{
            friction: 0,
            restitution: 0.95,
            angle: start_angle ? degrees_to_radians(a) : 0,
            isStatic: false
        }, ...options
    };


    const bb = el.getBoundingClientRect()

    const centerX = bb.left + bb.width / 2;
    const centerY = bb.top + bb.height / 2;

    this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(centerX, centerY, bb.width, bb.height, merged_options);

    matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, this.body);

    this.setup = () => {
        this.el.rotate = `${angle}deg`
    }
    this.getPos = () => {
        return this.body
    }
    this.move = () => {

    }
}


function Circle(x, y, r) {
    const options = {
        friction: 0,
        restitution: 0.95
    };
    this.body = matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.circle(x, y, r, options);
    this.r = r;
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, this.body);

}


let circles = [];
let boundaries = [];
let blocks = [];


let engine = matter_js__WEBPACK_IMPORTED_MODULE_0__.Engine.create();
let world = engine.world

document.querySelectorAll("[data-matter]").forEach(value => {

    if (value.getAttribute("data-matter") == "rigid") {
        boundaries.push(new Block(value, { isStatic: true }));
    } else if (value.getAttribute("data-matter") == "block") {
        blocks.push(new Block(value));
    }
})


// create runner
let runner = matter_js__WEBPACK_IMPORTED_MODULE_0__.Runner.create();
// run the engine
matter_js__WEBPACK_IMPORTED_MODULE_0__.Runner.run(runner, engine);


// events
matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(runner, "afterTick", (e) => {
    blocks.forEach(block => {

        let left = block[0].body.position.x - (block[0].h / 2)
        let top = block[0].body.position.y - (block[0].w / 2)

        block[1].setAttribute("style", `left: ${left}!important; top: ${top}!important; rotate: ${radians_to_degrees(block[0].body.angle)}deg;`)
    })

    boundaries.forEach(block => {
        let top = block[0].body.position.x - (block[0].h / 2)
        let left = block[0].body.position.y - (block[0].w / 2)

        block[1].setAttribute("style", `left: ${left}!important; top: ${top}!important; rotate: ${radians_to_degrees(block[0].body.angle)}deg;`)
    })

})    

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLGlCQUFpQixTQUFTLHNCQUFzQixvQkFBb0Isb0JBQW9CLGtCQUFrQix3QkFBd0IsR0FBRyxTQUFTLHNCQUFzQixlQUFlLGlCQUFpQixtQkFBbUIsa0JBQWtCLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsaUJBQWlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsVUFBVSxzQkFBc0IsZUFBZSxpQkFBaUIsbUJBQW1CLGtCQUFrQix1QkFBdUIsR0FBRyxVQUFVLHNCQUFzQixlQUFlLGlCQUFpQixtQkFBbUIsa0JBQWtCLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsaUJBQWlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsT0FBTyxpRkFBaUYsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksK0JBQStCLGlCQUFpQixTQUFTLHNCQUFzQixvQkFBb0Isb0JBQW9CLGtCQUFrQix3QkFBd0IsR0FBRyxTQUFTLHNCQUFzQixlQUFlLGlCQUFpQixtQkFBbUIsa0JBQWtCLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsaUJBQWlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsVUFBVSxzQkFBc0IsZUFBZSxpQkFBaUIsbUJBQW1CLGtCQUFrQix1QkFBdUIsR0FBRyxVQUFVLHNCQUFzQixlQUFlLGlCQUFpQixtQkFBbUIsa0JBQWtCLHVCQUF1QixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsaUJBQWlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQ3ZtRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUt1QjtBQUM3QixDQUFDO0FBQ0QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSwrQkFBbUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSwrQkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCLGVBQWUsK0JBQW1CO0FBQ2xDLG1EQUFtRCwrQkFBK0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQjtBQUM3QjtBQUNBLGlFQUFpRSxpQkFBaUI7QUFDbEY7QUFDQSwwREFBMEQsYUFBYTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCLGdDQUFnQywrQkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQkFBbUI7QUFDOUIsa0RBQWtELGdDQUFnQztBQUNsRiwwRUFBMEUsK0JBQW1CLDRCQUE0QixvQkFBb0I7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQjtBQUM3QjtBQUNBLG9DQUFvQyw0QkFBNEI7QUFDaEUsMENBQTBDO0FBQzFDLFdBQVcsK0JBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQkFBbUIsa0NBQWtDO0FBQy9EO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0JBQW1CLENBQUMsK0JBQW1CO0FBQ3hELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFNBQVM7QUFDeEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsTUFBTTtBQUNyQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHNCQUFzQjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELE9BQU87QUFDekQ7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUJBQU07QUFDeEMseUJBQXlCLHFCQUFNO0FBQy9CO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0IsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGlDQUFtQjs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsY0FBYyxRQUFRO0FBQ3RCLGdCQUFn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QUFhO0FBQzdCO0FBQ0EsSUFBSSxvREFBYTs7QUFFakI7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYSxvREFBYTtBQUMxQjs7QUFFQTs7QUFFQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBLGFBQWEsb0RBQWE7QUFDMUI7QUFDQSxpREFBVTs7O0FBR1Y7QUFDQSxnREFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUEsZ0RBQWdELEtBQUssWUFBWSxPQUFPLElBQUksWUFBWSxVQUFVLHdDQUF3QyxJQUFJO0FBQzlJLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxLQUFLLFlBQVksT0FBTyxJQUFJLFlBQVksVUFBVSx3Q0FBd0MsSUFBSTtBQUM5SSxLQUFLOztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXR0ZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9tYXR0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hdHRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21hdHRlci8uL25vZGVfbW9kdWxlcy9tYXR0ZXItanMvYnVpbGQvbWF0dGVyLmpzIiwid2VicGFjazovL21hdHRlci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbWF0dGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hdHRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWF0dGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hdHRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXR0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXR0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXR0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF0dGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hdHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWF0dGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWF0dGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWF0dGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWF0dGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYXR0ZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjowXFxufVxcbi5mbG9vcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcbi5ibG9ja3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDJ2aDtcXG4gICAgbGVmdDogNTB2dztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuLmJsb2NrMXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDJ2aDtcXG4gICAgbGVmdDogMTB2dztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuLmJsb2NrMntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDJ2aDtcXG4gICAgbGVmdDogMjB2dztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuLmJsb2NrM3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDJ2aDtcXG4gICAgbGVmdDogMzB2dztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuLmJsb2NrNHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDJ2aDtcXG4gICAgbGVmdDogNzB2dztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOjBcXG59XFxuLmZsb29ye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNDAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuLmJsb2Nre1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMnZoO1xcbiAgICBsZWZ0OiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG4uYmxvY2sxe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMnZoO1xcbiAgICBsZWZ0OiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG4uYmxvY2sye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMnZoO1xcbiAgICBsZWZ0OiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG4uYmxvY2sze1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMnZoO1xcbiAgICBsZWZ0OiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG4uYmxvY2s0e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMnZoO1xcbiAgICBsZWZ0OiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohXG4gKiBtYXR0ZXItanMgMC4xOC4wIGJ5IEBsaWFicnVcbiAqIGh0dHA6Ly9icm0uaW8vbWF0dGVyLWpzL1xuICogTGljZW5zZSBNSVRcbiAqIFxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgTGlhbSBCcnVtbWl0dCBhbmQgY29udHJpYnV0b3JzLlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTWF0dGVyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1hdHRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNYXR0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbW1vbmAgbW9kdWxlIGNvbnRhaW5zIHV0aWxpdHkgZnVuY3Rpb25zIHRoYXQgYXJlIGNvbW1vbiB0byBhbGwgbW9kdWxlcy5cbipcbiogQGNsYXNzIENvbW1vblxuKi9cblxudmFyIENvbW1vbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbjtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQ29tbW9uLl9uZXh0SWQgPSAwO1xuICAgIENvbW1vbi5fc2VlZCA9IDA7XG4gICAgQ29tbW9uLl9ub3dTdGFydFRpbWUgPSArKG5ldyBEYXRlKCkpO1xuICAgIENvbW1vbi5fd2FybmVkT25jZSA9IHt9O1xuICAgIENvbW1vbi5fZGVjb21wID0gbnVsbDtcbiAgICBcbiAgICAvKipcbiAgICAgKiBFeHRlbmRzIHRoZSBvYmplY3QgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IHVzaW5nIHRoZSBvYmplY3QgaW4gdGhlIHNlY29uZCBhcmd1bWVudC5cbiAgICAgKiBAbWV0aG9kIGV4dGVuZFxuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBcbiAgICAgKiBAcmV0dXJuIHt9IG9iaiBleHRlbmRlZFxuICAgICAqL1xuICAgIENvbW1vbi5leHRlbmQgPSBmdW5jdGlvbihvYmosIGRlZXApIHtcbiAgICAgICAgdmFyIGFyZ3NTdGFydCxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICBkZWVwQ2xvbmU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZWVwID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFyZ3NTdGFydCA9IDI7XG4gICAgICAgICAgICBkZWVwQ2xvbmUgPSBkZWVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJnc1N0YXJ0ID0gMTtcbiAgICAgICAgICAgIGRlZXBDbG9uZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gYXJnc1N0YXJ0OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXBDbG9uZSAmJiBzb3VyY2VbcHJvcF0gJiYgc291cmNlW3Byb3BdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqW3Byb3BdIHx8IG9ialtwcm9wXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gb2JqW3Byb3BdIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbi5leHRlbmQob2JqW3Byb3BdLCBkZWVwQ2xvbmUsIHNvdXJjZVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjbG9uZSBvZiB0aGUgb2JqZWN0LCBpZiBkZWVwIGlzIHRydWUgcmVmZXJlbmNlcyB3aWxsIGFsc28gYmUgY2xvbmVkLlxuICAgICAqIEBtZXRob2QgY2xvbmVcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHBhcmFtIHtib29sfSBkZWVwXG4gICAgICogQHJldHVybiB7fSBvYmogY2xvbmVkXG4gICAgICovXG4gICAgQ29tbW9uLmNsb25lID0gZnVuY3Rpb24ob2JqLCBkZWVwKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHt9LCBkZWVwLCBvYmopO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIGtleXMgZm9yIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCBrZXlzXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfSBrZXlzXG4gICAgICovXG4gICAgQ29tbW9uLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgICAgLy8gYXZvaWQgaGFzT3duUHJvcGVydHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2QgdmFsdWVzXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEByZXR1cm4ge2FycmF5fSBBcnJheSBvZiB0aGUgb2JqZWN0cyBwcm9wZXJ0eSB2YWx1ZXNcbiAgICAgKi9cbiAgICBDb21tb24udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChPYmplY3Qua2V5cykge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gob2JqW2tleXNbaV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGF2b2lkIGhhc093blByb3BlcnR5IGZvciBwZXJmb3JtYW5jZVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICAgICAgdmFsdWVzLnB1c2gob2JqW2tleV0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdmFsdWUgZnJvbSBgYmFzZWAgcmVsYXRpdmUgdG8gdGhlIGBwYXRoYCBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKiBAcGFyYW0ge30gb2JqIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYCwgZS5nLiAnRm9vLkJhci5iYXonXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtiZWdpbl0gUGF0aCBzbGljZSBiZWdpblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kXSBQYXRoIHNsaWNlIGVuZFxuICAgICAqIEByZXR1cm4ge30gVGhlIG9iamVjdCBhdCB0aGUgZ2l2ZW4gcGF0aFxuICAgICAqL1xuICAgIENvbW1vbi5nZXQgPSBmdW5jdGlvbihvYmosIHBhdGgsIGJlZ2luLCBlbmQpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKS5zbGljZShiZWdpbiwgZW5kKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSB2YWx1ZSBvbiBgYmFzZWAgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIGBwYXRoYCBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge30gb2JqIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYCwgZS5nLiAnRm9vLkJhci5iYXonXG4gICAgICogQHBhcmFtIHt9IHZhbCBUaGUgdmFsdWUgdG8gc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtiZWdpbl0gUGF0aCBzbGljZSBiZWdpblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kXSBQYXRoIHNsaWNlIGVuZFxuICAgICAqIEByZXR1cm4ge30gUGFzcyB0aHJvdWdoIGB2YWxgIGZvciBjaGFpbmluZ1xuICAgICAqL1xuICAgIENvbW1vbi5zZXQgPSBmdW5jdGlvbihvYmosIHBhdGgsIHZhbCwgYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJykuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgICAgIENvbW1vbi5nZXQob2JqLCBwYXRoLCAwLCAtMSlbcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dID0gdmFsO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaHVmZmxlcyB0aGUgZ2l2ZW4gYXJyYXkgaW4tcGxhY2UuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIHNodWZmbGVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICAgICAqIEByZXR1cm4ge2FycmF5fSBhcnJheSBzaHVmZmxlZCByYW5kb21seVxuICAgICAqL1xuICAgIENvbW1vbi5zaHVmZmxlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihDb21tb24ucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmFuZG9tbHkgY2hvb3NlcyBhIHZhbHVlIGZyb20gYSBsaXN0IHdpdGggZXF1YWwgcHJvYmFiaWxpdHkuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIGNob29zZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNob2ljZXNcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEEgcmFuZG9tIGNob2ljZSBvYmplY3QgZnJvbSB0aGUgYXJyYXlcbiAgICAgKi9cbiAgICBDb21tb24uY2hvb3NlID0gZnVuY3Rpb24oY2hvaWNlcykge1xuICAgICAgICByZXR1cm4gY2hvaWNlc1tNYXRoLmZsb29yKENvbW1vbi5yYW5kb20oKSAqIGNob2ljZXMubGVuZ3RoKV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgSFRNTEVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKiBAbWV0aG9kIGlzRWxlbWVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MRWxlbWVudCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgJiYgb2JqLm5vZGVOYW1lKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gYXJyYXkuXG4gICAgICogQG1ldGhvZCBpc0FycmF5XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBhcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICAgICAqIEBtZXRob2QgaXNGdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBwbGFpbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCBpc1BsYWluT2JqZWN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHBsYWluIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIGlzU3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzU3RyaW5nID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gdmFsdWUgY2xhbXBlZCBiZXR3ZWVuIGEgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZS5cbiAgICAgKiBAbWV0aG9kIGNsYW1wXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBjbGFtcGVkIGJldHdlZW4gbWluIGFuZCBtYXggaW5jbHVzaXZlXG4gICAgICovXG4gICAgQ29tbW9uLmNsYW1wID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IG1pbilcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIGlmICh2YWx1ZSA+IG1heClcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGdpdmVuIHZhbHVlLlxuICAgICAqIEBtZXRob2Qgc2lnblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgaWYgbmVnYXRpdmUsICsxIGlmIDAgb3IgcG9zaXRpdmVcbiAgICAgKi9cbiAgICBDb21tb24uc2lnbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDAgPyAtMSA6IDE7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBzaW5jZSB0aGUgdGltZSBvcmlnaW4gKGUuZy4gZnJvbSBwYWdlIGxvYWQpLlxuICAgICAqIFRoZSByZXN1bHQgaXMgaW4gbWlsbGlzZWNvbmRzIGFuZCB3aWxsIHVzZSBoaWdoLXJlc29sdXRpb24gdGltaW5nIGlmIGF2YWlsYWJsZS5cbiAgICAgKiBAbWV0aG9kIG5vd1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGN1cnJlbnQgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kc1xuICAgICAqL1xuICAgIENvbW1vbi5ub3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChEYXRlLm5vdykge1xuICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkpIC0gQ29tbW9uLl9ub3dTdGFydFRpbWU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmFuZG9tIHZhbHVlIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBhIG1heGltdW0gdmFsdWUgaW5jbHVzaXZlLlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCByYW5kb21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXggaW5jbHVzaXZlXG4gICAgICovXG4gICAgQ29tbW9uLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9ICh0eXBlb2YgbWluICE9PSBcInVuZGVmaW5lZFwiKSA/IG1pbiA6IDA7XG4gICAgICAgIG1heCA9ICh0eXBlb2YgbWF4ICE9PSBcInVuZGVmaW5lZFwiKSA/IG1heCA6IDE7XG4gICAgICAgIHJldHVybiBtaW4gKyBfc2VlZGVkUmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbiAgICB9O1xuXG4gICAgdmFyIF9zZWVkZWRSYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3JcbiAgICAgICAgQ29tbW9uLl9zZWVkID0gKENvbW1vbi5fc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICAgIHJldHVybiBDb21tb24uX3NlZWQgLyAyMzMyODA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgQ1NTIGhleCBjb2xvdXIgc3RyaW5nIGludG8gYW4gaW50ZWdlci5cbiAgICAgKiBAbWV0aG9kIGNvbG9yVG9OdW1iZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3JTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBDU1MgaGV4IHN0cmluZ1xuICAgICAqL1xuICAgIENvbW1vbi5jb2xvclRvTnVtYmVyID0gZnVuY3Rpb24oY29sb3JTdHJpbmcpIHtcbiAgICAgICAgY29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5yZXBsYWNlKCcjJywnJyk7XG5cbiAgICAgICAgaWYgKGNvbG9yU3RyaW5nLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICBjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLmNoYXJBdCgwKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb2xvclN0cmluZy5jaGFyQXQoMSkgKyBjb2xvclN0cmluZy5jaGFyQXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29sb3JTdHJpbmcuY2hhckF0KDIpICsgY29sb3JTdHJpbmcuY2hhckF0KDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zb2xlIGxvZ2dpbmcgbGV2ZWwgdG8gdXNlLCB3aGVyZSBlYWNoIGxldmVsIGluY2x1ZGVzIGFsbCBsZXZlbHMgYWJvdmUgYW5kIGV4Y2x1ZGVzIHRoZSBsZXZlbHMgYmVsb3cuXG4gICAgICogVGhlIGRlZmF1bHQgbGV2ZWwgaXMgJ2RlYnVnJyB3aGljaCBzaG93cyBhbGwgY29uc29sZSBtZXNzYWdlcy4gIFxuICAgICAqXG4gICAgICogUG9zc2libGUgbGV2ZWwgdmFsdWVzIGFyZTpcbiAgICAgKiAtIDAgPSBOb25lXG4gICAgICogLSAxID0gRGVidWdcbiAgICAgKiAtIDIgPSBJbmZvXG4gICAgICogLSAzID0gV2FyblxuICAgICAqIC0gNCA9IEVycm9yXG4gICAgICogQHByb3BlcnR5IENvbW1vbi5sb2dMZXZlbFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIENvbW1vbi5sb2dMZXZlbCA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLmxvZ2AgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2QgbG9nXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi5sb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLmluZm9gIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIGluZm9cbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLmluZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS53YXJuYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCB3YXJuXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi53YXJuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVzZXMgYENvbW1vbi53YXJuYCB0byBsb2cgdGhlIGdpdmVuIG1lc3NhZ2Ugb25lIHRpbWUgb25seS5cbiAgICAgKiBAbWV0aG9kIHdhcm5PbmNlXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi53YXJuT25jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignICcpO1xuXG4gICAgICAgIGlmICghQ29tbW9uLl93YXJuZWRPbmNlW21lc3NhZ2VdKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIENvbW1vbi5fd2FybmVkT25jZVttZXNzYWdlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBkZXByZWNhdGVkIGNvbnNvbGUgd2FybmluZyB3aGVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGNhbGxlZC5cbiAgICAgKiBUaGUgdGFyZ2V0IGZ1bmN0aW9uIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhIG5ldyBmdW5jdGlvbiB0aGF0IGZpcnN0IHNob3dzIHRoZSB3YXJuaW5nXG4gICAgICogYW5kIHRoZW4gY2FsbHMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICAgICAqIEBtZXRob2QgZGVwcmVjYXRlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBvciBtb2R1bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgcHJvcGVydHkgbmFtZSBvZiB0aGUgZnVuY3Rpb24gb24gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdhcm5pbmcgVGhlIG9uZS10aW1lIG1lc3NhZ2UgdG8gc2hvdyBpZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXG4gICAgICovXG4gICAgQ29tbW9uLmRlcHJlY2F0ZWQgPSBmdW5jdGlvbihvYmosIHByb3AsIHdhcm5pbmcpIHtcbiAgICAgICAgb2JqW3Byb3BdID0gQ29tbW9uLmNoYWluKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm5PbmNlKCfwn5SFIGRlcHJlY2F0ZWQg8J+UhScsIHdhcm5pbmcpO1xuICAgICAgICB9LCBvYmpbcHJvcF0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBzZXF1ZW50aWFsIElELlxuICAgICAqIEBtZXRob2QgbmV4dElkXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgc2VxdWVudGlhbCBJRFxuICAgICAqL1xuICAgIENvbW1vbi5uZXh0SWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5fbmV4dElkKys7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgY3Jvc3MgYnJvd3NlciBjb21wYXRpYmxlIGluZGV4T2YgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCBpbmRleE9mXG4gICAgICogQHBhcmFtIHthcnJheX0gaGF5c3RhY2tcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmVlZGxlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgbmVlZGxlIGluIGhheXN0YWNrLCBvdGhlcndpc2UgLTEuXG4gICAgICovXG4gICAgQ29tbW9uLmluZGV4T2YgPSBmdW5jdGlvbihoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgICAgIGlmIChoYXlzdGFjay5pbmRleE9mKVxuICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhheXN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT09IG5lZWRsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBjcm9zcyBicm93c2VyIGNvbXBhdGlibGUgYXJyYXkgbWFwIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBtZXRob2QgbWFwXG4gICAgICogQHBhcmFtIHthcnJheX0gbGlzdFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gVmFsdWVzIGZyb20gbGlzdCB0cmFuc2Zvcm1lZCBieSBmdW5jLlxuICAgICAqL1xuICAgIENvbW1vbi5tYXAgPSBmdW5jdGlvbihsaXN0LCBmdW5jKSB7XG4gICAgICAgIGlmIChsaXN0Lm1hcCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QubWFwKGZ1bmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcHBlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgbWFwcGVkLnB1c2goZnVuYyhsaXN0W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIGRpcmVjdGVkIGdyYXBoIGFuZCByZXR1cm5zIHRoZSBwYXJ0aWFsbHkgb3JkZXJlZCBzZXQgb2YgdmVydGljZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICogQ2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFyZSBhbGxvd2VkLlxuICAgICAqIEBtZXRob2QgdG9wb2xvZ2ljYWxTb3J0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdyYXBoXG4gICAgICogQHJldHVybiB7YXJyYXl9IFBhcnRpYWxseSBvcmRlcmVkIHNldCBvZiB2ZXJ0aWNlcyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgKi9cbiAgICBDb21tb24udG9wb2xvZ2ljYWxTb3J0ID0gZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvamF2YXNjcmlwdC1hbGdvcml0aG1zXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgTWlua28gR2VjaGV2IChNSVQgbGljZW5zZSlcbiAgICAgICAgLy8gTW9kaWZpY2F0aW9uczogdGlkeSBmb3JtYXR0aW5nIGFuZCBuYW1pbmdcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgdmlzaXRlZCA9IFtdLFxuICAgICAgICAgICAgdGVtcCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIG5vZGUgaW4gZ3JhcGgpIHtcbiAgICAgICAgICAgIGlmICghdmlzaXRlZFtub2RlXSAmJiAhdGVtcFtub2RlXSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0KG5vZGUsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQgPSBmdW5jdGlvbihub2RlLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KSB7XG4gICAgICAgIHZhciBuZWlnaGJvcnMgPSBncmFwaFtub2RlXSB8fCBbXTtcbiAgICAgICAgdGVtcFtub2RlXSA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbbmVpZ2hib3JdKSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF2aXNpdGVkW25laWdoYm9yXSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0KG5laWdoYm9yLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBbbm9kZV0gPSBmYWxzZTtcbiAgICAgICAgdmlzaXRlZFtub2RlXSA9IHRydWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIF9uXyBmdW5jdGlvbnMgYXMgYXJndW1lbnRzIGFuZCByZXR1cm5zIGEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlbSBpbiBvcmRlci5cbiAgICAgKiBUaGUgYXJndW1lbnRzIGFwcGxpZWQgd2hlbiBjYWxsaW5nIHRoZSBuZXcgZnVuY3Rpb24gd2lsbCBhbHNvIGJlIGFwcGxpZWQgdG8gZXZlcnkgZnVuY3Rpb24gcGFzc2VkLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgdGhpc2AgcmVmZXJzIHRvIHRoZSBsYXN0IHZhbHVlIHJldHVybmVkIGluIHRoZSBjaGFpbiB0aGF0IHdhcyBub3QgYHVuZGVmaW5lZGAuXG4gICAgICogVGhlcmVmb3JlIGlmIGEgcGFzc2VkIGZ1bmN0aW9uIGRvZXMgbm90IHJldHVybiBhIHZhbHVlLCB0aGUgcHJldmlvdXNseSByZXR1cm5lZCB2YWx1ZSBpcyBtYWludGFpbmVkLlxuICAgICAqIEFmdGVyIGFsbCBwYXNzZWQgZnVuY3Rpb25zIGhhdmUgYmVlbiBjYWxsZWQgdGhlIG5ldyBmdW5jdGlvbiByZXR1cm5zIHRoZSBsYXN0IHJldHVybmVkIHZhbHVlIChpZiBhbnkpLlxuICAgICAqIElmIGFueSBvZiB0aGUgcGFzc2VkIGZ1bmN0aW9ucyBhcmUgYSBjaGFpbiwgdGhlbiB0aGUgY2hhaW4gd2lsbCBiZSBmbGF0dGVuZWQuXG4gICAgICogQG1ldGhvZCBjaGFpblxuICAgICAqIEBwYXJhbSAuLi5mdW5jcyB7ZnVuY3Rpb259IFRoZSBmdW5jdGlvbnMgdG8gY2hhaW4uXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlIHBhc3NlZCBmdW5jdGlvbnMgaW4gb3JkZXIuXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmdW5jcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKGZ1bmMuX2NoYWluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBmbGF0dGVuIGFscmVhZHkgY2hhaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICBmdW5jcy5wdXNoLmFwcGx5KGZ1bmNzLCBmdW5jLl9jaGFpbmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVuY3MucHVzaChmdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS9kZXZ0b29scy1kb2NzL2lzc3Vlcy81MyNpc3N1ZWNvbW1lbnQtNTE5NDEzNThcbiAgICAgICAgICAgIHZhciBsYXN0UmVzdWx0LFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBmdW5jc1tpXS5hcHBseShsYXN0UmVzdWx0LCBhcmdzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hhaW4uX2NoYWluZWQgPSBmdW5jcztcblxuICAgICAgICByZXR1cm4gY2hhaW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBiZWZvcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYGJhc2VgLlxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxuICAgICAqIEBtZXRob2QgY2hhaW5QYXRoQmVmb3JlXG4gICAgICogQHBhcmFtIHt9IGJhc2UgVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYmVmb3JlIHRoZSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpblBhdGhCZWZvcmUgPSBmdW5jdGlvbihiYXNlLCBwYXRoLCBmdW5jKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uc2V0KGJhc2UsIHBhdGgsIENvbW1vbi5jaGFpbihcbiAgICAgICAgICAgIGZ1bmMsXG4gICAgICAgICAgICBDb21tb24uZ2V0KGJhc2UsIHBhdGgpXG4gICAgICAgICkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYWZ0ZXIgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYGJhc2VgLlxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxuICAgICAqIEBtZXRob2QgY2hhaW5QYXRoQWZ0ZXJcbiAgICAgKiBAcGFyYW0ge30gYmFzZSBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBhZnRlciB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW5QYXRoQWZ0ZXIgPSBmdW5jdGlvbihiYXNlLCBwYXRoLCBmdW5jKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uc2V0KGJhc2UsIHBhdGgsIENvbW1vbi5jaGFpbihcbiAgICAgICAgICAgIENvbW1vbi5nZXQoYmFzZSwgcGF0aCksXG4gICAgICAgICAgICBmdW5jXG4gICAgICAgICkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlIHRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUgdG8gZW5hYmxlXG4gICAgICogY29uY2F2ZSB2ZXJ0ZXggZGVjb21wb3NpdGlvbiBzdXBwb3J0IHdoZW4gdXNpbmcgYEJvZGllcy5mcm9tVmVydGljZXNgIGUuZy4gYENvbW1vbi5zZXREZWNvbXAocmVxdWlyZSgncG9seS1kZWNvbXAnKSlgLlxuICAgICAqIEBtZXRob2Qgc2V0RGVjb21wXG4gICAgICogQHBhcmFtIHt9IGRlY29tcCBUaGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlLlxuICAgICAqL1xuICAgIENvbW1vbi5zZXREZWNvbXAgPSBmdW5jdGlvbihkZWNvbXApIHtcbiAgICAgICAgQ29tbW9uLl9kZWNvbXAgPSBkZWNvbXA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZSBwcm92aWRlZCB0aHJvdWdoIGBDb21tb24uc2V0RGVjb21wYCxcbiAgICAgKiBvdGhlcndpc2UgcmV0dXJucyB0aGUgZ2xvYmFsIGBkZWNvbXBgIGlmIHNldC5cbiAgICAgKiBAbWV0aG9kIGdldERlY29tcFxuICAgICAqIEByZXR1cm4ge30gVGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZSBpZiBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBDb21tb24uZ2V0RGVjb21wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGdldCB1c2VyIHByb3ZpZGVkIGRlY29tcCBpZiBzZXRcbiAgICAgICAgdmFyIGRlY29tcCA9IENvbW1vbi5fZGVjb21wO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZnJvbSB3aW5kb3cgZ2xvYmFsXG4gICAgICAgICAgICBpZiAoIWRlY29tcCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlY29tcCA9IHdpbmRvdy5kZWNvbXA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZnJvbSBub2RlIGdsb2JhbFxuICAgICAgICAgICAgaWYgKCFkZWNvbXAgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWNvbXAgPSBnbG9iYWwuZGVjb21wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBkZWNvbXAgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgZGVjb21wID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNvbXA7XG4gICAgfTtcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Cb3VuZHNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGF4aXMtYWxpZ25lZCBib3VuZGluZyBib3hlcyAoQUFCQikuXG4qXG4qIEBjbGFzcyBCb3VuZHNcbiovXG5cbnZhciBCb3VuZHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYXhpcy1hbGlnbmVkIGJvdW5kaW5nIGJveCAoQUFCQikgZm9yIHRoZSBnaXZlbiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7Ym91bmRzfSBBIG5ldyBib3VuZHMgb2JqZWN0XG4gICAgICovXG4gICAgQm91bmRzLmNyZWF0ZSA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBib3VuZHMgPSB7IFxuICAgICAgICAgICAgbWluOiB7IHg6IDAsIHk6IDAgfSwgXG4gICAgICAgICAgICBtYXg6IHsgeDogMCwgeTogMCB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZlcnRpY2VzKVxuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShib3VuZHMsIHZlcnRpY2VzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYm91bmRzIHVzaW5nIHRoZSBnaXZlbiB2ZXJ0aWNlcyBhbmQgZXh0ZW5kcyB0aGUgYm91bmRzIGdpdmVuIGEgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb3VuZHMudXBkYXRlID0gZnVuY3Rpb24oYm91bmRzLCB2ZXJ0aWNlcywgdmVsb2NpdHkpIHtcbiAgICAgICAgYm91bmRzLm1pbi54ID0gSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5tYXgueCA9IC1JbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1pbi55ID0gSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5tYXgueSA9IC1JbmZpbml0eTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBpZiAodmVydGV4LnggPiBib3VuZHMubWF4LngpIGJvdW5kcy5tYXgueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgaWYgKHZlcnRleC54IDwgYm91bmRzLm1pbi54KSBib3VuZHMubWluLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueSA+IGJvdW5kcy5tYXgueSkgYm91bmRzLm1heC55ID0gdmVydGV4Lnk7XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPCBib3VuZHMubWluLnkpIGJvdW5kcy5taW4ueSA9IHZlcnRleC55O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodmVsb2NpdHkpIHtcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS54ID4gMCkge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueCArPSB2ZWxvY2l0eS54O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWluLnggKz0gdmVsb2NpdHkueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1heC55ICs9IHZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSArPSB2ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYm91bmRzIGNvbnRhaW5zIHRoZSBnaXZlbiBwb2ludC5cbiAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGJvdW5kcyBjb250YWluIHRoZSBwb2ludCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQm91bmRzLmNvbnRhaW5zID0gZnVuY3Rpb24oYm91bmRzLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSBib3VuZHMubWluLnggJiYgcG9pbnQueCA8PSBib3VuZHMubWF4LnggXG4gICAgICAgICAgICAgICAmJiBwb2ludC55ID49IGJvdW5kcy5taW4ueSAmJiBwb2ludC55IDw9IGJvdW5kcy5tYXgueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gYm91bmRzIGludGVyc2VjdC5cbiAgICAgKiBAbWV0aG9kIG92ZXJsYXBzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc0FcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzQlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGJvdW5kcyBvdmVybGFwLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBCb3VuZHMub3ZlcmxhcHMgPSBmdW5jdGlvbihib3VuZHNBLCBib3VuZHNCKSB7XG4gICAgICAgIHJldHVybiAoYm91bmRzQS5taW4ueCA8PSBib3VuZHNCLm1heC54ICYmIGJvdW5kc0EubWF4LnggPj0gYm91bmRzQi5taW4ueFxuICAgICAgICAgICAgICAgICYmIGJvdW5kc0EubWF4LnkgPj0gYm91bmRzQi5taW4ueSAmJiBib3VuZHNBLm1pbi55IDw9IGJvdW5kc0IubWF4LnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBib3VuZHMgYnkgdGhlIGdpdmVuIHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICovXG4gICAgQm91bmRzLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGJvdW5kcywgdmVjdG9yKSB7XG4gICAgICAgIGJvdW5kcy5taW4ueCArPSB2ZWN0b3IueDtcbiAgICAgICAgYm91bmRzLm1heC54ICs9IHZlY3Rvci54O1xuICAgICAgICBib3VuZHMubWluLnkgKz0gdmVjdG9yLnk7XG4gICAgICAgIGJvdW5kcy5tYXgueSArPSB2ZWN0b3IueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hpZnRzIHRoZSBib3VuZHMgdG8gdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2Qgc2hpZnRcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICovXG4gICAgQm91bmRzLnNoaWZ0ID0gZnVuY3Rpb24oYm91bmRzLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgZGVsdGFYID0gYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgZGVsdGFZID0gYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55O1xuICAgICAgICAgICAgXG4gICAgICAgIGJvdW5kcy5taW4ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIGJvdW5kcy5tYXgueCA9IHBvc2l0aW9uLnggKyBkZWx0YVg7XG4gICAgICAgIGJvdW5kcy5taW4ueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIGJvdW5kcy5tYXgueSA9IHBvc2l0aW9uLnkgKyBkZWx0YVk7XG4gICAgfTtcbiAgICBcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5WZWN0b3JgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHZlY3RvcnMuXG4qIFZlY3RvcnMgYXJlIHRoZSBiYXNpcyBvZiBhbGwgdGhlIGdlb21ldHJ5IHJlbGF0ZWQgb3BlcmF0aW9ucyBpbiB0aGUgZW5naW5lLlxuKiBBIGBNYXR0ZXIuVmVjdG9yYCBvYmplY3QgaXMgb2YgdGhlIGZvcm0gYHsgeDogMCwgeTogMCB9YC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFZlY3RvclxuKi9cblxuLy8gVE9ETzogY29uc2lkZXIgcGFyYW1zIGZvciByZXVzaW5nIHZlY3RvciBvYmplY3RzXG5cbnZhciBWZWN0b3IgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgdmVjdG9yLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogeCB8fCAwLCB5OiB5IHx8IDAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyB2ZWN0b3Igd2l0aCBgeGAgYW5kIGB5YCBjb3BpZWQgZnJvbSB0aGUgZ2l2ZW4gYHZlY3RvcmAuXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IGNsb25lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IuY2xvbmUgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLngsIHk6IHZlY3Rvci55IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiBhIHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIG1hZ25pdHVkZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5tYWduaXR1ZGUgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgYSB2ZWN0b3IgKHRoZXJlZm9yZSBzYXZpbmcgYSBgc3FydGAgb3BlcmF0aW9uKS5cbiAgICAgKiBAbWV0aG9kIG1hZ25pdHVkZVNxdWFyZWRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgc3F1YXJlZCBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZlY3RvciBhYm91dCAoMCwgMCkgYnkgc3BlY2lmaWVkIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIHZlY3RvciByb3RhdGVkIGFib3V0ICgwLCAwKVxuICAgICAqL1xuICAgIFZlY3Rvci5yb3RhdGUgPSBmdW5jdGlvbih2ZWN0b3IsIGFuZ2xlLCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSwgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciB4ID0gdmVjdG9yLnggKiBjb3MgLSB2ZWN0b3IueSAqIHNpbjtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3IueCAqIHNpbiArIHZlY3Rvci55ICogY29zO1xuICAgICAgICBvdXRwdXQueCA9IHg7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZlY3RvciBhYm91dCBhIHNwZWNpZmllZCBwb2ludCBieSBzcGVjaWZpZWQgYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVBYm91dFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciByb3RhdGVkIGFib3V0IHRoZSBwb2ludFxuICAgICAqL1xuICAgIFZlY3Rvci5yb3RhdGVBYm91dCA9IGZ1bmN0aW9uKHZlY3RvciwgYW5nbGUsIHBvaW50LCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSwgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciB4ID0gcG9pbnQueCArICgodmVjdG9yLnggLSBwb2ludC54KSAqIGNvcyAtICh2ZWN0b3IueSAtIHBvaW50LnkpICogc2luKTtcbiAgICAgICAgb3V0cHV0LnkgPSBwb2ludC55ICsgKCh2ZWN0b3IueCAtIHBvaW50LngpICogc2luICsgKHZlY3Rvci55IC0gcG9pbnQueSkgKiBjb3MpO1xuICAgICAgICBvdXRwdXQueCA9IHg7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGlzZXMgYSB2ZWN0b3IgKHN1Y2ggdGhhdCBpdHMgbWFnbml0dWRlIGlzIGAxYCkuXG4gICAgICogQG1ldGhvZCBub3JtYWxpc2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igbm9ybWFsaXNlZFxuICAgICAqL1xuICAgIFZlY3Rvci5ub3JtYWxpc2UgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IFZlY3Rvci5tYWduaXR1ZGUodmVjdG9yKTtcbiAgICAgICAgaWYgKG1hZ25pdHVkZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggLyBtYWduaXR1ZGUsIHk6IHZlY3Rvci55IC8gbWFnbml0dWRlIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRvdC1wcm9kdWN0IG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgZG90XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRvdCBwcm9kdWN0IG9mIHRoZSB0d28gdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5kb3QgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQS54ICogdmVjdG9yQi54KSArICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgY3Jvc3NcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGUgdHdvIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuY3Jvc3MgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQS54ICogdmVjdG9yQi55KSAtICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHRocmVlIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBjcm9zczNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoZSB0aHJlZSB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmNyb3NzMyA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIHZlY3RvckMpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JCLnggLSB2ZWN0b3JBLngpICogKHZlY3RvckMueSAtIHZlY3RvckEueSkgLSAodmVjdG9yQi55IC0gdmVjdG9yQS55KSAqICh2ZWN0b3JDLnggLSB2ZWN0b3JBLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGFkZFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBvZiB2ZWN0b3JBIGFuZCB2ZWN0b3JCIGFkZGVkXG4gICAgICovXG4gICAgVmVjdG9yLmFkZCA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIG91dHB1dCkge1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIG91dHB1dC54ID0gdmVjdG9yQS54ICsgdmVjdG9yQi54O1xuICAgICAgICBvdXRwdXQueSA9IHZlY3RvckEueSArIHZlY3RvckIueTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIHN1YlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBvZiB2ZWN0b3JBIGFuZCB2ZWN0b3JCIHN1YnRyYWN0ZWRcbiAgICAgKi9cbiAgICBWZWN0b3Iuc3ViID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgb3V0cHV0KSB7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgb3V0cHV0LnggPSB2ZWN0b3JBLnggLSB2ZWN0b3JCLng7XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yQS55IC0gdmVjdG9yQi55O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGFuZCBhIHNjYWxhci5cbiAgICAgKiBAbWV0aG9kIG11bHRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG11bHRpcGxpZWQgYnkgc2NhbGFyXG4gICAgICovXG4gICAgVmVjdG9yLm11bHQgPSBmdW5jdGlvbih2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAqIHNjYWxhciwgeTogdmVjdG9yLnkgKiBzY2FsYXIgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBhbmQgYSBzY2FsYXIuXG4gICAgICogQG1ldGhvZCBkaXZcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIGRpdmlkZWQgYnkgc2NhbGFyXG4gICAgICovXG4gICAgVmVjdG9yLmRpdiA9IGZ1bmN0aW9uKHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54IC8gc2NhbGFyLCB5OiB2ZWN0b3IueSAvIHNjYWxhciB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZXJwZW5kaWN1bGFyIHZlY3Rvci4gU2V0IGBuZWdhdGVgIHRvIHRydWUgZm9yIHRoZSBwZXJwZW5kaWN1bGFyIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgICogQG1ldGhvZCBwZXJwXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW25lZ2F0ZT1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5wZXJwID0gZnVuY3Rpb24odmVjdG9yLCBuZWdhdGUpIHtcbiAgICAgICAgbmVnYXRlID0gbmVnYXRlID09PSB0cnVlID8gLTEgOiAxO1xuICAgICAgICByZXR1cm4geyB4OiBuZWdhdGUgKiAtdmVjdG9yLnksIHk6IG5lZ2F0ZSAqIHZlY3Rvci54IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYm90aCBjb21wb25lbnRzIG9mIGEgdmVjdG9yIHN1Y2ggdGhhdCBpdCBwb2ludHMgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5lZ1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBuZWdhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5uZWcgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogLXZlY3Rvci54LCB5OiAtdmVjdG9yLnkgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5nbGUgYmV0d2VlbiB0aGUgdmVjdG9yIGB2ZWN0b3JCIC0gdmVjdG9yQWAgYW5kIHRoZSB4LWF4aXMgaW4gcmFkaWFucy5cbiAgICAgKiBAbWV0aG9kIGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAgICAgKi9cbiAgICBWZWN0b3IuYW5nbGUgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHZlY3RvckIueSAtIHZlY3RvckEueSwgdmVjdG9yQi54IC0gdmVjdG9yQS54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IHZlY3RvciBwb29sIChub3QgdGhyZWFkLXNhZmUpLlxuICAgICAqIEBwcm9wZXJ0eSBfdGVtcFxuICAgICAqIEB0eXBlIHt2ZWN0b3JbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIFZlY3Rvci5fdGVtcCA9IFtcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKCksIFxuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKSwgXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpXG4gICAgXTtcblxufSkoKTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5WZXJ0aWNlc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgc2V0cyBvZiB2ZXJ0aWNlcy5cbiogQSBzZXQgb2YgdmVydGljZXMgaXMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHdpdGggYWRkaXRpb25hbCBpbmRleGluZyBwcm9wZXJ0aWVzIGluc2VydGVkIGJ5IGBWZXJ0aWNlcy5jcmVhdGVgLlxuKiBBIGBNYXR0ZXIuQm9keWAgbWFpbnRhaW5zIGEgc2V0IG9mIHZlcnRpY2VzIHRvIHJlcHJlc2VudCB0aGUgc2hhcGUgb2YgdGhlIG9iamVjdCAoaXRzIGNvbnZleCBodWxsKS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFZlcnRpY2VzXG4qL1xuXG52YXIgVmVydGljZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNlcztcblxudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXQgb2YgYE1hdHRlci5Cb2R5YCBjb21wYXRpYmxlIHZlcnRpY2VzLlxuICAgICAqIFRoZSBgcG9pbnRzYCBhcmd1bWVudCBhY2NlcHRzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCBwb2ludHMgb3JpZW50YXRlZCBhcm91bmQgdGhlIG9yaWdpbiBgKDAsIDApYCwgZm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dXG4gICAgICpcbiAgICAgKiBUaGUgYFZlcnRpY2VzLmNyZWF0ZWAgbWV0aG9kIHJldHVybnMgYSBuZXcgYXJyYXkgb2YgdmVydGljZXMsIHdoaWNoIGFyZSBzaW1pbGFyIHRvIE1hdHRlci5WZWN0b3Igb2JqZWN0cyxcbiAgICAgKiBidXQgd2l0aCBzb21lIGFkZGl0aW9uYWwgcmVmZXJlbmNlcyByZXF1aXJlZCBmb3IgZWZmaWNpZW50IGNvbGxpc2lvbiBkZXRlY3Rpb24gcm91dGluZXMuXG4gICAgICpcbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGJlIHNwZWNpZmllZCBpbiBjbG9ja3dpc2Ugb3JkZXIuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGBib2R5YCBhcmd1bWVudCBpcyBub3Qgb3B0aW9uYWwsIGEgYE1hdHRlci5Cb2R5YCByZWZlcmVuY2UgbXVzdCBiZSBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3JbXX0gcG9pbnRzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgVmVydGljZXMuY3JlYXRlID0gZnVuY3Rpb24ocG9pbnRzLCBib2R5KSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICAgICAgICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgaXNJbnRlcm5hbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHN0cmluZyBjb250YWluaW5nIG9yZGVyZWQgeCB5IHBhaXJzIHNlcGFyYXRlZCBieSBzcGFjZXMgKGFuZCBvcHRpb25hbGx5IGNvbW1hcyksIFxuICAgICAqIGludG8gYSBgTWF0dGVyLlZlcnRpY2VzYCBvYmplY3QgZm9yIHRoZSBnaXZlbiBgTWF0dGVyLkJvZHlgLlxuICAgICAqIEZvciBwYXJzaW5nIFNWRyBwYXRocywgc2VlIGBTdmcucGF0aFRvVmVydGljZXNgLlxuICAgICAqIEBtZXRob2QgZnJvbVBhdGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmZyb21QYXRoID0gZnVuY3Rpb24ocGF0aCwgYm9keSkge1xuICAgICAgICB2YXIgcGF0aFBhdHRlcm4gPSAvTD9cXHMqKFstXFxkLmVdKylbXFxzLF0qKFstXFxkLmVdKykqL2lnLFxuICAgICAgICAgICAgcG9pbnRzID0gW107XG5cbiAgICAgICAgcGF0aC5yZXBsYWNlKHBhdGhQYXR0ZXJuLCBmdW5jdGlvbihtYXRjaCwgeCwgeSkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBwYXJzZUZsb2F0KHgpLCB5OiBwYXJzZUZsb2F0KHkpIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gVmVydGljZXMuY3JlYXRlKHBvaW50cywgYm9keSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNlbnRyZSAoY2VudHJvaWQpIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBjZW50cmVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIGNlbnRyZSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNlbnRyZSA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBhcmVhID0gVmVydGljZXMuYXJlYSh2ZXJ0aWNlcywgdHJ1ZSksXG4gICAgICAgICAgICBjZW50cmUgPSB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGNyb3NzLFxuICAgICAgICAgICAgdGVtcCxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgICAgICBjcm9zcyA9IFZlY3Rvci5jcm9zcyh2ZXJ0aWNlc1tpXSwgdmVydGljZXNbal0pO1xuICAgICAgICAgICAgdGVtcCA9IFZlY3Rvci5tdWx0KFZlY3Rvci5hZGQodmVydGljZXNbaV0sIHZlcnRpY2VzW2pdKSwgY3Jvc3MpO1xuICAgICAgICAgICAgY2VudHJlID0gVmVjdG9yLmFkZChjZW50cmUsIHRlbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kaXYoY2VudHJlLCA2ICogYXJlYSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGF2ZXJhZ2UgKG1lYW4pIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBtZWFuXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBhdmVyYWdlIHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMubWVhbiA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBhdmVyYWdlID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXZlcmFnZS54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmVyYWdlLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWZWN0b3IuZGl2KGF2ZXJhZ2UsIHZlcnRpY2VzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFyZWEgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGFyZWFcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gc2lnbmVkXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgYXJlYVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmFyZWEgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2lnbmVkKSB7XG4gICAgICAgIHZhciBhcmVhID0gMCxcbiAgICAgICAgICAgIGogPSB2ZXJ0aWNlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZWEgKz0gKHZlcnRpY2VzW2pdLnggLSB2ZXJ0aWNlc1tpXS54KSAqICh2ZXJ0aWNlc1tqXS55ICsgdmVydGljZXNbaV0ueSk7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduZWQpXG4gICAgICAgICAgICByZXR1cm4gYXJlYSAvIDI7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFyZWEpIC8gMjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcyBnaXZlbiB0aGUgdG90YWwgbWFzcy5cbiAgICAgKiBAbWV0aG9kIGluZXJ0aWFcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXNzXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9seWdvbidzIG1vbWVudCBvZiBpbmVydGlhXG4gICAgICovXG4gICAgVmVydGljZXMuaW5lcnRpYSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBtYXNzKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSAwLFxuICAgICAgICAgICAgZGVub21pbmF0b3IgPSAwLFxuICAgICAgICAgICAgdiA9IHZlcnRpY2VzLFxuICAgICAgICAgICAgY3Jvc3MsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHBvbHlnb24ncyBtb21lbnQgb2YgaW5lcnRpYSwgdXNpbmcgc2Vjb25kIG1vbWVudCBvZiBhcmVhXG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0IGh0dHA6Ly93d3cucGh5c2ljc2ZvcnVtcy5jb20vc2hvd3RocmVhZC5waHA/dD0yNTI5M1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHYubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGogPSAobiArIDEpICUgdi5sZW5ndGg7XG4gICAgICAgICAgICBjcm9zcyA9IE1hdGguYWJzKFZlY3Rvci5jcm9zcyh2W2pdLCB2W25dKSk7XG4gICAgICAgICAgICBudW1lcmF0b3IgKz0gY3Jvc3MgKiAoVmVjdG9yLmRvdCh2W2pdLCB2W2pdKSArIFZlY3Rvci5kb3QodltqXSwgdltuXSkgKyBWZWN0b3IuZG90KHZbbl0sIHZbbl0pKTtcbiAgICAgICAgICAgIGRlbm9taW5hdG9yICs9IGNyb3NzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChtYXNzIC8gNikgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBzZXQgb2YgdmVydGljZXMgaW4tcGxhY2UuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICovXG4gICAgVmVydGljZXMudHJhbnNsYXRlID0gZnVuY3Rpb24odmVydGljZXMsIHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHNjYWxhciA9IHR5cGVvZiBzY2FsYXIgIT09ICd1bmRlZmluZWQnID8gc2NhbGFyIDogMTtcblxuICAgICAgICB2YXIgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gdmVjdG9yLnggKiBzY2FsYXIsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gdmVjdG9yLnkgKiBzY2FsYXIsXG4gICAgICAgICAgICBpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggKz0gdHJhbnNsYXRlWDtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnkgKz0gdHJhbnNsYXRlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgc2V0IG9mIHZlcnRpY2VzIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5yb3RhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgYW5nbGUsIHBvaW50KSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgcG9pbnRYID0gcG9pbnQueCxcbiAgICAgICAgICAgIHBvaW50WSA9IHBvaW50LnksXG4gICAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIGR4LFxuICAgICAgICAgICAgZHksXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGR4ID0gdmVydGV4LnggLSBwb2ludFg7XG4gICAgICAgICAgICBkeSA9IHZlcnRleC55IC0gcG9pbnRZO1xuICAgICAgICAgICAgdmVydGV4LnggPSBwb2ludFggKyAoZHggKiBjb3MgLSBkeSAqIHNpbik7XG4gICAgICAgICAgICB2ZXJ0ZXgueSA9IHBvaW50WSArIChkeCAqIHNpbiArIGR5ICogY29zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBwb2ludGAgaXMgaW5zaWRlIHRoZSBzZXQgb2YgYHZlcnRpY2VzYC5cbiAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2ZXJ0aWNlcyBjb250YWlucyBwb2ludCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgVmVydGljZXMuY29udGFpbnMgPSBmdW5jdGlvbih2ZXJ0aWNlcywgcG9pbnQpIHtcbiAgICAgICAgdmFyIHBvaW50WCA9IHBvaW50LngsXG4gICAgICAgICAgICBwb2ludFkgPSBwb2ludC55LFxuICAgICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1t2ZXJ0aWNlc0xlbmd0aCAtIDFdLFxuICAgICAgICAgICAgbmV4dFZlcnRleDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgaWYgKChwb2ludFggLSB2ZXJ0ZXgueCkgKiAobmV4dFZlcnRleC55IC0gdmVydGV4LnkpIFxuICAgICAgICAgICAgICAgICsgKHBvaW50WSAtIHZlcnRleC55KSAqICh2ZXJ0ZXgueCAtIG5leHRWZXJ0ZXgueCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZXJ0ZXggPSBuZXh0VmVydGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgdmVydGljZXMgZnJvbSBhIHBvaW50IChkZWZhdWx0IGlzIGNlbnRyZSkgaW4tcGxhY2UuXG4gICAgICogQG1ldGhvZCBzY2FsZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5zY2FsZSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpIHtcbiAgICAgICAgaWYgKHNjYWxlWCA9PT0gMSAmJiBzY2FsZVkgPT09IDEpXG4gICAgICAgICAgICByZXR1cm4gdmVydGljZXM7XG5cbiAgICAgICAgcG9pbnQgPSBwb2ludCB8fCBWZXJ0aWNlcy5jZW50cmUodmVydGljZXMpO1xuXG4gICAgICAgIHZhciB2ZXJ0ZXgsXG4gICAgICAgICAgICBkZWx0YTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGRlbHRhID0gVmVjdG9yLnN1Yih2ZXJ0ZXgsIHBvaW50KTtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggPSBwb2ludC54ICsgZGVsdGEueCAqIHNjYWxlWDtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnkgPSBwb2ludC55ICsgZGVsdGEueSAqIHNjYWxlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhbWZlcnMgYSBzZXQgb2YgdmVydGljZXMgYnkgZ2l2aW5nIHRoZW0gcm91bmRlZCBjb3JuZXJzLCByZXR1cm5zIGEgbmV3IHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBUaGUgcmFkaXVzIHBhcmFtZXRlciBpcyBhIHNpbmdsZSBudW1iZXIgb3IgYW4gYXJyYXkgdG8gc3BlY2lmeSB0aGUgcmFkaXVzIGZvciBlYWNoIHZlcnRleC5cbiAgICAgKiBAbWV0aG9kIGNoYW1mZXJcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlNaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eU1heFxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNoYW1mZXIgPSBmdW5jdGlvbih2ZXJ0aWNlcywgcmFkaXVzLCBxdWFsaXR5LCBxdWFsaXR5TWluLCBxdWFsaXR5TWF4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmFkaXVzID0gW3JhZGl1c107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYWRpdXMgPSByYWRpdXMgfHwgWzhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcXVhbGl0eSBkZWZhdWx0cyB0byAtMSwgd2hpY2ggaXMgYXV0b1xuICAgICAgICBxdWFsaXR5ID0gKHR5cGVvZiBxdWFsaXR5ICE9PSAndW5kZWZpbmVkJykgPyBxdWFsaXR5IDogLTE7XG4gICAgICAgIHF1YWxpdHlNaW4gPSBxdWFsaXR5TWluIHx8IDI7XG4gICAgICAgIHF1YWxpdHlNYXggPSBxdWFsaXR5TWF4IHx8IDE0O1xuXG4gICAgICAgIHZhciBuZXdWZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcmV2VmVydGV4ID0gdmVydGljZXNbaSAtIDEgPj0gMCA/IGkgLSAxIDogdmVydGljZXMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV0sXG4gICAgICAgICAgICAgICAgbmV4dFZlcnRleCA9IHZlcnRpY2VzWyhpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGhdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYWRpdXMgPSByYWRpdXNbaSA8IHJhZGl1cy5sZW5ndGggPyBpIDogcmFkaXVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFJhZGl1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1ZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZXZOb3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgeDogdmVydGV4LnkgLSBwcmV2VmVydGV4LnksIFxuICAgICAgICAgICAgICAgIHk6IHByZXZWZXJ0ZXgueCAtIHZlcnRleC54XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIG5leHROb3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgeDogbmV4dFZlcnRleC55IC0gdmVydGV4LnksIFxuICAgICAgICAgICAgICAgIHk6IHZlcnRleC54IC0gbmV4dFZlcnRleC54XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGRpYWdvbmFsUmFkaXVzID0gTWF0aC5zcXJ0KDIgKiBNYXRoLnBvdyhjdXJyZW50UmFkaXVzLCAyKSksXG4gICAgICAgICAgICAgICAgcmFkaXVzVmVjdG9yID0gVmVjdG9yLm11bHQoQ29tbW9uLmNsb25lKHByZXZOb3JtYWwpLCBjdXJyZW50UmFkaXVzKSxcbiAgICAgICAgICAgICAgICBtaWROb3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKFZlY3Rvci5tdWx0KFZlY3Rvci5hZGQocHJldk5vcm1hbCwgbmV4dE5vcm1hbCksIDAuNSkpLFxuICAgICAgICAgICAgICAgIHNjYWxlZFZlcnRleCA9IFZlY3Rvci5zdWIodmVydGV4LCBWZWN0b3IubXVsdChtaWROb3JtYWwsIGRpYWdvbmFsUmFkaXVzKSk7XG5cbiAgICAgICAgICAgIHZhciBwcmVjaXNpb24gPSBxdWFsaXR5O1xuXG4gICAgICAgICAgICBpZiAocXVhbGl0eSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGRlY2lkZSBwcmVjaXNpb25cbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBNYXRoLnBvdyhjdXJyZW50UmFkaXVzLCAwLjMyKSAqIDEuNzU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZWNpc2lvbiA9IENvbW1vbi5jbGFtcChwcmVjaXNpb24sIHF1YWxpdHlNaW4sIHF1YWxpdHlNYXgpO1xuXG4gICAgICAgICAgICAvLyB1c2UgYW4gZXZlbiB2YWx1ZSBmb3IgcHJlY2lzaW9uLCBtb3JlIGxpa2VseSB0byByZWR1Y2UgYXhlcyBieSB1c2luZyBzeW1tZXRyeVxuICAgICAgICAgICAgaWYgKHByZWNpc2lvbiAlIDIgPT09IDEpXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uICs9IDE7XG5cbiAgICAgICAgICAgIHZhciBhbHBoYSA9IE1hdGguYWNvcyhWZWN0b3IuZG90KHByZXZOb3JtYWwsIG5leHROb3JtYWwpKSxcbiAgICAgICAgICAgICAgICB0aGV0YSA9IGFscGhhIC8gcHJlY2lzaW9uO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByZWNpc2lvbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV3VmVydGljZXMucHVzaChWZWN0b3IuYWRkKFZlY3Rvci5yb3RhdGUocmFkaXVzVmVjdG9yLCB0aGV0YSAqIGopLCBzY2FsZWRWZXJ0ZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGlucHV0IHZlcnRpY2VzIGludG8gY2xvY2t3aXNlIG9yZGVyIGluIHBsYWNlLlxuICAgICAqIEBtZXRob2QgY2xvY2t3aXNlU29ydFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuY2xvY2t3aXNlU29ydCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBjZW50cmUgPSBWZXJ0aWNlcy5tZWFuKHZlcnRpY2VzKTtcblxuICAgICAgICB2ZXJ0aWNlcy5zb3J0KGZ1bmN0aW9uKHZlcnRleEEsIHZlcnRleEIpIHtcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IuYW5nbGUoY2VudHJlLCB2ZXJ0ZXhBKSAtIFZlY3Rvci5hbmdsZShjZW50cmUsIHZlcnRleEIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmVydGljZXMgZm9ybSBhIGNvbnZleCBzaGFwZSAodmVydGljZXMgbXVzdCBiZSBpbiBjbG9ja3dpc2Ugb3JkZXIpLlxuICAgICAqIEBtZXRob2QgaXNDb252ZXhcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2Jvb2x9IGB0cnVlYCBpZiB0aGUgYHZlcnRpY2VzYCBhcmUgY29udmV4LCBgZmFsc2VgIGlmIG5vdCAob3IgYG51bGxgIGlmIG5vdCBjb21wdXRhYmxlKS5cbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5pc0NvbnZleCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9wYXVsYm91cmtlLm5ldC9nZW9tZXRyeS9wb2x5Z29ubWVzaC9cbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBQYXVsIEJvdXJrZSAodXNlIHBlcm1pdHRlZClcblxuICAgICAgICB2YXIgZmxhZyA9IDAsXG4gICAgICAgICAgICBuID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgejtcblxuICAgICAgICBpZiAobiA8IDMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBqID0gKGkgKyAxKSAlIG47XG4gICAgICAgICAgICBrID0gKGkgKyAyKSAlIG47XG4gICAgICAgICAgICB6ID0gKHZlcnRpY2VzW2pdLnggLSB2ZXJ0aWNlc1tpXS54KSAqICh2ZXJ0aWNlc1trXS55IC0gdmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICB6IC09ICh2ZXJ0aWNlc1tqXS55IC0gdmVydGljZXNbaV0ueSkgKiAodmVydGljZXNba10ueCAtIHZlcnRpY2VzW2pdLngpO1xuXG4gICAgICAgICAgICBpZiAoeiA8IDApIHtcbiAgICAgICAgICAgICAgICBmbGFnIHw9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHogPiAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyB8PSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbGFnICE9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udmV4IGh1bGwgb2YgdGhlIGlucHV0IHZlcnRpY2VzIGFzIGEgbmV3IGFycmF5IG9mIHBvaW50cy5cbiAgICAgKiBAbWV0aG9kIGh1bGxcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4gW3ZlcnRleF0gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5odWxsID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgLy8gaHR0cDovL2dlb21hbGdvcml0aG1zLmNvbS9hMTAtX2h1bGwtMS5odG1sXG5cbiAgICAgICAgdmFyIHVwcGVyID0gW10sXG4gICAgICAgICAgICBsb3dlciA9IFtdLCBcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gc29ydCB2ZXJ0aWNlcyBvbiB4LWF4aXMgKHktYXhpcyBmb3IgdGllcylcbiAgICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5zbGljZSgwKTtcbiAgICAgICAgdmVydGljZXMuc29ydChmdW5jdGlvbih2ZXJ0ZXhBLCB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICB2YXIgZHggPSB2ZXJ0ZXhBLnggLSB2ZXJ0ZXhCLng7XG4gICAgICAgICAgICByZXR1cm4gZHggIT09IDAgPyBkeCA6IHZlcnRleEEueSAtIHZlcnRleEIueTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYnVpbGQgbG93ZXIgaHVsbFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuXG4gICAgICAgICAgICB3aGlsZSAobG93ZXIubGVuZ3RoID49IDIgXG4gICAgICAgICAgICAgICAgICAgJiYgVmVjdG9yLmNyb3NzMyhsb3dlcltsb3dlci5sZW5ndGggLSAyXSwgbG93ZXJbbG93ZXIubGVuZ3RoIC0gMV0sIHZlcnRleCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGxvd2VyLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb3dlci5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWlsZCB1cHBlciBodWxsXG4gICAgICAgIGZvciAoaSA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgd2hpbGUgKHVwcGVyLmxlbmd0aCA+PSAyIFxuICAgICAgICAgICAgICAgICAgICYmIFZlY3Rvci5jcm9zczModXBwZXJbdXBwZXIubGVuZ3RoIC0gMl0sIHVwcGVyW3VwcGVyLmxlbmd0aCAtIDFdLCB2ZXJ0ZXgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB1cHBlci5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBwZXIucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uY2F0ZW5hdGlvbiBvZiB0aGUgbG93ZXIgYW5kIHVwcGVyIGh1bGxzIGdpdmVzIHRoZSBjb252ZXggaHVsbFxuICAgICAgICAvLyBvbWl0IGxhc3QgcG9pbnRzIGJlY2F1c2UgdGhleSBhcmUgcmVwZWF0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgb3RoZXIgbGlzdFxuICAgICAgICB1cHBlci5wb3AoKTtcbiAgICAgICAgbG93ZXIucG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIHVwcGVyLmNvbmNhdChsb3dlcik7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkV2ZW50c2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgdG8gZmlyZSBhbmQgbGlzdGVuIHRvIGV2ZW50cyBvbiBvdGhlciBvYmplY3RzLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgRXZlbnRzXG4qL1xuXG52YXIgRXZlbnRzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRzO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHRoZSBnaXZlbiBvYmplY3QncyBgZXZlbnROYW1lYC5cbiAgICAgKiBAbWV0aG9kIG9uXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBFdmVudHMub24gPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKSxcbiAgICAgICAgICAgIG5hbWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50cyA9IG9iamVjdC5ldmVudHMgfHwge307XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVdID0gb2JqZWN0LmV2ZW50c1tuYW1lXSB8fCBbXTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGNhbGxiYWNrLiBJZiBubyBjYWxsYmFjaywgY2xlYXJzIGFsbCBjYWxsYmFja3MgaW4gYGV2ZW50TmFtZXNgLiBJZiBubyBgZXZlbnROYW1lc2AsIGNsZWFycyBhbGwgZXZlbnRzLlxuICAgICAqIEBtZXRob2Qgb2ZmXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBFdmVudHMub2ZmID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHMgPSB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBFdmVudHMub2ZmKG9iamVjdCwgY2FsbGJhY2spXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBldmVudE5hbWVzO1xuICAgICAgICAgICAgZXZlbnROYW1lcyA9IENvbW1vbi5rZXlzKG9iamVjdC5ldmVudHMpLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gb2JqZWN0LmV2ZW50c1tuYW1lc1tpXV0sXG4gICAgICAgICAgICAgICAgbmV3Q2FsbGJhY2tzID0gW107XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBjYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNhbGxiYWNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2pdICE9PSBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVzW2ldXSA9IG5ld0NhbGxiYWNrcztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbGwgdGhlIGNhbGxiYWNrcyBzdWJzY3JpYmVkIHRvIHRoZSBnaXZlbiBvYmplY3QncyBgZXZlbnROYW1lYCwgaW4gdGhlIG9yZGVyIHRoZXkgc3Vic2NyaWJlZCwgaWYgYW55LlxuICAgICAqIEBtZXRob2QgdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7fSBldmVudFxuICAgICAqL1xuICAgIEV2ZW50cy50cmlnZ2VyID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBldmVudCkge1xuICAgICAgICB2YXIgbmFtZXMsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgZXZlbnRDbG9uZTtcblxuICAgICAgICB2YXIgZXZlbnRzID0gb2JqZWN0LmV2ZW50cztcbiAgICAgICAgXG4gICAgICAgIGlmIChldmVudHMgJiYgQ29tbW9uLmtleXMoZXZlbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50KVxuICAgICAgICAgICAgICAgIGV2ZW50ID0ge307XG5cbiAgICAgICAgICAgIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyA9IGV2ZW50c1tuYW1lXTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZSA9IENvbW1vbi5jbG9uZShldmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBldmVudENsb25lLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICBldmVudENsb25lLnNvdXJjZSA9IG9iamVjdDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNhbGxiYWNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2pdLmFwcGx5KG9iamVjdCwgW2V2ZW50Q2xvbmVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBBIGNvbXBvc2l0ZSBpcyBhIGNvbGxlY3Rpb24gb2YgYE1hdHRlci5Cb2R5YCwgYE1hdHRlci5Db25zdHJhaW50YCBhbmQgb3RoZXIgYE1hdHRlci5Db21wb3NpdGVgIG9iamVjdHMuXG4qXG4qIFRoZXkgYXJlIGEgY29udGFpbmVyIHRoYXQgY2FuIHJlcHJlc2VudCBjb21wbGV4IG9iamVjdHMgbWFkZSBvZiBtdWx0aXBsZSBwYXJ0cywgZXZlbiBpZiB0aGV5IGFyZSBub3QgcGh5c2ljYWxseSBjb25uZWN0ZWQuXG4qIEEgY29tcG9zaXRlIGNvdWxkIGNvbnRhaW4gYW55dGhpbmcgZnJvbSBhIHNpbmdsZSBib2R5IGFsbCB0aGUgd2F5IHVwIHRvIGEgd2hvbGUgd29ybGQuXG4qIFxuKiBXaGVuIG1ha2luZyBhbnkgY2hhbmdlcyB0byBjb21wb3NpdGVzLCB1c2UgdGhlIGluY2x1ZGVkIGZ1bmN0aW9ucyByYXRoZXIgdGhhbiBjaGFuZ2luZyB0aGVpciBwcm9wZXJ0aWVzIGRpcmVjdGx5LlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29tcG9zaXRlXG4qL1xuXG52YXIgQ29tcG9zaXRlID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9zaXRlO1xuXG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29tcG9zaXRlLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3Blcml0ZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoeyBcbiAgICAgICAgICAgIGlkOiBDb21tb24ubmV4dElkKCksXG4gICAgICAgICAgICB0eXBlOiAnY29tcG9zaXRlJyxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGlzTW9kaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYm9kaWVzOiBbXSwgXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sIFxuICAgICAgICAgICAgY29tcG9zaXRlczogW10sXG4gICAgICAgICAgICBsYWJlbDogJ0NvbXBvc2l0ZScsXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgY2FjaGU6IHtcbiAgICAgICAgICAgICAgICBhbGxCb2RpZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgYWxsQ29uc3RyYWludHM6IG51bGwsXG4gICAgICAgICAgICAgICAgYWxsQ29tcG9zaXRlczogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcG9zaXRlJ3MgYGlzTW9kaWZpZWRgIGZsYWcuIFxuICAgICAqIElmIGB1cGRhdGVQYXJlbnRzYCBpcyB0cnVlLCBhbGwgcGFyZW50cyB3aWxsIGJlIHNldCAoZGVmYXVsdDogZmFsc2UpLlxuICAgICAqIElmIGB1cGRhdGVDaGlsZHJlbmAgaXMgdHJ1ZSwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgc2V0IChkZWZhdWx0OiBmYWxzZSkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNldE1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNb2RpZmllZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZVBhcmVudHM9ZmFsc2VdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlQ2hpbGRyZW49ZmFsc2VdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkID0gZnVuY3Rpb24oY29tcG9zaXRlLCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbikge1xuICAgICAgICBjb21wb3NpdGUuaXNNb2RpZmllZCA9IGlzTW9kaWZpZWQ7XG5cbiAgICAgICAgaWYgKGlzTW9kaWZpZWQgJiYgY29tcG9zaXRlLmNhY2hlKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQm9kaWVzID0gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb25zdHJhaW50cyA9IG51bGw7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQ29tcG9zaXRlcyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXBkYXRlUGFyZW50cyAmJiBjb21wb3NpdGUucGFyZW50KSB7XG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLnBhcmVudCwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29tcG9zaXRlID0gY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV07XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNoaWxkQ29tcG9zaXRlLCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyBzaW5nbGUgb3IgbXVsdGktYWRkIGZ1bmN0aW9uLiBBZGRzIGEgc2luZ2xlIG9yIGFuIGFycmF5IG9mIGJvZHkocyksIGNvbnN0cmFpbnQocykgb3IgY29tcG9zaXRlKHMpIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZUFkZGAgYW5kIGBhZnRlckFkZGAgZXZlbnRzIG9uIHRoZSBgY29tcG9zaXRlYC5cbiAgICAgKiBAbWV0aG9kIGFkZFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gb2JqZWN0IEEgc2luZ2xlIG9yIGFuIGFycmF5IG9mIGJvZHkocyksIGNvbnN0cmFpbnQocykgb3IgY29tcG9zaXRlKHMpXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIG9iamVjdHMgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkID0gZnVuY3Rpb24oY29tcG9zaXRlLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdiZWZvcmVBZGQnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBhZGRpbmcgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgICAgICBpZiAob2JqLnBhcmVudCAhPT0gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdDb21wb3NpdGUuYWRkOiBza2lwcGVkIGFkZGluZyBhIGNvbXBvdW5kIGJvZHkgcGFydCAoeW91IG11c3QgYWRkIGl0cyBwYXJlbnQgaW5zdGVhZCknKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY29tcG9zaXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29tcG9zaXRlKGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlQ29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmouY29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2FmdGVyQWRkJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIHJlbW92ZSBmdW5jdGlvbi4gUmVtb3ZlcyBvbmUgb3IgbWFueSBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGEgY29tcG9zaXRlKHMpIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogT3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVSZW1vdmVgIGFuZCBgYWZ0ZXJSZW1vdmVgIGV2ZW50cyBvbiB0aGUgYGNvbXBvc2l0ZWAuXG4gICAgICogQG1ldGhvZCByZW1vdmVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIG9iamVjdHMgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmUgPSBmdW5jdGlvbihjb21wb3NpdGUsIG9iamVjdCwgZGVlcCkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IFtdLmNvbmNhdChvYmplY3QpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2JlZm9yZVJlbW92ZScsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQm9keShjb21wb3NpdGUsIG9iaiwgZGVlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludChjb21wb3NpdGUsIG9iaiwgZGVlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wb3NpdGUnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW91c2VDb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludChjb21wb3NpdGUsIG9iai5jb25zdHJhaW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYWZ0ZXJSZW1vdmUnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb21wb3NpdGUgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQ29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUFcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQlxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZUEgd2l0aCB0aGUgb2JqZWN0cyBmcm9tIGNvbXBvc2l0ZUIgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQ29tcG9zaXRlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgY29tcG9zaXRlQikge1xuICAgICAgICBjb21wb3NpdGVBLmNvbXBvc2l0ZXMucHVzaChjb21wb3NpdGVCKTtcbiAgICAgICAgY29tcG9zaXRlQi5wYXJlbnQgPSBjb21wb3NpdGVBO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlQSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlQTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbXBvc2l0ZSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUsIGFuZCBvcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZUEgd2l0aCB0aGUgY29tcG9zaXRlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgY29tcG9zaXRlQiwgZGVlcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBDb21tb24uaW5kZXhPZihjb21wb3NpdGVBLmNvbXBvc2l0ZXMsIGNvbXBvc2l0ZUIpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlQXQoY29tcG9zaXRlQSwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlQS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlKGNvbXBvc2l0ZUEuY29tcG9zaXRlc1tpXSwgY29tcG9zaXRlQiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlQTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbXBvc2l0ZSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUNvbXBvc2l0ZUF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb21wb3NpdGUgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGVBdCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgcG9zaXRpb24pIHtcbiAgICAgICAgY29tcG9zaXRlLmNvbXBvc2l0ZXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYm9keSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRCb2R5XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBib2R5IGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZEJvZHkgPSBmdW5jdGlvbihjb21wb3NpdGUsIGJvZHkpIHtcbiAgICAgICAgY29tcG9zaXRlLmJvZGllcy5wdXNoKGJvZHkpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgYW5kIG9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQm9keVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBib2R5IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQm9keSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgYm9keSwgZGVlcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBDb21tb24uaW5kZXhPZihjb21wb3NpdGUuYm9kaWVzLCBib2R5KTtcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHlBdChjb21wb3NpdGUsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQm9keShjb21wb3NpdGUuY29tcG9zaXRlc1tpXSwgYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUJvZHlBdFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUJvZHlBdCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgcG9zaXRpb24pIHtcbiAgICAgICAgY29tcG9zaXRlLmJvZGllcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb25zdHJhaW50IHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZENvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29uc3RyYWludCkge1xuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29uc3RyYWludCBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUsIGFuZCBvcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29uc3RyYWludCByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGNvbnN0cmFpbnQsIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlLmNvbnN0cmFpbnRzLCBjb25zdHJhaW50KTtcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnRBdChjb21wb3NpdGUsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludChjb21wb3NpdGUuY29tcG9zaXRlc1tpXSwgY29uc3RyYWludCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUNvbnN0cmFpbnRBdFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29uc3RyYWludCByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnRBdCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgcG9zaXRpb24pIHtcbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgYm9kaWVzLCBjb25zdHJhaW50cyBhbmQgY29tcG9zaXRlcyBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogT3B0aW9uYWxseSBjbGVhcmluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGtlZXBTdGF0aWNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5jbGVhciA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwga2VlcFN0YXRpYywgZGVlcCkge1xuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmNsZWFyKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBrZWVwU3RhdGljLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGtlZXBTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMgPSBjb21wb3NpdGUuYm9kaWVzLmZpbHRlcihmdW5jdGlvbihib2R5KSB7IHJldHVybiBib2R5LmlzU3RhdGljOyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5sZW5ndGggPSAwO1xuICAgICAgICBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBib2RpZXMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbEJvZGllc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtib2R5W119IEFsbCB0aGUgYm9kaWVzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbEJvZGllcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlICYmIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NpdGUuY2FjaGUuYWxsQm9kaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvZGllcyA9IFtdLmNvbmNhdChjb21wb3NpdGUuYm9kaWVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgYm9kaWVzID0gYm9kaWVzLmNvbmNhdChDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcyA9IGJvZGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2RpZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNvbnN0cmFpbnRzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgY29uc3RyYWludHMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbENvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbnN0cmFpbnRbXX0gQWxsIHRoZSBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlICYmIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb25zdHJhaW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb25zdHJhaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb25zdHJhaW50cyA9IFtdLmNvbmNhdChjb21wb3NpdGUuY29uc3RyYWludHMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzLmNvbmNhdChDb21wb3NpdGUuYWxsQ29uc3RyYWludHMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJhaW50cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29tcG9zaXRlcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbXBvc2l0ZXMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbENvbXBvc2l0ZXNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlW119IEFsbCB0aGUgY29tcG9zaXRlc1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUgJiYgY29tcG9zaXRlLmNhY2hlLmFsbENvbXBvc2l0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NpdGUuY2FjaGUuYWxsQ29tcG9zaXRlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wb3NpdGVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb21wb3NpdGVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgY29tcG9zaXRlcyA9IGNvbXBvc2l0ZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbXBvc2l0ZXMgPSBjb21wb3NpdGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBjb21wb3NpdGUgcmVjdXJzaXZlbHkgZm9yIGFuIG9iamVjdCBtYXRjaGluZyB0aGUgdHlwZSBhbmQgaWQgc3VwcGxpZWQsIG51bGwgaWYgbm90IGZvdW5kLlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcmVxdWVzdGVkIG9iamVjdCwgaWYgZm91bmRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuZ2V0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBpZCwgdHlwZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyxcbiAgICAgICAgICAgIG9iamVjdDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlKS5jb25jYXQoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvYmplY3RzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqZWN0KSB7IFxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpOyBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdC5sZW5ndGggPT09IDAgPyBudWxsIDogb2JqZWN0WzBdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgZ2l2ZW4gb2JqZWN0KHMpIGZyb20gY29tcG9zaXRlQSB0byBjb21wb3NpdGVCIChlcXVhbCB0byBhIHJlbW92ZSBmb2xsb3dlZCBieSBhbiBhZGQpLlxuICAgICAqIEBtZXRob2QgbW92ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlQX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZUJ9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFJldHVybnMgY29tcG9zaXRlQVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5tb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgb2JqZWN0cywgY29tcG9zaXRlQikge1xuICAgICAgICBDb21wb3NpdGUucmVtb3ZlKGNvbXBvc2l0ZUEsIG9iamVjdHMpO1xuICAgICAgICBDb21wb3NpdGUuYWRkKGNvbXBvc2l0ZUIsIG9iamVjdHMpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlQTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBuZXcgaWRzIGZvciBhbGwgb2JqZWN0cyBpbiB0aGUgY29tcG9zaXRlLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIHJlYmFzZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFJldHVybnMgY29tcG9zaXRlXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlYmFzZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKVxuICAgICAgICAgICAgLmNvbmNhdChDb21wb3NpdGUuYWxsQ29uc3RyYWludHMoY29tcG9zaXRlKSlcbiAgICAgICAgICAgIC5jb25jYXQoQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlKSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3RzW2ldLmlkID0gQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBhbGwgY2hpbGRyZW4gaW4gdGhlIGNvbXBvc2l0ZSBieSBhIGdpdmVuIHZlY3RvciByZWxhdGl2ZSB0byB0aGVpciBjdXJyZW50IHBvc2l0aW9ucywgXG4gICAgICogd2l0aG91dCBpbXBhcnRpbmcgYW55IHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB0cmFuc2xhdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS50cmFuc2xhdGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHRyYW5zbGF0aW9uLCByZWN1cnNpdmUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IHJlY3Vyc2l2ZSA/IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSA6IGNvbXBvc2l0ZS5ib2RpZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIEJvZHkudHJhbnNsYXRlKGJvZGllc1tpXSwgdHJhbnNsYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyBhbGwgY2hpbGRyZW4gaW4gdGhlIGNvbXBvc2l0ZSBieSBhIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBnaXZlbiBwb2ludCwgd2l0aG91dCBpbXBhcnRpbmcgYW55IGFuZ3VsYXIgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHBhcmFtIHtib29sfSBbcmVjdXJzaXZlPXRydWVdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJvdGF0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgcm90YXRpb24sIHBvaW50LCByZWN1cnNpdmUpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKSxcbiAgICAgICAgICAgIGJvZGllcyA9IHJlY3Vyc2l2ZSA/IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSA6IGNvbXBvc2l0ZS5ib2RpZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGR4ID0gYm9keS5wb3NpdGlvbi54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IGJvZHkucG9zaXRpb24ueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54ICsgKGR4ICogY29zIC0gZHkgKiBzaW4pLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyAoZHggKiBzaW4gKyBkeSAqIGNvcylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBCb2R5LnJvdGF0ZShib2R5LCByb3RhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUsIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50LlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuc2NhbGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIGR4ICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyBkeSAqIHNjYWxlWVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkuc2NhbGUoYm9keSwgc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5pb24gb2YgdGhlIGJvdW5kcyBvZiBhbGwgb2YgdGhlIGNvbXBvc2l0ZSdzIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIGJvdW5kc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGUgVGhlIGNvbXBvc2l0ZS5cbiAgICAgKiBAcmV0dXJucyB7Ym91bmRzfSBUaGUgY29tcG9zaXRlIGJvdW5kcy5cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYm91bmRzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSksXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goYm9keS5ib3VuZHMubWluLCBib2R5LmJvdW5kcy5tYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvdW5kcy5jcmVhdGUodmVydGljZXMpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLmFkZGAgaXMgbWFkZSwgYmVmb3JlIG9iamVjdHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVBZGRcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0byBiZSBhZGRlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUuYWRkYCBpcyBtYWRlLCBhZnRlciBvYmplY3RzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJBZGRcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0aGF0IGhhdmUgYmVlbiBhZGRlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUucmVtb3ZlYCBpcyBtYWRlLCBiZWZvcmUgb2JqZWN0cyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlUmVtb3ZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdG8gYmUgcmVtb3ZlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUucmVtb3ZlYCBpcyBtYWRlLCBhZnRlciBvYmplY3RzIGhhdmUgYmVlbiByZW1vdmVkLlxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclJlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYENvbXBvc2l0ZS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29tcG9zaXRlXCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBjb21wb3NpdGVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJDb21wb3NpdGVcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGNvbXBvc2l0ZSBoYXMgYmVlbiBtb2RpZmllZCBkdXJpbmcgdGhlIGN1cnJlbnQgc3RlcC5cbiAgICAgKiBUaGlzIGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCB3aGVuIGJvZGllcywgY29uc3RyYWludHMgb3IgY29tcG9zaXRlcyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc01vZGlmaWVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbXBvc2l0ZWAgdGhhdCBpcyB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9zaXRlLiBJdCBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYnkgdGhlIGBNYXR0ZXIuQ29tcG9zaXRlYCBtZXRob2RzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhcmVudFxuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBCb2R5YCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGJvZGllcyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxCb2RpZXNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2RpZXNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYENvbnN0cmFpbnRgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgY29uc3RyYWludHMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQ29uc3RyYWludHNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50c1xuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQ29tcG9zaXRlYCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGNvbXBvc2l0ZXMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQ29tcG9zaXRlc2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbXBvc2l0ZXNcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB1c2VkIGZvciBzdG9yaW5nIGNhY2hlZCByZXN1bHRzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICAgICAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IG9ubHkgYW5kIGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHByb3BlcnR5IGNhY2hlXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGJvZHkgbW9kZWxzLlxuKiBBIGBNYXR0ZXIuQm9keWAgaXMgYSByaWdpZCBib2R5IHRoYXQgY2FuIGJlIHNpbXVsYXRlZCBieSBhIGBNYXR0ZXIuRW5naW5lYC5cbiogRmFjdG9yaWVzIGZvciBjb21tb25seSB1c2VkIGJvZHkgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgcmVjdGFuZ2xlcywgY2lyY2xlcyBhbmQgb3RoZXIgcG9seWdvbnMpIGNhbiBiZSBmb3VuZCBpbiB0aGUgbW9kdWxlIGBNYXR0ZXIuQm9kaWVzYC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cblxuKiBAY2xhc3MgQm9keVxuKi9cblxudmFyIEJvZHkgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIFJlbmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBBeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIEJvZHkuX2luZXJ0aWFTY2FsZSA9IDQ7XG4gICAgQm9keS5fbmV4dENvbGxpZGluZ0dyb3VwSWQgPSAxO1xuICAgIEJvZHkuX25leHROb25Db2xsaWRpbmdHcm91cElkID0gLTE7XG4gICAgQm9keS5fbmV4dENhdGVnb3J5ID0gMHgwMDAxO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFZlcnRpY2VzIG11c3QgYmUgc3BlY2lmaWVkIGluIGNsb2Nrd2lzZSBvcmRlci5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgQm9keS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGlkOiBDb21tb24ubmV4dElkKCksXG4gICAgICAgICAgICB0eXBlOiAnYm9keScsXG4gICAgICAgICAgICBsYWJlbDogJ0JvZHknLFxuICAgICAgICAgICAgcGFydHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKCdMIDAgMCBMIDQwIDAgTCA0MCA0MCBMIDAgNDAnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGZvcmNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHRvcnF1ZTogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBjb25zdHJhaW50SW1wdWxzZTogeyB4OiAwLCB5OiAwLCBhbmdsZTogMCB9LFxuICAgICAgICAgICAgdG90YWxDb250YWN0czogMCxcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgYW5ndWxhclNwZWVkOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgYW5ndWxhclZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgaXNTZW5zb3I6IGZhbHNlLFxuICAgICAgICAgICAgaXNTdGF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgaXNTbGVlcGluZzogZmFsc2UsXG4gICAgICAgICAgICBtb3Rpb246IDAsXG4gICAgICAgICAgICBzbGVlcFRocmVzaG9sZDogNjAsXG4gICAgICAgICAgICBkZW5zaXR5OiAwLjAwMSxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuMSxcbiAgICAgICAgICAgIGZyaWN0aW9uU3RhdGljOiAwLjUsXG4gICAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsb3A6IDAuMDUsXG4gICAgICAgICAgICB0aW1lU2NhbGU6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeFNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB5U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHhPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzOiBudWxsLFxuICAgICAgICAgICAgYm91bmRzOiBudWxsLFxuICAgICAgICAgICAgY2hhbWZlcjogbnVsbCxcbiAgICAgICAgICAgIGNpcmNsZVJhZGl1czogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJldjogbnVsbCxcbiAgICAgICAgICAgIGFuZ2xlUHJldjogMCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGF4ZXM6IG51bGwsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgbWFzczogMCxcbiAgICAgICAgICAgIGluZXJ0aWE6IDAsXG4gICAgICAgICAgICBfb3JpZ2luYWw6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYm9keSA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIF9pbml0UHJvcGVydGllcyhib2R5LCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgZ3JvdXAgaW5kZXggZm9yIHdoaWNoIGJvZGllcyB3aWxsIGNvbGxpZGUuXG4gICAgICogSWYgYGlzTm9uQ29sbGlkaW5nYCBpcyBgdHJ1ZWAsIHJldHVybnMgdGhlIG5leHQgdW5pcXVlIGdyb3VwIGluZGV4IGZvciB3aGljaCBib2RpZXMgd2lsbCBfbm90XyBjb2xsaWRlLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgbmV4dEdyb3VwXG4gICAgICogQHBhcmFtIHtib29sfSBbaXNOb25Db2xsaWRpbmc9ZmFsc2VdXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgZ3JvdXAgaW5kZXhcbiAgICAgKi9cbiAgICBCb2R5Lm5leHRHcm91cCA9IGZ1bmN0aW9uKGlzTm9uQ29sbGlkaW5nKSB7XG4gICAgICAgIGlmIChpc05vbkNvbGxpZGluZylcbiAgICAgICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Tm9uQ29sbGlkaW5nR3JvdXBJZC0tO1xuXG4gICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Q29sbGlkaW5nR3JvdXBJZCsrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBjYXRlZ29yeSBiaXRmaWVsZCAoc3RhcnRpbmcgYWZ0ZXIgdGhlIGluaXRpYWwgZGVmYXVsdCBjYXRlZ29yeSBgMHgwMDAxYCkuXG4gICAgICogVGhlcmUgYXJlIDMyIGF2YWlsYWJsZS4gU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBuZXh0Q2F0ZWdvcnlcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBjYXRlZ29yeSBiaXRmaWVsZFxuICAgICAqL1xuICAgIEJvZHkubmV4dENhdGVnb3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEJvZHkuX25leHRDYXRlZ29yeSA9IEJvZHkuX25leHRDYXRlZ29yeSA8PCAxO1xuICAgICAgICByZXR1cm4gQm9keS5fbmV4dENhdGVnb3J5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBib2R5IHByb3BlcnRpZXMuXG4gICAgICogQG1ldGhvZCBfaW5pdFByb3BlcnRpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7fSBbb3B0aW9uc11cbiAgICAgKi9cbiAgICB2YXIgX2luaXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24oYm9keSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAvLyBpbml0IHJlcXVpcmVkIHByb3BlcnRpZXMgKG9yZGVyIGlzIGltcG9ydGFudClcbiAgICAgICAgQm9keS5zZXQoYm9keSwge1xuICAgICAgICAgICAgYm91bmRzOiBib2R5LmJvdW5kcyB8fCBCb3VuZHMuY3JlYXRlKGJvZHkudmVydGljZXMpLFxuICAgICAgICAgICAgcG9zaXRpb25QcmV2OiBib2R5LnBvc2l0aW9uUHJldiB8fCBWZWN0b3IuY2xvbmUoYm9keS5wb3NpdGlvbiksXG4gICAgICAgICAgICBhbmdsZVByZXY6IGJvZHkuYW5nbGVQcmV2IHx8IGJvZHkuYW5nbGUsXG4gICAgICAgICAgICB2ZXJ0aWNlczogYm9keS52ZXJ0aWNlcyxcbiAgICAgICAgICAgIHBhcnRzOiBib2R5LnBhcnRzIHx8IFtib2R5XSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBib2R5LmlzU3RhdGljLFxuICAgICAgICAgICAgaXNTbGVlcGluZzogYm9keS5pc1NsZWVwaW5nLFxuICAgICAgICAgICAgcGFyZW50OiBib2R5LnBhcmVudCB8fCBib2R5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFZlcnRpY2VzLnJvdGF0ZShib2R5LnZlcnRpY2VzLCBib2R5LmFuZ2xlLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgQXhlcy5yb3RhdGUoYm9keS5heGVzLCBib2R5LmFuZ2xlKTtcbiAgICAgICAgQm91bmRzLnVwZGF0ZShib2R5LmJvdW5kcywgYm9keS52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG5cbiAgICAgICAgLy8gYWxsb3cgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHByb3BlcnRpZXNcbiAgICAgICAgQm9keS5zZXQoYm9keSwge1xuICAgICAgICAgICAgYXhlczogb3B0aW9ucy5heGVzIHx8IGJvZHkuYXhlcyxcbiAgICAgICAgICAgIGFyZWE6IG9wdGlvbnMuYXJlYSB8fCBib2R5LmFyZWEsXG4gICAgICAgICAgICBtYXNzOiBvcHRpb25zLm1hc3MgfHwgYm9keS5tYXNzLFxuICAgICAgICAgICAgaW5lcnRpYTogb3B0aW9ucy5pbmVydGlhIHx8IGJvZHkuaW5lcnRpYVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZW5kZXIgcHJvcGVydGllc1xuICAgICAgICB2YXIgZGVmYXVsdEZpbGxTdHlsZSA9IChib2R5LmlzU3RhdGljID8gJyMxNDE1MWYnIDogQ29tbW9uLmNob29zZShbJyNmMTk2NDgnLCAnI2Y1ZDI1OScsICcjZjU1YTNjJywgJyMwNjNlN2InLCAnI2VjZWNkMSddKSksXG4gICAgICAgICAgICBkZWZhdWx0U3Ryb2tlU3R5bGUgPSBib2R5LmlzU3RhdGljID8gJyM1NTUnIDogJyNjY2MnLFxuICAgICAgICAgICAgZGVmYXVsdExpbmVXaWR0aCA9IGJvZHkuaXNTdGF0aWMgJiYgYm9keS5yZW5kZXIuZmlsbFN0eWxlID09PSBudWxsID8gMSA6IDA7XG4gICAgICAgIGJvZHkucmVuZGVyLmZpbGxTdHlsZSA9IGJvZHkucmVuZGVyLmZpbGxTdHlsZSB8fCBkZWZhdWx0RmlsbFN0eWxlO1xuICAgICAgICBib2R5LnJlbmRlci5zdHJva2VTdHlsZSA9IGJvZHkucmVuZGVyLnN0cm9rZVN0eWxlIHx8IGRlZmF1bHRTdHJva2VTdHlsZTtcbiAgICAgICAgYm9keS5yZW5kZXIubGluZVdpZHRoID0gYm9keS5yZW5kZXIubGluZVdpZHRoIHx8IGRlZmF1bHRMaW5lV2lkdGg7XG4gICAgICAgIGJvZHkucmVuZGVyLnNwcml0ZS54T2Zmc2V0ICs9IC0oYm9keS5ib3VuZHMubWluLnggLSBib2R5LnBvc2l0aW9uLngpIC8gKGJvZHkuYm91bmRzLm1heC54IC0gYm9keS5ib3VuZHMubWluLngpO1xuICAgICAgICBib2R5LnJlbmRlci5zcHJpdGUueU9mZnNldCArPSAtKGJvZHkuYm91bmRzLm1pbi55IC0gYm9keS5wb3NpdGlvbi55KSAvIChib2R5LmJvdW5kcy5tYXgueSAtIGJvZHkuYm91bmRzLm1pbi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBwcm9wZXJ0eSBhbmQgYSB2YWx1ZSAob3IgbWFwIG9mKSwgc2V0cyB0aGUgcHJvcGVydHkocykgb24gdGhlIGJvZHksIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBzZXR0ZXIgZnVuY3Rpb25zIGlmIHRoZXkgZXhpc3QuXG4gICAgICogUHJlZmVyIHRvIHVzZSB0aGUgYWN0dWFsIHNldHRlciBmdW5jdGlvbnMgaW4gcGVyZm9ybWFuY2UgY3JpdGljYWwgc2l0dWF0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7fSBzZXR0aW5ncyBBIHByb3BlcnR5IG5hbWUgKG9yIG1hcCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMpIHRvIHNldCBvbiB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0ge30gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBpZiBgc2V0dGluZ3NgIGlzIGEgc2luZ2xlIHByb3BlcnR5IG5hbWUuXG4gICAgICovXG4gICAgQm9keS5zZXQgPSBmdW5jdGlvbihib2R5LCBzZXR0aW5ncywgdmFsdWUpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHNldHRpbmdzO1xuICAgICAgICAgICAgc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgICAgIHNldHRpbmdzW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBzZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2V0dGluZ3MsIHByb3BlcnR5KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFsdWUgPSBzZXR0aW5nc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2lzU3RhdGljJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFN0YXRpYyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc1NsZWVwaW5nJzpcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWFzcyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbnNpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0RGVuc2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmVydGlhJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVydGljZXMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0VmVydGljZXMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9zaXRpb24nOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5nbGUnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0VmVsb2NpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5ndWxhclZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXJ0cyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRQYXJ0cyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjZW50cmUnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0Q2VudHJlKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYm9keVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkgYXMgc3RhdGljLCBpbmNsdWRpbmcgaXNTdGF0aWMgZmxhZyBhbmQgc2V0dGluZyBtYXNzIGFuZCBpbmVydGlhIHRvIEluZmluaXR5LlxuICAgICAqIEBtZXRob2Qgc2V0U3RhdGljXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sfSBpc1N0YXRpY1xuICAgICAqL1xuICAgIEJvZHkuc2V0U3RhdGljID0gZnVuY3Rpb24oYm9keSwgaXNTdGF0aWMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LmlzU3RhdGljID0gaXNTdGF0aWM7XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXRpYykge1xuICAgICAgICAgICAgICAgIHBhcnQuX29yaWdpbmFsID0ge1xuICAgICAgICAgICAgICAgICAgICByZXN0aXR1dGlvbjogcGFydC5yZXN0aXR1dGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJpY3Rpb246IHBhcnQuZnJpY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1hc3M6IHBhcnQubWFzcyxcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYTogcGFydC5pbmVydGlhLFxuICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiBwYXJ0LmRlbnNpdHksXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VNYXNzOiBwYXJ0LmludmVyc2VNYXNzLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlSW5lcnRpYTogcGFydC5pbnZlcnNlSW5lcnRpYVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwYXJ0LnJlc3RpdHV0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0LmZyaWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBwYXJ0Lm1hc3MgPSBwYXJ0LmluZXJ0aWEgPSBwYXJ0LmRlbnNpdHkgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VNYXNzID0gcGFydC5pbnZlcnNlSW5lcnRpYSA9IDA7XG5cbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uUHJldi54ID0gcGFydC5wb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb25QcmV2LnkgPSBwYXJ0LnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgcGFydC5hbmdsZVByZXYgPSBwYXJ0LmFuZ2xlO1xuICAgICAgICAgICAgICAgIHBhcnQuYW5ndWxhclZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0LnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5tb3Rpb24gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0Ll9vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgIHBhcnQucmVzdGl0dXRpb24gPSBwYXJ0Ll9vcmlnaW5hbC5yZXN0aXR1dGlvbjtcbiAgICAgICAgICAgICAgICBwYXJ0LmZyaWN0aW9uID0gcGFydC5fb3JpZ2luYWwuZnJpY3Rpb247XG4gICAgICAgICAgICAgICAgcGFydC5tYXNzID0gcGFydC5fb3JpZ2luYWwubWFzcztcbiAgICAgICAgICAgICAgICBwYXJ0LmluZXJ0aWEgPSBwYXJ0Ll9vcmlnaW5hbC5pbmVydGlhO1xuICAgICAgICAgICAgICAgIHBhcnQuZGVuc2l0eSA9IHBhcnQuX29yaWdpbmFsLmRlbnNpdHk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlTWFzcyA9IHBhcnQuX29yaWdpbmFsLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZUluZXJ0aWEgPSBwYXJ0Ll9vcmlnaW5hbC5pbnZlcnNlSW5lcnRpYTtcblxuICAgICAgICAgICAgICAgIHBhcnQuX29yaWdpbmFsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtYXNzIG9mIHRoZSBib2R5LiBJbnZlcnNlIG1hc3MsIGRlbnNpdHkgYW5kIGluZXJ0aWEgYXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG4gICAgICogQG1ldGhvZCBzZXRNYXNzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hc3NcbiAgICAgKi9cbiAgICBCb2R5LnNldE1hc3MgPSBmdW5jdGlvbihib2R5LCBtYXNzKSB7XG4gICAgICAgIHZhciBtb21lbnQgPSBib2R5LmluZXJ0aWEgLyAoYm9keS5tYXNzIC8gNik7XG4gICAgICAgIGJvZHkuaW5lcnRpYSA9IG1vbWVudCAqIChtYXNzIC8gNik7XG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAxIC8gYm9keS5pbmVydGlhO1xuXG4gICAgICAgIGJvZHkubWFzcyA9IG1hc3M7XG4gICAgICAgIGJvZHkuaW52ZXJzZU1hc3MgPSAxIC8gYm9keS5tYXNzO1xuICAgICAgICBib2R5LmRlbnNpdHkgPSBib2R5Lm1hc3MgLyBib2R5LmFyZWE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHkuIE1hc3MgYW5kIGluZXJ0aWEgYXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG4gICAgICogQG1ldGhvZCBzZXREZW5zaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbnNpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldERlbnNpdHkgPSBmdW5jdGlvbihib2R5LCBkZW5zaXR5KSB7XG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBkZW5zaXR5ICogYm9keS5hcmVhKTtcbiAgICAgICAgYm9keS5kZW5zaXR5ID0gZGVuc2l0eTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKGkuZS4gc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgYm9keS4gXG4gICAgICogSW52ZXJzZSBpbmVydGlhIGlzIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuIE1hc3MgaXMgbm90IGNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRJbmVydGlhXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZXJ0aWFcbiAgICAgKi9cbiAgICBCb2R5LnNldEluZXJ0aWEgPSBmdW5jdGlvbihib2R5LCBpbmVydGlhKSB7XG4gICAgICAgIGJvZHkuaW5lcnRpYSA9IGluZXJ0aWE7XG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAxIC8gYm9keS5pbmVydGlhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5J3MgdmVydGljZXMgYW5kIHVwZGF0ZXMgYm9keSBwcm9wZXJ0aWVzIGFjY29yZGluZ2x5LCBpbmNsdWRpbmcgaW5lcnRpYSwgYXJlYSBhbmQgbWFzcyAod2l0aCByZXNwZWN0IHRvIGBib2R5LmRlbnNpdHlgKS5cbiAgICAgKiBWZXJ0aWNlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmb3JtZWQgdG8gYmUgb3JpZW50YXRlZCBhcm91bmQgdGhlaXIgY2VudHJlIG9mIG1hc3MgYXMgdGhlIG9yaWdpbi5cbiAgICAgKiBUaGV5IGFyZSB0aGVuIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlZCB0byB3b3JsZCBzcGFjZSBiYXNlZCBvbiBgYm9keS5wb3NpdGlvbmAuXG4gICAgICpcbiAgICAgKiBUaGUgYHZlcnRpY2VzYCBhcmd1bWVudCBzaG91bGQgYmUgcGFzc2VkIGFzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCBwb2ludHMgKG9yIGEgYE1hdHRlci5WZXJ0aWNlc2AgYXJyYXkpLlxuICAgICAqIFZlcnRpY2VzIG11c3QgZm9ybSBhIGNvbnZleCBodWxsLCBjb25jYXZlIGh1bGxzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZXRWZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yW119IHZlcnRpY2VzXG4gICAgICovXG4gICAgQm9keS5zZXRWZXJ0aWNlcyA9IGZ1bmN0aW9uKGJvZHksIHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGNoYW5nZSB2ZXJ0aWNlc1xuICAgICAgICBpZiAodmVydGljZXNbMF0uYm9keSA9PT0gYm9keSkge1xuICAgICAgICAgICAgYm9keS52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNyZWF0ZSh2ZXJ0aWNlcywgYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgcHJvcGVydGllc1xuICAgICAgICBib2R5LmF4ZXMgPSBBeGVzLmZyb21WZXJ0aWNlcyhib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgYm9keS5hcmVhID0gVmVydGljZXMuYXJlYShib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIGJvZHkuZGVuc2l0eSAqIGJvZHkuYXJlYSk7XG5cbiAgICAgICAgLy8gb3JpZW50IHZlcnRpY2VzIGFyb3VuZCB0aGUgY2VudHJlIG9mIG1hc3MgYXQgb3JpZ2luICgwLCAwKVxuICAgICAgICB2YXIgY2VudHJlID0gVmVydGljZXMuY2VudHJlKGJvZHkudmVydGljZXMpO1xuICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgY2VudHJlLCAtMSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGluZXJ0aWEgd2hpbGUgdmVydGljZXMgYXJlIGF0IG9yaWdpbiAoMCwgMClcbiAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIEJvZHkuX2luZXJ0aWFTY2FsZSAqIFZlcnRpY2VzLmluZXJ0aWEoYm9keS52ZXJ0aWNlcywgYm9keS5tYXNzKSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGdlb21ldHJ5XG4gICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgQm91bmRzLnVwZGF0ZShib2R5LmJvdW5kcywgYm9keS52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBhcnRzIG9mIHRoZSBgYm9keWAgYW5kIHVwZGF0ZXMgbWFzcywgaW5lcnRpYSBhbmQgY2VudHJvaWQuXG4gICAgICogRWFjaCBwYXJ0IHdpbGwgaGF2ZSBpdHMgcGFyZW50IHNldCB0byBgYm9keWAuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgY29udmV4IGh1bGwgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNvbXB1dGVkIGFuZCBzZXQgb24gYGJvZHlgLCB1bmxlc3MgYGF1dG9IdWxsYCBpcyBzZXQgdG8gYGZhbHNlLmBcbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBlbnN1cmUgdGhhdCB0aGUgZmlyc3QgcGFydCBpbiBgYm9keS5wYXJ0c2Agd2lsbCBhbHdheXMgYmUgdGhlIGBib2R5YC5cbiAgICAgKiBAbWV0aG9kIHNldFBhcnRzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIFtib2R5XSBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2F1dG9IdWxsPXRydWVdXG4gICAgICovXG4gICAgQm9keS5zZXRQYXJ0cyA9IGZ1bmN0aW9uKGJvZHksIHBhcnRzLCBhdXRvSHVsbCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICAvLyBhZGQgYWxsIHRoZSBwYXJ0cywgZW5zdXJpbmcgdGhhdCB0aGUgZmlyc3QgcGFydCBpcyBhbHdheXMgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMCk7XG4gICAgICAgIGJvZHkucGFydHMubGVuZ3RoID0gMDtcbiAgICAgICAgYm9keS5wYXJ0cy5wdXNoKGJvZHkpO1xuICAgICAgICBib2R5LnBhcmVudCA9IGJvZHk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IGJvZHkpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBhcmVudCA9IGJvZHk7XG4gICAgICAgICAgICAgICAgYm9keS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGF1dG9IdWxsID0gdHlwZW9mIGF1dG9IdWxsICE9PSAndW5kZWZpbmVkJyA/IGF1dG9IdWxsIDogdHJ1ZTtcblxuICAgICAgICAvLyBmaW5kIHRoZSBjb252ZXggaHVsbCBvZiBhbGwgcGFydHMgdG8gc2V0IG9uIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBpZiAoYXV0b0h1bGwpIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQocGFydHNbaV0udmVydGljZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0KHZlcnRpY2VzKTtcblxuICAgICAgICAgICAgdmFyIGh1bGwgPSBWZXJ0aWNlcy5odWxsKHZlcnRpY2VzKSxcbiAgICAgICAgICAgICAgICBodWxsQ2VudHJlID0gVmVydGljZXMuY2VudHJlKGh1bGwpO1xuXG4gICAgICAgICAgICBCb2R5LnNldFZlcnRpY2VzKGJvZHksIGh1bGwpO1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGh1bGxDZW50cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VtIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgdmFyIHRvdGFsID0gQm9keS5fdG90YWxQcm9wZXJ0aWVzKGJvZHkpO1xuXG4gICAgICAgIGJvZHkuYXJlYSA9IHRvdGFsLmFyZWE7XG4gICAgICAgIGJvZHkucGFyZW50ID0gYm9keTtcbiAgICAgICAgYm9keS5wb3NpdGlvbi54ID0gdG90YWwuY2VudHJlLng7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueSA9IHRvdGFsLmNlbnRyZS55O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gdG90YWwuY2VudHJlLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSB0b3RhbC5jZW50cmUueTtcblxuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgdG90YWwubWFzcyk7XG4gICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB0b3RhbC5pbmVydGlhKTtcbiAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB0b3RhbC5jZW50cmUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNlbnRyZSBvZiBtYXNzIG9mIHRoZSBib2R5LiBcbiAgICAgKiBUaGUgYGNlbnRyZWAgaXMgYSB2ZWN0b3IgaW4gd29ybGQtc3BhY2UgdW5sZXNzIGByZWxhdGl2ZWAgaXMgc2V0LCBpbiB3aGljaCBjYXNlIGl0IGlzIGEgdHJhbnNsYXRpb24uXG4gICAgICogVGhlIGNlbnRyZSBvZiBtYXNzIGlzIHRoZSBwb2ludCB0aGUgYm9keSByb3RhdGVzIGFib3V0IGFuZCBjYW4gYmUgdXNlZCB0byBzaW11bGF0ZSBub24tdW5pZm9ybSBkZW5zaXR5LlxuICAgICAqIFRoaXMgaXMgZXF1YWwgdG8gbW92aW5nIGBib2R5LnBvc2l0aW9uYCBidXQgbm90IHRoZSBgYm9keS52ZXJ0aWNlc2AuXG4gICAgICogSW52YWxpZCBpZiB0aGUgYGNlbnRyZWAgZmFsbHMgb3V0c2lkZSB0aGUgYm9keSdzIGNvbnZleCBodWxsLlxuICAgICAqIEBtZXRob2Qgc2V0Q2VudHJlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGNlbnRyZVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gcmVsYXRpdmVcbiAgICAgKi9cbiAgICBCb2R5LnNldENlbnRyZSA9IGZ1bmN0aW9uKGJvZHksIGNlbnRyZSwgcmVsYXRpdmUpIHtcbiAgICAgICAgaWYgKCFyZWxhdGl2ZSkge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGNlbnRyZS54IC0gKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGNlbnRyZS55IC0gKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ID0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgPSBjZW50cmUueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGNlbnRyZS55O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGNlbnRyZS55O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBib2R5IGluc3RhbnRseS4gVmVsb2NpdHksIGFuZ2xlLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqL1xuICAgIEJvZHkuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihib2R5LCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKHBvc2l0aW9uLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBkZWx0YS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGRlbHRhLnk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBkZWx0YS55O1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGRlbHRhKTtcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ2xlIG9mIHRoZSBib2R5IGluc3RhbnRseS4gQW5ndWxhciB2ZWxvY2l0eSwgcG9zaXRpb24sIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ2xlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgQm9keS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGJvZHksIGFuZ2xlKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IGFuZ2xlIC0gYm9keS5hbmdsZTtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgKz0gZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LmFuZ2xlICs9IGRlbHRhO1xuICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGRlbHRhLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgZGVsdGEsIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpbmVhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBpbnN0YW50bHkuIFBvc2l0aW9uLCBhbmdsZSwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBAbWV0aG9kIHNldFZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm9keS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLnggLSB2ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55IC0gdmVsb2NpdHkueTtcbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gdmVsb2NpdHkueDtcbiAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gdmVsb2NpdHkueTtcbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ3VsYXIgdmVsb2NpdHkgb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBQb3NpdGlvbiwgYW5nbGUsIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC4gU2VlIGFsc28gYEJvZHkuYXBwbHlGb3JjZWAuXG4gICAgICogQG1ldGhvZCBzZXRBbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZSAtIHZlbG9jaXR5O1xuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IE1hdGguYWJzKGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYSBib2R5IGJ5IGEgZ2l2ZW4gdmVjdG9yIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uLCB3aXRob3V0IGltcGFydGluZyBhbnkgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKi9cbiAgICBCb2R5LnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGJvZHksIHRyYW5zbGF0aW9uKSB7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgVmVjdG9yLmFkZChib2R5LnBvc2l0aW9uLCB0cmFuc2xhdGlvbikpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgYm9keSBieSBhIGdpdmVuIGFuZ2xlIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IGFuZ2xlLCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcG9pbnRdXG4gICAgICovXG4gICAgQm9keS5yb3RhdGUgPSBmdW5jdGlvbihib2R5LCByb3RhdGlvbiwgcG9pbnQpIHtcbiAgICAgICAgaWYgKCFwb2ludCkge1xuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKSxcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgYm9keS5hbmdsZSArIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGJvZHksIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50IChkZWZhdWx0IGlzIGJvZHkgY2VudHJlKS5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BvaW50XVxuICAgICAqL1xuICAgIEJvZHkuc2NhbGUgPSBmdW5jdGlvbihib2R5LCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpIHtcbiAgICAgICAgdmFyIHRvdGFsQXJlYSA9IDAsXG4gICAgICAgICAgICB0b3RhbEluZXJ0aWEgPSAwO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgYm9keS5wb3NpdGlvbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgLy8gc2NhbGUgdmVydGljZXNcbiAgICAgICAgICAgIFZlcnRpY2VzLnNjYWxlKHBhcnQudmVydGljZXMsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBwYXJ0LmF4ZXMgPSBBeGVzLmZyb21WZXJ0aWNlcyhwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIHBhcnQuYXJlYSA9IFZlcnRpY2VzLmFyZWEocGFydC52ZXJ0aWNlcyk7XG4gICAgICAgICAgICBCb2R5LnNldE1hc3MocGFydCwgYm9keS5kZW5zaXR5ICogcGFydC5hcmVhKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGluZXJ0aWEgKHJlcXVpcmVzIHZlcnRpY2VzIHRvIGJlIGF0IG9yaWdpbilcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IC1wYXJ0LnBvc2l0aW9uLngsIHk6IC1wYXJ0LnBvc2l0aW9uLnkgfSk7XG4gICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEocGFydCwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShwYXJ0LnZlcnRpY2VzLCBwYXJ0Lm1hc3MpKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IHBhcnQucG9zaXRpb24ueCwgeTogcGFydC5wb3NpdGlvbi55IH0pO1xuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbEFyZWEgKz0gcGFydC5hcmVhO1xuICAgICAgICAgICAgICAgIHRvdGFsSW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjYWxlIHBvc2l0aW9uXG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggPSBwb2ludC54ICsgKHBhcnQucG9zaXRpb24ueCAtIHBvaW50LngpICogc2NhbGVYO1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ID0gcG9pbnQueSArIChwYXJ0LnBvc2l0aW9uLnkgLSBwb2ludC55KSAqIHNjYWxlWTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvdW5kc1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYm9keS5hcmVhID0gdG90YWxBcmVhO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogdG90YWxBcmVhKTtcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWxJbmVydGlhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBjaXJjbGVzXG4gICAgICAgIGlmIChib2R5LmNpcmNsZVJhZGl1cykgeyBcbiAgICAgICAgICAgIGlmIChzY2FsZVggPT09IHNjYWxlWSkge1xuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzICo9IHNjYWxlWDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYm9keSBpcyBubyBsb25nZXIgYSBjaXJjbGVcbiAgICAgICAgICAgICAgICBib2R5LmNpcmNsZVJhZGl1cyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzaW11bGF0aW9uIHN0ZXAgZm9yIHRoZSBnaXZlbiBgYm9keWAsIGluY2x1ZGluZyB1cGRhdGluZyBwb3NpdGlvbiBhbmQgYW5nbGUgdXNpbmcgVmVybGV0IGludGVncmF0aW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhVGltZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29ycmVjdGlvblxuICAgICAqL1xuICAgIEJvZHkudXBkYXRlID0gZnVuY3Rpb24oYm9keSwgZGVsdGFUaW1lLCB0aW1lU2NhbGUsIGNvcnJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhVGltZVNxdWFyZWQgPSBNYXRoLnBvdyhkZWx0YVRpbWUgKiB0aW1lU2NhbGUgKiBib2R5LnRpbWVTY2FsZSwgMik7XG5cbiAgICAgICAgLy8gZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxuICAgICAgICB2YXIgZnJpY3Rpb25BaXIgPSAxIC0gYm9keS5mcmljdGlvbkFpciAqIHRpbWVTY2FsZSAqIGJvZHkudGltZVNjYWxlLFxuICAgICAgICAgICAgdmVsb2NpdHlQcmV2WCA9IGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngsXG4gICAgICAgICAgICB2ZWxvY2l0eVByZXZZID0gYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueTtcblxuICAgICAgICAvLyB1cGRhdGUgdmVsb2NpdHkgd2l0aCBWZXJsZXQgaW50ZWdyYXRpb25cbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gKHZlbG9jaXR5UHJldlggKiBmcmljdGlvbkFpciAqIGNvcnJlY3Rpb24pICsgKGJvZHkuZm9yY2UueCAvIGJvZHkubWFzcykgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAodmVsb2NpdHlQcmV2WSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS5mb3JjZS55IC8gYm9keS5tYXNzKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG5cbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcbiAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueDtcbiAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueTtcblxuICAgICAgICAvLyB1cGRhdGUgYW5ndWxhciB2ZWxvY2l0eSB3aXRoIFZlcmxldCBpbnRlZ3JhdGlvblxuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9ICgoYm9keS5hbmdsZSAtIGJvZHkuYW5nbGVQcmV2KSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS50b3JxdWUgLyBib2R5LmluZXJ0aWEpICogZGVsdGFUaW1lU3F1YXJlZDtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICBib2R5LmFuZ2xlICs9IGJvZHkuYW5ndWxhclZlbG9jaXR5O1xuXG4gICAgICAgIC8vIHRyYWNrIHNwZWVkIGFuZCBhY2NlbGVyYXRpb25cbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgYm9keSBnZW9tZXRyeVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2R5LmFuZ3VsYXJWZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGEgZm9yY2UgdG8gYSBib2R5IGZyb20gYSBnaXZlbiB3b3JsZC1zcGFjZSBwb3NpdGlvbiwgaW5jbHVkaW5nIHJlc3VsdGluZyB0b3JxdWUuXG4gICAgICogQG1ldGhvZCBhcHBseUZvcmNlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGZvcmNlXG4gICAgICovXG4gICAgQm9keS5hcHBseUZvcmNlID0gZnVuY3Rpb24oYm9keSwgcG9zaXRpb24sIGZvcmNlKSB7XG4gICAgICAgIGJvZHkuZm9yY2UueCArPSBmb3JjZS54O1xuICAgICAgICBib2R5LmZvcmNlLnkgKz0gZm9yY2UueTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHsgeDogcG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb24ueSB9O1xuICAgICAgICBib2R5LnRvcnF1ZSArPSBvZmZzZXQueCAqIGZvcmNlLnkgLSBvZmZzZXQueSAqIGZvcmNlLng7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bXMgb2YgdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keS5cbiAgICAgKiBAbWV0aG9kIF90b3RhbFByb3BlcnRpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBCb2R5Ll90b3RhbFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0OlxuICAgICAgICAvLyBodHRwczovL2Vjb3Vyc2VzLm91LmVkdS9jZ2ktYmluL2Vib29rLmNnaT9kb2M9JnRvcGljPXN0JmNoYXBfc2VjPTA3LjImcGFnZT10aGVvcnlcbiAgICAgICAgLy8gaHR0cDovL291dHB1dC50by9zaWRld2F5L2RlZmF1bHQuYXNwP3Fubz0xMjExMDAwODdcblxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIG1hc3M6IDAsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgaW5lcnRpYTogMCxcbiAgICAgICAgICAgIGNlbnRyZTogeyB4OiAwLCB5OiAwIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdW0gdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBmb3IgKHZhciBpID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXSxcbiAgICAgICAgICAgICAgICBtYXNzID0gcGFydC5tYXNzICE9PSBJbmZpbml0eSA/IHBhcnQubWFzcyA6IDE7XG5cbiAgICAgICAgICAgIHByb3BlcnRpZXMubWFzcyArPSBtYXNzO1xuICAgICAgICAgICAgcHJvcGVydGllcy5hcmVhICs9IHBhcnQuYXJlYTtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuaW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmNlbnRyZSA9IFZlY3Rvci5hZGQocHJvcGVydGllcy5jZW50cmUsIFZlY3Rvci5tdWx0KHBhcnQucG9zaXRpb24sIG1hc3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnRpZXMuY2VudHJlID0gVmVjdG9yLmRpdihwcm9wZXJ0aWVzLmNlbnRyZSwgcHJvcGVydGllcy5tYXNzKTtcblxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGJvZHkgc3RhcnRzIHNsZWVwaW5nICh3aGVyZSBgdGhpc2AgaXMgdGhlIGJvZHkpLlxuICAgICpcbiAgICAqIEBldmVudCBzbGVlcFN0YXJ0XG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgc3RhcnRlZCBzbGVlcGluZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBib2R5IGVuZHMgc2xlZXBpbmcgKHdoZXJlIGB0aGlzYCBpcyB0aGUgYm9keSkuXG4gICAgKlxuICAgICogQGV2ZW50IHNsZWVwRW5kXG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgZW5kZWQgc2xlZXBpbmdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYEJvZHkuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImJvZHlcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJiaXRyYXJ5IGBTdHJpbmdgIG5hbWUgdG8gaGVscCB0aGUgdXNlciBpZGVudGlmeSBhbmQgbWFuYWdlIGJvZGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQm9keVwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBib2RpZXMgdGhhdCBtYWtlIHVwIHRoaXMgYm9keS4gXG4gICAgICogVGhlIGZpcnN0IGJvZHkgaW4gdGhlIGFycmF5IG11c3QgYWx3YXlzIGJlIGEgc2VsZiByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgYm9keSBpbnN0YW5jZS5cbiAgICAgKiBBbGwgYm9kaWVzIGluIHRoZSBgcGFydHNgIGFycmF5IHRvZ2V0aGVyIGZvcm0gYSBzaW5nbGUgcmlnaWQgY29tcG91bmQgYm9keS5cbiAgICAgKiBQYXJ0cyBhcmUgYWxsb3dlZCB0byBvdmVybGFwLCBoYXZlIGdhcHMgb3IgaG9sZXMgb3IgZXZlbiBmb3JtIGNvbmNhdmUgYm9kaWVzLlxuICAgICAqIFBhcnRzIHRoZW1zZWx2ZXMgc2hvdWxkIG5ldmVyIGJlIGFkZGVkIHRvIGEgYFdvcmxkYCwgb25seSB0aGUgcGFyZW50IGJvZHkgc2hvdWxkIGJlLlxuICAgICAqIFVzZSBgQm9keS5zZXRQYXJ0c2Agd2hlbiBzZXR0aW5nIHBhcnRzIHRvIGVuc3VyZSBjb3JyZWN0IHVwZGF0ZXMgb2YgYWxsIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFydHNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxmIHJlZmVyZW5jZSBpZiB0aGUgYm9keSBpcyBfbm90XyBhIHBhcnQgb2YgYW5vdGhlciBib2R5LlxuICAgICAqIE90aGVyd2lzZSB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBib2R5IHRoYXQgdGhpcyBpcyBhIHBhcnQgb2YuXG4gICAgICogU2VlIGBib2R5LnBhcnRzYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHNwZWNpZnlpbmcgdGhlIGFuZ2xlIG9mIHRoZSBib2R5LCBpbiByYWRpYW5zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFuZ2xlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYFZlY3RvcmAgb2JqZWN0cyB0aGF0IHNwZWNpZnkgdGhlIGNvbnZleCBodWxsIG9mIHRoZSByaWdpZCBib2R5LlxuICAgICAqIFRoZXNlIHNob3VsZCBiZSBwcm92aWRlZCBhYm91dCB0aGUgb3JpZ2luIGAoMCwgMClgLiBFLmcuXG4gICAgICpcbiAgICAgKiAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dXG4gICAgICpcbiAgICAgKiBXaGVuIHBhc3NlZCB2aWEgYEJvZHkuY3JlYXRlYCwgdGhlIHZlcnRpY2VzIGFyZSB0cmFuc2xhdGVkIHJlbGF0aXZlIHRvIGBib2R5LnBvc2l0aW9uYCAoaS5lLiB3b3JsZC1zcGFjZSwgYW5kIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyBzaW11bGF0aW9uKS5cbiAgICAgKiBUaGUgYFZlY3RvcmAgb2JqZWN0cyBhcmUgYWxzbyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIHByb3BlcnRpZXMgcmVxdWlyZWQgZm9yIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uLiBcbiAgICAgKlxuICAgICAqIE90aGVyIHByb3BlcnRpZXMgc3VjaCBhcyBgaW5lcnRpYWAgYW5kIGBib3VuZHNgIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgcGFzc2VkIHZlcnRpY2VzICh1bmxlc3MgcHJvdmlkZWQgdmlhIGBvcHRpb25zYCkuXG4gICAgICogQ29uY2F2ZSBodWxscyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQuIFRoZSBtb2R1bGUgYE1hdHRlci5WZXJ0aWNlc2AgY29udGFpbnMgdXNlZnVsIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCB2ZXJ0aWNlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2ZXJ0aWNlc1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXJyZW50IHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIHRoZSBib2R5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGZvcmNlIHRvIGFwcGx5IGluIHRoZSBjdXJyZW50IHN0ZXAuIEl0IGlzIHplcm9lZCBhZnRlciBldmVyeSBgQm9keS51cGRhdGVgLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmb3JjZVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0b3JxdWUgKHR1cm5pbmcgZm9yY2UpIHRvIGFwcGx5IGluIHRoZSBjdXJyZW50IHN0ZXAuIEl0IGlzIHplcm9lZCBhZnRlciBldmVyeSBgQm9keS51cGRhdGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRvcnF1ZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IHNwZWVkIG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seSBhbmQgYWx3YXlzIHBvc2l0aXZlIChpdCdzIHRoZSBtYWduaXR1ZGUgb2YgYGJvZHkudmVsb2NpdHlgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBzcGVlZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IGFuZ3VsYXIgc3BlZWQgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5IGFuZCBhbHdheXMgcG9zaXRpdmUgKGl0J3MgdGhlIG1hZ25pdHVkZSBvZiBgYm9keS5hbmd1bGFyVmVsb2NpdHlgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyU3BlZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCB2ZWxvY2l0eSBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkuIFxuICAgICAqIElmIHlvdSBuZWVkIHRvIG1vZGlmeSBhIGJvZHkncyB2ZWxvY2l0eSBkaXJlY3RseSwgeW91IHNob3VsZCBlaXRoZXIgYXBwbHkgYSBmb3JjZSBvciBzaW1wbHkgY2hhbmdlIHRoZSBib2R5J3MgYHBvc2l0aW9uYCAoYXMgdGhlIGVuZ2luZSB1c2VzIHBvc2l0aW9uLVZlcmxldCBpbnRlZ3JhdGlvbikuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgdmVsb2NpdHlcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgYW5ndWxhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkuIFxuICAgICAqIElmIHlvdSBuZWVkIHRvIG1vZGlmeSBhIGJvZHkncyBhbmd1bGFyIHZlbG9jaXR5IGRpcmVjdGx5LCB5b3Ugc2hvdWxkIGFwcGx5IGEgdG9ycXVlIG9yIHNpbXBseSBjaGFuZ2UgdGhlIGJvZHkncyBgYW5nbGVgIChhcyB0aGUgZW5naW5lIHVzZXMgcG9zaXRpb24tVmVybGV0IGludGVncmF0aW9uKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIGJvZHkgaXMgY29uc2lkZXJlZCBzdGF0aWMuIEEgc3RhdGljIGJvZHkgY2FuIG5ldmVyIGNoYW5nZSBwb3NpdGlvbiBvciBhbmdsZSBhbmQgaXMgY29tcGxldGVseSBmaXhlZC5cbiAgICAgKiBJZiB5b3UgbmVlZCB0byBzZXQgYSBib2R5IGFzIHN0YXRpYyBhZnRlciBpdHMgY3JlYXRpb24sIHlvdSBzaG91bGQgdXNlIGBCb2R5LnNldFN0YXRpY2AgYXMgdGhpcyByZXF1aXJlcyBtb3JlIHRoYW4ganVzdCBzZXR0aW5nIHRoaXMgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc1N0YXRpY1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYSBib2R5IGlzIGEgc2Vuc29yLiBTZW5zb3IgdHJpZ2dlcnMgY29sbGlzaW9uIGV2ZW50cywgYnV0IGRvZXNuJ3QgcmVhY3Qgd2l0aCBjb2xsaWRpbmcgYm9keSBwaHlzaWNhbGx5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2Vuc29yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYm9keSBpcyBjb25zaWRlcmVkIHNsZWVwaW5nLiBBIHNsZWVwaW5nIGJvZHkgYWN0cyBzaW1pbGFyIHRvIGEgc3RhdGljIGJvZHksIGV4Y2VwdCBpdCBpcyBvbmx5IHRlbXBvcmFyeSBhbmQgY2FuIGJlIGF3b2tlbi5cbiAgICAgKiBJZiB5b3UgbmVlZCB0byBzZXQgYSBib2R5IGFzIHNsZWVwaW5nLCB5b3Ugc2hvdWxkIHVzZSBgU2xlZXBpbmcuc2V0YCBhcyB0aGlzIHJlcXVpcmVzIG1vcmUgdGhhbiBqdXN0IHNldHRpbmcgdGhpcyBmbGFnLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBhbW91bnQgb2YgbW92ZW1lbnQgYSBib2R5IGN1cnJlbnRseSBoYXMgKGEgY29tYmluYXRpb24gb2YgYHNwZWVkYCBhbmQgYGFuZ3VsYXJTcGVlZGApLiBJdCBpcyByZWFkLW9ubHkgYW5kIGFsd2F5cyBwb3NpdGl2ZS5cbiAgICAgKiBJdCBpcyB1c2VkIGFuZCB1cGRhdGVkIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgZHVyaW5nIHNpbXVsYXRpb24gdG8gZGVjaWRlIGlmIGEgYm9keSBoYXMgY29tZSB0byByZXN0LlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IG1vdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgdXBkYXRlcyBpbiB3aGljaCB0aGlzIGJvZHkgbXVzdCBoYXZlIG5lYXItemVybyB2ZWxvY2l0eSBiZWZvcmUgaXQgaXMgc2V0IGFzIHNsZWVwaW5nIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgKGlmIHNsZWVwaW5nIGlzIGVuYWJsZWQgYnkgdGhlIGVuZ2luZSkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc2xlZXBUaHJlc2hvbGRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2MFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHksIHRoYXQgaXMgaXRzIG1hc3MgcGVyIHVuaXQgYXJlYS5cbiAgICAgKiBJZiB5b3UgcGFzcyB0aGUgZGVuc2l0eSB2aWEgYEJvZHkuY3JlYXRlYCB0aGUgYG1hc3NgIHByb3BlcnR5IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmb3IgeW91IGJhc2VkIG9uIHRoZSBzaXplIChhcmVhKSBvZiB0aGUgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgZ2VuZXJhbGx5IHByZWZlcmFibGUgdG8gc2ltcGx5IHNldHRpbmcgbWFzcyBhbmQgYWxsb3dzIGZvciBtb3JlIGludHVpdGl2ZSBkZWZpbml0aW9uIG9mIG1hdGVyaWFscyAoZS5nLiByb2NrIGhhcyBhIGhpZ2hlciBkZW5zaXR5IHRoYW4gd29vZCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVuc2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMDAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbWFzcyBvZiB0aGUgYm9keSwgYWx0aG91Z2ggaXQgbWF5IGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gc3BlY2lmeSB0aGUgYGRlbnNpdHlgIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW52ZXJzZU1hc3NgIHByb3BlcnR5IChgMSAvIG1hc3NgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtYXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgaW52ZXJzZSBtYXNzIG9mIHRoZSBib2R5IChgMSAvIG1hc3NgKS5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5tYXNzYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpbnZlcnNlTWFzc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChpLmUuIHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIGJvZHkuXG4gICAgICogSXQgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBhbmQgZGVuc2l0eSBpbiBgQm9keS5jcmVhdGVgLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmludmVyc2VJbmVydGlhYCBwcm9wZXJ0eSAoYDEgLyBpbmVydGlhYCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaW5lcnRpYVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGludmVyc2UgbW9tZW50IG9mIGluZXJ0aWEgb2YgdGhlIGJvZHkgKGAxIC8gaW5lcnRpYWApLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmluZXJ0aWFgIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGludmVyc2VJbmVydGlhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgcmVzdGl0dXRpb24gKGVsYXN0aWNpdHkpIG9mIHRoZSBib2R5LiBUaGUgdmFsdWUgaXMgYWx3YXlzIHBvc2l0aXZlIGFuZCBpcyBpbiB0aGUgcmFuZ2UgYCgwLCAxKWAuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgY29sbGlzaW9ucyBtYXkgYmUgcGVyZmVjdGx5IGluZWxhc3RpYyBhbmQgbm8gYm91bmNpbmcgbWF5IG9jY3VyLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwLjhgIG1lYW5zIHRoZSBib2R5IG1heSBib3VuY2UgYmFjayB3aXRoIGFwcHJveGltYXRlbHkgODAlIG9mIGl0cyBraW5ldGljIGVuZXJneS5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgcmVzdGl0dXRpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqICAgICBNYXRoLm1heChib2R5QS5yZXN0aXR1dGlvbiwgYm9keUIucmVzdGl0dXRpb24pXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVzdGl0dXRpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZnJpY3Rpb24gb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGF0IHRoZSBib2R5IG1heSBzbGlkZSBpbmRlZmluaXRlbHkuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGJvZHkgbWF5IGNvbWUgdG8gYSBzdG9wIGFsbW9zdCBpbnN0YW50bHkgYWZ0ZXIgYSBmb3JjZSBpcyBhcHBsaWVkLlxuICAgICAqXG4gICAgICogVGhlIGVmZmVjdHMgb2YgdGhlIHZhbHVlIG1heSBiZSBub24tbGluZWFyLiBcbiAgICAgKiBIaWdoIHZhbHVlcyBtYXkgYmUgdW5zdGFibGUgZGVwZW5kaW5nIG9uIHRoZSBib2R5LlxuICAgICAqIFRoZSBlbmdpbmUgdXNlcyBhIENvdWxvbWIgZnJpY3Rpb24gbW9kZWwgaW5jbHVkaW5nIHN0YXRpYyBhbmQga2luZXRpYyBmcmljdGlvbi5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgZnJpY3Rpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqICAgICBNYXRoLm1pbihib2R5QS5mcmljdGlvbiwgYm9keUIuZnJpY3Rpb24pXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzdGF0aWMgZnJpY3Rpb24gb2YgdGhlIGJvZHkgKGluIHRoZSBDb3Vsb21iIGZyaWN0aW9uIG1vZGVsKS4gXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGJvZHkgd2lsbCBuZXZlciAnc3RpY2snIHdoZW4gaXQgaXMgbmVhcmx5IHN0YXRpb25hcnkgYW5kIG9ubHkgZHluYW1pYyBgZnJpY3Rpb25gIGlzIHVzZWQuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUgKGUuZy4gYDEwYCksIHRoZSBtb3JlIGZvcmNlIGl0IHdpbGwgdGFrZSB0byBpbml0aWFsbHkgZ2V0IHRoZSBib2R5IG1vdmluZyB3aGVuIG5lYXJseSBzdGF0aW9uYXJ5LlxuICAgICAqIFRoaXMgdmFsdWUgaXMgbXVsdGlwbGllZCB3aXRoIHRoZSBgZnJpY3Rpb25gIHByb3BlcnR5IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGNoYW5nZSBgZnJpY3Rpb25gIGFuZCBtYWludGFpbiBhbiBhcHByb3ByaWF0ZSBhbW91bnQgb2Ygc3RhdGljIGZyaWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uU3RhdGljXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC41XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgYWlyIGZyaWN0aW9uIG9mIHRoZSBib2R5IChhaXIgcmVzaXN0YW5jZSkuIFxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBib2R5IHdpbGwgbmV2ZXIgc2xvdyBhcyBpdCBtb3ZlcyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgZmFzdGVyIGEgYm9keSBzbG93cyB3aGVuIG1vdmluZyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBlZmZlY3RzIG9mIHRoZSB2YWx1ZSBhcmUgbm9uLWxpbmVhci4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25BaXJcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGZpbHRlcmluZyBwcm9wZXJ0aWVzIG9mIHRoaXMgYm9keS5cbiAgICAgKlxuICAgICAqIENvbGxpc2lvbnMgYmV0d2VlbiB0d28gYm9kaWVzIHdpbGwgb2JleSB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSB0aGUgc2FtZSBub24temVybyB2YWx1ZSBvZiBgY29sbGlzaW9uRmlsdGVyLmdyb3VwYCxcbiAgICAgKiAgIHRoZXkgd2lsbCBhbHdheXMgY29sbGlkZSBpZiB0aGUgdmFsdWUgaXMgcG9zaXRpdmUsIGFuZCB0aGV5IHdpbGwgbmV2ZXIgY29sbGlkZVxuICAgICAqICAgaWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlLlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIG9mIGBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBgIG9yIGlmIG9uZVxuICAgICAqICAgKG9yIGJvdGgpIG9mIHRoZSBib2RpZXMgaGFzIGEgdmFsdWUgb2YgMCwgdGhlbiB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcyBhcHBseSBhcyBmb2xsb3dzOlxuICAgICAqXG4gICAgICogRWFjaCBib2R5IGJlbG9uZ3MgdG8gYSBjb2xsaXNpb24gY2F0ZWdvcnksIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIuY2F0ZWdvcnlgLiBUaGlzXG4gICAgICogdmFsdWUgaXMgdXNlZCBhcyBhIGJpdCBmaWVsZCBhbmQgdGhlIGNhdGVnb3J5IHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIG1lYW5pbmcgdGhhdFxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgcG93ZXIgb2YgdHdvIGluIHRoZSByYW5nZSBbMSwgMl4zMV0uIFRodXMsIHRoZXJlIGFyZSAzMlxuICAgICAqIGRpZmZlcmVudCBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBFYWNoIGJvZHkgYWxzbyBkZWZpbmVzIGEgY29sbGlzaW9uIGJpdG1hc2ssIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIubWFza2Agd2hpY2ggc3BlY2lmaWVzXG4gICAgICogdGhlIGNhdGVnb3JpZXMgaXQgY29sbGlkZXMgd2l0aCAodGhlIHZhbHVlIGlzIHRoZSBiaXR3aXNlIEFORCB2YWx1ZSBvZiBhbGwgdGhlc2UgY2F0ZWdvcmllcykuXG4gICAgICpcbiAgICAgKiBVc2luZyB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcywgdHdvIGJvZGllcyBgQWAgYW5kIGBCYCBjb2xsaWRlIGlmIGVhY2ggaW5jbHVkZXMgdGhlIG90aGVyJ3NcbiAgICAgKiBjYXRlZ29yeSBpbiBpdHMgbWFzaywgaS5lLiBgKGNhdGVnb3J5QSAmIG1hc2tCKSAhPT0gMGAgYW5kIGAoY2F0ZWdvcnlCICYgbWFza0EpICE9PSAwYFxuICAgICAqIGFyZSBib3RoIHRydWUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBJbnRlZ2VyIGBOdW1iZXJgLCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGdyb3VwIHRoaXMgYm9keSBiZWxvbmdzIHRvLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5ncm91cFxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYml0IGZpZWxkIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gY2F0ZWdvcnkgdGhpcyBib2R5IGJlbG9uZ3MgdG8uXG4gICAgICogVGhlIGNhdGVnb3J5IHZhbHVlIHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIGZvciBleGFtcGxlIGAweDAwMDFgLlxuICAgICAqIFRoaXMgbWVhbnMgdGhlcmUgYXJlIHVwIHRvIDMyIHVuaXF1ZSBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLmNhdGVnb3J5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiaXQgbWFzayB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGNhdGVnb3JpZXMgdGhpcyBib2R5IG1heSBjb2xsaWRlIHdpdGguXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLm1hc2tcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAtMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyBhIHRvbGVyYW5jZSBvbiBob3cgZmFyIGEgYm9keSBpcyBhbGxvd2VkIHRvICdzaW5rJyBvciByb3RhdGUgaW50byBvdGhlciBib2RpZXMuXG4gICAgICogQXZvaWQgY2hhbmdpbmcgdGhpcyB2YWx1ZSB1bmxlc3MgeW91IHVuZGVyc3RhbmQgdGhlIHB1cnBvc2Ugb2YgYHNsb3BgIGluIHBoeXNpY3MgZW5naW5lcy5cbiAgICAgKiBUaGUgZGVmYXVsdCBzaG91bGQgZ2VuZXJhbGx5IHN1ZmZpY2UsIGFsdGhvdWdoIHZlcnkgbGFyZ2UgYm9kaWVzIG1heSByZXF1aXJlIGxhcmdlciB2YWx1ZXMgZm9yIHN0YWJsZSBzdGFja2luZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzbG9wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wNVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGFsbG93cyBwZXItYm9keSB0aW1lIHNjYWxpbmcsIGUuZy4gYSBmb3JjZS1maWVsZCB3aGVyZSBib2RpZXMgaW5zaWRlIGFyZSBpbiBzbG93LW1vdGlvbiwgd2hpbGUgb3RoZXJzIGFyZSBhdCBmdWxsIHNwZWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWVTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgcmVuZGVyaW5nIHByb3BlcnRpZXMgdG8gYmUgY29uc3VtZWQgYnkgdGhlIG1vZHVsZSBgTWF0dGVyLlJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJvZHkgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci52aXNpYmxlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5vcGFjaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IGRlZmluZXMgdGhlIHNwcml0ZSBwcm9wZXJ0aWVzIHRvIHVzZSB3aGVuIHJlbmRlcmluZywgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGVcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gdXNlIGFzIHRoZSBzcHJpdGUgdGV4dHVyZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUudGV4dHVyZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgICBcbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc2NhbGluZyBpbiB0aGUgeC1heGlzIGZvciB0aGUgc3ByaXRlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS54U2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc2NhbGluZyBpbiB0aGUgeS1heGlzIGZvciB0aGUgc3ByaXRlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS55U2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG9mZnNldCBpbiB0aGUgeC1heGlzIGZvciB0aGUgc3ByaXRlIChub3JtYWxpc2VkIGJ5IHRleHR1cmUgd2lkdGgpLlxuICAgICAgKlxuICAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS54T2Zmc2V0XG4gICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAqL1xuXG4gICAgLyoqXG4gICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBvZmZzZXQgaW4gdGhlIHktYXhpcyBmb3IgdGhlIHNwcml0ZSAobm9ybWFsaXNlZCBieSB0ZXh0dXJlIGhlaWdodCkuXG4gICAgICAqXG4gICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnlPZmZzZXRcbiAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbGluZSB3aWR0aCB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgb3V0bGluZSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIG5vIG91dGxpbmUgd2lsbCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIubGluZVdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIGZpbGwgc3R5bGUgdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogSXQgaXMgdGhlIHNhbWUgYXMgd2hlbiB1c2luZyBhIGNhbnZhcywgc28gaXQgYWNjZXB0cyBDU1Mgc3R5bGUgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5maWxsU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBzdHJva2Ugc3R5bGUgdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IG91dGxpbmUgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnN0cm9rZVN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB1bmlxdWUgYXhpcyB2ZWN0b3JzIChlZGdlIG5vcm1hbHMpIHVzZWQgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24uXG4gICAgICogVGhlc2UgYXJlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBnaXZlbiBjb252ZXggaHVsbCAoYHZlcnRpY2VzYCBhcnJheSkgaW4gYEJvZHkuY3JlYXRlYC5cbiAgICAgKiBUaGV5IGFyZSBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgdGhlIHNpbXVsYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYXhlc1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICovXG4gICAgIFxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBhcmVhIG9mIHRoZSBib2R5J3MgY29udmV4IGh1bGwsIGNhbGN1bGF0ZWQgYXQgY3JlYXRpb24gYnkgYEJvZHkuY3JlYXRlYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBhcmVhXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb3VuZHNgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIEFBQkIgcmVnaW9uIGZvciB0aGUgYm9keS5cbiAgICAgKiBJdCBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gY29udmV4IGh1bGwgKGB2ZXJ0aWNlc2AgYXJyYXkpIGluIGBCb2R5LmNyZWF0ZWAgYW5kIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyBzaW11bGF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvdW5kc1xuICAgICAqIEB0eXBlIGJvdW5kc1xuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIHRvIG1hbmFnZSB0aGUgc2xlZXBpbmcgc3RhdGUgb2YgYm9kaWVzLlxuKlxuKiBAY2xhc3MgU2xlZXBpbmdcbiovXG5cbnZhciBTbGVlcGluZyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsZWVwaW5nO1xuXG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgU2xlZXBpbmcuX21vdGlvbldha2VUaHJlc2hvbGQgPSAwLjE4O1xuICAgIFNsZWVwaW5nLl9tb3Rpb25TbGVlcFRocmVzaG9sZCA9IDAuMDg7XG4gICAgU2xlZXBpbmcuX21pbkJpYXMgPSAwLjk7XG5cbiAgICAvKipcbiAgICAgKiBQdXRzIGJvZGllcyB0byBzbGVlcCBvciB3YWtlcyB0aGVtIHVwIGRlcGVuZGluZyBvbiB0aGVpciBtb3Rpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFNsZWVwaW5nLnVwZGF0ZSA9IGZ1bmN0aW9uKGJvZGllcywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciB0aW1lRmFjdG9yID0gdGltZVNjYWxlICogdGltZVNjYWxlICogdGltZVNjYWxlO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBib2RpZXMgc2xlZXBpbmcgc3RhdHVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBtb3Rpb24gPSBib2R5LnNwZWVkICogYm9keS5zcGVlZCArIGJvZHkuYW5ndWxhclNwZWVkICogYm9keS5hbmd1bGFyU3BlZWQ7XG5cbiAgICAgICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGlmIHRoZXkgaGF2ZSBhIGZvcmNlIGFwcGxpZWRcbiAgICAgICAgICAgIGlmIChib2R5LmZvcmNlLnggIT09IDAgfHwgYm9keS5mb3JjZS55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1pbk1vdGlvbiA9IE1hdGgubWluKGJvZHkubW90aW9uLCBtb3Rpb24pLFxuICAgICAgICAgICAgICAgIG1heE1vdGlvbiA9IE1hdGgubWF4KGJvZHkubW90aW9uLCBtb3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGJpYXNlZCBhdmVyYWdlIG1vdGlvbiBlc3RpbWF0aW9uIGJldHdlZW4gZnJhbWVzXG4gICAgICAgICAgICBib2R5Lm1vdGlvbiA9IFNsZWVwaW5nLl9taW5CaWFzICogbWluTW90aW9uICsgKDEgLSBTbGVlcGluZy5fbWluQmlhcykgKiBtYXhNb3Rpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChib2R5LnNsZWVwVGhyZXNob2xkID4gMCAmJiBib2R5Lm1vdGlvbiA8IFNsZWVwaW5nLl9tb3Rpb25TbGVlcFRocmVzaG9sZCAqIHRpbWVGYWN0b3IpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2R5LnNsZWVwQ291bnRlciA+PSBib2R5LnNsZWVwVGhyZXNob2xkKVxuICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvZHkuc2xlZXBDb3VudGVyID4gMCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBzZXQgb2YgY29sbGlkaW5nIHBhaXJzLCB3YWtlcyB0aGUgc2xlZXBpbmcgYm9kaWVzIGludm9sdmVkLlxuICAgICAqIEBtZXRob2QgYWZ0ZXJDb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFNsZWVwaW5nLmFmdGVyQ29sbGlzaW9ucyA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbWVGYWN0b3IgPSB0aW1lU2NhbGUgKiB0aW1lU2NhbGUgKiB0aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gd2FrZSB1cCBib2RpZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBkb24ndCB3YWtlIGluYWN0aXZlIHBhaXJzXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QS5wYXJlbnQsIFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCLnBhcmVudDtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBkb24ndCB3YWtlIGlmIGF0IGxlYXN0IG9uZSBib2R5IGlzIHN0YXRpY1xuICAgICAgICAgICAgaWYgKChib2R5QS5pc1NsZWVwaW5nICYmIGJvZHlCLmlzU2xlZXBpbmcpIHx8IGJvZHlBLmlzU3RhdGljIHx8IGJvZHlCLmlzU3RhdGljKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChib2R5QS5pc1NsZWVwaW5nIHx8IGJvZHlCLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xlZXBpbmdCb2R5ID0gKGJvZHlBLmlzU2xlZXBpbmcgJiYgIWJvZHlBLmlzU3RhdGljKSA/IGJvZHlBIDogYm9keUIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0JvZHkgPSBzbGVlcGluZ0JvZHkgPT09IGJvZHlBID8gYm9keUIgOiBib2R5QTtcblxuICAgICAgICAgICAgICAgIGlmICghc2xlZXBpbmdCb2R5LmlzU3RhdGljICYmIG1vdmluZ0JvZHkubW90aW9uID4gU2xlZXBpbmcuX21vdGlvbldha2VUaHJlc2hvbGQgKiB0aW1lRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChzbGVlcGluZ0JvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvKipcbiAgICAgKiBTZXQgYSBib2R5IGFzIHNsZWVwaW5nIG9yIGF3YWtlLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NsZWVwaW5nXG4gICAgICovXG4gICAgU2xlZXBpbmcuc2V0ID0gZnVuY3Rpb24oYm9keSwgaXNTbGVlcGluZykge1xuICAgICAgICB2YXIgd2FzU2xlZXBpbmcgPSBib2R5LmlzU2xlZXBpbmc7XG5cbiAgICAgICAgaWYgKGlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgIGJvZHkuaXNTbGVlcGluZyA9IHRydWU7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IGJvZHkuc2xlZXBUaHJlc2hvbGQ7XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnggPSAwO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueSA9IDA7XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuXG4gICAgICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgICAgICBib2R5LnNwZWVkID0gMDtcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgICAgIGJvZHkubW90aW9uID0gMDtcblxuICAgICAgICAgICAgaWYgKCF3YXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGJvZHksICdzbGVlcFN0YXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmlzU2xlZXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyID0gMDtcblxuICAgICAgICAgICAgaWYgKHdhc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoYm9keSwgJ3NsZWVwRW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29sbGlzaW9uYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBhIGdpdmVuIHBhaXIgb2YgYm9kaWVzLlxuKlxuKiBGb3IgZWZmaWNpZW50IGRldGVjdGlvbiBiZXR3ZWVuIGEgbGlzdCBvZiBib2RpZXMsIHNlZSBgTWF0dGVyLkRldGVjdG9yYCBhbmQgYE1hdHRlci5RdWVyeWAuXG4qXG4qIFNlZSBgTWF0dGVyLkVuZ2luZWAgZm9yIGNvbGxpc2lvbiBldmVudHMuXG4qXG4qIEBjbGFzcyBDb2xsaXNpb25cbiovXG5cbnZhciBDb2xsaXNpb24gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsaXNpb247XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgX3N1cHBvcnRzID0gW107XG5cbiAgICB2YXIgX292ZXJsYXBBQiA9IHtcbiAgICAgICAgb3ZlcmxhcDogMCxcbiAgICAgICAgYXhpczogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgX292ZXJsYXBCQSA9IHtcbiAgICAgICAgb3ZlcmxhcDogMCxcbiAgICAgICAgYXhpczogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGxpc2lvbiByZWNvcmQuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBIFRoZSBmaXJzdCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiByZWNvcmRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCIFRoZSBzZWNvbmQgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gcmVjb3JkXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9ufSBBIG5ldyBjb2xsaXNpb24gcmVjb3JkXG4gICAgICovXG4gICAgQ29sbGlzaW9uLmNyZWF0ZSA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHBhaXI6IG51bGwsXG4gICAgICAgICAgICBjb2xsaWRlZDogZmFsc2UsXG4gICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICBib2R5QjogYm9keUIsXG4gICAgICAgICAgICBwYXJlbnRBOiBib2R5QS5wYXJlbnQsXG4gICAgICAgICAgICBwYXJlbnRCOiBib2R5Qi5wYXJlbnQsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIG5vcm1hbDogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICB0YW5nZW50OiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHBlbmV0cmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHN1cHBvcnRzOiBbXVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgY29sbGlzaW9uIGJldHdlZW4gdHdvIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcGFyYW0ge3BhaXJzfSBbcGFpcnNdIE9wdGlvbmFsbHkgcmV1c2UgY29sbGlzaW9uIHJlY29yZHMgZnJvbSBleGlzdGluZyBwYWlycy5cbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb258bnVsbH0gQSBjb2xsaXNpb24gcmVjb3JkIGlmIGRldGVjdGVkLCBvdGhlcndpc2UgbnVsbFxuICAgICAqL1xuICAgIENvbGxpc2lvbi5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5QiwgcGFpcnMpIHtcbiAgICAgICAgQ29sbGlzaW9uLl9vdmVybGFwQXhlcyhfb3ZlcmxhcEFCLCBib2R5QS52ZXJ0aWNlcywgYm9keUIudmVydGljZXMsIGJvZHlBLmF4ZXMpO1xuXG4gICAgICAgIGlmIChfb3ZlcmxhcEFCLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBDb2xsaXNpb24uX292ZXJsYXBBeGVzKF9vdmVybGFwQkEsIGJvZHlCLnZlcnRpY2VzLCBib2R5QS52ZXJ0aWNlcywgYm9keUIuYXhlcyk7XG5cbiAgICAgICAgaWYgKF9vdmVybGFwQkEub3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldXNlIGNvbGxpc2lvbiByZWNvcmRzIGZvciBnYyBlZmZpY2llbmN5XG4gICAgICAgIHZhciBwYWlyID0gcGFpcnMgJiYgcGFpcnMudGFibGVbUGFpci5pZChib2R5QSwgYm9keUIpXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbjtcblxuICAgICAgICBpZiAoIXBhaXIpIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IENvbGxpc2lvbi5jcmVhdGUoYm9keUEsIGJvZHlCKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5jb2xsaWRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb2xsaXNpb24uYm9keUEgPSBib2R5QS5pZCA8IGJvZHlCLmlkID8gYm9keUEgOiBib2R5QjtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ib2R5QiA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QiA6IGJvZHlBO1xuICAgICAgICAgICAgY29sbGlzaW9uLnBhcmVudEEgPSBjb2xsaXNpb24uYm9keUEucGFyZW50O1xuICAgICAgICAgICAgY29sbGlzaW9uLnBhcmVudEIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgIH1cblxuICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QTtcbiAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUI7XG5cbiAgICAgICAgdmFyIG1pbk92ZXJsYXA7XG5cbiAgICAgICAgaWYgKF9vdmVybGFwQUIub3ZlcmxhcCA8IF9vdmVybGFwQkEub3ZlcmxhcCkge1xuICAgICAgICAgICAgbWluT3ZlcmxhcCA9IF9vdmVybGFwQUI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5PdmVybGFwID0gX292ZXJsYXBCQTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsLFxuICAgICAgICAgICAgc3VwcG9ydHMgPSBjb2xsaXNpb24uc3VwcG9ydHMsXG4gICAgICAgICAgICBtaW5BeGlzID0gbWluT3ZlcmxhcC5heGlzLFxuICAgICAgICAgICAgbWluQXhpc1ggPSBtaW5BeGlzLngsXG4gICAgICAgICAgICBtaW5BeGlzWSA9IG1pbkF4aXMueTtcblxuICAgICAgICAvLyBlbnN1cmUgbm9ybWFsIGlzIGZhY2luZyBhd2F5IGZyb20gYm9keUFcbiAgICAgICAgaWYgKG1pbkF4aXNYICogKGJvZHlCLnBvc2l0aW9uLnggLSBib2R5QS5wb3NpdGlvbi54KSArIG1pbkF4aXNZICogKGJvZHlCLnBvc2l0aW9uLnkgLSBib2R5QS5wb3NpdGlvbi55KSA8IDApIHtcbiAgICAgICAgICAgIG5vcm1hbC54ID0gbWluQXhpc1g7XG4gICAgICAgICAgICBub3JtYWwueSA9IG1pbkF4aXNZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9ybWFsLnggPSAtbWluQXhpc1g7XG4gICAgICAgICAgICBub3JtYWwueSA9IC1taW5BeGlzWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29sbGlzaW9uLnRhbmdlbnQueCA9IC1ub3JtYWwueTtcbiAgICAgICAgY29sbGlzaW9uLnRhbmdlbnQueSA9IG5vcm1hbC54O1xuXG4gICAgICAgIGNvbGxpc2lvbi5kZXB0aCA9IG1pbk92ZXJsYXAub3ZlcmxhcDtcblxuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCA9IG5vcm1hbC54ICogY29sbGlzaW9uLmRlcHRoO1xuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSA9IG5vcm1hbC55ICogY29sbGlzaW9uLmRlcHRoO1xuXG4gICAgICAgIC8vIGZpbmQgc3VwcG9ydCBwb2ludHMsIHRoZXJlIGlzIGFsd2F5cyBlaXRoZXIgZXhhY3RseSBvbmUgb3IgdHdvXG4gICAgICAgIHZhciBzdXBwb3J0c0IgPSBDb2xsaXNpb24uX2ZpbmRTdXBwb3J0cyhib2R5QSwgYm9keUIsIG5vcm1hbCwgMSksXG4gICAgICAgICAgICBzdXBwb3J0Q291bnQgPSAwO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUIgdGhhdCBhcmUgaW5zaWRlIGJvZHlBXG4gICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5QS52ZXJ0aWNlcywgc3VwcG9ydHNCWzBdKSkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlBLnZlcnRpY2VzLCBzdXBwb3J0c0JbMV0pKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0JbMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHRoZSBzdXBwb3J0cyBmcm9tIGJvZHlBIHRoYXQgYXJlIGluc2lkZSBib2R5QlxuICAgICAgICBpZiAoc3VwcG9ydENvdW50IDwgMikge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnRzQSA9IENvbGxpc2lvbi5fZmluZFN1cHBvcnRzKGJvZHlCLCBib2R5QSwgbm9ybWFsLCAtMSk7XG5cbiAgICAgICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5Qi52ZXJ0aWNlcywgc3VwcG9ydHNBWzBdKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA8IDIgJiYgVmVydGljZXMuY29udGFpbnMoYm9keUIudmVydGljZXMsIHN1cHBvcnRzQVsxXSkpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0FbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIG9mIG92ZXJsYXBwaW5nIGJ1dCBubyB2ZXJ0ZXggY29udGFpbm1lbnRcbiAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN1cHBvcnRzIGFycmF5IHNpemVcbiAgICAgICAgc3VwcG9ydHMubGVuZ3RoID0gc3VwcG9ydENvdW50O1xuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIG92ZXJsYXAgYmV0d2VlbiB0d28gc2V0cyBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIF9vdmVybGFwQXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzQVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzQlxuICAgICAqIEBwYXJhbSB7YXhlc30gYXhlc1xuICAgICAqL1xuICAgIENvbGxpc2lvbi5fb3ZlcmxhcEF4ZXMgPSBmdW5jdGlvbihyZXN1bHQsIHZlcnRpY2VzQSwgdmVydGljZXNCLCBheGVzKSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlc0FMZW5ndGggPSB2ZXJ0aWNlc0EubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGljZXNCTGVuZ3RoID0gdmVydGljZXNCLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRpY2VzQVggPSB2ZXJ0aWNlc0FbMF0ueCxcbiAgICAgICAgICAgIHZlcnRpY2VzQVkgPSB2ZXJ0aWNlc0FbMF0ueSxcbiAgICAgICAgICAgIHZlcnRpY2VzQlggPSB2ZXJ0aWNlc0JbMF0ueCxcbiAgICAgICAgICAgIHZlcnRpY2VzQlkgPSB2ZXJ0aWNlc0JbMF0ueSxcbiAgICAgICAgICAgIGF4ZXNMZW5ndGggPSBheGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG92ZXJsYXBNaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgb3ZlcmxhcEF4aXNOdW1iZXIgPSAwLFxuICAgICAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgICAgIG92ZXJsYXBBQixcbiAgICAgICAgICAgIG92ZXJsYXBCQSxcbiAgICAgICAgICAgIGRvdCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBheGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXSxcbiAgICAgICAgICAgICAgICBheGlzWCA9IGF4aXMueCxcbiAgICAgICAgICAgICAgICBheGlzWSA9IGF4aXMueSxcbiAgICAgICAgICAgICAgICBtaW5BID0gdmVydGljZXNBWCAqIGF4aXNYICsgdmVydGljZXNBWSAqIGF4aXNZLFxuICAgICAgICAgICAgICAgIG1pbkIgPSB2ZXJ0aWNlc0JYICogYXhpc1ggKyB2ZXJ0aWNlc0JZICogYXhpc1ksXG4gICAgICAgICAgICAgICAgbWF4QSA9IG1pbkEsXG4gICAgICAgICAgICAgICAgbWF4QiA9IG1pbkI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCB2ZXJ0aWNlc0FMZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdCA9IHZlcnRpY2VzQVtqXS54ICogYXhpc1ggKyB2ZXJ0aWNlc0Fbal0ueSAqIGF4aXNZO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvdCA+IG1heEEpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1heEEgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb3QgPCBtaW5BKSB7IFxuICAgICAgICAgICAgICAgICAgICBtaW5BID0gZG90O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IHZlcnRpY2VzQkxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gdmVydGljZXNCW2pdLnggKiBheGlzWCArIHZlcnRpY2VzQltqXS55ICogYXhpc1k7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG90ID4gbWF4QikgeyBcbiAgICAgICAgICAgICAgICAgICAgbWF4QiA9IGRvdDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvdCA8IG1pbkIpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1pbkIgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdmVybGFwQUIgPSBtYXhBIC0gbWluQjtcbiAgICAgICAgICAgIG92ZXJsYXBCQSA9IG1heEIgLSBtaW5BO1xuICAgICAgICAgICAgb3ZlcmxhcCA9IG92ZXJsYXBBQiA8IG92ZXJsYXBCQSA/IG92ZXJsYXBBQiA6IG92ZXJsYXBCQTtcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXAgPCBvdmVybGFwTWluKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcE1pbiA9IG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcEF4aXNOdW1iZXIgPSBpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gbm90IGJlIGludGVyc2VjdGluZ1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmF4aXMgPSBheGVzW292ZXJsYXBBeGlzTnVtYmVyXTtcbiAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSBvdmVybGFwTWluO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyB2ZXJ0aWNlcyBvbiBhbiBheGlzIGFuZCByZXR1cm5zIGFuIGludGVydmFsLlxuICAgICAqIEBtZXRob2QgX3Byb2plY3RUb0F4aXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBwcm9qZWN0aW9uXG4gICAgICogQHBhcmFtIHt9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt9IGF4aXNcbiAgICAgKi9cbiAgICBDb2xsaXNpb24uX3Byb2plY3RUb0F4aXMgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB2ZXJ0aWNlcywgYXhpcykge1xuICAgICAgICB2YXIgbWluID0gdmVydGljZXNbMF0ueCAqIGF4aXMueCArIHZlcnRpY2VzWzBdLnkgKiBheGlzLnksXG4gICAgICAgICAgICBtYXggPSBtaW47XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGRvdCA9IHZlcnRpY2VzW2ldLnggKiBheGlzLnggKyB2ZXJ0aWNlc1tpXS55ICogYXhpcy55O1xuXG4gICAgICAgICAgICBpZiAoZG90ID4gbWF4KSB7IFxuICAgICAgICAgICAgICAgIG1heCA9IGRvdDsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvdCA8IG1pbikgeyBcbiAgICAgICAgICAgICAgICBtaW4gPSBkb3Q7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdGlvbi5taW4gPSBtaW47XG4gICAgICAgIHByb2plY3Rpb24ubWF4ID0gbWF4O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBzdXBwb3J0aW5nIHZlcnRpY2VzIGdpdmVuIHR3byBib2RpZXMgYWxvbmcgYSBnaXZlbiBkaXJlY3Rpb24gdXNpbmcgaGlsbC1jbGltYmluZy5cbiAgICAgKiBAbWV0aG9kIF9maW5kU3VwcG9ydHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IG5vcm1hbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIFt2ZWN0b3JdXG4gICAgICovXG4gICAgQ29sbGlzaW9uLl9maW5kU3VwcG9ydHMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIsIG5vcm1hbCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IGJvZHlCLnZlcnRpY2VzLFxuICAgICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICBib2R5QVBvc2l0aW9uWCA9IGJvZHlBLnBvc2l0aW9uLngsXG4gICAgICAgICAgICBib2R5QVBvc2l0aW9uWSA9IGJvZHlBLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBub3JtYWxYID0gbm9ybWFsLnggKiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBub3JtYWxZID0gbm9ybWFsLnkgKiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgdmVydGV4QSxcbiAgICAgICAgICAgIHZlcnRleEIsXG4gICAgICAgICAgICB2ZXJ0ZXhDLFxuICAgICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIC8vIGZpbmQgZGVlcGVzdCB2ZXJ0ZXggcmVsYXRpdmUgdG8gdGhlIGF4aXNcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHZlcnRpY2VzTGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRleEIgPSB2ZXJ0aWNlc1tqXTtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gbm9ybWFsWCAqIChib2R5QVBvc2l0aW9uWCAtIHZlcnRleEIueCkgKyBub3JtYWxZICogKGJvZHlBUG9zaXRpb25ZIC0gdmVydGV4Qi55KTtcblxuICAgICAgICAgICAgLy8gY29udmV4IGhpbGwtY2xpbWJpbmdcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG5lYXJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG5lYXJlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIHZlcnRleEEgPSB2ZXJ0ZXhCO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWVhc3VyZSBuZXh0IHZlcnRleFxuICAgICAgICB2ZXJ0ZXhDID0gdmVydGljZXNbKHZlcnRpY2VzTGVuZ3RoICsgdmVydGV4QS5pbmRleCAtIDEpICUgdmVydGljZXNMZW5ndGhdO1xuICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBub3JtYWxYICogKGJvZHlBUG9zaXRpb25YIC0gdmVydGV4Qy54KSArIG5vcm1hbFkgKiAoYm9keUFQb3NpdGlvblkgLSB2ZXJ0ZXhDLnkpO1xuXG4gICAgICAgIC8vIGNvbXBhcmUgd2l0aCBwcmV2aW91cyB2ZXJ0ZXhcbiAgICAgICAgdmVydGV4QiA9IHZlcnRpY2VzWyh2ZXJ0ZXhBLmluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aF07XG4gICAgICAgIGlmIChub3JtYWxYICogKGJvZHlBUG9zaXRpb25YIC0gdmVydGV4Qi54KSArIG5vcm1hbFkgKiAoYm9keUFQb3NpdGlvblkgLSB2ZXJ0ZXhCLnkpIDwgbmVhcmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICBfc3VwcG9ydHNbMF0gPSB2ZXJ0ZXhBO1xuICAgICAgICAgICAgX3N1cHBvcnRzWzFdID0gdmVydGV4QjtcblxuICAgICAgICAgICAgcmV0dXJuIF9zdXBwb3J0cztcbiAgICAgICAgfVxuXG4gICAgICAgIF9zdXBwb3J0c1swXSA9IHZlcnRleEE7XG4gICAgICAgIF9zdXBwb3J0c1sxXSA9IHZlcnRleEM7XG5cbiAgICAgICAgcmV0dXJuIF9zdXBwb3J0cztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcGFpciB1c2luZyB0aGlzIGNvbGxpc2lvbiByZWNvcmQsIGlmIHRoZXJlIGlzIG9uZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYWlyXG4gICAgICogQHR5cGUge3BhaXJ8bnVsbH1cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJvZGllcyB3ZXJlIGNvbGxpZGluZyB3aGVuIHRoZSBjb2xsaXNpb24gd2FzIGxhc3QgdXBkYXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgY29sbGlkZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoc2VlIGFsc28gYGNvbGxpc2lvbi5wYXJlbnRBYCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IGJvZHlBXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoc2VlIGFsc28gYGNvbGxpc2lvbi5wYXJlbnRCYCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IGJvZHlCXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IGJvZHkgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoaS5lLiBgY29sbGlzaW9uLmJvZHlBLnBhcmVudGApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRBXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBib2R5IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKGkuZS4gYGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnRgKS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCByZXByZXNlbnRzIHRoZSBtaW5pbXVtIHNlcGFyYXRpbmcgZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm9kaWVzIGFsb25nIHRoZSBjb2xsaXNpb24gbm9ybWFsLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGRlcHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBub3JtYWxpc2VkIGBWZWN0b3JgIHRoYXQgcmVwcmVzZW50cyB0aGUgZGlyZWN0aW9uIGJldHdlZW4gdGhlIGJvZGllcyB0aGF0IHByb3ZpZGVzIHRoZSBtaW5pbXVtIHNlcGFyYXRpbmcgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbm9ybWFsXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgbm9ybWFsaXNlZCBgVmVjdG9yYCB0aGF0IGlzIHRoZSB0YW5nZW50IGRpcmVjdGlvbiB0byB0aGUgY29sbGlzaW9uIG5vcm1hbC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0YW5nZW50XG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCByZXByZXNlbnRzIHRoZSBkaXJlY3Rpb24gYW5kIGRlcHRoIG9mIHRoZSBjb2xsaXNpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGVuZXRyYXRpb25cbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYm9keSB2ZXJ0aWNlcyB0aGF0IHJlcHJlc2VudCB0aGUgc3VwcG9ydCBwb2ludHMgaW4gdGhlIGNvbGxpc2lvbi5cbiAgICAgKiBUaGVzZSBhcmUgdGhlIGRlZXBlc3QgdmVydGljZXMgKGFsb25nIHRoZSBjb2xsaXNpb24gbm9ybWFsKSBvZiBlYWNoIGJvZHkgdGhhdCBhcmUgY29udGFpbmVkIGJ5IHRoZSBvdGhlciBib2R5J3MgdmVydGljZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc3VwcG9ydHNcbiAgICAgKiBAdHlwZSB2ZWN0b3JbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5QYWlyYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBQYWlyXG4qL1xuXG52YXIgUGFpciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhaXI7XG5cbnZhciBDb250YWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGFpci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICogQHJldHVybiB7cGFpcn0gQSBuZXcgcGFpclxuICAgICAqL1xuICAgIFBhaXIuY3JlYXRlID0gZnVuY3Rpb24oY29sbGlzaW9uLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBLFxuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUI7XG5cbiAgICAgICAgdmFyIHBhaXIgPSB7XG4gICAgICAgICAgICBpZDogUGFpci5pZChib2R5QSwgYm9keUIpLFxuICAgICAgICAgICAgYm9keUE6IGJvZHlBLFxuICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgY29sbGlzaW9uOiBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb250YWN0czogW10sXG4gICAgICAgICAgICBhY3RpdmVDb250YWN0czogW10sXG4gICAgICAgICAgICBzZXBhcmF0aW9uOiAwLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtZWRBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBpc1NlbnNvcjogYm9keUEuaXNTZW5zb3IgfHwgYm9keUIuaXNTZW5zb3IsXG4gICAgICAgICAgICB0aW1lQ3JlYXRlZDogdGltZXN0YW1wLFxuICAgICAgICAgICAgdGltZVVwZGF0ZWQ6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGludmVyc2VNYXNzOiAwLFxuICAgICAgICAgICAgZnJpY3Rpb246IDAsXG4gICAgICAgICAgICBmcmljdGlvblN0YXRpYzogMCxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgc2xvcDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIFBhaXIudXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcblxuICAgICAgICByZXR1cm4gcGFpcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHBhaXIgZ2l2ZW4gYSBjb2xsaXNpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge3BhaXJ9IHBhaXJcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXIudXBkYXRlID0gZnVuY3Rpb24ocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGNvbnRhY3RzID0gcGFpci5jb250YWN0cyxcbiAgICAgICAgICAgIHN1cHBvcnRzID0gY29sbGlzaW9uLnN1cHBvcnRzLFxuICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgcGFyZW50QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgcGFyZW50QiA9IGNvbGxpc2lvbi5wYXJlbnRCLFxuICAgICAgICAgICAgcGFyZW50QVZlcnRpY2VzTGVuZ3RoID0gcGFyZW50QS52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICBwYWlyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcGFpci50aW1lVXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgcGFpci5jb2xsaXNpb24gPSBjb2xsaXNpb247XG4gICAgICAgIHBhaXIuc2VwYXJhdGlvbiA9IGNvbGxpc2lvbi5kZXB0aDtcbiAgICAgICAgcGFpci5pbnZlcnNlTWFzcyA9IHBhcmVudEEuaW52ZXJzZU1hc3MgKyBwYXJlbnRCLmludmVyc2VNYXNzO1xuICAgICAgICBwYWlyLmZyaWN0aW9uID0gcGFyZW50QS5mcmljdGlvbiA8IHBhcmVudEIuZnJpY3Rpb24gPyBwYXJlbnRBLmZyaWN0aW9uIDogcGFyZW50Qi5mcmljdGlvbjtcbiAgICAgICAgcGFpci5mcmljdGlvblN0YXRpYyA9IHBhcmVudEEuZnJpY3Rpb25TdGF0aWMgPiBwYXJlbnRCLmZyaWN0aW9uU3RhdGljID8gcGFyZW50QS5mcmljdGlvblN0YXRpYyA6IHBhcmVudEIuZnJpY3Rpb25TdGF0aWM7XG4gICAgICAgIHBhaXIucmVzdGl0dXRpb24gPSBwYXJlbnRBLnJlc3RpdHV0aW9uID4gcGFyZW50Qi5yZXN0aXR1dGlvbiA/IHBhcmVudEEucmVzdGl0dXRpb24gOiBwYXJlbnRCLnJlc3RpdHV0aW9uO1xuICAgICAgICBwYWlyLnNsb3AgPSBwYXJlbnRBLnNsb3AgPiBwYXJlbnRCLnNsb3AgPyBwYXJlbnRBLnNsb3AgOiBwYXJlbnRCLnNsb3A7XG5cbiAgICAgICAgY29sbGlzaW9uLnBhaXIgPSBwYWlyO1xuICAgICAgICBhY3RpdmVDb250YWN0cy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSBzdXBwb3J0c1tpXSxcbiAgICAgICAgICAgICAgICBjb250YWN0SWQgPSBzdXBwb3J0LmJvZHkgPT09IHBhcmVudEEgPyBzdXBwb3J0LmluZGV4IDogcGFyZW50QVZlcnRpY2VzTGVuZ3RoICsgc3VwcG9ydC5pbmRleCxcbiAgICAgICAgICAgICAgICBjb250YWN0ID0gY29udGFjdHNbY29udGFjdElkXTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250YWN0cy5wdXNoKGNvbnRhY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250YWN0cy5wdXNoKGNvbnRhY3RzW2NvbnRhY3RJZF0gPSBDb250YWN0LmNyZWF0ZShzdXBwb3J0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFNldCBhIHBhaXIgYXMgYWN0aXZlIG9yIGluYWN0aXZlLlxuICAgICAqIEBtZXRob2Qgc2V0QWN0aXZlXG4gICAgICogQHBhcmFtIHtwYWlyfSBwYWlyXG4gICAgICogQHBhcmFtIHtib29sfSBpc0FjdGl2ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlyLnNldEFjdGl2ZSA9IGZ1bmN0aW9uKHBhaXIsIGlzQWN0aXZlLCB0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBwYWlyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhaXIudGltZVVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWlyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpZCBmb3IgdGhlIGdpdmVuIHBhaXIuXG4gICAgICogQG1ldGhvZCBpZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBVbmlxdWUgcGFpcklkXG4gICAgICovXG4gICAgUGFpci5pZCA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICBpZiAoYm9keUEuaWQgPCBib2R5Qi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuICdBJyArIGJvZHlBLmlkICsgJ0InICsgYm9keUIuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0EnICsgYm9keUIuaWQgKyAnQicgKyBib2R5QS5pZDtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29uc3RyYWludGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29uc3RyYWludHMuXG4qIENvbnN0cmFpbnRzIGFyZSB1c2VkIGZvciBzcGVjaWZ5aW5nIHRoYXQgYSBmaXhlZCBkaXN0YW5jZSBtdXN0IGJlIG1haW50YWluZWQgYmV0d2VlbiB0d28gYm9kaWVzIChvciBhIGJvZHkgYW5kIGEgZml4ZWQgd29ybGQtc3BhY2UgcG9zaXRpb24pLlxuKiBUaGUgc3RpZmZuZXNzIG9mIGNvbnN0cmFpbnRzIGNhbiBiZSBtb2RpZmllZCB0byBjcmVhdGUgc3ByaW5ncyBvciBlbGFzdGljLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29uc3RyYWludFxuKi9cblxudmFyIENvbnN0cmFpbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdHJhaW50O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbnN0cmFpbnQuX3dhcm1pbmcgPSAwLjQ7XG4gICAgQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuID0gMTtcbiAgICBDb25zdHJhaW50Ll9taW5MZW5ndGggPSAwLjAwMDAwMTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29uc3RyYWludC5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFRvIHNpbXVsYXRlIGEgcmV2b2x1dGUgY29uc3RyYWludCAob3IgcGluIGpvaW50KSBzZXQgYGxlbmd0aDogMGAgYW5kIGEgaGlnaCBgc3RpZmZuZXNzYCB2YWx1ZSAoZS5nLiBgMC43YCBvciBhYm92ZSkuXG4gICAgICogSWYgdGhlIGNvbnN0cmFpbnQgaXMgdW5zdGFibGUsIHRyeSBsb3dlcmluZyB0aGUgYHN0aWZmbmVzc2AgdmFsdWUgYW5kIC8gb3IgaW5jcmVhc2luZyBgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zYC5cbiAgICAgKiBGb3IgY29tcG91bmQgYm9kaWVzLCBjb25zdHJhaW50cyBtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBib2R5IChub3Qgb25lIG9mIGl0cyBwYXJ0cykuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgY29uc3RyYWludCA9IG9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgYm9kaWVzIGRlZmluZWQgYnV0IG5vIHBvaW50cywgdXNlIGJvZHkgY2VudHJlXG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlBICYmICFjb25zdHJhaW50LnBvaW50QSlcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlCICYmICFjb25zdHJhaW50LnBvaW50QilcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHN0YXRpYyBsZW5ndGggdXNpbmcgaW5pdGlhbCB3b3JsZCBzcGFjZSBwb2ludHNcbiAgICAgICAgdmFyIGluaXRpYWxQb2ludEEgPSBjb25zdHJhaW50LmJvZHlBID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSkgOiBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIGluaXRpYWxQb2ludEIgPSBjb25zdHJhaW50LmJvZHlCID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QikgOiBjb25zdHJhaW50LnBvaW50QixcbiAgICAgICAgICAgIGxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1Yihpbml0aWFsUG9pbnRBLCBpbml0aWFsUG9pbnRCKSk7XG4gICAgXG4gICAgICAgIGNvbnN0cmFpbnQubGVuZ3RoID0gdHlwZW9mIGNvbnN0cmFpbnQubGVuZ3RoICE9PSAndW5kZWZpbmVkJyA/IGNvbnN0cmFpbnQubGVuZ3RoIDogbGVuZ3RoO1xuXG4gICAgICAgIC8vIG9wdGlvbiBkZWZhdWx0c1xuICAgICAgICBjb25zdHJhaW50LmlkID0gY29uc3RyYWludC5pZCB8fCBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIGNvbnN0cmFpbnQubGFiZWwgPSBjb25zdHJhaW50LmxhYmVsIHx8ICdDb25zdHJhaW50JztcbiAgICAgICAgY29uc3RyYWludC50eXBlID0gJ2NvbnN0cmFpbnQnO1xuICAgICAgICBjb25zdHJhaW50LnN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuc3RpZmZuZXNzIHx8IChjb25zdHJhaW50Lmxlbmd0aCA+IDAgPyAxIDogMC43KTtcbiAgICAgICAgY29uc3RyYWludC5kYW1waW5nID0gY29uc3RyYWludC5kYW1waW5nIHx8IDA7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyB8fCAwO1xuICAgICAgICBjb25zdHJhaW50LmFuZ2xlQSA9IGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLmFuZ2xlIDogY29uc3RyYWludC5hbmdsZUE7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIuYW5nbGUgOiBjb25zdHJhaW50LmFuZ2xlQjtcbiAgICAgICAgY29uc3RyYWludC5wbHVnaW4gPSB7fTtcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgdmFyIHJlbmRlciA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgYW5jaG9yczogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50Lmxlbmd0aCA9PT0gMCAmJiBjb25zdHJhaW50LnN0aWZmbmVzcyA+IDAuMSkge1xuICAgICAgICAgICAgcmVuZGVyLnR5cGUgPSAncGluJztcbiAgICAgICAgICAgIHJlbmRlci5hbmNob3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludC5zdGlmZm5lc3MgPCAwLjkpIHtcbiAgICAgICAgICAgIHJlbmRlci50eXBlID0gJ3NwcmluZyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJhaW50LnJlbmRlciA9IENvbW1vbi5leHRlbmQocmVuZGVyLCBjb25zdHJhaW50LnJlbmRlcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGZvciBzb2x2aW5nIGJ5IGNvbnN0cmFpbnQgd2FybWluZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcHJlU29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbCA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgaW1wdWxzZSA9IGJvZHkuY29uc3RyYWludEltcHVsc2U7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IChpbXB1bHNlLnggPT09IDAgJiYgaW1wdWxzZS55ID09PSAwICYmIGltcHVsc2UuYW5nbGUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gaW1wdWxzZS55O1xuICAgICAgICAgICAgYm9keS5hbmdsZSArPSBpbXB1bHNlLmFuZ2xlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvbHZlcyBhbGwgY29uc3RyYWludHMgaW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50W119IGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmVBbGwgPSBmdW5jdGlvbihjb25zdHJhaW50cywgdGltZVNjYWxlKSB7XG4gICAgICAgIC8vIFNvbHZlIGZpeGVkIGNvbnN0cmFpbnRzIGZpcnN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgIGZpeGVkQSA9ICFjb25zdHJhaW50LmJvZHlBIHx8IChjb25zdHJhaW50LmJvZHlBICYmIGNvbnN0cmFpbnQuYm9keUEuaXNTdGF0aWMpLFxuICAgICAgICAgICAgICAgIGZpeGVkQiA9ICFjb25zdHJhaW50LmJvZHlCIHx8IChjb25zdHJhaW50LmJvZHlCICYmIGNvbnN0cmFpbnQuYm9keUIuaXNTdGF0aWMpO1xuXG4gICAgICAgICAgICBpZiAoZml4ZWRBIHx8IGZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb2x2ZSBmcmVlIGNvbnN0cmFpbnRzIGxhc3QuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldO1xuICAgICAgICAgICAgZml4ZWRBID0gIWNvbnN0cmFpbnQuYm9keUEgfHwgKGNvbnN0cmFpbnQuYm9keUEgJiYgY29uc3RyYWludC5ib2R5QS5pc1N0YXRpYyk7XG4gICAgICAgICAgICBmaXhlZEIgPSAhY29uc3RyYWludC5ib2R5QiB8fCAoY29uc3RyYWludC5ib2R5QiAmJiBjb25zdHJhaW50LmJvZHlCLmlzU3RhdGljKTtcblxuICAgICAgICAgICAgaWYgKCFmaXhlZEEgJiYgIWZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29sdmVzIGEgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2QuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmUgPSBmdW5jdGlvbihjb25zdHJhaW50LCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgIHBvaW50QSA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgaWYgKCFib2R5QSAmJiAhYm9keUIpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gdXBkYXRlIHJlZmVyZW5jZSBhbmdsZVxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBWZWN0b3Iucm90YXRlKHBvaW50QSwgYm9keUEuYW5nbGUgLSBjb25zdHJhaW50LmFuZ2xlQSwgcG9pbnRBKTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVBID0gYm9keUEuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSByZWZlcmVuY2UgYW5nbGVcbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZShwb2ludEIsIGJvZHlCLmFuZ2xlIC0gY29uc3RyYWludC5hbmdsZUIsIHBvaW50Qik7XG4gICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGJvZHlCLmFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50QVdvcmxkID0gcG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBwb2ludEI7XG5cbiAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIHBvaW50QSk7XG4gICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBwb2ludEIpO1xuXG4gICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIocG9pbnRBV29ybGQsIHBvaW50QldvcmxkKSxcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKGRlbHRhKTtcblxuICAgICAgICAvLyBwcmV2ZW50IHNpbmd1bGFyaXR5XG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoIDwgQ29uc3RyYWludC5fbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50TGVuZ3RoID0gQ29uc3RyYWludC5fbWluTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29sdmUgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2RcbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSAoY3VycmVudExlbmd0aCAtIGNvbnN0cmFpbnQubGVuZ3RoKSAvIGN1cnJlbnRMZW5ndGgsXG4gICAgICAgICAgICBzdGlmZm5lc3MgPSBjb25zdHJhaW50LnN0aWZmbmVzcyA8IDEgPyBjb25zdHJhaW50LnN0aWZmbmVzcyAqIHRpbWVTY2FsZSA6IGNvbnN0cmFpbnQuc3RpZmZuZXNzLFxuICAgICAgICAgICAgZm9yY2UgPSBWZWN0b3IubXVsdChkZWx0YSwgZGlmZmVyZW5jZSAqIHN0aWZmbmVzcyksXG4gICAgICAgICAgICBtYXNzVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlTWFzcyA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZU1hc3MgOiAwKSxcbiAgICAgICAgICAgIGluZXJ0aWFUb3RhbCA9IChib2R5QSA/IGJvZHlBLmludmVyc2VJbmVydGlhIDogMCkgKyAoYm9keUIgPyBib2R5Qi5pbnZlcnNlSW5lcnRpYSA6IDApLFxuICAgICAgICAgICAgcmVzaXN0YW5jZVRvdGFsID0gbWFzc1RvdGFsICsgaW5lcnRpYVRvdGFsLFxuICAgICAgICAgICAgdG9ycXVlLFxuICAgICAgICAgICAgc2hhcmUsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBub3JtYWxWZWxvY2l0eSxcbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHk7XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgdmFyIHplcm8gPSBWZWN0b3IuY3JlYXRlKCk7XG4gICAgICAgICAgICBub3JtYWwgPSBWZWN0b3IuZGl2KGRlbHRhLCBjdXJyZW50TGVuZ3RoKTtcblxuICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eSA9IFZlY3Rvci5zdWIoXG4gICAgICAgICAgICAgICAgYm9keUIgJiYgVmVjdG9yLnN1Yihib2R5Qi5wb3NpdGlvbiwgYm9keUIucG9zaXRpb25QcmV2KSB8fCB6ZXJvLFxuICAgICAgICAgICAgICAgIGJvZHlBICYmIFZlY3Rvci5zdWIoYm9keUEucG9zaXRpb24sIGJvZHlBLnBvc2l0aW9uUHJldikgfHwgemVyb1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHkgPSBWZWN0b3IuZG90KG5vcm1hbCwgcmVsYXRpdmVWZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBzaGFyZSA9IGJvZHlBLmludmVyc2VNYXNzIC8gbWFzc1RvdGFsO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGFwcGxpZWQgaW1wdWxzZXMgZm9yIHBvc3Qgc29sdmluZ1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZm9yY2VzXG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi54IC09IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uLnkgLT0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBkYW1waW5nXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5kYW1waW5nKSB7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggLT0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnggKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55IC09IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC55ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYXBwbHkgdG9ycXVlXG4gICAgICAgICAgICB0b3JxdWUgPSAoVmVjdG9yLmNyb3NzKHBvaW50QSwgZm9yY2UpIC8gcmVzaXN0YW5jZVRvdGFsKSAqIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiAqIGJvZHlBLmludmVyc2VJbmVydGlhICogKDEgLSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MpO1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UuYW5nbGUgLT0gdG9ycXVlO1xuICAgICAgICAgICAgYm9keUEuYW5nbGUgLT0gdG9ycXVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgc2hhcmUgPSBib2R5Qi5pbnZlcnNlTWFzcyAvIG1hc3NUb3RhbDtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhcHBsaWVkIGltcHVsc2VzIGZvciBwb3N0IHNvbHZpbmdcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLnggKz0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UueSArPSBmb3JjZS55ICogc2hhcmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGFwcGx5IGZvcmNlc1xuICAgICAgICAgICAgYm9keUIucG9zaXRpb24ueCArPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5Qi5wb3NpdGlvbi55ICs9IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZGFtcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54ICs9IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC54ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSArPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEIsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlCLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGJvZHkgdXBkYXRlcyByZXF1aXJlZCBhZnRlciBzb2x2aW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwb3N0U29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGltcHVsc2UgPSBib2R5LmNvbnN0cmFpbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCAoaW1wdWxzZS54ID09PSAwICYmIGltcHVsc2UueSA9PT0gMCAmJiBpbXB1bHNlLmFuZ2xlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnkgYW5kIHJlc2V0XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBpbXB1bHNlLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGltcHVsc2UuYW5nbGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGltcHVsc2UuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBpbXB1bHNlLmFuZ2xlLCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkYW1wZW4gdGhlIGNhY2hlZCBpbXB1bHNlIGZvciB3YXJtaW5nIG5leHQgc3RlcFxuICAgICAgICAgICAgaW1wdWxzZS5hbmdsZSAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICAgICAgaW1wdWxzZS54ICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgICAgICBpbXB1bHNlLnkgKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiBgY29uc3RyYWludC5wb2ludEFgLCBhY2NvdW50aW5nIGZvciBgY29uc3RyYWludC5ib2R5QWAuXG4gICAgICogQG1ldGhvZCBwb2ludEFXb3JsZFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm5zIHt2ZWN0b3J9IHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9pbnRBV29ybGQgPSBmdW5jdGlvbihjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueCA6IDApICsgY29uc3RyYWludC5wb2ludEEueCxcbiAgICAgICAgICAgIHk6IChjb25zdHJhaW50LmJvZHlBID8gY29uc3RyYWludC5ib2R5QS5wb3NpdGlvbi55IDogMCkgKyBjb25zdHJhaW50LnBvaW50QS55XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIGBjb25zdHJhaW50LnBvaW50QmAsIGFjY291bnRpbmcgZm9yIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKiBAbWV0aG9kIHBvaW50QldvcmxkXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHJldHVybnMge3ZlY3Rvcn0gdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb2ludEJXb3JsZCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChjb25zdHJhaW50LmJvZHlCID8gY29uc3RyYWludC5ib2R5Qi5wb3NpdGlvbi54IDogMCkgKyBjb25zdHJhaW50LnBvaW50Qi54LFxuICAgICAgICAgICAgeTogKGNvbnN0cmFpbnQuYm9keUIgPyBjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLnkgOiAwKSArIGNvbnN0cmFpbnQucG9pbnRCLnlcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYENvbXBvc2l0ZS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29uc3RyYWludFwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgYm9kaWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJDb25zdHJhaW50XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgcmVuZGVyaW5nIHByb3BlcnRpZXMgdG8gYmUgY29uc3VtZWQgYnkgdGhlIG1vZHVsZSBgTWF0dGVyLlJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci52aXNpYmxlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsaW5lIHdpZHRoIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIG5vIG91dGxpbmUgd2lsbCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIubGluZVdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHN0cm9rZSBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGNvbnN0cmFpbnQgb3V0bGluZS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnN0cm9rZVN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgY29uc3RyYWludCByZW5kZXJpbmcgdHlwZS4gXG4gICAgICogVGhlIHBvc3NpYmxlIHZhbHVlcyBhcmUgJ2xpbmUnLCAncGluJywgJ3NwcmluZycuXG4gICAgICogQW4gYXBwcm9wcmlhdGUgcmVuZGVyIHR5cGUgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNob3NlbiB1bmxlc3Mgb25lIGlzIGdpdmVuIGluIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnbGluZSdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgZGVmaW5lcyBpZiB0aGUgY29uc3RyYWludCdzIGFuY2hvciBwb2ludHMgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5hbmNob3JzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBwb3NzaWJsZSBgQm9keWAgdGhhdCB0aGlzIGNvbnN0cmFpbnQgaXMgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keUFcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBwb3NzaWJsZSBgQm9keWAgdGhhdCB0aGlzIGNvbnN0cmFpbnQgaXMgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keUJcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRBXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG9mZnNldCBvZiB0aGUgY29uc3RyYWludCBmcm9tIGNlbnRlciBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUJgIGlmIGRlZmluZWQsIG90aGVyd2lzZSBhIHdvcmxkLXNwYWNlIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvaW50QlxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBzdGlmZm5lc3Mgb2YgdGhlIGNvbnN0cmFpbnQsIGkuZS4gdGhlIHJhdGUgYXQgd2hpY2ggaXQgcmV0dXJucyB0byBpdHMgcmVzdGluZyBgY29uc3RyYWludC5sZW5ndGhgLlxuICAgICAqIEEgdmFsdWUgb2YgYDFgIG1lYW5zIHRoZSBjb25zdHJhaW50IHNob3VsZCBiZSB2ZXJ5IHN0aWZmLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMmAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgYWN0cyBsaWtlIGEgc29mdCBzcHJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc3RpZmZuZXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgZGFtcGluZyBvZiB0aGUgY29uc3RyYWludCwgXG4gICAgICogaS5lLiB0aGUgYW1vdW50IG9mIHJlc2lzdGFuY2UgYXBwbGllZCB0byBlYWNoIGJvZHkgYmFzZWQgb24gdGhlaXIgdmVsb2NpdGllcyB0byBsaW1pdCB0aGUgYW1vdW50IG9mIG9zY2lsbGF0aW9uLlxuICAgICAqIERhbXBpbmcgd2lsbCBvbmx5IGJlIGFwcGFyZW50IHdoZW4gdGhlIGNvbnN0cmFpbnQgYWxzbyBoYXMgYSB2ZXJ5IGxvdyBgc3RpZmZuZXNzYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwLjFgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgaGVhdnkgZGFtcGluZywgcmVzdWx0aW5nIGluIGxpdHRsZSB0byBubyBvc2NpbGxhdGlvbi5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgY29uc3RyYWludCB3aWxsIGFwcGx5IG5vIGRhbXBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGFtcGluZ1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXN0aW5nIGxlbmd0aCBvZiB0aGUgY29uc3RyYWludC4gXG4gICAgICogSXQgaXMgY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGluIGBDb25zdHJhaW50LmNyZWF0ZWAgZnJvbSBpbml0aWFsIHBvc2l0aW9ucyBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUFgIGFuZCBgY29uc3RyYWludC5ib2R5QmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGVuZ3RoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5BeGVzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBzZXRzIG9mIGF4ZXMuXG4qXG4qIEBjbGFzcyBBeGVzXG4qL1xuXG52YXIgQXhlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4ZXM7XG5cbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc2V0IG9mIGF4ZXMgZnJvbSB0aGUgZ2l2ZW4gdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBmcm9tVmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2F4ZXN9IEEgbmV3IGF4ZXMgZnJvbSB0aGUgZ2l2ZW4gdmVydGljZXNcbiAgICAgKi9cbiAgICBBeGVzLmZyb21WZXJ0aWNlcyA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBheGVzID0ge307XG5cbiAgICAgICAgLy8gZmluZCB0aGUgdW5pcXVlIGF4ZXMsIHVzaW5nIGVkZ2Ugbm9ybWFsIGdyYWRpZW50c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaiA9IChpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGgsIFxuICAgICAgICAgICAgICAgIG5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoeyBcbiAgICAgICAgICAgICAgICAgICAgeDogdmVydGljZXNbal0ueSAtIHZlcnRpY2VzW2ldLnksIFxuICAgICAgICAgICAgICAgICAgICB5OiB2ZXJ0aWNlc1tpXS54IC0gdmVydGljZXNbal0ueFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGdyYWRpZW50ID0gKG5vcm1hbC55ID09PSAwKSA/IEluZmluaXR5IDogKG5vcm1hbC54IC8gbm9ybWFsLnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBsaW1pdCBwcmVjaXNpb25cbiAgICAgICAgICAgIGdyYWRpZW50ID0gZ3JhZGllbnQudG9GaXhlZCgzKS50b1N0cmluZygpO1xuICAgICAgICAgICAgYXhlc1tncmFkaWVudF0gPSBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29tbW9uLnZhbHVlcyhheGVzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyBhIHNldCBvZiBheGVzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7YXhlc30gYXhlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIEF4ZXMucm90YXRlID0gZnVuY3Rpb24oYXhlcywgYW5nbGUpIHtcbiAgICAgICAgaWYgKGFuZ2xlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXSxcbiAgICAgICAgICAgICAgICB4eDtcbiAgICAgICAgICAgIHh4ID0gYXhpcy54ICogY29zIC0gYXhpcy55ICogc2luO1xuICAgICAgICAgICAgYXhpcy55ID0gYXhpcy54ICogc2luICsgYXhpcy55ICogY29zO1xuICAgICAgICAgICAgYXhpcy54ID0geHg7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkJvZGllc2AgbW9kdWxlIGNvbnRhaW5zIGZhY3RvcnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcgcmlnaWQgYm9keSBtb2RlbHMgXG4qIHdpdGggY29tbW9ubHkgdXNlZCBib2R5IGNvbmZpZ3VyYXRpb25zIChzdWNoIGFzIHJlY3RhbmdsZXMsIGNpcmNsZXMgYW5kIG90aGVyIHBvbHlnb25zKS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEJvZGllc1xuKi9cblxuLy8gVE9ETzogdHJ1ZSBjaXJjbGUgYm9kaWVzXG5cbnZhciBCb2RpZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2RpZXM7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgcmVjdGFuZ2xlIGh1bGwuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgcmVjdGFuZ2xlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgcmVjdGFuZ2xlIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMucmVjdGFuZ2xlID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgcmVjdGFuZ2xlID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnUmVjdGFuZ2xlIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKCdMIDAgMCBMICcgKyB3aWR0aCArICcgMCBMICcgKyB3aWR0aCArICcgJyArIGhlaWdodCArICcgTCAwICcgKyBoZWlnaHQpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhbWZlcikge1xuICAgICAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgICAgICByZWN0YW5nbGUudmVydGljZXMgPSBWZXJ0aWNlcy5jaGFtZmVyKHJlY3RhbmdsZS52ZXJ0aWNlcywgY2hhbWZlci5yYWRpdXMsIFxuICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCByZWN0YW5nbGUsIG9wdGlvbnMpKTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgdHJhcGV6b2lkIGh1bGwuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgdHJhcGV6b2lkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2xvcGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgdHJhcGV6b2lkIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMudHJhcGV6b2lkID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgc2xvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgc2xvcGUgKj0gMC41O1xuICAgICAgICB2YXIgcm9vZiA9ICgxIC0gKHNsb3BlICogMikpICogd2lkdGg7XG4gICAgICAgIFxuICAgICAgICB2YXIgeDEgPSB3aWR0aCAqIHNsb3BlLFxuICAgICAgICAgICAgeDIgPSB4MSArIHJvb2YsXG4gICAgICAgICAgICB4MyA9IHgyICsgeDEsXG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGg7XG5cbiAgICAgICAgaWYgKHNsb3BlIDwgMC41KSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGggPSAnTCAwIDAgTCAnICsgeDEgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgyICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MyArICcgMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGggPSAnTCAwIDAgTCAnICsgeDIgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgzICsgJyAwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFwZXpvaWQgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdUcmFwZXpvaWQgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgodmVydGljZXNQYXRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgdHJhcGV6b2lkLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcih0cmFwZXpvaWQudmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgdHJhcGV6b2lkLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgY2lyY2xlIGh1bGwuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY2lyY2xlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXhTaWRlc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyBjaXJjbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5jaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMsIG9wdGlvbnMsIG1heFNpZGVzKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBjaXJjbGUgPSB7XG4gICAgICAgICAgICBsYWJlbDogJ0NpcmNsZSBCb2R5JyxcbiAgICAgICAgICAgIGNpcmNsZVJhZGl1czogcmFkaXVzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBhcHByb3hpbWF0ZSBjaXJjbGVzIHdpdGggcG9seWdvbnMgdW50aWwgdHJ1ZSBjaXJjbGVzIGltcGxlbWVudGVkIGluIFNBVFxuICAgICAgICBtYXhTaWRlcyA9IG1heFNpZGVzIHx8IDI1O1xuICAgICAgICB2YXIgc2lkZXMgPSBNYXRoLmNlaWwoTWF0aC5tYXgoMTAsIE1hdGgubWluKG1heFNpZGVzLCByYWRpdXMpKSk7XG5cbiAgICAgICAgLy8gb3B0aW1pc2F0aW9uOiBhbHdheXMgdXNlIGV2ZW4gbnVtYmVyIG9mIHNpZGVzIChoYWxmIHRoZSBudW1iZXIgb2YgdW5pcXVlIGF4ZXMpXG4gICAgICAgIGlmIChzaWRlcyAlIDIgPT09IDEpXG4gICAgICAgICAgICBzaWRlcyArPSAxO1xuXG4gICAgICAgIHJldHVybiBCb2RpZXMucG9seWdvbih4LCB5LCBzaWRlcywgcmFkaXVzLCBDb21tb24uZXh0ZW5kKHt9LCBjaXJjbGUsIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWd1bGFyIHBvbHlnb24gaHVsbCB3aXRoIHRoZSBnaXZlbiBudW1iZXIgb2Ygc2lkZXMuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgcG9seWdvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHJlZ3VsYXIgcG9seWdvbiBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnBvbHlnb24gPSBmdW5jdGlvbih4LCB5LCBzaWRlcywgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmIChzaWRlcyA8IDMpXG4gICAgICAgICAgICByZXR1cm4gQm9kaWVzLmNpcmNsZSh4LCB5LCByYWRpdXMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciB0aGV0YSA9IDIgKiBNYXRoLlBJIC8gc2lkZXMsXG4gICAgICAgICAgICBwYXRoID0gJycsXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGV0YSAqIDAuNTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IG9mZnNldCArIChpICogdGhldGEpLFxuICAgICAgICAgICAgICAgIHh4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgICAgICAgICAgIHl5ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuXG4gICAgICAgICAgICBwYXRoICs9ICdMICcgKyB4eC50b0ZpeGVkKDMpICsgJyAnICsgeXkudG9GaXhlZCgzKSArICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2x5Z29uID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnUG9seWdvbiBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aChwYXRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgcG9seWdvbi52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocG9seWdvbi52ZXJ0aWNlcywgY2hhbWZlci5yYWRpdXMsIFxuICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCBwb2x5Z29uLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgdG8gY3JlYXRlIGEgY29tcG91bmQgYm9keSBiYXNlZCBvbiBzZXQocykgb2YgdmVydGljZXMuXG4gICAgICogXG4gICAgICogX05vdGU6XyBUbyBvcHRpb25hbGx5IGVuYWJsZSBhdXRvbWF0aWMgY29uY2F2ZSB2ZXJ0aWNlcyBkZWNvbXBvc2l0aW9uIHRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgXG4gICAgICogcGFja2FnZSBtdXN0IGJlIGZpcnN0IGluc3RhbGxlZCBhbmQgcHJvdmlkZWQgc2VlIGBDb21tb24uc2V0RGVjb21wYCwgb3RoZXJ3aXNlIHRoZSBjb252ZXggaHVsbCBvZiBlYWNoIHZlcnRleCBzZXQgd2lsbCBiZSB1c2VkLlxuICAgICAqIFxuICAgICAqIFRoZSByZXN1bHRpbmcgdmVydGljZXMgYXJlIHJlb3JpZW50YXRlZCBhYm91dCB0aGVpciBjZW50cmUgb2YgbWFzcyxcbiAgICAgKiBhbmQgb2Zmc2V0IHN1Y2ggdGhhdCBgYm9keS5wb3NpdGlvbmAgY29ycmVzcG9uZHMgdG8gdGhpcyBwb2ludC5cbiAgICAgKiBcbiAgICAgKiBUaGUgcmVzdWx0aW5nIG9mZnNldCBtYXkgYmUgZm91bmQgaWYgbmVlZGVkIGJ5IHN1YnRyYWN0aW5nIGBib2R5LmJvdW5kc2AgZnJvbSB0aGUgb3JpZ2luYWwgaW5wdXQgYm91bmRzLlxuICAgICAqIFRvIGxhdGVyIG1vdmUgdGhlIGNlbnRyZSBvZiBtYXNzIHNlZSBgQm9keS5zZXRDZW50cmVgLlxuICAgICAqIFxuICAgICAqIE5vdGUgdGhhdCBhdXRvbWF0aWMgY29uY29uY2F2ZSBkZWNvbXBvc2l0aW9uIHJlc3VsdHMgYXJlIG5vdCBhbHdheXMgb3B0aW1hbC4gXG4gICAgICogRm9yIGJlc3QgcmVzdWx0cywgc2ltcGxpZnkgdGhlIGlucHV0IHZlcnRpY2VzIGFzIG11Y2ggYXMgcG9zc2libGUgZmlyc3QuXG4gICAgICogQnkgZGVmYXVsdCB0aGlzIGZ1bmN0aW9uIGFwcGxpZXMgc29tZSBhZGR0aW9uYWwgc2ltcGxpZmljYXRpb24gdG8gaGVscC5cbiAgICAgKiBcbiAgICAgKiBTb21lIG91dHB1dHMgbWF5IGFsc28gcmVxdWlyZSBmdXJ0aGVyIG1hbnVhbCBwcm9jZXNzaW5nIGFmdGVyd2FyZHMgdG8gYmUgcm9idXN0LlxuICAgICAqIEluIHBhcnRpY3VsYXIgc29tZSBwYXJ0cyBtYXkgbmVlZCB0byBiZSBvdmVybGFwcGVkIHRvIGF2b2lkIGNvbGxpc2lvbiBnYXBzLlxuICAgICAqIFRoaW4gcGFydHMgYW5kIHNoYXJwIHBvaW50cyBzaG91bGQgYmUgYXZvaWRlZCBvciByZW1vdmVkIHdoZXJlIHBvc3NpYmxlLlxuICAgICAqXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9iamVjdCBzcGVjaWZpZXMgYW55IGBNYXR0ZXIuQm9keWAgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBmcm9tVmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHthcnJheX0gdmVydGV4U2V0cyBPbmUgb3IgbW9yZSBhcnJheXMgb2YgdmVydGV4IHBvaW50cyBlLmcuIGBbW3sgeDogMCwgeTogMCB9Li4uXSwgLi4uXWAuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBUaGUgYm9keSBvcHRpb25zLlxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2ZsYWdJbnRlcm5hbD1mYWxzZV0gT3B0aW9uYWxseSBtYXJrcyBpbnRlcm5hbCBlZGdlcyB3aXRoIGBpc0ludGVybmFsYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JlbW92ZUNvbGxpbmVhcj0wLjAxXSBUaHJlc2hvbGQgd2hlbiBzaW1wbGlmeWluZyB2ZXJ0aWNlcyBhbG9uZyB0aGUgc2FtZSBlZGdlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluaW11bUFyZWE9MTBdIFRocmVzaG9sZCB3aGVuIHJlbW92aW5nIHNtYWxsIHBhcnRzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmVtb3ZlRHVwbGljYXRlUG9pbnRzPTAuMDFdIFRocmVzaG9sZCB3aGVuIHNpbXBsaWZ5aW5nIG5lYXJieSB2ZXJ0aWNlcy5cbiAgICAgKiBAcmV0dXJuIHtib2R5fVxuICAgICAqL1xuICAgIEJvZGllcy5mcm9tVmVydGljZXMgPSBmdW5jdGlvbih4LCB5LCB2ZXJ0ZXhTZXRzLCBvcHRpb25zLCBmbGFnSW50ZXJuYWwsIHJlbW92ZUNvbGxpbmVhciwgbWluaW11bUFyZWEsIHJlbW92ZUR1cGxpY2F0ZVBvaW50cykge1xuICAgICAgICB2YXIgZGVjb21wID0gQ29tbW9uLmdldERlY29tcCgpLFxuICAgICAgICAgICAgY2FuRGVjb21wLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICAgICAgaXNDb252ZXgsXG4gICAgICAgICAgICBpc0NvbmNhdmUsXG4gICAgICAgICAgICB2ZXJ0aWNlcyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHYsXG4gICAgICAgICAgICB6O1xuXG4gICAgICAgIC8vIGNoZWNrIGRlY29tcCBpcyBhcyBleHBlY3RlZFxuICAgICAgICBjYW5EZWNvbXAgPSBCb29sZWFuKGRlY29tcCAmJiBkZWNvbXAucXVpY2tEZWNvbXApO1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBwYXJ0cyA9IFtdO1xuXG4gICAgICAgIGZsYWdJbnRlcm5hbCA9IHR5cGVvZiBmbGFnSW50ZXJuYWwgIT09ICd1bmRlZmluZWQnID8gZmxhZ0ludGVybmFsIDogZmFsc2U7XG4gICAgICAgIHJlbW92ZUNvbGxpbmVhciA9IHR5cGVvZiByZW1vdmVDb2xsaW5lYXIgIT09ICd1bmRlZmluZWQnID8gcmVtb3ZlQ29sbGluZWFyIDogMC4wMTtcbiAgICAgICAgbWluaW11bUFyZWEgPSB0eXBlb2YgbWluaW11bUFyZWEgIT09ICd1bmRlZmluZWQnID8gbWluaW11bUFyZWEgOiAxMDtcbiAgICAgICAgcmVtb3ZlRHVwbGljYXRlUG9pbnRzID0gdHlwZW9mIHJlbW92ZUR1cGxpY2F0ZVBvaW50cyAhPT0gJ3VuZGVmaW5lZCcgPyByZW1vdmVEdXBsaWNhdGVQb2ludHMgOiAwLjAxO1xuXG4gICAgICAgIC8vIGVuc3VyZSB2ZXJ0ZXhTZXRzIGlzIGFuIGFycmF5IG9mIGFycmF5c1xuICAgICAgICBpZiAoIUNvbW1vbi5pc0FycmF5KHZlcnRleFNldHNbMF0pKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTZXRzID0gW3ZlcnRleFNldHNdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2ID0gMDsgdiA8IHZlcnRleFNldHMubGVuZ3RoOyB2ICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRpY2VzID0gdmVydGV4U2V0c1t2XTtcbiAgICAgICAgICAgIGlzQ29udmV4ID0gVmVydGljZXMuaXNDb252ZXgodmVydGljZXMpO1xuICAgICAgICAgICAgaXNDb25jYXZlID0gIWlzQ29udmV4O1xuXG4gICAgICAgICAgICBpZiAoaXNDb25jYXZlICYmICFjYW5EZWNvbXApIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoXG4gICAgICAgICAgICAgICAgICAgICdCb2RpZXMuZnJvbVZlcnRpY2VzOiBJbnN0YWxsIHRoZSBcXCdwb2x5LWRlY29tcFxcJyBsaWJyYXJ5IGFuZCB1c2UgQ29tbW9uLnNldERlY29tcCBvciBwcm92aWRlIFxcJ2RlY29tcFxcJyBhcyBhIGdsb2JhbCB0byBkZWNvbXBvc2UgY29uY2F2ZSB2ZXJ0aWNlcy4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQ29udmV4IHx8ICFjYW5EZWNvbXApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb252ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgPSBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0KHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayB0byBjb252ZXggaHVsbCB3aGVuIGRlY29tcG9zaXRpb24gaXMgbm90IHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gVmVydGljZXMuaHVsbCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpc2UgYSBkZWNvbXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdmFyIGNvbmNhdmUgPSB2ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmVydGV4LngsIHZlcnRleC55XTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHZlcnRpY2VzIGFyZSBjb25jYXZlIGFuZCBzaW1wbGUsIHdlIGNhbiBkZWNvbXBvc2UgaW50byBwYXJ0c1xuICAgICAgICAgICAgICAgIGRlY29tcC5tYWtlQ0NXKGNvbmNhdmUpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVDb2xsaW5lYXIgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBkZWNvbXAucmVtb3ZlQ29sbGluZWFyUG9pbnRzKGNvbmNhdmUsIHJlbW92ZUNvbGxpbmVhcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUR1cGxpY2F0ZVBvaW50cyAhPT0gZmFsc2UgJiYgZGVjb21wLnJlbW92ZUR1cGxpY2F0ZVBvaW50cylcbiAgICAgICAgICAgICAgICAgICAgZGVjb21wLnJlbW92ZUR1cGxpY2F0ZVBvaW50cyhjb25jYXZlLCByZW1vdmVEdXBsaWNhdGVQb2ludHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBxdWljayBkZWNvbXBvc2l0aW9uIGFsZ29yaXRobSAoQmF5YXppdClcbiAgICAgICAgICAgICAgICB2YXIgZGVjb21wb3NlZCA9IGRlY29tcC5xdWlja0RlY29tcChjb25jYXZlKTtcblxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGRlY29tcG9zZWQgY2h1bmtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVjb21wb3NlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSBkZWNvbXBvc2VkW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdmVydGljZXMgaW50byB0aGUgY29ycmVjdCBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rVmVydGljZXMgPSBjaHVuay5tYXAoZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdmVydGljZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdmVydGljZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgc21hbGwgY2h1bmtzXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5pbXVtQXJlYSA+IDAgJiYgVmVydGljZXMuYXJlYShjaHVua1ZlcnRpY2VzKSA8IG1pbmltdW1BcmVhKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgY29tcG91bmQgcGFydFxuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBWZXJ0aWNlcy5jZW50cmUoY2h1bmtWZXJ0aWNlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogY2h1bmtWZXJ0aWNlc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgYm9keSBwYXJ0c1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRzW2ldID0gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZChwYXJ0c1tpXSwgb3B0aW9ucykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmxhZyBpbnRlcm5hbCBlZGdlcyAoY29pbmNpZGVudCBwYXJ0IGVkZ2VzKVxuICAgICAgICBpZiAoZmxhZ0ludGVybmFsKSB7XG4gICAgICAgICAgICB2YXIgY29pbmNpZGVudF9tYXhfZGlzdCA9IDU7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0QSA9IHBhcnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEIgPSBwYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKHBhcnRBLmJvdW5kcywgcGFydEIuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdiA9IHBhcnRBLnZlcnRpY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBidiA9IHBhcnRCLnZlcnRpY2VzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIHZlcnRpY2VzIG9mIGJvdGggcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0QS52ZXJ0aWNlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeiA9IDA7IHogPCBwYXJ0Qi52ZXJ0aWNlcy5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGRpc3RhbmNlcyBiZXR3ZWVuIHRoZSB2ZXJ0aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGEgPSBWZWN0b3IubWFnbml0dWRlU3F1YXJlZChWZWN0b3Iuc3ViKHBhdlsoayArIDEpICUgcGF2Lmxlbmd0aF0sIHBidlt6XSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIgPSBWZWN0b3IubWFnbml0dWRlU3F1YXJlZChWZWN0b3Iuc3ViKHBhdltrXSwgcGJ2Wyh6ICsgMSkgJSBwYnYubGVuZ3RoXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGJvdGggdmVydGljZXMgYXJlIHZlcnkgY2xvc2UsIGNvbnNpZGVyIHRoZSBlZGdlIGNvbmNpZGVudCAoaW50ZXJuYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYSA8IGNvaW5jaWRlbnRfbWF4X2Rpc3QgJiYgZGIgPCBjb2luY2lkZW50X21heF9kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXZba10uaXNJbnRlcm5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnZbel0uaXNJbnRlcm5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHBhcmVudCBib2R5IHRvIGJlIHJldHVybmVkLCB0aGF0IGNvbnRhaW5zIGdlbmVyYXRlZCBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgYm9keSA9IEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBwYXJ0czogcGFydHMuc2xpY2UoMCkgfSwgb3B0aW9ucykpO1xuXG4gICAgICAgICAgICAvLyBvZmZzZXQgc3VjaCB0aGF0IGJvZHkucG9zaXRpb24gaXMgYXQgdGhlIGNlbnRyZSBvZmYgbWFzc1xuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7IHg6IHgsIHk6IHkgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Nb3VzZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgbW91c2UgaW5wdXRzLlxuKlxuKiBAY2xhc3MgTW91c2VcbiovXG5cbnZhciBNb3VzZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1vdXNlIGlucHV0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge21vdXNlfSBBIG5ldyBtb3VzZVxuICAgICAqL1xuICAgIE1vdXNlLmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0ge307XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBDb21tb24ubG9nKCdNb3VzZS5jcmVhdGU6IGVsZW1lbnQgd2FzIHVuZGVmaW5lZCwgZGVmYXVsdGluZyB0byBkb2N1bWVudC5ib2R5JywgJ3dhcm4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbW91c2UuZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbW91c2UuYWJzb2x1dGUgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5zY2FsZSA9IHsgeDogMSwgeTogMSB9O1xuICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gMDtcbiAgICAgICAgbW91c2UuYnV0dG9uID0gLTE7XG4gICAgICAgIG1vdXNlLnBpeGVsUmF0aW8gPSBwYXJzZUludChtb3VzZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1waXhlbC1yYXRpbycpLCAxMCkgfHwgMTtcblxuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMgPSB7XG4gICAgICAgICAgICBtb3VzZW1vdmU6IG51bGwsXG4gICAgICAgICAgICBtb3VzZWRvd246IG51bGwsXG4gICAgICAgICAgICBtb3VzZXVwOiBudWxsLFxuICAgICAgICAgICAgbW91c2V3aGVlbDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2Vtb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSBldmVudC5idXR0b247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbi55ID0gbW91c2UucG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNldXAgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueSA9IG1vdXNlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IGV2ZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vdXNlLm1vdXNld2hlZWwgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgTW91c2Uuc2V0RWxlbWVudChtb3VzZSwgbW91c2UuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IHRoZSBtb3VzZSBpcyBib3VuZCB0byAoYW5kIHJlbGF0aXZlIHRvKS5cbiAgICAgKiBAbWV0aG9kIHNldEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRFbGVtZW50ID0gZnVuY3Rpb24obW91c2UsIGVsZW1lbnQpIHtcbiAgICAgICAgbW91c2UuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZS5tb3VzZW1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlLm1vdXNlZG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlLm1vdXNldXApO1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2UubW91c2V3aGVlbCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBtb3VzZS5tb3VzZXdoZWVsKTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdXNlLm1vdXNlbW92ZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG1vdXNlLm1vdXNlZG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBtb3VzZS5tb3VzZXVwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjYXB0dXJlZCBzb3VyY2UgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgY2xlYXJTb3VyY2VFdmVudHNcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqL1xuICAgIE1vdXNlLmNsZWFyU291cmNlRXZlbnRzID0gZnVuY3Rpb24obW91c2UpIHtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXdoZWVsID0gbnVsbDtcbiAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vdXNlIHBvc2l0aW9uIG9mZnNldC5cbiAgICAgKiBAbWV0aG9kIHNldE9mZnNldFxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IG9mZnNldFxuICAgICAqL1xuICAgIE1vdXNlLnNldE9mZnNldCA9IGZ1bmN0aW9uKG1vdXNlLCBvZmZzZXQpIHtcbiAgICAgICAgbW91c2Uub2Zmc2V0LnggPSBvZmZzZXQueDtcbiAgICAgICAgbW91c2Uub2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiBzY2FsZS5cbiAgICAgKiBAbWV0aG9kIHNldFNjYWxlXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gc2NhbGVcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRTY2FsZSA9IGZ1bmN0aW9uKG1vdXNlLCBzY2FsZSkge1xuICAgICAgICBtb3VzZS5zY2FsZS54ID0gc2NhbGUueDtcbiAgICAgICAgbW91c2Uuc2NhbGUueSA9IHNjYWxlLnk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIGFuIGVsZW1lbnQgZ2l2ZW4gYSBzY3JlZW4gcGl4ZWwgcmF0aW8uXG4gICAgICogQG1ldGhvZCBfZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZXZlbnRcbiAgICAgKiBAcGFyYW0ge30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvXG4gICAgICogQHJldHVybiB7fVxuICAgICAqL1xuICAgIE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbihldmVudCwgZWxlbWVudCwgcGl4ZWxSYXRpbykge1xuICAgICAgICB2YXIgZWxlbWVudEJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICByb290Tm9kZSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLFxuICAgICAgICAgICAgc2Nyb2xsWCA9ICh3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiByb290Tm9kZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsWSA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiByb290Tm9kZS5zY3JvbGxUb3AsXG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICB4LCB5O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgIHggPSB0b3VjaGVzWzBdLnBhZ2VYIC0gZWxlbWVudEJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgPSB0b3VjaGVzWzBdLnBhZ2VZIC0gZWxlbWVudEJvdW5kcy50b3AgLSBzY3JvbGxZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYIC0gZWxlbWVudEJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgPSBldmVudC5wYWdlWSAtIGVsZW1lbnRCb3VuZHMudG9wIC0gc2Nyb2xsWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgeDogeCAvIChlbGVtZW50LmNsaWVudFdpZHRoIC8gKGVsZW1lbnQud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCkgKiBwaXhlbFJhdGlvKSxcbiAgICAgICAgICAgIHk6IHkgLyAoZWxlbWVudC5jbGllbnRIZWlnaHQgLyAoZWxlbWVudC5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQpICogcGl4ZWxSYXRpbylcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkRldGVjdG9yYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZWZmaWNpZW50bHkgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBhIGxpc3Qgb2YgYm9kaWVzIHVzaW5nIGEgYnJvYWRwaGFzZSBhbGdvcml0aG0uXG4qXG4qIEBjbGFzcyBEZXRlY3RvclxuKi9cblxudmFyIERldGVjdG9yID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0ZWN0b3I7XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sbGlzaW9uIGRldGVjdG9yLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtkZXRlY3Rvcn0gQSBuZXcgY29sbGlzaW9uIGRldGVjdG9yXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBib2RpZXM6IFtdLFxuICAgICAgICAgICAgcGFpcnM6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpc3Qgb2YgYm9kaWVzIGluIHRoZSBkZXRlY3Rvci5cbiAgICAgKiBAbWV0aG9kIHNldEJvZGllc1xuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIERldGVjdG9yLnNldEJvZGllcyA9IGZ1bmN0aW9uKGRldGVjdG9yLCBib2RpZXMpIHtcbiAgICAgICAgZGV0ZWN0b3IuYm9kaWVzID0gYm9kaWVzLnNsaWNlKDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGRldGVjdG9yIGluY2x1ZGluZyBpdHMgbGlzdCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY2xlYXIgPSBmdW5jdGlvbihkZXRlY3Rvcikge1xuICAgICAgICBkZXRlY3Rvci5ib2RpZXMgPSBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWZmaWNpZW50bHkgZmluZHMgYWxsIGNvbGxpc2lvbnMgYW1vbmcgYWxsIHRoZSBib2RpZXMgaW4gYGRldGVjdG9yLmJvZGllc2AgdXNpbmcgYSBicm9hZHBoYXNlIGFsZ29yaXRobS5cbiAgICAgKiBcbiAgICAgKiBfTm90ZTpfIFRoZSBzcGVjaWZpYyBvcmRlcmluZyBvZiBjb2xsaXNpb25zIHJldHVybmVkIGlzIG5vdCBndWFyYW50ZWVkIGJldHdlZW4gcmVsZWFzZXMgYW5kIG1heSBjaGFuZ2UgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gICAgICogSWYgYSBzcGVjaWZpYyBvcmRlcmluZyBpcyByZXF1aXJlZCB0aGVuIGFwcGx5IGEgc29ydCB0byB0aGUgcmVzdWx0aW5nIGFycmF5LlxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9uW119IGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jb2xsaXNpb25zID0gZnVuY3Rpb24oZGV0ZWN0b3IpIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBbXSxcbiAgICAgICAgICAgIHBhaXJzID0gZGV0ZWN0b3IucGFpcnMsXG4gICAgICAgICAgICBib2RpZXMgPSBkZXRlY3Rvci5ib2RpZXMsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgY2FuQ29sbGlkZSA9IERldGVjdG9yLmNhbkNvbGxpZGUsXG4gICAgICAgICAgICBjb2xsaWRlcyA9IENvbGxpc2lvbi5jb2xsaWRlcyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGJvZGllcy5zb3J0KERldGVjdG9yLl9jb21wYXJlQm91bmRzWCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgYm91bmRzQSA9IGJvZHlBLmJvdW5kcyxcbiAgICAgICAgICAgICAgICBib3VuZFhNYXggPSBib2R5QS5ib3VuZHMubWF4LngsXG4gICAgICAgICAgICAgICAgYm91bmRZTWF4ID0gYm9keUEuYm91bmRzLm1heC55LFxuICAgICAgICAgICAgICAgIGJvdW5kWU1pbiA9IGJvZHlBLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QVN0YXRpYyA9IGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcsXG4gICAgICAgICAgICAgICAgcGFydHNBTGVuZ3RoID0gYm9keUEucGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcnRzQVNpbmdsZSA9IHBhcnRzQUxlbmd0aCA9PT0gMTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBib2RpZXNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5QiA9IGJvZGllc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzQiA9IGJvZHlCLmJvdW5kcztcblxuICAgICAgICAgICAgICAgIGlmIChib3VuZHNCLm1pbi54ID4gYm91bmRYTWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChib3VuZFlNYXggPCBib3VuZHNCLm1pbi55IHx8IGJvdW5kWU1pbiA+IGJvdW5kc0IubWF4LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlBU3RhdGljICYmIChib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNhbkNvbGxpZGUoYm9keUEuY29sbGlzaW9uRmlsdGVyLCBib2R5Qi5jb2xsaXNpb25GaWx0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJ0c0JMZW5ndGggPSBib2R5Qi5wYXJ0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydHNBU2luZ2xlICYmIHBhcnRzQkxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gY29sbGlkZXMoYm9keUEsIGJvZHlCLCBwYWlycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydHNBU3RhcnQgPSBwYXJ0c0FMZW5ndGggPiAxID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0c0JTdGFydCA9IHBhcnRzQkxlbmd0aCA+IDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBwYXJ0c0FTdGFydDsgayA8IHBhcnRzQUxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBib2R5QS5wYXJ0c1trXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZHNBID0gcGFydEEuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gcGFydHNCU3RhcnQ7IHogPCBwYXJ0c0JMZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IGJvZHlCLnBhcnRzW3pdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZHNCID0gcGFydEIuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kc0EubWluLnggPiBib3VuZHNCLm1heC54IHx8IGJvdW5kc0EubWF4LnggPCBib3VuZHNCLm1pbi54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGJvdW5kc0EubWF4LnkgPCBib3VuZHNCLm1pbi55IHx8IGJvdW5kc0EubWluLnkgPiBib3VuZHNCLm1heC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaWRlcyhwYXJ0QSwgcGFydEIsIHBhaXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggc3VwcGxpZWQgY29sbGlzaW9uIGZpbHRlcnMgd2lsbCBhbGxvdyBhIGNvbGxpc2lvbiB0byBvY2N1ci5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIGNhbkNvbGxpZGVcbiAgICAgKiBAcGFyYW0ge30gZmlsdGVyQVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJCXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIGNvbGxpc2lvbiBjYW4gb2NjdXJcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jYW5Db2xsaWRlID0gZnVuY3Rpb24oZmlsdGVyQSwgZmlsdGVyQikge1xuICAgICAgICBpZiAoZmlsdGVyQS5ncm91cCA9PT0gZmlsdGVyQi5ncm91cCAmJiBmaWx0ZXJBLmdyb3VwICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckEuZ3JvdXAgPiAwO1xuXG4gICAgICAgIHJldHVybiAoZmlsdGVyQS5tYXNrICYgZmlsdGVyQi5jYXRlZ29yeSkgIT09IDAgJiYgKGZpbHRlckIubWFzayAmIGZpbHRlckEuY2F0ZWdvcnkpICE9PSAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB1c2VkIGluIHRoZSBicm9hZHBoYXNlIGFsZ29yaXRobS5cbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgZGVsdGEgb2YgdGhlIGJvZGllcyBib3VuZHMgb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgX3NvcnRDb21wYXJlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaWduZWQgZGVsdGEgdXNlZCBmb3Igc29ydGluZ1xuICAgICAqL1xuICAgIERldGVjdG9yLl9jb21wYXJlQm91bmRzWCA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4gYm9keUEuYm91bmRzLm1pbi54IC0gYm9keUIuYm91bmRzLm1pbi54O1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBhcnJheSBvZiBgTWF0dGVyLkJvZHlgIGJldHdlZW4gd2hpY2ggdGhlIGRldGVjdG9yIGZpbmRzIGNvbGxpc2lvbnMuXG4gICAgICogXG4gICAgICogX05vdGU6XyBUaGUgb3JkZXIgb2YgYm9kaWVzIGluIHRoaXMgYXJyYXkgX2lzIG5vdCBmaXhlZF8gYW5kIHdpbGwgYmUgY29udGludWFsbHkgbWFuYWdlZCBieSB0aGUgZGV0ZWN0b3IuXG4gICAgICogQHByb3BlcnR5IGJvZGllc1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbC4gQSBgTWF0dGVyLlBhaXJzYCBvYmplY3QgZnJvbSB3aGljaCBwcmV2aW91cyBjb2xsaXNpb24gb2JqZWN0cyBtYXkgYmUgcmV1c2VkLiBJbnRlbmRlZCBmb3IgaW50ZXJuYWwgYE1hdHRlci5FbmdpbmVgIHVzYWdlLlxuICAgICAqIEBwcm9wZXJ0eSBwYWlyc1xuICAgICAqIEB0eXBlIHtwYWlyc3xudWxsfVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5QbHVnaW5gIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgZm9yIHJlZ2lzdGVyaW5nIGFuZCBpbnN0YWxsaW5nIHBsdWdpbnMgb24gbW9kdWxlcy5cbipcbiogQGNsYXNzIFBsdWdpblxuKi9cblxudmFyIFBsdWdpbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsdWdpbjtcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFBsdWdpbi5fcmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHBsdWdpbiBvYmplY3Qgc28gaXQgY2FuIGJlIHJlc29sdmVkIGxhdGVyIGJ5IG5hbWUuXG4gICAgICogQG1ldGhvZCByZWdpc3RlclxuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbiB0byByZWdpc3Rlci5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwbHVnaW4uXG4gICAgICovXG4gICAgUGx1Z2luLnJlZ2lzdGVyID0gZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIGlmICghUGx1Z2luLmlzUGx1Z2luKHBsdWdpbikpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdkb2VzIG5vdCBpbXBsZW1lbnQgYWxsIHJlcXVpcmVkIGZpZWxkcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbHVnaW4ubmFtZSBpbiBQbHVnaW4uX3JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICB2YXIgcmVnaXN0ZXJlZCA9IFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdLFxuICAgICAgICAgICAgICAgIHBsdWdpblZlcnNpb24gPSBQbHVnaW4udmVyc2lvblBhcnNlKHBsdWdpbi52ZXJzaW9uKS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFZlcnNpb24gPSBQbHVnaW4udmVyc2lvblBhcnNlKHJlZ2lzdGVyZWQudmVyc2lvbikubnVtYmVyO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luVmVyc2lvbiA+IHJlZ2lzdGVyZWRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocmVnaXN0ZXJlZCksICd3YXMgdXBncmFkZWQgdG8nLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICAgICAgUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0gPSBwbHVnaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpblZlcnNpb24gPCByZWdpc3RlcmVkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHJlZ2lzdGVyZWQpLCAnY2FuIG5vdCBiZSBkb3duZ3JhZGVkIHRvJywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4gIT09IHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnaXMgYWxyZWFkeSByZWdpc3RlcmVkIHRvIGRpZmZlcmVudCBwbHVnaW4gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbHVnaW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIGEgZGVwZW5kZW5jeSB0byBhIHBsdWdpbiBvYmplY3QgZnJvbSB0aGUgcmVnaXN0cnkgaWYgaXQgZXhpc3RzLiBcbiAgICAgKiBUaGUgYGRlcGVuZGVuY3lgIG1heSBjb250YWluIGEgdmVyc2lvbiwgYnV0IG9ubHkgdGhlIG5hbWUgbWF0dGVycyB3aGVuIHJlc29sdmluZy5cbiAgICAgKiBAbWV0aG9kIHJlc29sdmVcbiAgICAgKiBAcGFyYW0gZGVwZW5kZW5jeSB7c3RyaW5nfSBUaGUgZGVwZW5kZW5jeS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwbHVnaW4gaWYgcmVzb2x2ZWQsIG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAgICAgKi9cbiAgICBQbHVnaW4ucmVzb2x2ZSA9IGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgcmV0dXJuIFBsdWdpbi5fcmVnaXN0cnlbUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShkZXBlbmRlbmN5KS5uYW1lXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZXR0eSBwcmludGVkIHBsdWdpbiBuYW1lIGFuZCB2ZXJzaW9uLlxuICAgICAqIEBtZXRob2QgdG9TdHJpbmdcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4uXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBQcmV0dHkgcHJpbnRlZCBwbHVnaW4gbmFtZSBhbmQgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBQbHVnaW4udG9TdHJpbmcgPSBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwbHVnaW4gPT09ICdzdHJpbmcnID8gcGx1Z2luIDogKHBsdWdpbi5uYW1lIHx8ICdhbm9ueW1vdXMnKSArICdAJyArIChwbHVnaW4udmVyc2lvbiB8fCBwbHVnaW4ucmFuZ2UgfHwgJzAuMC4wJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3QgbWVldHMgdGhlIG1pbmltdW0gc3RhbmRhcmQgdG8gYmUgY29uc2lkZXJlZCBhIHBsdWdpbi5cbiAgICAgKiBUaGlzIG1lYW5zIGl0IG11c3QgZGVmaW5lIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBuYW1lYFxuICAgICAqIC0gYHZlcnNpb25gXG4gICAgICogLSBgaW5zdGFsbGBcbiAgICAgKiBAbWV0aG9kIGlzUGx1Z2luXG4gICAgICogQHBhcmFtIG9iaiB7fSBUaGUgb2JqIHRvIHRlc3QuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBvYmplY3QgY2FuIGJlIGNvbnNpZGVyZWQgYSBwbHVnaW4gb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzUGx1Z2luID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLm5hbWUgJiYgb2JqLnZlcnNpb24gJiYgb2JqLmluc3RhbGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGEgcGx1Z2luIHdpdGggdGhlIGdpdmVuIGBuYW1lYCBiZWVuIGluc3RhbGxlZCBvbiBgbW9kdWxlYC5cbiAgICAgKiBAbWV0aG9kIGlzVXNlZFxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgcGx1Z2luIG5hbWUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGEgcGx1Z2luIHdpdGggdGhlIGdpdmVuIGBuYW1lYCBiZWVuIGluc3RhbGxlZCBvbiBgbW9kdWxlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzVXNlZCA9IGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnVzZWQuaW5kZXhPZihuYW1lKSA+IC0xO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgcGx1Z2luLmZvcmAgaXMgYXBwbGljYWJsZSB0byBgbW9kdWxlYCBieSBjb21wYXJpbmcgYWdhaW5zdCBgbW9kdWxlLm5hbWVgIGFuZCBgbW9kdWxlLnZlcnNpb25gLlxuICAgICAqIElmIGBwbHVnaW4uZm9yYCBpcyBub3Qgc3BlY2lmaWVkIHRoZW4gaXQgaXMgYXNzdW1lZCB0byBiZSBhcHBsaWNhYmxlLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgcGx1Z2luLmZvcmAgaXMgYSBzdHJpbmcgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogQG1ldGhvZCBpc0ZvclxuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbi5cbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGBwbHVnaW4uZm9yYCBpcyBhcHBsaWNhYmxlIHRvIGBtb2R1bGVgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNGb3IgPSBmdW5jdGlvbihwbHVnaW4sIG1vZHVsZSkge1xuICAgICAgICB2YXIgcGFyc2VkID0gcGx1Z2luLmZvciAmJiBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKHBsdWdpbi5mb3IpO1xuICAgICAgICByZXR1cm4gIXBsdWdpbi5mb3IgfHwgKG1vZHVsZS5uYW1lID09PSBwYXJzZWQubmFtZSAmJiBQbHVnaW4udmVyc2lvblNhdGlzZmllcyhtb2R1bGUudmVyc2lvbiwgcGFyc2VkLnJhbmdlKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbGxzIHRoZSBwbHVnaW5zIGJ5IGNhbGxpbmcgYHBsdWdpbi5pbnN0YWxsYCBvbiBlYWNoIHBsdWdpbiBzcGVjaWZpZWQgaW4gYHBsdWdpbnNgIGlmIHBhc3NlZCwgb3RoZXJ3aXNlIGBtb2R1bGUudXNlc2AuXG4gICAgICogRm9yIGluc3RhbGxpbmcgcGx1Z2lucyBvbiBgTWF0dGVyYCBzZWUgdGhlIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGBNYXR0ZXIudXNlYC5cbiAgICAgKiBQbHVnaW5zIG1heSBiZSBzcGVjaWZpZWQgZWl0aGVyIGJ5IHRoZWlyIG5hbWUgb3IgYSByZWZlcmVuY2UgdG8gdGhlIHBsdWdpbiBvYmplY3QuXG4gICAgICogUGx1Z2lucyB0aGVtc2VsdmVzIG1heSBzcGVjaWZ5IGZ1cnRoZXIgZGVwZW5kZW5jaWVzLCBidXQgZWFjaCBwbHVnaW4gaXMgaW5zdGFsbGVkIG9ubHkgb25jZS5cbiAgICAgKiBPcmRlciBpcyBpbXBvcnRhbnQsIGEgdG9wb2xvZ2ljYWwgc29ydCBpcyBwZXJmb3JtZWQgdG8gZmluZCB0aGUgYmVzdCByZXN1bHRpbmcgb3JkZXIgb2YgaW5zdGFsbGF0aW9uLlxuICAgICAqIFRoaXMgc29ydGluZyBhdHRlbXB0cyB0byBzYXRpc2Z5IGV2ZXJ5IGRlcGVuZGVuY3kncyByZXF1ZXN0ZWQgb3JkZXJpbmcsIGJ1dCBtYXkgbm90IGJlIGV4YWN0IGluIGFsbCBjYXNlcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGxvZ3MgdGhlIHJlc3VsdGluZyBzdGF0dXMgb2YgZWFjaCBkZXBlbmRlbmN5IGluIHRoZSBjb25zb2xlLCBhbG9uZyB3aXRoIGFueSB3YXJuaW5ncy5cbiAgICAgKiAtIEEgZ3JlZW4gdGljayDinIUgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSB3YXMgcmVzb2x2ZWQgYW5kIGluc3RhbGxlZC5cbiAgICAgKiAtIEFuIG9yYW5nZSBkaWFtb25kIPCflLYgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSB3YXMgcmVzb2x2ZWQgYnV0IGEgd2FybmluZyB3YXMgdGhyb3duIGZvciBpdCBvciBvbmUgaWYgaXRzIGRlcGVuZGVuY2llcy5cbiAgICAgKiAtIEEgcmVkIGNyb3NzIOKdjCBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IGNvdWxkIG5vdCBiZSByZXNvbHZlZC5cbiAgICAgKiBBdm9pZCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgbW9kdWxlIHVubGVzcyB5b3UgaW50ZW5kIHRvIG1hbnVhbGx5IGNvbnRyb2wgaW5zdGFsbGF0aW9uIG9yZGVyLlxuICAgICAqIEBtZXRob2QgdXNlXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlIGluc3RhbGwgcGx1Z2lucyBvbi5cbiAgICAgKiBAcGFyYW0gW3BsdWdpbnM9bW9kdWxlLnVzZXNdIHt9IFRoZSBwbHVnaW5zIHRvIGluc3RhbGwgb24gbW9kdWxlIChvcHRpb25hbCwgZGVmYXVsdHMgdG8gYG1vZHVsZS51c2VzYCkuXG4gICAgICovXG4gICAgUGx1Z2luLnVzZSA9IGZ1bmN0aW9uKG1vZHVsZSwgcGx1Z2lucykge1xuICAgICAgICBtb2R1bGUudXNlcyA9IChtb2R1bGUudXNlcyB8fCBbXSkuY29uY2F0KHBsdWdpbnMgfHwgW10pO1xuXG4gICAgICAgIGlmIChtb2R1bGUudXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhtb2R1bGUpLCAnZG9lcyBub3Qgc3BlY2lmeSBhbnkgZGVwZW5kZW5jaWVzIHRvIGluc3RhbGwuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVwZW5kZW5jaWVzID0gUGx1Z2luLmRlcGVuZGVuY2llcyhtb2R1bGUpLFxuICAgICAgICAgICAgc29ydGVkRGVwZW5kZW5jaWVzID0gQ29tbW9uLnRvcG9sb2dpY2FsU29ydChkZXBlbmRlbmNpZXMpLFxuICAgICAgICAgICAgc3RhdHVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzb3J0ZWREZXBlbmRlbmNpZXNbaV0gPT09IG1vZHVsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwbHVnaW4gPSBQbHVnaW4ucmVzb2x2ZShzb3J0ZWREZXBlbmRlbmNpZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoIXBsdWdpbikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfinYwgJyArIHNvcnRlZERlcGVuZGVuY2llc1tpXSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChQbHVnaW4uaXNVc2VkKG1vZHVsZSwgcGx1Z2luLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghUGx1Z2luLmlzRm9yKHBsdWdpbiwgbW9kdWxlKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnaXMgZm9yJywgcGx1Z2luLmZvciwgJ2J1dCBpbnN0YWxsZWQgb24nLCBQbHVnaW4udG9TdHJpbmcobW9kdWxlKSArICcuJyk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmluc3RhbGwpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5zdGFsbChtb2R1bGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2RvZXMgbm90IHNwZWNpZnkgYW4gaW5zdGFsbCBmdW5jdGlvbi4nKTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uX3dhcm5lZCkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfwn5S2ICcgKyBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsdWdpbi5fd2FybmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn4pyFICcgKyBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZHVsZS51c2VkLnB1c2gocGx1Z2luLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXR1cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBDb21tb24uaW5mbyhzdGF0dXMuam9pbignICAnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgZmluZHMgYWxsIG9mIGEgbW9kdWxlJ3MgZGVwZW5kZW5jaWVzIGFuZCByZXR1cm5zIGEgZmxhdCBkZXBlbmRlbmN5IGdyYXBoLlxuICAgICAqIEBtZXRob2QgZGVwZW5kZW5jaWVzXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gQSBkZXBlbmRlbmN5IGdyYXBoLlxuICAgICAqL1xuICAgIFBsdWdpbi5kZXBlbmRlbmNpZXMgPSBmdW5jdGlvbihtb2R1bGUsIHRyYWNrZWQpIHtcbiAgICAgICAgdmFyIHBhcnNlZEJhc2UgPSBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKG1vZHVsZSksXG4gICAgICAgICAgICBuYW1lID0gcGFyc2VkQmFzZS5uYW1lO1xuXG4gICAgICAgIHRyYWNrZWQgPSB0cmFja2VkIHx8IHt9O1xuXG4gICAgICAgIGlmIChuYW1lIGluIHRyYWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZHVsZSA9IFBsdWdpbi5yZXNvbHZlKG1vZHVsZSkgfHwgbW9kdWxlO1xuXG4gICAgICAgIHRyYWNrZWRbbmFtZV0gPSBDb21tb24ubWFwKG1vZHVsZS51c2VzIHx8IFtdLCBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICBpZiAoUGx1Z2luLmlzUGx1Z2luKGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgUGx1Z2luLnJlZ2lzdGVyKGRlcGVuZGVuY3kpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShkZXBlbmRlbmN5KSxcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IFBsdWdpbi5yZXNvbHZlKGRlcGVuZGVuY3kpO1xuXG4gICAgICAgICAgICBpZiAocmVzb2x2ZWQgJiYgIVBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzKHJlc29sdmVkLnZlcnNpb24sIHBhcnNlZC5yYW5nZSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ1BsdWdpbi5kZXBlbmRlbmNpZXM6JywgUGx1Z2luLnRvU3RyaW5nKHJlc29sdmVkKSwgJ2RvZXMgbm90IHNhdGlzZnknLFxuICAgICAgICAgICAgICAgICAgICBQbHVnaW4udG9TdHJpbmcocGFyc2VkKSwgJ3VzZWQgYnknLCBQbHVnaW4udG9TdHJpbmcocGFyc2VkQmFzZSkgKyAnLidcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9kdWxlLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ1BsdWdpbi5kZXBlbmRlbmNpZXM6JywgUGx1Z2luLnRvU3RyaW5nKGRlcGVuZGVuY3kpLCAndXNlZCBieScsXG4gICAgICAgICAgICAgICAgICAgIFBsdWdpbi50b1N0cmluZyhwYXJzZWRCYXNlKSwgJ2NvdWxkIG5vdCBiZSByZXNvbHZlZC4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG1vZHVsZS5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5uYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrZWRbbmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFBsdWdpbi5kZXBlbmRlbmNpZXModHJhY2tlZFtuYW1lXVtpXSwgdHJhY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhY2tlZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZGVwZW5kZW5jeSBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKiBUaGUgYGRlcGVuZGVuY3lgIGlzIGEgc3RyaW5nIG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIGhhbmRsZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgYWxyZWFkeSByZXNvbHZlZCAoZS5nLiBhIG1vZHVsZSBvYmplY3QpLlxuICAgICAqIEBtZXRob2QgZGVwZW5kZW5jeVBhcnNlXG4gICAgICogQHBhcmFtIGRlcGVuZGVuY3kge3N0cmluZ30gVGhlIGRlcGVuZGVuY3kgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgZGVwZW5kZW5jeSBwYXJzZWQgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlID0gZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzU3RyaW5nKGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC9eW1xcdy1dKyhAKFxcKnxbXFxefl0/XFxkK1xcLlxcZCtcXC5cXGQrKC1bMC05QS1aYS16LStdKyk/KSk/JC87XG5cbiAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5kZXBlbmRlbmN5UGFyc2U6JywgZGVwZW5kZW5jeSwgJ2lzIG5vdCBhIHZhbGlkIGRlcGVuZGVuY3kgc3RyaW5nLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kuc3BsaXQoJ0AnKVswXSxcbiAgICAgICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzFdIHx8ICcqJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBkZXBlbmRlbmN5Lm5hbWUsXG4gICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5yYW5nZSB8fCBkZXBlbmRlbmN5LnZlcnNpb25cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgdmVyc2lvbiBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy4gIFxuICAgICAqIFZlcnNpb25zIGFyZSBzdHJpY3RseSBvZiB0aGUgZm9ybWF0IGB4LnkuemAgKGFzIGluIFtzZW12ZXJdKGh0dHA6Ly9zZW12ZXIub3JnLykpLlxuICAgICAqIFZlcnNpb25zIG1heSBvcHRpb25hbGx5IGhhdmUgYSBwcmVyZWxlYXNlIHRhZyBpbiB0aGUgZm9ybWF0IGB4Lnkuei1hbHBoYWAuXG4gICAgICogUmFuZ2VzIGFyZSBhIHN0cmljdCBzdWJzZXQgb2YgW25wbSByYW5nZXNdKGh0dHBzOi8vZG9jcy5ucG1qcy5jb20vbWlzYy9zZW12ZXIjYWR2YW5jZWQtcmFuZ2Utc3ludGF4KS5cbiAgICAgKiBPbmx5IHRoZSBmb2xsb3dpbmcgcmFuZ2UgdHlwZXMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAtIFRpbGRlIHJhbmdlcyBlLmcuIGB+MS4yLjNgXG4gICAgICogLSBDYXJldCByYW5nZXMgZS5nLiBgXjEuMi4zYFxuICAgICAqIC0gR3JlYXRlciB0aGFuIHJhbmdlcyBlLmcuIGA+MS4yLjNgXG4gICAgICogLSBHcmVhdGVyIHRoYW4gb3IgZXF1YWwgcmFuZ2VzIGUuZy4gYD49MS4yLjNgXG4gICAgICogLSBFeGFjdCB2ZXJzaW9uIGUuZy4gYDEuMi4zYFxuICAgICAqIC0gQW55IHZlcnNpb24gYCpgXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uUGFyc2VcbiAgICAgKiBAcGFyYW0gcmFuZ2Uge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHZlcnNpb24gcmFuZ2UgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLnZlcnNpb25QYXJzZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oXFwqKXwoXFxefH58Pj18Pik/XFxzKigoXFxkKylcXC4oXFxkKylcXC4oXFxkKykpKC1bMC05QS1aYS16LStdKyk/JC87XG5cbiAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QocmFuZ2UpKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnZlcnNpb25QYXJzZTonLCByYW5nZSwgJ2lzIG5vdCBhIHZhbGlkIHZlcnNpb24gb3IgcmFuZ2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydHMgPSBwYXR0ZXJuLmV4ZWMocmFuZ2UpO1xuICAgICAgICB2YXIgbWFqb3IgPSBOdW1iZXIocGFydHNbNF0pO1xuICAgICAgICB2YXIgbWlub3IgPSBOdW1iZXIocGFydHNbNV0pO1xuICAgICAgICB2YXIgcGF0Y2ggPSBOdW1iZXIocGFydHNbNl0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JhbmdlOiBCb29sZWFuKHBhcnRzWzFdIHx8IHBhcnRzWzJdKSxcbiAgICAgICAgICAgIHZlcnNpb246IHBhcnRzWzNdLFxuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgb3BlcmF0b3I6IHBhcnRzWzFdIHx8IHBhcnRzWzJdIHx8ICcnLFxuICAgICAgICAgICAgbWFqb3I6IG1ham9yLFxuICAgICAgICAgICAgbWlub3I6IG1pbm9yLFxuICAgICAgICAgICAgcGF0Y2g6IHBhdGNoLFxuICAgICAgICAgICAgcGFydHM6IFttYWpvciwgbWlub3IsIHBhdGNoXSxcbiAgICAgICAgICAgIHByZXJlbGVhc2U6IHBhcnRzWzddLFxuICAgICAgICAgICAgbnVtYmVyOiBtYWpvciAqIDFlOCArIG1pbm9yICogMWU0ICsgcGF0Y2hcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYHZlcnNpb25gIHNhdGlzZmllcyB0aGUgZ2l2ZW4gYHJhbmdlYC5cbiAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgYFBsdWdpbi52ZXJzaW9uUGFyc2VgIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBmb3JtYXQuXG4gICAgICogSWYgYSB2ZXJzaW9uIG9yIHJhbmdlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZW4gYW55IHZlcnNpb24gKGAqYCkgaXMgYXNzdW1lZCB0byBzYXRpc2Z5LlxuICAgICAqIEBtZXRob2QgdmVyc2lvblNhdGlzZmllc1xuICAgICAqIEBwYXJhbSB2ZXJzaW9uIHtzdHJpbmd9IFRoZSB2ZXJzaW9uIHN0cmluZy5cbiAgICAgKiBAcGFyYW0gcmFuZ2Uge3N0cmluZ30gVGhlIHJhbmdlIHN0cmluZy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgYHZlcnNpb25gIHNhdGlzZmllcyBgcmFuZ2VgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4udmVyc2lvblNhdGlzZmllcyA9IGZ1bmN0aW9uKHZlcnNpb24sIHJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gcmFuZ2UgfHwgJyonO1xuXG4gICAgICAgIHZhciByID0gUGx1Z2luLnZlcnNpb25QYXJzZShyYW5nZSksXG4gICAgICAgICAgICB2ID0gUGx1Z2luLnZlcnNpb25QYXJzZSh2ZXJzaW9uKTtcblxuICAgICAgICBpZiAoci5pc1JhbmdlKSB7XG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJyonIHx8IHZlcnNpb24gPT09ICcqJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYubnVtYmVyID4gci5udW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYubnVtYmVyID49IHIubnVtYmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJ34nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYubWFqb3IgPT09IHIubWFqb3IgJiYgdi5taW5vciA9PT0gci5taW5vciAmJiB2LnBhdGNoID49IHIucGF0Y2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnXicpIHtcbiAgICAgICAgICAgICAgICBpZiAoci5tYWpvciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYubWFqb3IgPT09IHIubWFqb3IgJiYgdi5udW1iZXIgPj0gci5udW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHIubWlub3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Lm1pbm9yID09PSByLm1pbm9yICYmIHYucGF0Y2ggPj0gci5wYXRjaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdi5wYXRjaCA9PT0gci5wYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJzaW9uID09PSByYW5nZSB8fCB2ZXJzaW9uID09PSAnKic7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5SZW5kZXJgIG1vZHVsZSBpcyBhIHNpbXBsZSBjYW52YXMgYmFzZWQgcmVuZGVyZXIgZm9yIHZpc3VhbGlzaW5nIGluc3RhbmNlcyBvZiBgTWF0dGVyLkVuZ2luZWAuXG4qIEl0IGlzIGludGVuZGVkIGZvciBkZXZlbG9wbWVudCBhbmQgZGVidWdnaW5nIHB1cnBvc2VzLCBidXQgbWF5IGFsc28gYmUgc3VpdGFibGUgZm9yIHNpbXBsZSBnYW1lcy5cbiogSXQgaW5jbHVkZXMgYSBudW1iZXIgb2YgZHJhd2luZyBvcHRpb25zIGluY2x1ZGluZyB3aXJlZnJhbWUsIHZlY3RvciB3aXRoIHN1cHBvcnQgZm9yIHNwcml0ZXMgYW5kIHZpZXdwb3J0cy5cbipcbiogQGNsYXNzIFJlbmRlclxuKi9cblxudmFyIFJlbmRlciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcjtcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBNb3VzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24oY2FsbGJhY2speyB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soQ29tbW9uLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcblxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICBSZW5kZXIuX2dvb2RGcHMgPSAzMDtcbiAgICBSZW5kZXIuX2dvb2REZWx0YSA9IDEwMDAgLyA2MDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmVuZGVyZXIuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtyZW5kZXJ9IEEgbmV3IHJlbmRlcmVyXG4gICAgICovXG4gICAgUmVuZGVyLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29udHJvbGxlcjogUmVuZGVyLFxuICAgICAgICAgICAgZW5naW5lOiBudWxsLFxuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgICAgICAgIG1vdXNlOiBudWxsLFxuICAgICAgICAgICAgZnJhbWVSZXF1ZXN0SWQ6IG51bGwsXG4gICAgICAgICAgICB0aW1pbmc6IHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5U2l6ZTogNjAsXG4gICAgICAgICAgICAgICAgZGVsdGE6IDAsXG4gICAgICAgICAgICAgICAgZGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBsYXN0VGltZTogMCxcbiAgICAgICAgICAgICAgICBsYXN0VGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgICAgIGxhc3RFbGFwc2VkOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWQ6IDAsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZEhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGVuZ2luZURlbHRhSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZW5naW5lRWxhcHNlZEhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGVsYXBzZWRIaXN0b3J5OiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgIHBpeGVsUmF0aW86IDEsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMxNDE1MWYnLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZUJhY2tncm91bmQ6ICcjMTQxNTFmJyxcbiAgICAgICAgICAgICAgICBoYXNCb3VuZHM6ICEhb3B0aW9ucy5ib3VuZHMsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dTbGVlcGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93RGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dTdGF0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1BlcmZvcm1hbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Qm91bmRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VmVsb2NpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dDb2xsaXNpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U2VwYXJhdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBeGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UG9zaXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZXJ0ZXhOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q29udmV4SHVsbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93TW91c2VQb3NpdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVuZGVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlbmRlci5jYW52YXMpIHtcbiAgICAgICAgICAgIHJlbmRlci5jYW52YXMud2lkdGggPSByZW5kZXIub3B0aW9ucy53aWR0aCB8fCByZW5kZXIuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgcmVuZGVyLmNhbnZhcy5oZWlnaHQgPSByZW5kZXIub3B0aW9ucy5oZWlnaHQgfHwgcmVuZGVyLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIubW91c2UgPSBvcHRpb25zLm1vdXNlO1xuICAgICAgICByZW5kZXIuZW5naW5lID0gb3B0aW9ucy5lbmdpbmU7XG4gICAgICAgIHJlbmRlci5jYW52YXMgPSByZW5kZXIuY2FudmFzIHx8IF9jcmVhdGVDYW52YXMocmVuZGVyLm9wdGlvbnMud2lkdGgsIHJlbmRlci5vcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHJlbmRlci5jb250ZXh0ID0gcmVuZGVyLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICByZW5kZXIudGV4dHVyZXMgPSB7fTtcblxuICAgICAgICByZW5kZXIuYm91bmRzID0gcmVuZGVyLmJvdW5kcyB8fCB7XG4gICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICB4OiByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IHJlbmRlci5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZm9yIHRlbXBvcmFyeSBiYWNrIGNvbXBhdGliaWxpdHkgb25seVxuICAgICAgICByZW5kZXIub3B0aW9ucy5zaG93QnJvYWRwaGFzZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICBSZW5kZXIuc2V0UGl4ZWxSYXRpbyhyZW5kZXIsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbW1vbi5pc0VsZW1lbnQocmVuZGVyLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZW5kZXIuZWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXIuY2FudmFzKTtcbiAgICAgICAgfSBlbHNlIGlmICghcmVuZGVyLmNhbnZhcy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBDb21tb24ubG9nKCdSZW5kZXIuY3JlYXRlOiBvcHRpb25zLmVsZW1lbnQgd2FzIHVuZGVmaW5lZCwgcmVuZGVyLmNhbnZhcyB3YXMgY3JlYXRlZCBidXQgbm90IGFwcGVuZGVkJywgJ3dhcm4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnRpbnVvdXNseSB1cGRhdGVzIHRoZSByZW5kZXIgY2FudmFzIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIucnVuID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIChmdW5jdGlvbiBsb29wKHRpbWUpe1xuICAgICAgICAgICAgcmVuZGVyLmZyYW1lUmVxdWVzdElkID0gX3JlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3VwZGF0ZVRpbWluZyhyZW5kZXIsIHRpbWUpO1xuXG4gICAgICAgICAgICBSZW5kZXIud29ybGQocmVuZGVyLCB0aW1lKTtcblxuICAgICAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnNob3dTdGF0cyB8fCByZW5kZXIub3B0aW9ucy5zaG93RGVidWcpIHtcbiAgICAgICAgICAgICAgICBSZW5kZXIuc3RhdHMocmVuZGVyLCByZW5kZXIuY29udGV4dCwgdGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5zaG93UGVyZm9ybWFuY2UgfHwgcmVuZGVyLm9wdGlvbnMuc2hvd0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgUmVuZGVyLnBlcmZvcm1hbmNlKHJlbmRlciwgcmVuZGVyLmNvbnRleHQsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUmVuZGVyLnJ1bmAgb24gdGhlIGdpdmVuIGByZW5kZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogQG1ldGhvZCBzdG9wXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5zdG9wID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIuZnJhbWVSZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwaXhlbCByYXRpbyBvZiB0aGUgcmVuZGVyZXIgYW5kIHVwZGF0ZXMgdGhlIGNhbnZhcy5cbiAgICAgKiBUbyBhdXRvbWF0aWNhbGx5IGRldGVjdCB0aGUgY29ycmVjdCByYXRpbywgcGFzcyB0aGUgc3RyaW5nIGAnYXV0bydgIGZvciBgcGl4ZWxSYXRpb2AuXG4gICAgICogQG1ldGhvZCBzZXRQaXhlbFJhdGlvXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvXG4gICAgICovXG4gICAgUmVuZGVyLnNldFBpeGVsUmF0aW8gPSBmdW5jdGlvbihyZW5kZXIsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXM7XG5cbiAgICAgICAgaWYgKHBpeGVsUmF0aW8gPT09ICdhdXRvJykge1xuICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IF9nZXRQaXhlbFJhdGlvKGNhbnZhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXBpeGVsLXJhdGlvJywgcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKiBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb25zIGFuZCBzaXplcyB0aGUgdmlld3BvcnQgYXJvdW5kIHRoZSBnaXZlbiBvYmplY3QgYm91bmRzLlxuICAgICAqIE9iamVjdHMgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogLSBgb2JqZWN0LmJvdW5kc2BcbiAgICAgKiAtIGBvYmplY3QucG9zaXRpb25gXG4gICAgICogLSBgb2JqZWN0Lm1pbmAgYW5kIGBvYmplY3QubWF4YFxuICAgICAqIC0gYG9iamVjdC54YCBhbmQgYG9iamVjdC55YFxuICAgICAqIEBtZXRob2QgbG9va0F0XG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BhZGRpbmddXG4gICAgICogQHBhcmFtIHtib29sfSBbY2VudGVyPXRydWVdXG4gICAgICovXG4gICAgUmVuZGVyLmxvb2tBdCA9IGZ1bmN0aW9uKHJlbmRlciwgb2JqZWN0cywgcGFkZGluZywgY2VudGVyKSB7XG4gICAgICAgIGNlbnRlciA9IHR5cGVvZiBjZW50ZXIgIT09ICd1bmRlZmluZWQnID8gY2VudGVyIDogdHJ1ZTtcbiAgICAgICAgb2JqZWN0cyA9IENvbW1vbi5pc0FycmF5KG9iamVjdHMpID8gb2JqZWN0cyA6IFtvYmplY3RzXTtcbiAgICAgICAgcGFkZGluZyA9IHBhZGRpbmcgfHwge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmaW5kIGJvdW5kcyBvZiBhbGwgb2JqZWN0c1xuICAgICAgICB2YXIgYm91bmRzID0ge1xuICAgICAgICAgICAgbWluOiB7IHg6IEluZmluaXR5LCB5OiBJbmZpbml0eSB9LFxuICAgICAgICAgICAgbWF4OiB7IHg6IC1JbmZpbml0eSwgeTogLUluZmluaXR5IH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzW2ldLFxuICAgICAgICAgICAgICAgIG1pbiA9IG9iamVjdC5ib3VuZHMgPyBvYmplY3QuYm91bmRzLm1pbiA6IChvYmplY3QubWluIHx8IG9iamVjdC5wb3NpdGlvbiB8fCBvYmplY3QpLFxuICAgICAgICAgICAgICAgIG1heCA9IG9iamVjdC5ib3VuZHMgPyBvYmplY3QuYm91bmRzLm1heCA6IChvYmplY3QubWF4IHx8IG9iamVjdC5wb3NpdGlvbiB8fCBvYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAobWluICYmIG1heCkge1xuICAgICAgICAgICAgICAgIGlmIChtaW4ueCA8IGJvdW5kcy5taW4ueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1pbi54ID0gbWluLng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4LnggPiBib3VuZHMubWF4LngpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueCA9IG1heC54O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbi55IDwgYm91bmRzLm1pbi55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnkgPSBtaW4ueTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueSA+IGJvdW5kcy5tYXgueSlcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC55ID0gbWF4Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHJhdGlvc1xuICAgICAgICB2YXIgd2lkdGggPSAoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54KSArIDIgKiBwYWRkaW5nLngsXG4gICAgICAgICAgICBoZWlnaHQgPSAoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSArIDIgKiBwYWRkaW5nLnksXG4gICAgICAgICAgICB2aWV3SGVpZ2h0ID0gcmVuZGVyLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICB2aWV3V2lkdGggPSByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgb3V0ZXJSYXRpbyA9IHZpZXdXaWR0aCAvIHZpZXdIZWlnaHQsXG4gICAgICAgICAgICBpbm5lclJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgICBzY2FsZVggPSAxLFxuICAgICAgICAgICAgc2NhbGVZID0gMTtcblxuICAgICAgICAvLyBmaW5kIHNjYWxlIGZhY3RvclxuICAgICAgICBpZiAoaW5uZXJSYXRpbyA+IG91dGVyUmF0aW8pIHtcbiAgICAgICAgICAgIHNjYWxlWSA9IGlubmVyUmF0aW8gLyBvdXRlclJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NhbGVYID0gb3V0ZXJSYXRpbyAvIGlubmVyUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmFibGUgYm91bmRzXG4gICAgICAgIHJlbmRlci5vcHRpb25zLmhhc0JvdW5kcyA9IHRydWU7XG5cbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIHNpemVcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCA9IGJvdW5kcy5taW4ueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCA9IGJvdW5kcy5taW4ueCArIHdpZHRoICogc2NhbGVYO1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ID0gYm91bmRzLm1pbi55O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC55ID0gYm91bmRzLm1pbi55ICsgaGVpZ2h0ICogc2NhbGVZO1xuXG4gICAgICAgIC8vIGNlbnRlclxuICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ICs9IHdpZHRoICogMC41IC0gKHdpZHRoICogc2NhbGVYKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgKz0gaGVpZ2h0ICogMC41IC0gKGhlaWdodCAqIHNjYWxlWSkgKiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYWRkaW5nXG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54IC09IHBhZGRpbmcueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSAtPSBwYWRkaW5nLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgLT0gcGFkZGluZy55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICBpZiAocmVuZGVyLm1vdXNlKSB7XG4gICAgICAgICAgICBNb3VzZS5zZXRTY2FsZShyZW5kZXIubW91c2UsIHtcbiAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiAocmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnkpIC8gcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBNb3VzZS5zZXRPZmZzZXQocmVuZGVyLm1vdXNlLCByZW5kZXIuYm91bmRzLm1pbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB2aWV3cG9ydCB0cmFuc2Zvcm1zIGJhc2VkIG9uIGByZW5kZXIuYm91bmRzYCB0byBhIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2Qgc3RhcnRWaWV3VHJhbnNmb3JtXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5zdGFydFZpZXdUcmFuc2Zvcm0gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgdmFyIGJvdW5kc1dpZHRoID0gcmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngsXG4gICAgICAgICAgICBib3VuZHNIZWlnaHQgPSByZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICBib3VuZHNTY2FsZVkgPSBib3VuZHNIZWlnaHQgLyByZW5kZXIub3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAvIGJvdW5kc1NjYWxlWCwgMCwgMCwgXG4gICAgICAgICAgICByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvIC8gYm91bmRzU2NhbGVZLCAwLCAwXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZW5kZXIuY29udGV4dC50cmFuc2xhdGUoLXJlbmRlci5ib3VuZHMubWluLngsIC1yZW5kZXIuYm91bmRzLm1pbi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIGFsbCB0cmFuc2Zvcm1zIG9uIHRoZSByZW5kZXIgY29udGV4dC5cbiAgICAgKiBAbWV0aG9kIGVuZFZpZXdUcmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLmVuZFZpZXdUcmFuc2Zvcm0gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDAsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBnaXZlbiBgZW5naW5lYCdzIGBNYXR0ZXIuV29ybGRgIG9iamVjdC5cbiAgICAgKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgYWxsIHJlbmRlcmluZyBhbmQgc2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBzY2VuZSBjaGFuZ2VzLlxuICAgICAqIEBtZXRob2Qgd29ybGRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLndvcmxkID0gZnVuY3Rpb24ocmVuZGVyLCB0aW1lKSB7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBDb21tb24ubm93KCksXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBjYW52YXMgPSByZW5kZXIuY2FudmFzLFxuICAgICAgICAgICAgY29udGV4dCA9IHJlbmRlci5jb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgdGltaW5nID0gcmVuZGVyLnRpbWluZztcblxuICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBhbGxDb25zdHJhaW50cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gb3B0aW9ucy53aXJlZnJhbWVzID8gb3B0aW9ucy53aXJlZnJhbWVCYWNrZ3JvdW5kIDogb3B0aW9ucy5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgYm9kaWVzID0gW10sXG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IFtdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IGVuZ2luZS50aW1pbmcudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocmVuZGVyLCAnYmVmb3JlUmVuZGVyJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGFwcGx5IGJhY2tncm91bmQgaWYgaXQgaGFzIGNoYW5nZWRcbiAgICAgICAgaWYgKHJlbmRlci5jdXJyZW50QmFja2dyb3VuZCAhPT0gYmFja2dyb3VuZClcbiAgICAgICAgICAgIF9hcHBseUJhY2tncm91bmQocmVuZGVyLCBiYWNrZ3JvdW5kKTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgY2FudmFzIHdpdGggYSB0cmFuc3BhcmVudCBmaWxsLCB0byBhbGxvdyB0aGUgY2FudmFzIGJhY2tncm91bmQgdG8gc2hvd1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtaW4nO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG5cbiAgICAgICAgLy8gaGFuZGxlIGJvdW5kc1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgYm9kaWVzIHRoYXQgYXJlIG5vdCBpbiB2aWV3XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxsQm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBhbGxCb2RpZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhib2R5LmJvdW5kcywgcmVuZGVyLmJvdW5kcykpXG4gICAgICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKGJvZHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGNvbnN0cmFpbnRzIHRoYXQgYXJlIG5vdCBpbiB2aWV3XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxsQ29uc3RyYWludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGFsbENvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgICAgICBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRBV29ybGQgPSBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBjb25zdHJhaW50LnBvaW50QjtcblxuICAgICAgICAgICAgICAgIGlmIChib2R5QSkgcG9pbnRBV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICAgICAgaWYgKGJvZHlCKSBwb2ludEJXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKTtcblxuICAgICAgICAgICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocmVuZGVyLmJvdW5kcywgcG9pbnRBV29ybGQpIHx8IEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEJXb3JsZCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgdmlld1xuICAgICAgICAgICAgUmVuZGVyLnN0YXJ0Vmlld1RyYW5zZm9ybShyZW5kZXIpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgbW91c2VcbiAgICAgICAgICAgIGlmIChyZW5kZXIubW91c2UpIHtcbiAgICAgICAgICAgICAgICBNb3VzZS5zZXRTY2FsZShyZW5kZXIubW91c2UsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogKHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54KSAvIHJlbmRlci5vcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiAocmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnkpIC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBNb3VzZS5zZXRPZmZzZXQocmVuZGVyLm1vdXNlLCByZW5kZXIuYm91bmRzLm1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IGFsbENvbnN0cmFpbnRzO1xuICAgICAgICAgICAgYm9kaWVzID0gYWxsQm9kaWVzO1xuXG4gICAgICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJlbmRlci5jb250ZXh0LnNldFRyYW5zZm9ybShyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwLCByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy53aXJlZnJhbWVzIHx8IChlbmdpbmUuZW5hYmxlU2xlZXBpbmcgJiYgb3B0aW9ucy5zaG93U2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAvLyBmdWxseSBmZWF0dXJlZCByZW5kZXJpbmcgb2YgYm9kaWVzXG4gICAgICAgICAgICBSZW5kZXIuYm9kaWVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dDb252ZXhIdWxscylcbiAgICAgICAgICAgICAgICBSZW5kZXIuYm9keUNvbnZleEh1bGxzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgLy8gb3B0aW1pc2VkIG1ldGhvZCBmb3Igd2lyZWZyYW1lcyBvbmx5XG4gICAgICAgICAgICBSZW5kZXIuYm9keVdpcmVmcmFtZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0JvdW5kcylcbiAgICAgICAgICAgIFJlbmRlci5ib2R5Qm91bmRzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93QXhlcyB8fCBvcHRpb25zLnNob3dBbmdsZUluZGljYXRvcilcbiAgICAgICAgICAgIFJlbmRlci5ib2R5QXhlcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1Bvc2l0aW9ucylcbiAgICAgICAgICAgIFJlbmRlci5ib2R5UG9zaXRpb25zKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93VmVsb2NpdHkpXG4gICAgICAgICAgICBSZW5kZXIuYm9keVZlbG9jaXR5KHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93SWRzKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlJZHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dTZXBhcmF0aW9ucylcbiAgICAgICAgICAgIFJlbmRlci5zZXBhcmF0aW9ucyhyZW5kZXIsIGVuZ2luZS5wYWlycy5saXN0LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93Q29sbGlzaW9ucylcbiAgICAgICAgICAgIFJlbmRlci5jb2xsaXNpb25zKHJlbmRlciwgZW5naW5lLnBhaXJzLmxpc3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dWZXJ0ZXhOdW1iZXJzKVxuICAgICAgICAgICAgUmVuZGVyLnZlcnRleE51bWJlcnMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uKVxuICAgICAgICAgICAgUmVuZGVyLm1vdXNlUG9zaXRpb24ocmVuZGVyLCByZW5kZXIubW91c2UsIGNvbnRleHQpO1xuXG4gICAgICAgIFJlbmRlci5jb25zdHJhaW50cyhjb25zdHJhaW50cywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICAvLyByZXZlcnQgdmlldyB0cmFuc2Zvcm1zXG4gICAgICAgICAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybShyZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocmVuZGVyLCAnYWZ0ZXJSZW5kZXInLCBldmVudCk7XG5cbiAgICAgICAgLy8gbG9nIHRoZSB0aW1lIGVsYXBzZWQgY29tcHV0aW5nIHRoaXMgdXBkYXRlXG4gICAgICAgIHRpbWluZy5sYXN0RWxhcHNlZCA9IENvbW1vbi5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBzdGF0aXN0aWNzIGFib3V0IHRoZSBlbmdpbmUgYW5kIHdvcmxkIHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzdGF0c1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZVxuICAgICAqL1xuICAgIFJlbmRlci5zdGF0cyA9IGZ1bmN0aW9uKHJlbmRlciwgY29udGV4dCwgdGltZSkge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBwYXJ0cyA9IDAsXG4gICAgICAgICAgICB3aWR0aCA9IDU1LFxuICAgICAgICAgICAgaGVpZ2h0ID0gNDQsXG4gICAgICAgICAgICB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8gY291bnQgcGFydHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHBhcnRzICs9IGJvZGllc1tpXS5wYXJ0cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZWN0aW9uc1xuICAgICAgICB2YXIgc2VjdGlvbnMgPSB7XG4gICAgICAgICAgICAnUGFydCc6IHBhcnRzLFxuICAgICAgICAgICAgJ0JvZHknOiBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgJ0NvbnMnOiBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMod29ybGQpLmxlbmd0aCxcbiAgICAgICAgICAgICdDb21wJzogQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMod29ybGQpLmxlbmd0aCxcbiAgICAgICAgICAgICdQYWlyJzogZW5naW5lLnBhaXJzLmxpc3QubGVuZ3RoXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMGUwZjE5JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCAqIDUuNSwgaGVpZ2h0KTtcblxuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTJweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ3JpZ2h0JztcblxuICAgICAgICAvLyBzZWN0aW9uc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gc2VjdGlvbnNba2V5XTtcbiAgICAgICAgICAgIC8vIGxhYmVsXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjYWFhJztcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoa2V5LCB4ICsgd2lkdGgsIHkgKyA4KTtcblxuICAgICAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChzZWN0aW9uLCB4ICsgd2lkdGgsIHkgKyAyNik7XG5cbiAgICAgICAgICAgIHggKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBlbmdpbmUgYW5kIHJlbmRlciBwZXJmb3JtYW5jZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcGVyZm9ybWFuY2VcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnBlcmZvcm1hbmNlID0gZnVuY3Rpb24ocmVuZGVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgdGltaW5nID0gcmVuZGVyLnRpbWluZyxcbiAgICAgICAgICAgIGRlbHRhSGlzdG9yeSA9IHRpbWluZy5kZWx0YUhpc3RvcnksXG4gICAgICAgICAgICBlbGFwc2VkSGlzdG9yeSA9IHRpbWluZy5lbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5ID0gdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5LFxuICAgICAgICAgICAgZW5naW5lRGVsdGFIaXN0b3J5ID0gdGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeSxcbiAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRIaXN0b3J5ID0gdGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5LFxuICAgICAgICAgICAgbGFzdEVuZ2luZURlbHRhID0gZW5naW5lLnRpbWluZy5sYXN0RGVsdGE7XG4gICAgICAgIFxuICAgICAgICB2YXIgZGVsdGFNZWFuID0gX21lYW4oZGVsdGFIaXN0b3J5KSxcbiAgICAgICAgICAgIGVsYXBzZWRNZWFuID0gX21lYW4oZWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgZW5naW5lRGVsdGFNZWFuID0gX21lYW4oZW5naW5lRGVsdGFIaXN0b3J5KSxcbiAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRNZWFuID0gX21lYW4oZW5naW5lRWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZE1lYW4gPSBfbWVhbih0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeSksXG4gICAgICAgICAgICByYXRlTWVhbiA9ICh0aW1lc3RhbXBFbGFwc2VkTWVhbiAvIGRlbHRhTWVhbikgfHwgMCxcbiAgICAgICAgICAgIGZwcyA9ICgxMDAwIC8gZGVsdGFNZWFuKSB8fCAwO1xuXG4gICAgICAgIHZhciBncmFwaEhlaWdodCA9IDQsXG4gICAgICAgICAgICBnYXAgPSAxMixcbiAgICAgICAgICAgIHdpZHRoID0gNjAsXG4gICAgICAgICAgICBoZWlnaHQgPSAzNCxcbiAgICAgICAgICAgIHggPSAxMCxcbiAgICAgICAgICAgIHkgPSA2OTtcblxuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMwZTBmMTknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDUwLCBnYXAgKiA0ICsgd2lkdGggKiA1ICsgMjIsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gc2hvdyBGUFNcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHgsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZGVsdGFIaXN0b3J5Lmxlbmd0aCwgXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGZwcykgKyAnIGZwcycsIFxuICAgICAgICAgICAgZnBzIC8gUmVuZGVyLl9nb29kRnBzLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGRlbHRhSGlzdG9yeVtpXSAvIGRlbHRhTWVhbikgLSAxOyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyBlbmdpbmUgZGVsdGFcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyBnYXAgKyB3aWR0aCwgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCBlbmdpbmVEZWx0YUhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgbGFzdEVuZ2luZURlbHRhLnRvRml4ZWQoMikgKyAnIGR0JywgXG4gICAgICAgICAgICBSZW5kZXIuX2dvb2REZWx0YSAvIGxhc3RFbmdpbmVEZWx0YSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChlbmdpbmVEZWx0YUhpc3RvcnlbaV0gLyBlbmdpbmVEZWx0YU1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZW5naW5lIHVwZGF0ZSB0aW1lXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDIsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgZW5naW5lRWxhcHNlZE1lYW4udG9GaXhlZCgyKSArICcgdXQnLCBcbiAgICAgICAgICAgIDEgLSAoZW5naW5lRWxhcHNlZE1lYW4gLyBSZW5kZXIuX2dvb2RGcHMpLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVuZ2luZUVsYXBzZWRIaXN0b3J5W2ldIC8gZW5naW5lRWxhcHNlZE1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgcmVuZGVyIHRpbWVcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyAoZ2FwICsgd2lkdGgpICogMywgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCBlbGFwc2VkSGlzdG9yeS5sZW5ndGgsXG4gICAgICAgICAgICBlbGFwc2VkTWVhbi50b0ZpeGVkKDIpICsgJyBydCcsIFxuICAgICAgICAgICAgMSAtIChlbGFwc2VkTWVhbiAvIFJlbmRlci5fZ29vZEZwcyksXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZWxhcHNlZEhpc3RvcnlbaV0gLyBlbGFwc2VkTWVhbikgLSAxOyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyBlZmZlY3RpdmUgc3BlZWRcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyAoZ2FwICsgd2lkdGgpICogNCwgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS5sZW5ndGgsIFxuICAgICAgICAgICAgcmF0ZU1lYW4udG9GaXhlZCgyKSArICcgeCcsIFxuICAgICAgICAgICAgcmF0ZU1lYW4gKiByYXRlTWVhbiAqIHJhdGVNZWFuLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKCgodGltZXN0YW1wRWxhcHNlZEhpc3RvcnlbaV0gLyBkZWx0YUhpc3RvcnlbaV0pIC8gcmF0ZU1lYW4pIHx8IDApIC0gMTsgfVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgbGFiZWwsIGluZGljYXRvciBhbmQgYSBjaGFydC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc3RhdHVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5kaWNhdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcGxvdFlcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RhdHVzID0gZnVuY3Rpb24oY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY291bnQsIGxhYmVsLCBpbmRpY2F0b3IsIHBsb3RZKSB7XG4gICAgICAgIC8vIGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjODg4JztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzQ0NCc7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5ICsgNywgd2lkdGgsIDEpO1xuXG4gICAgICAgIC8vIGNoYXJ0XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHgsIHkgKyA3IC0gaGVpZ2h0ICogQ29tbW9uLmNsYW1wKDAuNCAqIHBsb3RZKDApLCAtMiwgMikpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdpZHRoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHggKyBpLCB5ICsgNyAtIChpIDwgY291bnQgPyBoZWlnaHQgKiBDb21tb24uY2xhbXAoMC40ICogcGxvdFkoaSksIC0yLCAyKSA6IDApKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGluZGljYXRvclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdoc2woJyArIENvbW1vbi5jbGFtcCgyNSArIDk1ICogaW5kaWNhdG9yLCAwLCAxMjApICsgJywxMDAlLDYwJSknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHkgLSA3LCA0LCA0KTtcblxuICAgICAgICAvLyBsYWJlbFxuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTJweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2VlZSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQobGFiZWwsIHggKyB3aWR0aCwgeSAtIDUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludFtdfSBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5jb25zdHJhaW50cyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWNvbnN0cmFpbnQucmVuZGVyLnZpc2libGUgfHwgIWNvbnN0cmFpbnQucG9pbnRBIHx8ICFjb25zdHJhaW50LnBvaW50QilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgZW5kO1xuXG4gICAgICAgICAgICBpZiAoYm9keUEpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBjb25zdHJhaW50LnBvaW50QTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLnR5cGUgPT09ICdwaW4nKSB7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhzdGFydC54LCBzdGFydC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvZHlCKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb25zdHJhaW50LnBvaW50QjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLnR5cGUgPT09ICdzcHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIoZW5kLCBzdGFydCksXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWwgPSBWZWN0b3IucGVycChWZWN0b3Iubm9ybWFsaXNlKGRlbHRhKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2lscyA9IE1hdGguY2VpbChDb21tb24uY2xhbXAoY29uc3RyYWludC5sZW5ndGggLyA1LCAxMiwgMjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGNvaWxzOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGogJSAyID09PSAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydC54ICsgZGVsdGEueCAqIChqIC8gY29pbHMpICsgbm9ybWFsLnggKiBvZmZzZXQgKiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LnkgKyBkZWx0YS55ICogKGogLyBjb2lscykgKyBub3JtYWwueSAqIG9mZnNldCAqIDRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIubGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSBjb25zdHJhaW50LnJlbmRlci5saW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IGNvbnN0cmFpbnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci5hbmNob3JzKSB7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSBjb25zdHJhaW50LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuYXJjKHN0YXJ0LngsIHN0YXJ0LnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhlbmQueCwgZW5kLnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZGllc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZGllcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlcyA9IG9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXMgfHwgIW9wdGlvbnMud2lyZWZyYW1lcyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dTbGVlcGluZyAmJiBib2R5LmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5nbG9iYWxBbHBoYSA9IDAuNSAqIHBhcnQucmVuZGVyLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0LnJlbmRlci5vcGFjaXR5ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSBwYXJ0LnJlbmRlci5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnJlbmRlci5zcHJpdGUgJiYgcGFydC5yZW5kZXIuc3ByaXRlLnRleHR1cmUgJiYgIW9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0IHNwcml0ZVxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlID0gcGFydC5yZW5kZXIuc3ByaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSA9IF9nZXRUZXh0dXJlKHJlbmRlciwgc3ByaXRlLnRleHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgYy5yb3RhdGUocGFydC5hbmdsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYy5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCAqIC1zcHJpdGUueE9mZnNldCAqIHNwcml0ZS54U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCAqIC1zcHJpdGUueU9mZnNldCAqIHNwcml0ZS55U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLndpZHRoICogc3ByaXRlLnhTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaGVpZ2h0ICogc3ByaXRlLnlTY2FsZVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldmVydCB0cmFuc2xhdGlvbiwgaG9wZWZ1bGx5IGZhc3RlciB0aGFuIHNhdmUgLyByZXN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGMucm90YXRlKC1wYXJ0LmFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgYy50cmFuc2xhdGUoLXBhcnQucG9zaXRpb24ueCwgLXBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydCBwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LmNpcmNsZVJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYXJjKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55LCBwYXJ0LmNpcmNsZVJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnZlcnRpY2VzW2ogLSAxXS5pc0ludGVybmFsIHx8IHNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudmVydGljZXNbal0uaXNJbnRlcm5hbCAmJiAhc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLngsIHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSBwYXJ0LnJlbmRlci5maWxsU3R5bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnJlbmRlci5saW5lV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVXaWR0aCA9IHBhcnQucmVuZGVyLmxpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gcGFydC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJyNiYmInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE9wdGltaXNlZCBtZXRob2QgZm9yIGRyYXdpbmcgYm9keSB3aXJlZnJhbWVzIGluIG9uZSBwYXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlXaXJlZnJhbWVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVdpcmVmcmFtZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlcyA9IHJlbmRlci5vcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgYWxsIGJvZGllc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG5cbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQudmVydGljZXNbaiAtIDFdLmlzSW50ZXJuYWwgfHwgc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueCwgcGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJyNiYmInO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcHRpbWlzZWQgbWV0aG9kIGZvciBkcmF3aW5nIGJvZHkgY29udmV4IGh1bGwgd2lyZWZyYW1lcyBpbiBvbmUgcGFzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5Q29udmV4SHVsbHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5Q29udmV4SHVsbHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb252ZXggaHVsbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlIHx8IGJvZHkucGFydHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5LnZlcnRpY2VzWzBdLngsIGJvZHkudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCBib2R5LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYy5saW5lVG8oYm9keS52ZXJ0aWNlc1tqXS54LCBib2R5LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5LnZlcnRpY2VzWzBdLngsIGJvZHkudmVydGljZXNbMF0ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIpJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBib2R5IHZlcnRleCBudW1iZXJzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCB2ZXJ0ZXhOdW1iZXJzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIudmVydGV4TnVtYmVycyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICBmb3IgKGsgPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBwYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNba107XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIpJztcbiAgICAgICAgICAgICAgICAgICAgYy5maWxsVGV4dChpICsgJ18nICsgaiwgcGFydC5wb3NpdGlvbi54ICsgKHBhcnQudmVydGljZXNbal0ueCAtIHBhcnQucG9zaXRpb24ueCkgKiAwLjgsIHBhcnQucG9zaXRpb24ueSArIChwYXJ0LnZlcnRpY2VzW2pdLnkgLSBwYXJ0LnBvc2l0aW9uLnkpICogMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBtb3VzZSBwb3NpdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgbW91c2VQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5tb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24ocmVuZGVyLCBtb3VzZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG4gICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC44KSc7XG4gICAgICAgIGMuZmlsbFRleHQobW91c2UucG9zaXRpb24ueCArICcgICcgKyBtb3VzZS5wb3NpdGlvbi55LCBtb3VzZS5wb3NpdGlvbi54ICsgNSwgbW91c2UucG9zaXRpb24ueSAtIDUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGJvdW5kc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5Qm91bmRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUJvdW5kcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnM7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LnJlbmRlci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBjLnJlY3QocGFydC5ib3VuZHMubWluLngsIHBhcnQuYm91bmRzLm1pbi55LCBwYXJ0LmJvdW5kcy5tYXgueCAtIHBhcnQuYm91bmRzLm1pbi54LCBwYXJ0LmJvdW5kcy5tYXgueSAtIHBhcnQuYm91bmRzLm1pbi55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wOCknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMSknO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGFuZ2xlIGluZGljYXRvcnMgYW5kIGF4ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUF4ZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5QXhlcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgcGFydHMgPSBib2R5LnBhcnRzO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dBeGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGFsbCBheGVzXG4gICAgICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydC5heGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXhpcyA9IHBhcnQuYXhlc1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQucG9zaXRpb24ueCArIGF4aXMueCAqIDIwLCBwYXJ0LnBvc2l0aW9uLnkgKyBheGlzLnkgKiAyMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnQuYXhlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIGEgc2luZ2xlIGF4aXMgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbygocGFydC52ZXJ0aWNlc1swXS54ICsgcGFydC52ZXJ0aWNlc1twYXJ0LnZlcnRpY2VzLmxlbmd0aC0xXS54KSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnQudmVydGljZXNbMF0ueSArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueSkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcbiAgICAgICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ292ZXJsYXknO1xuICAgICAgICAgICAgYy5saW5lV2lkdGggPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IHBvc2l0aW9uc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5UG9zaXRpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVBvc2l0aW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGN1cnJlbnQgcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuICAgICAgICAgICAgICAgIGMuYXJjKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55LCAzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdpbmRpYW5yZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjUpJztcbiAgICAgICAgfVxuICAgICAgICBjLmZpbGwoKTtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBwcmV2aW91cyBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIGlmIChib2R5LnJlbmRlci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgYy5hcmMoYm9keS5wb3NpdGlvblByZXYueCwgYm9keS5wb3NpdGlvblByZXYueSwgMiwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC44KSc7XG4gICAgICAgIGMuZmlsbCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IHZlbG9jaXR5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlWZWxvY2l0eSA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5LnBvc2l0aW9uLnggKyAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCkgKiAyLCBib2R5LnBvc2l0aW9uLnkgKyAoYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueSkgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMztcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgaWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlJZHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5SWRzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFib2RpZXNbaV0ucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICBjLmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgICAgICAgICAgIGMuZmlsbFRleHQocGFydC5pZCwgcGFydC5wb3NpdGlvbi54ICsgMTAsIHBhcnQucG9zaXRpb24ueSAtIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5jb2xsaXNpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBwYWlycywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY29ycmVjdGVkLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbGxpc2lvbiBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gcGFpci5hY3RpdmVDb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4ID0gY29udGFjdC52ZXJ0ZXg7XG4gICAgICAgICAgICAgICAgYy5yZWN0KHZlcnRleC54IC0gMS41LCB2ZXJ0ZXgueSAtIDEuNSwgMy41LCAzLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5maWxsKCk7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29sbGlzaW9uIG5vcm1hbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG5cbiAgICAgICAgICAgIGlmIChwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsUG9zWCA9IHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LngsXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1kgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC55O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1ggPSAocGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueCArIHBhaXIuYWN0aXZlQ29udGFjdHNbMV0udmVydGV4LngpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWSA9IChwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC55ICsgcGFpci5hY3RpdmVDb250YWN0c1sxXS52ZXJ0ZXgueSkgLyAyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24uYm9keUIgPT09IGNvbGxpc2lvbi5zdXBwb3J0c1swXS5ib2R5IHx8IGNvbGxpc2lvbi5ib2R5QS5pc1N0YXRpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhub3JtYWxQb3NYIC0gY29sbGlzaW9uLm5vcm1hbC54ICogOCwgbm9ybWFsUG9zWSAtIGNvbGxpc2lvbi5ub3JtYWwueSAqIDgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKG5vcm1hbFBvc1ggKyBjb2xsaXNpb24ubm9ybWFsLnggKiA4LCBub3JtYWxQb3NZICsgY29sbGlzaW9uLm5vcm1hbC55ICogOCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8obm9ybWFsUG9zWCwgbm9ybWFsUG9zWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzZXBhcmF0aW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuc2VwYXJhdGlvbnMgPSBmdW5jdGlvbihyZW5kZXIsIHBhaXJzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb3JyZWN0ZWQsXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgc2VwYXJhdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgICAgICB2YXIgayA9IDE7XG5cbiAgICAgICAgICAgIGlmICghYm9keUIuaXNTdGF0aWMgJiYgIWJvZHlBLmlzU3RhdGljKSBrID0gMC41O1xuICAgICAgICAgICAgaWYgKGJvZHlCLmlzU3RhdGljKSBrID0gMDtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keUIucG9zaXRpb24ueCwgYm9keUIucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5Qi5wb3NpdGlvbi54IC0gY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggKiBrLCBib2R5Qi5wb3NpdGlvbi55IC0gY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgKiBrKTtcblxuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGlmICghYm9keUIuaXNTdGF0aWMgJiYgIWJvZHlBLmlzU3RhdGljKSBrID0gMC41O1xuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU3RhdGljKSBrID0gMDtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keUEucG9zaXRpb24ueCwgYm9keUEucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5QS5wb3NpdGlvbi54ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggKiBrLCBib2R5QS5wb3NpdGlvbi55ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgKiBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC41KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgaW5zcGVjdG9yXG4gICAgICogQHBhcmFtIHtpbnNwZWN0b3J9IGluc3BlY3RvclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5pbnNwZWN0b3IgPSBmdW5jdGlvbihpbnNwZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IGluc3BlY3Rvci5lbmdpbmUsXG4gICAgICAgICAgICBzZWxlY3RlZCA9IGluc3BlY3Rvci5zZWxlY3RlZCxcbiAgICAgICAgICAgIHJlbmRlciA9IGluc3BlY3Rvci5yZW5kZXIsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib3VuZHM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgICAgICBib3VuZHNIZWlnaHQgPSByZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib3VuZHNTY2FsZVggPSBib3VuZHNXaWR0aCAvIHJlbmRlci5vcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICAgICAgY29udGV4dC5zY2FsZSgxIC8gYm91bmRzU2NhbGVYLCAxIC8gYm91bmRzU2NhbGVZKTtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC1yZW5kZXIuYm91bmRzLm1pbi54LCAtcmVuZGVyLmJvdW5kcy5taW4ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHNlbGVjdGVkW2ldLmRhdGE7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC45KSc7XG4gICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFsxLDJdKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgYm9keSBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgYm91bmRzID0gaXRlbS5ib3VuZHM7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnJlY3QoTWF0aC5mbG9vcihib3VuZHMubWluLnggLSAzKSwgTWF0aC5mbG9vcihib3VuZHMubWluLnkgLSAzKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihib3VuZHMubWF4LnggLSBib3VuZHMubWluLnggKyA2KSwgTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkgKyA2KSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGNvbnN0cmFpbnQgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IGl0ZW0ucG9pbnRBO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmJvZHlBKVxuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IGl0ZW0ucG9pbnRCO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmMocG9pbnQueCwgcG9pbnQueSwgMTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtdKTtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC0wLjUsIC0wLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVuZGVyIHNlbGVjdGlvbiByZWdpb25cbiAgICAgICAgaWYgKGluc3BlY3Rvci5zZWxlY3RTdGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjYpJztcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuMSknO1xuICAgICAgICAgICAgYm91bmRzID0gaW5zcGVjdG9yLnNlbGVjdEJvdW5kcztcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3QoTWF0aC5mbG9vcihib3VuZHMubWluLngpLCBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSksXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihib3VuZHMubWF4LnggLSBib3VuZHMubWluLngpLCBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSkpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC0wLjUsIC0wLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKVxuICAgICAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcmVuZGVyIHRpbWluZy5cbiAgICAgKiBAbWV0aG9kIF91cGRhdGVUaW1pbmdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIHZhciBfdXBkYXRlVGltaW5nID0gZnVuY3Rpb24ocmVuZGVyLCB0aW1lKSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgdGltaW5nID0gcmVuZGVyLnRpbWluZyxcbiAgICAgICAgICAgIGhpc3RvcnlTaXplID0gdGltaW5nLmhpc3RvcnlTaXplLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gZW5naW5lLnRpbWluZy50aW1lc3RhbXA7XG5cbiAgICAgICAgdGltaW5nLmRlbHRhID0gdGltZSAtIHRpbWluZy5sYXN0VGltZSB8fCBSZW5kZXIuX2dvb2REZWx0YTtcbiAgICAgICAgdGltaW5nLmxhc3RUaW1lID0gdGltZTtcblxuICAgICAgICB0aW1pbmcudGltZXN0YW1wRWxhcHNlZCA9IHRpbWVzdGFtcCAtIHRpbWluZy5sYXN0VGltZXN0YW1wIHx8IDA7XG4gICAgICAgIHRpbWluZy5sYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG4gICAgICAgIHRpbWluZy5kZWx0YUhpc3RvcnkudW5zaGlmdCh0aW1pbmcuZGVsdGEpO1xuICAgICAgICB0aW1pbmcuZGVsdGFIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5kZWx0YUhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeS51bnNoaWZ0KGVuZ2luZS50aW1pbmcubGFzdERlbHRhKTtcbiAgICAgICAgdGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS51bnNoaWZ0KHRpbWluZy50aW1lc3RhbXBFbGFwc2VkKTtcbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnkudW5zaGlmdChlbmdpbmUudGltaW5nLmxhc3RFbGFwc2VkKTtcbiAgICAgICAgdGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZWxhcHNlZEhpc3RvcnkudW5zaGlmdCh0aW1pbmcubGFzdEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcuZWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtZWFuIHZhbHVlIG9mIHRoZSBnaXZlbiBudW1iZXJzLlxuICAgICAqIEBtZXRob2QgX21lYW5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIG1lYW4gb2YgZ2l2ZW4gdmFsdWVzXG4gICAgICovXG4gICAgdmFyIF9tZWFuID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJlc3VsdCAvIHZhbHVlcy5sZW5ndGgpIHx8IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUNhbnZhc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHdpZHRoXG4gICAgICogQHBhcmFtIHt9IGhlaWdodFxuICAgICAqIEByZXR1cm4gY2FudmFzXG4gICAgICovXG4gICAgdmFyIF9jcmVhdGVDYW52YXMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgY2FudmFzLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwaXhlbCByYXRpbyBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBtZXRob2QgX2dldFBpeGVsUmF0aW9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbnZhc1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gcGl4ZWwgcmF0aW9cbiAgICAgKi9cbiAgICB2YXIgX2dldFBpeGVsUmF0aW8gPSBmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgICAgIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICAgICAgYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyA9IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgICAgICByZXR1cm4gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW87XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlcXVlc3RlZCB0ZXh0dXJlIChhbiBJbWFnZSkgdmlhIGl0cyBwYXRoXG4gICAgICogQG1ldGhvZCBfZ2V0VGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVBhdGhcbiAgICAgKiBAcmV0dXJuIHtJbWFnZX0gdGV4dHVyZVxuICAgICAqL1xuICAgIHZhciBfZ2V0VGV4dHVyZSA9IGZ1bmN0aW9uKHJlbmRlciwgaW1hZ2VQYXRoKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdO1xuXG4gICAgICAgIGlmIChpbWFnZSlcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcblxuICAgICAgICBpbWFnZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlUGF0aDtcblxuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgdG8gdGhlIGNhbnZhcyB1c2luZyBDU1MuXG4gICAgICogQG1ldGhvZCBhcHBseUJhY2tncm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZFxuICAgICAqL1xuICAgIHZhciBfYXBwbHlCYWNrZ3JvdW5kID0gZnVuY3Rpb24ocmVuZGVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHZhciBjc3NCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcblxuICAgICAgICBpZiAoLyhqcGd8Z2lmfHBuZykkLy50ZXN0KGJhY2tncm91bmQpKVxuICAgICAgICAgICAgY3NzQmFja2dyb3VuZCA9ICd1cmwoJyArIGJhY2tncm91bmQgKyAnKSc7XG5cbiAgICAgICAgcmVuZGVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gY3NzQmFja2dyb3VuZDtcbiAgICAgICAgcmVuZGVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgICAgICByZW5kZXIuY3VycmVudEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBiZWZvcmUgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbmRlclxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJhY2stcmVmZXJlbmNlIHRvIHRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnRyb2xsZXJcbiAgICAgKiBAdHlwZSByZW5kZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBgTWF0dGVyLkVuZ2luZWAgaW5zdGFuY2UgdG8gYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmdpbmVcbiAgICAgKiBAdHlwZSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBjYW52YXMgaXMgdG8gYmUgaW5zZXJ0ZWQgKGlmIGByZW5kZXIuY2FudmFzYCBoYXMgbm90IGJlZW4gc3BlY2lmaWVkKVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVsZW1lbnRcbiAgICAgKiBAdHlwZSBIVE1MRWxlbWVudFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBjYW52YXMgZWxlbWVudCB0byByZW5kZXIgdG8uIElmIG5vdCBzcGVjaWZpZWQsIG9uZSB3aWxsIGJlIGNyZWF0ZWQgaWYgYHJlbmRlci5lbGVtZW50YCBoYXMgYmVlbiBzcGVjaWZpZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY2FudmFzXG4gICAgICogQHR5cGUgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb3VuZHNgIG9iamVjdCB0aGF0IHNwZWNpZmllcyB0aGUgZHJhd2luZyB2aWV3IHJlZ2lvbi5cbiAgICAgKiBSZW5kZXJpbmcgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHRyYW5zZm9ybWVkIGFuZCBzY2FsZWQgdG8gZml0IHdpdGhpbiB0aGUgY2FudmFzIHNpemUgKGByZW5kZXIub3B0aW9ucy53aWR0aGAgYW5kIGByZW5kZXIub3B0aW9ucy5oZWlnaHRgKS5cbiAgICAgKiBUaGlzIGFsbG93cyBmb3IgY3JlYXRpbmcgdmlld3MgdGhhdCBjYW4gcGFuIG9yIHpvb20gYXJvdW5kIHRoZSBzY2VuZS5cbiAgICAgKiBZb3UgbXVzdCBhbHNvIHNldCBgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzYCB0byBgdHJ1ZWAgdG8gZW5hYmxlIGJvdW5kZWQgcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvdW5kc1xuICAgICAqIEB0eXBlIGJvdW5kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IGZyb20gdGhlIGByZW5kZXIuY2FudmFzYCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnRleHRcbiAgICAgKiBAdHlwZSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcHJpdGUgdGV4dHVyZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0ZXh0dXJlc1xuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbW91c2UgdG8gcmVuZGVyIGlmIGByZW5kZXIub3B0aW9ucy5zaG93TW91c2VQb3NpdGlvbmAgaXMgZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtb3VzZVxuICAgICAqIEB0eXBlIG1vdXNlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvZiB0aGUgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9uc1xuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IHdpZHRoIGluIHBpeGVscyBvZiB0aGUgYHJlbmRlci5jYW52YXNgIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogU2VlIGFsc28gdGhlIGBvcHRpb25zLnBpeGVsUmF0aW9gIHByb3BlcnR5IHRvIGNoYW5nZSByZW5kZXIgcXVhbGl0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgODAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIGByZW5kZXIuY2FudmFzYCB0byBiZSBjcmVhdGVkLlxuICAgICAqIFNlZSBhbHNvIHRoZSBgb3B0aW9ucy5waXhlbFJhdGlvYCBwcm9wZXJ0eSB0byBjaGFuZ2UgcmVuZGVyIHF1YWxpdHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5oZWlnaHRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2MDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBbcGl4ZWwgcmF0aW9dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvZGV2aWNlUGl4ZWxSYXRpbykgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMucGl4ZWxSYXRpb1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgQ1NTIGJhY2tncm91bmQgY29sb3Igc3RyaW5nIHRvIHVzZSB3aGVuIGByZW5kZXIub3B0aW9ucy53aXJlZnJhbWVzYCBpcyBkaXNhYmxlZC5cbiAgICAgKiBUaGlzIG1heSBiZSBhbHNvIHNldCB0byBgJ3RyYW5zcGFyZW50J2Agb3IgZXF1aXZhbGVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmJhY2tncm91bmRcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnIzE0MTUxZidcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgQ1NTIGJhY2tncm91bmQgY29sb3Igc3RyaW5nIHRvIHVzZSB3aGVuIGByZW5kZXIub3B0aW9ucy53aXJlZnJhbWVzYCBpcyBlbmFibGVkLlxuICAgICAqIFRoaXMgbWF5IGJlIGFsc28gc2V0IHRvIGAndHJhbnNwYXJlbnQnYCBvciBlcXVpdmFsZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMud2lyZWZyYW1lQmFja2dyb3VuZFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICcjMTQxNTFmJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIGlmIGByZW5kZXIuYm91bmRzYCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmhhc0JvdW5kc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIGFsbCBkZWJ1ZyBpbmZvcm1hdGlvbiBvdmVybGF5cyB0b2dldGhlci4gIFxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5kIGhhcyBwcmlvcml0eSBvdmVyIHRoZSB2YWx1ZXMgb2Y6XG4gICAgICpcbiAgICAgKiAtIGByZW5kZXIub3B0aW9ucy5zaG93U3RhdHNgXG4gICAgICogLSBgcmVuZGVyLm9wdGlvbnMuc2hvd1BlcmZvcm1hbmNlYFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0RlYnVnXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGVuZ2luZSBzdGF0cyBpbmZvIG92ZXJsYXkuICBcbiAgICAgKiBGcm9tIGxlZnQgdG8gcmlnaHQsIHRoZSB2YWx1ZXMgc2hvd24gYXJlOlxuICAgICAqXG4gICAgICogLSBib2R5IHBhcnRzIHRvdGFsXG4gICAgICogLSBib2R5IHRvdGFsXG4gICAgICogLSBjb25zdHJhaW50cyB0b3RhbFxuICAgICAqIC0gY29tcG9zaXRlcyB0b3RhbFxuICAgICAqIC0gY29sbGlzaW9uIHBhaXJzIHRvdGFsXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93U3RhdHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSBwZXJmb3JtYW5jZSBjaGFydHMuICBcbiAgICAgKiBGcm9tIGxlZnQgdG8gcmlnaHQsIHRoZSB2YWx1ZXMgc2hvd24gYXJlOlxuICAgICAqXG4gICAgICogLSBhdmVyYWdlIHJlbmRlciBmcmVxdWVuY3kgKGUuZy4gNjAgZnBzKVxuICAgICAqIC0gZXhhY3QgZW5naW5lIGRlbHRhIHRpbWUgdXNlZCBmb3IgbGFzdCB1cGRhdGUgKGUuZy4gMTYuNjZtcylcbiAgICAgKiAtIGF2ZXJhZ2UgZW5naW5lIGV4ZWN1dGlvbiBkdXJhdGlvbiAoZS5nLiA1LjAwbXMpXG4gICAgICogLSBhdmVyYWdlIHJlbmRlciBleGVjdXRpb24gZHVyYXRpb24gKGUuZy4gMC40MG1zKVxuICAgICAqIC0gYXZlcmFnZSBlZmZlY3RpdmUgcGxheSBzcGVlZCAoZS5nLiAnMS4wMHgnIGlzICdyZWFsLXRpbWUnKVxuICAgICAqXG4gICAgICogRWFjaCB2YWx1ZSBpcyByZWNvcmRlZCBvdmVyIGEgZml4ZWQgc2FtcGxlIG9mIHBhc3QgZnJhbWVzICg2MCBmcmFtZXMpLlxuICAgICAqXG4gICAgICogQSBjaGFydCBzaG93biBiZWxvdyBlYWNoIHZhbHVlIGluZGljYXRlcyB0aGUgdmFyaWFuY2UgZnJvbSB0aGUgYXZlcmFnZSBvdmVyIHRoZSBzYW1wbGUuXG4gICAgICogVGhlIG1vcmUgc3RhYmxlIG9yIGZpeGVkIHRoZSB2YWx1ZSBpcyB0aGUgZmxhdHRlciB0aGUgY2hhcnQgd2lsbCBhcHBlYXIuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93UGVyZm9ybWFuY2VcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBcbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgcmVuZGVyaW5nIGVudGlyZWx5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuZW5hYmxlZFxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIHRvZ2dsZSB3aXJlZnJhbWUgcmVuZGVyaW5nIG90aGVyd2lzZSBzb2xpZCBmaWxsIHJlbmRlcmluZyBpcyB1c2VkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMud2lyZWZyYW1lc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgc2xlZXBpbmcgYm9kaWVzIGluZGljYXRvcnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93U2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBkZWJ1ZyBpbmZvcm1hdGlvbiBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0RlYnVnXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGNvbGxpc2lvbiBicm9hZHBoYXNlIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBubyBsb25nZXIgaW1wbGVtZW50ZWRcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93QnJvYWRwaGFzZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGJvdW5kcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0JvdW5kc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IHZlbG9jaXR5IGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93VmVsb2NpdHlcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBjb2xsaXNpb25zIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Q29sbGlzaW9uc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBjb2xsaXNpb24gcmVzb2x2ZXIgc2VwYXJhdGlvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTZXBhcmF0aW9uc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGF4ZXMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dBeGVzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgcG9zaXRpb25zIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93UG9zaXRpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYW5nbGUgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dBbmdsZUluZGljYXRvclxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGFuZCBwYXJ0IGlkcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0lkc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IHZlcnRleCBudW1iZXJzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93VmVydGV4TnVtYmVyc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGNvbnZleCBodWxscyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0NvbnZleEh1bGxzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgaW50ZXJuYWwgZWRnZXMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIG1vdXNlIHBvc2l0aW9uIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93TW91c2VQb3NpdGlvblxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbnRhY3RgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBjb250YWN0cy5cbipcbiogQGNsYXNzIENvbnRhY3RcbiovXG5cbnZhciBDb250YWN0ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb250YWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0ZXh9IHZlcnRleFxuICAgICAqIEByZXR1cm4ge2NvbnRhY3R9IEEgbmV3IGNvbnRhY3RcbiAgICAgKi9cbiAgICBDb250YWN0LmNyZWF0ZSA9IGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICBub3JtYWxJbXB1bHNlOiAwLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2U6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkVuZ2luZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgZW5naW5lcy5cbiogQW4gZW5naW5lIGlzIGEgY29udHJvbGxlciB0aGF0IG1hbmFnZXMgdXBkYXRpbmcgdGhlIHNpbXVsYXRpb24gb2YgdGhlIHdvcmxkLlxuKiBTZWUgYE1hdHRlci5SdW5uZXJgIGZvciBhbiBvcHRpb25hbCBnYW1lIGxvb3AgdXRpbGl0eS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEVuZ2luZVxuKi9cblxudmFyIEVuZ2luZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZ2luZTtcblxudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xudmFyIERldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgUGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbkl0ZXJhdGlvbnM6IDYsXG4gICAgICAgICAgICB2ZWxvY2l0eUl0ZXJhdGlvbnM6IDQsXG4gICAgICAgICAgICBjb25zdHJhaW50SXRlcmF0aW9uczogMixcbiAgICAgICAgICAgIGVuYWJsZVNsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgZ3Jhdml0eToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgICAgICBzY2FsZTogMC4wMDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1pbmc6IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IDAsXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIGxhc3REZWx0YTogMCxcbiAgICAgICAgICAgICAgICBsYXN0RWxhcHNlZDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlbmdpbmUgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBlbmdpbmUud29ybGQgPSBvcHRpb25zLndvcmxkIHx8IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1dvcmxkJyB9KTtcbiAgICAgICAgZW5naW5lLnBhaXJzID0gb3B0aW9ucy5wYWlycyB8fCBQYWlycy5jcmVhdGUoKTtcbiAgICAgICAgZW5naW5lLmRldGVjdG9yID0gb3B0aW9ucy5kZXRlY3RvciB8fCBEZXRlY3Rvci5jcmVhdGUoKTtcblxuICAgICAgICAvLyBmb3IgdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICAgIGVuZ2luZS5ncmlkID0geyBidWNrZXRzOiBbXSB9O1xuICAgICAgICBlbmdpbmUud29ybGQuZ3Jhdml0eSA9IGVuZ2luZS5ncmF2aXR5O1xuICAgICAgICBlbmdpbmUuYnJvYWRwaGFzZSA9IGVuZ2luZS5ncmlkO1xuICAgICAgICBlbmdpbmUubWV0cmljcyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNpbXVsYXRpb24gZm9yd2FyZCBpbiB0aW1lIGJ5IGBkZWx0YWAgbXMuXG4gICAgICogVGhlIGBjb3JyZWN0aW9uYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGltZSBjb3JyZWN0aW9uIGZhY3RvciB0byBhcHBseSB0byB0aGUgdXBkYXRlLlxuICAgICAqIFRoaXMgY2FuIGhlbHAgaW1wcm92ZSB0aGUgYWNjdXJhY3kgb2YgdGhlIHNpbXVsYXRpb24gaW4gY2FzZXMgd2hlcmUgYGRlbHRhYCBpcyBjaGFuZ2luZyBiZXR3ZWVuIHVwZGF0ZXMuXG4gICAgICogVGhlIHZhbHVlIG9mIGBjb3JyZWN0aW9uYCBpcyBkZWZpbmVkIGFzIGBkZWx0YSAvIGxhc3REZWx0YWAsIGkuZS4gdGhlIHBlcmNlbnRhZ2UgY2hhbmdlIG9mIGBkZWx0YWAgb3ZlciB0aGUgbGFzdCBzdGVwLlxuICAgICAqIFRoZXJlZm9yZSB0aGUgdmFsdWUgaXMgYWx3YXlzIGAxYCAobm8gY29ycmVjdGlvbikgd2hlbiBgZGVsdGFgIGNvbnN0YW50IChvciB3aGVuIG5vIGNvcnJlY3Rpb24gaXMgZGVzaXJlZCwgd2hpY2ggaXMgdGhlIGRlZmF1bHQpLlxuICAgICAqIFNlZSB0aGUgcGFwZXIgb24gPGEgaHJlZj1cImh0dHA6Ly9sb25lc29jay5uZXQvYXJ0aWNsZS92ZXJsZXQuaHRtbFwiPlRpbWUgQ29ycmVjdGVkIFZlcmxldDwvYT4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlVXBkYXRlYCBhbmQgYGFmdGVyVXBkYXRlYCBldmVudHMuXG4gICAgICogVHJpZ2dlcnMgYGNvbGxpc2lvblN0YXJ0YCwgYGNvbGxpc2lvbkFjdGl2ZWAgYW5kIGBjb2xsaXNpb25FbmRgIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTE2LjY2Nl1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvcnJlY3Rpb249MV1cbiAgICAgKi9cbiAgICBFbmdpbmUudXBkYXRlID0gZnVuY3Rpb24oZW5naW5lLCBkZWx0YSwgY29ycmVjdGlvbikge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gQ29tbW9uLm5vdygpO1xuXG4gICAgICAgIGRlbHRhID0gZGVsdGEgfHwgMTAwMCAvIDYwO1xuICAgICAgICBjb3JyZWN0aW9uID0gY29ycmVjdGlvbiB8fCAxO1xuXG4gICAgICAgIHZhciB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGRldGVjdG9yID0gZW5naW5lLmRldGVjdG9yLFxuICAgICAgICAgICAgcGFpcnMgPSBlbmdpbmUucGFpcnMsXG4gICAgICAgICAgICB0aW1pbmcgPSBlbmdpbmUudGltaW5nLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gdGltaW5nLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gaW5jcmVtZW50IHRpbWVzdGFtcFxuICAgICAgICB0aW1pbmcudGltZXN0YW1wICs9IGRlbHRhICogdGltaW5nLnRpbWVTY2FsZTtcbiAgICAgICAgdGltaW5nLmxhc3REZWx0YSA9IGRlbHRhICogdGltaW5nLnRpbWVTY2FsZTtcblxuICAgICAgICAvLyBjcmVhdGUgYW4gZXZlbnQgb2JqZWN0XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICAvLyBnZXQgYWxsIGJvZGllcyBhbmQgYWxsIGNvbnN0cmFpbnRzIGluIHRoZSB3b3JsZFxuICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBhbGxDb25zdHJhaW50cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSBkZXRlY3RvciBib2RpZXMgaWYgdGhleSBoYXZlIGNoYW5nZWRcbiAgICAgICAgaWYgKHdvcmxkLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIERldGVjdG9yLnNldEJvZGllcyhkZXRlY3RvciwgYWxsQm9kaWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IGFsbCBjb21wb3NpdGUgbW9kaWZpZWQgZmxhZ3NcbiAgICAgICAgaWYgKHdvcmxkLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZCh3b3JsZCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBzbGVlcGluZyBpZiBlbmFibGVkXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy51cGRhdGUoYWxsQm9kaWVzLCB0aW1pbmcudGltZVNjYWxlKTtcblxuICAgICAgICAvLyBhcHBseSBncmF2aXR5IHRvIGFsbCBib2RpZXNcbiAgICAgICAgRW5naW5lLl9ib2RpZXNBcHBseUdyYXZpdHkoYWxsQm9kaWVzLCBlbmdpbmUuZ3Jhdml0eSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBib2R5IHBvc2l0aW9uIGFuZCByb3RhdGlvbiBieSBpbnRlZ3JhdGlvblxuICAgICAgICBFbmdpbmUuX2JvZGllc1VwZGF0ZShhbGxCb2RpZXMsIGRlbHRhLCB0aW1pbmcudGltZVNjYWxlLCBjb3JyZWN0aW9uLCB3b3JsZC5ib3VuZHMpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgY29uc3RyYWludHMgKGZpcnN0IHBhc3MpXG4gICAgICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwoYWxsQm9kaWVzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlQWxsKGFsbENvbnN0cmFpbnRzLCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbChhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIGZpbmQgYWxsIGNvbGxpc2lvbnNcbiAgICAgICAgZGV0ZWN0b3IucGFpcnMgPSBlbmdpbmUucGFpcnM7XG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gRGV0ZWN0b3IuY29sbGlzaW9ucyhkZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gdXBkYXRlIGNvbGxpc2lvbiBwYWlyc1xuICAgICAgICBQYWlycy51cGRhdGUocGFpcnMsIGNvbGxpc2lvbnMsIHRpbWVzdGFtcCk7XG5cbiAgICAgICAgLy8gd2FrZSB1cCBib2RpZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uc1xuICAgICAgICBpZiAoZW5naW5lLmVuYWJsZVNsZWVwaW5nKVxuICAgICAgICAgICAgU2xlZXBpbmcuYWZ0ZXJDb2xsaXNpb25zKHBhaXJzLmxpc3QsIHRpbWluZy50aW1lU2NhbGUpO1xuXG4gICAgICAgIC8vIHRyaWdnZXIgY29sbGlzaW9uIGV2ZW50c1xuICAgICAgICBpZiAocGFpcnMuY29sbGlzaW9uU3RhcnQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2NvbGxpc2lvblN0YXJ0JywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uU3RhcnQgfSk7XG5cbiAgICAgICAgLy8gaXRlcmF0aXZlbHkgcmVzb2x2ZSBwb3NpdGlvbiBiZXR3ZWVuIGNvbGxpc2lvbnNcbiAgICAgICAgUmVzb2x2ZXIucHJlU29sdmVQb3NpdGlvbihwYWlycy5saXN0KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5wb3NpdGlvbkl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgUmVzb2x2ZXIuc29sdmVQb3NpdGlvbihwYWlycy5saXN0LCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNvbHZlci5wb3N0U29sdmVQb3NpdGlvbihhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgY29uc3RyYWludHMgKHNlY29uZCBwYXNzKVxuICAgICAgICBDb25zdHJhaW50LnByZVNvbHZlQWxsKGFsbEJvZGllcyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUuY29uc3RyYWludEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZUFsbChhbGxDb25zdHJhaW50cywgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwoYWxsQm9kaWVzKTtcblxuICAgICAgICAvLyBpdGVyYXRpdmVseSByZXNvbHZlIHZlbG9jaXR5IGJldHdlZW4gY29sbGlzaW9uc1xuICAgICAgICBSZXNvbHZlci5wcmVTb2x2ZVZlbG9jaXR5KHBhaXJzLmxpc3QpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLnZlbG9jaXR5SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBSZXNvbHZlci5zb2x2ZVZlbG9jaXR5KHBhaXJzLmxpc3QsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJpZ2dlciBjb2xsaXNpb24gZXZlbnRzXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25BY3RpdmUubGVuZ3RoID4gMClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2NvbGxpc2lvbkFjdGl2ZScsIHsgcGFpcnM6IHBhaXJzLmNvbGxpc2lvbkFjdGl2ZSB9KTtcblxuICAgICAgICBpZiAocGFpcnMuY29sbGlzaW9uRW5kLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25FbmQnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25FbmQgfSk7XG5cbiAgICAgICAgLy8gY2xlYXIgZm9yY2UgYnVmZmVyc1xuICAgICAgICBFbmdpbmUuX2JvZGllc0NsZWFyRm9yY2VzKGFsbEJvZGllcyk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYWZ0ZXJVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgLy8gbG9nIHRoZSB0aW1lIGVsYXBzZWQgY29tcHV0aW5nIHRoaXMgdXBkYXRlXG4gICAgICAgIGVuZ2luZS50aW1pbmcubGFzdEVsYXBzZWQgPSBDb21tb24ubm93KCkgLSBzdGFydFRpbWU7XG5cbiAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIE1lcmdlcyB0d28gZW5naW5lcyBieSBrZWVwaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIGBlbmdpbmVBYCBidXQgcmVwbGFjaW5nIHRoZSB3b3JsZCB3aXRoIHRoZSBvbmUgZnJvbSBgZW5naW5lQmAuXG4gICAgICogQG1ldGhvZCBtZXJnZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVBXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZUJcbiAgICAgKi9cbiAgICBFbmdpbmUubWVyZ2UgPSBmdW5jdGlvbihlbmdpbmVBLCBlbmdpbmVCKSB7XG4gICAgICAgIENvbW1vbi5leHRlbmQoZW5naW5lQSwgZW5naW5lQik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZW5naW5lQi53b3JsZCkge1xuICAgICAgICAgICAgZW5naW5lQS53b3JsZCA9IGVuZ2luZUIud29ybGQ7XG5cbiAgICAgICAgICAgIEVuZ2luZS5jbGVhcihlbmdpbmVBKTtcblxuICAgICAgICAgICAgdmFyIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lQS53b3JsZCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBib2R5LmlkID0gQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZW5naW5lIHBhaXJzIGFuZCBkZXRlY3Rvci5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuICAgIEVuZ2luZS5jbGVhciA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgICAgICBQYWlycy5jbGVhcihlbmdpbmUucGFpcnMpO1xuICAgICAgICBEZXRlY3Rvci5jbGVhcihlbmdpbmUuZGV0ZWN0b3IpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBaZXJvZXMgdGhlIGBib2R5LmZvcmNlYCBhbmQgYGJvZHkudG9ycXVlYCBmb3JjZSBidWZmZXJzLlxuICAgICAqIEBtZXRob2QgX2JvZGllc0NsZWFyRm9yY2VzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgRW5naW5lLl9ib2RpZXNDbGVhckZvcmNlcyA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueCA9IDA7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnkgPSAwO1xuICAgICAgICAgICAgYm9keS50b3JxdWUgPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5cyBhIG1hc3MgZGVwZW5kYW50IGZvcmNlIHRvIGFsbCBnaXZlbiBib2RpZXMuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzQXBwbHlHcmF2aXR5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGdyYXZpdHlcbiAgICAgKi9cbiAgICBFbmdpbmUuX2JvZGllc0FwcGx5R3Jhdml0eSA9IGZ1bmN0aW9uKGJvZGllcywgZ3Jhdml0eSkge1xuICAgICAgICB2YXIgZ3Jhdml0eVNjYWxlID0gdHlwZW9mIGdyYXZpdHkuc2NhbGUgIT09ICd1bmRlZmluZWQnID8gZ3Jhdml0eS5zY2FsZSA6IDAuMDAxO1xuXG4gICAgICAgIGlmICgoZ3Jhdml0eS54ID09PSAwICYmIGdyYXZpdHkueSA9PT0gMCkgfHwgZ3Jhdml0eVNjYWxlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgYm9keS5pc1NsZWVwaW5nKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBncmF2aXR5XG4gICAgICAgICAgICBib2R5LmZvcmNlLnkgKz0gYm9keS5tYXNzICogZ3Jhdml0eS55ICogZ3Jhdml0eVNjYWxlO1xuICAgICAgICAgICAgYm9keS5mb3JjZS54ICs9IGJvZHkubWFzcyAqIGdyYXZpdHkueCAqIGdyYXZpdHlTY2FsZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseXMgYEJvZHkudXBkYXRlYCB0byBhbGwgZ2l2ZW4gYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzVXBkYXRlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhVGltZSBcbiAgICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgZWxhcHNlZCBiZXR3ZWVuIHVwZGF0ZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvcnJlY3Rpb24gXG4gICAgICogVGhlIFZlcmxldCBjb3JyZWN0aW9uIGZhY3RvciAoZGVsdGFUaW1lIC8gbGFzdERlbHRhVGltZSlcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gd29ybGRCb3VuZHNcbiAgICAgKi9cbiAgICBFbmdpbmUuX2JvZGllc1VwZGF0ZSA9IGZ1bmN0aW9uKGJvZGllcywgZGVsdGFUaW1lLCB0aW1lU2NhbGUsIGNvcnJlY3Rpb24sIHdvcmxkQm91bmRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgYm9keS5pc1NsZWVwaW5nKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBCb2R5LnVwZGF0ZShib2R5LCBkZWx0YVRpbWUsIHRpbWVTY2FsZSwgY29ycmVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBkZXByZWNhdGVkIGFsaWFzIGZvciBgUnVubmVyLnJ1bmAsIHVzZSBgTWF0dGVyLlJ1bm5lci5ydW4oZW5naW5lKWAgaW5zdGVhZCBhbmQgc2VlIGBNYXR0ZXIuUnVubmVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgTWF0dGVyLlJ1bm5lci5ydW4oZW5naW5lKSBpbnN0ZWFkXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGp1c3QgYmVmb3JlIGFuIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVVcGRhdGVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUgYW5kIGFsbCBjb2xsaXNpb24gZXZlbnRzXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVXBkYXRlXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7ZW5naW5lfSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlLCBwcm92aWRlcyBhIGxpc3Qgb2YgYWxsIHBhaXJzIHRoYXQgaGF2ZSBzdGFydGVkIHRvIGNvbGxpZGUgaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25TdGFydFxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtwYWlyW119IGV2ZW50LnBhaXJzIExpc3Qgb2YgYWZmZWN0ZWQgcGFpcnNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUsIHByb3ZpZGVzIGEgbGlzdCBvZiBhbGwgcGFpcnMgdGhhdCBhcmUgY29sbGlkaW5nIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uQWN0aXZlXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge3BhaXJbXX0gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgZW5kZWQgY29sbGlzaW9uIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uRW5kXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge3BhaXJbXX0gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBvc2l0aW9uIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9zaXRpb25JdGVyYXRpb25zXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHZlbG9jaXR5IGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdmVsb2NpdHlJdGVyYXRpb25zXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIGNvbnN0cmFpbnQgaXRlcmF0aW9ucyB0byBwZXJmb3JtIGVhY2ggdXBkYXRlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGlnaGVyIHF1YWxpdHkgdGhlIHNpbXVsYXRpb24gd2lsbCBiZSBhdCB0aGUgZXhwZW5zZSBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBgMmAgaXMgdXN1YWxseSB2ZXJ5IGFkZXF1YXRlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRJdGVyYXRpb25zXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVuZ2luZSBzaG91bGQgYWxsb3cgc2xlZXBpbmcgdmlhIHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUuXG4gICAgICogU2xlZXBpbmcgY2FuIGltcHJvdmUgc3RhYmlsaXR5IGFuZCBwZXJmb3JtYW5jZSwgYnV0IG9mdGVuIGF0IHRoZSBleHBlbnNlIG9mIGFjY3VyYWN5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuYWJsZVNsZWVwaW5nXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCBjb250YWluaW5nIHByb3BlcnRpZXMgcmVnYXJkaW5nIHRoZSB0aW1pbmcgc3lzdGVtcyBvZiB0aGUgZW5naW5lLiBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmdcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGdsb2JhbCBzY2FsaW5nIGZhY3RvciBvZiB0aW1lIGZvciBhbGwgYm9kaWVzLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIGZyZWV6ZXMgdGhlIHNpbXVsYXRpb24uXG4gICAgICogQSB2YWx1ZSBvZiBgMC4xYCBnaXZlcyBhIHNsb3ctbW90aW9uIGVmZmVjdC5cbiAgICAgKiBBIHZhbHVlIG9mIGAxLjJgIGdpdmVzIGEgc3BlZWQtdXAgZWZmZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZy50aW1lU2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXJyZW50IHNpbXVsYXRpb24tdGltZSBpbiBtaWxsaXNlY29uZHMgc3RhcnRpbmcgZnJvbSBgMGAuIFxuICAgICAqIEl0IGlzIGluY3JlbWVudGVkIG9uIGV2ZXJ5IGBFbmdpbmUudXBkYXRlYCBieSB0aGUgZ2l2ZW4gYGRlbHRhYCBhcmd1bWVudC4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLnRpbWVzdGFtcFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCByZXByZXNlbnRzIHRoZSB0b3RhbCBleGVjdXRpb24gdGltZSBlbGFwc2VkIGR1cmluZyB0aGUgbGFzdCBgRW5naW5lLnVwZGF0ZWAgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqIEl0IGlzIHVwZGF0ZWQgYnkgdGltaW5nIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBsYXN0IGBFbmdpbmUudXBkYXRlYCBjYWxsIHVudGlsIGl0IGVuZHMuXG4gICAgICpcbiAgICAgKiBUaGlzIHZhbHVlIHdpbGwgYWxzbyBpbmNsdWRlIHRoZSB0b3RhbCBleGVjdXRpb24gdGltZSBvZiBhbGwgZXZlbnQgaGFuZGxlcnMgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSB0cmlnZ2VyZWQgYnkgdGhlIGVuZ2luZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLmxhc3RFbGFwc2VkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIGBkZWx0YWAgdmFsdWUgdXNlZCBpbiB0aGUgbGFzdCBlbmdpbmUgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZy5sYXN0RGVsdGFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBNYXR0ZXIuRGV0ZWN0b3JgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRldGVjdG9yXG4gICAgICogQHR5cGUgZGV0ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5EZXRlY3RvciBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTWF0dGVyLkdyaWRgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgYGVuZ2luZS5kZXRlY3RvcmBcbiAgICAgKiBAcHJvcGVydHkgZ3JpZFxuICAgICAqIEB0eXBlIGdyaWRcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5HcmlkIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlZCBieSBhbmQgbm93IGFsaWFzIGZvciBgZW5naW5lLmdyaWRgLlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgYGVuZ2luZS5kZXRlY3RvcmBcbiAgICAgKiBAcHJvcGVydHkgYnJvYWRwaGFzZVxuICAgICAqIEB0eXBlIGdyaWRcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5HcmlkIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBgTWF0dGVyLkNvbXBvc2l0ZWAgaW5zdGFuY2UgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIGJvZGllcywgY29uc3RyYWludHMgYW5kIG90aGVyIGNvbXBvc2l0ZXMgdG8gYmUgc2ltdWxhdGVkIGJ5IHRoaXMgZW5naW5lLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHdvcmxkXG4gICAgICogQHR5cGUgY29tcG9zaXRlXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuQ29tcG9zaXRlIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHRvIGFwcGx5IG9uIGFsbCBib2RpZXMgaW4gYGVuZ2luZS53b3JsZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgeCBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eS54XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgeSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eS55XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgc2NhbGUgZmFjdG9yLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkuc2NhbGVcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwLjAwMVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJlc29sdmVyYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgcmVzb2x2aW5nIGNvbGxpc2lvbiBwYWlycy5cbipcbiogQGNsYXNzIFJlc29sdmVyXG4qL1xuXG52YXIgUmVzb2x2ZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvbHZlcjtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCA9IDQ7XG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ID0gNjtcbiAgICBSZXNvbHZlci5fcG9zaXRpb25EYW1wZW4gPSAwLjk7XG4gICAgUmVzb2x2ZXIuX3Bvc2l0aW9uV2FybWluZyA9IDAuODtcbiAgICBSZXNvbHZlci5fZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyID0gNTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgcGFpcnMgZm9yIHBvc2l0aW9uIHNvbHZpbmcuXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucHJlU29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50LFxuICAgICAgICAgICAgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGg7XG5cbiAgICAgICAgLy8gZmluZCB0b3RhbCBjb250YWN0cyBvbiBlYWNoIGJvZHlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoO1xuICAgICAgICAgICAgcGFpci5jb2xsaXNpb24ucGFyZW50QS50b3RhbENvbnRhY3RzICs9IGFjdGl2ZUNvdW50O1xuICAgICAgICAgICAgcGFpci5jb2xsaXNpb24ucGFyZW50Qi50b3RhbENvbnRhY3RzICs9IGFjdGl2ZUNvdW50O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgYSBzb2x1dGlvbiBmb3IgcGFpciBwb3NpdGlvbnMuXG4gICAgICogQG1ldGhvZCBzb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFJlc29sdmVyLnNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBjb250YWN0U2hhcmUsXG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UsXG4gICAgICAgICAgICBwb3NpdGlvbkRhbXBlbiA9IFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbixcbiAgICAgICAgICAgIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoO1xuXG4gICAgICAgIC8vIGZpbmQgaW1wdWxzZXMgcmVxdWlyZWQgdG8gcmVzb2x2ZSBwZW5ldHJhdGlvblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG5cbiAgICAgICAgICAgIC8vIGdldCBjdXJyZW50IHNlcGFyYXRpb24gYmV0d2VlbiBib2R5IGVkZ2VzIGludm9sdmVkIGluIGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpci5zZXBhcmF0aW9uID0gXG4gICAgICAgICAgICAgICAgbm9ybWFsLnggKiAoYm9keUIucG9zaXRpb25JbXB1bHNlLnggKyBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCAtIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS54KVxuICAgICAgICAgICAgICAgICsgbm9ybWFsLnkgKiAoYm9keUIucG9zaXRpb25JbXB1bHNlLnkgKyBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSAtIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS55KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEI7XG4gICAgICAgICAgICBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsO1xuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlID0gKHBhaXIuc2VwYXJhdGlvbiAtIHBhaXIuc2xvcCkgKiB0aW1lU2NhbGU7XG5cbiAgICAgICAgICAgIGlmIChib2R5QS5pc1N0YXRpYyB8fCBib2R5Qi5pc1N0YXRpYylcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgKj0gMjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSBwb3NpdGlvbkRhbXBlbiAvIGJvZHlBLnRvdGFsQ29udGFjdHM7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25JbXB1bHNlLnggKz0gbm9ybWFsLnggKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25JbXB1bHNlLnkgKz0gbm9ybWFsLnkgKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gcG9zaXRpb25EYW1wZW4gLyBib2R5Qi50b3RhbENvbnRhY3RzO1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uSW1wdWxzZS54IC09IG5vcm1hbC54ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uSW1wdWxzZS55IC09IG5vcm1hbC55ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHBvc2l0aW9uIHJlc29sdXRpb24uXG4gICAgICogQG1ldGhvZCBwb3N0U29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBSZXNvbHZlci5wb3N0U29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICB2YXIgcG9zaXRpb25XYXJtaW5nID0gUmVzb2x2ZXIuX3Bvc2l0aW9uV2FybWluZyxcbiAgICAgICAgICAgIGJvZGllc0xlbmd0aCA9IGJvZGllcy5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0aWNlc1RyYW5zbGF0ZSA9IFZlcnRpY2VzLnRyYW5zbGF0ZSxcbiAgICAgICAgICAgIGJvdW5kc1VwZGF0ZSA9IEJvdW5kcy51cGRhdGU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlID0gYm9keS5wb3NpdGlvbkltcHVsc2UsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlWCA9IHBvc2l0aW9uSW1wdWxzZS54LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZVkgPSBwb3NpdGlvbkltcHVsc2UueSxcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eSA9IGJvZHkudmVsb2NpdHk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGNvbnRhY3QgY291bnRcbiAgICAgICAgICAgIGJvZHkudG90YWxDb250YWN0cyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkltcHVsc2VYICE9PSAwIHx8IHBvc2l0aW9uSW1wdWxzZVkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgYm9keSBnZW9tZXRyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzVHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHBvc2l0aW9uSW1wdWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kc1VwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgdmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gcG9zaXRpb25JbXB1bHNlWDtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IHBvc2l0aW9uSW1wdWxzZVk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0aGUgYm9keSB3aXRob3V0IGNoYW5naW5nIHZlbG9jaXR5XG4gICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBwb3NpdGlvbkltcHVsc2VYO1xuICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgKz0gcG9zaXRpb25JbXB1bHNlWTtcblxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbkltcHVsc2VYICogdmVsb2NpdHkueCArIHBvc2l0aW9uSW1wdWxzZVkgKiB2ZWxvY2l0eS55IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBjYWNoZWQgaW1wdWxzZSBpZiB0aGUgYm9keSBoYXMgdmVsb2NpdHkgYWxvbmcgaXRcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UueSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FybSB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnggKj0gcG9zaXRpb25XYXJtaW5nO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UueSAqPSBwb3NpdGlvbldhcm1pbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgcGFpcnMgZm9yIHZlbG9jaXR5IHNvbHZpbmcuXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZVZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucHJlU29sdmVWZWxvY2l0eSA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHZhciBwYWlyc0xlbmd0aCA9IHBhaXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuICAgICAgICBcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzTGVuZ3RoID0gY29udGFjdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QixcbiAgICAgICAgICAgICAgICBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsLFxuICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBjb2xsaXNpb24udGFuZ2VudDtcbiAgICBcbiAgICAgICAgICAgIC8vIHJlc29sdmUgZWFjaCBjb250YWN0XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29udGFjdHNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gY29udGFjdHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RWZXJ0ZXggPSBjb250YWN0LnZlcnRleCxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxJbXB1bHNlICE9PSAwIHx8IHRhbmdlbnRJbXB1bHNlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvdGFsIGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbXB1bHNlWCA9IG5vcm1hbC54ICogbm9ybWFsSW1wdWxzZSArIHRhbmdlbnQueCAqIHRhbmdlbnRJbXB1bHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wdWxzZVkgPSBub3JtYWwueSAqIG5vcm1hbEltcHVsc2UgKyB0YW5nZW50LnkgKiB0YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGx5IGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCArPSBpbXB1bHNlWCAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnkgKz0gaW1wdWxzZVkgKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLmFuZ2xlUHJldiArPSBib2R5QS5pbnZlcnNlSW5lcnRpYSAqIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udGFjdFZlcnRleC54IC0gYm9keUEucG9zaXRpb24ueCkgKiBpbXB1bHNlWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gKGNvbnRhY3RWZXJ0ZXgueSAtIGJvZHlBLnBvc2l0aW9uLnkpICogaW1wdWxzZVhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54IC09IGltcHVsc2VYICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSAtPSBpbXB1bHNlWSAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIuYW5nbGVQcmV2IC09IGJvZHlCLmludmVyc2VJbmVydGlhICogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250YWN0VmVydGV4LnggLSBib2R5Qi5wb3NpdGlvbi54KSAqIGltcHVsc2VZIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gKGNvbnRhY3RWZXJ0ZXgueSAtIGJvZHlCLnBvc2l0aW9uLnkpICogaW1wdWxzZVhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCBhIHNvbHV0aW9uIGZvciBwYWlyIHZlbG9jaXRpZXMuXG4gICAgICogQG1ldGhvZCBzb2x2ZVZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFJlc29sdmVyLnNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGVTcXVhcmVkID0gdGltZVNjYWxlICogdGltZVNjYWxlLFxuICAgICAgICAgICAgcmVzdGluZ1RocmVzaCA9IFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoICogdGltZVNjYWxlU3F1YXJlZCxcbiAgICAgICAgICAgIGZyaWN0aW9uTm9ybWFsTXVsdGlwbGllciA9IFJlc29sdmVyLl9mcmljdGlvbk5vcm1hbE11bHRpcGxpZXIsXG4gICAgICAgICAgICByZXN0aW5nVGhyZXNoVGFuZ2VudCA9IFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoVGFuZ2VudCAqIHRpbWVTY2FsZVNxdWFyZWQsXG4gICAgICAgICAgICBOdW1iZXJNYXhWYWx1ZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBwYWlyc0xlbmd0aCA9IHBhaXJzLmxlbmd0aCxcbiAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlLFxuICAgICAgICAgICAgbWF4RnJpY3Rpb24sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEIsXG4gICAgICAgICAgICAgICAgYm9keUFWZWxvY2l0eSA9IGJvZHlBLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIGJvZHlCVmVsb2NpdHkgPSBib2R5Qi52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBub3JtYWxYID0gY29sbGlzaW9uLm5vcm1hbC54LFxuICAgICAgICAgICAgICAgIG5vcm1hbFkgPSBjb2xsaXNpb24ubm9ybWFsLnksXG4gICAgICAgICAgICAgICAgdGFuZ2VudFggPSBjb2xsaXNpb24udGFuZ2VudC54LFxuICAgICAgICAgICAgICAgIHRhbmdlbnRZID0gY29sbGlzaW9uLnRhbmdlbnQueSxcbiAgICAgICAgICAgICAgICBjb250YWN0cyA9IHBhaXIuYWN0aXZlQ29udGFjdHMsXG4gICAgICAgICAgICAgICAgY29udGFjdHNMZW5ndGggPSBjb250YWN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gMSAvIGNvbnRhY3RzTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGludmVyc2VNYXNzVG90YWwgPSBib2R5QS5pbnZlcnNlTWFzcyArIGJvZHlCLmludmVyc2VNYXNzLFxuICAgICAgICAgICAgICAgIGZyaWN0aW9uID0gcGFpci5mcmljdGlvbiAqIHBhaXIuZnJpY3Rpb25TdGF0aWMgKiBmcmljdGlvbk5vcm1hbE11bHRpcGxpZXIgKiB0aW1lU2NhbGVTcXVhcmVkO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9keSB2ZWxvY2l0aWVzXG4gICAgICAgICAgICBib2R5QVZlbG9jaXR5LnggPSBib2R5QS5wb3NpdGlvbi54IC0gYm9keUEucG9zaXRpb25QcmV2Lng7XG4gICAgICAgICAgICBib2R5QVZlbG9jaXR5LnkgPSBib2R5QS5wb3NpdGlvbi55IC0gYm9keUEucG9zaXRpb25QcmV2Lnk7XG4gICAgICAgICAgICBib2R5QlZlbG9jaXR5LnggPSBib2R5Qi5wb3NpdGlvbi54IC0gYm9keUIucG9zaXRpb25QcmV2Lng7XG4gICAgICAgICAgICBib2R5QlZlbG9jaXR5LnkgPSBib2R5Qi5wb3NpdGlvbi55IC0gYm9keUIucG9zaXRpb25QcmV2Lnk7XG4gICAgICAgICAgICBib2R5QS5hbmd1bGFyVmVsb2NpdHkgPSBib2R5QS5hbmdsZSAtIGJvZHlBLmFuZ2xlUHJldjtcbiAgICAgICAgICAgIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eSA9IGJvZHlCLmFuZ2xlIC0gYm9keUIuYW5nbGVQcmV2O1xuXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IGNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VmVydGV4ID0gY29udGFjdC52ZXJ0ZXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0QVggPSBjb250YWN0VmVydGV4LnggLSBib2R5QS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRBWSA9IGNvbnRhY3RWZXJ0ZXgueSAtIGJvZHlBLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEJYID0gY29udGFjdFZlcnRleC54IC0gYm9keUIucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QlkgPSBjb250YWN0VmVydGV4LnkgLSBib2R5Qi5wb3NpdGlvbi55O1xuIFxuICAgICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVBvaW50QVggPSBib2R5QVZlbG9jaXR5LnggLSBvZmZzZXRBWSAqIGJvZHlBLmFuZ3VsYXJWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEFZID0gYm9keUFWZWxvY2l0eS55ICsgb2Zmc2V0QVggKiBib2R5QS5hbmd1bGFyVmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRCWCA9IGJvZHlCVmVsb2NpdHkueCAtIG9mZnNldEJZICogYm9keUIuYW5ndWxhclZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QlkgPSBib2R5QlZlbG9jaXR5LnkgKyBvZmZzZXRCWCAqIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eTtcblxuICAgICAgICAgICAgICAgIHZhciByZWxhdGl2ZVZlbG9jaXR5WCA9IHZlbG9jaXR5UG9pbnRBWCAtIHZlbG9jaXR5UG9pbnRCWCxcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eVkgPSB2ZWxvY2l0eVBvaW50QVkgLSB2ZWxvY2l0eVBvaW50Qlk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsVmVsb2NpdHkgPSBub3JtYWxYICogcmVsYXRpdmVWZWxvY2l0eVggKyBub3JtYWxZICogcmVsYXRpdmVWZWxvY2l0eVksXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRWZWxvY2l0eSA9IHRhbmdlbnRYICogcmVsYXRpdmVWZWxvY2l0eVggKyB0YW5nZW50WSAqIHJlbGF0aXZlVmVsb2NpdHlZO1xuXG4gICAgICAgICAgICAgICAgLy8gY291bG9tYiBmcmljdGlvblxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxPdmVybGFwID0gcGFpci5zZXBhcmF0aW9uICsgbm9ybWFsVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbEZvcmNlID0gTWF0aC5taW4obm9ybWFsT3ZlcmxhcCwgMSk7XG4gICAgICAgICAgICAgICAgbm9ybWFsRm9yY2UgPSBub3JtYWxPdmVybGFwIDwgMCA/IDAgOiBub3JtYWxGb3JjZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgZnJpY3Rpb25MaW1pdCA9IG5vcm1hbEZvcmNlICogZnJpY3Rpb247XG5cbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZlbG9jaXR5ID4gZnJpY3Rpb25MaW1pdCB8fCAtdGFuZ2VudFZlbG9jaXR5ID4gZnJpY3Rpb25MaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhGcmljdGlvbiA9IHRhbmdlbnRWZWxvY2l0eSA+IDAgPyB0YW5nZW50VmVsb2NpdHkgOiAtdGFuZ2VudFZlbG9jaXR5O1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IHBhaXIuZnJpY3Rpb24gKiAodGFuZ2VudFZlbG9jaXR5ID4gMCA/IDEgOiAtMSkgKiB0aW1lU2NhbGVTcXVhcmVkO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRJbXB1bHNlIDwgLW1heEZyaWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IC1tYXhGcmljdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YW5nZW50SW1wdWxzZSA+IG1heEZyaWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IG1heEZyaWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSB0YW5nZW50VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgICAgIG1heEZyaWN0aW9uID0gTnVtYmVyTWF4VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgbWFzcywgaW5lcnRpYSBhbmQgY29udGFjdCBvZmZzZXRcbiAgICAgICAgICAgICAgICB2YXIgb0FjTiA9IG9mZnNldEFYICogbm9ybWFsWSAtIG9mZnNldEFZICogbm9ybWFsWCxcbiAgICAgICAgICAgICAgICAgICAgb0JjTiA9IG9mZnNldEJYICogbm9ybWFsWSAtIG9mZnNldEJZICogbm9ybWFsWCxcbiAgICAgICAgICAgICAgICAgICAgc2hhcmUgPSBjb250YWN0U2hhcmUgLyAoaW52ZXJzZU1hc3NUb3RhbCArIGJvZHlBLmludmVyc2VJbmVydGlhICogb0FjTiAqIG9BY04gKyBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqIG9CY04gKiBvQmNOKTtcblxuICAgICAgICAgICAgICAgIC8vIHJhdyBpbXB1bHNlc1xuICAgICAgICAgICAgICAgIHZhciBub3JtYWxJbXB1bHNlID0gKDEgKyBwYWlyLnJlc3RpdHV0aW9uKSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgKj0gc2hhcmU7XG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaGlnaCB2ZWxvY2l0eSBhbmQgcmVzdGluZyBjb2xsaXNpb25zIHNlcGFyYXRlbHlcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsVmVsb2NpdHkgKiBub3JtYWxWZWxvY2l0eSA+IHJlc3RpbmdUaHJlc2ggJiYgbm9ybWFsVmVsb2NpdHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2ggbm9ybWFsIHZlbG9jaXR5IHNvIGNsZWFyIGNhY2hlZCBjb250YWN0IG5vcm1hbCBpbXB1bHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29sdmUgcmVzdGluZyBjb2xsaXNpb24gY29uc3RyYWludHMgdXNpbmcgRXJpbiBDYXR0bydzIG1ldGhvZCAoR0RDMDgpXG4gICAgICAgICAgICAgICAgICAgIC8vIGltcHVsc2UgY29uc3RyYWludCB0ZW5kcyB0byAwXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWN0Tm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5ub3JtYWxJbXB1bHNlICs9IG5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSA9IE1hdGgubWluKGNvbnRhY3Qubm9ybWFsSW1wdWxzZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2UgLSBjb250YWN0Tm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaGlnaCB2ZWxvY2l0eSBhbmQgcmVzdGluZyBjb2xsaXNpb25zIHNlcGFyYXRlbHlcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZlbG9jaXR5ICogdGFuZ2VudFZlbG9jaXR5ID4gcmVzdGluZ1RocmVzaFRhbmdlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaCB0YW5nZW50IHZlbG9jaXR5IHNvIGNsZWFyIGNhY2hlZCBjb250YWN0IHRhbmdlbnQgaW1wdWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb2x2ZSByZXN0aW5nIGNvbGxpc2lvbiBjb25zdHJhaW50cyB1c2luZyBFcmluIENhdHRvJ3MgbWV0aG9kIChHREMwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFuZ2VudCBpbXB1bHNlIHRlbmRzIHRvIC10YW5nZW50U3BlZWQgb3IgK3RhbmdlbnRTcGVlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdFRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50YW5nZW50SW1wdWxzZSArPSB0YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPCAtbWF4RnJpY3Rpb24pIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSAtbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWN0LnRhbmdlbnRJbXB1bHNlID4gbWF4RnJpY3Rpb24pIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSBtYXhGcmljdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlIC0gY29udGFjdFRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRvdGFsIGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgdmFyIGltcHVsc2VYID0gbm9ybWFsWCAqIG5vcm1hbEltcHVsc2UgKyB0YW5nZW50WCAqIHRhbmdlbnRJbXB1bHNlLFxuICAgICAgICAgICAgICAgICAgICBpbXB1bHNlWSA9IG5vcm1hbFkgKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudFkgKiB0YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54ICs9IGltcHVsc2VYICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55ICs9IGltcHVsc2VZICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLmFuZ2xlUHJldiArPSAob2Zmc2V0QVggKiBpbXB1bHNlWSAtIG9mZnNldEFZICogaW1wdWxzZVgpICogYm9keUEuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggLT0gaW1wdWxzZVggKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgLT0gaW1wdWxzZVkgKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUIuYW5nbGVQcmV2IC09IChvZmZzZXRCWCAqIGltcHVsc2VZIC0gb2Zmc2V0QlkgKiBpbXB1bHNlWCkgKiBib2R5Qi5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlBhaXJzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gcGFpciBzZXRzLlxuKlxuKiBAY2xhc3MgUGFpcnNcbiovXG5cbnZhciBQYWlycyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhaXJzO1xuXG52YXIgUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBwYWlycyBzdHJ1Y3R1cmUuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3BhaXJzfSBBIG5ldyBwYWlycyBzdHJ1Y3R1cmVcbiAgICAgKi9cbiAgICBQYWlycy5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHsgXG4gICAgICAgICAgICB0YWJsZToge30sXG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0OiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZTogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25FbmQ6IFtdXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHBhaXJzIGdpdmVuIGEgbGlzdCBvZiBjb2xsaXNpb25zLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhaXJzXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb25bXX0gY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlycy51cGRhdGUgPSBmdW5jdGlvbihwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBwYWlyc0xpc3QgPSBwYWlycy5saXN0LFxuICAgICAgICAgICAgcGFpcnNMaXN0TGVuZ3RoID0gcGFpcnNMaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIHBhaXJzVGFibGUgPSBwYWlycy50YWJsZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnNMZW5ndGggPSBjb2xsaXNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0ID0gcGFpcnMuY29sbGlzaW9uU3RhcnQsXG4gICAgICAgICAgICBjb2xsaXNpb25FbmQgPSBwYWlycy5jb2xsaXNpb25FbmQsXG4gICAgICAgICAgICBjb2xsaXNpb25BY3RpdmUgPSBwYWlycy5jb2xsaXNpb25BY3RpdmUsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBwYWlySW5kZXgsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyBjbGVhciBjb2xsaXNpb24gc3RhdGUgYXJyYXlzLCBidXQgbWFpbnRhaW4gb2xkIHJlZmVyZW5jZVxuICAgICAgICBjb2xsaXNpb25TdGFydC5sZW5ndGggPSAwO1xuICAgICAgICBjb2xsaXNpb25FbmQubGVuZ3RoID0gMDtcbiAgICAgICAgY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGlzdExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyc0xpc3RbaV0uY29uZmlybWVkQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29sbGlzaW9uc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuICAgICAgICAgICAgcGFpciA9IGNvbGxpc2lvbi5wYWlyO1xuXG4gICAgICAgICAgICBpZiAocGFpcikge1xuICAgICAgICAgICAgICAgIC8vIHBhaXIgYWxyZWFkeSBleGlzdHMgKGJ1dCBtYXkgb3IgbWF5IG5vdCBiZSBhY3RpdmUpXG4gICAgICAgICAgICAgICAgaWYgKHBhaXIuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFpciBleGlzdHMgYW5kIGlzIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BY3RpdmUucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGV4aXN0cyBidXQgd2FzIGluYWN0aXZlLCBzbyBhIGNvbGxpc2lvbiBoYXMganVzdCBzdGFydGVkIGFnYWluXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBwYWlyXG4gICAgICAgICAgICAgICAgUGFpci51cGRhdGUocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIHBhaXIuY29uZmlybWVkQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcGFpciBkaWQgbm90IGV4aXN0LCBjcmVhdGUgYSBuZXcgcGFpclxuICAgICAgICAgICAgICAgIHBhaXIgPSBQYWlyLmNyZWF0ZShjb2xsaXNpb24sIHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgcGFpcnNUYWJsZVtwYWlyLmlkXSA9IHBhaXI7XG5cbiAgICAgICAgICAgICAgICAvLyBwdXNoIHRoZSBuZXcgcGFpclxuICAgICAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgcGFpcnNMaXN0LnB1c2gocGFpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHBhaXJzIHRoYXQgYXJlIG5vIGxvbmdlciBhY3RpdmVcbiAgICAgICAgdmFyIHJlbW92ZVBhaXJJbmRleCA9IFtdO1xuICAgICAgICBwYWlyc0xpc3RMZW5ndGggPSBwYWlyc0xpc3QubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xpc3RMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzTGlzdFtpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmNvbmZpcm1lZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIFBhaXIuc2V0QWN0aXZlKHBhaXIsIGZhbHNlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkVuZC5wdXNoKHBhaXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYWlyLmNvbGxpc2lvbi5ib2R5QS5pc1NsZWVwaW5nICYmICFwYWlyLmNvbGxpc2lvbi5ib2R5Qi5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVBhaXJJbmRleC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSBpbmFjdGl2ZSBwYWlyc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVtb3ZlUGFpckluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlySW5kZXggPSByZW1vdmVQYWlySW5kZXhbaV0gLSBpO1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzTGlzdFtwYWlySW5kZXhdO1xuICAgICAgICAgICAgcGFpcnNMaXN0LnNwbGljZShwYWlySW5kZXgsIDEpO1xuICAgICAgICAgICAgZGVsZXRlIHBhaXJzVGFibGVbcGFpci5pZF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBnaXZlbiBwYWlycyBzdHJ1Y3R1cmUuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7cGFpcnN9IHBhaXJzXG4gICAgICogQHJldHVybiB7cGFpcnN9IHBhaXJzXG4gICAgICovXG4gICAgUGFpcnMuY2xlYXIgPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICBwYWlycy50YWJsZSA9IHt9O1xuICAgICAgICBwYWlycy5saXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvblN0YXJ0Lmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25FbmQubGVuZ3RoID0gMDtcbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTWF0dGVyID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcclxuXHJcbk1hdHRlci5BeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XHJcbk1hdHRlci5Cb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcclxuTWF0dGVyLkJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xyXG5NYXR0ZXIuQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcclxuTWF0dGVyLkNvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XHJcbk1hdHRlci5Db21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xyXG5NYXR0ZXIuQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcclxuTWF0dGVyLkNvbXBvc2l0ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcclxuTWF0dGVyLkNvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcclxuTWF0dGVyLkNvbnRhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcclxuTWF0dGVyLkRldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XHJcbk1hdHRlci5FbmdpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcclxuTWF0dGVyLkV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XHJcbk1hdHRlci5HcmlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XHJcbk1hdHRlci5Nb3VzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xyXG5NYXR0ZXIuTW91c2VDb25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XHJcbk1hdHRlci5QYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcclxuTWF0dGVyLlBhaXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XHJcbk1hdHRlci5QbHVnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcclxuTWF0dGVyLlF1ZXJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XHJcbk1hdHRlci5SZW5kZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcclxuTWF0dGVyLlJlc29sdmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XHJcbk1hdHRlci5SdW5uZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KTtcclxuTWF0dGVyLlNBVCA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xyXG5NYXR0ZXIuU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xyXG5NYXR0ZXIuU3ZnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XHJcbk1hdHRlci5WZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xyXG5NYXR0ZXIuVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xyXG5NYXR0ZXIuV29ybGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcclxuXHJcbi8vIHRlbXBvcmFyeSBiYWNrIGNvbXBhdGliaWxpdHlcclxuTWF0dGVyLkVuZ2luZS5ydW4gPSBNYXR0ZXIuUnVubmVyLnJ1bjtcclxuTWF0dGVyLkNvbW1vbi5kZXByZWNhdGVkKE1hdHRlci5FbmdpbmUsICdydW4nLCAnRW5naW5lLnJ1biDinqQgdXNlIE1hdHRlci5SdW5uZXIucnVuKGVuZ2luZSkgaW5zdGVhZCcpO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcclxuKiBUaGUgYE1hdHRlcmAgbW9kdWxlIGlzIHRoZSB0b3AgbGV2ZWwgbmFtZXNwYWNlLiBJdCBhbHNvIGluY2x1ZGVzIGEgZnVuY3Rpb24gZm9yIGluc3RhbGxpbmcgcGx1Z2lucyBvbiB0b3Agb2YgdGhlIGxpYnJhcnkuXHJcbipcclxuKiBAY2xhc3MgTWF0dGVyXHJcbiovXHJcblxyXG52YXIgTWF0dGVyID0ge307XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHRlcjtcclxuXHJcbnZhciBQbHVnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcclxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlicmFyeSBuYW1lLlxyXG4gICAgICogQHByb3BlcnR5IG5hbWVcclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLm5hbWUgPSAnbWF0dGVyLWpzJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaWJyYXJ5IHZlcnNpb24uXHJcbiAgICAgKiBAcHJvcGVydHkgdmVyc2lvblxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudmVyc2lvbiA9ICB0cnVlID8gXCIwLjE4LjBcIiA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGlzdCBvZiBwbHVnaW4gZGVwZW5kZW5jaWVzIHRvIGJlIGluc3RhbGxlZC4gVGhlc2UgYXJlIG5vcm1hbGx5IHNldCBhbmQgaW5zdGFsbGVkIHRocm91Z2ggYE1hdHRlci51c2VgLlxyXG4gICAgICogQWx0ZXJuYXRpdmVseSB5b3UgbWF5IHNldCBgTWF0dGVyLnVzZXNgIG1hbnVhbGx5IGFuZCBpbnN0YWxsIHRoZW0gYnkgY2FsbGluZyBgUGx1Z2luLnVzZShNYXR0ZXIpYC5cclxuICAgICAqIEBwcm9wZXJ0eSB1c2VzXHJcbiAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci51c2VzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGx1Z2lucyB0aGF0IGhhdmUgYmVlbiBpbnN0YWxsZWQgdGhyb3VnaCBgTWF0dGVyLlBsdWdpbi5pbnN0YWxsYC4gUmVhZCBvbmx5LlxyXG4gICAgICogQHByb3BlcnR5IHVzZWRcclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlZCA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5zdGFsbHMgdGhlIGdpdmVuIHBsdWdpbnMgb24gdGhlIGBNYXR0ZXJgIG5hbWVzcGFjZS5cclxuICAgICAqIFRoaXMgaXMgYSBzaG9ydC1oYW5kIGZvciBgUGx1Z2luLnVzZWAsIHNlZSBpdCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgICAqIENhbGwgdGhpcyBmdW5jdGlvbiBvbmNlIGF0IHRoZSBzdGFydCBvZiB5b3VyIGNvZGUsIHdpdGggYWxsIG9mIHRoZSBwbHVnaW5zIHlvdSB3aXNoIHRvIGluc3RhbGwgYXMgYXJndW1lbnRzLlxyXG4gICAgICogQXZvaWQgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIG11bHRpcGxlIHRpbWVzIHVubGVzcyB5b3UgaW50ZW5kIHRvIG1hbnVhbGx5IGNvbnRyb2wgaW5zdGFsbGF0aW9uIG9yZGVyLlxyXG4gICAgICogQG1ldGhvZCB1c2VcclxuICAgICAqIEBwYXJhbSAuLi5wbHVnaW4ge0Z1bmN0aW9ufSBUaGUgcGx1Z2luKHMpIHRvIGluc3RhbGwgb24gYGJhc2VgIChtdWx0aS1hcmd1bWVudCkuXHJcbiAgICAgKi9cclxuICAgIE1hdHRlci51c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBQbHVnaW4udXNlKE1hdHRlciwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGJlZm9yZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgTWF0dGVyYC5cclxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxyXG4gICAgICogQG1ldGhvZCBiZWZvcmVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBNYXR0ZXJgXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBiZWZvcmUgdGhlIG9yaWdpbmFsXHJcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcclxuICAgICAqL1xyXG4gICAgTWF0dGVyLmJlZm9yZSA9IGZ1bmN0aW9uKHBhdGgsIGZ1bmMpIHtcclxuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eTWF0dGVyLi8sICcnKTtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmNoYWluUGF0aEJlZm9yZShNYXR0ZXIsIHBhdGgsIGZ1bmMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBhZnRlciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgTWF0dGVyYC5cclxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxyXG4gICAgICogQG1ldGhvZCBhZnRlclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYE1hdHRlcmBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGFmdGVyIHRoZSBvcmlnaW5hbFxyXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5hZnRlciA9IGZ1bmN0aW9uKHBhdGgsIGZ1bmMpIHtcclxuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eTWF0dGVyLi8sICcnKTtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmNoYWluUGF0aEFmdGVyKE1hdHRlciwgcGF0aCwgZnVuYyk7XHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbXBvc2l0ZXNgIG1vZHVsZSBjb250YWlucyBmYWN0b3J5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIGNvbXBvc2l0ZSBib2RpZXNcbiogd2l0aCBjb21tb25seSB1c2VkIGNvbmZpZ3VyYXRpb25zIChzdWNoIGFzIHN0YWNrcyBhbmQgY2hhaW5zKS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbXBvc2l0ZXNcbiovXG5cbnZhciBDb21wb3NpdGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9zaXRlcztcblxudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQm9kaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgZGVwcmVjYXRlZCA9IENvbW1vbi5kZXByZWNhdGVkO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgYm9kaWVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrIGluIGEgZ3JpZCBhcnJhbmdlbWVudC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGJvZHkncyBib3VuZHMgdG8gcHJldmVudCBvdmVybGFwcy5cbiAgICAgKiBAbWV0aG9kIHN0YWNrXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnN0YWNrID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0YWNrID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnU3RhY2snIH0pLFxuICAgICAgICAgICAgeCA9IHh4LFxuICAgICAgICAgICAgeSA9IHl5LFxuICAgICAgICAgICAgbGFzdEJvZHksXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBjYWxsYmFjayh4LCB5LCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keUhlaWdodCA9IGJvZHkuYm91bmRzLm1heC55IC0gYm9keS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5V2lkdGggPSBib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54OyBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keUhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IGJvZHlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2R5LCB7IHg6IGJvZHlXaWR0aCAqIDAuNSwgeTogYm9keUhlaWdodCAqIDAuNSB9KTtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gYm9keS5ib3VuZHMubWF4LnggKyBjb2x1bW5HYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoc3RhY2ssIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFzdEJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBjb2x1bW5HYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB5ICs9IG1heEhlaWdodCArIHJvd0dhcDtcbiAgICAgICAgICAgIHggPSB4eDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENoYWlucyBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUgdG9nZXRoZXIgdXNpbmcgY29uc3RyYWludHMuXG4gICAgICogQG1ldGhvZCBjaGFpblxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjaGFpbmVkIHRvZ2V0aGVyIHdpdGggY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNoYWluID0gZnVuY3Rpb24oY29tcG9zaXRlLCB4T2Zmc2V0QSwgeU9mZnNldEEsIHhPZmZzZXRCLCB5T2Zmc2V0Qiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcztcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaSAtIDFdLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGJvZHlBSGVpZ2h0ID0gYm9keUEuYm91bmRzLm1heC55IC0gYm9keUEuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlBV2lkdGggPSBib2R5QS5ib3VuZHMubWF4LnggLSBib2R5QS5ib3VuZHMubWluLngsIFxuICAgICAgICAgICAgICAgIGJvZHlCSGVpZ2h0ID0gYm9keUIuYm91bmRzLm1heC55IC0gYm9keUIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlCV2lkdGggPSBib2R5Qi5ib3VuZHMubWF4LnggLSBib2R5Qi5ib3VuZHMubWluLng7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgICAgICBwb2ludEE6IHsgeDogYm9keUFXaWR0aCAqIHhPZmZzZXRBLCB5OiBib2R5QUhlaWdodCAqIHlPZmZzZXRBIH0sXG4gICAgICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgICAgIHBvaW50QjogeyB4OiBib2R5QldpZHRoICogeE9mZnNldEIsIHk6IGJvZHlCSGVpZ2h0ICogeU9mZnNldEIgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgXG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKGNvbnN0cmFpbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIENoYWluJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbm5lY3RzIGJvZGllcyBpbiB0aGUgY29tcG9zaXRlIHdpdGggY29uc3RyYWludHMgaW4gYSBncmlkIHBhdHRlcm4sIHdpdGggb3B0aW9uYWwgY3Jvc3MgYnJhY2VzLlxuICAgICAqIEBtZXRob2QgbWVzaFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjcm9zc0JyYWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIG1lc2hlZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5tZXNoID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb2x1bW5zLCByb3dzLCBjcm9zc0JyYWNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBjb21wb3NpdGUuYm9kaWVzLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGJvZHlDO1xuICAgICAgICBcbiAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChjb2wgPSAxOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzWyhjb2wgLSAxKSArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUEsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBib2RpZXNbY29sICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sIC0gMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcm9zc0JyYWNlICYmIGNvbCA8IGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sICsgMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIE1lc2gnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBib2RpZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2sgaW4gYSBweXJhbWlkIGFycmFuZ2VtZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgYm9keSdzIGJvdW5kcyB0byBwcmV2ZW50IG92ZXJsYXBzLlxuICAgICAqIEBtZXRob2QgcHlyYW1pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5weXJhbWlkID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIENvbXBvc2l0ZXMuc3RhY2soeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgZnVuY3Rpb24oeCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKSB7XG4gICAgICAgICAgICB2YXIgYWN0dWFsUm93cyA9IE1hdGgubWluKHJvd3MsIE1hdGguY2VpbChjb2x1bW5zIC8gMikpLFxuICAgICAgICAgICAgICAgIGxhc3RCb2R5V2lkdGggPSBsYXN0Qm9keSA/IGxhc3RCb2R5LmJvdW5kcy5tYXgueCAtIGxhc3RCb2R5LmJvdW5kcy5taW4ueCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3cgPiBhY3R1YWxSb3dzKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmV2ZXJzZSByb3cgb3JkZXJcbiAgICAgICAgICAgIHJvdyA9IGFjdHVhbFJvd3MgLSByb3c7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHJvdyxcbiAgICAgICAgICAgICAgICBlbmQgPSBjb2x1bW5zIC0gMSAtIHJvdztcblxuICAgICAgICAgICAgaWYgKGNvbHVtbiA8IHN0YXJ0IHx8IGNvbHVtbiA+IGVuZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldHJvYWN0aXZlbHkgZml4IHRoZSBmaXJzdCBib2R5J3MgcG9zaXRpb24sIHNpbmNlIHdpZHRoIHdhcyB1bmtub3duXG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIEJvZHkudHJhbnNsYXRlKGxhc3RCb2R5LCB7IHg6IChjb2x1bW4gKyAoY29sdW1ucyAlIDIgPT09IDEgPyAxIDogLTEpKSAqIGxhc3RCb2R5V2lkdGgsIHk6IDAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4T2Zmc2V0ID0gbGFzdEJvZHkgPyBjb2x1bW4gKiBsYXN0Qm9keVdpZHRoIDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHh4ICsgeE9mZnNldCArIGNvbHVtbiAqIGNvbHVtbkdhcCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFzIG5vdyBtb3ZlZCB0byB0aGUgW25ld3RvbnNDcmFkbGUgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvbmV3dG9uc0NyYWRsZS5qcyksIGZvbGxvdyB0aGF0IGluc3RlYWQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGhlcmUuXG4gICAgICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gbmV3dG9uc0NyYWRsZSBleGFtcGxlXG4gICAgICogQG1ldGhvZCBuZXd0b25zQ3JhZGxlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIG5ld3RvbnNDcmFkbGUgYm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMubmV3dG9uc0NyYWRsZSA9IGZ1bmN0aW9uKHh4LCB5eSwgbnVtYmVyLCBzaXplLCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIG5ld3RvbnNDcmFkbGUgPSBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdOZXd0b25zIENyYWRsZScgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRpb24gPSAxLjksXG4gICAgICAgICAgICAgICAgY2lyY2xlID0gQm9kaWVzLmNpcmNsZSh4eCArIGkgKiAoc2l6ZSAqIHNlcGFyYXRpb24pLCB5eSArIGxlbmd0aCwgc2l6ZSwgXG4gICAgICAgICAgICAgICAgICAgIHsgaW5lcnRpYTogSW5maW5pdHksIHJlc3RpdHV0aW9uOiAxLCBmcmljdGlvbjogMCwgZnJpY3Rpb25BaXI6IDAuMDAwMSwgc2xvcDogMSB9KSxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBwb2ludEE6IHsgeDogeHggKyBpICogKHNpemUgKiBzZXBhcmF0aW9uKSwgeTogeXkgfSwgYm9keUI6IGNpcmNsZSB9KTtcblxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkobmV3dG9uc0NyYWRsZSwgY2lyY2xlKTtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KG5ld3RvbnNDcmFkbGUsIGNvbnN0cmFpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld3RvbnNDcmFkbGU7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoQ29tcG9zaXRlcywgJ25ld3RvbnNDcmFkbGUnLCAnQ29tcG9zaXRlcy5uZXd0b25zQ3JhZGxlIOKepCBtb3ZlZCB0byBuZXd0b25zQ3JhZGxlIGV4YW1wbGUnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtjYXIgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvY2FyLmpzKSwgZm9sbG93IHRoYXQgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBjYXIgZXhhbXBsZVxuICAgICAqIEBtZXRob2QgY2FyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aGVlbFNpemVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjYXIgYm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuY2FyID0gZnVuY3Rpb24oeHgsIHl5LCB3aWR0aCwgaGVpZ2h0LCB3aGVlbFNpemUpIHtcbiAgICAgICAgdmFyIGdyb3VwID0gQm9keS5uZXh0R3JvdXAodHJ1ZSksXG4gICAgICAgICAgICB3aGVlbEJhc2UgPSAyMCxcbiAgICAgICAgICAgIHdoZWVsQU9mZnNldCA9IC13aWR0aCAqIDAuNSArIHdoZWVsQmFzZSxcbiAgICAgICAgICAgIHdoZWVsQk9mZnNldCA9IHdpZHRoICogMC41IC0gd2hlZWxCYXNlLFxuICAgICAgICAgICAgd2hlZWxZT2Zmc2V0ID0gMDtcbiAgICBcbiAgICAgICAgdmFyIGNhciA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ0NhcicgfSksXG4gICAgICAgICAgICBib2R5ID0gQm9kaWVzLnJlY3RhbmdsZSh4eCwgeXksIHdpZHRoLCBoZWlnaHQsIHsgXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbWZlcjoge1xuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IGhlaWdodCAqIDAuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVuc2l0eTogMC4wMDAyXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgdmFyIHdoZWVsQSA9IEJvZGllcy5jaXJjbGUoeHggKyB3aGVlbEFPZmZzZXQsIHl5ICsgd2hlZWxZT2Zmc2V0LCB3aGVlbFNpemUsIHsgXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmljdGlvbjogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIHdoZWVsQiA9IEJvZGllcy5jaXJjbGUoeHggKyB3aGVlbEJPZmZzZXQsIHl5ICsgd2hlZWxZT2Zmc2V0LCB3aGVlbFNpemUsIHsgXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmljdGlvbjogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGF4ZWxBID0gQ29uc3RyYWludC5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keUI6IGJvZHksXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogd2hlZWxBT2Zmc2V0LCB5OiB3aGVlbFlPZmZzZXQgfSxcbiAgICAgICAgICAgIGJvZHlBOiB3aGVlbEEsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGF4ZWxCID0gQ29uc3RyYWludC5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keUI6IGJvZHksXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogd2hlZWxCT2Zmc2V0LCB5OiB3aGVlbFlPZmZzZXQgfSxcbiAgICAgICAgICAgIGJvZHlBOiB3aGVlbEIsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIGJvZHkpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIHdoZWVsQSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgd2hlZWxCKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY2FyLCBheGVsQSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNhciwgYXhlbEIpO1xuXG4gICAgICAgIHJldHVybiBjYXI7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoQ29tcG9zaXRlcywgJ2NhcicsICdDb21wb3NpdGVzLmNhciDinqQgbW92ZWQgdG8gY2FyIGV4YW1wbGUnKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFzIG5vdyBtb3ZlZCB0byB0aGUgW3NvZnRCb2R5IGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL3NvZnRCb2R5LmpzKVxuICAgICAqIGFuZCB0aGUgW2Nsb3RoIGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL2Nsb3RoLmpzKSwgZm9sbG93IHRob3NlIGluc3RlYWQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGhlcmUuXG4gICAgICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gc29mdEJvZHkgYW5kIGNsb3RoIGV4YW1wbGVzXG4gICAgICogQG1ldGhvZCBzb2Z0Qm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3Jvc3NCcmFjZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYXJ0aWNsZVJhZGl1c1xuICAgICAqIEBwYXJhbSB7fSBwYXJ0aWNsZU9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge30gY29uc3RyYWludE9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBzb2Z0Qm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuc29mdEJvZHkgPSBmdW5jdGlvbih4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBjcm9zc0JyYWNlLCBwYXJ0aWNsZVJhZGl1cywgcGFydGljbGVPcHRpb25zLCBjb25zdHJhaW50T3B0aW9ucykge1xuICAgICAgICBwYXJ0aWNsZU9wdGlvbnMgPSBDb21tb24uZXh0ZW5kKHsgaW5lcnRpYTogSW5maW5pdHkgfSwgcGFydGljbGVPcHRpb25zKTtcbiAgICAgICAgY29uc3RyYWludE9wdGlvbnMgPSBDb21tb24uZXh0ZW5kKHsgc3RpZmZuZXNzOiAwLjIsIHJlbmRlcjogeyB0eXBlOiAnbGluZScsIGFuY2hvcnM6IGZhbHNlIH0gfSwgY29uc3RyYWludE9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBzb2Z0Qm9keSA9IENvbXBvc2l0ZXMuc3RhY2soeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5jaXJjbGUoeCwgeSwgcGFydGljbGVSYWRpdXMsIHBhcnRpY2xlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIENvbXBvc2l0ZXMubWVzaChzb2Z0Qm9keSwgY29sdW1ucywgcm93cywgY3Jvc3NCcmFjZSwgY29uc3RyYWludE9wdGlvbnMpO1xuXG4gICAgICAgIHNvZnRCb2R5LmxhYmVsID0gJ1NvZnQgQm9keSc7XG5cbiAgICAgICAgcmV0dXJuIHNvZnRCb2R5O1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKENvbXBvc2l0ZXMsICdzb2Z0Qm9keScsICdDb21wb3NpdGVzLnNvZnRCb2R5IOKepCBtb3ZlZCB0byBzb2Z0Qm9keSBhbmQgY2xvdGggZXhhbXBsZXMnKTtcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhpcyBtb2R1bGUgaGFzIG5vdyBiZWVuIHJlcGxhY2VkIGJ5IGBNYXR0ZXIuRGV0ZWN0b3JgLlxuKlxuKiBBbGwgdXNhZ2Ugc2hvdWxkIGJlIG1pZ3JhdGVkIHRvIGBNYXR0ZXIuRGV0ZWN0b3JgIG9yIGFub3RoZXIgYWx0ZXJuYXRpdmUuXG4qIEZvciBiYWNrLWNvbXBhdGliaWxpdHkgcHVycG9zZXMgdGhpcyBtb2R1bGUgd2lsbCByZW1haW4gZm9yIGEgc2hvcnQgdGVybSBhbmQgdGhlbiBsYXRlciByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuXG4qXG4qIFRoZSBgTWF0dGVyLkdyaWRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBicm9hZHBoYXNlIGdyaWQgc3RydWN0dXJlcy5cbipcbiogQGNsYXNzIEdyaWRcbiogQGRlcHJlY2F0ZWRcbiovXG5cbnZhciBHcmlkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gR3JpZDtcblxudmFyIFBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgZGVwcmVjYXRlZCA9IENvbW1vbi5kZXByZWNhdGVkO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGdyaWQuXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2dyaWR9IEEgbmV3IGdyaWRcbiAgICAgKi9cbiAgICBHcmlkLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgYnVja2V0czoge30sXG4gICAgICAgICAgICBwYWlyczoge30sXG4gICAgICAgICAgICBwYWlyc0xpc3Q6IFtdLFxuICAgICAgICAgICAgYnVja2V0V2lkdGg6IDQ4LFxuICAgICAgICAgICAgYnVja2V0SGVpZ2h0OiA0OFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIGEgc2luZ2xlIGdyaWQgYnVja2V0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJ1Y2tldFdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNDhcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgYSBzaW5nbGUgZ3JpZCBidWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnVja2V0SGVpZ2h0XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNDhcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGdyaWQuXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2dyaWR9IGdyaWRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VVcGRhdGVcbiAgICAgKi9cbiAgICBHcmlkLnVwZGF0ZSA9IGZ1bmN0aW9uKGdyaWQsIGJvZGllcywgZW5naW5lLCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICB2YXIgaSwgY29sLCByb3csXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGJ1Y2tldHMgPSBncmlkLmJ1Y2tldHMsXG4gICAgICAgICAgICBidWNrZXQsXG4gICAgICAgICAgICBidWNrZXRJZCxcbiAgICAgICAgICAgIGdyaWRDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU2xlZXBpbmcgJiYgIWZvcmNlVXBkYXRlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5IGJvdW5kcyBjaGVja1xuICAgICAgICAgICAgaWYgKHdvcmxkLmJvdW5kcyAmJiAoYm9keS5ib3VuZHMubWF4LnggPCB3b3JsZC5ib3VuZHMubWluLnggfHwgYm9keS5ib3VuZHMubWluLnggPiB3b3JsZC5ib3VuZHMubWF4LnhcbiAgICAgICAgICAgICAgICB8fCBib2R5LmJvdW5kcy5tYXgueSA8IHdvcmxkLmJvdW5kcy5taW4ueSB8fCBib2R5LmJvdW5kcy5taW4ueSA+IHdvcmxkLmJvdW5kcy5tYXgueSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBuZXdSZWdpb24gPSBHcmlkLl9nZXRSZWdpb24oZ3JpZCwgYm9keSk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBib2R5IGhhcyBjaGFuZ2VkIGdyaWQgcmVnaW9uXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVnaW9uIHx8IG5ld1JlZ2lvbi5pZCAhPT0gYm9keS5yZWdpb24uaWQgfHwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICAgICAgICAgIGlmICghYm9keS5yZWdpb24gfHwgZm9yY2VVcGRhdGUpXG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVnaW9uID0gbmV3UmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgdmFyIHVuaW9uID0gR3JpZC5fcmVnaW9uVW5pb24obmV3UmVnaW9uLCBib2R5LnJlZ2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZ3JpZCBidWNrZXRzIGFmZmVjdGVkIGJ5IHJlZ2lvbiBjaGFuZ2VcbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgdGhlIHVuaW9uIG9mIGJvdGggcmVnaW9uc1xuICAgICAgICAgICAgICAgIGZvciAoY29sID0gdW5pb24uc3RhcnRDb2w7IGNvbCA8PSB1bmlvbi5lbmRDb2w7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gdW5pb24uc3RhcnRSb3c7IHJvdyA8PSB1bmlvbi5lbmRSb3c7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRJZCA9IEdyaWQuX2dldEJ1Y2tldElkKGNvbCwgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldHNbYnVja2V0SWRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNJbnNpZGVOZXdSZWdpb24gPSAoY29sID49IG5ld1JlZ2lvbi5zdGFydENvbCAmJiBjb2wgPD0gbmV3UmVnaW9uLmVuZENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgcm93ID49IG5ld1JlZ2lvbi5zdGFydFJvdyAmJiByb3cgPD0gbmV3UmVnaW9uLmVuZFJvdyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0luc2lkZU9sZFJlZ2lvbiA9IChjb2wgPj0gYm9keS5yZWdpb24uc3RhcnRDb2wgJiYgY29sIDw9IGJvZHkucmVnaW9uLmVuZENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgcm93ID49IGJvZHkucmVnaW9uLnN0YXJ0Um93ICYmIHJvdyA8PSBib2R5LnJlZ2lvbi5lbmRSb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZnJvbSBvbGQgcmVnaW9uIGJ1Y2tldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnNpZGVOZXdSZWdpb24gJiYgaXNJbnNpZGVPbGRSZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnNpZGVPbGRSZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1Y2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuX2J1Y2tldFJlbW92ZUJvZHkoZ3JpZCwgYnVja2V0LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBuZXcgcmVnaW9uIGJ1Y2tldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5LnJlZ2lvbiA9PT0gbmV3UmVnaW9uIHx8IChpc0luc2lkZU5ld1JlZ2lvbiAmJiAhaXNJbnNpZGVPbGRSZWdpb24pIHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldCA9IEdyaWQuX2NyZWF0ZUJ1Y2tldChidWNrZXRzLCBidWNrZXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5fYnVja2V0QWRkQm9keShncmlkLCBidWNrZXQsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBuZXcgcmVnaW9uXG4gICAgICAgICAgICAgICAgYm9keS5yZWdpb24gPSBuZXdSZWdpb247XG5cbiAgICAgICAgICAgICAgICAvLyBmbGFnIGNoYW5nZXMgc28gd2UgY2FuIHVwZGF0ZSBwYWlyc1xuICAgICAgICAgICAgICAgIGdyaWRDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBwYWlycyBsaXN0IG9ubHkgaWYgcGFpcnMgY2hhbmdlZCAoaS5lLiBhIGJvZHkgY2hhbmdlZCByZWdpb24pXG4gICAgICAgIGlmIChncmlkQ2hhbmdlZClcbiAgICAgICAgICAgIGdyaWQucGFpcnNMaXN0ID0gR3JpZC5fY3JlYXRlQWN0aXZlUGFpcnNMaXN0KGdyaWQpO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKEdyaWQsICd1cGRhdGUnLCAnR3JpZC51cGRhdGUg4p6kIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvcicpO1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2dyaWR9IGdyaWRcbiAgICAgKi9cbiAgICBHcmlkLmNsZWFyID0gZnVuY3Rpb24oZ3JpZCkge1xuICAgICAgICBncmlkLmJ1Y2tldHMgPSB7fTtcbiAgICAgICAgZ3JpZC5wYWlycyA9IHt9O1xuICAgICAgICBncmlkLnBhaXJzTGlzdCA9IFtdO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKEdyaWQsICdjbGVhcicsICdHcmlkLmNsZWFyIOKepCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3InKTtcblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSB1bmlvbiBvZiB0d28gcmVnaW9ucy5cbiAgICAgKiBAbWV0aG9kIF9yZWdpb25VbmlvblxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHJlZ2lvbkFcbiAgICAgKiBAcGFyYW0ge30gcmVnaW9uQlxuICAgICAqIEByZXR1cm4ge30gcmVnaW9uXG4gICAgICovXG4gICAgR3JpZC5fcmVnaW9uVW5pb24gPSBmdW5jdGlvbihyZWdpb25BLCByZWdpb25CKSB7XG4gICAgICAgIHZhciBzdGFydENvbCA9IE1hdGgubWluKHJlZ2lvbkEuc3RhcnRDb2wsIHJlZ2lvbkIuc3RhcnRDb2wpLFxuICAgICAgICAgICAgZW5kQ29sID0gTWF0aC5tYXgocmVnaW9uQS5lbmRDb2wsIHJlZ2lvbkIuZW5kQ29sKSxcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gTWF0aC5taW4ocmVnaW9uQS5zdGFydFJvdywgcmVnaW9uQi5zdGFydFJvdyksXG4gICAgICAgICAgICBlbmRSb3cgPSBNYXRoLm1heChyZWdpb25BLmVuZFJvdywgcmVnaW9uQi5lbmRSb3cpO1xuXG4gICAgICAgIHJldHVybiBHcmlkLl9jcmVhdGVSZWdpb24oc3RhcnRDb2wsIGVuZENvbCwgc3RhcnRSb3csIGVuZFJvdyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlZ2lvbiBhIGdpdmVuIGJvZHkgZmFsbHMgaW4gZm9yIGEgZ2l2ZW4gZ3JpZC5cbiAgICAgKiBAbWV0aG9kIF9nZXRSZWdpb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHBhcmFtIHt9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX2dldFJlZ2lvbiA9IGZ1bmN0aW9uKGdyaWQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGJvZHkuYm91bmRzLFxuICAgICAgICAgICAgc3RhcnRDb2wgPSBNYXRoLmZsb29yKGJvdW5kcy5taW4ueCAvIGdyaWQuYnVja2V0V2lkdGgpLFxuICAgICAgICAgICAgZW5kQ29sID0gTWF0aC5mbG9vcihib3VuZHMubWF4LnggLyBncmlkLmJ1Y2tldFdpZHRoKSxcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gTWF0aC5mbG9vcihib3VuZHMubWluLnkgLyBncmlkLmJ1Y2tldEhlaWdodCksXG4gICAgICAgICAgICBlbmRSb3cgPSBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAvIGdyaWQuYnVja2V0SGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gR3JpZC5fY3JlYXRlUmVnaW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmVnaW9uLlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZVJlZ2lvblxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHN0YXJ0Q29sXG4gICAgICogQHBhcmFtIHt9IGVuZENvbFxuICAgICAqIEBwYXJhbSB7fSBzdGFydFJvd1xuICAgICAqIEBwYXJhbSB7fSBlbmRSb3dcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZVJlZ2lvbiA9IGZ1bmN0aW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBpZDogc3RhcnRDb2wgKyAnLCcgKyBlbmRDb2wgKyAnLCcgKyBzdGFydFJvdyArICcsJyArIGVuZFJvdyxcbiAgICAgICAgICAgIHN0YXJ0Q29sOiBzdGFydENvbCwgXG4gICAgICAgICAgICBlbmRDb2w6IGVuZENvbCwgXG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csIFxuICAgICAgICAgICAgZW5kUm93OiBlbmRSb3cgXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGJ1Y2tldCBpZCBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gICAgICogQG1ldGhvZCBfZ2V0QnVja2V0SWRcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBjb2x1bW5cbiAgICAgKiBAcGFyYW0ge30gcm93XG4gICAgICogQHJldHVybiB7c3RyaW5nfSBidWNrZXQgaWRcbiAgICAgKi9cbiAgICBHcmlkLl9nZXRCdWNrZXRJZCA9IGZ1bmN0aW9uKGNvbHVtbiwgcm93KSB7XG4gICAgICAgIHJldHVybiAnQycgKyBjb2x1bW4gKyAnUicgKyByb3c7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBidWNrZXQuXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQnVja2V0XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0c1xuICAgICAqIEBwYXJhbSB7fSBidWNrZXRJZFxuICAgICAqIEByZXR1cm4ge30gYnVja2V0XG4gICAgICovXG4gICAgR3JpZC5fY3JlYXRlQnVja2V0ID0gZnVuY3Rpb24oYnVja2V0cywgYnVja2V0SWQpIHtcbiAgICAgICAgdmFyIGJ1Y2tldCA9IGJ1Y2tldHNbYnVja2V0SWRdID0gW107XG4gICAgICAgIHJldHVybiBidWNrZXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBib2R5IHRvIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2J1Y2tldEFkZEJvZHlcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICovXG4gICAgR3JpZC5fYnVja2V0QWRkQm9keSA9IGZ1bmN0aW9uKGdyaWQsIGJ1Y2tldCwgYm9keSkge1xuICAgICAgICB2YXIgZ3JpZFBhaXJzID0gZ3JpZC5wYWlycyxcbiAgICAgICAgICAgIHBhaXJJZCA9IFBhaXIuaWQsXG4gICAgICAgICAgICBidWNrZXRMZW5ndGggPSBidWNrZXQubGVuZ3RoLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyBhZGQgbmV3IHBhaXJzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBidWNrZXRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlCID0gYnVja2V0W2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pZCA9PT0gYm9keUIuaWQgfHwgKGJvZHkuaXNTdGF0aWMgJiYgYm9keUIuaXNTdGF0aWMpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgYnVja2V0cyB0aGUgcGFpciBleGlzdHMgaW5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgR3JpZC51cGRhdGUgdG8gd29ya1xuICAgICAgICAgICAgdmFyIGlkID0gcGFpcklkKGJvZHksIGJvZHlCKSxcbiAgICAgICAgICAgICAgICBwYWlyID0gZ3JpZFBhaXJzW2lkXTtcblxuICAgICAgICAgICAgaWYgKHBhaXIpIHtcbiAgICAgICAgICAgICAgICBwYWlyWzJdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyaWRQYWlyc1tpZF0gPSBbYm9keSwgYm9keUIsIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRvIGJvZGllcyAoYWZ0ZXIgcGFpcnMsIG90aGVyd2lzZSBwYWlycyB3aXRoIHNlbGYpXG4gICAgICAgIGJ1Y2tldC5wdXNoKGJvZHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2J1Y2tldFJlbW92ZUJvZHlcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICovXG4gICAgR3JpZC5fYnVja2V0UmVtb3ZlQm9keSA9IGZ1bmN0aW9uKGdyaWQsIGJ1Y2tldCwgYm9keSkge1xuICAgICAgICB2YXIgZ3JpZFBhaXJzID0gZ3JpZC5wYWlycyxcbiAgICAgICAgICAgIHBhaXJJZCA9IFBhaXIuaWQsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGJ1Y2tldFxuICAgICAgICBidWNrZXQuc3BsaWNlKENvbW1vbi5pbmRleE9mKGJ1Y2tldCwgYm9keSksIDEpO1xuXG4gICAgICAgIHZhciBidWNrZXRMZW5ndGggPSBidWNrZXQubGVuZ3RoO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwYWlyIGNvdW50c1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVja2V0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG51bWJlciBvZiBidWNrZXRzIHRoZSBwYWlyIGV4aXN0cyBpblxuICAgICAgICAgICAgLy8gaW1wb3J0YW50IGZvciBfY3JlYXRlQWN0aXZlUGFpcnNMaXN0IHRvIHdvcmtcbiAgICAgICAgICAgIHZhciBwYWlyID0gZ3JpZFBhaXJzW3BhaXJJZChib2R5LCBidWNrZXRbaV0pXTtcblxuICAgICAgICAgICAgaWYgKHBhaXIpXG4gICAgICAgICAgICAgICAgcGFpclsyXSAtPSAxO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGxpc3Qgb2YgdGhlIGFjdGl2ZSBwYWlycyBpbiB0aGUgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVBY3RpdmVQYWlyc0xpc3RcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHJldHVybiBbXSBwYWlyc1xuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdCA9IGZ1bmN0aW9uKGdyaWQpIHtcbiAgICAgICAgdmFyIHBhaXIsXG4gICAgICAgICAgICBncmlkUGFpcnMgPSBncmlkLnBhaXJzLFxuICAgICAgICAgICAgcGFpcktleXMgPSBDb21tb24ua2V5cyhncmlkUGFpcnMpLFxuICAgICAgICAgICAgcGFpcktleXNMZW5ndGggPSBwYWlyS2V5cy5sZW5ndGgsXG4gICAgICAgICAgICBwYWlycyA9IFtdLFxuICAgICAgICAgICAgaztcblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgZ3JpZC5wYWlyc1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFpcktleXNMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgcGFpciA9IGdyaWRQYWlyc1twYWlyS2V5c1trXV07XG5cbiAgICAgICAgICAgIC8vIGlmIHBhaXIgZXhpc3RzIGluIGF0IGxlYXN0IG9uZSBidWNrZXRcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgcGFpciB0aGF0IG5lZWRzIGZ1cnRoZXIgY29sbGlzaW9uIHRlc3Rpbmcgc28gcHVzaCBpdFxuICAgICAgICAgICAgaWYgKHBhaXJbMl0gPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaChwYWlyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGdyaWRQYWlyc1twYWlyS2V5c1trXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFpcnM7XG4gICAgfTtcbiAgICBcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuTW91c2VDb25zdHJhaW50YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgbW91c2UgY29uc3RyYWludHMuXG4qIE1vdXNlIGNvbnN0cmFpbnRzIGFyZSB1c2VkIGZvciBhbGxvd2luZyB1c2VyIGludGVyYWN0aW9uLCBwcm92aWRpbmcgdGhlIGFiaWxpdHkgdG8gbW92ZSBib2RpZXMgdmlhIHRoZSBtb3VzZSBvciB0b3VjaC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIE1vdXNlQ29uc3RyYWludFxuKi9cblxudmFyIE1vdXNlQ29uc3RyYWludCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlQ29uc3RyYWludDtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBTbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIERldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG1vdXNlIGNvbnN0cmFpbnQuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7TW91c2VDb25zdHJhaW50fSBBIG5ldyBNb3VzZUNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlID0gZnVuY3Rpb24oZW5naW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBtb3VzZSA9IChlbmdpbmUgPyBlbmdpbmUubW91c2UgOiBudWxsKSB8fCAob3B0aW9ucyA/IG9wdGlvbnMubW91c2UgOiBudWxsKTtcblxuICAgICAgICBpZiAoIW1vdXNlKSB7XG4gICAgICAgICAgICBpZiAoZW5naW5lICYmIGVuZ2luZS5yZW5kZXIgJiYgZW5naW5lLnJlbmRlci5jYW52YXMpIHtcbiAgICAgICAgICAgICAgICBtb3VzZSA9IE1vdXNlLmNyZWF0ZShlbmdpbmUucmVuZGVyLmNhbnZhcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUob3B0aW9ucy5lbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignTW91c2VDb25zdHJhaW50LmNyZWF0ZTogb3B0aW9ucy5tb3VzZSB3YXMgdW5kZWZpbmVkLCBvcHRpb25zLmVsZW1lbnQgd2FzIHVuZGVmaW5lZCwgbWF5IG5vdCBmdW5jdGlvbiBhcyBleHBlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBDb25zdHJhaW50LmNyZWF0ZSh7IFxuICAgICAgICAgICAgbGFiZWw6ICdNb3VzZSBDb25zdHJhaW50JyxcbiAgICAgICAgICAgIHBvaW50QTogbW91c2UucG9zaXRpb24sXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgbGVuZ3RoOiAwLjAxLCBcbiAgICAgICAgICAgIHN0aWZmbmVzczogMC4xLFxuICAgICAgICAgICAgYW5ndWxhclN0aWZmbmVzczogMSxcbiAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgIHN0cm9rZVN0eWxlOiAnIzkwRUU5MCcsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3VzZUNvbnN0cmFpbnQnLFxuICAgICAgICAgICAgbW91c2U6IG1vdXNlLFxuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgICBjb25zdHJhaW50OiBjb25zdHJhaW50LFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IDB4MDAwMSxcbiAgICAgICAgICAgICAgICBtYXNrOiAweEZGRkZGRkZGLFxuICAgICAgICAgICAgICAgIGdyb3VwOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG1vdXNlQ29uc3RyYWludCA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIEV2ZW50cy5vbihlbmdpbmUsICdiZWZvcmVVcGRhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZS53b3JsZCk7XG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQudXBkYXRlKG1vdXNlQ29uc3RyYWludCwgYWxsQm9kaWVzKTtcbiAgICAgICAgICAgIE1vdXNlQ29uc3RyYWludC5fdHJpZ2dlckV2ZW50cyhtb3VzZUNvbnN0cmFpbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW91c2VDb25zdHJhaW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBnaXZlbiBtb3VzZSBjb25zdHJhaW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge01vdXNlQ29uc3RyYWludH0gbW91c2VDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIE1vdXNlQ29uc3RyYWludC51cGRhdGUgPSBmdW5jdGlvbihtb3VzZUNvbnN0cmFpbnQsIGJvZGllcykge1xuICAgICAgICB2YXIgbW91c2UgPSBtb3VzZUNvbnN0cmFpbnQubW91c2UsXG4gICAgICAgICAgICBjb25zdHJhaW50ID0gbW91c2VDb25zdHJhaW50LmNvbnN0cmFpbnQsXG4gICAgICAgICAgICBib2R5ID0gbW91c2VDb25zdHJhaW50LmJvZHk7XG5cbiAgICAgICAgaWYgKG1vdXNlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LmJvZHlCKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhib2R5LmJvdW5kcywgbW91c2UucG9zaXRpb24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIERldGVjdG9yLmNhbkNvbGxpZGUoYm9keS5jb2xsaXNpb25GaWx0ZXIsIG1vdXNlQ29uc3RyYWludC5jb2xsaXNpb25GaWx0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhwYXJ0LnZlcnRpY2VzLCBtb3VzZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSBtb3VzZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5ib2R5QiA9IG1vdXNlQ29uc3RyYWludC5ib2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEIgPSB7IHg6IG1vdXNlLnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uLngsIHk6IG1vdXNlLnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uLnkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5hbmdsZUIgPSBib2R5LmFuZ2xlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ3N0YXJ0ZHJhZycsIHsgbW91c2U6IG1vdXNlLCBib2R5OiBib2R5IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGNvbnN0cmFpbnQuYm9keUIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QSA9IG1vdXNlLnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RyYWludC5ib2R5QiA9IG1vdXNlQ29uc3RyYWludC5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGJvZHkpXG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnZW5kZHJhZycsIHsgbW91c2U6IG1vdXNlLCBib2R5OiBib2R5IH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIG1vdXNlIGNvbnN0cmFpbnQgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgX3RyaWdnZXJFdmVudHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlQ29uc3RyYWludFxuICAgICAqL1xuICAgIE1vdXNlQ29uc3RyYWludC5fdHJpZ2dlckV2ZW50cyA9IGZ1bmN0aW9uKG1vdXNlQ29uc3RyYWludCkge1xuICAgICAgICB2YXIgbW91c2UgPSBtb3VzZUNvbnN0cmFpbnQubW91c2UsXG4gICAgICAgICAgICBtb3VzZUV2ZW50cyA9IG1vdXNlLnNvdXJjZUV2ZW50cztcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2Vtb3ZlKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnbW91c2Vtb3ZlJywgeyBtb3VzZTogbW91c2UgfSk7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNlZG93bilcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNlZG93bicsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZXVwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnbW91c2V1cCcsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBtb3VzZSBzdGF0ZSByZWFkeSBmb3IgdGhlIG5leHQgc3RlcFxuICAgICAgICBNb3VzZS5jbGVhclNvdXJjZUV2ZW50cyhtb3VzZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIG1vdXNlIGhhcyBtb3ZlZCAob3IgYSB0b3VjaCBtb3ZlcykgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2Vtb3ZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBpcyBkb3duIChvciBhIHRvdWNoIGhhcyBzdGFydGVkKSBkdXJpbmcgdGhlIGxhc3Qgc3RlcFxuICAgICpcbiAgICAqIEBldmVudCBtb3VzZWRvd25cbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIG1vdXNlIGlzIHVwIChvciBhIHRvdWNoIGhhcyBlbmRlZCkgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2V1cFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgYSBib2R5XG4gICAgKlxuICAgICogQGV2ZW50IHN0YXJ0ZHJhZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge2JvZHl9IGV2ZW50LmJvZHkgVGhlIGJvZHkgYmVpbmcgZHJhZ2dlZFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgZW5kcyBkcmFnZ2luZyBhIGJvZHlcbiAgICAqXG4gICAgKiBAZXZlbnQgZW5kZHJhZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge2JvZHl9IGV2ZW50LmJvZHkgVGhlIGJvZHkgdGhhdCBoYXMgc3RvcHBlZCBiZWluZyBkcmFnZ2VkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29uc3RyYWludFwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYE1vdXNlYCBpbnN0YW5jZSBpbiB1c2UuIElmIG5vdCBzdXBwbGllZCBpbiBgTW91c2VDb25zdHJhaW50LmNyZWF0ZWAsIG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbW91c2VcbiAgICAgKiBAdHlwZSBtb3VzZVxuICAgICAqIEBkZWZhdWx0IG1vdXNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYEJvZHlgIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIG1vdmVkIGJ5IHRoZSB1c2VyLCBvciBgbnVsbGAgaWYgbm8gYm9keS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5XG4gICAgICogQHR5cGUgYm9keVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQ29uc3RyYWludGAgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byBtb3ZlIHRoZSBib2R5IGR1cmluZyBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50XG4gICAgICogQHR5cGUgY29uc3RyYWludFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBmaWx0ZXIgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgY29sbGlzaW9uIGZpbHRlciBhbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHdoaWNoIHR5cGVzIG9mIGJvZHkgdGhpcyBtb3VzZSBjb25zdHJhaW50IGNhbiBpbnRlcmFjdCB3aXRoLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlF1ZXJ5YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgcGVyZm9ybWluZyBjb2xsaXNpb24gcXVlcmllcy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFF1ZXJ5XG4qL1xuXG52YXIgUXVlcnkgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29sbGlzaW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEJvZGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgY29sbGlzaW9ucyBiZXR3ZWVuIGBib2R5YCBhbmQgYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBjb2xsaWRlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb25bXX0gQ29sbGlzaW9uc1xuICAgICAqL1xuICAgIFF1ZXJ5LmNvbGxpZGVzID0gZnVuY3Rpb24oYm9keSwgYm9kaWVzKSB7XG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gW10sXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgYm91bmRzID0gYm9keS5ib3VuZHMsXG4gICAgICAgICAgICBjb2xsaWRlcyA9IENvbGxpc2lvbi5jb2xsaWRlcyxcbiAgICAgICAgICAgIG92ZXJsYXBzID0gQm91bmRzLm92ZXJsYXBzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBwYXJ0c0FMZW5ndGggPSBib2R5QS5wYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcGFydHNBU3RhcnQgPSBwYXJ0c0FMZW5ndGggPT09IDEgPyAwIDogMTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG92ZXJsYXBzKGJvZHlBLmJvdW5kcywgYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBwYXJ0c0FTdGFydDsgaiA8IHBhcnRzQUxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keUEucGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXBzKHBhcnQuYm91bmRzLCBib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gY29sbGlkZXMocGFydCwgYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goY29sbGlzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb25zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXN0cyBhIHJheSBzZWdtZW50IGFnYWluc3QgYSBzZXQgb2YgYm9kaWVzIGFuZCByZXR1cm5zIGFsbCBjb2xsaXNpb25zLCByYXkgd2lkdGggaXMgb3B0aW9uYWwuIEludGVyc2VjdGlvbiBwb2ludHMgYXJlIG5vdCBwcm92aWRlZC5cbiAgICAgKiBAbWV0aG9kIHJheVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gc3RhcnRQb2ludFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBlbmRQb2ludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmF5V2lkdGhdXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9uW119IENvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBRdWVyeS5yYXkgPSBmdW5jdGlvbihib2RpZXMsIHN0YXJ0UG9pbnQsIGVuZFBvaW50LCByYXlXaWR0aCkge1xuICAgICAgICByYXlXaWR0aCA9IHJheVdpZHRoIHx8IDFlLTEwMDtcblxuICAgICAgICB2YXIgcmF5QW5nbGUgPSBWZWN0b3IuYW5nbGUoc3RhcnRQb2ludCwgZW5kUG9pbnQpLFxuICAgICAgICAgICAgcmF5TGVuZ3RoID0gVmVjdG9yLm1hZ25pdHVkZShWZWN0b3Iuc3ViKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSksXG4gICAgICAgICAgICByYXlYID0gKGVuZFBvaW50LnggKyBzdGFydFBvaW50LngpICogMC41LFxuICAgICAgICAgICAgcmF5WSA9IChlbmRQb2ludC55ICsgc3RhcnRQb2ludC55KSAqIDAuNSxcbiAgICAgICAgICAgIHJheSA9IEJvZGllcy5yZWN0YW5nbGUocmF5WCwgcmF5WSwgcmF5TGVuZ3RoLCByYXlXaWR0aCwgeyBhbmdsZTogcmF5QW5nbGUgfSksXG4gICAgICAgICAgICBjb2xsaXNpb25zID0gUXVlcnkuY29sbGlkZXMocmF5LCBib2RpZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGlzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpc2lvbnNbaV07XG4gICAgICAgICAgICBjb2xsaXNpb24uYm9keSA9IGNvbGxpc2lvbi5ib2R5QiA9IGNvbGxpc2lvbi5ib2R5QTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb25zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgd2hvc2UgYm91bmRzIGFyZSBpbnNpZGUgKG9yIG91dHNpZGUgaWYgc2V0KSB0aGUgZ2l2ZW4gc2V0IG9mIGJvdW5kcywgZnJvbSB0aGUgZ2l2ZW4gc2V0IG9mIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIHJlZ2lvblxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHtib29sfSBbb3V0c2lkZT1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtib2R5W119IFRoZSBib2RpZXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5XG4gICAgICovXG4gICAgUXVlcnkucmVnaW9uID0gZnVuY3Rpb24oYm9kaWVzLCBib3VuZHMsIG91dHNpZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBvdmVybGFwcyA9IEJvdW5kcy5vdmVybGFwcyhib2R5LmJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmICgob3ZlcmxhcHMgJiYgIW91dHNpZGUpIHx8ICghb3ZlcmxhcHMgJiYgb3V0c2lkZSkpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgd2hvc2UgdmVydGljZXMgY29udGFpbiB0aGUgZ2l2ZW4gcG9pbnQsIGZyb20gdGhlIGdpdmVuIHNldCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib2R5W119IFRoZSBib2RpZXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5XG4gICAgICovXG4gICAgUXVlcnkucG9pbnQgPSBmdW5jdGlvbihib2RpZXMsIHBvaW50KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMoYm9keS5ib3VuZHMsIHBvaW50KSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSA/IDAgOiAxOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhwYXJ0LmJvdW5kcywgcG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBWZXJ0aWNlcy5jb250YWlucyhwYXJ0LnZlcnRpY2VzLCBwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUnVubmVyYCBtb2R1bGUgaXMgYW4gb3B0aW9uYWwgdXRpbGl0eSB3aGljaCBwcm92aWRlcyBhIGdhbWUgbG9vcCwgXG4qIHRoYXQgaGFuZGxlcyBjb250aW51b3VzbHkgdXBkYXRpbmcgYSBgTWF0dGVyLkVuZ2luZWAgZm9yIHlvdSB3aXRoaW4gYSBicm93c2VyLlxuKiBJdCBpcyBpbnRlbmRlZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlYnVnZ2luZyBwdXJwb3NlcywgYnV0IG1heSBhbHNvIGJlIHN1aXRhYmxlIGZvciBzaW1wbGUgZ2FtZXMuXG4qIElmIHlvdSBhcmUgdXNpbmcgeW91ciBvd24gZ2FtZSBsb29wIGluc3RlYWQsIHRoZW4geW91IGRvIG5vdCBuZWVkIHRoZSBgTWF0dGVyLlJ1bm5lcmAgbW9kdWxlLlxuKiBJbnN0ZWFkIGp1c3QgY2FsbCBgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhKWAgaW4geW91ciBvd24gbG9vcC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFJ1bm5lclxuKi9cblxudmFyIFJ1bm5lciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bm5lcjtcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgRW5naW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgdmFyIF9mcmFtZVRpbWVvdXQ7XG5cbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXsgXG4gICAgICAgICAgICBfZnJhbWVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soQ29tbW9uLm5vdygpKTsgXG4gICAgICAgICAgICB9LCAxMDAwIC8gNjApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9mcmFtZVRpbWVvdXQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgUnVubmVyLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICovXG4gICAgUnVubmVyLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZnBzOiA2MCxcbiAgICAgICAgICAgIGNvcnJlY3Rpb246IDEsXG4gICAgICAgICAgICBkZWx0YVNhbXBsZVNpemU6IDYwLFxuICAgICAgICAgICAgY291bnRlclRpbWVzdGFtcDogMCxcbiAgICAgICAgICAgIGZyYW1lQ291bnRlcjogMCxcbiAgICAgICAgICAgIGRlbHRhSGlzdG9yeTogW10sXG4gICAgICAgICAgICB0aW1lUHJldjogbnVsbCxcbiAgICAgICAgICAgIHRpbWVTY2FsZVByZXY6IDEsXG4gICAgICAgICAgICBmcmFtZVJlcXVlc3RJZDogbnVsbCxcbiAgICAgICAgICAgIGlzRml4ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBydW5uZXIgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBydW5uZXIuZGVsdGEgPSBydW5uZXIuZGVsdGEgfHwgMTAwMCAvIHJ1bm5lci5mcHM7XG4gICAgICAgIHJ1bm5lci5kZWx0YU1pbiA9IHJ1bm5lci5kZWx0YU1pbiB8fCAxMDAwIC8gcnVubmVyLmZwcztcbiAgICAgICAgcnVubmVyLmRlbHRhTWF4ID0gcnVubmVyLmRlbHRhTWF4IHx8IDEwMDAgLyAocnVubmVyLmZwcyAqIDAuNSk7XG4gICAgICAgIHJ1bm5lci5mcHMgPSAxMDAwIC8gcnVubmVyLmRlbHRhO1xuXG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnRpbnVvdXNseSB0aWNrcyBhIGBNYXR0ZXIuRW5naW5lYCBieSBjYWxsaW5nIGBSdW5uZXIudGlja2Agb24gdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGV2ZW50LlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuICAgIFJ1bm5lci5ydW4gPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSkge1xuICAgICAgICAvLyBjcmVhdGUgcnVubmVyIGlmIGVuZ2luZSBpcyBmaXJzdCBhcmd1bWVudFxuICAgICAgICBpZiAodHlwZW9mIHJ1bm5lci5wb3NpdGlvbkl0ZXJhdGlvbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBlbmdpbmUgPSBydW5uZXI7XG4gICAgICAgICAgICBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAoZnVuY3Rpb24gcmVuZGVyKHRpbWUpe1xuICAgICAgICAgICAgcnVubmVyLmZyYW1lUmVxdWVzdElkID0gX3JlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAmJiBydW5uZXIuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIFJ1bm5lci50aWNrKHJ1bm5lciwgZW5naW5lLCB0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4gcnVubmVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGdhbWUgbG9vcCB1dGlsaXR5IHRoYXQgdXBkYXRlcyB0aGUgZW5naW5lIGFuZCByZW5kZXJlciBieSBvbmUgc3RlcCAoYSAndGljaycpLlxuICAgICAqIEZlYXR1cmVzIGRlbHRhIHNtb290aGluZywgdGltZSBjb3JyZWN0aW9uIGFuZCBmaXhlZCBvciBkeW5hbWljIHRpbWluZy5cbiAgICAgKiBDb25zaWRlciBqdXN0IGBFbmdpbmUudXBkYXRlKGVuZ2luZSwgZGVsdGEpYCBpZiB5b3UncmUgdXNpbmcgeW91ciBvd24gbG9vcC5cbiAgICAgKiBAbWV0aG9kIHRpY2tcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgUnVubmVyLnRpY2sgPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSwgdGltZSkge1xuICAgICAgICB2YXIgdGltaW5nID0gZW5naW5lLnRpbWluZyxcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSAxLFxuICAgICAgICAgICAgZGVsdGE7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFuIGV2ZW50IG9iamVjdFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdiZWZvcmVUaWNrJywgZXZlbnQpO1xuXG4gICAgICAgIGlmIChydW5uZXIuaXNGaXhlZCkge1xuICAgICAgICAgICAgLy8gZml4ZWQgdGltZXN0ZXBcbiAgICAgICAgICAgIGRlbHRhID0gcnVubmVyLmRlbHRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHluYW1pYyB0aW1lc3RlcCBiYXNlZCBvbiB3YWxsIGNsb2NrIGJldHdlZW4gY2FsbHNcbiAgICAgICAgICAgIGRlbHRhID0gKHRpbWUgLSBydW5uZXIudGltZVByZXYpIHx8IHJ1bm5lci5kZWx0YTtcbiAgICAgICAgICAgIHJ1bm5lci50aW1lUHJldiA9IHRpbWU7XG5cbiAgICAgICAgICAgIC8vIG9wdGltaXN0aWNhbGx5IGZpbHRlciBkZWx0YSBvdmVyIGEgZmV3IGZyYW1lcywgdG8gaW1wcm92ZSBzdGFiaWxpdHlcbiAgICAgICAgICAgIHJ1bm5lci5kZWx0YUhpc3RvcnkucHVzaChkZWx0YSk7XG4gICAgICAgICAgICBydW5uZXIuZGVsdGFIaXN0b3J5ID0gcnVubmVyLmRlbHRhSGlzdG9yeS5zbGljZSgtcnVubmVyLmRlbHRhU2FtcGxlU2l6ZSk7XG4gICAgICAgICAgICBkZWx0YSA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJ1bm5lci5kZWx0YUhpc3RvcnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBsaW1pdCBkZWx0YVxuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YSA8IHJ1bm5lci5kZWx0YU1pbiA/IHJ1bm5lci5kZWx0YU1pbiA6IGRlbHRhO1xuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YSA+IHJ1bm5lci5kZWx0YU1heCA/IHJ1bm5lci5kZWx0YU1heCA6IGRlbHRhO1xuXG4gICAgICAgICAgICAvLyBjb3JyZWN0aW9uIGZvciBkZWx0YVxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IGRlbHRhIC8gcnVubmVyLmRlbHRhO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZW5naW5lIHRpbWluZyBvYmplY3RcbiAgICAgICAgICAgIHJ1bm5lci5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGltZSBjb3JyZWN0aW9uIGZvciB0aW1lIHNjYWxpbmdcbiAgICAgICAgaWYgKHJ1bm5lci50aW1lU2NhbGVQcmV2ICE9PSAwKVxuICAgICAgICAgICAgY29ycmVjdGlvbiAqPSB0aW1pbmcudGltZVNjYWxlIC8gcnVubmVyLnRpbWVTY2FsZVByZXY7XG5cbiAgICAgICAgaWYgKHRpbWluZy50aW1lU2NhbGUgPT09IDApXG4gICAgICAgICAgICBjb3JyZWN0aW9uID0gMDtcblxuICAgICAgICBydW5uZXIudGltZVNjYWxlUHJldiA9IHRpbWluZy50aW1lU2NhbGU7XG4gICAgICAgIHJ1bm5lci5jb3JyZWN0aW9uID0gY29ycmVjdGlvbjtcblxuICAgICAgICAvLyBmcHMgY291bnRlclxuICAgICAgICBydW5uZXIuZnJhbWVDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aW1lIC0gcnVubmVyLmNvdW50ZXJUaW1lc3RhbXAgPj0gMTAwMCkge1xuICAgICAgICAgICAgcnVubmVyLmZwcyA9IHJ1bm5lci5mcmFtZUNvdW50ZXIgKiAoKHRpbWUgLSBydW5uZXIuY291bnRlclRpbWVzdGFtcCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wID0gdGltZTtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAndGljaycsIGV2ZW50KTtcblxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVXBkYXRlJywgZXZlbnQpO1xuICAgICAgICBFbmdpbmUudXBkYXRlKGVuZ2luZSwgZGVsdGEsIGNvcnJlY3Rpb24pO1xuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdhZnRlclVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdhZnRlclRpY2snLCBldmVudCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuZHMgZXhlY3V0aW9uIG9mIGBSdW5uZXIucnVuYCBvbiB0aGUgZ2l2ZW4gYHJ1bm5lcmAsIGJ5IGNhbmNlbGluZyB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgZXZlbnQgbG9vcC5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byBvbmx5IHRlbXBvcmFyaWx5IHBhdXNlIHRoZSBlbmdpbmUsIHNlZSBgZW5naW5lLmVuYWJsZWRgIGluc3RlYWQuXG4gICAgICogQG1ldGhvZCBzdG9wXG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqL1xuICAgIFJ1bm5lci5zdG9wID0gZnVuY3Rpb24ocnVubmVyKSB7XG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZShydW5uZXIuZnJhbWVSZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYFJ1bm5lci5ydW5gLlxuICAgICAqIEBtZXRob2Qgc3RhcnRcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuICAgIFJ1bm5lci5zdGFydCA9IGZ1bmN0aW9uKHJ1bm5lciwgZW5naW5lKSB7XG4gICAgICAgIFJ1bm5lci5ydW4ocnVubmVyLCBlbmdpbmUpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhdCB0aGUgc3RhcnQgb2YgYSB0aWNrLCBiZWZvcmUgYW55IHVwZGF0ZXMgdG8gdGhlIGVuZ2luZSBvciB0aW1pbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlVGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHRpbWluZyB1cGRhdGVkLCBidXQganVzdCBiZWZvcmUgdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IHRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGF0IHRoZSBlbmQgb2YgYSB0aWNrLCBhZnRlciBlbmdpbmUgdXBkYXRlIGFuZCBhZnRlciByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJUaWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBiZWZvcmUgdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVXBkYXRlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgcnVubmVyIGlzIHJ1bm5pbmcgb3Igbm90LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuYWJsZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm9vbGVhbmAgdGhhdCBzcGVjaWZpZXMgaWYgdGhlIHJ1bm5lciBzaG91bGQgdXNlIGEgZml4ZWQgdGltZXN0ZXAgKG90aGVyd2lzZSBpdCBpcyB2YXJpYWJsZSkuXG4gICAgICogSWYgdGltaW5nIGlzIGZpeGVkLCB0aGVuIHRoZSBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgZnJhbWUgcmF0ZSAoYnV0IGJlaGF2aW91ciB3aWxsIGJlIGRldGVybWluaXN0aWMpLlxuICAgICAqIElmIHRoZSB0aW1pbmcgaXMgdmFyaWFibGUsIHRoZW4gdGhlIGFwcGFyZW50IHNpbXVsYXRpb24gc3BlZWQgd2lsbCBiZSBjb25zdGFudCAoYXBwcm94aW1hdGVseSwgYnV0IGF0IHRoZSBjb3N0IG9mIGRldGVybWluaW5pc20pLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzRml4ZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRpbWUgc3RlcCBiZXR3ZWVuIHVwZGF0ZXMgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqIElmIGBlbmdpbmUudGltaW5nLmlzRml4ZWRgIGlzIHNldCB0byBgdHJ1ZWAsIHRoZW4gYGRlbHRhYCBpcyBmaXhlZC5cbiAgICAgKiBJZiBpdCBpcyBgZmFsc2VgLCB0aGVuIGBkZWx0YWAgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSB0byBtYWludGFpbiB0aGUgY29ycmVjdCBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMTAwMCAvIDYwXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhpcyBtb2R1bGUgaGFzIG5vdyBiZWVuIHJlcGxhY2VkIGJ5IGBNYXR0ZXIuQ29sbGlzaW9uYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byBgTWF0dGVyLkNvbGxpc2lvbmAuXG4qIEZvciBiYWNrLWNvbXBhdGliaWxpdHkgcHVycG9zZXMgdGhpcyBtb2R1bGUgd2lsbCByZW1haW4gZm9yIGEgc2hvcnQgdGVybSBhbmQgdGhlbiBsYXRlciByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuXG4qXG4qIFRoZSBgTWF0dGVyLlNBVGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGRldGVjdGluZyBjb2xsaXNpb25zIHVzaW5nIHRoZSBTZXBhcmF0aW5nIEF4aXMgVGhlb3JlbS5cbipcbiogQGNsYXNzIFNBVFxuKiBAZGVwcmVjYXRlZFxuKi9cblxudmFyIFNBVCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNBVDtcblxudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBkZXByZWNhdGVkID0gQ29tbW9uLmRlcHJlY2F0ZWQ7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBjb2xsaXNpb24gYmV0d2VlbiB0d28gYm9kaWVzIHVzaW5nIHRoZSBTZXBhcmF0aW5nIEF4aXMgVGhlb3JlbS5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBDb2xsaXNpb24uY29sbGlkZXNcbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqL1xuICAgIFNBVC5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4gQ29sbGlzaW9uLmNvbGxpZGVzKGJvZHlBLCBib2R5Qik7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoU0FULCAnY29sbGlkZXMnLCAnU0FULmNvbGxpZGVzIOKepCByZXBsYWNlZCBieSBDb2xsaXNpb24uY29sbGlkZXMnKTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5TdmdgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjb252ZXJ0aW5nIFNWRyBpbWFnZXMgaW50byBhbiBhcnJheSBvZiB2ZWN0b3IgcG9pbnRzLlxuKlxuKiBUbyB1c2UgdGhpcyBtb2R1bGUgeW91IGFsc28gbmVlZCB0aGUgU1ZHUGF0aFNlZyBwb2x5ZmlsbDogaHR0cHM6Ly9naXRodWIuY29tL3Byb2dlcnMvcGF0aHNlZ1xuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgU3ZnXG4qL1xuXG52YXIgU3ZnID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU3ZnO1xuXG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbiBTVkcgcGF0aCBpbnRvIGFuIGFycmF5IG9mIHZlY3RvciBwb2ludHMuXG4gICAgICogSWYgdGhlIGlucHV0IHBhdGggZm9ybXMgYSBjb25jYXZlIHNoYXBlLCB5b3UgbXVzdCBkZWNvbXBvc2UgdGhlIHJlc3VsdCBpbnRvIGNvbnZleCBwYXJ0cyBiZWZvcmUgdXNlLlxuICAgICAqIFNlZSBgQm9kaWVzLmZyb21WZXJ0aWNlc2Agd2hpY2ggcHJvdmlkZXMgc3VwcG9ydCBmb3IgdGhpcy5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgZ3VhcmFudGVlZCB0byBzdXBwb3J0IGNvbXBsZXggcGF0aHMgKHN1Y2ggYXMgdGhvc2Ugd2l0aCBob2xlcykuXG4gICAgICogWW91IG11c3QgbG9hZCB0aGUgYHBhdGhzZWcuanNgIHBvbHlmaWxsIG9uIG5ld2VyIGJyb3dzZXJzLlxuICAgICAqIEBtZXRob2QgcGF0aFRvVmVydGljZXNcbiAgICAgKiBAcGFyYW0ge1NWR1BhdGhFbGVtZW50fSBwYXRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVMZW5ndGg9MTVdXG4gICAgICogQHJldHVybiB7VmVjdG9yW119IHBvaW50c1xuICAgICAqL1xuICAgIFN2Zy5wYXRoVG9WZXJ0aWNlcyA9IGZ1bmN0aW9uKHBhdGgsIHNhbXBsZUxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISgnU1ZHUGF0aFNlZycgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1N2Zy5wYXRoVG9WZXJ0aWNlczogU1ZHUGF0aFNlZyBub3QgZGVmaW5lZCwgYSBwb2x5ZmlsbCBpcyByZXF1aXJlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93b3V0L3N2Zy50b3BvbHkuanMvYmxvYi9tYXN0ZXIvc3ZnLnRvcG9seS5qc1xuICAgICAgICB2YXIgaSwgaWwsIHRvdGFsLCBwb2ludCwgc2VnbWVudCwgc2VnbWVudHMsIFxuICAgICAgICAgICAgc2VnbWVudHNRdWV1ZSwgbGFzdFNlZ21lbnQsIFxuICAgICAgICAgICAgbGFzdFBvaW50LCBzZWdtZW50SW5kZXgsIHBvaW50cyA9IFtdLFxuICAgICAgICAgICAgbHgsIGx5LCBsZW5ndGggPSAwLCB4ID0gMCwgeSA9IDA7XG5cbiAgICAgICAgc2FtcGxlTGVuZ3RoID0gc2FtcGxlTGVuZ3RoIHx8IDE1O1xuXG4gICAgICAgIHZhciBhZGRQb2ludCA9IGZ1bmN0aW9uKHB4LCBweSwgcGF0aFNlZ1R5cGUpIHtcbiAgICAgICAgICAgIC8vIGFsbCBvZGQtbnVtYmVyZWQgcGF0aCB0eXBlcyBhcmUgcmVsYXRpdmUgZXhjZXB0IFBBVEhTRUdfQ0xPU0VQQVRIICgxKVxuICAgICAgICAgICAgdmFyIGlzUmVsYXRpdmUgPSBwYXRoU2VnVHlwZSAlIDIgPT09IDEgJiYgcGF0aFNlZ1R5cGUgPiAxO1xuXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBsYXN0IHBvaW50IGRvZXNuJ3QgZXF1YWwgdGhlIGN1cnJlbnQgcG9pbnQgYWRkIHRoZSBjdXJyZW50IHBvaW50XG4gICAgICAgICAgICBpZiAoIWxhc3RQb2ludCB8fCBweCAhPSBsYXN0UG9pbnQueCB8fCBweSAhPSBsYXN0UG9pbnQueSkge1xuICAgICAgICAgICAgICAgIGlmIChsYXN0UG9pbnQgJiYgaXNSZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBseCA9IGxhc3RQb2ludC54O1xuICAgICAgICAgICAgICAgICAgICBseSA9IGxhc3RQb2ludC55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGx4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogbHggKyBweCxcbiAgICAgICAgICAgICAgICAgICAgeTogbHkgKyBweVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgbGFzdCBwb2ludFxuICAgICAgICAgICAgICAgIGlmIChpc1JlbGF0aXZlIHx8ICFsYXN0UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBvaW50ID0gcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuXG4gICAgICAgICAgICAgICAgeCA9IGx4ICsgcHg7XG4gICAgICAgICAgICAgICAgeSA9IGx5ICsgcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGFkZFNlZ21lbnRQb2ludCA9IGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWdUeXBlID0gc2VnbWVudC5wYXRoU2VnVHlwZUFzTGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIHNraXAgcGF0aCBlbmRzXG4gICAgICAgICAgICBpZiAoc2VnVHlwZSA9PT0gJ1onKSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIG1hcCBzZWdtZW50IHRvIHggYW5kIHlcbiAgICAgICAgICAgIHN3aXRjaCAoc2VnVHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAgeCA9IHNlZ21lbnQueDtcbiAgICAgICAgICAgICAgICB5ID0gc2VnbWVudC55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAgeCA9IHNlZ21lbnQueDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHkgPSBzZWdtZW50Lnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZFBvaW50KHgsIHksIHNlZ21lbnQucGF0aFNlZ1R5cGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGVuc3VyZSBwYXRoIGlzIGFic29sdXRlXG4gICAgICAgIFN2Zy5fc3ZnUGF0aFRvQWJzb2x1dGUocGF0aCk7XG5cbiAgICAgICAgLy8gZ2V0IHRvdGFsIGxlbmd0aFxuICAgICAgICB0b3RhbCA9IHBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgICAgICAvLyBxdWV1ZSBzZWdtZW50c1xuICAgICAgICBzZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aC5wYXRoU2VnTGlzdC5udW1iZXJPZkl0ZW1zOyBpICs9IDEpXG4gICAgICAgICAgICBzZWdtZW50cy5wdXNoKHBhdGgucGF0aFNlZ0xpc3QuZ2V0SXRlbShpKSk7XG5cbiAgICAgICAgc2VnbWVudHNRdWV1ZSA9IHNlZ21lbnRzLmNvbmNhdCgpO1xuXG4gICAgICAgIC8vIHNhbXBsZSB0aHJvdWdoIHBhdGhcbiAgICAgICAgd2hpbGUgKGxlbmd0aCA8IHRvdGFsKSB7XG4gICAgICAgICAgICAvLyBnZXQgc2VnbWVudCBhdCBwb3NpdGlvblxuICAgICAgICAgICAgc2VnbWVudEluZGV4ID0gcGF0aC5nZXRQYXRoU2VnQXRMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1tzZWdtZW50SW5kZXhdO1xuXG4gICAgICAgICAgICAvLyBuZXcgc2VnbWVudFxuICAgICAgICAgICAgaWYgKHNlZ21lbnQgIT0gbGFzdFNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2VnbWVudHNRdWV1ZS5sZW5ndGggJiYgc2VnbWVudHNRdWV1ZVswXSAhPSBzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgICBhZGRTZWdtZW50UG9pbnQoc2VnbWVudHNRdWV1ZS5zaGlmdCgpKTtcblxuICAgICAgICAgICAgICAgIGxhc3RTZWdtZW50ID0gc2VnbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHBvaW50cyBpbiBiZXR3ZWVuIHdoZW4gY3VydmluZ1xuICAgICAgICAgICAgLy8gVE9ETzogYWRhcHRpdmUgc2FtcGxpbmdcbiAgICAgICAgICAgIHN3aXRjaCAoc2VnbWVudC5wYXRoU2VnVHlwZUFzTGV0dGVyLnRvVXBwZXJDYXNlKCkpIHtcblxuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICBwb2ludCA9IHBhdGguZ2V0UG9pbnRBdExlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGFkZFBvaW50KHBvaW50LngsIHBvaW50LnksIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGluY3JlbWVudCBieSBzYW1wbGUgdmFsdWVcbiAgICAgICAgICAgIGxlbmd0aCArPSBzYW1wbGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgcmVtYWluaW5nIHNlZ21lbnRzIG5vdCBwYXNzZWQgYnkgc2FtcGxpbmdcbiAgICAgICAgZm9yIChpID0gMCwgaWwgPSBzZWdtZW50c1F1ZXVlLmxlbmd0aDsgaSA8IGlsOyArK2kpXG4gICAgICAgICAgICBhZGRTZWdtZW50UG9pbnQoc2VnbWVudHNRdWV1ZVtpXSk7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9O1xuXG4gICAgU3ZnLl9zdmdQYXRoVG9BYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgLy8gaHR0cDovL3Bocm9nei5uZXQvY29udmVydC1zdmctcGF0aC10by1hbGwtYWJzb2x1dGUtY29tbWFuZHNcbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBHYXZpbiBLaXN0bmVyXG4gICAgICAgIC8vIGh0dHA6Ly9waHJvZ3oubmV0L2pzL19SZXVzZUxpY2Vuc2UudHh0XG4gICAgICAgIC8vIE1vZGlmaWNhdGlvbnM6IHRpZHkgZm9ybWF0dGluZyBhbmQgbmFtaW5nXG4gICAgICAgIHZhciB4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCBzZWdzID0gcGF0aC5wYXRoU2VnTGlzdCxcbiAgICAgICAgICAgIHggPSAwLCB5ID0gMCwgbGVuID0gc2Vncy5udW1iZXJPZkl0ZW1zO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBzZWcgPSBzZWdzLmdldEl0ZW0oaSksXG4gICAgICAgICAgICAgICAgc2VnVHlwZSA9IHNlZy5wYXRoU2VnVHlwZUFzTGV0dGVyO1xuXG4gICAgICAgICAgICBpZiAoL1tNTEhWQ1NRVEFdLy50ZXN0KHNlZ1R5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCd4JyBpbiBzZWcpIHggPSBzZWcueDtcbiAgICAgICAgICAgICAgICBpZiAoJ3knIGluIHNlZykgeSA9IHNlZy55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3gxJyBpbiBzZWcpIHgxID0geCArIHNlZy54MTtcbiAgICAgICAgICAgICAgICBpZiAoJ3gyJyBpbiBzZWcpIHgyID0geCArIHNlZy54MjtcbiAgICAgICAgICAgICAgICBpZiAoJ3kxJyBpbiBzZWcpIHkxID0geSArIHNlZy55MTtcbiAgICAgICAgICAgICAgICBpZiAoJ3kyJyBpbiBzZWcpIHkyID0geSArIHNlZy55MjtcbiAgICAgICAgICAgICAgICBpZiAoJ3gnIGluIHNlZykgeCArPSBzZWcueDtcbiAgICAgICAgICAgICAgICBpZiAoJ3knIGluIHNlZykgeSArPSBzZWcueTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VnVHlwZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTW92ZXRvQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvSG9yaXpvbnRhbEFicyh4KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b1ZlcnRpY2FsQWJzKHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b0N1YmljQWJzKHgsIHksIHgxLCB5MSwgeDIsIHkyKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY1Ntb290aEFicyh4LCB5LCB4MiwgeTIpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY0Ficyh4LCB5LCB4MSwgeTEpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY1Ntb290aEFicyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0FyY0Ficyh4LCB5LCBzZWcucjEsIHNlZy5yMiwgc2VnLmFuZ2xlLCBzZWcubGFyZ2VBcmNGbGFnLCBzZWcuc3dlZXBGbGFnKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgICAgICAgICAgICB4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWdUeXBlID09ICdNJyB8fCBzZWdUeXBlID09ICdtJykge1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgICAgICB5MCA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGlzIG1vZHVsZSBoYXMgbm93IGJlZW4gcmVwbGFjZWQgYnkgYE1hdHRlci5Db21wb3NpdGVgLlxuKlxuKiBBbGwgdXNhZ2Ugc2hvdWxkIGJlIG1pZ3JhdGVkIHRvIHRoZSBlcXVpdmFsZW50IGZ1bmN0aW9ucyBmb3VuZCBvbiBgTWF0dGVyLkNvbXBvc2l0ZWAuXG4qIEZvciBleGFtcGxlIGBXb3JsZC5hZGQod29ybGQsIGJvZHkpYCBub3cgYmVjb21lcyBgQ29tcG9zaXRlLmFkZCh3b3JsZCwgYm9keSlgLlxuKlxuKiBUaGUgcHJvcGVydHkgYHdvcmxkLmdyYXZpdHlgIGhhcyBiZWVuIG1vdmVkIHRvIGBlbmdpbmUuZ3Jhdml0eWAuXG4qXG4qIEZvciBiYWNrLWNvbXBhdGliaWxpdHkgcHVycG9zZXMgdGhpcyBtb2R1bGUgd2lsbCByZW1haW4gYXMgYSBkaXJlY3QgYWxpYXMgdG8gYE1hdHRlci5Db21wb3NpdGVgIGluIHRoZSBzaG9ydCB0ZXJtIGR1cmluZyBtaWdyYXRpb24uXG4qIEV2ZW50dWFsbHkgdGhpcyBhbGlhcyBtb2R1bGUgd2lsbCBiZSBtYXJrZWQgYXMgZGVwcmVjYXRlZCBhbmQgdGhlbiBsYXRlciByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuXG4qXG4qIEBjbGFzcyBXb3JsZFxuKi9cblxudmFyIFdvcmxkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gV29ybGQ7XG5cbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFNlZSBhYm92ZSwgYWxpYXNlcyBmb3IgYmFjayBjb21wYXRpYmlsaXR5IG9ubHlcbiAgICAgKi9cbiAgICBXb3JsZC5jcmVhdGUgPSBDb21wb3NpdGUuY3JlYXRlO1xuICAgIFdvcmxkLmFkZCA9IENvbXBvc2l0ZS5hZGQ7XG4gICAgV29ybGQucmVtb3ZlID0gQ29tcG9zaXRlLnJlbW92ZTtcbiAgICBXb3JsZC5jbGVhciA9IENvbXBvc2l0ZS5jbGVhcjtcbiAgICBXb3JsZC5hZGRDb21wb3NpdGUgPSBDb21wb3NpdGUuYWRkQ29tcG9zaXRlO1xuICAgIFdvcmxkLmFkZEJvZHkgPSBDb21wb3NpdGUuYWRkQm9keTtcbiAgICBXb3JsZC5hZGRDb25zdHJhaW50ID0gQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQ7XG5cbn0pKCk7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBFbmdpbmUsIENvbXBvc2l0ZSwgUmVuZGVyLCBSdW5uZXIsIEJvZGllcywgV29ybGQsIEV2ZW50cyB9IGZyb20gJ21hdHRlci1qcydcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxubGV0IHd3ID0gd2luZG93LmlubmVyV2lkdGhcbndoID0gd2luZG93LmlubmVySGVpZ2h0XG5cbmZ1bmN0aW9uIHJvdGF0ZShhcnJheSwgYW5nbGUpIHtcbiAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIGZ1bmN0aW9uIGQycihhKSB7IHJldHVybiBhICogTWF0aC5QSSAvIDE4MDsgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgTWF0aC5jb3MoZDJyKGFuZ2xlKSkgKiBwWzBdIC0gTWF0aC5zaW4oZDJyKGFuZ2xlKSkgKiBwWzFdLFxuICAgICAgICAgICAgTWF0aC5zaW4oZDJyKGFuZ2xlKSkgKiBwWzBdIC0gTWF0aC5jb3MoZDJyKGFuZ2xlKSkgKiBwWzFdLFxuICAgICAgICBdO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzX3RvX3JhZGlhbnMoZGVncmVlcykge1xuICAgIGxldCBwaSA9IE1hdGguUEk7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiAocGkgLyAxODApO1xufVxuZnVuY3Rpb24gcmFkaWFuc190b19kZWdyZWVzKHJhZGlhbnMpIHtcbiAgICBsZXQgcGkgPSBNYXRoLlBJO1xuICAgIHJldHVybiByYWRpYW5zICogKDE4MCAvIHBpKTtcbn1cblxuXG5mdW5jdGlvbiBCbG9jayhlbCwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICAvLyBzZXQgZWxlbWVudCBcbiAgICB0aGlzLmVsID0gZWxcbiAgICBjb25zdCBzdGFydF9hbmdsZSA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYW5nbGVcIilcbiAgICAvLyBzZXQgb3B0aW9ucyBcbiAgICBjb25zdCBtZXJnZWRfb3B0aW9ucyA9IHtcbiAgICAgICAgLi4ue1xuICAgICAgICAgICAgZnJpY3Rpb246IDAsXG4gICAgICAgICAgICByZXN0aXR1dGlvbjogMC45NSxcbiAgICAgICAgICAgIGFuZ2xlOiBzdGFydF9hbmdsZSA/IGRlZ3JlZXNfdG9fcmFkaWFucyhhKSA6IDAsXG4gICAgICAgICAgICBpc1N0YXRpYzogZmFsc2VcbiAgICAgICAgfSwgLi4ub3B0aW9uc1xuICAgIH07XG5cblxuICAgIGNvbnN0IGJiID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGNvbnN0IGNlbnRlclggPSBiYi5sZWZ0ICsgYmIud2lkdGggLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSBiYi50b3AgKyBiYi5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5ib2R5ID0gQm9kaWVzLnJlY3RhbmdsZShjZW50ZXJYLCBjZW50ZXJZLCBiYi53aWR0aCwgYmIuaGVpZ2h0LCBtZXJnZWRfb3B0aW9ucyk7XG5cbiAgICBDb21wb3NpdGUuYWRkKHdvcmxkLCB0aGlzLmJvZHkpO1xuXG4gICAgdGhpcy5zZXR1cCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5yb3RhdGUgPSBgJHthbmdsZX1kZWdgXG4gICAgfVxuICAgIHRoaXMuZ2V0UG9zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5XG4gICAgfVxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcblxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBDaXJjbGUoeCwgeSwgcikge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICByZXN0aXR1dGlvbjogMC45NVxuICAgIH07XG4gICAgdGhpcy5ib2R5ID0gQm9kaWVzLmNpcmNsZSh4LCB5LCByLCBvcHRpb25zKTtcbiAgICB0aGlzLnIgPSByO1xuICAgIENvbXBvc2l0ZS5hZGQod29ybGQsIHRoaXMuYm9keSk7XG5cbn1cblxuXG5sZXQgY2lyY2xlcyA9IFtdO1xubGV0IGJvdW5kYXJpZXMgPSBbXTtcbmxldCBibG9ja3MgPSBbXTtcblxuXG5sZXQgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xubGV0IHdvcmxkID0gZW5naW5lLndvcmxkXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tYXR0ZXJdXCIpLmZvckVhY2godmFsdWUgPT4ge1xuXG4gICAgaWYgKHZhbHVlLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0dGVyXCIpID09IFwicmlnaWRcIikge1xuICAgICAgICBib3VuZGFyaWVzLnB1c2gobmV3IEJsb2NrKHZhbHVlLCB7IGlzU3RhdGljOiB0cnVlIH0pKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0dGVyXCIpID09IFwiYmxvY2tcIikge1xuICAgICAgICBibG9ja3MucHVzaChuZXcgQmxvY2sodmFsdWUpKTtcbiAgICB9XG59KVxuXG5cbi8vIGNyZWF0ZSBydW5uZXJcbmxldCBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XG4vLyBydW4gdGhlIGVuZ2luZVxuUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XG5cblxuLy8gZXZlbnRzXG5FdmVudHMub24ocnVubmVyLCBcImFmdGVyVGlja1wiLCAoZSkgPT4ge1xuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcblxuICAgICAgICBsZXQgbGVmdCA9IGJsb2NrWzBdLmJvZHkucG9zaXRpb24ueCAtIChibG9ja1swXS5oIC8gMilcbiAgICAgICAgbGV0IHRvcCA9IGJsb2NrWzBdLmJvZHkucG9zaXRpb24ueSAtIChibG9ja1swXS53IC8gMilcblxuICAgICAgICBibG9ja1sxXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgbGVmdDogJHtsZWZ0fSFpbXBvcnRhbnQ7IHRvcDogJHt0b3B9IWltcG9ydGFudDsgcm90YXRlOiAke3JhZGlhbnNfdG9fZGVncmVlcyhibG9ja1swXS5ib2R5LmFuZ2xlKX1kZWc7YClcbiAgICB9KVxuXG4gICAgYm91bmRhcmllcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgbGV0IHRvcCA9IGJsb2NrWzBdLmJvZHkucG9zaXRpb24ueCAtIChibG9ja1swXS5oIC8gMilcbiAgICAgICAgbGV0IGxlZnQgPSBibG9ja1swXS5ib2R5LnBvc2l0aW9uLnkgLSAoYmxvY2tbMF0udyAvIDIpXG5cbiAgICAgICAgYmxvY2tbMV0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGxlZnQ6ICR7bGVmdH0haW1wb3J0YW50OyB0b3A6ICR7dG9wfSFpbXBvcnRhbnQ7IHJvdGF0ZTogJHtyYWRpYW5zX3RvX2RlZ3JlZXMoYmxvY2tbMF0uYm9keS5hbmdsZSl9ZGVnO2ApXG4gICAgfSlcblxufSkgICAgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=