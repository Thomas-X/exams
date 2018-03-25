require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("is-js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var Home = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

Home.get('/', function (req, res) {
    res.send('hi from home');
});

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
	id: { type: String, required: true, unique: true },
	username: { type: String, maxLength: 255, required: true, unique: true },
	password: { type: String, maxLength: 255, required: true },
	role: { type: String, maxLength: 255, required: true, default: 'user' },
	creditCardId: { type: String, maxLength: 255, default: '' },
	accountId: { type: String, maxLength: 255, default: '' },
	organisationId: { type: String, maxLength: 255, default: '' }
});

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', schema);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ip__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_is_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_is_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_is_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controllers_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_home__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__factories_createAuthHandler__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global_constants__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_log__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__socket__ = __webpack_require__(25);


var _templateObject = _taggedTemplateLiteral(['{bold On your network:}     {underline http://', ':{bold ', '}/}'], ['{bold On your network:}     {underline http://', ':{bold ', '}/}']),
    _templateObject2 = _taggedTemplateLiteral(['Local:               {underline http://', ':{bold ', '}/}'], ['Local:               {underline http://', ':{bold ', '}/}']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
















__webpack_require__(27).config();

var Server = function Server() {
	var _this = this;

	_classCallCheck(this, Server);

	this.onListen = function (err) {
		if (err) {
			Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["a" /* error */])('Unable to start server on port ' + _this.port, err);
			return;
		}

		if (process.env.__DEV__) {
			Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["c" /* warn */])('We\'re in development mode.');
		}

		Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["b" /* info */])('We\'re live.\r\n');
		Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["b" /* info */])(__WEBPACK_IMPORTED_MODULE_2_chalk___default()(_templateObject, __WEBPACK_IMPORTED_MODULE_6_ip___default.a.address('public'), _this.port.toString()));
		Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["b" /* info */])(__WEBPACK_IMPORTED_MODULE_2_chalk___default()(_templateObject2, __WEBPACK_IMPORTED_MODULE_6_ip___default.a.address('private'), _this.port.toString()));
	};

	this.connectToDb = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
		var db;
		return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;

						__WEBPACK_IMPORTED_MODULE_8_mongoose___default.a.connect('mongodb://127.0.0.1/proefExamenTest', {
							useMongoClient: true
						});
						__WEBPACK_IMPORTED_MODULE_8_mongoose___default.a.Promise = global.Promise;
						db = __WEBPACK_IMPORTED_MODULE_8_mongoose___default.a.connection;


						db.on('error', function (err) {
							console.log();
							Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["a" /* error */])(err);
							throw new Error(err);
						});
						db.once('open', function () {
							Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["b" /* info */])('Successfully connected to database!');
							console.log();
							_this.start().catch(function (err) {
								console.log();
								Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["a" /* error */])(err);
								throw new Error(err);
							});
						});
						_context.next = 11;
						break;

					case 8:
						_context.prev = 8;
						_context.t0 = _context['catch'](0);
						throw new Error(_context.t0);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this, [[0, 8]]);
	}));
	this.start = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
		var http;
		return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_this.app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
						// TODO Change cors to not allow all origins, just frontend location.
						_this.app.use(__WEBPACK_IMPORTED_MODULE_3_cors__());
						Object(__WEBPACK_IMPORTED_MODULE_11__factories_createAuthHandler__["b" /* default */])();
						_this.setRoutes();
						http = new __WEBPACK_IMPORTED_MODULE_5_http__["Server"](_this.app);

						_this.socket = new __WEBPACK_IMPORTED_MODULE_14__socket__["a" /* default */](http);
						_this.socket.bindSockets();
						http.listen(_this.port, _this.onListen);

					case 8:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, _this);
	}));

	this.setRoutes = function () {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {

			for (var _iterator = __WEBPACK_IMPORTED_MODULE_12__global_constants__["a" /* ROUTES */][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var route = _step.value;
				var isPrivate = route.isPrivate,
				    allowedRoles = route.allowedRoles,
				    path = route.path,
				    controller = route.controller;


				if (!__WEBPACK_IMPORTED_MODULE_7_is_js___default.a.set(isPrivate) || !__WEBPACK_IMPORTED_MODULE_7_is_js___default.a.set(allowedRoles) || !__WEBPACK_IMPORTED_MODULE_7_is_js___default.a.set(path) || !__WEBPACK_IMPORTED_MODULE_7_is_js___default.a.set(controller) || typeof controller !== 'function') {
					continue;
				}

				var checkRole = function checkRole(req, res, next) {
					// TODO implement roles. Get user via req.user and check if the role is supported
					next();
				};

				if (isPrivate === true && allowedRoles.length === 0) {
					_this.app.use(path, __WEBPACK_IMPORTED_MODULE_11__factories_createAuthHandler__["a" /* authMiddleware */], controller);
				} else if (allowedRoles.length > 0 && isPrivate === true) {
					_this.app.use(path, __WEBPACK_IMPORTED_MODULE_11__factories_createAuthHandler__["a" /* authMiddleware */], checkRole, controller);
				} else if (isPrivate === false) {
					_this.app.use(path, controller);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		_this.app.use('/', __WEBPACK_IMPORTED_MODULE_10__controllers_home__["a" /* default */]);
		_this.app.use('/api', __WEBPACK_IMPORTED_MODULE_9__controllers_api__["a" /* default */]);

		// use auth middleware to auth routes.
		_this.app.use(__WEBPACK_IMPORTED_MODULE_11__factories_createAuthHandler__["a" /* authMiddleware */]);

		_this.app.use('/someAuthedRoute', function (req, res) {
			res.send('hi from authed route');
		});
	};

	this.app = __WEBPACK_IMPORTED_MODULE_4_express___default()();
	this.port = process.env.PORT || 3004;
	this.connectToDb().catch(function (err) {
		return Object(__WEBPACK_IMPORTED_MODULE_13__services_log__["a" /* error */])(err);
	});
};

/* harmony default export */ __webpack_exports__["default"] = (new Server());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authMiddleware; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_jwt__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_passport_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_passport_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_models_User__ = __webpack_require__(6);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/* harmony default export */ __webpack_exports__["b"] = (function () {
    var options = {
        jwtFromRequest: __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromExtractors([__WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromAuthHeaderAsBearerToken(), __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromUrlQueryParameter('auth'), __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["ExtractJwt"].fromHeader('authenticationToken')]),
        secretOrKey: process.env.secretKey
    };

    __WEBPACK_IMPORTED_MODULE_1_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_2_passport_jwt__["Strategy"](options, function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(jwtPayload, done) {
            var user;
            return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3__global_models_User__["a" /* default */].find({ id: jwtPayload.sub });

                        case 2:
                            user = _context.sent[0];

                            if (!user) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt('return', done(null, user));

                        case 7:
                            return _context.abrupt('return', done(null, false));

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }()));
});

var authMiddleware = __WEBPACK_IMPORTED_MODULE_1_passport___default.a.authenticate('jwt', { session: false });

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROLES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_home__ = __webpack_require__(5);



var ROLES = {
    admin: 'admin',
    manager: 'manager',
    user: 'user'
};

var ROUTES = [{
    path: '/',
    controller: __WEBPACK_IMPORTED_MODULE_1__controllers_home__["a" /* default */],
    allowedRoles: [],
    isPrivate: false
}, {
    path: '/auth',
    controller: __WEBPACK_IMPORTED_MODULE_0__controllers_auth__["a" /* default */],
    allowedRoles: [],
    isPrivate: false
}, {
    path: '/someAuthedRoute',
    controller: function controller(req, res) {
        res.send('hi from authed route');
    },
    allowedRoles: [],
    isPrivate: true
}];

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_validator_check__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_validator_check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_is_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_models_User__ = __webpack_require__(6);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









var Auth = Object(__WEBPACK_IMPORTED_MODULE_2_express__["Router"])();

var validations = [Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["check"])('username').exists().isAlphanumeric(), Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["check"])('password1').exists().isLength({ min: 6 })];

