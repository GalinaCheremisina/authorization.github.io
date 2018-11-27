(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common/module/profile.module": [
		"./src/app/common/module/profile.module.ts",
		"common-module-profile-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/home/home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _content_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/users/users.component */ "./src/app/content/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'profile',
        loadChildren: './common/module/profile.module#ProfileleModule'
    },
    {
        path: 'users',
        component: _content_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    background: rgba(15, 15, 15, 0.81);\r\n    box-shadow: 3px 3px #e7e7e7;\r\n    padding: 20px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMTUsIDAuODEpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAjZTdlN2U3O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3ls-main\">\r\n<div class=\"container\">\r\n    <app-header></app-header>\r\n    <div class=\"col-xs-12\" [ngClass]=\"{wrapper:userLogged}\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/service/users.service */ "./src/app/common/service/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.userLogged = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.userLogged.subscribe(function (value) { _this.userLogged = value; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/home/home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _content_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/users/users.component */ "./src/app/content/users/users.component.ts");
/* harmony import */ var _common_service_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/service/users.service */ "./src/app/common/service/users.service.ts");
/* harmony import */ var _content_users_form_change_form_change_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/users/form-change/form-change.component */ "./src/app/content/users/form-change/form-change.component.ts");
/* harmony import */ var _content_users_form_add_form_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/users/form-add/form-add.component */ "./src/app/content/users/form-add/form-add.component.ts");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _content_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _content_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _content_users_form_change_form_change_component__WEBPACK_IMPORTED_MODULE_10__["FormChangeComponent"],
                _content_users_form_add_form_add_component__WEBPACK_IMPORTED_MODULE_11__["FormAddComponent"]
            ],
            entryComponents: [
                _content_users_form_change_form_change_component__WEBPACK_IMPORTED_MODULE_10__["FormChangeComponent"],
                _content_users_form_add_form_add_component__WEBPACK_IMPORTED_MODULE_11__["FormAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot()
            ],
            providers: [_common_service_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/model/user.model.ts":
/*!********************************************!*\
  !*** ./src/app/common/model/user.model.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * The user's class
 * @constructor
 */
var User = /** @class */ (function () {
    function User(name, surname, age, email, password) {
        name ? this.name = name : this.name = '';
        surname ? this.surname = surname : this.surname = '';
        age ? this.age = age : this.age = 1;
        email ? this.email = email : this.email = '';
        password ? this.password = password : this.password = '';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/common/service/users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/service/users.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user.model */ "./src/app/common/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The service works users
 * @constructor
 * @param {User[]} users - The private array of users
 * @param {User} userChecked - The active user
 * @param {EventEmitter<boolean>} userLogged - The event that works when a user has logged in
 * @param {EventEmitter<User[]>} usersChanged - The event that works when a user has changed
 * @function {User[]} getUsers() - The public array of users
 * @function {void} goToPage()  - The page navigation
 * @function {number} userFind()  - The position where user is
 * @function {boolean} userLogin() - It checks for user existence
 * @function {boolean} userIsActive() - It checks for user activity
 * @function {void} activeUserChange() - It changes the active user
 * @function {boolean} onChangeUser() - It changes any user
 * @function {boolean} onDeleteUser() - It removes any user
 * @function {void} onAddUser() - It adds a new user
 * @function {void} inLogOut() - User log out
 */



var UsersService = /** @class */ (function () {
    function UsersService(_router) {
        this._router = _router;
        this.users = [
            new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("Ivan", "Petrov", 28, "ivan@mail.ru", "111"),
            new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("admin", "admin", 20, "admin@mail.ru", "111"),
            new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("Lida", "Penova", 21, "zzz@mail.ru", "111"),
            new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("Sergey", "Konyahin", 38, "xxx@mail.ru", "111"),
            new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("Olga", "Lilova", 19, "ccc@mail.ru", "111")
        ];
        this.userLogged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usersChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UsersService.prototype.getUsers = function () {
        return this.users.slice();
    };
    UsersService.prototype.goToPage = function () {
        this._router.navigate(['profile']);
    };
    UsersService.prototype.userFind = function (username, password) {
        return this.users.filter(function (user) {
            return (user.email === username && user.password === password) ? user : null;
        });
    };
    UsersService.prototype.userLogin = function (username, password) {
        var user = this.userFind(username, password);
        if (user.length > 0) {
            this.userChecked = user[0];
            this.userLogged.emit(true);
            return true;
        }
        return false;
    };
    UsersService.prototype.userIsActive = function (user) {
        if (user.name === this.userChecked.name && user.password === this.userChecked.password)
            return true;
        return false;
    };
    UsersService.prototype.activeUserChange = function (userChanged) {
        for (var key in this.userChecked) {
            this.userChecked[key] = userChanged[key];
        }
        this.usersChanged.emit(this.users.slice());
    };
    UsersService.prototype.onChangeUser = function (userChanged, user) {
        var userFinded = this.userFind(userChanged.email, userChanged.password);
        if (userFinded.length > 0) {
            for (var key in userFinded[0]) {
                userFinded[0][key] = user[key];
            }
            this.usersChanged.emit(this.users.slice());
            return true;
        }
        return false;
    };
    UsersService.prototype.onDeleteUser = function (user) {
        var index;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].email === user.email && this.users[i].password === user.password)
                index = i;
        }
        if (index < 0) {
            return false;
        }
        else {
            this.users.splice(index, 1);
            this.usersChanged.emit(this.users.slice());
            return true;
        }
    };
    UsersService.prototype.onAddUser = function (userNew) {
        this.users.push(userNew);
        this.usersChanged.emit(this.users.slice());
    };
    UsersService.prototype.inLogOut = function () {
        this.userChecked = new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userLogged.emit(false);
        this._router.navigate(['']);
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/content/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/content/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.wthree-container {\r\n    display: flex;\r\n\tjustify-content: center;\r\n}\r\n.agileits-2 h2 {\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    margin-bottom: 30px;\r\n    color: #fff;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n}\r\n.wthree-form {\r\n    flex-basis: 500px;\r\n    padding: 5em;\r\n\tbackground: rgba(15, 15, 15, 0.81);\r\n\tbox-shadow: 3px 3px #ccc;\r\n}\r\n.wthree-form input {\r\n\tfont-size: 16px;\r\n    font-weight: 500;\r\n    text-align: left;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    float: left;\r\n    width: 85%;\r\n    margin-bottom: 1em;\r\n    padding: 0.1em 10px;\r\n    line-height: 40px;\r\n    outline: none;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    color: #000;\r\n\tfont-family: 'Raleway', sans-serif;\r\n}\r\n.form-group{\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\nspan .fa {\r\n    font-size: 16px;\r\n    float: left;\r\n    background: #58dbf1;\r\n    color: #fff;\r\n    text-align: center;\r\n    width: 15%;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0.1em;\r\n}\r\nspan.check .fa{\r\n    font-size: 16px;\r\n    position: absolute;\r\n    background: transparent;\r\n    color: #000;\r\n    text-align: center;\r\n    right: 0;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0;\r\n    display: none;\r\n}\r\nspan.check .fa-times{\r\n    display: inline;\r\n    color:red;\r\n}\r\nspan.check .fa-check{\r\n    display: inline;\r\n    color:green;\r\n}\r\n.w3l span a {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    display: block;\r\n    padding: 0 0 30px;\r\n    color: #fff;\r\n\tfont-family:'Josefin Sans', sans-serif;\r\n}\r\n.w3l-submit input[type=\"submit\"],.submit {\r\n\tfont-size: 23px;\r\n\tfont-weight: 500;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n\tletter-spacing: 3px;\r\n\tpadding: 5px;\r\n    width: 60%;\r\n    margin: 0 auto;\r\n\tdisplay: block;\r\n    border: 2px solid transparent;\r\n    outline: none;\r\n\tcolor: #fff;\r\n    cursor: pointer;\r\n\tbackground-color: #157e90;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\ttransition: 0.5s ease-in;\t\r\n}\r\n.w3l-submit input[type=\"submit\"]:hover,.submit:hover{\r\n\tborder: 2px solid #fff;\r\n\tbackground: #033127;\r\n\ttransition: 0.5s ease-in;\r\n}\r\n.warning{\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n@media(max-width:568px){\r\n\t.wthree-form {\r\n\t\tpadding: 4em;\r\n\t}\r\n}\r\n@media(max-width:480px){\r\n\t.wthree-form {\r\n    flex-basis: 300px;\r\n\t}\r\n}\r\n@media(max-width:414px){\r\n\t.wthree-form {\r\n    flex-basis: 250px;\r\n\t}\r\n}\r\n@media(max-width:384px){\r\n\t.wthree-form {\r\n    flex-basis: 220px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0NBQ2pCLHdCQUF3QjtDQUN4QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsWUFBWTtDQUNmLHdDQUF3QztDQUN4QztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEIsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QjtBQUNEO0NBQ0MsZ0JBQWdCO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtDQUNmLG1DQUFtQztDQUNuQztBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2YsdUNBQXVDO0NBQ3ZDO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0lBQ2QsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUN0QixvQkFBb0I7Q0FDcEIsYUFBYTtJQUNWLFdBQVc7SUFDWCxlQUFlO0NBQ2xCLGVBQWU7SUFDWiw4QkFBOEI7SUFDOUIsY0FBYztDQUNqQixZQUFZO0lBQ1QsZ0JBQWdCO0NBQ25CLDBCQUEwQjtDQUMxQixtQ0FBbUM7Q0FLbkMseUJBQXlCO0NBQ3pCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBS3BCLHlCQUF5QjtDQUN6QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtDQUNDO0VBQ0MsYUFBYTtFQUNiO0NBQ0Q7QUFDRDtDQUNDO0lBQ0csa0JBQWtCO0VBQ3BCO0NBQ0Q7QUFDRDtDQUNDO0lBQ0csa0JBQWtCO0VBQ3BCO0NBQ0Q7QUFDRDtDQUNDO0lBQ0csa0JBQWtCO0VBQ3BCO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53dGhyZWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFnaWxlaXRzLTIgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ud3RocmVlLWZvcm0ge1xyXG4gICAgZmxleC1iYXNpczogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiA1ZW07XHJcblx0YmFja2dyb3VuZDogcmdiYSgxNSwgMTUsIDE1LCAwLjgxKTtcclxuXHRib3gtc2hhZG93OiAzcHggM3B4ICNjY2M7XHJcbn1cdFxyXG4ud3RocmVlLWZvcm0gaW5wdXQge1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZzogMC4xZW0gMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuXHRmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5zcGFuIC5mYSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICM1OGRiZjE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4xZW07XHJcbn1cclxuc3Bhbi5jaGVjayAuZmF7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuc3Bhbi5jaGVjayAuZmEtdGltZXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuc3Bhbi5jaGVjayAuZmEtY2hlY2t7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjpncmVlbjtcclxufVxyXG4udzNsIHNwYW4gYSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDAgMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OidKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi53M2wtc3VibWl0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sLnN1Ym1pdCB7XHJcblx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxldHRlci1zcGFjaW5nOiAzcHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxNTdlOTA7XHJcblx0Zm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuXHQtbW96LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuXHQtby10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XHJcblx0LW1zLXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuXHR0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XHRcclxufVxyXG4udzNsLXN1Ym1pdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLC5zdWJtaXQ6aG92ZXJ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjMDMzMTI3O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xyXG5cdC1vLXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuXHQtbXMtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xyXG5cdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxufVxyXG4ud2FybmluZ3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjU2OHB4KXtcclxuXHQud3RocmVlLWZvcm0ge1xyXG5cdFx0cGFkZGluZzogNGVtO1xyXG5cdH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQ4MHB4KXtcclxuXHQud3RocmVlLWZvcm0ge1xyXG4gICAgZmxleC1iYXNpczogMzAwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NDE0cHgpe1xyXG5cdC53dGhyZWUtZm9ybSB7XHJcbiAgICBmbGV4LWJhc2lzOiAyNTBweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDozODRweCl7XHJcblx0Lnd0aHJlZS1mb3JtIHtcclxuICAgIGZsZXgtYmFzaXM6IDIyMHB4O1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/content/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wthree-container\">\r\n    <div class=\"wthree-form\">\r\n      <div class=\"agileits-2\">\r\n        <p class=\"warning\" *ngIf=\"warning\">*Incorrect username or password.</p>\r\n      </div>\r\n      <form action=\"#\" method=\"post\">\r\n        <div class=\"form-group\">\r\n          <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n          <input \r\n            [formControl]=\"nameControl\"\r\n            type=\"text\"\r\n            placeholder=\"Username\">\r\n            <span class=\"check\">\r\n              <i class=\"fa\"\r\n                [ngClass]=\"{'fa-times':(!nameControl.valid && focusNameInput),\r\n                            'fa-check':(nameControl.valid)}\" \r\n                aria-hidden=\"true\">\r\n            </i></span>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"form-group\">\r\n          <span><i class=\"fa fa-key\" aria-hidden=\"true\"></i></span>\r\n          <input \r\n            [formControl]=\"passwordControl\"\r\n            placeholder=\"Password\">\r\n            <span class=\"check\">\r\n              <i class=\"fa\"\r\n                [ngClass]=\"{'fa-times':(!passwordControl.valid&&focusPasswordInput),\r\n                            'fa-check':(passwordControl.valid)}\" \r\n                aria-hidden=\"true\">\r\n            </i></span>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"w3l-submit\">\r\n          <div class=\"submit\" (click)=\"onLogin()\">Sign in</div>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/content/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/users.service */ "./src/app/common/service/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userService) {
        this._userService = _userService;
        this.warning = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, emailValidator]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.nameControl.statusChanges.subscribe(function () { _this.focusNameInput = true; });
        this.passwordControl.statusChanges.subscribe(function () { _this.focusPasswordInput = true; });
    };
    HomeComponent.prototype.onLogin = function () {
        var intName = this.nameControl.value;
        var intPassword = this.passwordControl.value;
        if (this._userService.userLogin(intName, intPassword)) {
            this._userService.goToPage();
        }
        else {
            this.warning = true;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/content/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], HomeComponent);
    return HomeComponent;
}());

function emailValidator(formControl) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (!pattern.test(formControl.value))
        return { emailValidator: { message: 'E-mail incorrect' } };
    return null;
}


/***/ }),

/***/ "./src/app/content/users/form-add/form-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/content/users/form-add/form-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".changing_form{\r\n    background: rgba(15, 15, 15, 0.81);\r\n    box-shadow: 3px 3px #e7e7e7;\r\n    padding: 15px;\r\n}\r\ninput[type=\"text\"],input[type=\"number\"],input[type=\"email\"] {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-align: left;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    float: left;\r\n    width: 85%;\r\n    margin-bottom: 1em;\r\n    padding: 0.1em 10px;\r\n    line-height: 40px;\r\n    outline: none;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    color: #000;\r\n    font-family: 'Raleway', sans-serif;\r\n    height: auto;\r\n    border-radius: 0;\r\n}\r\nspan .fa {\r\n    font-size: 16px;\r\n    float: left;\r\n    background: #58dbf1;\r\n    color: #fff;\r\n    text-align: center;\r\n    width: 15%;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0.1em;\r\n}\r\nspan.check .fa{\r\n    font-size: 16px;\r\n    position: absolute;\r\n    background: transparent;\r\n    color: #000;\r\n    text-align: center;\r\n    right: 0;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0;\r\n    display: none;\r\n}\r\nspan.check .fa-times{\r\n    display: inline;\r\n    color:red;\r\n}\r\nspan.check .fa-check{\r\n    display: inline;\r\n    color:green;\r\n}\r\nlabel {\r\n    margin: 7px 0;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    display: block;\r\n}\r\n.form-group {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n}\r\nh2{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 24px;\r\n}\r\n.successChange{    \r\n    margin: 15px 0 0;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #4cae4c;\r\n    float: right;\r\n}\r\n.close{opacity:1}\r\n.close.pull-right span{\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC91c2Vycy9mb3JtLWFkZC9mb3JtLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCO0FBQ0QsT0FBTyxTQUFTLENBQUM7QUFDakI7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3VzZXJzL2Zvcm0tYWRkL2Zvcm0tYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbmdpbmdfZm9ybXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDE1LCAxNSwgMC44MSk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4ICNlN2U3ZTc7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZzogMC4xZW0gMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbnNwYW4gLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogIzU4ZGJmMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjFlbTtcclxufVxyXG5zcGFuLmNoZWNrIC5mYXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5zcGFuLmNoZWNrIC5mYS10aW1lc3tcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5zcGFuLmNoZWNrIC5mYS1jaGVja3tcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbjogN3B4IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnN1Y2Nlc3NDaGFuZ2V7ICAgIFxyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBib3JkZXItY29sb3I6ICM0Y2FlNGM7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNsb3Nle29wYWNpdHk6MX1cclxuLmNsb3NlLnB1bGwtcmlnaHQgc3BhbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/content/users/form-add/form-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/content/users/form-add/form-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 changing_form\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <h2>User {{fullFormControl.value.nameControl}} is adding</h2>\r\n    <p class=\"successChange\" *ngIf=\"successChange\">User added</p>\r\n    <hr/>\r\n        <form [formGroup]=\"fullFormControl\">\r\n          <div class=\"row\">\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"nameControl\"\r\n                type=\"text\"\r\n                #nameInput>\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"surname\">Surname</label>\r\n                <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"surnameControl\"\r\n                type=\"text\">\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"age\">Age</label>\r\n                <span><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"ageControl\"\r\n                type=\"number\">\r\n                <span class=\"check\">\r\n                  <i class=\"fa\"\r\n                    [ngClass]=\"{'fa-times':(!validAgeInput),\r\n                                'fa-check': validAgeInput}\" \r\n                    aria-hidden=\"true\">\r\n                </i></span>\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"email\">E-mail</label>\r\n                <span><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"emailControl\"\r\n                type=\"email\">\r\n                <span class=\"check\">\r\n                  <i class=\"fa\"\r\n                    [ngClass]=\"{'fa-times':(!validEmailInput),\r\n                                'fa-check': validEmailInput}\" \r\n                    aria-hidden=\"true\">\r\n                </i></span>\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <span><i class=\"fa fa-key\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"passwordControl\"\r\n                type=\"text\">\r\n                <span class=\"check\">\r\n                  <i class=\"fa\"\r\n                    [ngClass]=\"{'fa-times':(!validPasswordInput),\r\n                                'fa-check': validPasswordInput}\" \r\n                    aria-hidden=\"true\">\r\n                </i></span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"btn btn-success\" type=\"submit\" (click)=\"onAddAnyNewuser()\">Add</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clear\"></div>\r\n        </form>\r\n      </div>\r\n      <div class=\"clear\"></div>"

/***/ }),

/***/ "./src/app/content/users/form-add/form-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/users/form-add/form-add.component.ts ***!
  \**************************************************************/
/*! exports provided: FormAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAddComponent", function() { return FormAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/users.service */ "./src/app/common/service/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var src_app_common_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/model/user.model */ "./src/app/common/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormAddComponent = /** @class */ (function () {
    function FormAddComponent(_userService, bsModalRef) {
        this._userService = _userService;
        this.bsModalRef = bsModalRef;
        this.validAgeInput = true;
        this.validEmailInput = false;
        this.validPasswordInput = false;
    }
    FormAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fullFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            surnameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            ageControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [ageValidator]),
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, emailValidator]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.fullFormControl.valueChanges.subscribe(function (value) {
            _this.successChange = false;
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test(value.emailControl))
                _this.validEmailInput = true;
            else
                _this.validEmailInput = false;
            if (value.passwordControl.toString().length > 2)
                _this.validPasswordInput = true;
            else
                _this.validPasswordInput = false;
            if (value.ageControl.toString().length > 2)
                _this.validAgeInput = false;
            else
                _this.validAgeInput = true;
        });
    };
    FormAddComponent.prototype.onAddAnyNewuser = function () {
        this.successChange = false;
        if (this.fullFormControl.valid) {
            var userNew = new src_app_common_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](this.fullFormControl.value.nameControl, this.fullFormControl.value.surnameControl, this.fullFormControl.value.ageControl, this.fullFormControl.value.emailControl, this.fullFormControl.value.passwordControl);
            this._userService.onAddUser(userNew);
            this.successChange = true;
        }
    };
    FormAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-add',
            template: __webpack_require__(/*! ./form-add.component.html */ "./src/app/content/users/form-add/form-add.component.html"),
            styles: [__webpack_require__(/*! ./form-add.component.css */ "./src/app/content/users/form-add/form-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]])
    ], FormAddComponent);
    return FormAddComponent;
}());

function emailValidator(formControl) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (!pattern.test(formControl.value))
        return { emailValidator: { message: 'E-mail incorrect' } };
    return null;
}
function ageValidator(formControl) {
    if (formControl.value.toString().length > 2)
        return { ageValidator: { message: 'Age incorrect' } };
    return null;
}


/***/ }),

/***/ "./src/app/content/users/form-change/form-change.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/content/users/form-change/form-change.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".changing_form{\r\n    background: rgba(15, 15, 15, 0.81);\r\n    box-shadow: 3px 3px #e7e7e7;\r\n    padding: 15px;\r\n}\r\ninput[type=\"text\"],input[type=\"number\"],input[type=\"email\"] {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-align: left;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    float: left;\r\n    width: 85%;\r\n    margin-bottom: 1em;\r\n    padding: 0.1em 10px;\r\n    line-height: 40px;\r\n    outline: none;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    color: #000;\r\n    font-family: 'Raleway', sans-serif;\r\n    height: auto;\r\n    border-radius: 0;\r\n}\r\nspan .fa {\r\n    font-size: 16px;\r\n    float: left;\r\n    background: #58dbf1;\r\n    color: #fff;\r\n    text-align: center;\r\n    width: 15%;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0.1em;\r\n}\r\nspan.check .fa{\r\n    font-size: 16px;\r\n    position: absolute;\r\n    background: transparent;\r\n    color: #000;\r\n    text-align: center;\r\n    right: 0;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0;\r\n    display: none;\r\n}\r\nspan.check .fa-times{\r\n    display: inline;\r\n    color:red;\r\n}\r\nspan.check .fa-check{\r\n    display: inline;\r\n    color:green;\r\n}\r\nlabel {\r\n    margin: 7px 0;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    display: block;\r\n}\r\n.form-group {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n}\r\nh2{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 24px;\r\n}\r\n.successChange{    \r\n    margin: 15px 0 0;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n    border-color: #4cae4c;\r\n    float: right;\r\n}\r\n.close{opacity:1}\r\n.close.pull-right span{\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC91c2Vycy9mb3JtLWNoYW5nZS9mb3JtLWNoYW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCO0FBQ0QsT0FBTyxTQUFTLENBQUM7QUFDakI7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3VzZXJzL2Zvcm0tY2hhbmdlL2Zvcm0tY2hhbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbmdpbmdfZm9ybXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDE1LCAxNSwgMC44MSk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4ICNlN2U3ZTc7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJudW1iZXJcIl0saW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZzogMC4xZW0gMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbnNwYW4gLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogIzU4ZGJmMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjFlbTtcclxufVxyXG5zcGFuLmNoZWNrIC5mYXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5zcGFuLmNoZWNrIC5mYS10aW1lc3tcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5zcGFuLmNoZWNrIC5mYS1jaGVja3tcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbjogN3B4IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnN1Y2Nlc3NDaGFuZ2V7ICAgIFxyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBib3JkZXItY29sb3I6ICM0Y2FlNGM7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNsb3Nle29wYWNpdHk6MX1cclxuLmNsb3NlLnB1bGwtcmlnaHQgc3BhbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/content/users/form-change/form-change.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/content/users/form-change/form-change.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 changing_form\">\r\n<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n  <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n<h2>User {{user.name}} is changing</h2>\r\n<p class=\"successChange\" *ngIf=\"successChange\">Profile updated</p>\r\n<hr/>\r\n    <form [formGroup]=\"fullFormControl\">\r\n      <div class=\"row\">\r\n          <div class=\"col-xs-12 form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n            <input \r\n            formControlName=\"nameControl\"\r\n            type=\"text\">\r\n          </div>\r\n          <div class=\"col-xs-12 form-group\">\r\n            <label for=\"surname\">Surname</label>\r\n            <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n            <input \r\n            formControlName=\"surnameControl\"\r\n            type=\"text\">\r\n          </div>\r\n          <div class=\"col-xs-12 form-group\">\r\n            <label for=\"age\">Age</label>\r\n            <span><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n            <input \r\n            formControlName=\"ageControl\"\r\n            type=\"number\">\r\n            <span class=\"check\">\r\n              <i class=\"fa\"\r\n                [ngClass]=\"{'fa-times':(!validAgeInput),\r\n                            'fa-check': validAgeInput}\" \r\n                aria-hidden=\"true\">\r\n            </i></span>\r\n          </div>\r\n          <div class=\"col-xs-12 form-group\">\r\n            <label for=\"email\">E-mail</label>\r\n            <span><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\r\n            <input \r\n            formControlName=\"emailControl\"\r\n            type=\"email\">\r\n            <span class=\"check\">\r\n              <i class=\"fa\"\r\n                [ngClass]=\"{'fa-times':(!validEmailInput),\r\n                            'fa-check': validEmailInput}\" \r\n                aria-hidden=\"true\">\r\n            </i></span>\r\n          </div>\r\n          <div class=\"col-xs-12 form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <span><i class=\"fa fa-key\" aria-hidden=\"true\"></i></span>\r\n            <input \r\n            formControlName=\"passwordControl\"\r\n            type=\"text\">\r\n            <span class=\"check\">\r\n              <i class=\"fa\"\r\n                [ngClass]=\"{'fa-times':(!validPasswordInput),\r\n                            'fa-check': validPasswordInput}\" \r\n                aria-hidden=\"true\">\r\n            </i></span>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"btn btn-success\" type=\"submit\" (click)=\"onChangeAnyUser()\">Change</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"clear\"></div>\r\n    </form>\r\n  </div>\r\n  <div class=\"clear\"></div>"

/***/ }),

/***/ "./src/app/content/users/form-change/form-change.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/users/form-change/form-change.component.ts ***!
  \********************************************************************/
/*! exports provided: FormChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormChangeComponent", function() { return FormChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/users.service */ "./src/app/common/service/users.service.ts");
/* harmony import */ var src_app_common_model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/model/user.model */ "./src/app/common/model/user.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormChangeComponent = /** @class */ (function () {
    function FormChangeComponent(_userService, bsModalRef) {
        this._userService = _userService;
        this.bsModalRef = bsModalRef;
        this.validAgeInput = true;
        this.validEmailInput = true;
        this.validPasswordInput = true;
    }
    FormChangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userChanged = this.user;
        this.fullFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, []),
            surnameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.surname, []),
            ageControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.age, [ageValidator]),
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, emailValidator]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.fullFormControl.valueChanges.subscribe(function (value) {
            _this.successChange = false;
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (value.emailControl !== _this.user.email) {
                if (pattern.test(value.emailControl))
                    _this.validEmailInput = true;
                else
                    _this.validEmailInput = false;
            }
            else
                _this.validEmailInput = true;
            if (value.passwordControl !== _this.user.password) {
                if (value.passwordControl.toString().length > 2)
                    _this.validPasswordInput = true;
                else
                    _this.validPasswordInput = false;
            }
            else
                _this.validPasswordInput = true;
            if (value.ageControl.toString().length > 2)
                _this.validAgeInput = false;
            else
                _this.validAgeInput = true;
        });
    };
    FormChangeComponent.prototype.onChangeAnyUser = function () {
        this.successChange = false;
        if (this.fullFormControl.valid) {
            var userChanged = new src_app_common_model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.fullFormControl.value.nameControl, this.fullFormControl.value.surnameControl, this.fullFormControl.value.ageControl, this.fullFormControl.value.emailControl, this.fullFormControl.value.passwordControl);
            this._userService.onChangeUser(this.userChanged, userChanged);
            this.successChange = true;
        }
    };
    FormChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-change',
            template: __webpack_require__(/*! ./form-change.component.html */ "./src/app/content/users/form-change/form-change.component.html"),
            styles: [__webpack_require__(/*! ./form-change.component.css */ "./src/app/content/users/form-change/form-change.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], FormChangeComponent);
    return FormChangeComponent;
}());

function emailValidator(formControl) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (!pattern.test(formControl.value))
        return { emailValidator: { message: 'E-mail incorrect' } };
    return null;
}
function ageValidator(formControl) {
    if (formControl.value.toString().length > 2)
        return { ageValidator: { message: 'Age incorrect' } };
    return null;
}


/***/ }),

/***/ "./src/app/content/users/users.component.css":
/*!***************************************************!*\
  !*** ./src/app/content/users/users.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users_list{\r\n    color: #fff;\r\n}\r\n.btn{margin:0 5px;}\r\n.info td{color:#000}\r\n.table {\r\n    width: auto;\r\n    max-width: 100%;\r\n    margin: 25px auto;\r\n}\r\nh2{text-align: center;}\r\n.add_user{float: right;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmO0FBQ0QsS0FBSyxhQUFhLENBQUM7QUFDbkIsU0FBUyxVQUFVLENBQUM7QUFDcEI7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNELEdBQUcsbUJBQW1CLENBQUM7QUFDdkIsVUFBVSxhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnNfbGlzdHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5idG57bWFyZ2luOjAgNXB4O31cclxuLmluZm8gdGR7Y29sb3I6IzAwMH1cclxuLnRhYmxlIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbn1cclxuaDJ7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLmFkZF91c2Vye2Zsb2F0OiByaWdodDt9Il19 */"

/***/ }),

/***/ "./src/app/content/users/users.component.html":
/*!****************************************************!*\
  !*** ./src/app/content/users/users.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users_list col-xs-12 col-md-8 col-md-offset-2\">\r\n    <h2>Users</h2>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n          <tr>\r\n              <th>Name</th>\r\n              <th>Surname</th>\r\n              <th>Age</th>\r\n              <th>E-mail</th>\r\n              <th>Password</th>\r\n              <th></th>\r\n          </tr>\r\n          <tr *ngFor=\"let user of users\" [ngClass]=\"{info:isActived(user)}\">\r\n              <td>{{user.name}}</td>\r\n              <td>{{user.surname}}</td>\r\n              <td>{{user.age}}</td>\r\n              <td>{{user.email}}</td>\r\n              <td>{{user.password}}</td>\r\n              <td>\r\n            <button \r\n              class=\"btn btn-danger\" \r\n              type=\"button\" \r\n              *ngIf=\"!isActived(user)\" \r\n              (click)=\"inDeleteUser(user)\">\r\n              Delete</button> \r\n                <button \r\n                  class=\"btn btn-info\" \r\n                  type=\"button\" \r\n                  (click)=\"openModalWithComponent(user)\">\r\n                  Change</button>\r\n              </td>\r\n          </tr>\r\n      </table>\r\n      <button \r\n        class=\"btn btn-success add_user\" \r\n        type=\"submit\" \r\n        (click)=\"inAddUser()\">\r\n        Add user</button>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n  </div>\r\n<div class=\"clear\"></div>"

/***/ }),

/***/ "./src/app/content/users/users.component.ts":
/*!**************************************************!*\
  !*** ./src/app/content/users/users.component.ts ***!
  \**************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/users.service */ "./src/app/common/service/users.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _form_change_form_change_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-change/form-change.component */ "./src/app/content/users/form-change/form-change.component.ts");
