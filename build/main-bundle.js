/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n\n  font-size: 32px;\n  color: white;\n  font-family: Poppins, Arial, Helvetica, sans-serif;\n}\n\nhtml, body, #root {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(49, 49, 49);\n}\n\n#root > div {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nbutton {\n  border: none;\n  background-color: rgb(136, 109, 236);\n  padding: 10px 20px;\n  border-radius: 15px;\n  margin: 20px 15px;\n  cursor: pointer;\n  transition: ease 300ms;\n}\n\nbutton:hover {\n  background-color: rgb(111, 76, 238);\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;;EAEtB,eAAe;EACf,YAAY;EACZ,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;AACrC","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n\n  font-size: 32px;\n  color: white;\n  font-family: Poppins, Arial, Helvetica, sans-serif;\n}\n\nhtml, body, #root {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(49, 49, 49);\n}\n\n#root > div {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nbutton {\n  border: none;\n  background-color: rgb(136, 109, 236);\n  padding: 10px 20px;\n  border-radius: 15px;\n  margin: 20px 15px;\n  cursor: pointer;\n  transition: ease 300ms;\n}\n\nbutton:hover {\n  background-color: rgb(111, 76, 238);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.START = exports.RIGHT_HAS_A_BIG_STRAIGHT_TOWER = exports.LEFT_HAS_A_BIG_STRAIGHT_TOWER = exports.RIGHT_IS_AN_ISLAND = exports.LEFT_IS_AN_ISLAND = exports.RIGHT_BEST_SALARIES_IN_WORLD = exports.LEFT_BEST_SALARIES_IN_WORLD = exports.RIGHT_IS_ABROAD_CAPITAL = exports.LEFT_IS_ABROAD_CAPITAL = exports.RIGHT_ITALIAN_AND_GERMANY_CULINARY = exports.LEFT_ITALIAN_AND_GERMANY_CULINARY = exports.RIGHT_HAS_HOT_WATERS = exports.LEFT_HAS_HOT_WATERS = exports.RIGHT_IS_KNOWN_FOR_HUMID_FLORA = exports.LEFT_IS_KNOWN_FOR_HUMID_FLORA = exports.LEFT_IS_IN_NORTHEAST = exports.RIGHT_IS_IN_NORTHEAST = exports.RIGHT_EXOTIC_ANIMALS = exports.LEFT_EXOTIC_ANIMALS = exports.RIGHT_IS_FAMOUS_FOR_CULINARY = exports.LEFT_IS_FAMOUS_FOR_CULINARY = exports.RIGHT_IS_FAMOUS_FOR_ITS_WATERS = exports.LEFT_IS_FAMOUS_FOR_ITS_WATERS = exports.RIGHT_IS_CLOSE_TO_COAST = exports.LEFT_IS_CLOSE_TO_COAST = exports.RIGHT_IS_IN_AMERICAS = exports.LEFT_IS_IN_AMERICAS = exports.LEFT_IS_IN_BRASIL = exports.RIGHT_IS_CAPITAL = exports.LEFT_IS_CAPITAL = exports.RIGHT_IS_IN_BRASIL = void 0;
exports.RIGHT_IS_IN_BRASIL = 'RIGHT_IS_IN_BRASIL';
exports.LEFT_IS_CAPITAL = 'LEFT_IS_CAPITAL';
exports.RIGHT_IS_CAPITAL = 'RIGHT_IS_CAPITAL';
exports.LEFT_IS_IN_BRASIL = 'LEFT_IS_IN_BRASIL';
exports.LEFT_IS_IN_AMERICAS = 'LEFT_IS_IN_AMERICAS';
exports.RIGHT_IS_IN_AMERICAS = 'RIGHT_IS_IN_AMERICAS';
exports.LEFT_IS_CLOSE_TO_COAST = 'LEFT_IS_CLOSE_TO_COAST';
exports.RIGHT_IS_CLOSE_TO_COAST = 'RIGHT_IS_CLOSE_TO_COAST';
exports.LEFT_IS_FAMOUS_FOR_ITS_WATERS = 'LEFT_IS_FAMOUS_FOR_ITS_WATERS';
exports.RIGHT_IS_FAMOUS_FOR_ITS_WATERS = 'RIGHT_IS_FAMOUS_FOR_ITS_WATERS';
exports.LEFT_IS_FAMOUS_FOR_CULINARY = 'LEFT_IS_FAMOUS_FOR_CULINARY';
exports.RIGHT_IS_FAMOUS_FOR_CULINARY = 'RIGHT_IS_FAMOUS_FOR_CULINARY';
exports.LEFT_EXOTIC_ANIMALS = 'LEFT_EXOTIC_ANIMALS';
exports.RIGHT_EXOTIC_ANIMALS = 'RIGHT_EXOTIC_ANIMALS';
exports.RIGHT_IS_IN_NORTHEAST = 'RIGHT_IS_IN_NORTHEAST';
exports.LEFT_IS_IN_NORTHEAST = 'LEFT_IS_IN_NORTHEAST';
exports.LEFT_IS_KNOWN_FOR_HUMID_FLORA = 'LEFT_IS_KNOWN_FOR_HUMID_FLORA';
exports.RIGHT_IS_KNOWN_FOR_HUMID_FLORA = 'RIGHT_IS_KNOWN_FOR_HUMID_FLORA';
exports.LEFT_HAS_HOT_WATERS = 'LEFT_HAS_HOT_WATERS';
exports.RIGHT_HAS_HOT_WATERS = 'RIGHT_HAS_HOT_WATERS';
exports.LEFT_ITALIAN_AND_GERMANY_CULINARY = 'LEFT_ITALIAN_AND_GERMANY_CULINARY';
exports.RIGHT_ITALIAN_AND_GERMANY_CULINARY = 'RIGHT_ITALIAN_AND_GERMANY_CULINARY';
exports.LEFT_IS_ABROAD_CAPITAL = 'LEFT_IS_ABROAD_CAPITAL';
exports.RIGHT_IS_ABROAD_CAPITAL = 'RIGHT_IS_ABROAD_CAPITAL';
exports.LEFT_BEST_SALARIES_IN_WORLD = 'LEFT_BEST_SALARIES_IN_WORLD';
exports.RIGHT_BEST_SALARIES_IN_WORLD = 'RIGHT_BEST_SALARIES_IN_WORLD';
exports.LEFT_IS_AN_ISLAND = 'LEFT_IS_AN_ISLAND';
exports.RIGHT_IS_AN_ISLAND = 'RIGHT_IS_AN_ISLAND';
exports.LEFT_HAS_A_BIG_STRAIGHT_TOWER = 'LEFT_HAS_A_BIG_STRAIGHT_TOWER';
exports.RIGHT_HAS_A_BIG_STRAIGHT_TOWER = 'RIGHT_HAS_A_BIG_STRAIGHT_TOWER';
exports.START = 'START';