var checkIfValidatorFailed = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
        var errors, message;
        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        errors = Object(__WEBPACK_IMPORTED_MODULE_3_express_validator_check__["validationResult"])(req);

                        if (errors.isEmpty()) {
                            _context.next = 4;
                            break;
                        }

                        message = errors.formatWith(function (_ref2) {
                            var param = _ref2.param;

                            return 'Invalid ' + param + ' value';
                        }).array();
                        return _context.abrupt('return', res.status(422).json({ message: message[message.length - 1] }));

                    case 4:
                        next();

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function checkIfValidatorFailed(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

Auth.post('/register', validations, checkIfValidatorFailed, function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res, next) {
        var _req$body, username, password1, user, id, _user;

        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _req$body = req.body, username = _req$body.username, password1 = _req$body.password1;
                        _context2.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_7__global_models_User__["a" /* default */].find({ username: username });

                    case 4:
                        user = _context2.sent[0];

                        if (!__WEBPACK_IMPORTED_MODULE_4_is_js___default.a.set(user)) {
                            _context2.next = 10;
                            break;
                        }

                        res.status(422);
                        return _context2.abrupt('return', res.json({
                            message: 'User already exists'
                        }));

                    case 10:
                        if (__WEBPACK_IMPORTED_MODULE_4_is_js___default.a.set(user)) {
                            _context2.next = 21;
                            break;
                        }

                        id = __WEBPACK_IMPORTED_MODULE_6_uuid_v4___default()();
                        _context2.t0 = id;
                        _context2.t1 = username;
                        _context2.next = 16;
                        return Object(__WEBPACK_IMPORTED_MODULE_1_bcrypt__["hash"])(password1, Number(process.env.salt));

                    case 16:
                        _context2.t2 = _context2.sent;
                        _user = {
                            id: _context2.t0,
                            username: _context2.t1,
                            password: _context2.t2
                        };
                        _context2.next = 20;
                        return __WEBPACK_IMPORTED_MODULE_7__global_models_User__["a" /* default */].create(_user);

                    case 20:
                        return _context2.abrupt('return', res.json({
                            token: Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["sign"])({ sub: id }, process.env.secretKey)
                        }));

                    case 21:
                        _context2.next = 26;
                        break;

                    case 23:
                        _context2.prev = 23;
                        _context2.t3 = _context2['catch'](0);

                        next(_context2.t3);

                    case 26:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this, [[0, 23]]);
    }));

    return function (_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());

Auth.post('/login', validations, checkIfValidatorFailed, function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res, next) {
        var _req$body2, username, password1, user;

        return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _req$body2 = req.body, username = _req$body2.username, password1 = _req$body2.password1;
                        _context3.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_7__global_models_User__["a" /* default */].find({ username: username });

                    case 4:
                        user = _context3.sent[0];

                        if (user) {
                            _context3.next = 8;
                            break;
                        }

                        res.status(422);
                        return _context3.abrupt('return', res.json({
                            message: 'User does not exist'
                        }));

                    case 8:
                        _context3.next = 10;
                        return Object(__WEBPACK_IMPORTED_MODULE_1_bcrypt__["compare"])(password1, user.password);

                    case 10:
                        if (_context3.sent) {
                            _context3.next = 13;
                            break;
                        }

                        res.status(422);
                        return _context3.abrupt('return', res.json({
                            message: 'Incorrect password'
                        }));

                    case 13:
                        return _context3.abrupt('return', res.json({
                            token: Object(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["sign"])({ sub: user.id }, process.env.secretKey)
                        }));

                    case 16:
                        _context3.prev = 16;
                        _context3.t0 = _context3['catch'](0);

                        next(_context3.t0);

                    case 19:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, _this, [[0, 16]]);
    }));

    return function (_x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
    };
}());

/* harmony default export */ __webpack_exports__["a"] = (Auth);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express-validator/check");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warn; });
/* unused harmony export debug */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stack_trace__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stack_trace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stack_trace__);
var _templateObject = _taggedTemplateLiteral(['{bold.cyan INFO}'], ['{bold.cyan INFO}']),
    _templateObject2 = _taggedTemplateLiteral(['{bold.red ERR!}'], ['{bold.red ERR!}']),
    _templateObject3 = _taggedTemplateLiteral(['{bold.yellow WARN}'], ['{bold.yellow WARN}']),
    _templateObject4 = _taggedTemplateLiteral(['{bold.magenta VERB} ', ''], ['{bold.magenta VERB} ', '']),
    _templateObject5 = _taggedTemplateLiteral(['{bgBlack.white  ', ' }'], ['{bgBlack.white  ', ' }']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var log = function log() {
    for (var _len = arguments.length, misc = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        misc[_key - 2] = arguments[_key];
    }

    var _console;

    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';
    var message = arguments[1];

    if (type === 'debug' && process.env.DEBUG !== 'true') {
        return;
    }
    var content = [];
    switch (type) {
        case 'log':
            content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject)];
            break;
        case 'error':
            content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject2)];
            break;
        case 'warn':
            content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject3)];
            break;
        case 'debug':
            {
                var trace = Object(__WEBPACK_IMPORTED_MODULE_1_stack_trace__["get"])();
                var funcName = trace[2].getFunctionName();
                content = [__WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject4, funcName ? __WEBPACK_IMPORTED_MODULE_0_chalk___default()(_templateObject5, funcName.substr(0, 15)) : '')];
                break;
            }
        default:
            throw new Error('Invalid log type: ' + type);
    }

    content = [].concat(_toConsumableArray(content), [message], misc);

    (_console = console)[type === 'debug' ? 'log' : type].apply(_console, _toConsumableArray(content));
};

var info = function info(message) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
    }

    return log.apply(undefined, ['log', message].concat(rest));
};
var error = function error(message) {
    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
    }

    return log.apply(undefined, ['error', message].concat(rest));
};
var warn = function warn(message) {
    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
    }

    return log.apply(undefined, ['warn', message].concat(rest));
};
var debug = function debug(message) {
    for (var _len5 = arguments.length, rest = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
    }

    return log.apply(undefined, ['debug', message].concat(rest));
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("stack-trace");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Socket = function () {
    function Socket(http) {
        _classCallCheck(this, Socket);

        this.io = __WEBPACK_IMPORTED_MODULE_0_socket_io___default()(http);
    }

    _createClass(Socket, [{
        key: 'bindSockets',
        value: function bindSockets() {
            // bind sockets here
            // samples
            // this.io.emit('bla', {bla: 'bla' });
            // this.io.on('bla', (data) => { info(data) });
        }
    }]);

    return Socket;
}();

/* harmony default export */ __webpack_exports__["a"] = (Socket);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factories_createAuthHandler__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_models_Account__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_models_Organisation__ = __webpack_require__(30);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var Api = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

Api.get('/', function (req, res) {
	res.send('hi from Api');
});

Api.get('/getAllAccounts', function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
		var accounts, accountsCopy;
		return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return __WEBPACK_IMPORTED_MODULE_4__global_models_Account__["a" /* default */].find({});

					case 2:
						accounts = _context2.sent;
						accountsCopy = accounts.slice();

						if (!(req.query.addRedundancy == 'true')) {
							_context2.next = 7;
							break;
						}

						_context2.next = 7;
						return new Promise(function (resolve) {
							accountsCopy.forEach(function () {
								var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(account, index) {
									var org;
									return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
										while (1) {
											switch (_context.prev = _context.next) {
												case 0:
													_context.next = 2;
													return __WEBPACK_IMPORTED_MODULE_5__global_models_Organisation__["a" /* default */].find({ id: account.organisationId });

												case 2:
													org = _context.sent[0];

													accountsCopy[index]._doc.organisation = org;
													if (index + 1 === accountsCopy.length) {
														resolve();
													}

												case 5:
												case 'end':
													return _context.stop();
											}
										}
									}, _callee, _this);
								}));

								return function (_x3, _x4) {
									return _ref2.apply(this, arguments);
								};
							}());
						});

					case 7:
						res.json({
							accounts: accountsCopy
						});

					case 8:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, _this);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

