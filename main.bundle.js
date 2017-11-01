webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  min-height: 100vh;\n}\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"wrapper\">\n  <app-header></app-header>\n  <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"content\">\n    <div fxFlex=\"100\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_components_header_header_component__ = __webpack_require__("../../../../../src/app/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__form_details_form_details_component__ = __webpack_require__("../../../../../src/app/form-details/form-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_login_service__ = __webpack_require__("../../../../../src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_pipes_sort_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_pipes_search_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_pipes_category_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/category.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__common_reducers__ = __webpack_require__("../../../../../src/app/common/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__common_effects_product__ = __webpack_require__("../../../../../src/app/common/effects/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__common_effects_auth__ = __webpack_require__("../../../../../src/app/common/effects/auth.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_25__shared_pipes_sort_pipe__["a" /* SortPipe */],
            __WEBPACK_IMPORTED_MODULE_20__form_details_form_details_component__["a" /* FormDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__shared_pipes_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_16__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_27__shared_pipes_category_pipe__["a" /* CategoryPipe */],
            __WEBPACK_IMPORTED_MODULE_15__shared_components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__product_create_product_create_component__["a" /* ProductCreateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_28__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_31__common_reducers__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_32__common_effects_product__["a" /* ProductEffects */], __WEBPACK_IMPORTED_MODULE_33__common_effects_auth__["a" /* AuthEffects */]]),
            __WEBPACK_IMPORTED_MODULE_30__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                maxAge: 25
            }),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__shared_services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_services_login_service__["a" /* LoginService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_details_form_details_component__ = __webpack_require__("../../../../../src/app/form-details/form-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");






var routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__["a" /* CartComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_4__form_details_form_details_component__["a" /* FormDetailsComponent */] },
    {
        path: 'product-create',
        component: __WEBPACK_IMPORTED_MODULE_0__product_create_product_create_component__["a" /* ProductCreateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    { path: '**', redirectTo: 'products' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n  cursor: pointer\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart\">\n  <mat-card *ngFor=\"let item of cart | async\" fxLayout=\"row\">\n    <mat-card-title fxFlex=\"60\">{{item.title}}</mat-card-title>\n    <a class=\"btn\" fxFlex=\"5\" (click)=\"reduceItem(item)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></a>\n    <mat-card-title fxFlex=\"5\">{{item.amount}}</mat-card-title>\n    <a class=\"btn\" fxFlex=\"15\" (click)=\"increaseItem(item)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n    <mat-card-title fxFlex=\"40\">{{item.price | currency}}</mat-card-title>\n    <a class=\"btn\" fxFlex=\"5\" (click)=\"removeItem(item)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n  </mat-card>\n  <mat-card  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <button mat-raised-button color=\"accent\" [routerLink]=\"['/form']\">NEXT</button>\n    <button mat-button>Total: {{sum}}</button>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__("../../../../../src/app/common/actions/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(_store) {
        this._store = _store;
        this.sum = 0;
        this.cart = _store.select('cart');
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.select('cart').subscribe(function (cart) { return _this.calculateTotal(cart); });
    };
    CartComponent.prototype.removeItem = function (product) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["d" /* DeleteItem */](product));
    };
    CartComponent.prototype.reduceItem = function (product) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["h" /* ReduceItem */](product));
    };
    CartComponent.prototype.increaseItem = function (product) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["f" /* IncreaseItem */](product));
    };
    CartComponent.prototype.calculateTotal = function (cart) {
        var _this = this;
        this.sum = 0;
        cart.forEach(function (item) {
            _this.sum += item.amount * item.price;
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/actions/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGOUT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LogoutFail; });
var LOGIN = '[Auth] Login ..';
var LOGIN_SUCCESS = '[Auth] Login Success';
var LOGIN_FAIL = '[Auth] login Fail';
var LOGOUT = '[Auth] Logout ..';
var LOGOUT_SUCCESS = '[Auth] Logout Success';
var LOGOUT_FAIL = '[Auth] Logout Fail';
var Login = (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = LOGIN;
    }
    return Login;
}());

