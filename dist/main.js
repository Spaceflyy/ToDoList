/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--off-white: #f5f5f5;\n}\n\nhtml,\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100svh;\n\tbox-sizing: border-box;\n}\n#sidebar h2,\n#sidebar li p,\n#sidebar ul,\nheader h1,\nform ul,\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nheader h1,\nheader h2,\n#sidebar ul,\n#sidebar h2,\nlabel {\n\tpadding: 10px;\n}\nheader {\n\tdisplay: flex;\n\tcolor: var(--off-white);\n\talign-items: center;\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(33, 147, 176, 1) 0%,\n\t\trgba(109, 213, 237, 1) 100%\n\t);\n\theight: 60px;\n}\n\n.projModalBg,\n.taskModalBg {\n\tdisplay: none;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n\twidth: 100%;\n\tposition: fixed;\n\tbackground-color: rgba(199, 199, 199, 0.61);\n\tbackdrop-filter: blur(5px);\n}\n.modal {\n\tz-index: 1;\n\tborder-radius: 5px;\n\tbackground-color: var(--off-white);\n\tfilter: drop-shadow(0px 2px 5px #0000005b);\n\twidth: 25%;\n\theight: max-content;\n}\n#projectForm,\n#taskForm {\n\tfont-size: 1.25rem;\n\tlist-style: none;\n}\n#taskForm ul li header,\n#projectForm ul li header {\n\theight: 40px;\n\twidth: 100%;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tpadding: 10px;\n}\n#taskForm ul li,\n#taskForm,\n#taskForm ul,\n#projectForm ul li,\n#projectForm,\n#projectForm ul {\n\theight: 100%;\n}\n#taskForm ul li,\n#projectForm ul li {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\talign-items: center;\n\tpadding: 0px 10px 10px 10px;\n}\n#taskForm label,\n#projectForm label {\n\twidth: 90%;\n}\nlabel textarea,\nlabel select,\nlabel input {\n\twidth: 100%;\n\tpadding: 5px;\n\tmargin-top: 5px;\n\tborder-radius: 5px;\n\tborder: 2px solid rgba(0, 0, 0, 0.199);\n}\n\nlabel select {\n\twidth: 103%;\n\tbackground-color: white;\n}\n\nlabel textarea {\n\tresize: none;\n}\n\n.buttonContainer {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: -20px;\n\tgap: 10px;\n\twidth: 30%;\n}\n#mainContent {\n\tdisplay: flex;\n\tflex: 1;\n\toverflow: auto;\n}\n\n#tasks {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n.icon:hover {\n\tscale: 1.3;\n\ttransition: 0.2s;\n}\n#taskContainer {\n\twidth: 70%;\n}\n\n.task,\n#subtitle {\n\tdisplay: grid;\n\tgrid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-auto-flow: column;\n\tpadding-right: 20px;\n\tgap: 10px;\n}\n\n.task input[type=\"checkbox\"] {\n\twidth: 20px;\n\theight: auto;\n}\n\nimg {\n\tcursor: pointer;\n}\n\n#sidebar {\n\tbackground-color: rgb(230, 230, 230);\n\tmin-width: 250px;\n\theight: 100%;\n}\n\n#sidebar ul {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tlist-style: none;\n}\n\n#sidebar li {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 5px;\n\ttransition: 0.3s;\n\tborder-radius: 5px;\n\tbackground-color: var(--off-white);\n\tpadding: 10px;\n\tborder: solid 1px rgba(33, 147, 176, 0);\n}\n\n#sidebar li:hover {\n\ttransition: 0.3s;\n\tborder: solid 1px rgba(33, 147, 176, 1);\n\tcursor: pointer;\n}\n\n#sidebar #addProjectBtn {\n\ttext-align: center;\n\tfont-weight: 700;\n\tfont-size: 3rem;\n\tpadding: 0;\n}\n\n.line {\n\twidth: 100%;\n\tborder-top: solid 1px rgba(0, 0, 0, 0.5);\n}\n\n.active {\n\ttransition: 0.3s;\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(33, 147, 176, 1) 0%,\n\t\trgba(109, 213, 237, 1) 100%\n\t);\n\tcolor: var(--off-white);\n}\n\n@media only screen and (max-width: 600px) {\n\t.modal {\n\t\twidth: 90%;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;AACrB;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,cAAc;CACd,sBAAsB;AACvB;AACA;;;;;;;CAOC,SAAS;CACT,UAAU;AACX;;AAEA;;;;;CAKC,aAAa;AACd;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB;;;;EAIC;CACD,YAAY;AACb;;AAEA;;CAEC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,WAAW;CACX,eAAe;CACf,2CAA2C;CAC3C,0BAA0B;AAC3B;AACA;CACC,UAAU;CACV,kBAAkB;CAClB,kCAAkC;CAClC,0CAA0C;CAC1C,UAAU;CACV,mBAAmB;AACpB;AACA;;CAEC,kBAAkB;CAClB,gBAAgB;AACjB;AACA;;CAEC,YAAY;CACZ,WAAW;CACX,2BAA2B;CAC3B,4BAA4B;CAC5B,aAAa;AACd;AACA;;;;;;CAMC,YAAY;AACb;AACA;;CAEC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mBAAmB;CACnB,2BAA2B;AAC5B;AACA;;CAEC,UAAU;AACX;AACA;;;CAGC,WAAW;CACX,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,sCAAsC;AACvC;;AAEA;CACC,WAAW;CACX,uBAAuB;AACxB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,iBAAiB;CACjB,SAAS;CACT,UAAU;AACX;AACA;CACC,aAAa;CACb,OAAO;CACP,cAAc;AACf;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;AACZ;AACA;CACC,UAAU;CACV,gBAAgB;AACjB;AACA;CACC,UAAU;AACX;;AAEA;;CAEC,aAAa;CACb,4CAA4C;CAC5C,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,oCAAoC;CACpC,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,0BAA0B;CAC1B,sBAAsB;CACtB,mBAAmB;CACnB,QAAQ;CACR,gBAAgB;CAChB,kBAAkB;CAClB,kCAAkC;CAClC,aAAa;CACb,uCAAuC;AACxC;;AAEA;CACC,gBAAgB;CAChB,uCAAuC;CACvC,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,eAAe;CACf,UAAU;AACX;;AAEA;CACC,WAAW;CACX,wCAAwC;AACzC;;AAEA;CACC,gBAAgB;CAChB;;;;EAIC;CACD,uBAAuB;AACxB;;AAEA;CACC;EACC,UAAU;CACX;AACD","sourcesContent":[":root {\n\t--off-white: #f5f5f5;\n}\n\nhtml,\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100svh;\n\tbox-sizing: border-box;\n}\n#sidebar h2,\n#sidebar li p,\n#sidebar ul,\nheader h1,\nform ul,\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nheader h1,\nheader h2,\n#sidebar ul,\n#sidebar h2,\nlabel {\n\tpadding: 10px;\n}\nheader {\n\tdisplay: flex;\n\tcolor: var(--off-white);\n\talign-items: center;\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(33, 147, 176, 1) 0%,\n\t\trgba(109, 213, 237, 1) 100%\n\t);\n\theight: 60px;\n}\n\n.projModalBg,\n.taskModalBg {\n\tdisplay: none;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n\twidth: 100%;\n\tposition: fixed;\n\tbackground-color: rgba(199, 199, 199, 0.61);\n\tbackdrop-filter: blur(5px);\n}\n.modal {\n\tz-index: 1;\n\tborder-radius: 5px;\n\tbackground-color: var(--off-white);\n\tfilter: drop-shadow(0px 2px 5px #0000005b);\n\twidth: 25%;\n\theight: max-content;\n}\n#projectForm,\n#taskForm {\n\tfont-size: 1.25rem;\n\tlist-style: none;\n}\n#taskForm ul li header,\n#projectForm ul li header {\n\theight: 40px;\n\twidth: 100%;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tpadding: 10px;\n}\n#taskForm ul li,\n#taskForm,\n#taskForm ul,\n#projectForm ul li,\n#projectForm,\n#projectForm ul {\n\theight: 100%;\n}\n#taskForm ul li,\n#projectForm ul li {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\talign-items: center;\n\tpadding: 0px 10px 10px 10px;\n}\n#taskForm label,\n#projectForm label {\n\twidth: 90%;\n}\nlabel textarea,\nlabel select,\nlabel input {\n\twidth: 100%;\n\tpadding: 5px;\n\tmargin-top: 5px;\n\tborder-radius: 5px;\n\tborder: 2px solid rgba(0, 0, 0, 0.199);\n}\n\nlabel select {\n\twidth: 103%;\n\tbackground-color: white;\n}\n\nlabel textarea {\n\tresize: none;\n}\n\n.buttonContainer {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: -20px;\n\tgap: 10px;\n\twidth: 30%;\n}\n#mainContent {\n\tdisplay: flex;\n\tflex: 1;\n\toverflow: auto;\n}\n\n#tasks {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n}\n.icon:hover {\n\tscale: 1.3;\n\ttransition: 0.2s;\n}\n#taskContainer {\n\twidth: 70%;\n}\n\n.task,\n#subtitle {\n\tdisplay: grid;\n\tgrid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-auto-flow: column;\n\tpadding-right: 20px;\n\tgap: 10px;\n}\n\n.task input[type=\"checkbox\"] {\n\twidth: 20px;\n\theight: auto;\n}\n\nimg {\n\tcursor: pointer;\n}\n\n#sidebar {\n\tbackground-color: rgb(230, 230, 230);\n\tmin-width: 250px;\n\theight: 100%;\n}\n\n#sidebar ul {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tlist-style: none;\n}\n\n#sidebar li {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 5px;\n\ttransition: 0.3s;\n\tborder-radius: 5px;\n\tbackground-color: var(--off-white);\n\tpadding: 10px;\n\tborder: solid 1px rgba(33, 147, 176, 0);\n}\n\n#sidebar li:hover {\n\ttransition: 0.3s;\n\tborder: solid 1px rgba(33, 147, 176, 1);\n\tcursor: pointer;\n}\n\n#sidebar #addProjectBtn {\n\ttext-align: center;\n\tfont-weight: 700;\n\tfont-size: 3rem;\n\tpadding: 0;\n}\n\n.line {\n\twidth: 100%;\n\tborder-top: solid 1px rgba(0, 0, 0, 0.5);\n}\n\n.active {\n\ttransition: 0.3s;\n\tbackground: linear-gradient(\n\t\t90deg,\n\t\trgba(33, 147, 176, 1) 0%,\n\t\trgba(109, 213, 237, 1) 100%\n\t);\n\tcolor: var(--off-white);\n}\n\n@media only screen and (max-width: 600px) {\n\t.modal {\n\t\twidth: 90%;\n\t}\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */


const model = () => {
	let currentProject = 0;
	const projectsList = [
		{
			id: 0,
			title: "Test Project 1",
			taskList: [{ id: 0, title: "Test Task1", desc: "Test desc" }],
		},
		{
			id: 1,
			title: "Test Project 2",
			taskList: [
				{ id: 0, title: "Test Task1", desc: "Test desc" },
				{ id: 0, title: "Test Task1", desc: "Test desc" },
				{ id: 0, title: "Test Task1", desc: "Test desc" },
			],
		},
	];

	const project = (id, title, taskList) => {
		return { id, title, taskList };
	};

	const task = (id, title, desc, dueDate, priority, completed = false) => {
		return { id, title, desc, dueDate, priority, completed };
	};

	const setCurrentProject = (projId) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(projId);
		});

		currentProject = index;
	};

	const getCurrentProject = () => {
		return currentProject;
	};

	const addProject = (id, title, taskList = []) => {
		id =
			projectsList.length > 0 ? projectsList[projectsList.length - 1].id + 1 : 0;

		const newProject = project(id, title, taskList);
		projectsList.push(newProject);
		currentProject = projectsList.length - 1;
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("tasksUpdated", projectsList[getCurrentProject()]);
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ListUpdated", projectsList);
	};

	const addTask = (freshTask) => {
		const id =
			projectsList[getCurrentProject()].taskList.length > 0
				? projectsList[getCurrentProject()].taskList[
						projectsList[getCurrentProject()].taskList.length - 1
				  ].id + 1
				: 0;

		const newTask = task(
			id,
			freshTask[0],
			freshTask[1],
			freshTask[2],
			freshTask[3]
		);
		projectsList[getCurrentProject()].taskList.push(newTask);

		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const deleteProject = (id) => {
		const index = projectsList.findIndex((proj) => {
			return proj.id === Number(id);
		});
		projectsList.splice(index, 1);
		currentProject -= 1;
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ListUpdated", projectsList);
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	const deleteTask = (id) => {
		const index = projectsList[getCurrentProject()].taskList.findIndex(
			(taskid) => {
				return taskid.id === Number(id);
			}
		);

		projectsList[getCurrentProject()].taskList.splice(index, 1);
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("tasksUpdated", projectsList[getCurrentProject()]);
	};

	return {
		getCurrentProject,
		projectsList,
		addProject,

		addTask,
		deleteProject,
		setCurrentProject,
		deleteTask,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model());


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/edit.svg */ "./src/icons/edit.svg");
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */



const view = () => {
	const root = document.getElementById("mainContent");
	const projectForm = document.getElementById("projectForm");
	const taskForm = document.getElementById("taskForm");
	const titleInput = document.getElementById("titleInput");
	const taskSection = document.getElementById("taskList");
	const projectList = document.getElementById("projectList");
	const projCloseButton = document.getElementById("projCloseButton");
	const taskCloseButton = document.getElementById("taskCloseButton");
	const taskTitleInput = document.getElementById("taskTitleInput");
	const taskDescInput = document.getElementById("descInput");
	const taskDateInput = document.getElementById("dueInput");
	const taskPriInput = document.getElementById("priInput");
	const addTaskBtn = document.getElementById("addTaskBtn");

	const createImg = (name, image, idName, className) => {
		name = new Image();
		name.src = image;
		name.setAttribute("id", idName);
		if (className !== undefined) {
			name.classList.add(className);
		}
		return name;
	};

	const showModal = (data, form) => {
		const modal = document.querySelector(".projModalBg");
		const taskEditBtn = document.getElementById("taskEdit");
		const taskAddBtn = document.getElementById("taskSubmit");
		const title = document.querySelector("#modalTitle");
		modal.style.display === "flex"
			? (modal.style.display = "none")
			: (modal.style.display = "flex");

		if (form === "projectForm") {
			projectForm.style.display = "block";
			taskForm.style.display = "none";
		}

		if (form === "taskForm") {
			taskForm.reset();
			title.textContent = "Add Task";
			projectForm.style.display = "none";
			taskForm.style.display = "block";
			taskEditBtn.style.display = "none";
			taskAddBtn.style.display = "block";
		}

		if (form === "taskEdit") {
			taskTitleInput.value = data.title;
			taskDescInput.value = data.desc;
			taskDateInput.value = data.dueDate;
			taskPriInput.value = data.priority;
			title.textContent = "Edit Task";
			projectForm.style.display = "none";
			taskForm.style.display = "block";
			taskEditBtn.style.display = "block";
			taskAddBtn.style.display = "none";
		}
	};

	const getTitleText = () => {
		return titleInput.value;
	};

	const getTaskInfo = () => {
		const task = [
			taskTitleInput.value,
			taskDescInput.value,
			taskDateInput.value,
			taskPriInput.value,
		];
		return task;
	};

	const updateProjects = (projects) => {
		while (projectList.firstChild) {
			projectList.removeChild(projectList.firstChild);
		}
		const addProjBtn = document.createElement("li");
		addProjBtn.setAttribute("id", "addProjectBtn");
		addProjBtn.textContent = "+";

		if (projects.length === 0) {
			const empty = document.createElement("p");
			empty.textContent = "There's nothing here! Add a Project!";
			projectList.append(empty);
			projectList.append(addProjBtn);
		} else {
			projects.forEach((element) => {
				const proj = document.createElement("li");
				proj.classList.add("project");
				proj.setAttribute("data-project-id", element.id);
				proj.textContent = element.title;
				proj.append(createImg("editIcon", _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__, "projEdt", "icon"));
				proj.append(createImg("delIcon", _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__, "projDel", "icon"));

				projectList.append(proj);
				projectList.append(addProjBtn);
			});
		}
	};

	const setActiveProject = (currentProj) => {
		const taskList = document.querySelectorAll(".project");

		taskList.forEach((project) => {
			project.classList.remove("active");
			if (currentProj === Number(project.getAttribute("data-project-id"))) {
				project.classList.add("active");
			}
		});
	};

	const updateTasks = (proj) => {
		const title = document.querySelector("#taskContainer h2");
		const empty = document.createElement("h3");
		while (taskSection.firstChild) {
			taskSection.removeChild(taskSection.firstChild);
		}

		if (proj === undefined) {
			title.textContent = "Please select a project to view tasks";
			empty.textContent = "Please select a project to view tasks";
			taskSection.append(empty);
			addTaskBtn.style.display = "none";
			return;
		}

		if (proj.taskList.length === 0) {
			title.textContent = proj.title;
			empty.textContent = "There's nothing here, Create a new task!";
			taskSection.append(empty);
		}

		if (proj.taskList.length > 0) {
			title.textContent = proj.title;
			proj.taskList.forEach((element) => {
				const task = document.createElement("li");
				const check = document.createElement("input");
				const Tasktitle = document.createElement("p");
				const description = document.createElement("p");
				const date = document.createElement("p");
				const pri = document.createElement("p");
				Tasktitle.innerText = element.title;
				description.innerText = element.desc;
				date.innerText = element.dueDate;
				pri.innerText = element.priority;

				check.setAttribute("type", "checkbox");
				task.classList.add("task");
				task.setAttribute("data-task-id", element.id);
				task.append(check);
				task.append(Tasktitle);
				task.append(description);
				task.append(date);
				task.append(pri);
				task.append(createImg("editIcon", _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__, "taskEdt", "icon"));
				task.append(createImg("delIcon", _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__, "taskDel", "icon"));
				taskSection.append(task);
			});
		}
	};

	const bindTitleSubmit = (handler) => {
		projectForm.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTitleText());
			projectForm.reset();
		});
	};

	const bindTaskSubmit = (handler) => {
		taskForm.addEventListener("submit", (event) => {
			event.preventDefault();
			handler(getTaskInfo());
			taskForm.reset();
		});
	};

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});

		projCloseButton.addEventListener("click", (event) => {
			handler(event);
		});

		taskCloseButton.addEventListener("click", (event) => {
			handler(event);
		});
	}

	return {
		showModal,
		updateTasks,
		bindClick,
		bindTitleSubmit,
		bindTaskSubmit,
		updateProjects,
		setActiveProject,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "72fd34269ef2218be057.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9063f99eaba34002f172.svg";

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */





const header = document.createElement("div");
const title = document.createElement("h1");

title.innerHTML = "To Do List";
header.setAttribute("id", "header");
header.appendChild(title);

const controller = (() => {
	const viewable = (0,_view__WEBPACK_IMPORTED_MODULE_2__["default"])();

	viewable.updateProjects(_model__WEBPACK_IMPORTED_MODULE_3__["default"].projectsList);
	viewable.updateTasks(_model__WEBPACK_IMPORTED_MODULE_3__["default"].projectsList[_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject()]);
	viewable.setActiveProject(_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject());

	const handleAddProject = (projectTitle) => {
		_model__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(0, projectTitle);
	};

	const handleAddTask = (task) => {
		_model__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(task);
	};

	const handleClick = (event) => {
		const { target } = event;
		if (target.classList.contains("project")) {
			_model__WEBPACK_IMPORTED_MODULE_3__["default"].setCurrentProject(target.getAttribute("data-project-id"));
			viewable.setActiveProject(_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject());
			viewable.updateTasks(_model__WEBPACK_IMPORTED_MODULE_3__["default"].projectsList[_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject()]);
		}
		if (target.getAttribute("id") === "taskEdt") {
			viewable.showModal(
				_model__WEBPACK_IMPORTED_MODULE_3__["default"].projectsList[_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject()].taskList[
					target.parentElement.getAttribute("data-task-id")
				],
				"taskEdit"
			);
		}

		if (
			target.getAttribute("id") === "addProjectBtn" ||
			target.getAttribute("id") === "projCloseButton"
		) {
			viewable.showModal("", "projectForm");
		}

		if (
			target.getAttribute("id") === "addTaskBtn" ||
			target.getAttribute("id") === "taskCloseButton"
		) {
			viewable.showModal("", "taskForm");
		}

		if (target.getAttribute("id") === "projDel") {
			_model__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(target.parentElement.getAttribute("data-project-id"));
		}

		if (target.getAttribute("id") === "taskDel") {
			_model__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(target.parentElement.getAttribute("data-task-id"));
		}
	};

	pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe("ListUpdated", (msg, data) => {
		viewable.updateProjects(data);
		viewable.setActiveProject(_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject());
	});

	pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe("tasksUpdated", (msg, data) => {
		viewable.updateTasks(data);
		viewable.setActiveProject(_model__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject());
	});

	viewable.bindClick(handleClick);
	viewable.bindTitleSubmit(handleAddProject);
	viewable.bindTaskSubmit(handleAddTask);
})(_model__WEBPACK_IMPORTED_MODULE_3__["default"], _view__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0Q0FBRztBQUN6QyxxQ0FBcUMsOENBQUc7O0FBRXhDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0Q0FBRztBQUN6QyxxQ0FBcUMsOENBQUc7QUFDeEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsTnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNxQjtBQUNVO0FBQ0w7QUFDRTs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQUk7O0FBRXRCLHlCQUF5QiwyREFBa0I7QUFDM0Msc0JBQXNCLDJEQUFrQixDQUFDLGdFQUF1QjtBQUNoRSwyQkFBMkIsZ0VBQXVCOztBQUVsRDtBQUNBLEVBQUUseURBQWdCO0FBQ2xCOztBQUVBO0FBQ0EsRUFBRSxzREFBYTtBQUNmOztBQUVBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0EsR0FBRyxnRUFBdUI7QUFDMUIsNkJBQTZCLGdFQUF1QjtBQUNwRCx3QkFBd0IsMkRBQWtCLENBQUMsZ0VBQXVCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWtCLENBQUMsZ0VBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsNERBQW1CO0FBQ3RCOztBQUVBO0FBQ0EsR0FBRyx5REFBZ0I7QUFDbkI7QUFDQTs7QUFFQSxDQUFDLDBEQUFnQjtBQUNqQjtBQUNBLDRCQUE0QixnRUFBdUI7QUFDbkQsRUFBRTs7QUFFRixDQUFDLDBEQUFnQjtBQUNqQjtBQUNBLDRCQUE0QixnRUFBdUI7QUFDbkQsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsOENBQUssRUFBRSw2Q0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXHQtLW9mZi13aGl0ZTogI2Y1ZjVmNTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiAxMDBzdmg7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuI3NpZGViYXIgaDIsXFxuI3NpZGViYXIgbGkgcCxcXG4jc2lkZWJhciB1bCxcXG5oZWFkZXIgaDEsXFxuZm9ybSB1bCxcXG5odG1sLFxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIgaDEsXFxuaGVhZGVyIGgyLFxcbiNzaWRlYmFyIHVsLFxcbiNzaWRlYmFyIGgyLFxcbmxhYmVsIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Y29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0OTBkZWcsXFxuXFx0XFx0cmdiYSgzMywgMTQ3LCAxNzYsIDEpIDAlLFxcblxcdFxcdHJnYmEoMTA5LCAyMTMsIDIzNywgMSkgMTAwJVxcblxcdCk7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ucHJvak1vZGFsQmcsXFxuLnRhc2tNb2RhbEJnIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTk5LCAxOTksIDAuNjEpO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG4ubW9kYWwge1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMnB4IDVweCAjMDAwMDAwNWIpO1xcblxcdHdpZHRoOiAyNSU7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuI3Byb2plY3RGb3JtLFxcbiN0YXNrRm9ybSB7XFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbiN0YXNrRm9ybSB1bCBsaSBoZWFkZXIsXFxuI3Byb2plY3RGb3JtIHVsIGxpIGhlYWRlciB7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbiN0YXNrRm9ybSB1bCBsaSxcXG4jdGFza0Zvcm0sXFxuI3Rhc2tGb3JtIHVsLFxcbiNwcm9qZWN0Rm9ybSB1bCBsaSxcXG4jcHJvamVjdEZvcm0sXFxuI3Byb2plY3RGb3JtIHVsIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcbiN0YXNrRm9ybSB1bCBsaSxcXG4jcHJvamVjdEZvcm0gdWwgbGkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XFxufVxcbiN0YXNrRm9ybSBsYWJlbCxcXG4jcHJvamVjdEZvcm0gbGFiZWwge1xcblxcdHdpZHRoOiA5MCU7XFxufVxcbmxhYmVsIHRleHRhcmVhLFxcbmxhYmVsIHNlbGVjdCxcXG5sYWJlbCBpbnB1dCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE5OSk7XFxufVxcblxcbmxhYmVsIHNlbGVjdCB7XFxuXFx0d2lkdGg6IDEwMyU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmxhYmVsIHRleHRhcmVhIHtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogLTIwcHg7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdHdpZHRoOiAzMCU7XFxufVxcbiNtYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4OiAxO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jdGFza3Mge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi5pY29uOmhvdmVyIHtcXG5cXHRzY2FsZTogMS4zO1xcblxcdHRyYW5zaXRpb246IDAuMnM7XFxufVxcbiN0YXNrQ29udGFpbmVyIHtcXG5cXHR3aWR0aDogNzAlO1xcbn1cXG5cXG4udGFzayxcXG4jc3VidGl0bGUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnIgMWZyIDFmciAxZnI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcblxcdGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5pbWcge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG5cXHRtaW4td2lkdGg6IDI1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIgdWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3NpZGViYXIgbGkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogNXB4O1xcblxcdHRyYW5zaXRpb246IDAuM3M7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDMzLCAxNDcsIDE3NiwgMCk7XFxufVxcblxcbiNzaWRlYmFyIGxpOmhvdmVyIHtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcblxcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMzMsIDE0NywgMTc2LCAxKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyICNhZGRQcm9qZWN0QnRuIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLmxpbmUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5hY3RpdmUge1xcblxcdHRyYW5zaXRpb246IDAuM3M7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdDkwZGVnLFxcblxcdFxcdHJnYmEoMzMsIDE0NywgMTc2LCAxKSAwJSxcXG5cXHRcXHRyZ2JhKDEwOSwgMjEzLCAyMzcsIDEpIDEwMCVcXG5cXHQpO1xcblxcdGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0Lm1vZGFsIHtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGNBQWM7Q0FDZCxzQkFBc0I7QUFDdkI7QUFDQTs7Ozs7OztDQU9DLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Ozs7O0NBS0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQjs7OztFQUlDO0NBQ0QsWUFBWTtBQUNiOztBQUVBOztDQUVDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsZUFBZTtDQUNmLDJDQUEyQztDQUMzQywwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsa0NBQWtDO0NBQ2xDLDBDQUEwQztDQUMxQyxVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixhQUFhO0FBQ2Q7QUFDQTs7Ozs7O0NBTUMsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1QjtBQUNBOztDQUVDLFVBQVU7QUFDWDtBQUNBOzs7Q0FHQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsV0FBVztDQUNYLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7QUFDQTtDQUNDLGFBQWE7Q0FDYixPQUFPO0NBQ1AsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixXQUFXO0FBQ1o7QUFDQTtDQUNDLFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2IsNENBQTRDO0NBQzVDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtDQUFrQztDQUNsQyxhQUFhO0NBQ2IsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVDQUF1QztDQUN2QyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQjs7OztFQUlDO0NBQ0QsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7RUFDQyxVQUFVO0NBQ1g7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0LS1vZmYtd2hpdGU6ICNmNWY1ZjU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwc3ZoO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiNzaWRlYmFyIGgyLFxcbiNzaWRlYmFyIGxpIHAsXFxuI3NpZGViYXIgdWwsXFxuaGVhZGVyIGgxLFxcbmZvcm0gdWwsXFxuaHRtbCxcXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIGgxLFxcbmhlYWRlciBoMixcXG4jc2lkZWJhciB1bCxcXG4jc2lkZWJhciBoMixcXG5sYWJlbCB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdDkwZGVnLFxcblxcdFxcdHJnYmEoMzMsIDE0NywgMTc2LCAxKSAwJSxcXG5cXHRcXHRyZ2JhKDEwOSwgMjEzLCAyMzcsIDEpIDEwMCVcXG5cXHQpO1xcblxcdGhlaWdodDogNjBweDtcXG59XFxuXFxuLnByb2pNb2RhbEJnLFxcbi50YXNrTW9kYWxCZyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDE5OSwgMTk5LCAwLjYxKTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuLm1vZGFsIHtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDJweCA1cHggIzAwMDAwMDViKTtcXG5cXHR3aWR0aDogMjUlO1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcbiNwcm9qZWN0Rm9ybSxcXG4jdGFza0Zvcm0ge1xcblxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4jdGFza0Zvcm0gdWwgbGkgaGVhZGVyLFxcbiNwcm9qZWN0Rm9ybSB1bCBsaSBoZWFkZXIge1xcblxcdGhlaWdodDogNDBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG4jdGFza0Zvcm0gdWwgbGksXFxuI3Rhc2tGb3JtLFxcbiN0YXNrRm9ybSB1bCxcXG4jcHJvamVjdEZvcm0gdWwgbGksXFxuI3Byb2plY3RGb3JtLFxcbiNwcm9qZWN0Rm9ybSB1bCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG4jdGFza0Zvcm0gdWwgbGksXFxuI3Byb2plY3RGb3JtIHVsIGxpIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzMHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMHB4IDEwcHggMTBweCAxMHB4O1xcbn1cXG4jdGFza0Zvcm0gbGFiZWwsXFxuI3Byb2plY3RGb3JtIGxhYmVsIHtcXG5cXHR3aWR0aDogOTAlO1xcbn1cXG5sYWJlbCB0ZXh0YXJlYSxcXG5sYWJlbCBzZWxlY3QsXFxubGFiZWwgaW5wdXQge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xOTkpO1xcbn1cXG5cXG5sYWJlbCBzZWxlY3Qge1xcblxcdHdpZHRoOiAxMDMlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5sYWJlbCB0ZXh0YXJlYSB7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IC0yMHB4O1xcblxcdGdhcDogMTBweDtcXG5cXHR3aWR0aDogMzAlO1xcbn1cXG4jbWFpbkNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleDogMTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI3Rhc2tzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4uaWNvbjpob3ZlciB7XFxuXFx0c2NhbGU6IDEuMztcXG5cXHR0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4jdGFza0NvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDcwJTtcXG59XFxuXFxuLnRhc2ssXFxuI3N1YnRpdGxlIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyIDFmciAxZnIgMWZyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuaW1nIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuXFx0bWluLXdpZHRoOiAyNTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyIHVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNzaWRlYmFyIGxpIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDVweDtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgzMywgMTQ3LCAxNzYsIDApO1xcbn1cXG5cXG4jc2lkZWJhciBsaTpob3ZlciB7XFxuXFx0dHJhbnNpdGlvbjogMC4zcztcXG5cXHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDMzLCAxNDcsIDE3NiwgMSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhciAjYWRkUHJvamVjdEJ0biB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5saW5lIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHQ5MGRlZyxcXG5cXHRcXHRyZ2JhKDMzLCAxNDcsIDE3NiwgMSkgMCUsXFxuXFx0XFx0cmdiYSgxMDksIDIxMywgMjM3LCAxKSAxMDAlXFxuXFx0KTtcXG5cXHRjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdC5tb2RhbCB7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcblxuICAgIGlmIChyb290LlB1YlN1Yikge1xuICAgICAgICBQdWJTdWIgPSByb290LlB1YlN1YjtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHViU3ViIGFscmVhZHkgbG9hZGVkLCB1c2luZyBleGlzdGluZyB2ZXJzaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuXG5jb25zdCBtb2RlbCA9ICgpID0+IHtcblx0bGV0IGN1cnJlbnRQcm9qZWN0ID0gMDtcblx0Y29uc3QgcHJvamVjdHNMaXN0ID0gW1xuXHRcdHtcblx0XHRcdGlkOiAwLFxuXHRcdFx0dGl0bGU6IFwiVGVzdCBQcm9qZWN0IDFcIixcblx0XHRcdHRhc2tMaXN0OiBbeyBpZDogMCwgdGl0bGU6IFwiVGVzdCBUYXNrMVwiLCBkZXNjOiBcIlRlc3QgZGVzY1wiIH1dLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IDEsXG5cdFx0XHR0aXRsZTogXCJUZXN0IFByb2plY3QgMlwiLFxuXHRcdFx0dGFza0xpc3Q6IFtcblx0XHRcdFx0eyBpZDogMCwgdGl0bGU6IFwiVGVzdCBUYXNrMVwiLCBkZXNjOiBcIlRlc3QgZGVzY1wiIH0sXG5cdFx0XHRcdHsgaWQ6IDAsIHRpdGxlOiBcIlRlc3QgVGFzazFcIiwgZGVzYzogXCJUZXN0IGRlc2NcIiB9LFxuXHRcdFx0XHR7IGlkOiAwLCB0aXRsZTogXCJUZXN0IFRhc2sxXCIsIGRlc2M6IFwiVGVzdCBkZXNjXCIgfSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCBwcm9qZWN0ID0gKGlkLCB0aXRsZSwgdGFza0xpc3QpID0+IHtcblx0XHRyZXR1cm4geyBpZCwgdGl0bGUsIHRhc2tMaXN0IH07XG5cdH07XG5cblx0Y29uc3QgdGFzayA9IChpZCwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuXHRcdHJldHVybiB7IGlkLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCB9O1xuXHR9O1xuXG5cdGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKHByb2pJZCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleCgocHJvaikgPT4ge1xuXHRcdFx0cmV0dXJuIHByb2ouaWQgPT09IE51bWJlcihwcm9qSWQpO1xuXHRcdH0pO1xuXG5cdFx0Y3VycmVudFByb2plY3QgPSBpbmRleDtcblx0fTtcblxuXHRjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gY3VycmVudFByb2plY3Q7XG5cdH07XG5cblx0Y29uc3QgYWRkUHJvamVjdCA9IChpZCwgdGl0bGUsIHRhc2tMaXN0ID0gW10pID0+IHtcblx0XHRpZCA9XG5cdFx0XHRwcm9qZWN0c0xpc3QubGVuZ3RoID4gMCA/IHByb2plY3RzTGlzdFtwcm9qZWN0c0xpc3QubGVuZ3RoIC0gMV0uaWQgKyAxIDogMDtcblxuXHRcdGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGlkLCB0aXRsZSwgdGFza0xpc3QpO1xuXHRcdHByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuXHRcdGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNMaXN0Lmxlbmd0aCAtIDE7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJ0YXNrc1VwZGF0ZWRcIiwgcHJvamVjdHNMaXN0W2dldEN1cnJlbnRQcm9qZWN0KCldKTtcblx0XHRQdWJTdWIucHVibGlzaChcIkxpc3RVcGRhdGVkXCIsIHByb2plY3RzTGlzdCk7XG5cdH07XG5cblx0Y29uc3QgYWRkVGFzayA9IChmcmVzaFRhc2spID0+IHtcblx0XHRjb25zdCBpZCA9XG5cdFx0XHRwcm9qZWN0c0xpc3RbZ2V0Q3VycmVudFByb2plY3QoKV0udGFza0xpc3QubGVuZ3RoID4gMFxuXHRcdFx0XHQ/IHByb2plY3RzTGlzdFtnZXRDdXJyZW50UHJvamVjdCgpXS50YXNrTGlzdFtcblx0XHRcdFx0XHRcdHByb2plY3RzTGlzdFtnZXRDdXJyZW50UHJvamVjdCgpXS50YXNrTGlzdC5sZW5ndGggLSAxXG5cdFx0XHRcdCAgXS5pZCArIDFcblx0XHRcdFx0OiAwO1xuXG5cdFx0Y29uc3QgbmV3VGFzayA9IHRhc2soXG5cdFx0XHRpZCxcblx0XHRcdGZyZXNoVGFza1swXSxcblx0XHRcdGZyZXNoVGFza1sxXSxcblx0XHRcdGZyZXNoVGFza1syXSxcblx0XHRcdGZyZXNoVGFza1szXVxuXHRcdCk7XG5cdFx0cHJvamVjdHNMaXN0W2dldEN1cnJlbnRQcm9qZWN0KCldLnRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG5cblx0XHRQdWJTdWIucHVibGlzaChcInRhc2tzVXBkYXRlZFwiLCBwcm9qZWN0c0xpc3RbZ2V0Q3VycmVudFByb2plY3QoKV0pO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcblx0XHRjb25zdCBpbmRleCA9IHByb2plY3RzTGlzdC5maW5kSW5kZXgoKHByb2opID0+IHtcblx0XHRcdHJldHVybiBwcm9qLmlkID09PSBOdW1iZXIoaWQpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdGN1cnJlbnRQcm9qZWN0IC09IDE7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJMaXN0VXBkYXRlZFwiLCBwcm9qZWN0c0xpc3QpO1xuXHRcdFB1YlN1Yi5wdWJsaXNoKFwidGFza3NVcGRhdGVkXCIsIHByb2plY3RzTGlzdFtnZXRDdXJyZW50UHJvamVjdCgpXSk7XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlVGFzayA9IChpZCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gcHJvamVjdHNMaXN0W2dldEN1cnJlbnRQcm9qZWN0KCldLnRhc2tMaXN0LmZpbmRJbmRleChcblx0XHRcdCh0YXNraWQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRhc2tpZC5pZCA9PT0gTnVtYmVyKGlkKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0cHJvamVjdHNMaXN0W2dldEN1cnJlbnRQcm9qZWN0KCldLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJ0YXNrc1VwZGF0ZWRcIiwgcHJvamVjdHNMaXN0W2dldEN1cnJlbnRQcm9qZWN0KCldKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldEN1cnJlbnRQcm9qZWN0LFxuXHRcdHByb2plY3RzTGlzdCxcblx0XHRhZGRQcm9qZWN0LFxuXG5cdFx0YWRkVGFzayxcblx0XHRkZWxldGVQcm9qZWN0LFxuXHRcdHNldEN1cnJlbnRQcm9qZWN0LFxuXHRcdGRlbGV0ZVRhc2ssXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbCgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IGRlbCBmcm9tIFwiLi9pY29ucy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWR0IGZyb20gXCIuL2ljb25zL2VkaXQuc3ZnXCI7XG5cbmNvbnN0IHZpZXcgPSAoKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xuXHRjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIik7XG5cdGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcblx0Y29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKTtcblx0Y29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tMaXN0XCIpO1xuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5cdGNvbnN0IHByb2pDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvakNsb3NlQnV0dG9uXCIpO1xuXHRjb25zdCB0YXNrQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDbG9zZUJ1dHRvblwiKTtcblx0Y29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZUlucHV0XCIpO1xuXHRjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjSW5wdXRcIik7XG5cdGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZUlucHV0XCIpO1xuXHRjb25zdCB0YXNrUHJpSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaUlucHV0XCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnRuXCIpO1xuXG5cdGNvbnN0IGNyZWF0ZUltZyA9IChuYW1lLCBpbWFnZSwgaWROYW1lLCBjbGFzc05hbWUpID0+IHtcblx0XHRuYW1lID0gbmV3IEltYWdlKCk7XG5cdFx0bmFtZS5zcmMgPSBpbWFnZTtcblx0XHRuYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkTmFtZSk7XG5cdFx0aWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH07XG5cblx0Y29uc3Qgc2hvd01vZGFsID0gKGRhdGEsIGZvcm0pID0+IHtcblx0XHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvak1vZGFsQmdcIik7XG5cdFx0Y29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tFZGl0XCIpO1xuXHRcdGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTdWJtaXRcIik7XG5cdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsVGl0bGVcIik7XG5cdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCJcblx0XHRcdD8gKG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcblx0XHRcdDogKG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIik7XG5cblx0XHRpZiAoZm9ybSA9PT0gXCJwcm9qZWN0Rm9ybVwiKSB7XG5cdFx0XHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH1cblxuXHRcdGlmIChmb3JtID09PSBcInRhc2tGb3JtXCIpIHtcblx0XHRcdHRhc2tGb3JtLnJlc2V0KCk7XG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblx0XHRcdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHR0YXNrRWRpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0YXNrQWRkQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGZvcm0gPT09IFwidGFza0VkaXRcIikge1xuXHRcdFx0dGFza1RpdGxlSW5wdXQudmFsdWUgPSBkYXRhLnRpdGxlO1xuXHRcdFx0dGFza0Rlc2NJbnB1dC52YWx1ZSA9IGRhdGEuZGVzYztcblx0XHRcdHRhc2tEYXRlSW5wdXQudmFsdWUgPSBkYXRhLmR1ZURhdGU7XG5cdFx0XHR0YXNrUHJpSW5wdXQudmFsdWUgPSBkYXRhLnByaW9yaXR5O1xuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuXHRcdFx0cHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdHRhc2tFZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHR0YXNrQWRkQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgZ2V0VGl0bGVUZXh0ID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aXRsZUlucHV0LnZhbHVlO1xuXHR9O1xuXG5cdGNvbnN0IGdldFRhc2tJbmZvID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRhc2sgPSBbXG5cdFx0XHR0YXNrVGl0bGVJbnB1dC52YWx1ZSxcblx0XHRcdHRhc2tEZXNjSW5wdXQudmFsdWUsXG5cdFx0XHR0YXNrRGF0ZUlucHV0LnZhbHVlLFxuXHRcdFx0dGFza1ByaUlucHV0LnZhbHVlLFxuXHRcdF07XG5cdFx0cmV0dXJuIHRhc2s7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcblx0XHR3aGlsZSAocHJvamVjdExpc3QuZmlyc3RDaGlsZCkge1xuXHRcdFx0cHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0YWRkUHJvakJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3RCdG5cIik7XG5cdFx0YWRkUHJvakJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG5cdFx0aWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Y29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdGVtcHR5LnRleHRDb250ZW50ID0gXCJUaGVyZSdzIG5vdGhpbmcgaGVyZSEgQWRkIGEgUHJvamVjdCFcIjtcblx0XHRcdHByb2plY3RMaXN0LmFwcGVuZChlbXB0eSk7XG5cdFx0XHRwcm9qZWN0TGlzdC5hcHBlbmQoYWRkUHJvakJ0bik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0Y29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdFx0cHJvai5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblx0XHRcdFx0cHJvai5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgZWxlbWVudC5pZCk7XG5cdFx0XHRcdHByb2oudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRwcm9qLmFwcGVuZChjcmVhdGVJbWcoXCJlZGl0SWNvblwiLCBlZHQsIFwicHJvakVkdFwiLCBcImljb25cIikpO1xuXHRcdFx0XHRwcm9qLmFwcGVuZChjcmVhdGVJbWcoXCJkZWxJY29uXCIsIGRlbCwgXCJwcm9qRGVsXCIsIFwiaWNvblwiKSk7XG5cblx0XHRcdFx0cHJvamVjdExpc3QuYXBwZW5kKHByb2opO1xuXHRcdFx0XHRwcm9qZWN0TGlzdC5hcHBlbmQoYWRkUHJvakJ0bik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChjdXJyZW50UHJvaikgPT4ge1xuXHRcdGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXG5cdFx0dGFza0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFx0cHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdFx0aWYgKGN1cnJlbnRQcm9qID09PSBOdW1iZXIocHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpKSB7XG5cdFx0XHRcdHByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVUYXNrcyA9IChwcm9qKSA9PiB7XG5cdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tDb250YWluZXIgaDJcIik7XG5cdFx0Y29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdFx0d2hpbGUgKHRhc2tTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHRhc2tTZWN0aW9uLnJlbW92ZUNoaWxkKHRhc2tTZWN0aW9uLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdGlmIChwcm9qID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gXCJQbGVhc2Ugc2VsZWN0IGEgcHJvamVjdCB0byB2aWV3IHRhc2tzXCI7XG5cdFx0XHRlbXB0eS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIHNlbGVjdCBhIHByb2plY3QgdG8gdmlldyB0YXNrc1wiO1xuXHRcdFx0dGFza1NlY3Rpb24uYXBwZW5kKGVtcHR5KTtcblx0XHRcdGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwcm9qLnRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qLnRpdGxlO1xuXHRcdFx0ZW1wdHkudGV4dENvbnRlbnQgPSBcIlRoZXJlJ3Mgbm90aGluZyBoZXJlLCBDcmVhdGUgYSBuZXcgdGFzayFcIjtcblx0XHRcdHRhc2tTZWN0aW9uLmFwcGVuZChlbXB0eSk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb2oudGFza0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qLnRpdGxlO1xuXHRcdFx0cHJvai50YXNrTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRcdGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0XHRjb25zdCBUYXNrdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRjb25zdCBwcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRcdFx0VGFza3RpdGxlLmlubmVyVGV4dCA9IGVsZW1lbnQudGl0bGU7XG5cdFx0XHRcdGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGVsZW1lbnQuZGVzYztcblx0XHRcdFx0ZGF0ZS5pbm5lclRleHQgPSBlbGVtZW50LmR1ZURhdGU7XG5cdFx0XHRcdHByaS5pbm5lclRleHQgPSBlbGVtZW50LnByaW9yaXR5O1xuXG5cdFx0XHRcdGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblx0XHRcdFx0dGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblx0XHRcdFx0dGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgZWxlbWVudC5pZCk7XG5cdFx0XHRcdHRhc2suYXBwZW5kKGNoZWNrKTtcblx0XHRcdFx0dGFzay5hcHBlbmQoVGFza3RpdGxlKTtcblx0XHRcdFx0dGFzay5hcHBlbmQoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHR0YXNrLmFwcGVuZChkYXRlKTtcblx0XHRcdFx0dGFzay5hcHBlbmQocHJpKTtcblx0XHRcdFx0dGFzay5hcHBlbmQoY3JlYXRlSW1nKFwiZWRpdEljb25cIiwgZWR0LCBcInRhc2tFZHRcIiwgXCJpY29uXCIpKTtcblx0XHRcdFx0dGFzay5hcHBlbmQoY3JlYXRlSW1nKFwiZGVsSWNvblwiLCBkZWwsIFwidGFza0RlbFwiLCBcImljb25cIikpO1xuXHRcdFx0XHR0YXNrU2VjdGlvbi5hcHBlbmQodGFzayk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgYmluZFRpdGxlU3VibWl0ID0gKGhhbmRsZXIpID0+IHtcblx0XHRwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGhhbmRsZXIoZ2V0VGl0bGVUZXh0KCkpO1xuXHRcdFx0cHJvamVjdEZvcm0ucmVzZXQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBiaW5kVGFza1N1Ym1pdCA9IChoYW5kbGVyKSA9PiB7XG5cdFx0dGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRoYW5kbGVyKGdldFRhc2tJbmZvKCkpO1xuXHRcdFx0dGFza0Zvcm0ucmVzZXQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRmdW5jdGlvbiBiaW5kQ2xpY2soaGFuZGxlcikge1xuXHRcdHJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0aGFuZGxlcihldmVudCk7XG5cdFx0fSk7XG5cblx0XHRwcm9qQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0aGFuZGxlcihldmVudCk7XG5cdFx0fSk7XG5cblx0XHR0YXNrQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0aGFuZGxlcihldmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHNob3dNb2RhbCxcblx0XHR1cGRhdGVUYXNrcyxcblx0XHRiaW5kQ2xpY2ssXG5cdFx0YmluZFRpdGxlU3VibWl0LFxuXHRcdGJpbmRUYXNrU3VibWl0LFxuXHRcdHVwZGF0ZVByb2plY3RzLFxuXHRcdHNldEFjdGl2ZVByb2plY3QsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFB1YlN1YiBmcm9tIFwicHVic3ViLWpzXCI7XG5pbXBvcnQgdmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgbW9kZWwgZnJvbSBcIi4vbW9kZWxcIjtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG50aXRsZS5pbm5lckhUTUwgPSBcIlRvIERvIExpc3RcIjtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCB2aWV3YWJsZSA9IHZpZXcoKTtcblxuXHR2aWV3YWJsZS51cGRhdGVQcm9qZWN0cyhtb2RlbC5wcm9qZWN0c0xpc3QpO1xuXHR2aWV3YWJsZS51cGRhdGVUYXNrcyhtb2RlbC5wcm9qZWN0c0xpc3RbbW9kZWwuZ2V0Q3VycmVudFByb2plY3QoKV0pO1xuXHR2aWV3YWJsZS5zZXRBY3RpdmVQcm9qZWN0KG1vZGVsLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuXG5cdGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG5cdFx0bW9kZWwuYWRkUHJvamVjdCgwLCBwcm9qZWN0VGl0bGUpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAodGFzaykgPT4ge1xuXHRcdG1vZGVsLmFkZFRhc2sodGFzayk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcblx0XHRjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG5cdFx0aWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XG5cdFx0XHRtb2RlbC5zZXRDdXJyZW50UHJvamVjdCh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKTtcblx0XHRcdHZpZXdhYmxlLnNldEFjdGl2ZVByb2plY3QobW9kZWwuZ2V0Q3VycmVudFByb2plY3QoKSk7XG5cdFx0XHR2aWV3YWJsZS51cGRhdGVUYXNrcyhtb2RlbC5wcm9qZWN0c0xpc3RbbW9kZWwuZ2V0Q3VycmVudFByb2plY3QoKV0pO1xuXHRcdH1cblx0XHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInRhc2tFZHRcIikge1xuXHRcdFx0dmlld2FibGUuc2hvd01vZGFsKFxuXHRcdFx0XHRtb2RlbC5wcm9qZWN0c0xpc3RbbW9kZWwuZ2V0Q3VycmVudFByb2plY3QoKV0udGFza0xpc3RbXG5cdFx0XHRcdFx0dGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwidGFza0VkaXRcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHR0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiYWRkUHJvamVjdEJ0blwiIHx8XG5cdFx0XHR0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwicHJvakNsb3NlQnV0dG9uXCJcblx0XHQpIHtcblx0XHRcdHZpZXdhYmxlLnNob3dNb2RhbChcIlwiLCBcInByb2plY3RGb3JtXCIpO1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJhZGRUYXNrQnRuXCIgfHxcblx0XHRcdHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJ0YXNrQ2xvc2VCdXR0b25cIlxuXHRcdCkge1xuXHRcdFx0dmlld2FibGUuc2hvd01vZGFsKFwiXCIsIFwidGFza0Zvcm1cIik7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJwcm9qRGVsXCIpIHtcblx0XHRcdG1vZGVsLmRlbGV0ZVByb2plY3QodGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKTtcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInRhc2tEZWxcIikge1xuXHRcdFx0bW9kZWwuZGVsZXRlVGFzayh0YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpO1xuXHRcdH1cblx0fTtcblxuXHRQdWJTdWIuc3Vic2NyaWJlKFwiTGlzdFVwZGF0ZWRcIiwgKG1zZywgZGF0YSkgPT4ge1xuXHRcdHZpZXdhYmxlLnVwZGF0ZVByb2plY3RzKGRhdGEpO1xuXHRcdHZpZXdhYmxlLnNldEFjdGl2ZVByb2plY3QobW9kZWwuZ2V0Q3VycmVudFByb2plY3QoKSk7XG5cdH0pO1xuXG5cdFB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrc1VwZGF0ZWRcIiwgKG1zZywgZGF0YSkgPT4ge1xuXHRcdHZpZXdhYmxlLnVwZGF0ZVRhc2tzKGRhdGEpO1xuXHRcdHZpZXdhYmxlLnNldEFjdGl2ZVByb2plY3QobW9kZWwuZ2V0Q3VycmVudFByb2plY3QoKSk7XG5cdH0pO1xuXG5cdHZpZXdhYmxlLmJpbmRDbGljayhoYW5kbGVDbGljayk7XG5cdHZpZXdhYmxlLmJpbmRUaXRsZVN1Ym1pdChoYW5kbGVBZGRQcm9qZWN0KTtcblx0dmlld2FibGUuYmluZFRhc2tTdWJtaXQoaGFuZGxlQWRkVGFzayk7XG59KShtb2RlbCwgdmlldyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=