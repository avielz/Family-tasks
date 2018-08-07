(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n\n<p>\n  Task description:\n  <input type=\"text\" [(ngModel)]=\"description\" />\n</p>\n\n<p>\n  Task due date:\n  <input type=\"date\" [(ngModel)]=\"date\" />\n</p>\n\n<p>\n  Delegate to:\n    <select [(ngModel)]=\"ownerID\">\n        <option *ngFor=\"let data of memberlist\" [value]=\"data?.id\">{{data?.name}}</option>\n    </select>\n</p>\n\n  <input type=\"button\" value=\"Set task\" (click)=\"onSetTask()\" />\n</div>\n\n<p>\n  {{ message }}\n</p>\n\n\n\n"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(pagedata) {
        this.pagedata = pagedata;
    }
    AddTaskComponent.prototype.onSetTask = function () {
        var _this = this;
        this.pagedata.setTask({ taskDescription: this.description, date: this.date, ownerID: this.ownerID })
            .subscribe(function (response) { return _this.message = "Task has been entered."; }, function (err) { return _this.message = err.toString(); });
    };
    AddTaskComponent.prototype.ngOnInit = function () {
        this.onGetMember();
    };
    AddTaskComponent.prototype.onGetMember = function () {
        var _this = this;
        this.helper = this.pagedata.getMemberNames();
        this.helper.subscribe(function (res) {
            _this.memberlist = res.json();
            console.log("from angular component for add task: ");
            console.log(_this.memberlist);
        }, function (err) {
            _this.message = err.toString();
            console.log(err);
        });
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")]
        })
        // ***************
        ,
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: auto;\r\n    padding: 0;\r\n    width: 200px;\r\n    background-color: #f1f1f1;\r\n    border: 1px solid #555;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: #000;\r\n    padding: 8px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli {\r\n    text-align: center;\r\n    border-bottom: 1px solid #555;\r\n}\r\n\r\nli:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\nli a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #555;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Welcome to {{ title }}</h3>\n</div>\n\n\n<ul>\n    <li><a routerLink=\"/tasklist\">Task list</a></li>\n    <li><a routerLink=\"/memberslist\">Family members list</a></li>\n    <li><a routerLink=\"/addTask\">Set new task</a></li>\n</ul>\n\n<hr>\n<br>\n<router-outlet>\n  <div>this came from the router:<hr></div>\n</router-outlet>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Family tasks application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _memberlist_memberlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memberlist/memberlist.component */ "./src/app/memberlist/memberlist.component.ts");
/* harmony import */ var _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasklist/tasklist.component */ "./src/app/tasklist/tasklist.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _memberlist_memberlist_component__WEBPACK_IMPORTED_MODULE_7__["MemberslistComponent"],
                _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_8__["TasklistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: 'tasklist',
                        component: _tasklist_tasklist_component__WEBPACK_IMPORTED_MODULE_8__["TasklistComponent"]
                    },
                    // {
                    //     path: '', 
                    //     component: TasklistComponent
                    // },
                    {
                        path: 'memberslist',
                        component: _memberlist_memberlist_component__WEBPACK_IMPORTED_MODULE_7__["MemberslistComponent"]
                    },
                    {
                        path: 'addTask',
                        component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"]
                    }
                ])
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.gettasklist = function () {
        return this.http.get("/tasklist");
    };
    DataService.prototype.getMembers = function () {
        return this.http.get("/member");
    };
    // want to add this feature also to get all tasks for a member by clicking name on member list
    DataService.prototype.getMemberById = function (memberId) {
        return this.http.get("/member/" + memberId);
    };
    DataService.prototype.getMemberNames = function () {
        return this.http.get("/membernames");
    };
    DataService.prototype.setTask = function (taskData) {
        return this.http.post('/setTask', taskData);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/memberlist/memberlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/memberlist/memberlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/memberlist/memberlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/memberlist/memberlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  memberlist works!\n</p>\n<pre>\n  {{members|json}}\n</pre> -->\n\n<table>\n    <thead>\n        <tr>\n            \n            <th></th>\n            <th>Name</th>\n            <th>Nickname</th>\n            <th>Role</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let data of memberlist\">\n            <td></td>\n            <td>{{data.name}}</td>\n            <td>{{data.nickname}}</td>\n            <td>{{data.description}}</td>\n        </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/memberlist/memberlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/memberlist/memberlist.component.ts ***!
  \****************************************************/
/*! exports provided: MemberslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberslistComponent", function() { return MemberslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberslistComponent = /** @class */ (function () {
    function MemberslistComponent(getdata) {
        this.getdata = getdata;
    }
    // ngOnInit() :void {
    //   this.data.getMembers().subscribe( response=> {
    //     this.members=response.json();
    //   });
    // }
    MemberslistComponent.prototype.ngOnInit = function () {
        this.getmember();
    };
    MemberslistComponent.prototype.getmember = function () {
        var _this = this;
        this.cam = this.getdata.getMembers();
        this.cam.subscribe(function (res) {
            _this.memberlist = res.json();
            console.log("from angular component: ");
            console.log(_this.memberlist);
        });
    };
    MemberslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memberlist',
            template: __webpack_require__(/*! ./memberlist.component.html */ "./src/app/memberlist/memberlist.component.html"),
            styles: [__webpack_require__(/*! ./memberlist.component.css */ "./src/app/memberlist/memberlist.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MemberslistComponent);
    return MemberslistComponent;
}());



/***/ }),

/***/ "./src/app/tasklist/tasklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.html":
/*!**************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n      <tr>\n          \n          <th>Task</th>\n          \n          <th>Assigned to</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let data of tasklist\">\n          <td>{{data.task}}</td>\n          <td>{{data.name}}</td>\n          \n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/tasklist/tasklist.component.ts ***!
  \************************************************/
/*! exports provided: TasklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistComponent", function() { return TasklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasklistComponent = /** @class */ (function () {
    function TasklistComponent(getdata) {
        this.getdata = getdata;
    }
    TasklistComponent.prototype.ngOnInit = function () {
        this.gettask();
    };
    TasklistComponent.prototype.gettask = function () {
        var _this = this;
        this.cam = this.getdata.gettasklist();
        this.cam.subscribe(function (res) {
            _this.tasklist = res.json();
            console.log("from angular component: ");
            console.log(_this.tasklist);
        });
    };
    TasklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasklist',
            template: __webpack_require__(/*! ./tasklist.component.html */ "./src/app/tasklist/tasklist.component.html"),
            styles: [__webpack_require__(/*! ./tasklist.component.css */ "./src/app/tasklist/tasklist.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TasklistComponent);
    return TasklistComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\avielz\Dov\exam\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map