var LoginSuccess = (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LoginFail = (function () {
    function LoginFail(payload) {
        this.payload = payload;
        this.type = LOGIN_FAIL;
    }
    return LoginFail;
}());

var Logout = (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var LogoutSuccess = (function () {
    function LogoutSuccess() {
        this.type = LOGOUT_SUCCESS;
    }
    return LogoutSuccess;
}());

var LogoutFail = (function () {
    function LogoutFail() {
        this.type = LOGOUT_FAIL;
    }
    return LogoutFail;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../src/app/common/actions/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REDUCE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return INCREASE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ReduceItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return IncreaseItem; });
var ADD_TO_CART = '[Cart] Add Product To Cart';
var DELETE_ITEM = '[Cart] Delete Item';
var REDUCE_ITEM = '[Cart] Reduce Item';
var INCREASE_ITEM = '[Cart] Increase Item';
var AddToCart = (function () {
    function AddToCart(payload) {
        this.payload = payload;
        this.type = ADD_TO_CART;
    }
    return AddToCart;
}());

var DeleteItem = (function () {
    function DeleteItem(payload) {
        this.payload = payload;
        this.type = DELETE_ITEM;
    }
    return DeleteItem;
}());

var ReduceItem = (function () {
    function ReduceItem(payload) {
        this.payload = payload;
        this.type = REDUCE_ITEM;
    }
    return ReduceItem;
}());

var IncreaseItem = (function () {
    function IncreaseItem(payload) {
        this.payload = payload;
        this.type = INCREASE_ITEM;
    }
    return IncreaseItem;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ "../../../../../src/app/common/actions/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClearForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UpdateForm; });
var CLEAR_FORM = '[Form] Clear form';
var UPDATE_FORM = '[Form] Update form';
var ClearForm = (function () {
    function ClearForm() {
        this.type = CLEAR_FORM;
    }
    return ClearForm;
}());

var UpdateForm = (function () {
    function UpdateForm(payload) {
        this.payload = payload;
        this.type = UPDATE_FORM;
    }
    return UpdateForm;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../../../../../src/app/common/actions/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_PRODUCTS_SUCCESS; });
/* unused harmony export LOAD_PRODUCTS_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoadProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddProductSuccess; });
var LOAD_PRODUCTS = '[Product] Load Products';
var LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';
var LOAD_PRODUCTS_FAIL = '[Product] Load Products Success';
var ADD_PRODUCT = '[Product] Add Product';
var ADD_PRODUCT_SUCCESS = '[Product] Add Product Success';
var LoadProducts = (function () {
    function LoadProducts() {
        this.type = LOAD_PRODUCTS;
    }
    return LoadProducts;
}());

var LoadProductsSuccess = (function () {
    function LoadProductsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS_SUCCESS;
    }
    return LoadProductsSuccess;
}());

var LoadProductsFail = (function () {
    function LoadProductsFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS_FAIL;
    }
    return LoadProductsFail;
}());

var AddProduct = (function () {
    function AddProduct(payload) {
        this.payload = payload;
        this.type = ADD_PRODUCT;
    }
    return AddProduct;
}());

var AddProductSuccess = (function () {
    function AddProductSuccess(payload) {
        this.payload = payload;
        this.type = ADD_PRODUCT_SUCCESS;
    }
    return AddProductSuccess;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/common/effects/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__ = __webpack_require__("../../../../../src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_auth__ = __webpack_require__("../../../../../src/app/common/actions/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthEffects = (function () {
    function AuthEffects(actions$, _loginService, _router) {
        var _this = this;
        this.actions$ = actions$;
        this._loginService = _loginService;
        this._router = _router;
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth__["a" /* LOGIN */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) { return _this._loginService.login(data); })
            .map(function (user) { return new __WEBPACK_IMPORTED_MODULE_2__actions_auth__["i" /* LoginSuccess */](user); })
            .do(function () { return _this._router.navigate(['/']); })
            .catch(function (err) {
            // tslint:disable-next-line
            console.log(err);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_2__actions_auth__["h" /* LoginFail */](err));
        });
        this.logout$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth__["d" /* LOGOUT */])
            .switchMap(function () { return _this._loginService.logout(); })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_2__actions_auth__["l" /* LogoutSuccess */](); })
            .do(function () { return _this._router.navigate(['/']); })
            .catch(function (err) {
            // tslint:disable-next-line
            console.log(err);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_2__actions_auth__["k" /* LogoutFail */]());
        });
    }
    return AuthEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], AuthEffects.prototype, "login$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], AuthEffects.prototype, "logout$", void 0);
AuthEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _e || Object])
], AuthEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../src/app/common/effects/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_product__ = __webpack_require__("../../../../../src/app/common/actions/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductEffects = (function () {
    function ProductEffects(actions$, _productService, _matSnackBar) {
        var _this = this;
        this.actions$ = actions$;
        this._productService = _productService;
        this._matSnackBar = _matSnackBar;
        this.loadProducts$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_product__["e" /* LOAD_PRODUCTS */])
            .switchMap(function () { return _this._productService.getProducts(); })
            .map(function (products) { return new __WEBPACK_IMPORTED_MODULE_2__actions_product__["i" /* LoadProductsSuccess */](products); })
            .do(function () { return _this._matSnackBar.open('Products were loaded', '', { duration: 1000 }); })
            .catch(function (err) {
            // tslint:disable-next-line
            console.log(err);
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_2__actions_product__["h" /* LoadProductsFail */]());
        });
        this.addProduct$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_product__["a" /* ADD_PRODUCT */])
            .map(function (action) { return action.payload; })
            .switchMap(function (product) { return _this._productService.addProduct(product); })
            .map(function (product) { return new __WEBPACK_IMPORTED_MODULE_2__actions_product__["d" /* AddProductSuccess */](product); })
            .do(function () { return _this._matSnackBar.open('Product has been added', '', { duration: 3000 }); });
    }
    return ProductEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], ProductEffects.prototype, "loadProducts$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], ProductEffects.prototype, "addProduct$", void 0);
ProductEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__["a" /* ProductService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatSnackBar */]) === "function" && _e || Object])
], ProductEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth__ = __webpack_require__("../../../../../src/app/common/actions/auth.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function authReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["c" /* LOGIN_SUCCESS */]: {
            return true;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["b" /* LOGIN_FAIL */]: {
            return __assign({}, action.payload);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["f" /* LOGOUT_SUCCESS */]: {
            return false;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["e" /* LOGOUT_FAIL */]: {
            return __assign({}, state);
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cartReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart__ = __webpack_require__("../../../../../src/app/common/actions/cart.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = [];
function cartReducer(products, action) {
    if (products === void 0) { products = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* ADD_TO_CART */]: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            if (itemIndex !== -1) {
                var updatedItem = __assign({}, action.payload, { amount: products[itemIndex].amount + 1 });
                products.splice(itemIndex, 1, updatedItem);
                return products.slice();
            }
            return products.concat([__assign({}, action.payload, { amount: 1 })]);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["c" /* DELETE_ITEM */]: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            products.splice(itemIndex, 1);
            return products.slice();
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["g" /* REDUCE_ITEM */]: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            if (action.payload.amount === 0) {
                return products.slice();
            }
            var updatedItem = __assign({}, action.payload, { amount: action.payload.amount - 1 });
            products.splice(itemIndex, 1, updatedItem);
            return products.slice();
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["e" /* INCREASE_ITEM */]: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            var updatedItem = __assign({}, action.payload, { amount: action.payload.amount + 1 });
            products.splice(itemIndex, 1, updatedItem);
            return products.slice();
        }
        default: {
            return products;
        }
    }
}
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_form__ = __webpack_require__("../../../../../src/app/common/actions/form.ts");

var initialState = {
    name: '',
    email: '',
    phone: '',
    address: ''
};
function formReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_form__["c" /* UPDATE_FORM */]: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_form__["a" /* CLEAR_FORM */]: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("../../../../../src/app/common/reducers/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__("../../../../../src/app/common/reducers/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__("../../../../../src/app/common/reducers/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form__ = __webpack_require__("../../../../../src/app/common/reducers/form.ts");




// tslint:disable-next-line
var reducers = {
    product: __WEBPACK_IMPORTED_MODULE_0__product__["a" /* productReducer */],
    cart: __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* cartReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* authReducer */],
    form: __WEBPACK_IMPORTED_MODULE_3__form__["a" /* formReducer */]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/common/reducers/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = productReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product__ = __webpack_require__("../../../../../src/app/common/actions/product.ts");

var initialState = [];
function productReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["f" /* LOAD_PRODUCTS_SUCCESS */]: {
            return action.payload.slice();
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["b" /* ADD_PRODUCT_SUCCESS */]: {
            return state.concat([action.payload]);
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/form-details/form-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-details/form-details.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form (ngSubmit)=\"createOrder($event)\" [formGroup]=\"userForm\">\n    <h2>Enter your details</h2>\n    <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"form-group\">\n      <mat-input-container fxFlex=\"48\">\n        <input matInput placeholder=\"Name\" #name formControlName=\"name\">\n        <mat-hint align=\"end\" *ngIf=\"userForm.controls['name'].hasError('required') && userForm.controls['name'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n      <mat-input-container fxFlex=\"48\">\n        <input matInput type=\"email\" placeholder=\"Email\" #email formControlName=\"email\" >\n        <mat-hint align=\"end\" *ngIf=\"userForm.controls['email'].errors && userForm.controls['email'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n    </div>\n\n    <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"form-group\">\n      <mat-input-container fxFlex=\"48\">\n        <input matInput placeholder=\"Address\" #address formControlName=\"address\">\n        <mat-hint align=\"end\" *ngIf=\"userForm.controls['address'].errors && userForm.controls['address'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n      <mat-input-container fxFlex=\"48\">\n        <input matInput type=\"number\" placeholder=\"Phone\" #phone formControlName=\"phone\">\n        <mat-hint align=\"end\" *ngIf=\"userForm.controls['phone'].errors && userForm.controls['phone'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n    </div>\n    <button mat-button [disabled]=\"userForm.invalid\">Ok</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/form-details/form-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_actions_form__ = __webpack_require__("../../../../../src/app/common/actions/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import 'rxjs/add/operator/take';
var FormDetailsComponent = (function () {
    function FormDetailsComponent(_fb, _store) {
        this._fb = _fb;
        this._store = _store;
        this.userForm = this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            address: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]]
        });
    }
    FormDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.select('form').subscribe(function (value) {
            Object.keys(value).forEach(function (name) {
                _this.userForm.controls[name].setValue(value[name]);
            });
        });
        this.userForm
            .valueChanges
            .debounceTime(1000)
            .subscribe(function (value) { return _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__common_actions_form__["d" /* UpdateForm */](value)); });
    };
    FormDetailsComponent.prototype.createOrder = function (order) {
        // get cart and send to server
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__common_actions_form__["b" /* ClearForm */]());
    };
    return FormDetailsComponent;
}());
FormDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-form-details',
        template: __webpack_require__("../../../../../src/app/form-details/form-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form-details/form-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], FormDetailsComponent);

var _a, _b;
//# sourceMappingURL=form-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form (ngSubmit)=\"login(auth.value)\" [formGroup]=\"auth\">\n    <h2>Login</h2>\n    <div fxLayout='column' class=\"form-group\">\n      <mat-input-container>\n        <input matInput type=\"email\" placeholder=\"Email\" #email formControlName=\"email\" >\n        <mat-hint align=\"end\" *ngIf=\"auth.controls['email'].errors && auth.controls['email'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput type=\"password\" placeholder=\"Password\" #name formControlName=\"password\">\n        <mat-hint align=\"end\" *ngIf=\"auth.controls['password'].hasError('required') && auth.controls['password'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n    </div>\n    <div>{{message}}</div>\n    <button mat-button [disabled]=\"auth.invalid\">Login</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__ = __webpack_require__("../../../../../src/app/common/actions/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_fb, _store) {
        this._fb = _fb;
        this._store = _store;
        this.auth = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.select('auth').subscribe(function (data) { return _this.message = data.message; });
    };
    LoginComponent.prototype.login = function (user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__["g" /* Login */](user));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatToolbarModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatToolbarModule */],
        ],
        declarations: []
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/product-create/product-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-input-container {\n  width: 100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form (ngSubmit)=\"submit(product.value)\" [formGroup]=\"product\">\n    <h2>Create new product</h2>\n    <div fxLayout='column' fxLayoutAlign='center' class=\"form-group\">\n\n      <mat-input-container>\n        <input matInput type=\"text\" placeholder=\"title\" #title formControlName=\"title\" >\n        <mat-hint align=\"end\" *ngIf=\"product.controls['title'].errors && product.controls['title'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n\n      <mat-input-container>\n        <input matInput type=\"text\" placeholder=\"description\" #description formControlName=\"description\" >\n        <mat-hint align=\"end\" *ngIf=\"product.controls['description'].errors && product.controls['description'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n\n      <mat-input-container>\n        <input matInput type=\"number\" placeholder=\"price\" #price formControlName=\"price\" >\n        <mat-hint align=\"end\" *ngIf=\"product.controls['price'].errors && product.controls['price'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n\n      <mat-input-container>\n        <input matInput type=\"text\" placeholder=\"photo\" #photo formControlName=\"photo\" >\n        <mat-hint align=\"end\" *ngIf=\"product.controls['photo'].errors && product.controls['photo'].touched\">\n          You can't leave this empty.\n        </mat-hint>\n      </mat-input-container>\n\n      <mat-select placeholder=\"type\" formControlName=\"type\">\n        <mat-option *ngFor=\"let type of types\" [value]=\"type.value\">\n          {{type.value}}\n        </mat-option>\n      </mat-select>\n\n    </div>\n    <button mat-button [disabled]=\"product.invalid\">Ok</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_product__ = __webpack_require__("../../../../../src/app/common/actions/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCreateComponent = (function () {
    function ProductCreateComponent(_fb, _store) {
        this._fb = _fb;
        this._store = _store;
        this.types = [
            { value: 'sandwich' },
            { value: 'dessert' },
            { value: 'drink' }
        ];
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.product = this._fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            photo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required],
            type: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required]]
        });
    };
    ProductCreateComponent.prototype.submit = function (product) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_product__["c" /* AddProduct */](product));
    };
    return ProductCreateComponent;
}());
ProductCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-product-create',
        template: __webpack_require__("../../../../../src/app/product-create/product-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-create/product-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], ProductCreateComponent);

var _a, _b;
//# sourceMappingURL=product-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\n  width: 80%\n}\n\n.buy-btn:hover {\n  background-color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-input-container fxLayout='row' fxFlex=\"100\">\n  <input matInput placeholder=\"Search\" #search>\n</mat-input-container>\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of products | async | category\" label=\"{{tab}}\">\n    <mat-grid-list cols=\"3\">\n      <mat-grid-tile rowspan=\"1\" colspan=\"1\" *ngFor=\"let  product of products | async | sort: tab | search: search.value\">\n        <mat-grid-tile-header>{{product.title}}</mat-grid-tile-header>\n        <img class=\"img\"  mat-card-image [src]=\"product.photo\">\n        <mat-grid-tile-footer  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <button class=\"buy-btn\" mat-raised-button color=\"accent\" (click)=\"addProduct(product)\">BUY</button>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__("../../../../../src/app/common/actions/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_actions_product__ = __webpack_require__("../../../../../src/app/common/actions/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    function ProductsComponent(_store, _matSnackBar) {
        this._store = _store;
        this._matSnackBar = _matSnackBar;
        this.products = _store.select('product');
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__common_actions_product__["g" /* LoadProducts */]());
    };
    ProductsComponent.prototype.addProduct = function (product) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["b" /* AddToCart */](product));
        this._matSnackBar.open(product.title + " +1", '', { duration: 1000 });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatSnackBar */]) === "function" && _b || Object])
], ProductsComponent);

