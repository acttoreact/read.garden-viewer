/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/config/default.js":
/*!********************************!*\
  !*** ./dist/config/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nvar viewer_1 = __webpack_require__(/*! ../model/viewer */ \"./dist/model/viewer.js\");\nvar defaultConfig = {\n    defaultFixedMode: viewer_1.ViewerMode.WithScroll,\n    initialFitMode: viewer_1.FitMode.Height,\n    zoom: {\n        max: 4,\n        min: 0.1,\n        steps: [\n            0.1,\n            0.2,\n            0.3,\n            0.4,\n            0.5,\n            0.75,\n            1,\n            1.25,\n            1.5,\n            1.75,\n            2,\n            2.5,\n            3,\n            3.5,\n            4,\n        ]\n    },\n    loadedContentsNumber: 5,\n    fontSize: {\n        min: 8,\n        max: 32,\n        step: 2\n    },\n    columnGap: 216,\n    pageChangeThreshold: 40,\n    chapterChangeThreshold: 40,\n    minCharsPerColumn: 50,\n    maxCharsPerColumn: 70,\n    initialFontSize: 16\n};\nexports.default = defaultConfig;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/config/default.js?");

/***/ }),

/***/ "./dist/config/index.js":
/*!******************************!*\
  !*** ./dist/config/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.setConfig = exports.getConfig = void 0;\nvar loglevel_1 = __webpack_require__(/*! loglevel */ \"./node_modules/loglevel/lib/loglevel.js\");\nvar default_1 = __webpack_require__(/*! ./default */ \"./dist/config/default.js\");\nvar config = __assign({}, default_1[\"default\"]);\nloglevel_1[\"default\"].info(\"Initial default config: \" + JSON.stringify(config, null, 2));\nvar getConfig = function () { return config; };\nexports.getConfig = getConfig;\nvar setConfig = function (newConfig) {\n    config = __assign(__assign({}, config), newConfig);\n};\nexports.setConfig = setConfig;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/config/index.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nvar loglevel_1 = __webpack_require__(/*! loglevel */ \"./node_modules/loglevel/lib/loglevel.js\");\nvar viewer_1 = __webpack_require__(/*! ./viewer */ \"./dist/viewer/index.js\");\nloglevel_1[\"default\"].setLevel('info');\nwindow.readGardenViewer = viewer_1[\"default\"];\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/index.js?");

/***/ }),

/***/ "./dist/lib/actions/actionDispatchers.js":
/*!***********************************************!*\
  !*** ./dist/lib/actions/actionDispatchers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nvar setScrollMode_1 = __webpack_require__(/*! ./setScrollMode */ \"./dist/lib/actions/setScrollMode.js\");\n/**\n * List of all action dispatchers\n */\nvar actionDispatchers = {\n    setScrollMode: setScrollMode_1[\"default\"]\n};\nexports.default = actionDispatchers;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/lib/actions/actionDispatchers.js?");

/***/ }),

/***/ "./dist/lib/actions/setScrollMode.js":
/*!*******************************************!*\
  !*** ./dist/lib/actions/setScrollMode.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar setScrollMode = function (action, state) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        if (state.scrollMode === 'fixed') {\n            throw new Error('Action not allowed in fixed mode');\n        }\n        return [2 /*return*/, {\n                scrollMode: action.scrollMode,\n                layoutResetRequired: true\n            }];\n    });\n}); };\nexports.default = setScrollMode;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/lib/actions/setScrollMode.js?");

/***/ }),

/***/ "./dist/lib/state/dispatch.js":
/*!************************************!*\
  !*** ./dist/lib/state/dispatch.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar index_1 = __webpack_require__(/*! ./index */ \"./dist/lib/state/index.js\");\nvar reducer_1 = __webpack_require__(/*! ./reducer */ \"./dist/lib/state/reducer.js\");\nvar dispatch = function (action) { return __awaiter(void 0, void 0, void 0, function () {\n    var state, update;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                state = index_1.getState();\n                return [4 /*yield*/, reducer_1[\"default\"](state, action)];\n            case 1:\n                update = _a.sent();\n                index_1.updateState(update);\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.default = dispatch;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/lib/state/dispatch.js?");

/***/ }),

/***/ "./dist/lib/state/index.js":
/*!*********************************!*\
  !*** ./dist/lib/state/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.updateState = exports.getState = exports.initializeState = void 0;\nvar merge = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/cjs.js\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./dist/config/index.js\");\nvar viewer_1 = __webpack_require__(/*! ../../model/viewer */ \"./dist/model/viewer.js\");\nvar state;\nvar initializeState = function (config) {\n    var newConfig = {\n        config: __assign(__assign({}, config_1.getConfig()), config)\n    };\n    if (newConfig.config.layoutType === 'flow') {\n        var newState = {\n            config: newConfig.config\n        };\n        state = newState;\n    }\n    if (newConfig.config.layoutType === 'fixed') {\n        if (newConfig.config.defaultFixedMode === viewer_1.ViewerMode.Paginated) {\n            var newState = {\n                config: newConfig.config\n            };\n            state = newState;\n        }\n        if (newConfig.config.defaultFixedMode === viewer_1.ViewerMode.WithScroll) {\n            var newState = {\n                config: newConfig.config\n            };\n            state = newState;\n        }\n    }\n};\nexports.initializeState = initializeState;\nvar getState = function () { return state; };\nexports.getState = getState;\nvar updateState = function (newState) {\n    state = merge(state, newState);\n};\nexports.updateState = updateState;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/lib/state/index.js?");

/***/ }),

/***/ "./dist/lib/state/reducer.js":
/*!***********************************!*\
  !*** ./dist/lib/state/reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar actionDispatchers_1 = __webpack_require__(/*! ../actions/actionDispatchers */ \"./dist/lib/actions/actionDispatchers.js\");\nvar reducer = function (state, action) { return __awaiter(void 0, void 0, void 0, function () {\n    var dispatcher;\n    return __generator(this, function (_a) {\n        dispatcher = actionDispatchers_1[\"default\"][action.type];\n        if (dispatcher) {\n            return [2 /*return*/, dispatcher(action, state)];\n        }\n        throw Error(\"There is no dispatcher for the action \\\"\" + action.type + \"\\\"\");\n    });\n}); };\nexports.default = reducer;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/lib/state/reducer.js?");

/***/ }),

/***/ "./dist/model/viewer.js":
/*!******************************!*\
  !*** ./dist/model/viewer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.FitMode = exports.ViewerMode = void 0;\n/**\n * Viewer mode\n */\nvar ViewerMode;\n(function (ViewerMode) {\n    /**\n     * Paginated viewer. One page shown at the same time.\n     */\n    ViewerMode[\"Paginated\"] = \"paginated\";\n    /**\n     * Viewer with scroll. All content shown, scrollable.\n     */\n    ViewerMode[\"WithScroll\"] = \"withScroll\";\n    /**\n     * Flow viewer.\n     */\n    ViewerMode[\"Flow\"] = \"flow\";\n})(ViewerMode = exports.ViewerMode || (exports.ViewerMode = {}));\n/**\n * Possible fit modes\n */\nvar FitMode;\n(function (FitMode) {\n    /**\n     * Fit width\n     */\n    FitMode[\"Width\"] = \"width\";\n    /**\n     * Fit height\n     */\n    FitMode[\"Height\"] = \"height\";\n})(FitMode = exports.FitMode || (exports.FitMode = {}));\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/model/viewer.js?");

/***/ }),