/* harmony import */ var _form_add_form_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-add/form-add.component */ "./src/app/content/users/form-add/form-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(_userService, _modalService) {
        this._userService = _userService;
        this._modalService = _modalService;
        this.onChange = false;
        this.onAdd = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this._userService.getUsers();
        this._userService.usersChanged.subscribe(function (users) {
            _this.users = users;
            _this.onAdd = false;
            _this.onChange = false;
        });
    };
    UsersComponent.prototype.isActived = function (user) {
        return this._userService.userIsActive(user);
    };
    UsersComponent.prototype.inDeleteUser = function (user) {
        this._userService.onDeleteUser(user);
    };
    UsersComponent.prototype.inChangeUser = function (user) {
        this.userChanging = user;
        if (this.isActived(user))
            this._userService.goToPage();
        this.onChange = true;
    };
    UsersComponent.prototype.inAddUser = function () {
        this.bsModalRef = this._modalService.show(_form_add_form_add_component__WEBPACK_IMPORTED_MODULE_4__["FormAddComponent"]);
    };
    UsersComponent.prototype.openModal = function (modalWindow) {
        //this.modalRef = this._modalService.show(modalWindow);
    };
    UsersComponent.prototype.openModalWithComponent = function (userChek) {
        var initialState = {
            user: {
                name: userChek.name,
                surname: userChek.surname,
                age: userChek.age,
                email: userChek.email,
                password: userChek.password,
            }
        };
        this.bsModalRef = this._modalService.show(_form_change_form_change_component__WEBPACK_IMPORTED_MODULE_3__["FormChangeComponent"], { initialState: initialState });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/content/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/content/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".agileits-footer p {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    letter-spacing: 2px;\r\n    padding: 5em 0 0;\r\n\tcolor: #fff;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n}\r\n.agileits-footer a {\r\n\tfont-size: 15px;\r\n\tfont-weight: 500;\r\n    text-decoration: none;\r\n\tcolor: #fff;\r\n    cursor: pointer;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n}\r\n.agileits-footer a:hover{\r\n\tcolor: #20f414;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEIsWUFBWTtDQUNaLHdDQUF3QztDQUN4QztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtJQUNkLHNCQUFzQjtDQUN6QixZQUFZO0lBQ1QsZ0JBQWdCO0NBQ25CLHdDQUF3QztDQUN4QztBQUNEO0NBQ0MsZUFBZTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFnaWxlaXRzLWZvb3RlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1ZW0gMCAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYWdpbGVpdHMtZm9vdGVyIGEge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYWdpbGVpdHMtZm9vdGVyIGE6aG92ZXJ7XHJcblx0Y29sb3I6ICMyMGY0MTQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"agileits-footer\">\r\n  <p>&copy; Magnificent login Form. All Rights Reserved | Design by <a href=\"http://w3layouts.com/\">W3layouts</a></p>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wthree-heading h1 {\r\n    font-size: 50px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n\tletter-spacing: 2px;\r\n    color: #fff;\r\n\tpadding: 1em 0 1em;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n}\r\n@media(max-width:600px){\r\n\t.wthree-heading h1 {\r\n\t\tfont-size: 45px;\r\n\t}\r\n}\r\n@media(max-width:480px){\r\n\t.wthree-heading h1 {\r\n\t\tfont-size: 35px;\r\n\t}\r\n}\r\n@media(max-width:414px){\r\n\t.wthree-heading h1 {\r\n    font-size: 30px;\r\n\t}\r\n}\r\n@media(max-width:384px){\r\n\t.wthree-heading h1 {\r\n    font-size: 28px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMkJBQTJCO0NBQzlCLG9CQUFvQjtJQUNqQixZQUFZO0NBQ2YsbUJBQW1CO0NBQ25CLHdDQUF3QztDQUN4QztBQUNEO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRDtBQUNEO0NBQ0M7SUFDRyxnQkFBZ0I7RUFDbEI7Q0FDRDtBQUNEO0NBQ0M7SUFDRyxnQkFBZ0I7RUFDbEI7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53dGhyZWUtaGVhZGluZyBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDFlbSAwIDFlbTtcclxuXHRmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XHJcblx0Lnd0aHJlZS1oZWFkaW5nIGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogNDVweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0ODBweCl7XHJcblx0Lnd0aHJlZS1oZWFkaW5nIGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMzVweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCl7XHJcblx0Lnd0aHJlZS1oZWFkaW5nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDozODRweCl7XHJcblx0Lnd0aHJlZS1oZWFkaW5nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"wthree-heading\">\r\n    <h1>Login form</h1>\r\n  </div>\r\n  <app-menu></app-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/header/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-default {\r\n    background-color: #58dbf1;\r\n    border-color: #e7e7e7;\r\n}\r\n.navbar-nav>li>a{\r\n    color:#fff;\r\n    font-size: 16px;\r\n}\r\n.navbar-nav>li>a.active,.navbar-nav>li>a:hover{\r\n    text-decoration: underline;\r\n    color:#061a59;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ZGJmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2U3ZTdlNztcclxufVxyXG4ubmF2YmFyLW5hdj5saT5he1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyLW5hdj5saT5hLmFjdGl2ZSwubmF2YmFyLW5hdj5saT5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjojMDYxYTU5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" [ngClass]=\"{hidden:!userLogged}\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n          <li><a \r\n                routerLink=\"/profile\"\r\n                routerLinkActive=\"active\">\r\n                Profile\r\n              </a></li>\r\n          <li>\r\n            <a \r\n                routerLink=\"/users\"\r\n                routerLinkActive=\"active\">\r\n                Users\r\n            </a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a href='#' (click)=\"onLogOut()\">LogOut</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/users.service */ "./src/app/common/service/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(_userService) {
        this._userService = _userService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.userLogged.subscribe(function (value) { _this.userLogged = value; });
    };
    MenuComponent.prototype.onLogOut = function () {
        this._userService.inLogOut();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/header/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/header/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\login\authorization.github.io\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map