var _a, _b;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout='row' fxLayoutAlign=\"space-between\">\n  <div>@2017</div>\n  <nav>\n    <a><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n    <a><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a>\n    <a><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n  </nav>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/footer/footer.component.css")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-title, .cart {\n  cursor: pointer\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" [routerLink]=\"['/products']\">\n    <span class=\"app-title\">Star Store</span>\n    <mat-icon><i class=\"fa fa-star\" aria-hidden=\"true\"></i></mat-icon>\n  </div>\n  <div fxFlex></div>\n\n  <button mat-raised-button color=\"danger\" *ngIf=\"user\" [routerLink]=\"['/product-create']\">\n    <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n  </button>\n\n  <span>{{user?.email}}</span>\n\n  <button mat-raised-button color=\"accent\" *ngIf=\"user\" (click)=\"logout()\">\n    Logout\n  </button>\n\n  <button mat-raised-button color=\"danger\" *ngIf=\"!user\" [routerLink]=\"['/login']\">\n    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>Login\n  </button>\n\n  <span class=\"cart\" [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> {{amount}}</span>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__ = __webpack_require__("../../../../../src/app/common/actions/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(_store, afAuth) {
        this._store = _store;
        this.afAuth = afAuth;
        this.amount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) { return _this.user = user; });
        // selector
        this._store.select('cart').subscribe(function (product) { return _this.amount = product.length; });
    };
    HeaderComponent.prototype.logout = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__["j" /* Logout */]());
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/category.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryPipe = (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (products) {
        //  return  [...new Set(products.map(item => item.type)) as any]; why???
        var types = products
            .map(function (item) { return item.type; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        types.push('all');
        types.sort();
        return types;
    };
    return CategoryPipe;
}());
CategoryPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'category'
    })
], CategoryPipe);

//# sourceMappingURL=category.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (products, queryString) {
        if (!queryString) {
            return products;
        }
        return products.filter(function (product) {
            return product.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (products, queryString) {
        if (!queryString || queryString === 'all') {
            return products;
        }
        return products.filter(function (product) {
            return product.type.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
        });
    };
    return SortPipe;
}());
SortPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'sort'
    })
], SortPipe);

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuardService = (function () {
    function AuthGuardService(afAuth, _router) {
        this.afAuth = afAuth;
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function (route) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .switchMap(function (user) {
            if (!user) {
                _this._router.navigate(['/login']);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(true);
        });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(afAuth) {
        this.afAuth = afAuth;
    }
    LoginService.prototype.login = function (data) {
        var email = data.email, password = data.password;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].fromPromise(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithEmailAndPassword(email, password));
    };
    LoginService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].fromPromise(this.afAuth.auth.signOut());
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(_db) {
        this._db = _db;
    }
    ProductService.prototype.getProducts = function () {
        return this._db.list('/products').valueChanges();
    };
    ProductService.prototype.getProduct = function (id) {
        return this._db.object("/products/" + id).valueChanges();
    };
    ProductService.prototype.addProduct = function (product) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(product);
        // return this._db.list(`/products`).push(product)
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBRZUbSWiocFly2RcEMp8ezFszk4RtT3ss',
        authDomain: 'ngx-store-1b953.firebaseapp.com',
        databaseURL: 'https://ngx-store-1b953.firebaseio.com',
        projectId: 'ngx-store-1b953',
        storageBucket: '',
        messagingSenderId: '49682187492'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map