/***/ "./dist/viewer/index.js":
/*!******************************!*\
  !*** ./dist/viewer/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nvar loglevel_1 = __webpack_require__(/*! loglevel */ \"./node_modules/loglevel/lib/loglevel.js\");\nvar state_1 = __webpack_require__(/*! ../lib/state */ \"./dist/lib/state/index.js\");\nvar dispatch_1 = __webpack_require__(/*! ../lib/state/dispatch */ \"./dist/lib/state/dispatch.js\");\nvar viewer = function (config) {\n    state_1.initializeState(config);\n    var api = {\n        dispatch: dispatch_1[\"default\"],\n        state: state_1.getState()\n    };\n    loglevel_1[\"default\"].info('Viewer Initialized');\n    return api;\n};\nexports.default = viewer;\n\n\n//# sourceURL=webpack://read.garden-viewer/./dist/viewer/index.js?");

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar isMergeableObject = function isMergeableObject(value) {\n\treturn isNonNullObject(value)\n\t\t&& !isSpecial(value)\n};\n\nfunction isNonNullObject(value) {\n\treturn !!value && typeof value === 'object'\n}\n\nfunction isSpecial(value) {\n\tvar stringValue = Object.prototype.toString.call(value);\n\n\treturn stringValue === '[object RegExp]'\n\t\t|| stringValue === '[object Date]'\n\t\t|| isReactElement(value)\n}\n\n// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\nvar canUseSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;\n\nfunction isReactElement(value) {\n\treturn value.$$typeof === REACT_ELEMENT_TYPE\n}\n\nfunction emptyTarget(val) {\n\treturn Array.isArray(val) ? [] : {}\n}\n\nfunction cloneUnlessOtherwiseSpecified(value, options) {\n\treturn (options.clone !== false && options.isMergeableObject(value))\n\t\t? deepmerge(emptyTarget(value), value, options)\n\t\t: value\n}\n\nfunction defaultArrayMerge(target, source, options) {\n\treturn target.concat(source).map(function(element) {\n\t\treturn cloneUnlessOtherwiseSpecified(element, options)\n\t})\n}\n\nfunction getMergeFunction(key, options) {\n\tif (!options.customMerge) {\n\t\treturn deepmerge\n\t}\n\tvar customMerge = options.customMerge(key);\n\treturn typeof customMerge === 'function' ? customMerge : deepmerge\n}\n\nfunction getEnumerableOwnPropertySymbols(target) {\n\treturn Object.getOwnPropertySymbols\n\t\t? Object.getOwnPropertySymbols(target).filter(function(symbol) {\n\t\t\treturn target.propertyIsEnumerable(symbol)\n\t\t})\n\t\t: []\n}\n\nfunction getKeys(target) {\n\treturn Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))\n}\n\nfunction propertyIsOnObject(object, property) {\n\ttry {\n\t\treturn property in object\n\t} catch(_) {\n\t\treturn false\n\t}\n}\n\n// Protects from prototype poisoning and unexpected merging up the prototype chain.\nfunction propertyIsUnsafe(target, key) {\n\treturn propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,\n\t\t&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,\n\t\t\t&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.\n}\n\nfunction mergeObject(target, source, options) {\n\tvar destination = {};\n\tif (options.isMergeableObject(target)) {\n\t\tgetKeys(target).forEach(function(key) {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(target[key], options);\n\t\t});\n\t}\n\tgetKeys(source).forEach(function(key) {\n\t\tif (propertyIsUnsafe(target, key)) {\n\t\t\treturn\n\t\t}\n\n\t\tif (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {\n\t\t\tdestination[key] = getMergeFunction(key, options)(target[key], source[key], options);\n\t\t} else {\n\t\t\tdestination[key] = cloneUnlessOtherwiseSpecified(source[key], options);\n\t\t}\n\t});\n\treturn destination\n}\n\nfunction deepmerge(target, source, options) {\n\toptions = options || {};\n\toptions.arrayMerge = options.arrayMerge || defaultArrayMerge;\n\toptions.isMergeableObject = options.isMergeableObject || isMergeableObject;\n\t// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()\n\t// implementations can use it. The caller may not replace it.\n\toptions.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;\n\n\tvar sourceIsArray = Array.isArray(source);\n\tvar targetIsArray = Array.isArray(target);\n\tvar sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n\n\tif (!sourceAndTargetTypesMatch) {\n\t\treturn cloneUnlessOtherwiseSpecified(source, options)\n\t} else if (sourceIsArray) {\n\t\treturn options.arrayMerge(target, source, options)\n\t} else {\n\t\treturn mergeObject(target, source, options)\n\t}\n}\n\ndeepmerge.all = function deepmergeAll(array, options) {\n\tif (!Array.isArray(array)) {\n\t\tthrow new Error('first argument should be an array')\n\t}\n\n\treturn array.reduce(function(prev, next) {\n\t\treturn deepmerge(prev, next, options)\n\t}, {})\n};\n\nvar deepmerge_1 = deepmerge;\n\nmodule.exports = deepmerge_1;\n\n\n//# sourceURL=webpack://read.garden-viewer/./node_modules/deepmerge/dist/cjs.js?");

/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n* loglevel - https://github.com/pimterry/loglevel\n*\n* Copyright (c) 2013 Tim Perry\n* Licensed under the MIT license.\n*/\n(function (root, definition) {\n    \"use strict\";\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function () {\n    \"use strict\";\n\n    // Slightly dubious tricks to cut down minimized file size\n    var noop = function() {};\n    var undefinedType = \"undefined\";\n    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (\n        /Trident\\/|MSIE /.test(window.navigator.userAgent)\n    );\n\n    var logMethods = [\n        \"trace\",\n        \"debug\",\n        \"info\",\n        \"warn\",\n        \"error\"\n    ];\n\n    // Cross-browser bind equivalent that works at least back to IE6\n    function bindMethod(obj, methodName) {\n        var method = obj[methodName];\n        if (typeof method.bind === 'function') {\n            return method.bind(obj);\n        } else {\n            try {\n                return Function.prototype.bind.call(method, obj);\n            } catch (e) {\n                // Missing bind shim or IE8 + Modernizr, fallback to wrapping\n                return function() {\n                    return Function.prototype.apply.apply(method, [obj, arguments]);\n                };\n            }\n        }\n    }\n\n    // Trace() doesn't print the message in IE, so for that case we need to wrap it\n    function traceForIE() {\n        if (console.log) {\n            if (console.log.apply) {\n                console.log.apply(console, arguments);\n            } else {\n                // In old IE, native console methods themselves don't have apply().\n                Function.prototype.apply.apply(console.log, [console, arguments]);\n            }\n        }\n        if (console.trace) console.trace();\n    }\n\n    // Build the best logging method possible for this env\n    // Wherever possible we want to bind, not wrap, to preserve stack traces\n    function realMethod(methodName) {\n        if (methodName === 'debug') {\n            methodName = 'log';\n        }\n\n        if (typeof console === undefinedType) {\n            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives\n        } else if (methodName === 'trace' && isIE) {\n            return traceForIE;\n        } else if (console[methodName] !== undefined) {\n            return bindMethod(console, methodName);\n        } else if (console.log !== undefined) {\n            return bindMethod(console, 'log');\n        } else {\n            return noop;\n        }\n    }\n\n    // These private functions always need `this` to be set properly\n\n    function replaceLoggingMethods(level, loggerName) {\n        /*jshint validthis:true */\n        for (var i = 0; i < logMethods.length; i++) {\n            var methodName = logMethods[i];\n            this[methodName] = (i < level) ?\n                noop :\n                this.methodFactory(methodName, level, loggerName);\n        }\n\n        // Define log.log as an alias for log.debug\n        this.log = this.debug;\n    }\n\n    // In old IE versions, the console isn't present until you first open it.\n    // We build realMethod() replacements here that regenerate logging methods\n    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {\n        return function () {\n            if (typeof console !== undefinedType) {\n                replaceLoggingMethods.call(this, level, loggerName);\n                this[methodName].apply(this, arguments);\n            }\n        };\n    }\n\n    // By default, we use closely bound real methods wherever possible, and\n    // otherwise we wait for a console to appear, and then try again.\n    function defaultMethodFactory(methodName, level, loggerName) {\n        /*jshint validthis:true */\n        return realMethod(methodName) ||\n               enableLoggingWhenConsoleArrives.apply(this, arguments);\n    }\n\n    function Logger(name, defaultLevel, factory) {\n      var self = this;\n      var currentLevel;\n\n      var storageKey = \"loglevel\";\n      if (typeof name === \"string\") {\n        storageKey += \":\" + name;\n      } else if (typeof name === \"symbol\") {\n        storageKey = undefined;\n      }\n\n      function persistLevelIfPossible(levelNum) {\n          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();\n\n          if (typeof window === undefinedType || !storageKey) return;\n\n          // Use localStorage if available\n          try {\n              window.localStorage[storageKey] = levelName;\n              return;\n          } catch (ignore) {}\n\n          // Use session cookie as fallback\n          try {\n              window.document.cookie =\n                encodeURIComponent(storageKey) + \"=\" + levelName + \";\";\n          } catch (ignore) {}\n      }\n\n      function getPersistedLevel() {\n          var storedLevel;\n\n          if (typeof window === undefinedType || !storageKey) return;\n\n          try {\n              storedLevel = window.localStorage[storageKey];\n          } catch (ignore) {}\n\n          // Fallback to cookies if local storage gives us nothing\n          if (typeof storedLevel === undefinedType) {\n              try {\n                  var cookie = window.document.cookie;\n                  var location = cookie.indexOf(\n                      encodeURIComponent(storageKey) + \"=\");\n                  if (location !== -1) {\n                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];\n                  }\n              } catch (ignore) {}\n          }\n\n          // If the stored level is not valid, treat it as if nothing was stored.\n          if (self.levels[storedLevel] === undefined) {\n              storedLevel = undefined;\n          }\n\n          return storedLevel;\n      }\n\n      /*\n       *\n       * Public logger API - see https://github.com/pimterry/loglevel for details\n       *\n       */\n\n      self.name = name;\n\n      self.levels = { \"TRACE\": 0, \"DEBUG\": 1, \"INFO\": 2, \"WARN\": 3,\n          \"ERROR\": 4, \"SILENT\": 5};\n\n      self.methodFactory = factory || defaultMethodFactory;\n\n      self.getLevel = function () {\n          return currentLevel;\n      };\n\n      self.setLevel = function (level, persist) {\n          if (typeof level === \"string\" && self.levels[level.toUpperCase()] !== undefined) {\n              level = self.levels[level.toUpperCase()];\n          }\n          if (typeof level === \"number\" && level >= 0 && level <= self.levels.SILENT) {\n              currentLevel = level;\n              if (persist !== false) {  // defaults to true\n                  persistLevelIfPossible(level);\n              }\n              replaceLoggingMethods.call(self, level, name);\n              if (typeof console === undefinedType && level < self.levels.SILENT) {\n                  return \"No console available for logging\";\n              }\n          } else {\n              throw \"log.setLevel() called with invalid level: \" + level;\n          }\n      };\n\n      self.setDefaultLevel = function (level) {\n          if (!getPersistedLevel()) {\n              self.setLevel(level, false);\n          }\n      };\n\n      self.enableAll = function(persist) {\n          self.setLevel(self.levels.TRACE, persist);\n      };\n\n      self.disableAll = function(persist) {\n          self.setLevel(self.levels.SILENT, persist);\n      };\n\n      // Initialize with the right level\n      var initialLevel = getPersistedLevel();\n      if (initialLevel == null) {\n          initialLevel = defaultLevel == null ? \"WARN\" : defaultLevel;\n      }\n      self.setLevel(initialLevel, false);\n    }\n\n    /*\n     *\n     * Top-level API\n     *\n     */\n\n    var defaultLogger = new Logger();\n\n    var _loggersByName = {};\n    defaultLogger.getLogger = function getLogger(name) {\n        if ((typeof name !== \"symbol\" && typeof name !== \"string\") || name === \"\") {\n          throw new TypeError(\"You must supply a name when creating a logger.\");\n        }\n\n        var logger = _loggersByName[name];\n        if (!logger) {\n          logger = _loggersByName[name] = new Logger(\n            name, defaultLogger.getLevel(), defaultLogger.methodFactory);\n        }\n        return logger;\n    };\n\n    // Grab the current global log variable in case of overwrite\n    var _log = (typeof window !== undefinedType) ? window.log : undefined;\n    defaultLogger.noConflict = function() {\n        if (typeof window !== undefinedType &&\n               window.log === defaultLogger) {\n            window.log = _log;\n        }\n\n        return defaultLogger;\n    };\n\n    defaultLogger.getLoggers = function getLoggers() {\n        return _loggersByName;\n    };\n\n    // ES6 default export, for compatibility\n    defaultLogger['default'] = defaultLogger;\n\n    return defaultLogger;\n}));\n\n\n//# sourceURL=webpack://read.garden-viewer/./node_modules/loglevel/lib/loglevel.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;