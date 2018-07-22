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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/mobile-operators-identifiers.js":
/*!********************************************************!*\
  !*** ./src/components/mobile-operators-identifiers.js ***!
  \********************************************************/
/*! exports provided: MOBILE_OPERATORS_IDENTIFICATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOBILE_OPERATORS_IDENTIFICATORS\", function() { return MOBILE_OPERATORS_IDENTIFICATORS; });\nconst MOBILE_OPERATORS_IDENTIFICATORS = {\n    kuivstar: ['067', '096', '097', '098', '068'],\n    vodafone: ['050', '066', '095', '099'],\n    life: ['063', '093', '073']\n};\n\n\n\n//# sourceURL=webpack:///./src/components/mobile-operators-identifiers.js?");

/***/ }),

/***/ "./src/components/users.js":
/*!*********************************!*\
  !*** ./src/components/users.js ***!
  \*********************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\nconst users = [{\n    firstName: 'Ivan',\n    lastName: 'Ivanov',\n    email: 'ivan@mail.com'\n}, {\n    firstName: 'German',\n    lastName: 'Smith',\n    email: 'german@mail.com'\n}, {\n    firstName: 'Kvas',\n    lastName: 'Petrov',\n    email: 'kvas@mail.com'\n}, {\n    firstName: 'Kvas',\n    lastName: 'Taras',\n    email: 'kvas@mail.com'\n}, {\n    firstName: 'Kavo',\n    lastName: 'Ivanov',\n    email: 'kavo@mail.com'\n}, {\n    firstName: 'Lada',\n    lastName: 'Sedan',\n    email: 'lada@mail.com'\n}, {\n    firstName: 'Lada',\n    lastName: 'Priora',\n    email: 'lada@mail.com'\n}, {\n    firstName: 'Orange',\n    lastName: 'Juice',\n    email: 'orange@mail.com'\n}, {\n    firstName: 'Arbuz',\n    lastName: 'Leto',\n    email: 'arbuz@mail.com'\n}, {\n    firstName: 'Dunya',\n    lastName: 'Fall',\n    email: 'dunya@mail.com'\n}, {\n    firstName: 'Fellow',\n    lastName: 'Ship',\n    email: 'fellow@mail.com'\n}];\n\n\n\n//# sourceURL=webpack:///./src/components/users.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/users */ \"./src/components/users.js\");\n/* harmony import */ var _components_mobile_operators_identifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-operators-identifiers */ \"./src/components/mobile-operators-identifiers.js\");\n\n\n\nclass App {\n    constructor() {\n        this.store = this.createStore();\n        this.pages = {\n            'contacts': new ContactPage(this.store),\n            'keypad': new KeypadPage(this.store)\n        };\n        this.pages.contacts.setStateContact();\n        this.render();\n        this.pages.contacts.applyListenerForContactPage();\n        this.applyListenerForNavigation();\n    }\n\n    createStore() {\n        let state;\n\n        return {\n            getState() {\n                return state;\n            },\n            setState(newState) {\n                state = newState;\n            }\n        };\n    }\n\n    reducer(action) {\n        const currentState = this.store.getState();\n        const mainWraper = document.getElementById('main-wraper');\n        const switchBetweenPages = () => {\n            mainWraper.firstElementChild.outerHTML = currentState.activePage;\n        };\n\n        if (action.type === 'MOVE_TO_KEYPAD_PAGE') {\n            switchBetweenPages();\n            this.pages.keypad.applyListenerForKeypadPage();\n            return;\n        }\n\n        if (action.type === 'MOVE_TO_CONTACT_PAGE') {\n            switchBetweenPages();\n            this.pages.contacts.applyListenerForContactPage();\n            return;\n        }\n    }\n\n    render() {\n        const currentState = this.store.getState();\n\n        const appTemplate = /*html*/`\n            <div id=\"main-wraper\" class=\"app-block\">\n                ${currentState.activePage}\n                ${this.footerNavigationBar()}\n            </div>\n        `;\n        const mountMode = document.getElementById('mountMode');\n        mountMode.innerHTML = appTemplate;\n    }\n\n    footerNavigationBar() {\n        return (/*html*/`\n            <footer class=\"container\">\n                <div class=\"row navigation-panel\" id=\"wraper-for-footer\">\n                    <div class=\"col-4 d-flex justify-content-center\">\n                        <button id=\"to-contact-page\" class=\"navigation-button\">\n                            <svg class=\"svg-inline--fa fa-address-book fa-w-14 icon\" aria-hidden=\"true\" data-prefix=\"far\" data-icon=\"address-book\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z\"></path></svg><!-- <span class=\"far fa-address-book icon\"></span> -->\n                        </button>\n                    </div>\n\n                    <div class=\"col-4 d-flex justify-content-center\">\n                        <button id=\"to-keypad-page\" class=\"navigation-button\">\n                            <svg class=\"svg-inline--fa fa-tty fa-w-16 icon\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"tty\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M5.37 103.822c138.532-138.532 362.936-138.326 501.262 0 6.078 6.078 7.074 15.496 2.583 22.681l-43.214 69.138a18.332 18.332 0 0 1-22.356 7.305l-86.422-34.569a18.335 18.335 0 0 1-11.434-18.846L351.741 90c-62.145-22.454-130.636-21.986-191.483 0l5.953 59.532a18.331 18.331 0 0 1-11.434 18.846l-86.423 34.568a18.334 18.334 0 0 1-22.356-7.305L2.787 126.502a18.333 18.333 0 0 1 2.583-22.68zM96 308v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H92c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zM96 500v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z\"></path></svg><!-- <span class=\"fas fa-tty icon\"></span> -->\n                        </button>\n                    </div>\n\n                    <div class=\"col-4 d-flex justify-content-center\">\n                        <button id=\"to-addUser-page\" class=\"navigation-button\">\n                            <svg class=\"svg-inline--fa fa-user-plus fa-w-20 icon\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"user-plus\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z\"></path></svg><!-- <span class=\"fas fa-user-plus icon\"></span> -->\n                        </button>\n                    </div>\n                </div>\n            </footer>\n        `\n        );\n    }\n\n    applyListenerForNavigation() {\n\n        const _MOVE_TO_KEYPAD_PAGE = {\n            type: 'MOVE_TO_KEYPAD_PAGE'\n        };\n\n        const _MOVE_TO_CONTACT_PAGE = {\n            type: 'MOVE_TO_CONTACT_PAGE'\n        };\n\n        const wraperForFooter = document.getElementById('wraper-for-footer');\n        wraperForFooter.addEventListener('click', e => {\n            const currentState = this.store.getState();\n\n            const BUTTON_ID = e.target.id;\n            const BUTTON_ID_FROM_SVG = e.target.parentElement.id;\n            const BUTTON_ID_FROM_PATH = e.target.parentElement.parentElement.id;\n\n            if (BUTTON_ID === 'to-keypad-page' || BUTTON_ID_FROM_SVG === 'to-keypad-page' || BUTTON_ID_FROM_PATH === 'to-keypad-page') {\n\n                if (currentState.stateName !== 'KEYPAD') {\n                    this.pages.keypad.setStateKeypad();\n                    return this.reducer(_MOVE_TO_KEYPAD_PAGE);\n                }\n                return;\n            }\n\n            if (BUTTON_ID === 'to-contact-page' || BUTTON_ID_FROM_SVG === 'to-contact-page' || BUTTON_ID_FROM_PATH === 'to-contact-page') {\n\n                if (currentState.stateName !== 'CONTACT') {\n                    this.pages.contacts.setStateContact();\n                    return this.reducer(_MOVE_TO_CONTACT_PAGE);\n                }\n                return;\n            }\n        });\n    }\n}\n\nclass ContactPage {\n    constructor(store) {\n        this.setStateContact = () => {\n            const { setState } = store;\n            const initializeState = {\n                stateName: 'CONTACT',\n                activePage: this.render()\n            };\n            setState(initializeState);\n        };\n    }\n\n    render() {\n        const contactTempalte = /*html*/`\n            <div id=\"contact-wraper\">\n\n                <header class=\"container\">\n                    <form class=\"form-inline search-form row\">\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"search\">Search</label>\n                            <input type=\"text\" class=\"form-control\" id= \"search\" placeholder=\"Search\">\n                        </div>\n                    </form>\n                </header>\n\n                <main class=\"container contact-list\">\n                    <table class=\"table table-hover table-striped\">\n\n                        <thead>\n                            <tr id=\"wraper-for-th\">\n                                <th class=\"for-sort\">Name</th>\n                                <th class=\"for-sort\">Last Name</th>\n                                <th class=\"for-sort\">Email</th>\n                            </tr>\n                        </thead>\n\n                        <tbody id=\"list-of-contacts\">\n                            ${this.contactListComponent(_components_users__WEBPACK_IMPORTED_MODULE_0__[\"users\"])}\n                        </tbody>\n\n                    </table>\n                </main>\n            </div>\n        `;\n\n        return contactTempalte;\n    }\n\n    contactListComponent(userList) {\n        return userList.reduce((listStructure, user) => {\n            const userFirstName = user.firstName;\n            const userLastName = user.lastName;\n            const userEmail = user.email;\n\n            const userComponent = /*html*/`\n            <tr class=\"user\">\n                <td> ${userFirstName} </td>\n                <td> ${userLastName} </td>\n                <td> ${userEmail} </td>\n            </tr>\n            `;\n\n            listStructure += userComponent;\n            return listStructure;\n        }, ``);\n    }\n\n    applyListenerForContactPage() {\n        const wraperForTh = document.getElementById('wraper-for-th');\n        wraperForTh.addEventListener('click', e => {\n            const TH_ELEM_CONTAINS = e.target.textContent.trim();\n            const PREDICT_TEXT_CONTENT = {\n                firstName: 'Name',\n                lastName: 'Last Name',\n                email: 'Email'\n            };\n\n            const ListOfContacts = document.getElementById('list-of-contacts');\n\n            if (TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.firstName) {\n                const sortedListByFirsName = this.sortUsersByValue('firstName', _components_users__WEBPACK_IMPORTED_MODULE_0__[\"users\"]);\n                ListOfContacts.innerHTML = this.contactListComponent(sortedListByFirsName);\n                return;\n            }\n\n            if (TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.lastName) {\n                const sortedListByLastName = this.sortUsersByValue('lastName', _components_users__WEBPACK_IMPORTED_MODULE_0__[\"users\"]);\n                ListOfContacts.innerHTML = this.contactListComponent(sortedListByLastName);\n                return;\n            }\n\n            if (TH_ELEM_CONTAINS === PREDICT_TEXT_CONTENT.email) {\n                const sortedListByEmail = this.sortUsersByValue('email', _components_users__WEBPACK_IMPORTED_MODULE_0__[\"users\"]);\n                ListOfContacts.innerHTML = this.contactListComponent(sortedListByEmail);\n                return;\n            }\n        });\n    }\n\n    sortUsersByValue(key, users) {\n        const sortFunction = function (value, nextValue) {\n            if (value[key] > nextValue[key]) return 1;\n            if (value[key] < nextValue[key]) return -1;\n        };\n\n        return [...users].sort(sortFunction);\n    }\n}\n\nclass KeypadPage {\n    constructor(store) {\n        this.setStateKeypad = () => {\n            const { setState } = store;\n            const initializeState = {\n                stateName: 'KEYPAD',\n                activePage: this.render()\n            };\n            setState(initializeState);\n        };\n    }\n\n    render() {\n        return (/*html*/`\n            <div id=\"keypad-wraper\">\n\n                <header class=\"container\">\n                    <div class=\"keypad-header-wraper d-flex justify-content-between\">\n                        <div id=\"phone-number\">\n                            <span id=\"number\"></span>\n                            <span id=\"operator\"></span>\n                        </div>\n                        <div id=\"delete\" class=\"delete-number\">\n                            <span class=\"fas fa-backspace\"></span>\n                        </div>\n                    </div>\n                </header>\n\n                    <main class=\"container keypad-block borders\">\n                    \n                    <div id=\"wraper-for-buttons\">\n                        <div class=\"row\">\n                            <div class=\"number-btn\">1</div>\n                            <div class=\"number-btn\">2</div>\n                            <div class=\"number-btn\">3</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"number-btn\">4</div>\n                            <div class=\"number-btn\">5</div>\n                            <div class=\"number-btn\">6</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"number-btn\">7</div>\n                            <div class=\"number-btn\">8</div>\n                            <div class=\"number-btn\">9</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"number-btn\">*</div>\n                            <div class=\"number-btn\">0</div>\n                            <div class=\"number-btn\">#</div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div id=\"call-btn\" class=\"number-btn call\"><span class=\"fas fa-phone\"></span></div>\n                    </div>\n                    <span id=\"error-block\"></span>\n\n                    </main>\n\n            </div>    \n        `\n        );\n    }\n\n    applyListenerForKeypadPage() {\n\n        /* ADD NUMBER */\n        const keypadButtons = document.getElementById('wraper-for-buttons');\n        const fieldForNumber = document.getElementById('number');\n\n        keypadButtons.addEventListener('click', e => {\n            const TARGET_CLASS_NAME = e.target.className;\n\n            if (TARGET_CLASS_NAME === 'number-btn') {\n                const BUTTON_VALUE = e.target.textContent;\n                fieldForNumber.textContent += BUTTON_VALUE;\n            }\n        });\n\n        /* REMOVE NUMBER */\n        const deleteButton = document.getElementById('delete');\n\n        deleteButton.addEventListener('click', e => {\n            const BUTTON_ID = e.target.id;\n            const BUTTON_ID_FROM_SVG = e.target.parentElement.id;\n            const BUTTON_ID_FROM_PATH = e.target.parentElement.parentElement.id;\n\n            if (BUTTON_ID === 'delete' || BUTTON_ID_FROM_SVG === 'delete' || BUTTON_ID_FROM_PATH === 'delete') {\n                const LENGTH_OF_NUMBERS = fieldForNumber.textContent.length - 1;\n                const strWithDeletedOneNumber = fieldForNumber.textContent.slice(0, LENGTH_OF_NUMBERS);\n                fieldForNumber.textContent = strWithDeletedOneNumber;\n            }\n        });\n    }\n}\n\nconst APPLICATION = new App();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });