/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../assets/chars-accordance.json":
/*!***************************************!*\
  !*** ../assets/chars-accordance.json ***!
  \***************************************/
/*! exports provided: english, russian, german, spanish, french, portuguese, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"english\\\":{\\\"alphabet\\\":\\\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\\\",\\\"groups\\\":[\\\"QWSD\\\",\\\"RTFG\\\",\\\"EAIO\\\"]},\\\"russian\\\":{\\\"alphabet\\\":\\\"АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ\\\",\\\"groups\\\":[\\\"ОАИЯ\\\",\\\"ТЦДШ\\\",\\\"ЬЪАЯ\\\",\\\"ИЫЭЮ\\\"]},\\\"german\\\":{\\\"alphabet\\\":\\\"ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜẞ\\\",\\\"groups\\\":[\\\"QWSD\\\",\\\"RTFG\\\",\\\"EAIO\\\",\\\"ÄÖÜA\\\",\\\"ẞSBC\\\"]},\\\"spanish\\\":{\\\"alphabet\\\":\\\"ABCDEFGHIJKLMNÑOPQRSTUVWXYZÀÄÁÈËÉÌÏÍÒÖÓÙÜÚỲŸÝ\\\",\\\"groups\\\":[\\\"QWSD\\\",\\\"RTFG\\\",\\\"EAIO\\\",\\\"ÄÖÜA\\\"]},\\\"french\\\":{\\\"alphabet\\\":\\\"ABCDEFGHIJKLMNOPQRSTUVWXYZÂÁÀÇÊÉÈËÏÎÔŒÜÛÚÙ\\\",\\\"groups\\\":[\\\"QWSD\\\",\\\"RTFG\\\",\\\"EAIO\\\",\\\"ÄÖÜA\\\"]},\\\"portuguese\\\":{\\\"alphabet\\\":\\\"ABCDEFGHIJKLMNOPQRSTUVWXYZÃÂÁÀÄÇÈÉÊÌÍÒÓÕÔÙÚ\\\",\\\"groups\\\":[\\\"QWSD\\\",\\\"RTFG\\\",\\\"EAIO\\\",\\\"ÄÖÜA\\\"]}}\");\n\n//# sourceURL=webpack:///../assets/chars-accordance.json?");

/***/ }),

/***/ "../dist/WordViewComponent.js":
/*!************************************!*\
  !*** ../dist/WordViewComponent.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.CharComponent = void 0;\n\nvar _charsAccordance = _interopRequireDefault(__webpack_require__(/*! ../assets/chars-accordance.json */ \"../assets/chars-accordance.json\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass CharComponent {\n  constructor(symbol, state) {\n    this.symbol = symbol;\n    this.state = undefined;\n    this.element = undefined;\n    this.uniqueClass = 'easy-lang-word__';\n    this.charClass = this.uniqueClass + 'char';\n    this.openClass = this.uniqueClass + 'visible';\n    this.activeClass = this.uniqueClass + 'active';\n    this.hiddenClass = this.uniqueClass + 'hidden';\n    this.hiddenSymbol = '•';\n\n    this._create();\n\n    this.setStateOnChar(state);\n  }\n\n  _create() {\n    this.element = document.createElement('span');\n    this.element.classList.add(this.charClass);\n  }\n\n  setStateOnChar(state = this.state) {\n    if (this.state === state) return;\n    this.element.classList.remove(this.activeClass, this.openClass, this.hiddenClass);\n    this.state = state;\n\n    switch (state) {\n      case 'open':\n        this.element.classList.add(this.openClass);\n        this.element.textContent = this.symbol;\n        break;\n\n      case 'hidden':\n        this.element.classList.add(this.hiddenClass);\n        this.element.textContent = this.hiddenSymbol;\n        break;\n\n      case 'active':\n        this.element.classList.add(this.activeClass);\n        this.element.textContent = this.hiddenSymbol;\n        break;\n    }\n  }\n\n}\n\nexports.CharComponent = CharComponent;\n\nclass WordViewComponent {\n  constructor(allCharacters = [], index = 0, language = 'english') {\n    this.alphabet = _charsAccordance.default;\n\n    if (typeof allCharacters === 'string') {\n      this.allCharacters = allCharacters.split('');\n    } else if (typeof allCharacters === 'object') {\n      this.allCharacters = allCharacters;\n    } else {\n      this.allCharacters = [];\n    }\n\n    this.index = index >= 0 ? index : 0;\n    this.language = this.alphabet[language] ? language : 'english';\n    this.word = undefined;\n\n    this._createAllCharacters();\n\n    this._create();\n  }\n\n  getCurGroup() {\n    let curLang = this.alphabet[this.language];\n    let curCharacter = this.allCharacters[this.index].symbol;\n\n    if (!curLang || !curCharacter) {\n      return false;\n    }\n\n    let upperCase = curCharacter === curCharacter.toUpperCase();\n    let curGroup = curLang.groups.filter(g => {\n      return g.toUpperCase().indexOf(curCharacter.toUpperCase()) !== -1;\n    })[0];\n\n    if (!curGroup) {\n      curGroup = this._createNewGroup(curLang.alphabet, curCharacter);\n    }\n\n    return upperCase ? curGroup.toUpperCase() : curGroup.toLowerCase();\n  }\n\n  _createNewGroup(str, curCharacter) {\n    let curGroup = curCharacter;\n\n    for (let i = 0; i < 3;) {\n      let rand = this._chooseRandomCharFromString(str);\n\n      if (curGroup.split('').every(e => e.toUpperCase() !== rand.toUpperCase())) {\n        curGroup += rand;\n        i++;\n      }\n    }\n\n    return this._randomSortStr(curGroup);\n  }\n\n  _chooseRandomCharFromString(str) {\n    return str.charAt(Math.floor(Math.random() * str.length));\n  }\n\n  _randomSortStr(str) {\n    function compareRandom(a, b) {\n      return Math.random() - 0.5;\n    }\n\n    let arr = str.split('');\n    arr.sort(compareRandom);\n    return arr.join('');\n  }\n\n  openChar() {\n    if (this.allCharacters[this.index]) {\n      this.index++;\n\n      this._updateCharsState();\n\n      if (this.index >= this.allCharacters.length) {\n        return 1;\n      }\n\n      return this.getCurGroup();\n    }\n\n    return 0;\n  }\n\n  _updateCharsState() {\n    this.allCharacters.forEach((char, i) => {\n      if (i < this.index) {\n        char.setStateOnChar('open');\n      } else if (i == this.index) {\n        char.setStateOnChar('active');\n      } else if (i > this.index) {\n        char.setStateOnChar('hidden');\n      }\n    });\n  }\n\n  openWord() {\n    this.index = this.allCharacters.length;\n\n    this._updateCharsState();\n\n    return 1;\n  }\n\n  hiddenWord() {\n    this.index = 0;\n\n    this._updateCharsState();\n\n    return this.getCurGroup();\n  }\n\n  _createAllCharacters() {\n    this.allCharacters = this.allCharacters.map((character, i) => {\n      let char;\n\n      if (i < this.index) {\n        char = new CharComponent(character, 'open');\n      } else if (i == this.index) {\n        char = new CharComponent(character, 'active');\n      } else if (i > this.index) {\n        char = new CharComponent(character, 'hidden');\n      }\n\n      return char;\n    });\n  }\n\n  _create() {\n    this.word = document.createElement('span');\n    this.allCharacters.forEach(char => {\n      this.word.appendChild(char.element);\n    });\n  }\n\n  addClass(className) {\n    this.word.classList.add(className);\n  }\n\n  get() {\n    return this.word;\n  }\n\n}\n\nexports.default = WordViewComponent;\n\n//# sourceURL=webpack:///../dist/WordViewComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_WordViewComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/WordViewComponent */ \"../dist/WordViewComponent.js\");\n/* harmony import */ var _dist_WordViewComponent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_WordViewComponent__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet input = [\n    {\n        words: [\n            [0,4]\n        ],\n        text: 'Test kfolokor'\n    },\n    {\n        words: [\n            [4,4],\n            [14,4]\n        ],\n        text: 'Olf Test opty Test plojh'\n    }\n]\n\nfunction ready(){\n    let wordComponents = [];\n    let testBlock = document.querySelector('.test-block');\n    input.forEach(i=>{\n        let oneP = testBlock.appendChild(document.createElement('p'))\n        let cursor = 0;\n        i.words.forEach(w=>{\n            oneP.insertAdjacentText('beforeend',i.text.substring(cursor,w[0]))\n            cursor = w[0] + w[1];\n            let wordComponent = new _dist_WordViewComponent__WEBPACK_IMPORTED_MODULE_0___default.a(i.text.substr(w[0],w[1]));\n            wordComponents.push(wordComponent)\n            oneP.appendChild(wordComponent.get())\n        })\n        oneP.insertAdjacentText('beforeend',i.text.substring(cursor,i.text.length))\n    })\n\n    document.querySelector('.open-char').addEventListener('click',()=>{\n        wordComponents.forEach(c=>{\n            console.log(c.openChar())\n        })\n    })\n    document.querySelector('.open-word').addEventListener('click',()=>{\n        wordComponents.forEach(c=>{\n            console.log(c.openWord())\n        })\n    })\n    document.querySelector('.hidden-word').addEventListener('click',()=>{\n        wordComponents.forEach(c=>{\n            console.log(c.hiddenWord())\n        })\n    })\n\n}\ndocument.addEventListener('DOMContentLoaded',ready)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });