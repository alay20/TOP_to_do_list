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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n/* Header */\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid rgb(0, 0, 0);\n}\n\n.menu-btn {\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    cursor: pointer;\n    margin-left: 50px;\n}\n\n.menu-btn,\n.menu-btn-icon {\n    width: 50px;\n    height: auto;\n}\n\n.light-dark-btn {\n    margin-right: 50px;\n    height: 50px;\n    align-self: center;\n}\n\n.logo-cont {\n    display: flex;\n\n}\n\n/* Main content container */\n#main-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n/* Left Container */\n\n/* Task Filter */\n#left-container {\n    border-right: 2px solid rgb(0, 0, 0);;\n}\n\nnav {\n    margin-top: 25px;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\nul li {\n    display: block;\n    list-style: none;\n}\n\nli img,\nli .filters-text {\n    display: inline-block;\n}\n\nul li img,\nul li .filters-text {\n    vertical-align: middle;\n}\n\n.icons {\n    width: 25px;\n    height: auto;\n    margin-right: 5px;\n    cursor: pointer;\n}\n\n.task-filter {\n    margin-left: 25px;\n    cursor: pointer;\n}\n\n/* Projects */\n.add-projects-div,\n.add-new-project-form-cont,\n.projects-list {\n    margin-left: 25px;\n}\n\n.add-new-project-form-cont {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n#projects-header {\n    margin-left: 20px;\n    margin-right: 20px;\n    border-bottom: 2px solid rgb(0, 0, 0);\n}\n\n.add-projects-txt,\n.list-project-txt,\n.projects-list {\n    cursor: pointer;\n}\n\n.add-projects-div {\n    display: flex;\n    align-items: center;\n}\n\nul img,\nul .add-projects-txt,\nul .list-project-txt {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.add-project-icon {\n    grid-area: icon;\n}\n\n.enter-project-label {\n    grid-area: label;\n}\n\n.enter-project-input {\n    grid-area: input;\n}\n\n.add-project-btn {\n    grid-area: addbtn;\n}\n\n.cancel-add-btn {\n    grid-area: cancelbtn;\n}\n\n.add-new-project-form-cont {\n    margin-right: 25px;\n    display: grid;\n    grid-template-columns: 0.3fr 1fr 1fr 1fr;\n    grid-template-areas: \n        \"icon input input input\"\n        \". addbtn cancelbtn .\";\n}\n\n.projects-buttons {\n    width: 75px;\n    margin-top: 10px;\n}\n\n.list-project-txt {\n    width: 160px;\n}\n\n.error-message {\n    color: rgb(255, 0, 0);\n    font-weight: bold;\n    margin: 15px 15px 15px 25px;\n}\n\n/* Right Container */\n#right-container {\n    display: flex;\n    flex-direction: column;\n    margin: 20px 30px;\n}\n\n.project-title-cont {\n    border: 2.5px solid rgb(0, 0, 0);\n    border-radius: 4px;\n    font-size: xxx-large;\n    padding: 15px 10px;\n}\n\n.open-add-task-btn-cont {\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-task-btn {\n    cursor: pointer;\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n}\n\n.enter-task-input {\n    grid-area: task;\n    margin-bottom: 15px;\n    font-size: 15px;\n    padding: 5px;\n}\n\n.enter-notes-input {\n    grid-area: notes;\n    margin-bottom: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    padding: 5px;\n}\n\n.enter-date-input {\n    grid-area: date;\n    margin-bottom: 15px;\n}\n\n.form-add-task-btn {\n    grid-area: add; \n}\n\n.form-cancel-add-task-btn {\n    grid-area: cancel;\n}\n\n.form-task-btns {\n    width: 75px;\n    margin-top: 10px;\n    justify-self: center;\n}\n\n.add-task-form-cont {\n    border: 2.5px solid rgb(0, 0, 0);\n    border-radius: 4px;\n    padding: 15px 10px;\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-areas: \n    \"task task task task\"\n    \"notes notes notes notes\"\n    \"date date date date\"\n    \". add cancel .\";\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top_to_do_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top_to_do_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top_to_do_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addProjectFactoryFunction.js":
/*!******************************************!*\
  !*** ./src/addProjectFactoryFunction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nconst createProject = (projectName) => {\n\n    const getProjectName = () => projectName; \n\n    return { getProjectName };\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/addProjectFactoryFunction.js?");

/***/ }),

/***/ "./src/addProjectsAddBtn.js":
/*!**********************************!*\
  !*** ./src/addProjectsAddBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectsToObj: () => (/* binding */ addProjectsToObj)\n/* harmony export */ });\n/* harmony import */ var _addProjectFactoryFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectFactoryFunction */ \"./src/addProjectFactoryFunction.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\n\nconst addProjectsToObj = () => {\n    const newProjectName = _utils__WEBPACK_IMPORTED_MODULE_1__.enterProjectTitleInput.value;\n    _utils__WEBPACK_IMPORTED_MODULE_1__.enterProjectTitleInput.value = '';\n\n    const newProject = (0,_addProjectFactoryFunction__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProjectName);\n\n    _data__WEBPACK_IMPORTED_MODULE_2__.allProjects[newProjectName] = newProject;\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/addProjectsAddBtn.js?");

/***/ }),

/***/ "./src/addProjectsAddBtnDom.js":
/*!*************************************!*\
  !*** ./src/addProjectsAddBtnDom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectsToListDom: () => (/* binding */ addProjectsToListDom)\n/* harmony export */ });\n/* harmony import */ var _icons_folder_cog_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/folder-cog.svg */ \"./src/icons/folder-cog.svg\");\n/* harmony import */ var _icons_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/dots-vertical.svg */ \"./src/icons/dots-vertical.svg\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\nconst addProjectsToListDom = () => {\n    const newProjectName = _utils__WEBPACK_IMPORTED_MODULE_2__.enterProjectTitleInput.value;\n    const projectNames = Object.keys(allProjects) ;\n    \n    //Determine if project name already exists\n    if (projectNames.includes(newProjectName)) {\n        _utils__WEBPACK_IMPORTED_MODULE_2__.addNewProjectCont.insertAdjacentElement('afterend', _utils__WEBPACK_IMPORTED_MODULE_2__.projectNameErrorMsg);\n        // addNewProjectCont.append(projectNameErrorMsg);\n        return;\n    } else {\n        _utils__WEBPACK_IMPORTED_MODULE_2__.addNewProjectCont.remove();\n        _utils__WEBPACK_IMPORTED_MODULE_2__.projectNameErrorMsg.remove();\n        \n        const newProjectLi = document.createElement('li');\n\n        const projectIcon = new Image();\n        projectIcon.src = _icons_folder_cog_svg__WEBPACK_IMPORTED_MODULE_0__;\n        projectIcon.classList.add('icons');\n        projectIcon.classList.add('add-project-icon');\n\n        \n        const projectMenuIcon = new Image();\n        projectMenuIcon.src = _icons_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__;\n        projectMenuIcon.classList.add('icons');\n        projectMenuIcon.classList.add('project-menu');\n\n        \n        const newProjectNameText = document.createElement('div');\n        newProjectNameText.classList.add('list-project-txt');\n        newProjectNameText.textContent = _utils__WEBPACK_IMPORTED_MODULE_2__.enterProjectTitleInput.value;\n\n        newProjectLi.dataset.projectTitle = _utils__WEBPACK_IMPORTED_MODULE_2__.enterProjectTitleInput.value;\n        \n        newProjectLi.append(projectIcon, newProjectNameText, projectMenuIcon);\n        \n        //append icon and new project name to project list\n        _utils__WEBPACK_IMPORTED_MODULE_2__.projectsList.appendChild(newProjectLi);\n    }\n};\n\n\n//# sourceURL=webpack://top_to_do_list/./src/addProjectsAddBtnDom.js?");

/***/ }),

/***/ "./src/cancelAddProject.js":
/*!*********************************!*\
  !*** ./src/cancelAddProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelAddProject: () => (/* binding */ cancelAddProject)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst cancelAddProject = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.addNewProjectCont.remove();\n    _utils__WEBPACK_IMPORTED_MODULE_0__.projectNameErrorMsg.remove();\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterProjectTitleInput.value = '';\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/cancelAddProject.js?");

/***/ }),

/***/ "./src/cancelAddTask.js":
/*!******************************!*\
  !*** ./src/cancelAddTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelAddTask: () => (/* binding */ cancelAddTask)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst cancelAddTask = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.addTaskInputCont.remove();\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterTaskNameInput.value = \"\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterTaskNotesInput.value = \"\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterTaskDateInput.value = \"\";\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/cancelAddTask.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allProjects: () => (/* binding */ allProjects),\n/* harmony export */   allTasks: () => (/* binding */ allTasks)\n/* harmony export */ });\nconst allProjects = {}; \n\nconst allTasks = {}; \n\n\n//Delete when project complete\nwindow.allProjects = allProjects;\n\n\n\n//# sourceURL=webpack://top_to_do_list/./src/data.js?");

/***/ }),

/***/ "./src/displayAddProjectsForm.js":
/*!***************************************!*\
  !*** ./src/displayAddProjectsForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openAddNewProject: () => (/* binding */ openAddNewProject)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst openAddNewProject = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.addProjectsDiv.insertAdjacentElement('afterend', _utils__WEBPACK_IMPORTED_MODULE_0__.addNewProjectCont);\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterProjectTitleInput.focus();\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/displayAddProjectsForm.js?");

/***/ }),

/***/ "./src/displayAddTaskForm.js":
/*!***********************************!*\
  !*** ./src/displayAddTaskForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddTaskForm: () => (/* binding */ displayAddTaskForm)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst displayAddTaskForm = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.rightContainer.insertBefore(_utils__WEBPACK_IMPORTED_MODULE_0__.addTaskInputCont, _utils__WEBPACK_IMPORTED_MODULE_0__.openAddTaskBtnCont);\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterTaskNameInput.focus();\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/displayAddTaskForm.js?");

/***/ }),

/***/ "./src/displayClickedProjectTitle.js":
/*!*******************************************!*\
  !*** ./src/displayClickedProjectTitle.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClickedProjectTitle: () => (/* binding */ createClickedProjectTitle)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\nconst createClickedProjectTitle = (e) => {\n    console.log('Event Target:', e.target);\n    \n    const liWithDataset = e.target.closest('li');\n    \n    if (liWithDataset) {\n        var projectTitle = liWithDataset.dataset.projectTitle;\n    }\n    \n    console.log('Project Title:', _data__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectTitle].getProjectName());\n    _utils__WEBPACK_IMPORTED_MODULE_0__.projectTitleCont.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectTitle].getProjectName();\n};\n\n\n\n//# sourceURL=webpack://top_to_do_list/./src/displayClickedProjectTitle.js?");

/***/ }),

/***/ "./src/displayDefaulProjectTitle.js":
/*!******************************************!*\
  !*** ./src/displayDefaulProjectTitle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDefaultAllTasksTitle: () => (/* binding */ createDefaultAllTasksTitle)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst createDefaultAllTasksTitle = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.projectTitleCont.textContent = \"All Tasks\";\n    _utils__WEBPACK_IMPORTED_MODULE_0__.rightContainer.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__.projectTitleCont);\n};\n\n//# sourceURL=webpack://top_to_do_list/./src/displayDefaulProjectTitle.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _icons_format_list_checks_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/format-list-checks.svg */ \"./src/icons/format-list-checks.svg\");\n/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/menu.svg */ \"./src/icons/menu.svg\");\n\n\n\n\n\nconst createHeader = () => {\n    \n    //Menu button\n        //Create elements\n        _utils__WEBPACK_IMPORTED_MODULE_0__.menuBtn.classList.add('menu-btn');\n\n        const menuBtnIcon = new Image ();\n        menuBtnIcon.src = _icons_menu_svg__WEBPACK_IMPORTED_MODULE_2__;\n        menuBtnIcon.classList.add('menu-btn-icon');\n        _utils__WEBPACK_IMPORTED_MODULE_0__.menuBtn.appendChild(menuBtnIcon);\n\n\n    //Page title\n        //Create elements\n        const logoContainer = document.createElement('div');\n        logoContainer.classList.add('logo-cont');\n        \n        const pageLogoTxt = document.createElement('h1');\n        pageLogoTxt.textContent = 'Todo List';\n        \n        const logoIcon = new Image ();\n        logoIcon.src = _icons_format_list_checks_svg__WEBPACK_IMPORTED_MODULE_1__;\n\n    //Light-dark mode button\n        const lightDarkBtn = document.createElement('button');\n        lightDarkBtn.classList.add('light-dark-btn');\n        lightDarkBtn.textContent = 'Light-Dark Mode';\n        \n\n    //Append elements\n        _utils__WEBPACK_IMPORTED_MODULE_0__.header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__.menuBtn);\n        _utils__WEBPACK_IMPORTED_MODULE_0__.header.appendChild(logoContainer);\n        _utils__WEBPACK_IMPORTED_MODULE_0__.header.appendChild(lightDarkBtn);\n        logoContainer.appendChild(logoIcon);\n        logoContainer.appendChild(pageLogoTxt);\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _taskFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFilter */ \"./src/taskFilter.js\");\n/* harmony import */ var _projectsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsList */ \"./src/projectsList.js\");\n/* harmony import */ var _displayDefaulProjectTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayDefaulProjectTitle */ \"./src/displayDefaulProjectTitle.js\");\n/* harmony import */ var _menuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuButton */ \"./src/menuButton.js\");\n/* harmony import */ var _displayAddProjectsForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayAddProjectsForm */ \"./src/displayAddProjectsForm.js\");\n/* harmony import */ var _addProjectsAddBtnDom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addProjectsAddBtnDom */ \"./src/addProjectsAddBtnDom.js\");\n/* harmony import */ var _cancelAddProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cancelAddProject */ \"./src/cancelAddProject.js\");\n/* harmony import */ var _addProjectsAddBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addProjectsAddBtn */ \"./src/addProjectsAddBtn.js\");\n/* harmony import */ var _keyPressEnterAddProject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keyPressEnterAddProject */ \"./src/keyPressEnterAddProject.js\");\n/* harmony import */ var _displayClickedProjectTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./displayClickedProjectTitle */ \"./src/displayClickedProjectTitle.js\");\n/* harmony import */ var _projectPageDisplayAddTask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projectPageDisplayAddTask */ \"./src/projectPageDisplayAddTask.js\");\n/* harmony import */ var _displayAddTaskForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./displayAddTaskForm */ \"./src/displayAddTaskForm.js\");\n/* harmony import */ var _cancelAddTask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cancelAddTask */ \"./src/cancelAddTask.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import { addProjectsErrorMsg } from './addProjectsErrorMessage';\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)();\n(0,_taskFilter__WEBPACK_IMPORTED_MODULE_3__.createTaskFilter)();\n(0,_projectsList__WEBPACK_IMPORTED_MODULE_4__.createProjectsMenu)();\n(0,_displayDefaulProjectTitle__WEBPACK_IMPORTED_MODULE_5__.createDefaultAllTasksTitle)();\n\n_utils__WEBPACK_IMPORTED_MODULE_1__.menuBtn.addEventListener('click', _menuButton__WEBPACK_IMPORTED_MODULE_6__.showMenu);\n\n_utils__WEBPACK_IMPORTED_MODULE_1__.addProjectsDiv.addEventListener('click', _displayAddProjectsForm__WEBPACK_IMPORTED_MODULE_7__.openAddNewProject);\n\n// addProjectBtn.addEventListener('click', addProjectsErrorMsg);\n_utils__WEBPACK_IMPORTED_MODULE_1__.addProjectBtn.addEventListener('click', _addProjectsAddBtnDom__WEBPACK_IMPORTED_MODULE_8__.addProjectsToListDom);\n_utils__WEBPACK_IMPORTED_MODULE_1__.addProjectBtn.addEventListener('click', _addProjectsAddBtn__WEBPACK_IMPORTED_MODULE_10__.addProjectsToObj);\n\n\n_utils__WEBPACK_IMPORTED_MODULE_1__.enterProjectTitleInput.addEventListener('keypress', _keyPressEnterAddProject__WEBPACK_IMPORTED_MODULE_11__.keyPressEnterAddProject);\n\n_utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddProjectBtn.addEventListener('click', _cancelAddProject__WEBPACK_IMPORTED_MODULE_9__.cancelAddProject);\n\n_utils__WEBPACK_IMPORTED_MODULE_1__.projectsList.addEventListener('click', _displayClickedProjectTitle__WEBPACK_IMPORTED_MODULE_12__.createClickedProjectTitle);\n_utils__WEBPACK_IMPORTED_MODULE_1__.projectsList.addEventListener('click', _projectPageDisplayAddTask__WEBPACK_IMPORTED_MODULE_13__.displayAddTaskElements);\n\n\n//Task Form\n_utils__WEBPACK_IMPORTED_MODULE_1__.openAddTaskBtnCont.addEventListener('click', _displayAddTaskForm__WEBPACK_IMPORTED_MODULE_14__.displayAddTaskForm);\n_utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddTaskBtn.addEventListener('click', _cancelAddTask__WEBPACK_IMPORTED_MODULE_15__.cancelAddTask);\n\n//# sourceURL=webpack://top_to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/keyPressEnterAddProject.js":
/*!****************************************!*\
  !*** ./src/keyPressEnterAddProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keyPressEnterAddProject: () => (/* binding */ keyPressEnterAddProject)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst keyPressEnterAddProject = (e) => {\n    if (e.keyCode === 13) {\n        _utils__WEBPACK_IMPORTED_MODULE_0__.addProjectBtn.click();\n    }\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/keyPressEnterAddProject.js?");

/***/ }),

/***/ "./src/menuButton.js":
/*!***************************!*\
  !*** ./src/menuButton.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nconst showMenu = () => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_0__.mainContainer.children.length === 2) {\n        _utils__WEBPACK_IMPORTED_MODULE_0__.leftContainer.remove();\n    } else if (_utils__WEBPACK_IMPORTED_MODULE_0__.mainContainer.children.length === 1) {\n        _utils__WEBPACK_IMPORTED_MODULE_0__.mainContainer.insertBefore(_utils__WEBPACK_IMPORTED_MODULE_0__.leftContainer, _utils__WEBPACK_IMPORTED_MODULE_0__.rightContainer);\n    }\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/menuButton.js?");

/***/ }),

/***/ "./src/projectPageDisplayAddTask.js":
/*!******************************************!*\
  !*** ./src/projectPageDisplayAddTask.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddTaskElements: () => (/* binding */ displayAddTaskElements)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst displayAddTaskElements = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.rightContainer.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__.openAddTaskBtnCont);\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/projectPageDisplayAddTask.js?");

/***/ }),

/***/ "./src/projectsList.js":
/*!*****************************!*\
  !*** ./src/projectsList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectsMenu: () => (/* binding */ createProjectsMenu)\n/* harmony export */ });\n/* harmony import */ var _icons_note_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/note-plus.svg */ \"./src/icons/note-plus.svg\");\n/* harmony import */ var _icons_folder_cog_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/folder-cog.svg */ \"./src/icons/folder-cog.svg\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\nconst createProjectsMenu = () => {\n    const projectsHeader = document.createElement('h2');\n    projectsHeader.textContent = 'Projects';\n    projectsHeader.setAttribute('id', 'projects-header');\n    \n    _utils__WEBPACK_IMPORTED_MODULE_2__.addProjectsDiv.classList.add('add-projects-div');\n\n    const addProjectsIcon = new Image();\n    addProjectsIcon.src = _icons_note_plus_svg__WEBPACK_IMPORTED_MODULE_0__;\n    addProjectsIcon.classList.add('icons');\n\n    const addProjects = document.createElement('div');\n    addProjects.textContent = 'Add Projects';\n    addProjects.classList.add('add-projects-txt');\n\n    _utils__WEBPACK_IMPORTED_MODULE_2__.addProjectsDiv.append(addProjectsIcon, addProjects);\n    \n    _utils__WEBPACK_IMPORTED_MODULE_2__.mainNav.append(projectsHeader, _utils__WEBPACK_IMPORTED_MODULE_2__.addProjectsDiv, _utils__WEBPACK_IMPORTED_MODULE_2__.projectsList);\n\n    //Create elements for adding new project and project name\n        const projectIcon = new Image();\n        projectIcon.src = _icons_folder_cog_svg__WEBPACK_IMPORTED_MODULE_1__;\n        projectIcon.classList.add('icons');\n        projectIcon.classList.add('add-project-icon');\n\n\n        // Append elements\n        _utils__WEBPACK_IMPORTED_MODULE_2__.addNewProjectCont.append(projectIcon, _utils__WEBPACK_IMPORTED_MODULE_2__.enterProjectTitleLabel, _utils__WEBPACK_IMPORTED_MODULE_2__.enterProjectTitleInput, _utils__WEBPACK_IMPORTED_MODULE_2__.addProjectBtn, _utils__WEBPACK_IMPORTED_MODULE_2__.cancelAddProjectBtn);\n        _utils__WEBPACK_IMPORTED_MODULE_2__.enterProjectTitleInput.focus();\n};\n\n\n\n    \n\n//# sourceURL=webpack://top_to_do_list/./src/projectsList.js?");

/***/ }),

/***/ "./src/taskFilter.js":
/*!***************************!*\
  !*** ./src/taskFilter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskFilter: () => (/* binding */ createTaskFilter)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _icons_all_inclusive_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/all-inclusive-box-outline.svg */ \"./src/icons/all-inclusive-box-outline.svg\");\n/* harmony import */ var _icons_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/calendar-today.svg */ \"./src/icons/calendar-today.svg\");\n/* harmony import */ var _icons_numeric_7_box_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/numeric-7-box-multiple-outline.svg */ \"./src/icons/numeric-7-box-multiple-outline.svg\");\n/* harmony import */ var _icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/star.svg */ \"./src/icons/star.svg\");\n\n\n\n\n\n\n\nconst createTaskFilter = () => {\n    \n    const tasksFilter = document.createElement('ul');\n    tasksFilter.setAttribute('id', 'task-filter');\n    \n    //All tasks elements\n    const liAllTasks = document.createElement('li');\n    liAllTasks.classList.add('task-filter');\n    liAllTasks.setAttribute('id', 'all-tasks');\n    \n    const txtAllTasks = document.createElement('div');\n    txtAllTasks.textContent = 'All Tasks';\n    txtAllTasks.classList.add('filters-text')\n\n    const iconAll = new Image();\n    iconAll.src = _icons_all_inclusive_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__;\n    iconAll.classList.add('icons');\n\n    liAllTasks.append(iconAll, txtAllTasks);\n\n    //Today elements\n    const liTodayTasks = document.createElement('li');\n    liTodayTasks.classList.add('task-filter');\n    liTodayTasks.setAttribute('id', 'today-tasks');\n    \n    const txtTodayTasks = document.createElement('div');\n    txtTodayTasks.textContent = 'Today';\n    txtTodayTasks.classList.add('filters-text')\n\n    const iconToday = new Image();\n    iconToday.src = _icons_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__;\n    iconToday.classList.add('icons');\n\n    liTodayTasks.append(iconToday, txtTodayTasks);\n\n\n    //Next 7 days elements\n    const liNxtSevenDays = document.createElement('li');\n    liNxtSevenDays.classList.add('task-filter');\n    liNxtSevenDays.setAttribute('id', 'next7days-tasks');\n    \n    const txtNxtSeven = document.createElement('div');\n    txtNxtSeven.textContent = 'Next 7 Days';\n    txtNxtSeven.classList.add('filters-text')\n\n    const iconNextSeven = new Image();\n    iconNextSeven.src = _icons_numeric_7_box_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_3__;\n    iconNextSeven.classList.add('icons');\n\n    liNxtSevenDays.append(iconNextSeven, txtNxtSeven);\n\n    //Important elements\n    const liImportantTasks = document.createElement('li');\n    \n    liImportantTasks.classList.add('task-filter');\n    liImportantTasks.setAttribute('id', 'important-tasks');\n    \n    const txtImportant = document.createElement('div');\n    txtImportant.textContent = 'Important';\n    txtImportant.classList.add('filters-text')\n\n    const iconImportant = new Image();\n    iconImportant.src = _icons_star_svg__WEBPACK_IMPORTED_MODULE_4__;\n    iconImportant.classList.add('icons');\n\n    liImportantTasks.append(iconImportant, txtImportant);\n\n\n    //Append nodes\n    _utils__WEBPACK_IMPORTED_MODULE_0__.leftContainer.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__.mainNav);\n    _utils__WEBPACK_IMPORTED_MODULE_0__.mainNav.appendChild(tasksFilter);\n    tasksFilter.append(liAllTasks, liTodayTasks, liNxtSevenDays, liImportantTasks);\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/taskFilter.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProjectCont: () => (/* binding */ addNewProjectCont),\n/* harmony export */   addProjectBtn: () => (/* binding */ addProjectBtn),\n/* harmony export */   addProjectsDiv: () => (/* binding */ addProjectsDiv),\n/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),\n/* harmony export */   addTaskInputCont: () => (/* binding */ addTaskInputCont),\n/* harmony export */   body: () => (/* binding */ body),\n/* harmony export */   cancelAddProjectBtn: () => (/* binding */ cancelAddProjectBtn),\n/* harmony export */   cancelAddTaskBtn: () => (/* binding */ cancelAddTaskBtn),\n/* harmony export */   enterProjectTitleInput: () => (/* binding */ enterProjectTitleInput),\n/* harmony export */   enterProjectTitleLabel: () => (/* binding */ enterProjectTitleLabel),\n/* harmony export */   enterTaskDateInput: () => (/* binding */ enterTaskDateInput),\n/* harmony export */   enterTaskDateLabel: () => (/* binding */ enterTaskDateLabel),\n/* harmony export */   enterTaskNameInput: () => (/* binding */ enterTaskNameInput),\n/* harmony export */   enterTaskNameLabel: () => (/* binding */ enterTaskNameLabel),\n/* harmony export */   enterTaskNotesInput: () => (/* binding */ enterTaskNotesInput),\n/* harmony export */   enterTaskNotesLabel: () => (/* binding */ enterTaskNotesLabel),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   leftContainer: () => (/* binding */ leftContainer),\n/* harmony export */   mainContainer: () => (/* binding */ mainContainer),\n/* harmony export */   mainNav: () => (/* binding */ mainNav),\n/* harmony export */   menuBtn: () => (/* binding */ menuBtn),\n/* harmony export */   openAddTaskBtn: () => (/* binding */ openAddTaskBtn),\n/* harmony export */   openAddTaskBtnCont: () => (/* binding */ openAddTaskBtnCont),\n/* harmony export */   projectNameErrorMsg: () => (/* binding */ projectNameErrorMsg),\n/* harmony export */   projectTitleCont: () => (/* binding */ projectTitleCont),\n/* harmony export */   projectsList: () => (/* binding */ projectsList),\n/* harmony export */   rightContainer: () => (/* binding */ rightContainer)\n/* harmony export */ });\n/* harmony import */ var _icons_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/plus-circle-outline.svg */ \"./src/icons/plus-circle-outline.svg\");\nconst body = document.body; \nconst header = document.querySelector('#header-container');\nconst menuBtn = document.createElement('button');\nconst mainContainer = document.querySelector('#main-container');\n\nconst leftContainer = document.querySelector('#left-container');\nconst rightContainer = document.querySelector('#right-container');\n\n\n//Elements in left main container\nconst mainNav = document.createElement('nav');\n\nconst projectsList = document.createElement('ul');\nprojectsList.classList.add('projects-list');\n\nconst addProjectsDiv = document.createElement('div');\n\nconst addNewProjectCont = document.createElement('div');\naddNewProjectCont.classList.add('add-new-project-form-cont');\n\n\n\n//Elements in container for adding new project \n    const enterProjectTitleLabel = document.createElement('label');\n    enterProjectTitleLabel.setAttribute('for', 'projectTitle');\n    enterProjectTitleLabel.classList.add('enter-project-label');\n\n    const enterProjectTitleInput = document.createElement('input');\n    enterProjectTitleInput.setAttribute('type', 'text');\n    enterProjectTitleInput.setAttribute('id', 'projectTitle');\n    enterProjectTitleInput.setAttribute('placeholder', 'Enter Project Title');\n    enterProjectTitleInput.classList.add('enter-project-input');\n\n\n    const addProjectBtn = document.createElement('button');\n    addProjectBtn.textContent = 'Add';\n    addProjectBtn.classList.add('projects-buttons')\n    addProjectBtn.classList.add('add-project-btn');\n\n    const cancelAddProjectBtn = document.createElement('button');\n    cancelAddProjectBtn.textContent = 'Cancel';\n    cancelAddProjectBtn.classList.add('projects-buttons');\n    cancelAddProjectBtn.classList.add('cancel-add-btn');\n\n    //Error message for same project name\n    const projectNameErrorMsg = document.createElement('div');\n    projectNameErrorMsg.textContent = 'Sorry, the project name you entered is already in use. Please choose a different name to ensure it is unique.'\n    projectNameErrorMsg.classList.add('error-message');\n\n    \n//Elements in main right container\n    const projectTitleCont = document.createElement('div');\n    projectTitleCont.classList.add('project-title-cont')\n\n    //Add Task button container\n        const openAddTaskBtnCont = document.createElement('div');\n        openAddTaskBtnCont.classList.add('open-add-task-btn-cont');\n        \n        const openAddTaskBtn = document.createElement('button')\n        openAddTaskBtn.classList.add('add-task-btn');\n        openAddTaskBtn.textContent = \"Add Task\";\n\n        \n        const addTaskIcon = new Image();\n        addTaskIcon.src = _icons_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__;\n        addTaskIcon.classList.add('icons');\n\n        openAddTaskBtnCont.append(addTaskIcon, openAddTaskBtn);\n\n    //Add Task input container\n        const addTaskInputCont = document.createElement('div');\n        addTaskInputCont.classList.add('add-task-form-cont');\n        \n        //Task name\n        const enterTaskNameLabel = document.createElement('label');\n        enterTaskNameLabel.setAttribute('for', 'taskName');\n        enterTaskNameLabel.classList.add('enter-task-label');\n\n        const enterTaskNameInput = document.createElement('input');\n        enterTaskNameInput.setAttribute('type', 'text');\n        enterTaskNameInput.setAttribute('id', 'taskName');\n        enterTaskNameInput.setAttribute('placeholder', 'New Task')\n        enterTaskNameInput.classList.add('enter-task-input');\n\n        //Task Notes\n        const enterTaskNotesLabel = document.createElement('label');\n        enterTaskNotesLabel.setAttribute('for', 'taskNotes');\n        enterTaskNotesLabel.classList.add('enter-notes-label');\n\n        const enterTaskNotesInput = document.createElement('textarea');\n        enterTaskNotesInput.setAttribute('id', 'taskNotes');\n        enterTaskNotesInput.setAttribute('placeholder', 'Task Notes')\n        enterTaskNotesInput.classList.add('enter-notes-input');\n\n        //Task Dates\n        const enterTaskDateLabel = document.createElement('label');\n        enterTaskDateLabel.setAttribute('for', 'taskNotes');\n        enterTaskDateLabel.classList.add('enter-notes-label');\n\n        const enterTaskDateInput = document.createElement('input');\n        enterTaskDateInput.setAttribute('type', 'date');\n        enterTaskDateInput.setAttribute('id', 'taskDate');\n        enterTaskDateInput.classList.add('enter-date-input');\n\n        //Task Add Button\n        const addTaskBtn = document.createElement('button');\n        addTaskBtn.textContent = 'Add';\n        addTaskBtn.classList.add('form-add-task-btn');\n        addTaskBtn.classList.add('form-task-btns')\n        \n        //Task Cancel Button\n        const cancelAddTaskBtn = document.createElement('button');\n        cancelAddTaskBtn.textContent = 'Cancel';\n        cancelAddTaskBtn.classList.add('form-cancel-add-task-btn');\n        cancelAddTaskBtn.classList.add('form-task-btns')\n        \n        //Append elements to container to add task\n        addTaskInputCont.append(enterTaskNameLabel, enterTaskNameInput, enterTaskNotesLabel, enterTaskNotesInput, enterTaskDateLabel, enterTaskDateInput, addTaskBtn, cancelAddTaskBtn);\n\n        \n\n\n//# sourceURL=webpack://top_to_do_list/./src/utils.js?");

/***/ }),

/***/ "./src/icons/all-inclusive-box-outline.svg":
/*!*************************************************!*\
  !*** ./src/icons/all-inclusive-box-outline.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0658ed453c7d25c1a27a.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/all-inclusive-box-outline.svg?");

/***/ }),

/***/ "./src/icons/calendar-today.svg":
/*!**************************************!*\
  !*** ./src/icons/calendar-today.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"233385e32206cd372d69.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/calendar-today.svg?");

/***/ }),

/***/ "./src/icons/dots-vertical.svg":
/*!*************************************!*\
  !*** ./src/icons/dots-vertical.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2500f612ad4630b14fbb.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/dots-vertical.svg?");

/***/ }),

/***/ "./src/icons/folder-cog.svg":
/*!**********************************!*\
  !*** ./src/icons/folder-cog.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04a3884da71739866f8c.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/folder-cog.svg?");

/***/ }),

/***/ "./src/icons/format-list-checks.svg":
/*!******************************************!*\
  !*** ./src/icons/format-list-checks.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b11d2b03a072fc292419.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/format-list-checks.svg?");

/***/ }),

/***/ "./src/icons/menu.svg":
/*!****************************!*\
  !*** ./src/icons/menu.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d4061552fac064ed076.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/menu.svg?");

/***/ }),

/***/ "./src/icons/note-plus.svg":
/*!*********************************!*\
  !*** ./src/icons/note-plus.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"163901b5272c64ad919e.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/note-plus.svg?");

/***/ }),

/***/ "./src/icons/numeric-7-box-multiple-outline.svg":
/*!******************************************************!*\
  !*** ./src/icons/numeric-7-box-multiple-outline.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ce49ea21b5c84c7574a.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/numeric-7-box-multiple-outline.svg?");

/***/ }),

/***/ "./src/icons/plus-circle-outline.svg":
/*!*******************************************!*\
  !*** ./src/icons/plus-circle-outline.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b254db15a65e85097053.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/plus-circle-outline.svg?");

/***/ }),

/***/ "./src/icons/star.svg":
/*!****************************!*\
  !*** ./src/icons/star.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de7ced177d66bb006694.svg\";\n\n//# sourceURL=webpack://top_to_do_list/./src/icons/star.svg?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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