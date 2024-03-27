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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n/* Header */\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid rgb(0, 0, 0);\n}\n\n.menu-btn {\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    cursor: pointer;\n    margin-left: 50px;\n}\n\n.menu-btn,\n.menu-btn-icon {\n    width: 50px;\n    height: auto;\n}\n\n.light-dark-btn {\n    margin-right: 50px;\n    height: 50px;\n    align-self: center;\n}\n\n.logo-cont {\n    display: flex;\n\n}\n\n/* Main content container */\n#main-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n/* Left Panel */\n\n/* Task Filter */\n#left-container {\n    border-right: 2px solid rgb(0, 0, 0);;\n}\n\nnav {\n    margin-top: 25px;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\nul li {\n    display: block;\n    list-style: none;\n}\n\nli img,\nli .filters-text {\n    display: inline-block;\n}\n\nul li img,\nul li .filters-text {\n    vertical-align: middle;\n}\n\n.icons {\n    width: 25px;\n    height: auto;\n    margin-right: 5px;\n    cursor: pointer;\n}\n\n.task-filter {\n    margin-left: 25px;\n    cursor: pointer;\n}\n\n/* Projects */\n.projects-list {\n    margin-left: 25px;\n}\n\n#projects-header {\n    margin-left: 20px;\n    margin-right: 20px;\n    border-bottom: 2px solid rgb(0, 0, 0);\n}\n\n.add-projects-txt {\n    cursor: pointer;\n}\n\nul img,\nul .add-projects-txt {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.add-project-icon {\n    grid-area: icon;\n}\n\n.enter-project-label {\n    grid-area: label;\n}\n\n.enter-project-input {\n    grid-area: input;\n}\n\n.add-project-btn {\n    grid-area: addbtn;\n}\n\n.cancel-add-btn {\n    grid-area: cancelbtn;\n}\n\n.add-new-project-cont {\n    margin-right: 25px;\n    display: grid;\n    grid-template-columns: 0.3fr 1fr 1fr 1fr;\n    grid-template-areas: \n        \"icon input input input\"\n        \". addbtn cancelbtn .\";\n}\n\n.projects-buttons {\n    width: 75px;\n    margin-top: 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top_to_do_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/addProjects.js":
/*!****************************!*\
  !*** ./src/addProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject)\n/* harmony export */ });\n/* harmony import */ var _icons_folder_cog_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/folder-cog.svg */ \"./src/icons/folder-cog.svg\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nconst addNewProject = () => {\n    \n    // const addNewProjectCont = document.createElement('div');\n    _utils__WEBPACK_IMPORTED_MODULE_1__.addNewProjectCont.classList.add('add-new-project-cont');\n    \n    //Icon for adding new project\n    const projectIcon = new Image();\n    projectIcon.src = _icons_folder_cog_svg__WEBPACK_IMPORTED_MODULE_0__;\n    projectIcon.classList.add('icons');\n    projectIcon.classList.add('add-project-icon');\n\n    //Buttons to add project or cancel adding\n    const addProjectBtn = document.createElement('button');\n    addProjectBtn.textContent = 'Add';\n    addProjectBtn.classList.add('projects-buttons')\n    addProjectBtn.classList.add('add-project-btn');\n\n    _utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddProjectBtn.textContent = 'Cancel';\n    _utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddProjectBtn.classList.add('projects-buttons');\n    _utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddProjectBtn.classList.add('cancel-add-btn');\n\n    // Append elements\n    _utils__WEBPACK_IMPORTED_MODULE_1__.projectsList.append(_utils__WEBPACK_IMPORTED_MODULE_1__.addNewProjectCont);\n    _utils__WEBPACK_IMPORTED_MODULE_1__.addNewProjectCont.append(projectIcon, _utils__WEBPACK_IMPORTED_MODULE_1__.enterProjectNameLabel, _utils__WEBPACK_IMPORTED_MODULE_1__.enterProjectNameInput, addProjectBtn, _utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddProjectBtn);\n\n    _utils__WEBPACK_IMPORTED_MODULE_1__.enterProjectNameInput.focus();\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/addProjects.js?");

/***/ }),

/***/ "./src/cancelAddProject.js":
/*!*********************************!*\
  !*** ./src/cancelAddProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelAddProject: () => (/* binding */ cancelAddProject)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _addProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjects */ \"./src/addProjects.js\");\n\n\n\nconst cancelAddProject = () => {\n    _utils__WEBPACK_IMPORTED_MODULE_0__.addNewProjectCont.remove();\n    _utils__WEBPACK_IMPORTED_MODULE_0__.enterProjectNameInput.value = '';\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/cancelAddProject.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _taskFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFilter */ \"./src/taskFilter.js\");\n/* harmony import */ var _projectsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsList */ \"./src/projectsList.js\");\n/* harmony import */ var _taskProjectDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskProjectDisplay */ \"./src/taskProjectDisplay.js\");\n/* harmony import */ var _menuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuButton */ \"./src/menuButton.js\");\n/* harmony import */ var _addProjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addProjects */ \"./src/addProjects.js\");\n/* harmony import */ var _cancelAddProject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cancelAddProject */ \"./src/cancelAddProject.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)();\n(0,_taskFilter__WEBPACK_IMPORTED_MODULE_3__.createTaskFilter)();\n(0,_projectsList__WEBPACK_IMPORTED_MODULE_4__.createProjectsMenu)();\n(0,_taskProjectDisplay__WEBPACK_IMPORTED_MODULE_5__.createTaskProjectDisplay)();\n\n_utils__WEBPACK_IMPORTED_MODULE_1__.menuBtn.addEventListener('click', _menuButton__WEBPACK_IMPORTED_MODULE_6__.showMenu);\n_utils__WEBPACK_IMPORTED_MODULE_1__.addProjectsLi.addEventListener('click', _addProjects__WEBPACK_IMPORTED_MODULE_7__.addNewProject);\n_utils__WEBPACK_IMPORTED_MODULE_1__.cancelAddProjectBtn.addEventListener('click', _cancelAddProject__WEBPACK_IMPORTED_MODULE_8__.cancelAddProject);\n\n//# sourceURL=webpack://top_to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/menuButton.js":
/*!***************************!*\
  !*** ./src/menuButton.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _taskFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFilter */ \"./src/taskFilter.js\");\n/* harmony import */ var _projectsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsList */ \"./src/projectsList.js\");\n\n\n\n\nconst showMenu = () => {\n    if (_utils__WEBPACK_IMPORTED_MODULE_0__.mainContainer.children.length === 2) {\n        _utils__WEBPACK_IMPORTED_MODULE_0__.leftContainer.remove();\n    } else if (_utils__WEBPACK_IMPORTED_MODULE_0__.mainContainer.children.length === 1) {\n        _utils__WEBPACK_IMPORTED_MODULE_0__.mainContainer.insertBefore(_utils__WEBPACK_IMPORTED_MODULE_0__.leftContainer, _utils__WEBPACK_IMPORTED_MODULE_0__.rightContainer);\n    }\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/menuButton.js?");

/***/ }),

/***/ "./src/projectsList.js":
/*!*****************************!*\
  !*** ./src/projectsList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectsMenu: () => (/* binding */ createProjectsMenu)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _icons_note_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/note-plus.svg */ \"./src/icons/note-plus.svg\");\n\n\n\n\nconst createProjectsMenu = () => {\n    const projectsHeader = document.createElement('h2');\n    projectsHeader.textContent = 'Projects';\n    projectsHeader.setAttribute('id', 'projects-header');\n    \n    _utils__WEBPACK_IMPORTED_MODULE_0__.projectsList.classList.add('projects-list');\n    \n    _utils__WEBPACK_IMPORTED_MODULE_0__.mainNav.append(projectsHeader, _utils__WEBPACK_IMPORTED_MODULE_0__.projectsList);\n\n    _utils__WEBPACK_IMPORTED_MODULE_0__.addProjectsLi.classList.add('add-projects-li');\n\n    const addProjectsIcon = new Image();\n    addProjectsIcon.src = _icons_note_plus_svg__WEBPACK_IMPORTED_MODULE_1__;\n    addProjectsIcon.classList.add('icons');\n\n    const addProjects = document.createElement('div');\n    addProjects.textContent = 'Add Projects';\n    addProjects.classList.add('add-projects-txt');\n\n    _utils__WEBPACK_IMPORTED_MODULE_0__.addProjectsLi.append(addProjectsIcon, addProjects);\n    _utils__WEBPACK_IMPORTED_MODULE_0__.projectsList.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__.addProjectsLi);\n    \n    \n\n};\n\n\n//# sourceURL=webpack://top_to_do_list/./src/projectsList.js?");

/***/ }),

/***/ "./src/taskFilter.js":
/*!***************************!*\
  !*** ./src/taskFilter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskFilter: () => (/* binding */ createTaskFilter)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _icons_all_inclusive_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/all-inclusive-box-outline.svg */ \"./src/icons/all-inclusive-box-outline.svg\");\n/* harmony import */ var _icons_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/calendar-today.svg */ \"./src/icons/calendar-today.svg\");\n/* harmony import */ var _icons_numeric_7_box_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/numeric-7-box-multiple-outline.svg */ \"./src/icons/numeric-7-box-multiple-outline.svg\");\n/* harmony import */ var _icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/star.svg */ \"./src/icons/star.svg\");\n\n\n\n\n\n\n\nconst createTaskFilter = () => {\n    \n    const tasksFilter = document.createElement('ul');\n    tasksFilter.setAttribute('id', 'task-filter');\n    \n    //All tasks elements\n    const liAllTasks = document.createElement('li');\n    liAllTasks.classList.add('task-filter');\n    liAllTasks.setAttribute('id', 'all-tasks');\n    \n    const txtAllTasks = document.createElement('div');\n    txtAllTasks.textContent = 'All Tasks';\n    txtAllTasks.classList.add('filters-text')\n\n    const iconAll = new Image();\n    iconAll.src = _icons_all_inclusive_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__;\n    iconAll.classList.add('icons');\n\n    liAllTasks.append(iconAll, txtAllTasks);\n\n    //Today elements\n    const liTodayTasks = document.createElement('li');\n    liTodayTasks.classList.add('task-filter');\n    liTodayTasks.setAttribute('id', 'today-tasks');\n    \n    const txtTodayTasks = document.createElement('div');\n    txtTodayTasks.textContent = 'Today';\n    txtTodayTasks.classList.add('filters-text')\n\n    const iconToday = new Image();\n    iconToday.src = _icons_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__;\n    iconToday.classList.add('icons');\n\n    liTodayTasks.append(iconToday, txtTodayTasks);\n\n\n    //Next 7 days elements\n    const liNxtSevenDays = document.createElement('li');\n    liNxtSevenDays.classList.add('task-filter');\n    liNxtSevenDays.setAttribute('id', 'next7days-tasks');\n    \n    const txtNxtSeven = document.createElement('div');\n    txtNxtSeven.textContent = 'Next 7 Days';\n    txtNxtSeven.classList.add('filters-text')\n\n    const iconNextSeven = new Image();\n    iconNextSeven.src = _icons_numeric_7_box_multiple_outline_svg__WEBPACK_IMPORTED_MODULE_3__;\n    iconNextSeven.classList.add('icons');\n\n    liNxtSevenDays.append(iconNextSeven, txtNxtSeven);\n\n    //Important elements\n    const liImportantTasks = document.createElement('li');\n    \n    liImportantTasks.classList.add('task-filter');\n    liImportantTasks.setAttribute('id', 'important-tasks');\n    \n    const txtImportant = document.createElement('div');\n    txtImportant.textContent = 'Important';\n    txtImportant.classList.add('filters-text')\n\n    const iconImportant = new Image();\n    iconImportant.src = _icons_star_svg__WEBPACK_IMPORTED_MODULE_4__;\n    iconImportant.classList.add('icons');\n\n    liImportantTasks.append(iconImportant, txtImportant);\n\n\n    //Append nodes\n    _utils__WEBPACK_IMPORTED_MODULE_0__.leftContainer.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__.mainNav);\n    _utils__WEBPACK_IMPORTED_MODULE_0__.mainNav.appendChild(tasksFilter);\n    tasksFilter.append(liAllTasks, liTodayTasks, liNxtSevenDays, liImportantTasks);\n}\n\n//# sourceURL=webpack://top_to_do_list/./src/taskFilter.js?");

/***/ }),

/***/ "./src/taskProjectDisplay.js":
/*!***********************************!*\
  !*** ./src/taskProjectDisplay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskProjectDisplay: () => (/* binding */ createTaskProjectDisplay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst createTaskProjectDisplay = () => {\n    \n    const projectMainCont = document.createElement('div');\n    projectMainCont.textContent = 'Tasks and Projects here'\n    _utils__WEBPACK_IMPORTED_MODULE_0__.rightContainer.appendChild(projectMainCont);\n};\n\n//# sourceURL=webpack://top_to_do_list/./src/taskProjectDisplay.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProjectCont: () => (/* binding */ addNewProjectCont),\n/* harmony export */   addProjectsLi: () => (/* binding */ addProjectsLi),\n/* harmony export */   body: () => (/* binding */ body),\n/* harmony export */   cancelAddProjectBtn: () => (/* binding */ cancelAddProjectBtn),\n/* harmony export */   enterProjectNameInput: () => (/* binding */ enterProjectNameInput),\n/* harmony export */   enterProjectNameLabel: () => (/* binding */ enterProjectNameLabel),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   leftContainer: () => (/* binding */ leftContainer),\n/* harmony export */   mainContainer: () => (/* binding */ mainContainer),\n/* harmony export */   mainNav: () => (/* binding */ mainNav),\n/* harmony export */   menuBtn: () => (/* binding */ menuBtn),\n/* harmony export */   projectsList: () => (/* binding */ projectsList),\n/* harmony export */   rightContainer: () => (/* binding */ rightContainer)\n/* harmony export */ });\nconst body = document.body; \nconst header = document.querySelector('#header-container');\nconst menuBtn = document.createElement('button');\nconst mainContainer = document.querySelector('#main-container');\nconst leftContainer = document.querySelector('#left-container');\nconst rightContainer = document.querySelector('#right-container');\nconst mainNav = document.createElement('nav');\nconst projectsList = document.createElement('ul');\n\n\n\nconst addProjectsLi = document.createElement('li');\nconst addNewProjectCont = document.createElement('div');\n\n//Label and input for entering project name\nconst enterProjectNameLabel = document.createElement('label');\nenterProjectNameLabel.setAttribute('for', 'projectName');\nenterProjectNameLabel.classList.add('enter-project-label');\n\nconst enterProjectNameInput = document.createElement('input');\nenterProjectNameInput.setAttribute('type', 'text');\nenterProjectNameInput.setAttribute('id', 'projectName');\nenterProjectNameInput.setAttribute('placeholder', 'Enter Project Name');\nenterProjectNameInput.classList.add('enter-project-input');\nenterProjectNameInput.required = true;\n\nconst cancelAddProjectBtn = document.createElement('button');\n\n\n//# sourceURL=webpack://top_to_do_list/./src/utils.js?");

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