(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-module-profile-module"],{

/***/ "./src/app/common/module/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/common/module/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileleModule", function() { return ProfileleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_content_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/content/profile/profile.component */ "./src/app/content/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '',
        component: src_app_content_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
var ProfileleModule = /** @class */ (function () {
    function ProfileleModule() {
    }
    ProfileleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [src_app_content_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ]
        })
    ], ProfileleModule);
    return ProfileleModule;
}());



/***/ }),

/***/ "./src/app/content/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/content/profile/profile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"],input[type=\"number\"],input[type=\"email\"] {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-align: left;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    float: left;\r\n    width: 85%;\r\n    margin-bottom: 1em;\r\n    padding: 0.1em 10px;\r\n    line-height: 40px;\r\n    outline: none;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    color: #000;\r\n    font-family: 'Raleway', sans-serif;\r\n    height: auto;\r\n    border-radius: 0;\r\n}\r\nspan .fa {\r\n    font-size: 16px;\r\n    float: left;\r\n    background: #58dbf1;\r\n    color: #fff;\r\n    text-align: center;\r\n    width: 15%;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0.1em;\r\n}\r\nspan.check .fa{\r\n    font-size: 16px;\r\n    position: absolute;\r\n    background: transparent;\r\n    color: #000;\r\n    text-align: center;\r\n    right: 0;\r\n    line-height: 40px;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0;\r\n    display: none;\r\n}\r\nspan.check .fa-times{\r\n    display: inline;\r\n    color:red;\r\n}\r\nspan.check .fa-check{\r\n    display: inline;\r\n    color:green;\r\n}\r\nlabel {\r\n    margin: 7px 0;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    display: block;\r\n}\r\n.form-group {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n}\r\nh2{\r\n    color:#fff;\r\n    text-align: center;\r\n}\r\n.successChange{    \r\n    margin: 15px 0 0;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0NBQ2I7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwibnVtYmVyXCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5zcGFuIC5mYSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICM1OGRiZjE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4xZW07XHJcbn1cclxuc3Bhbi5jaGVjayAuZmF7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuc3Bhbi5jaGVjayAuZmEtdGltZXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuc3Bhbi5jaGVjayAuZmEtY2hlY2t7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjpncmVlbjtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW46IDdweCAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Y2Nlc3NDaGFuZ2V7ICAgIFxyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/content/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-6 col-md-offset-3\">\r\n  <h2>Your profile</h2>\r\n  <p class=\"successChange\" *ngIf=\"successChange\">Profile updated</p>\r\n  <form class=\"\" [formGroup]=\"fullFormControl\">\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"nameControl\"\r\n                type=\"text\">\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"surname\">Surname</label>\r\n                <span><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"surnameControl\"\r\n                type=\"text\">\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"age\">Age</label>\r\n                <span><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"ageControl\"\r\n                type=\"number\">\r\n                <span class=\"check\">\r\n                  <i class=\"fa\"\r\n                    [ngClass]=\"{'fa-times':(!validAgeInput),\r\n                                'fa-check': validAgeInput}\" \r\n                    aria-hidden=\"true\">\r\n                </i></span>\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"email\">E-mail</label>\r\n                <span><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"emailControl\"\r\n                type=\"email\">\r\n                <span class=\"check\">\r\n                  <i class=\"fa\"\r\n                    [ngClass]=\"{'fa-times':(!validEmailInput),\r\n                                'fa-check': validEmailInput}\" \r\n                    aria-hidden=\"true\">\r\n                </i></span>\r\n              </div>\r\n              <div class=\"col-xs-12 form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <span><i class=\"fa fa-key\" aria-hidden=\"true\"></i></span>\r\n                <input \r\n                formControlName=\"passwordControl\"\r\n                type=\"text\">\r\n                <span class=\"check\">\r\n                  <i class=\"fa\"\r\n                    [ngClass]=\"{'fa-times':(!validPasswordInput),\r\n                                'fa-check': validPasswordInput}\" \r\n                    aria-hidden=\"true\">\r\n                </i></span>\r\n              </div>\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"btn btn-info\" type=\"submit\" (click)=\"onChangeItem()\">Change</div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </form>\r\n</div>"

/***/ }),

/***/ "./src/app/content/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/users.service */ "./src/app/common/service/users.service.ts");
/* harmony import */ var src_app_common_model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/model/user.model */ "./src/app/common/model/user.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_userService) {
        this._userService = _userService;
        this.validAgeInput = true;
        this.validEmailInput = true;
        this.validPasswordInput = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeUser = this._userService.userChecked;
        this.fullFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.activeUser.name, []),
            surnameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.activeUser.surname, []),
            ageControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.activeUser.age, [ageValidator]),
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.activeUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, emailValidator]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.activeUser.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.fullFormControl.valueChanges.subscribe(function (value) {
            _this.successChange = false;
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (value.emailControl !== _this.activeUser.email) {
                if (pattern.test(value.emailControl))
                    _this.validEmailInput = true;
                else
                    _this.validEmailInput = false;
            }
            else
                _this.validEmailInput = true;
            if (value.passwordControl !== _this.activeUser.password) {
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
    ProfileComponent.prototype.onChangeItem = function () {
        this.successChange = false;
        if (this.fullFormControl.valid) {
            var userChanged = new src_app_common_model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.fullFormControl.value.nameControl, this.fullFormControl.value.surnameControl, this.fullFormControl.value.ageControl, this.fullFormControl.value.emailControl, this.fullFormControl.value.passwordControl);
            this._userService.activeUserChange(userChanged);
            this.successChange = true;
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/content/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/content/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_common_service_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], ProfileComponent);
    return ProfileComponent;
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


/***/ })

}]);
//# sourceMappingURL=common-module-profile-module.js.map