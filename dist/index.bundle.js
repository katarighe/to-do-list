/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://use.fontawesome.com/releases/v6.0.0/css/all.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #ffdab9;\r\n}\r\n\r\n.to-do-container {\r\n  display: grid;\r\n  width: 150%;\r\n  min-height: 50vh;\r\n  margin: 10vh 0;\r\n  background-color: #fff;\r\n  box-shadow: 0 10px 10px rgba(10, 10, 10, 0.15);\r\n  border-radius: 10px;\r\n  padding-bottom: 100px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.to-do-list-group {\r\n  width: 100%;\r\n}\r\n\r\n.to-do-list {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  width: calc(100% - 40px);\r\n  padding: 0 20px;\r\n  border-bottom: 1px #ddd solid;\r\n}\r\n\r\n.to-do-intro {\r\n  font-size: 15px;\r\n  background-color: #f5f5dc;\r\n}\r\n\r\n.to-do-intro-title {\r\n  font-size: 20px;\r\n  color: #000;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: #f5f5dc;\r\n}\r\n\r\n.to-do-intro i {\r\n  font-size: 15px;\r\n  opacity: 0.5;\r\n  color: #333;\r\n}\r\n\r\n.to-do-add * {\r\n  color: #ddd;\r\n}\r\n\r\n.to-do-add input {\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  color: #000;\r\n  background-color: transparent;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  text-align: center;\r\n}\r\n\r\n.to-do-add input::placeholder {\r\n  color: #808080;\r\n}\r\n\r\n.to-do-add i {\r\n  font-size: 12px;\r\n}\r\n\r\n.uncheck-icon,\r\n.check-icon {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check-icon {\r\n  background: transparent;\r\n  color: #2e2e2e;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.uncheck-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n  border: 2px #ddd solid;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\n.to-do-item input {\r\n  width: calc(100% - 30px);\r\n  padding: 0 15px;\r\n  font-size: 14px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  text-align: start;\r\n}\r\n\r\n.decorate {\r\n  opacity: 0.5;\r\n  color: #333;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.undecorate {\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n\r\n.delete-icon,\r\n.more-icon {\r\n  font-size: 20px;\r\n  opacity: 0.5;\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-icon {\r\n  display: none;\r\n}\r\n\r\n.more-icon {\r\n  display: block;\r\n}\r\n\r\n.to-do-item-more {\r\n  font-size: 16px;\r\n  opacity: 0.5;\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n.more-icon:hover {\r\n  color: #800080;\r\n}\r\n\r\n.clear-to-do-list {\r\n  width: 100%;\r\n  height: 45px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  outline: none;\r\n  border: 1px;\r\n  background-color: #f5f5dc;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-to-do-list span {\r\n  color: #ec5242;\r\n}\r\n\r\n.clear-to-do-list span:hover {\r\n  opacity: 1;\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n\r\n.edit-focus-element {\r\n  content: \"\";\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  z-index: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.delete-icon:active {\r\n  display: block;\r\n}\r\n\r\n.delete-icon:hover {\r\n  color: #f00;\r\n}\r\n\r\n.edit-to-do:focus ~ .edit-focus-element {\r\n  background-color: #fffcbf;\r\n}\r\n\r\n.edit-to-do:focus ~ .delete-icon {\r\n  display: block;\r\n}\r\n\r\n.edit-to-do:focus ~ .more-icon {\r\n  display: none;\r\n}\r\n\r\n.delete-icon:active ~ .more-icon {\r\n  display: none;\r\n}\r\n\r\n.refresh-icon {\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.refresh-icon::before {\r\n  font-size: 20px;\r\n}\r\n\r\n.refresh-icon:hover {\r\n  opacity: 1;\r\n  color: #add8e6;\r\n  text-decoration: none;\r\n}\r\n\r\n.add-icon {\r\n  color: #808080;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-icon::before {\r\n  font-size: 20px;\r\n}\r\n\r\n.add-icon:hover {\r\n  opacity: 1;\r\n  color: #90ee90;\r\n  text-decoration: none;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/taskStatus.js */ \"./src/modules/taskStatus.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst listGroup = document.querySelector('.to-do-group');\r\nconst newTask = document.querySelector('.to-do-add').querySelector('input');\r\nconst submitIcon = document.querySelector('.to-do-add').querySelector('i');\r\nnewTask.addEventListener('keypress', (event) => (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.addmyTask)(event));\r\nsubmitIcon.addEventListener('click', () => (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.addmyTask)('clicked'));\r\n\r\nlistGroup.addEventListener('click', (event) => {\r\n  const clickedItem = event.target.classList[event.target.classList.length - 1];\r\n  if (clickedItem === 'refresh-icon') {\r\n    window.location.reload();\r\n  }\r\n\r\n  const li = event.target.parentElement;\r\n  if (clickedItem === 'add-icon') (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.addmyTask)(li.id);\r\n  if (clickedItem === 'delete-icon') (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.deletemyTask)(li.id);\r\n  if (clickedItem === 'check-icon') (0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__.changeTaskStatus)({ index: li.id, status: false });\r\n  if (clickedItem === 'uncheck-icon') (0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__.changeTaskStatus)({ index: li.id, status: true });\r\n});\r\n\r\nlistGroup.addEventListener('keypress', (event) => {\r\n  const pressedItem = event.target.classList[event.target.classList.length - 1];\r\n  const li = event.target.parentElement;\r\n  if (pressedItem === 'edit-to-do') (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.editmyTask)({ index: li.id, event });\r\n});\r\n\r\nconst clearCompleted = document.querySelector('.clear-to-do-list');\r\nclearCompleted.addEventListener('click', _modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__.removeCompletedTasks);\r\n\r\nwindow.addEventListener('load', () => { (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.getmyTask)(); });\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addmyTask: () => (/* binding */ addmyTask),\n/* harmony export */   deletemyTask: () => (/* binding */ deletemyTask),\n/* harmony export */   editmyTask: () => (/* binding */ editmyTask),\n/* harmony export */   getmyTask: () => (/* binding */ getmyTask),\n/* harmony export */   myTask: () => (/* binding */ myTask),\n/* harmony export */   updateInterface: () => (/* binding */ updateInterface)\n/* harmony export */ });\nlet myTask = JSON.parse(localStorage.getItem('myTask')) || [];\r\n\r\nconst taskGroup = document.querySelector('.to-do-group');\r\nconst newTask = document.querySelector('.to-do-add').querySelector('input');\r\n\r\nconst getmyTask = () => {\r\n  const myTaskElement = myTask\r\n    .map(\r\n      (item) => `\r\n  <li class='to-do-list to-do-item' id=${item.index}>\r\n  ${\r\n  item.completed === true\r\n    ? `\r\n  <i class=\"fa-solid fa-square-check check-icon\" title=\"Mark task as incomplete\"></i>`\r\n    : '<i class=\"fa-solid fa-square uncheck-icon\" title=\"Mark task as complete\"></i>'\r\n}\r\n      <input type=\"text\" class=${\r\n  item.completed === true ? 'decoration edit-to-do' : 'edit-to-do'\r\n}  value='${item.description}' title=\"Edit this task\">\r\n          <span class='edit-focus-element'></span>\r\n          <i class='fa-solid fa-trash delete-icon' title='Remove a task'></i>\r\n          <i class='fa-solid fa-ellipsis-vertical more-icon' title='See more'></i>\r\n        </li>`\r\n    )\r\n    .join('');\r\n  taskGroup.innerHTML = myTaskElement;\r\n  return taskGroup;\r\n};\r\n\r\nconst updateInterface = (data) => {\r\n  myTask = data;\r\n  getmyTask();\r\n};\r\n\r\nconst addmyTask = (event) => {\r\n  if (newTask.value === '') return;\r\n  if (event.key === 'Enter' || event === 'clicked') {\r\n    const myTaskElement = {\r\n      description: newTask.value,\r\n      completed: false,\r\n      index: myTask.length + 1,\r\n    };\r\n    newTask.value = '';\r\n    myTask = [...myTask, myTaskElement];\r\n    localStorage.setItem('myTask', JSON.stringify(myTask));\r\n    getmyTask();\r\n  }\r\n};\r\n\r\nconst editmyTask = ({ index, event }) => {\r\n  if (event.target.value === '') return;\r\n  event.target.addEventListener('blur', () => {\r\n    myTask[index - 1].description = event.target.value;\r\n    localStorage.setItem('myTask', JSON.stringify(myTask));\r\n  });\r\n};\r\n\r\nconst deletemyTask = (targetIndex) => {\r\n  const filterTask = myTask.filter((task) => +task.index !== +targetIndex);\r\n  const newmyTask = filterTask.map((task, index) => ({\r\n    description: task.description,\r\n    completed: task.completed,\r\n    index: index + 1,\r\n  }));\r\n  localStorage.setItem('myTask', JSON.stringify(newmyTask));\r\n  myTask = newmyTask;\r\n  getmyTask();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/taskStatus.js":
/*!***********************************!*\
  !*** ./src/modules/taskStatus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeTaskStatus: () => (/* binding */ changeTaskStatus),\n/* harmony export */   removeCompletedTasks: () => (/* binding */ removeCompletedTasks)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/modules/functions.js\");\n\r\n\r\nconst changeTaskStatus = ({ index, status }) => {\r\n  _functions_js__WEBPACK_IMPORTED_MODULE_0__.myTask[index - 1].completed = status;\r\n  localStorage.setItem('myTask', JSON.stringify(_functions_js__WEBPACK_IMPORTED_MODULE_0__.myTask));\r\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.getmyTask)();\r\n};\r\n\r\nconst removeCompletedTasks = () => {\r\n  const uncompletedTasks = _functions_js__WEBPACK_IMPORTED_MODULE_0__.myTask.filter((task) => task.completed !== true);\r\n  const newTasks = uncompletedTasks.map((task, index) => {\r\n    task.index = index + 1;\r\n    return task;\r\n  });\r\n\r\n  localStorage.setItem('myTask', JSON.stringify(newTasks));\r\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateInterface)(newTasks);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/taskStatus.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;