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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linkedlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedlist */ \"./src/linkedlist.js\");\n\nfunction HashMap() {\n  let buckets = new Array(16);\n  let capacity = 0;\n  let loadFactor = capacity / buckets.length;\n\n  //   METHOD FOR RETURNING A HASH CODE BASED ON THE KEY PROVIDED\n  const hash = key => {\n    let hashCode = 0;\n    const primeNumber = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;\n    }\n    return hashCode;\n  };\n\n  //   MAKING SURE TO ONLY SEARCH IF INDEX IS NOT GREATER THAN LENGTH OF BUCKETS ARRAY\n  const invalidIndex = index => {\n    if (index < 0 || index >= buckets.length) {\n      throw new Error(\"Trying to access index out of bound\");\n    }\n  };\n\n  //   FUCTION FOR CHECKING THE LOAD FACTOR\n  const checkLoad = () => {\n    if (loadFactor >= 0.75) {\n      buckets.length = 2 * buckets.length;\n    }\n    return;\n  };\n\n  //   SETTING A VALUE IN A BUCKET/LINKED LIST\n  const set = (key, value) => {\n    const index = hash(key);\n    if (buckets[index] !== \"\" && !invalidIndex(index)) {\n      const bucket = buckets[index] = (0,_linkedlist__WEBPACK_IMPORTED_MODULE_0__.LinkedList)(); // make the bucket into a linked list\n      bucket.append({\n        data: [key, value]\n      });\n    } else {\n      const bucket = buckets[index] = (0,_linkedlist__WEBPACK_IMPORTED_MODULE_0__.LinkedList)(); // make the bucket into a linked list\n      let pointer = bucket.head;\n      while (pointer !== null) {\n        if (pointer.data[0] === key) {\n          pointer.data[1] = value;\n        }\n        if (pointer.data[1] === value) {\n          pointer = pointer.next;\n          break;\n        }\n        pointer = pointer.next;\n      }\n    }\n    capacity++;\n    checkLoad();\n  };\n\n  //   GET A VALUE BASED ON THE KEY PROVIDED\n  const get = key => {\n    const index = hash(key);\n    if (!invalidIndex(index)) {\n      let pointer = buckets[index].head;\n      while (pointer !== null) {\n        if (pointer.data[0] === key) return pointer.data[1];\n        pointer = pointer.next;\n      }\n    } else {\n      return null;\n    }\n  };\n\n  // RETURNS TRUE IF THE KEY IS IN THE HASHMAP\n  const has = key => {\n    for (let i = 0; i <= buckets.length; i++) {\n      let pointer = buckets[i].head;\n      while (pointer !== null) {\n        if (pointer.data[0] === key) {\n          return true;\n        }\n        pointer = pointer.next;\n      }\n    }\n    return false;\n  };\n\n  //   REMOVE A KEY AND RETURN TRUE, OTHERWISE RETURN FALSE\n  const remove = key => {\n    const index = hash(key);\n    if (invalidIndex(index)) {\n      let pointer = buckets[index].head;\n      let i = 0;\n      while (pointer !== null) {\n        if (pointer.data[0] === key) {\n          buckets[index].removeAt(i);\n          capacity--;\n          return true;\n        }\n        i++;\n        pointer = pointer.next;\n      }\n    }\n    return false;\n  };\n\n  //   RETURN THE TOTAL NUMBER OF STORED KEYS IN HASHMAP\n  const length = () => {\n    let total = 0;\n    for (const bucket of buckets) {\n      total += bucket.size();\n    }\n    return total;\n  };\n\n  //  CLEAR THE HASHMAP (NOT DELETE)\n  const clear = () => {\n    buckets = new Array(16);\n    capacity = 0;\n  };\n\n  //   RETURN AN ARRAY WITH ALL KEYS\n  const keys = () => {\n    let allKeys = [];\n    for (const bucket of buckets) {\n      let pointer = bucket.head;\n      while (pointer !== null) {\n        allKeys.push(pointer.data[0]);\n        pointer = pointer.next;\n      }\n    }\n    return allKeys;\n  };\n\n  //   RETURN AN ARRAY WITH ALL VALUES\n  const values = () => {\n    let allValues = [];\n    for (const bucket of buckets) {\n      let pointer = bucket.head;\n      while (pointer !== null) {\n        allValues.push(pointer.data[1]);\n        pointer = pointer.next;\n      }\n    }\n    return allValues;\n  };\n\n  //   RETURN AN ARRAY WITH ALL DATA ENTRIES (KEY VALUE PAIRS)\n  const entries = () => {\n    let allEntries = [];\n    for (const bucket of buckets) {\n      let pointer = bucket.head;\n      while (pointer !== null) {\n        allEntries.push([pointer.data[0], pointer.data[1]]);\n      }\n    }\n    return allEntries;\n  };\n  return {\n    buckets,\n    loadFactor,\n    set,\n    get,\n    has,\n    remove,\n    length,\n    clear,\n    keys,\n    values,\n    entries\n  };\n}\nconst hash = HashMap();\nhash.set(\"Apple\", \"red\");\nconsole.log(hash.buckets);\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/linkedlist.js":
/*!***************************!*\
  !*** ./src/linkedlist.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\nfunction ListNode() {\n  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  let next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  return {\n    value,\n    next\n  };\n}\nfunction LinkedList() {\n  let head = null;\n  const append = data => {\n    const newNode = ListNode(data);\n    if (head === null) head = newNode;else {\n      let pointer = head;\n      while (pointer.next !== null) {\n        pointer = pointer.next;\n      }\n      pointer.next = newNode;\n    }\n  };\n  const prepend = data => {\n    const newNode = ListNode(data, head);\n    head = newNode;\n  };\n  const size = () => {\n    let sum = 0;\n    let counter = head;\n    while (counter !== null) {\n      sum += 1;\n      counter = counter.next;\n    }\n    return sum;\n  };\n  const findHead = () => {\n    console.log(`head node: ${head.data[1]}`);\n    return head;\n  };\n  const findTail = () => {\n    let pointer = head;\n    while (pointer.next !== null) {\n      pointer = pointer.next;\n    }\n    console.log(`tail node: ${pointer.data[1]}`);\n    return pointer;\n  };\n  const at = index => {\n    let pointer = head;\n    let i = 0;\n    while (pointer && i < index) {\n      pointer = pointer.next;\n      i++;\n    }\n    console.log(`the node at ${index} is ${pointer.data[1]}`);\n    return pointer;\n  };\n  const pop = () => {\n    if (head === null) return \"ERROR, cannot remove null value\";else if (head.next === null) head = null;else {\n      let lastNode = head;\n      while (lastNode.next.next !== null) {\n        lastNode = lastNode.next;\n      }\n      lastNode.next = null;\n    }\n  };\n  const contains = value => {\n    let pointer = head;\n    while (pointer !== null) {\n      if (pointer.data[1] === value) {\n        console.log(true);\n        return true;\n      } else {\n        pointer = pointer.next;\n      }\n    }\n    console.log(false);\n    return false;\n  };\n  const find = value => {\n    let pointer = head;\n    for (let i = 0; pointer !== null; i++) {\n      if (pointer.data[1] === value) {\n        console.log(`index of ${value} is ${i}`);\n        return i;\n      } else {\n        pointer = pointer.next;\n      }\n    }\n    console.log(`ERROR! value not found`);\n    return null;\n  };\n  const toString = () => {\n    let pointer = head;\n    let string = \"\";\n    while (pointer !== null) {\n      string += `(${pointer.data[1]}) -> `;\n      pointer = pointer.next;\n    }\n    string += \"null\";\n    console.log(string);\n  };\n  const insertAt = (data, index) => {\n    if (index === 0) {\n      prepend(data);\n      return;\n    }\n    const nodeBeforeIndex = at(index - 1);\n    const newNode = ListNode(data, nodeBeforeIndex.next);\n    nodeBeforeIndex.next = newNode;\n  };\n  const removeAt = index => {\n    if (index === 0) {\n      head = head.next;\n      return;\n    }\n    const nodeBeforeIndex = at(index - 1);\n    nodeBeforeIndex.next = nodeBeforeIndex.next.next;\n  };\n  return {\n    head,\n    append,\n    prepend,\n    size,\n    findHead,\n    findTail,\n    at,\n    pop,\n    contains,\n    find,\n    toString,\n    insertAt,\n    removeAt\n  };\n}\n\n//# sourceURL=webpack://template/./src/linkedlist.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;