/***/ }),

/***/ "./src/definitions/index.ts":
/*!**********************************!*\
  !*** ./src/definitions/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.definitions = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
const definitionsFirstLayer = [
    {
        value: 'É uma capital?',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_IN_BRASIL),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_CAPITAL),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_CAPITAL),
    },
    {
        value: 'Está em uma das américas?',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_IN_BRASIL),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_IN_AMERICAS),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_IN_AMERICAS),
    },
];
const definitionsSecondLayer = [
    {
        value: 'Está perto da costa?',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_CAPITAL),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_CLOSE_TO_COAST),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_CLOSE_TO_COAST),
    },
    {
        value: 'É famosa por suas águas?',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_CAPITAL),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_FAMOUS_FOR_ITS_WATERS),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_FAMOUS_FOR_ITS_WATERS),
    },
    {
        value: 'É famosa por sua culinária picante?',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_IN_AMERICAS),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_FAMOUS_FOR_CULINARY),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_FAMOUS_FOR_CULINARY),
    },
    {
        value: 'Tem animais exóticos?',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_IN_AMERICAS),
        leftSymbol: Symbol.for(constants_1.LEFT_EXOTIC_ANIMALS),
        rightSymbol: Symbol.for(constants_1.RIGHT_EXOTIC_ANIMALS),
    },
];
const definitionThirdLayer = [
    {
        value: 'Está no nordeste?',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_CLOSE_TO_COAST),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_IN_NORTHEAST),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_IN_NORTHEAST),
    },
    {
        value: 'É conhecido pela sua flora úmida?',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_CLOSE_TO_COAST),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_KNOWN_FOR_HUMID_FLORA),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_KNOWN_FOR_HUMID_FLORA),
    },
    {
        value: 'Tem águas quentes?',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_FAMOUS_FOR_ITS_WATERS),
        leftSymbol: Symbol.for(constants_1.LEFT_HAS_HOT_WATERS),
        rightSymbol: Symbol.for(constants_1.RIGHT_HAS_HOT_WATERS),
    },
    {
        value: 'Tem a culinária derivada de italiana e alemã?',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_FAMOUS_FOR_ITS_WATERS),
        leftSymbol: Symbol.for(constants_1.LEFT_ITALIAN_AND_GERMANY_CULINARY),
        rightSymbol: Symbol.for(constants_1.RIGHT_ITALIAN_AND_GERMANY_CULINARY),
    },
    {
        value: 'É capital?',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_FAMOUS_FOR_CULINARY),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_ABROAD_CAPITAL),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_ABROAD_CAPITAL),
    },
    {
        value: 'Tem um das maiores médias saláriais do mundo?',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_FAMOUS_FOR_CULINARY),
        leftSymbol: Symbol.for(constants_1.LEFT_BEST_SALARIES_IN_WORLD),
        rightSymbol: Symbol.for(constants_1.RIGHT_BEST_SALARIES_IN_WORLD),
    },
    {
        value: 'Está uma ilha?',
        currentSymbol: Symbol.for(constants_1.RIGHT_EXOTIC_ANIMALS),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_AN_ISLAND),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_AN_ISLAND),
    },
    {
        value: 'Tem uma grande torre reta?',
        currentSymbol: Symbol.for(constants_1.LEFT_EXOTIC_ANIMALS),
        leftSymbol: Symbol.for(constants_1.LEFT_HAS_A_BIG_STRAIGHT_TOWER),
        rightSymbol: Symbol.for(constants_1.RIGHT_HAS_A_BIG_STRAIGHT_TOWER),
    },
];
const definitionFourthLayer = [
    {
        value: 'Salvador',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_IN_NORTHEAST),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Rio de Janeiro',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_IN_NORTHEAST),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Goiânia',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_KNOWN_FOR_HUMID_FLORA),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Cuiabá',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_KNOWN_FOR_HUMID_FLORA),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Pirenópolis',
        currentSymbol: Symbol.for(constants_1.RIGHT_HAS_HOT_WATERS),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Foz do Iguaçu',
        currentSymbol: Symbol.for(constants_1.LEFT_HAS_HOT_WATERS),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Gramado',
        currentSymbol: Symbol.for(constants_1.RIGHT_ITALIAN_AND_GERMANY_CULINARY),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Campos do Jordão',
        currentSymbol: Symbol.for(constants_1.LEFT_ITALIAN_AND_GERMANY_CULINARY),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Cidade do México',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_ABROAD_CAPITAL),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Buffalo',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_ABROAD_CAPITAL),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Palo Alto',
        currentSymbol: Symbol.for(constants_1.RIGHT_BEST_SALARIES_IN_WORLD),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Washington',
        currentSymbol: Symbol.for(constants_1.LEFT_BEST_SALARIES_IN_WORLD),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Antananarivo',
        currentSymbol: Symbol.for(constants_1.RIGHT_IS_AN_ISLAND),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Primorsky',
        currentSymbol: Symbol.for(constants_1.LEFT_IS_AN_ISLAND),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Paris',
        currentSymbol: Symbol.for(constants_1.RIGHT_HAS_A_BIG_STRAIGHT_TOWER),
        leftSymbol: null,
        rightSymbol: null,
    },
    {
        value: 'Madrid',
        currentSymbol: Symbol.for(constants_1.LEFT_HAS_A_BIG_STRAIGHT_TOWER),
        leftSymbol: null,
        rightSymbol: null,
    },
];
exports.definitions = [
    {
        value: 'É no Brasil?',
        currentSymbol: Symbol.for(constants_1.START),
        leftSymbol: Symbol.for(constants_1.LEFT_IS_IN_BRASIL),
        rightSymbol: Symbol.for(constants_1.RIGHT_IS_IN_BRASIL),
    },
    ...definitionsFirstLayer,
    ...definitionsSecondLayer,
    ...definitionThirdLayer,
    ...definitionFourthLayer,
];


/***/ }),

/***/ "./src/treeNode/index.ts":
/*!*******************************!*\
  !*** ./src/treeNode/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTree = exports.TreeNode = void 0;
class TreeNode {
    constructor(value, token, rNode, lNode) {
        this.value = value;
        this.right = rNode || null;
        this.left = lNode || null;
        this.token = token;
    }
}
exports.TreeNode = TreeNode;
const createTree = (defs) => {
    const startNode = defs[0];
    if (!startNode) {
        throw new Error('No start node');
    }
    const tree = new TreeNode(startNode.value, startNode.currentSymbol);
    populateNodes(tree, defs);
    return tree;
};
exports.createTree = createTree;
const populateNodes = (node, defs) => {
    const defCurrentNode = defs.find((d) => d.currentSymbol === node.token);
    if (!defCurrentNode) {
        throw new Error('Current node symbol not found');
    }
    const rCurrentNode = defs.find((d) => d.currentSymbol === defCurrentNode.rightSymbol);
    const lCurrentNode = defs.find((d) => d.currentSymbol === defCurrentNode.leftSymbol);
    if (rCurrentNode) {
        node.right = new TreeNode(rCurrentNode.value, rCurrentNode.currentSymbol);
    }
    if (lCurrentNode) {
        node.left = new TreeNode(lCurrentNode.value, lCurrentNode.currentSymbol);
    }
    if (node.right) {
        populateNodes(node.right, defs);
    }
    if (node.left) {
        populateNodes(node.left, defs);
    }
};


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(/*! ./treeNode/index */ "./src/treeNode/index.ts");
const index_2 = __webpack_require__(/*! ./definitions/index */ "./src/definitions/index.ts");
__webpack_require__(/*! ./index.css */ "./src/index.css");
const tree = (0, index_1.createTree)(index_2.definitions);
const root = document.createElement('div');
root.id = 'root';
(_a = document.getElementsByTagName('body')[0]) === null || _a === void 0 ? void 0 : _a.appendChild(root);
const showNode = (node) => {
    const createResponseListener = (node) => () => showNode(node);
    root.innerHTML = '';
    const container = document.createElement('div');
    container.innerText = node.value;
    root.appendChild(container);
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    container.appendChild(buttonContainer);
    if (node.right) {
        const yesButton = document.createElement('button');
        yesButton.innerText = 'Sim';
        buttonContainer.appendChild(yesButton);
        yesButton.addEventListener('click', createResponseListener(node.right));
    }
    if (node.left) {
        const noButton = document.createElement('button');
        noButton.innerText = 'Não';
        buttonContainer.appendChild(noButton);
        noButton.addEventListener('click', createResponseListener(node.left));
    }
};
showNode(tree);

})();

/******/ })()
;
//# sourceMappingURL=main-bundle.js.map