Api.post('/createAccount', __WEBPACK_IMPORTED_MODULE_3__factories_createAuthHandler__["a" /* authMiddleware */], function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
		var _req$body, organisationName, accountId, creditCardIds, organisation, orgResult, id, accountResult, account;

		return __WEBPACK_IMPORTED_MODULE_0__Users_thomaszwarts_gitrepos_exams_credito_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.prev = 0;
						_req$body = req.body, organisationName = _req$body.organisationName, accountId = _req$body.accountId, creditCardIds = _req$body.creditCardIds;
						_context3.next = 4;
						return __WEBPACK_IMPORTED_MODULE_5__global_models_Organisation__["a" /* default */].find({ name: organisationName });

					case 4:
						organisation = _context3.sent;
						_context3.next = 7;
						return __WEBPACK_IMPORTED_MODULE_5__global_models_Organisation__["a" /* default */].find({ name: organisationName });

					case 7:
						orgResult = _context3.sent;

						console.log(orgResult);

						if (!(orgResult.length > 0)) {
							_context3.next = 12;
							break;
						}

						res.status(422);
						return _context3.abrupt('return', res.json({
							message: 'Organisation already exists'
						}));

					case 12:
						if (!(organisation.length <= 0)) {
							_context3.next = 17;
							break;
						}

						id = __WEBPACK_IMPORTED_MODULE_2_uuid_v4___default()();
						_context3.next = 16;
						return __WEBPACK_IMPORTED_MODULE_5__global_models_Organisation__["a" /* default */].create({
							id: id,
							name: organisationName
						});

					case 16:
						organisation = _context3.sent;

					case 17:
						// mongoose returns an array, select first index.
						organisation = organisation[0];
						// Check if account exists
						_context3.next = 20;
						return __WEBPACK_IMPORTED_MODULE_4__global_models_Account__["a" /* default */].find({ id: accountId });

					case 20:
						accountResult = _context3.sent;

						if (!(accountResult.length > 0)) {
							_context3.next = 24;
							break;
						}

						res.status(422);
						return _context3.abrupt('return', res.json({
							message: 'Account already exists'
						}));

					case 24:
						if (organisation) {
							_context3.next = 28;
							break;
						}

						_context3.next = 27;
						return __WEBPACK_IMPORTED_MODULE_5__global_models_Organisation__["a" /* default */].find({ name: organisationName });

					case 27:
						organisation = _context3.sent[0];

					case 28:
						_context3.next = 30;
						return __WEBPACK_IMPORTED_MODULE_4__global_models_Account__["a" /* default */].create({
							id: accountId,
							organisationId: organisation.id,
							creditCards: creditCardIds,
							balance: 0
						});

					case 30:
						account = _context3.sent;


						// add organisation redundancy
						if (req.query.addRedundancy == 'true') {
							account._doc.organisation = organisation;
						}

						res.json({
							account: account
						});
						_context3.next = 39;
						break;

					case 35:
						_context3.prev = 35;
						_context3.t0 = _context3['catch'](0);

						console.log(_context3.t0);
						res.status(500).json({ errors: _context3.t0 });

					case 39:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, _this, [[0, 35]]);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());

/* harmony default export */ __webpack_exports__["a"] = (Api);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    id: { type: String, required: true, unique: true },
    organisationId: { type: String, maxLength: 255, default: '' },
    creditCards: { type: [], default: [] },
    balance: { type: Number, default: 0 }
});

var Account = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Account', schema);

/* harmony default export */ __webpack_exports__["a"] = (Account);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
	name: { type: String, required: true, unique: true, maxLength: 255 },
	id: { type: String, maxLength: 255, unique: true }
});

var Organisation = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Organisation', schema);

/* harmony default export */ __webpack_exports__["a"] = (Organisation);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map