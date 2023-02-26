(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/ "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        function webpackEmptyAsyncContext(req) {
            // Here Promise.resolve().then() is used instead of new Promise() to prevent
            // uncaught exception popping up in devtools
            return Promise.resolve().then(function () {
                var e = new Error("Cannot find module '" + req + "'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            });
        }

        webpackEmptyAsyncContext.keys = function () {
            return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

        /***/
    }),

    /***/ "./src/app/app-routing.module.ts":
    /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
    /*! exports provided: AppRoutingModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _pages_my_trips_my_trips_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/my-trips/my-trips.component */ "./src/app/pages/my-trips/my-trips.component.ts");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/log-in/log-in.component */ "./src/app/pages/log-in/log-in.component.ts");
        /* harmony import */
        var _pages_my_trip_my_trip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/my-trip/my-trip.component */ "./src/app/pages/my-trip/my-trip.component.ts");
        /* harmony import */
        var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
        /* harmony import */
        var _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/prev-start-trip/prev-start-trip.component */ "./src/app/pages/prev-start-trip/prev-start-trip.component.ts");
        /* harmony import */
        var _pages_exceptional_event_exceptional_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/exceptional-event/exceptional-event.component */ "./src/app/pages/exceptional-event/exceptional-event.component.ts");
        /* harmony import */
        var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
        /* harmony import */
        var _components_load_load_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/load/load.component */ "./src/app/components/load/load.component.ts");
        /* harmony import */
        var _pages_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/message-page/message-page.component */ "./src/app/pages/message-page/message-page.component.ts");


        var routes = [
            {path: '', component: _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__["LogInComponent"]},
            {
                path: 'my-trips',
                component: _pages_my_trips_my_trips_component__WEBPACK_IMPORTED_MODULE_1__["MyTripsComponent"]
            },
            {
                path: 'my-trip/:id',
                component: _pages_my_trip_my_trip_component__WEBPACK_IMPORTED_MODULE_5__["MyTripComponent"]
            },
            {
                path: 'my-trip',
                component: _pages_my_trip_my_trip_component__WEBPACK_IMPORTED_MODULE_5__["MyTripComponent"]
            },
            {
                path: 'prev-start-trip/:id',
                component: _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_7__["PrevStartTripComponent"]
            },
            {
                path: 'prev-start-trip',
                component: _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_7__["PrevStartTripComponent"]
            },
            {
                path: 'settings',
                component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]
            },
            {
                path: 'exceptional-event/:id',
                component: _pages_exceptional_event_exceptional_event_component__WEBPACK_IMPORTED_MODULE_8__["ExceptionalEventComponent"]
            },
            {
                path: 'exceptional-event',
                component: _pages_exceptional_event_exceptional_event_component__WEBPACK_IMPORTED_MODULE_8__["ExceptionalEventComponent"]
            },
            {
                path: 'contact-us',
                component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]
            },
            {path: 'load', component: _components_load_load_component__WEBPACK_IMPORTED_MODULE_10__["LoadComponent"]},
            {
                path: 'message-page/:message',
                component: _pages_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_11__["MessagePageComponent"]
            }
        ];
        var AppRoutingModule = /** @class */ (function () {
            function AppRoutingModule() {
            }

            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {useHash: true})],
                    // 
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], AppRoutingModule);
            return AppRoutingModule;
        }());


        /***/
    }),

    /***/ "./src/app/app.component.html":
    /*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<router-outlet>\r\n\r\n</router-outlet>\r\n<app-load *ngIf=\"isLoad==true\"></app-load>\r\n<!-- <app-load></app-load> -->\r\n\r\n\r\n<!-- <input type=\"text\" id=\"IsUpdateFireBase\" > -->\r\n\r\n<input type=\"text\" id=\"FireBaseToken\" style=\"display:none;\">\r\n<!-- <input type=\"text\" id=\"FireBaseToken\"> -->\r\n\r\n<input type=\"text\" id=\"locationFromAPK\" style=\"display:none;\">\r\n\r\n<input type=\"text\" id=\"locationFromAPKForReport\" style=\"display:none;\">\r\n<!-- call native <input type=\"text\" id=\"CallNative\"> locationFromAPKForReport: <input type=\"text\" id=\"locationFromAPKForReport\"> locationFromAPK:: <input type=\"text\" id=\"locationFromAPK\"> GPS_notActiveCounter_id:\r\n<input type=\"text\" id=\"GPS_notActiveCounter_id\"> -->\r\n\r\n<input type=\"text\" id=\"locationFromAPKForTrackerTrip\" style=\"display:none;\">\r\n<!-- locationFromAPKForTrackerTrip:<input type=\"text\" id=\"locationFromAPKForTrackerTrip\" > -->\r\n\r\n<input type=\"text\" id=\"smsFromApk\" style=\"display:none;\">\r\n<!-- <input type=\"text\" id=\"smsFromApk\"> -->\r\n\r\n<input type=\"text\" id=\"pushTokenFromApk\" style=\"display:none;\">\r\n<!-- <input type=\"text\" id=\"pushTokenFromApk\" > -->\r\n\r\n<!-- pushFBTokenFromApk: <div >{{pushFBTokenFromApk}}</div> -->\r\n\r\n<input type=\"text\" id=\"appInForeground\" style=\"display:none;\">\r\n\r\n<div class=\"popup-overlay\" *ngIf=\"!accompSvc.isGPSActive&&accompSvc.GPS_notActiveCounter>3\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"black-title\">يجب تفعيل GPS</div>\r\n            <br>\r\n            <div>قم بالتأكد من تفعيل GPS على جهازك</div>\r\n            <br>\r\n            <div class=\"\">\r\n                <div *ngIf=\"GPSDenied\" style=\"color: red;\" class=\"error\">يجب تفعيل GPS للمتابعة</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <!-- <input (click)=\"accompSvc.startTrackingTrip(); GPSDenied=false\" class=\"blue-btn\" type=\"button\" value=\"تم التفعيل\"> -->\r\n                <input (click)=\"accompSvc.closeGpsPopup()\" class=\"blue-btn\" type=\"button\" value=\"تم التفعيل\">\r\n                <div (click)=\"GPSDenied=true\" class=\"popup-cancel-btn\">اغلاق</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- style=\"visibility: hidden;\" -->"

        /***/
    }),

    /***/ "./src/app/app.component.scss":
    /*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

        /***/
    }),

    /***/ "./src/app/app.component.ts":
    /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
    /*! exports provided: AppComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var _services_loaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/loaction.service */ "./src/app/services/loaction.service.ts");


        var AppComponent = /** @class */ (function () {
            function AppComponent(locationSvc, accompSvc, router, cdRef) {
                var _this = this;
                this.locationSvc = locationSvc;
                this.accompSvc = accompSvc;
                this.router = router;
                this.cdRef = cdRef;
                this.appStatus = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000 * 1);
                this.isLoad = true;
                try {
                    NativeApp.WriteToAnalyticsOnAppIsOpen();
                } catch (error) {
                }
                if (!navigator.onLine) {
                    this.router.navigate(['message-page/noInternet']);
                }
                this.accompSvc.checkAppVersion().subscribe(function (res) {
                    _this.isLoad = false;
                    if (res.details == 'True') {
                        _this.accompSvc = accompSvc;
                        //alert(this.accompSvc.accompenie.smsOTP);
                        if (_this.accompSvc.accompenie != null && _this.accompSvc.accompenie.smsOTP != null) {
                            _this.router.navigate(['my-trips']);
                        } else
                            _this.router.navigate(['']);
                    } else {
                      //  _this.router.navigate(['message-page/updateVersion']);
                        _this.router.navigate(['my-trips']);
                    }
                }, function (err) {
                    _this.isLoad = false;
                    // this.accompSvc.openNoInternetAlert();
                });
                this.appStatusInterval = this.appStatus.subscribe(function (x) {
                    var appStatusValue = document.getElementById('appInForeground');
                    if (appStatusValue.value == 'true') {
                        _this.accompSvc.resetGPSCounter();
                        document.getElementById('appInForeground').value = "123";
                    }
                });
            }
            ;
            AppComponent.prototype.ngOnDestroy = function () {
                this.appStatusInterval.unsubscribe();
            };
            AppComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.subscription = this.accompSvc.getLoaddataStatus().subscribe(function (x) {
                    return _this.isLoad = x;
                });
            };
            AppComponent.prototype.ngAfterViewChecked = function () {
                this.cdRef.detectChanges();
            };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
                    styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loaction_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
            ], AppComponent);
            return AppComponent;
        }());


        /***/
    }),

    /***/ "./src/app/app.module.ts":
    /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
    /*! exports provided: AppModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
        /* harmony import */
        var _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/log-in/log-in.component */ "./src/app/pages/log-in/log-in.component.ts");
        /* harmony import */
        var _components_split_input_split_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/split-input/split-input.component */ "./src/app/components/split-input/split-input.component.ts");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
        /* harmony import */
        var _pages_my_trips_my_trips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/my-trips/my-trips.component */ "./src/app/pages/my-trips/my-trips.component.ts");
        /* harmony import */
        var _pages_my_trip_my_trip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/my-trip/my-trip.component */ "./src/app/pages/my-trip/my-trip.component.ts");
        /* harmony import */
        var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
        /* harmony import */
        var _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/prev-start-trip/prev-start-trip.component */ "./src/app/pages/prev-start-trip/prev-start-trip.component.ts");
        /* harmony import */
        var _components_trip_footer_trip_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/trip-footer/trip-footer.component */ "./src/app/components/trip-footer/trip-footer.component.ts");
        /* harmony import */
        var _components_custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/custom-select/custom-select.component */ "./src/app/components/custom-select/custom-select.component.ts");
        /* harmony import */
        var _pages_exceptional_event_exceptional_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/exceptional-event/exceptional-event.component */ "./src/app/pages/exceptional-event/exceptional-event.component.ts");
        /* harmony import */
        var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
        /* harmony import */
        var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
        /* harmony import */
        var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
        /* harmony import */
        var _services_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
        /* harmony import */
        var _services_accompenie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
        /* harmony import */
        var _components_location_location_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
        /* harmony import */
        var _components_load_load_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/load/load.component */ "./src/app/components/load/load.component.ts");
        /* harmony import */
        var _services_loaction_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/loaction.service */ "./src/app/services/loaction.service.ts");
        /* harmony import */
        var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
        /* harmony import */
        var _components_car_type_car_type_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/car-type/car-type.component */ "./src/app/components/car-type/car-type.component.ts");
        /* harmony import */
        var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
        /* harmony import */
        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
        /* harmony import */
        var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm5/zxing-ngx-scanner.js");
        /* harmony import */
        var _components_search_student_buttons_search_student_buttons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/search-student-buttons/search-student-buttons.component */ "./src/app/components/search-student-buttons/search-student-buttons.component.ts");
        /* harmony import */
        var _components_search_student_autocomplete_search_student_autocomplete_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/search-student-autocomplete/search-student-autocomplete.component */ "./src/app/components/search-student-autocomplete/search-student-autocomplete.component.ts");
        /* harmony import */
        var _components_search_student_scan_qrcode_search_student_scan_qrcode_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/search-student-scan-qrcode/search-student-scan-qrcode.component */ "./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.ts");
        /* harmony import */
        var _components_no_internet_no_internet_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/no-internet/no-internet.component */ "./src/app/components/no-internet/no-internet.component.ts");
        /* harmony import */
        var _pages_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/message-page/message-page.component */ "./src/app/pages/message-page/message-page.component.ts");


// import { MatExpansionModule } from '@angular/material/expansion';

//  import { MatIconModule } from '@angular/material/icon';


        var AppModule = /** @class */ (function () {
            function AppModule() {
            }

            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
                        _components_split_input_split_input_component__WEBPACK_IMPORTED_MODULE_6__["SplitInputComponent"],
                        _pages_my_trips_my_trips_component__WEBPACK_IMPORTED_MODULE_8__["MyTripsComponent"],
                        _pages_my_trip_my_trip_component__WEBPACK_IMPORTED_MODULE_9__["MyTripComponent"],
                        _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                        _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_11__["PrevStartTripComponent"],
                        _components_trip_footer_trip_footer_component__WEBPACK_IMPORTED_MODULE_12__["TripFooterComponent"],
                        _components_custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_13__["CustomSelectComponent"],
                        _pages_exceptional_event_exceptional_event_component__WEBPACK_IMPORTED_MODULE_14__["ExceptionalEventComponent"],
                        _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
                        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
                        _components_location_location_component__WEBPACK_IMPORTED_MODULE_22__["LocationComponent"],
                        _components_load_load_component__WEBPACK_IMPORTED_MODULE_23__["LoadComponent"],
                        _components_car_type_car_type_component__WEBPACK_IMPORTED_MODULE_26__["CarTypeComponent"],
                        _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_11__["EnumToArrayPipe"],
                        _components_search_student_buttons_search_student_buttons_component__WEBPACK_IMPORTED_MODULE_30__["SearchStudentButtonsComponent"],
                        _components_search_student_autocomplete_search_student_autocomplete_component__WEBPACK_IMPORTED_MODULE_31__["SearchStudentAutocompleteComponent"],
                        _components_search_student_scan_qrcode_search_student_scan_qrcode_component__WEBPACK_IMPORTED_MODULE_32__["SearchStudentScanQrcodeComponent"],
                        _components_no_internet_no_internet_component__WEBPACK_IMPORTED_MODULE_33__["NoInternetComponent"],
                        _pages_message_page_message_page_component__WEBPACK_IMPORTED_MODULE_34__["MessagePageComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        // MatExpansionModule,
                        // MatIconModule,
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_29__["ZXingScannerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    ],
                    providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"], _services_accompenie_service__WEBPACK_IMPORTED_MODULE_19__["AccompanieService"], _components_location_location_component__WEBPACK_IMPORTED_MODULE_22__["LocationComponent"], _pages_prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_11__["PrevStartTripComponent"], _services_loaction_service__WEBPACK_IMPORTED_MODULE_24__["LocationService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_25__["CookieService"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"]],
                    entryComponents: [_components_no_internet_no_internet_component__WEBPACK_IMPORTED_MODULE_33__["NoInternetComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            return AppModule;
        }());


        /***/
    }),

    /***/ "./src/app/components/car-type/car-type.component.html":
    /*!*************************************************************!*\
  !*** ./src/app/components/car-type/car-type.component.html ***!
  \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "\r\n\r\n\r\n\r\n  <div class=\"\" [ngClass]=\"[ carType == 'Bus'? 'containerBus': carType == 'MiniBus' ? 'containerMiniBus' : carType == 'Taxi'? 'containerTaxi' : 'containerElevatorCar']\">\r\n  <span class=\"carTypeName\">  {{carTypeName}} </span> \r\n<div class=\"image\" [ngClass]=\"[ carType == 'Bus'? 'Bus': carType == 'MiniBus' ? 'MiniBus' : carType == 'Taxi'? 'Taxi' : 'ElevatorCar']\">\r\n   \r\n</div>\r\n<div class=\"allCarType\">\r\n<div  *ngFor=\"let c of carTypeList\"[ngClass]=\"{ 'PassNum3036' : c.PassengersNumber =='30-36' }\" class=\"radioContainer\"  >\r\n\r\n  <button type=\"button\" (click)=\"radioChange(c.GuideID, $event)\" >{{c.PassengersNumber}}</button>\r\n\r\n  <!-- <label >\r\n    <input type=\"radio\" name=\"radio\">\r\n    <span class=\"circle\"></span> \r\n  </label> -->\r\n</div>\r\n</div>\r\n</div>\r\n\r\n"

        /***/
    }),

    /***/ "./src/app/components/car-type/car-type.component.scss":
    /*!*************************************************************!*\
  !*** ./src/app/components/car-type/car-type.component.scss ***!
  \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".carTypeName {\n  padding-top: 5%;\n  padding-right: 34%;\n  width: 79px;\n  height: 16px;\n  left: 41px;\n  top: 150px;\n  font-family: Cairo;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 16px;\n  /* identical to box height, or 89% */\n  display: flex;\n  align-items: center;\n  text-align: right;\n  letter-spacing: 0.75px;\n  text-transform: uppercase;\n  color: #121212;\n  opacity: 0.8; }\n\n.allCarType {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-right: 5%; }\n\n.PassNum3036 {\n  width: 39% !important; }\n\n.image {\n  height: 100px;\n  width: 100px;\n  background-size: cover; }\n\n.radioContainer {\n  margin-left: 1%;\n  margin-top: 1%;\n  width: 21%;\n  height: 26px;\n  background: #FFFFFF;\n  border: 1px solid #2B59AC;\n  border-radius: 6px;\n  font-family: Cairo;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 16px;\n  /* or 100% */\n  display: grid;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.75px;\n  text-transform: uppercase;\n  color: #2B59AC; }\n\n.radioContainer button {\n  background: none;\n  color: inherit;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  font-weight: bold;\n  text-align: center; }\n\n.radioContainer.selected {\n  background-color: black !important; }\n\n.radioChecked {\n  background: #2B59AC;\n  color: #FFF; }\n\n.Bus {\n  background-image: url('school-bus.svg');\n  height: 83px;\n  width: 83px;\n  margin-right: 26%;\n  margin-top: 10%;\n  margin-bottom: 6%; }\n\n.MiniBus {\n  background-image: url('buses.svg');\n  height: 68.76px;\n  width: 74px;\n  margin-bottom: 10%;\n  margin-right: 24%;\n  margin-top: 15%; }\n\n.Taxi {\n  background-image: url('taxi.svg');\n  height: 66.42px;\n  width: 80.22px;\n  margin-right: 23%;\n  margin-top: 13%;\n  margin-bottom: 14%; }\n\n.ElevatorCar {\n  background-image: url('disabled.svg');\n  height: 81.43px;\n  width: 113px;\n  margin-bottom: 6%;\n  margin-right: 9%;\n  margin-top: 10%; }\n\n@media screen and (max-width: 360px) {\n  .PassNum3036 {\n    height: 10%;\n    width: 39%; } }\n\n.radioContainer input {\n  display: none; }\n\n.radioContainer .circle {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 0;\n  top: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.87);\n  border-radius: 50%; }\n\n.radioContainer input:checked + .circle {\n  border-color: #2B59AC; }\n\n.radioContainer input:checked + .circle:after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background-color: #2B59AC;\n  position: absolute;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXItdHlwZS9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FyLXR5cGVcXGNhci10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Nhci10eXBlL0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXNzZXRzXFxzdHlsZVxcYmFzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBRVYsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQ0FBQTtFQUVBLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFFekIsY0FBYztFQUVkLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBbUI7RUFFbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0kscUJBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFBO0VBRUEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBSWxCO0VBQ0ksZ0JBQWdCO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLG1CQUFtQjtFQUNuQixXQUFZLEVBQUE7O0FBSWhCO0VBQ0ksdUNBQXlEO0VBRXpELFlBQVk7RUFDWixXQUFXO0VBRVgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFRckI7RUFDSSxrQ0FBb0Q7RUFDcEQsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFVbkI7RUFDSSxpQ0FBbUQ7RUFDbkQsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQVV0QjtFQUNJLHFDQUF1RDtFQUN2RCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQU9sQjtFQUNHO0lBQ0ksV0FBWTtJQUNaLFVBQVcsRUFBQSxFQUNkOztBQW1ETDtFQUNJLGFBQVksRUFBQTs7QUFFaEI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixxQ0N2TndCO0VEd054QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxxQkMvTmdCLEVBQUE7O0FEaU9wQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ3JPZ0I7RUR1T2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFFBQU87RUFDUCx3Q0FBK0I7VUFBL0IsZ0NBQStCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhci10eXBlL2Nhci10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlL2Jhc2UnO1xyXG5cclxuLmNhclR5cGVOYW1le1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNCU7XHJcbiAgICB3aWR0aDogNzlweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGxlZnQ6IDQxcHg7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgODklICovXHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIGNvbG9yOiAjMTIxMjEyO1xyXG5cclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4uYWxsQ2FyVHlwZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIC8vYm9yZGVyLXRvcDogc29saWQgMnB4IGJsYWNrO1xyXG4gICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNhZmU7XHJcblxyXG59XHJcbi5QYXNzTnVtMzAzNntcclxuICAgIHdpZHRoOiAzOSUgIWltcG9ydGFudCA7IFxyXG59XHJcbi5pbWFnZXtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbn1cclxuLnJhZGlvQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB3aWR0aDogMjElO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyQjU5QUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgLyogb3IgMTAwJSAqL1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzJCNTlBQztcclxuXHJcbn1cclxuXHJcbi5yYWRpb0NvbnRhaW5lciBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmFkaW9Db250YWluZXIuc2VsZWN0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmFkaW9DaGVja2Vke1xyXG4gICAgYmFja2dyb3VuZDogIzJCNTlBQztcclxuICAgIGNvbG9yOiAjRkZGIDtcclxufVxyXG5cclxuXHJcbi5CdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zY2hvb2wtYnVzLnN2Zyk7XHJcbiAgICBcclxuICAgIGhlaWdodDogODNweDtcclxuICAgIHdpZHRoOiA4M3B4O1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMjYlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbn1cclxuLy8gLmNvbnRhaW5lckJ1c3tcclxuLy8gICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZDFlMGUwO1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjZDFlMGUwO1xyXG5cclxuLy8gfVxyXG5cclxuLk1pbmlCdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9idXNlcy5zdmcpO1xyXG4gICAgaGVpZ2h0OiA2OC43NnB4O1xyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0JTtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIC8vIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggZ3JheTtcclxuXHJcbn1cclxuLy8gLmNvbnRhaW5lck1pbmlCdXN7XHJcbi8vICAgICBib3JkZXItbGVmdDogc29saWQgM3B4ICNkMWUwZTA7XHJcbi8vICAgICAvL3BhZGRpbmctcmlnaHQ6IDNweDtcclxuXHJcbi8vIH1cclxuXHJcbi5UYXhpe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvdGF4aS5zdmcpO1xyXG4gICAgaGVpZ2h0OiA2Ni40MnB4O1xyXG4gICAgd2lkdGg6IDgwLjIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzJTtcclxuICAgIG1hcmdpbi10b3A6IDEzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0JTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmF5O1xyXG5cclxufVxyXG4vLyAuY29udGFpbmVyVGF4aXtcclxuLy8gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2QxZTBlMDtcclxuLy8gICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcblxyXG4vLyB9XHJcblxyXG4uRWxldmF0b3JDYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9kaXNhYmxlZC5zdmcpO1xyXG4gICAgaGVpZ2h0OiA4MS40M3B4O1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDklO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi8vIC5jb250YWluZXJFbGV2YXRvckNhcntcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuXHJcbi8vIH1cclxuXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgLlBhc3NOdW0zMDM2e1xyXG4gICAgICAgIGhlaWdodDogMTAlIDtcclxuICAgICAgICB3aWR0aDogMzklIDtcclxuICAgIH1cclxuIH1cclxuLy8gICAgIC5jb250YWluZXJNaW5pQnVzIHtcclxuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb250YWluZXJUYXhpIHtcclxuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuY29udGFpbmVyQnVzIHtcclxuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb250YWluZXJNaW5pQnVzIHtcclxuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuY29udGFpbmVyRWxldmF0b3JDYXIge1xyXG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vIC5jb250YWluZXJ7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbi8vICAgIC8vd2lkdGg6IDQwJTtcclxuLy8gfVxyXG4vLyAjYWxsQ2FyVHlwZXtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAvL2ZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgd2lkdGg6IDEyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyNhbGxDYXJUeXBlIGJ1dHRvbntcclxuIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vL31cclxuXHJcbiAgLy8qKioqIFJBRElPIEJVVFRPTiAqKioqXHJcblxyXG4vLyAgIC5yYWRpb0NvbnRhaW5lcntcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vICAgICBkaXJlY3Rpb246IHJ0bDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xyXG4vLyB9XHJcbi5yYWRpb0NvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLnJhZGlvQ29udGFpbmVyIC5jaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcbi5yYWRpb0NvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgLmNpcmNsZXtcclxuICAgIGJvcmRlci1jb2xvcjokbWFpbi1ibHVlO1xyXG59XHJcbi5yYWRpb0NvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgLmNpcmNsZTphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJsdWU7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRvcDo1MCU7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4iLCIkbWFpbi1ibHVlIDogIzJCNTlBQztcclxuJHdoaXRlIDogI0ZGRkZGRjtcclxuJGdyYXkgOiAjNzU3NTc1O1xyXG4kYmxhY2sgOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG5cclxuQG1peGluIGJveC1zaGFkb3ctbWl4aW4gKCR0b3AsICRsZWZ0LCAkYmx1ciwgJGNvbG9yKXtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1taXhpbigkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICB9XHJcblxyXG4vLyBFWFRFTkRFRCBDTEFTRVNcclxuXHJcbiVmb250e1xyXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59Il19 */"

        /***/
    }),

    /***/ "./src/app/components/car-type/car-type.component.ts":
    /*!***********************************************************!*\
  !*** ./src/app/components/car-type/car-type.component.ts ***!
  \***********************************************************/
    /*! exports provided: CarTypeComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarTypeComponent", function () {
            return CarTypeComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_models_carTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/carTypes */ "./src/app/models/carTypes.ts");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


        var CarTypeComponent = /** @class */ (function () {
            function CarTypeComponent(accompSvc, activityRoute, router) {
                this.accompSvc = accompSvc;
                this.activityRoute = activityRoute;
                this.router = router;
                this.IsSelectedcarType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            CarTypeComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.carTypeList = src_app_models_carTypes__WEBPACK_IMPORTED_MODULE_2__["CarTypes"].SetCarTypes().filter(function (c) {
                    return src_app_models_carTypes__WEBPACK_IMPORTED_MODULE_2__["CarTypesCategory"][c.CarTypesCategory] == _this.carType;
                });
                this.carTypeName = this.carTypeList[0].CarName;
            };
            CarTypeComponent.prototype.radioChange = function (id, element) {
                var _this = this;
                if (document.getElementsByClassName("radioChecked").length > 0) { //אם כבר נבחר סוג רכב, 
                    document.getElementsByClassName("radioChecked")[0].className =
                        document.getElementsByClassName("radioChecked")[0].className.replace("radioChecked", ""); //תוריד את העיצוב מהבחירה הקודמת
                }
                element.currentTarget.parentElement.className += " radioChecked"; //שים את העיצוב בבחירה החדשה
                this.IsSelectedcarType.emit(id);
                this.accompSvc.accompenie.trips.forEach(function (x) {
                    if (x.ID == _this.currentTripId) {
                        x.carType = id;
                    }
                });
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], CarTypeComponent.prototype, "carType", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], CarTypeComponent.prototype, "IsSelectedcarType", void 0);
            CarTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-car-type',
                    template: __webpack_require__(/*! ./car-type.component.html */ "./src/app/components/car-type/car-type.component.html"),
                    styles: [__webpack_require__(/*! ./car-type.component.scss */ "./src/app/components/car-type/car-type.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
            ], CarTypeComponent);
            return CarTypeComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/custom-select/custom-select.component.html":
    /*!***********************************************************************!*\
  !*** ./src/app/components/custom-select/custom-select.component.html ***!
  \***********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<div class=\"select-wraper\" [ngClass]=\"{'active' : open, 'required' : isRequired}\">\r\n    <div (click)=\"open = !open\" class=\"title-wraper flex\">\r\n        <div class=\"title middle-text-gray flex-big\">\r\n            {{selectText? selectText: title}}\r\n\r\n        </div>\r\n        <i class=\"down accor-arrow\"></i>\r\n    </div>\r\n    <div class=\"accor-panel padding-five\">\r\n        <div *ngFor=\"let option of options\" class=\"option\" (click)=\"selectedValue(option) \">{{option.text}}\r\n        </div>\r\n    </div>\r\n\r\n</div>"

        /***/
    }),

    /***/ "./src/app/components/custom-select/custom-select.component.scss":
    /*!***********************************************************************!*\
  !*** ./src/app/components/custom-select/custom-select.component.scss ***!
  \***********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".select-wraper {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 4px rgba(8, 35, 48, 0.24);\n  border-radius: 6px; }\n\n.title {\n  padding: 5px; }\n\n.title-wraper {\n  height: 45px; }\n\n.active .title-wraper {\n  border-bottom: 1px solid #8080806e; }\n\ni {\n  padding: 5px;\n  margin: 8px 7px 12px 12px; }\n\n.option {\n  padding: 5px; }\n\n.option:not(:last-child) {\n  border-bottom: 0.5px solid #8080804f; }\n\n.active .accor-panel {\n  max-height: 210px; }\n\n.required {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc2VsZWN0L0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjdXN0b20tc2VsZWN0XFxjdXN0b20tc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1zZWxlY3QvY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Qtd3JhcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDgsIDM1LCA0OCwgMC4yNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi50aXRsZS13cmFwZXIge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uYWN0aXZlIC50aXRsZS13cmFwZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA2ZTtcclxufVxyXG5cclxuaSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDhweCA3cHggMTJweCAxMnB4O1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM4MDgwODA0ZjtcclxufVxyXG5cclxuLmFjdGl2ZSAuYWNjb3ItcGFuZWwge1xyXG4gICAgbWF4LWhlaWdodDogMjEwcHg7XHJcbn1cclxuXHJcbi5yZXF1aXJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"

        /***/
    }),

    /***/ "./src/app/components/custom-select/custom-select.component.ts":
    /*!*********************************************************************!*\
  !*** ./src/app/components/custom-select/custom-select.component.ts ***!
  \*********************************************************************/
    /*! exports provided: CustomSelectComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CustomSelectComponent", function () {
            return CustomSelectComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var CustomSelectComponent = /** @class */ (function () {
            function CustomSelectComponent() {
                this.open = false;
                this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            CustomSelectComponent.prototype.ngOnInit = function () {
            };
            CustomSelectComponent.prototype.selectedValue = function (option) {
                this.selectText = option.text;
                this.selected.emit(option);
                this.open = false;
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
            ], CustomSelectComponent.prototype, "options", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], CustomSelectComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
            ], CustomSelectComponent.prototype, "isRequired", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], CustomSelectComponent.prototype, "selected", void 0);
            CustomSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-custom-select',
                    template: __webpack_require__(/*! ./custom-select.component.html */ "./src/app/components/custom-select/custom-select.component.html"),
                    styles: [__webpack_require__(/*! ./custom-select.component.scss */ "./src/app/components/custom-select/custom-select.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], CustomSelectComponent);
            return CustomSelectComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/load/load.component.html":
    /*!*****************************************************!*\
  !*** ./src/app/components/load/load.component.html ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<div class=\"load\">\r\n    <div class=\"header\">\r\n        <div class=\"sub-header\">\r\n            <div class=\"header-title\">\r\n                سفرياتي\r\n            </div>\r\n            <div class=\"header-left\">\r\n                {{dateNow}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"inCenter\">\r\n        <div id=\"bus\" class=\"absolute\">\r\n            <img width=\"200\" src=\"assets/animations/minivan.gif\" alt=\"\">\r\n        </div>\r\n        <div id=\"logo\" class=\"absolute\">\r\n            <img width=\"40\" src=\"assets/img/profill-logo-1.png\" alt=\"\">\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n    <div class=\"\">\r\n        <div id=\"bus\" class=\"inCenter\">\r\n            <!-- <img src=\"assets/img/newBus.svg\" alt=\"\" style=\"height: 80px\"> -->\r\n            <img width=\"300\" src=\"assets/animations/BusAnimation.gif\" alt=\"\">\r\n            <!-- <img src=\"assets/img/profill-logo-1.png\" alt=\"\" style=\"height: 78px;margin-bottom: 12px;margin-left: 32px;\"> -->\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"container\">\r\n        <div id=\"backimg\"></div>\r\n        <img src=\"http://placekitten.com/700/500\" />\r\n    </div> -->\r\n\r\n    <!-- <div class=\"sk-fading-circle\">\r\n\r\n        <div class=\"sk-circle1 sk-circle\"></div>\r\n        <div class=\"sk-circle2 sk-circle\"></div>\r\n        <div class=\"sk-circle3 sk-circle\"></div>\r\n        <div class=\"sk-circle4 sk-circle\"></div>\r\n        <div class=\"sk-circle5 sk-circle\"></div>\r\n        <div class=\"sk-circle6 sk-circle\"></div>\r\n        <div class=\"sk-circle7 sk-circle\"></div>\r\n        <div class=\"sk-circle8 sk-circle\"></div>\r\n        <div class=\"sk-circle9 sk-circle\"></div>\r\n        <div class=\"sk-circle10 sk-circle\"></div>\r\n        <div class=\"sk-circle11 sk-circle\"></div>\r\n        <div class=\"sk-circle12 sk-circle\"></div>\r\n    </div> -->\r\n    <!-- <p class=\"text\">טוען נתונים</p> -->\r\n    <app-trip-footer></app-trip-footer>\r\n</div>"

        /***/
    }),

    /***/ "./src/app/components/load/load.component.scss":
    /*!*****************************************************!*\
  !*** ./src/app/components/load/load.component.scss ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".load {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eef1ff;\n  z-index: 999999; }\n\n.text {\n  color: #2B59AC;\n  font-size: 700;\n  text-align: center;\n  top: 0px; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  margin-top: 200px;\n  margin-bottom: 0px;\n  width: 55px;\n  height: 55px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #2B59AC;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%,\n  39%,\n  100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%,\n  39%,\n  100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n.inCenter {\n  text-align: center;\n  margin-top: 50%;\n  position: relative;\n  /*\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    */ }\n\n.absolute {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0; }\n\n#logo img {\n  z-index: 10;\n  margin-top: 58px;\n  margin-right: 10px; }\n\n.container {\n  height: 500px;\n  width: 700px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n\n.container > #backimg {\n  background-image: url(http://placekitten.com/700/500);\n  background-position: center center;\n  background-size: cover;\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n  width: 100%;\n  height: 100%; }\n\n.container > img {\n  width: 50%; }\n\n.container > #backimg,\n.container > img {\n  position: absolute; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkL0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2FkXFxsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvYWQvbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNLEVBQUE7O0FBR1Y7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0VBQW9FO0VBQ3BFLDREQUE0RCxFQUFBOztBQUdoRTtFQUNJLGdDQUFnQztFQUVoQyx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxnQ0FBZ0M7RUFFaEMsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksZ0NBQWdDO0VBRWhDLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxpQ0FBaUM7RUFFakMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxpQ0FBaUM7RUFFakMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxpQ0FBaUM7RUFFakMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDRCQUE0QjtFQUM1QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSTs7O0lBR0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTs7O0lBR0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQjs7Ozs7S0M1QkMsRURpQ0M7O0FBR047RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBT2I7RUFFUSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQU0xQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscURBQXFEO0VBQ3JELGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDs7RUFFSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZC9sb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZjFmZjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgY29sb3I6ICMyQjU5QUM7XHJcbiAgICBmb250LXNpemU6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSB7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCNTlBQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlRmFkZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2stY2lyY2xlRmFkZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU0IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU3IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTgge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTU6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTg6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMTpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxufVxyXG5cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlRmFkZURlbGF5IHtcclxuICAgIDAlLFxyXG4gICAgMzklLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaXJjbGVGYWRlRGVsYXkge1xyXG4gICAgMCUsXHJcbiAgICAzOSUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5DZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLypcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAqL1xyXG59XHJcblxyXG4uYWJzb2x1dGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi8vICNidXMge1xyXG4vLyAgICAgei1pbmRleDogMTA7XHJcbi8vICAgICBvcGFjaXR5OiAwLjY7XHJcbi8vIH1cclxuI2xvZ28ge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC8vIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDoxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyPiNiYWNraW1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vcGxhY2VraXR0ZW4uY29tLzcwMC81MDApO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyPmltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyPiNiYWNraW1nLFxyXG4uY29udGFpbmVyPmltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iLCIubG9hZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZWVmMWZmO1xuICB6LWluZGV4OiA5OTk5OTk7IH1cblxuLnRleHQge1xuICBjb2xvcjogIzJCNTlBQztcbiAgZm9udC1zaXplOiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwcHg7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCNTlBQztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNpcmNsZUZhZGVEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stY2lyY2xlRmFkZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU3IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTExIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xczsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTU6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43czsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTg6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40czsgfVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7IH1cblxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xczsgfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlRmFkZURlbGF5IHtcbiAgMCUsXG4gIDM5JSxcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNrLWNpcmNsZUZhZGVEZWxheSB7XG4gIDAlLFxuICAzOSUsXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLmluQ2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLypcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAqLyB9XG5cbi5hYnNvbHV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwOyB9XG5cbiNsb2dvIGltZyB7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tdG9wOiA1OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA3MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uY29udGFpbmVyID4gI2JhY2tpbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL3BsYWNla2l0dGVuLmNvbS83MDAvNTAwKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDNweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiA1MCU7IH1cblxuLmNvbnRhaW5lciA+ICNiYWNraW1nLFxuLmNvbnRhaW5lciA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuIl19 */"

        /***/
    }),

    /***/ "./src/app/components/load/load.component.ts":
    /*!***************************************************!*\
  !*** ./src/app/components/load/load.component.ts ***!
  \***************************************************/
    /*! exports provided: LoadComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoadComponent", function () {
            return LoadComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/date-helper */ "./src/app/helpers/date-helper.ts");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");


        var LoadComponent = /** @class */ (function () {
            function LoadComponent(accompSvc) {
                this.accompSvc = accompSvc;
            }

            LoadComponent.prototype.ngOnInit = function () {
                this.dateNow = src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].getTodayDateShort();
            };
            LoadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-load',
                    template: __webpack_require__(/*! ./load.component.html */ "./src/app/components/load/load.component.html"),
                    styles: [__webpack_require__(/*! ./load.component.scss */ "./src/app/components/load/load.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__["AccompanieService"]])
            ], LoadComponent);
            return LoadComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/location/location.component.html":
    /*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<p>\r\n  location works!\r\n</p>\r\n"

        /***/
    }),

    /***/ "./src/app/components/location/location.component.scss":
    /*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.scss ***!
  \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

        /***/
    }),

    /***/ "./src/app/components/location/location.component.ts":
    /*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
    /*! exports provided: LocationComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LocationComponent", function () {
            return LocationComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var LocationComponent = /** @class */ (function () {
            function LocationComponent() {
                this.location = [];
            }

            LocationComponent.prototype.ngOnInit = function () {
            };
            LocationComponent.prototype.getLocation = function () {
                return new Promise(function (resolve, reject) {
                    if (navigator.geolocation)
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                });
            };
            LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-location',
                    template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
                    styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/components/location/location.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], LocationComponent);
            return LocationComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/no-internet/no-internet.component.html":
    /*!*******************************************************************!*\
  !*** ./src/app/components/no-internet/no-internet.component.html ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<span>\n    אין חיבור רשת\n</span>"

        /***/
    }),

    /***/ "./src/app/components/no-internet/no-internet.component.scss":
    /*!*******************************************************************!*\
  !*** ./src/app/components/no-internet/no-internet.component.scss ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm8taW50ZXJuZXQvbm8taW50ZXJuZXQuY29tcG9uZW50LnNjc3MifQ== */"

        /***/
    }),

    /***/ "./src/app/components/no-internet/no-internet.component.ts":
    /*!*****************************************************************!*\
  !*** ./src/app/components/no-internet/no-internet.component.ts ***!
  \*****************************************************************/
    /*! exports provided: NoInternetComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NoInternetComponent", function () {
            return NoInternetComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var NoInternetComponent = /** @class */ (function () {
            function NoInternetComponent() {
            }

            NoInternetComponent.prototype.ngOnInit = function () {
            };
            NoInternetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-no-internet',
                    template: __webpack_require__(/*! ./no-internet.component.html */ "./src/app/components/no-internet/no-internet.component.html"),
                    styles: [__webpack_require__(/*! ./no-internet.component.scss */ "./src/app/components/no-internet/no-internet.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], NoInternetComponent);
            return NoInternetComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/search-student-autocomplete/search-student-autocomplete.component.html":
    /*!***************************************************************************************************!*\
  !*** ./src/app/components/search-student-autocomplete/search-student-autocomplete.component.html ***!
  \***************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<!--פופאפ בחירת תלמיד מרשימה-->\r\n<div class=\"popup-overlay\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n            <div *ngIf=\"!showApprovedStudent\">\r\n                <div class=\"black-title\">إختر الطالب</div>\r\n                <br>\r\n                <br>\r\n                <div>\r\n                    <mat-form-field class=\"example-full-width\" dir=\"rtl\">\r\n                        <input #studentNameField matInput placeholder=\"ادخل اسم الطالب\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"autocompleteCtrl\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"getOptionText\">\r\n                            <ng-container>\r\n                                <mat-option *ngFor=\"let student of studentList\" [value]=\"student\">\r\n                                    <small>{{student.fullName}}</small> |\r\n                                    <small>{{student.address}}</small>\r\n                                </mat-option>\r\n                            </ng-container>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n\r\n                    <div *ngIf=\"loading\">\r\n                        <br>\r\n                        <div class=\"lds-spinner\">\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"flexbetween\">\r\n                    <input [attr.disabled]=\"autocompleteCtrl.value ? null :'' \" (click)=\"chooseStudent(autocompleteCtrl.value)\" class=\"blue-btn\" type=\"button\" value=\"موافق\">\r\n                    <input (click)=\"closePopup()\" type=\"button\" class=\" cancel-btn\" value=\"اغلاق\">\r\n                </div>\r\n            </div>\r\n\r\n            <!-- موافق בחירת תלמיד -->\r\n            <div *ngIf=\"showApprovedStudent\">\r\n                <div>\r\n                    <div class=\"black-title\">هل انت متأكد من اختيار الطالب؟</div>\r\n                    <br>\r\n                    <span>{{selectedStudentValue.fullName}}</span>\r\n                    <br>\r\n                    <small>{{selectedStudentValue.address}}</small>\r\n                </div>\r\n                <br><br>\r\n                <div class=\"flexbetween\">\r\n                    <input (click)=\"approvedStudent()\" class=\"blue-btn\" type=\"button\" value=\"موافق\">\r\n                    <input (click)=\"DeselectStudent()\" type=\"button\" class=\" cancel-btn\" value=\"اغلاق\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

        /***/
    }),

    /***/ "./src/app/components/search-student-autocomplete/search-student-autocomplete.component.scss":
    /*!***************************************************************************************************!*\
  !*** ./src/app/components/search-student-autocomplete/search-student-autocomplete.component.scss ***!
  \***************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".popup-overlay {\n  z-index: 60; }\n\n.popup-box {\n  width: 90%; }\n\n.popup-box .content {\n  text-align: center; }\n\n.mat-form-field::ng-deep {\n  text-align: right; }\n\n.cancel-btn {\n  color: #2B59AC;\n  background-color: white;\n  margin: 10px 0px 5px 0px;\n  padding: 0px 15px;\n  border: 2px solid #2B59AC; }\n\n.mat-form-field {\n  display: block; }\n\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px; }\n\n.lds-spinner div {\n  -webkit-transform-origin: 40px 40px;\n          transform-origin: 40px 40px;\n  -webkit-animation: lds-spinner 1.2s linear infinite;\n          animation: lds-spinner 1.2s linear infinite; }\n\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #2B59AC; }\n\n.lds-spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n\n.lds-spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n.lds-spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n\n.lds-spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n\n.lds-spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg);\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n\n.lds-spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg);\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n\n.lds-spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n.lds-spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg);\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n\n.lds-spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg);\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n\n.lds-spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n\n.lds-spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg);\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n.lds-spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n\n@-webkit-keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtc3R1ZGVudC1hdXRvY29tcGxldGUvQzpcXEJpdGJvY2tldFByb2plY3RzXFxtZ2FyLWFjY29tcGFuaWVzLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaC1zdHVkZW50LWF1dG9jb21wbGV0ZVxcc2VhcmNoLXN0dWRlbnQtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGNBQWMsRUFBQTs7QUFNbEI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsbURBQTJDO1VBQTNDLDJDQUEyQyxFQUFBOztBQUcvQztFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QiwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQUxsQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXN0dWRlbnQtYXV0b2NvbXBsZXRlL3NlYXJjaC1zdHVkZW50LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1vdmVybGF5IHtcclxuICAgIHotaW5kZXg6IDYwO1xyXG59XHJcblxyXG4ucG9wdXAtYm94IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5wb3B1cC1ib3ggLmNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQ6Om5nLWRlZXAge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnRuIHtcclxuICAgIGNvbG9yOiAjMkI1OUFDO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDVweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyQjU5QUM7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLy8gcHJvZ3Jlc3Mge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLmxkcy1zcGlubmVyIHtcclxuICAgIGNvbG9yOiBvZmZpY2lhbDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2IHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLXNwaW5uZXIgMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogMzdweDtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkI1OUFDO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoOSkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuXHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEwKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxufVxyXG5cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTEpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG59XHJcblxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMikge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGRzLXNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59Il19 */"

        /***/
    }),

    /***/ "./src/app/components/search-student-autocomplete/search-student-autocomplete.component.ts":
    /*!*************************************************************************************************!*\
  !*** ./src/app/components/search-student-autocomplete/search-student-autocomplete.component.ts ***!
  \*************************************************************************************************/
    /*! exports provided: SearchStudentAutocompleteComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SearchStudentAutocompleteComponent", function () {
            return SearchStudentAutocompleteComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");


        var SearchStudentAutocompleteComponent = /** @class */ (function () {
            function SearchStudentAutocompleteComponent(accompSvc) {
                this.accompSvc = accompSvc;
                this.autocompleteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                this.selectedStudent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.studentList = [];
                this.studentListTemp = [];
                this.firstNameStart = [];
                this.lastNameStart = [];
                this.firstNameInclude = [];
                this.lastNameInclude = [];
                this.fullNameEqual = [];
                this.fullNameInclude = [];
                this.showApprovedStudent = false;
                this.loading = false;
            }

            SearchStudentAutocompleteComponent.prototype.ngAfterViewInit = function () {
                // this.studentNameField.nativeElement.focus();
            };
            SearchStudentAutocompleteComponent.prototype.setFilteredStudentsList = function () {
            };
            SearchStudentAutocompleteComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.autocompleteCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (value) {
                    if (navigator.onLine) {
                        if (typeof value === 'string') {
                            _this.searchStudentField = value;
                            _this.studentList = [];
                            if (value.length < 2) {
                                _this.loading = false;
                            } else {
                                _this.loading = true;
                                return _this.accompSvc.getStudentsForSearch(value);
                            }
                        }
                    }
                }))
                    .subscribe(function (res) {
                        // console.log(res);
                        // this.accompSvc.closeNoInternetAlert();
                        _this.studentList = [];
                        _this.fullNameEqual = [];
                        _this.fullNameInclude = [];
                        _this.firstNameStart = [];
                        _this.lastNameStart = [];
                        _this.firstNameInclude = [];
                        _this.lastNameInclude = [];
                        if (res != null) {
                            _this.studentListTemp = res;
                            _this.studentListTemp.forEach(function (item, index) {
                                if (item.fullName == _this.searchStudentField) {
                                    _this.fullNameEqual.push(item);
                                } else if (item.firstName.startsWith(_this.searchStudentField)) {
                                    _this.firstNameStart.push(item);
                                } else if (item.lastName.startsWith(_this.searchStudentField)) {
                                    _this.lastNameStart.push(item);
                                } else if (item.firstName.includes(_this.searchStudentField)) {
                                    _this.firstNameInclude.push(item);
                                } else if (item.lastName.includes(_this.searchStudentField)) {
                                    _this.lastNameInclude.push(item);
                                } else {
                                    _this.fullNameInclude.push(item);
                                }
                            });
                            _this.studentList = _this.fullNameEqual.concat(_this.firstNameStart).concat(_this.lastNameStart).concat(_this.firstNameInclude).concat(_this.lastNameInclude).concat(_this.fullNameInclude);
                        }
                        _this.loading = false;
                    }, function (err) {
                        _this.loading = false;
                        // this.accompSvc.openNoInternetAlert();
                    });
            };
            SearchStudentAutocompleteComponent.prototype.getOptionText = function (option) {
                if (option) {
                    return option.fullName;
                }
            };
            SearchStudentAutocompleteComponent.prototype.chooseStudent = function (student) {
                if (typeof student === 'string') {
                    return;
                }
                this.selectedStudentValue = student;
                this.showApprovedStudent = true;
            };
            SearchStudentAutocompleteComponent.prototype.approvedStudent = function () {
                this.selectedStudent.emit(this.selectedStudentValue);
            };
            SearchStudentAutocompleteComponent.prototype.DeselectStudent = function () {
                this.showApprovedStudent = false;
            };
            SearchStudentAutocompleteComponent.prototype.closePopup = function (student) {
                this.selectedStudent.emit();
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("studentNameField"),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], SearchStudentAutocompleteComponent.prototype, "studentNameField", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], SearchStudentAutocompleteComponent.prototype, "selectedStudent", void 0);
            SearchStudentAutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-student-autocomplete',
                    template: __webpack_require__(/*! ./search-student-autocomplete.component.html */ "./src/app/components/search-student-autocomplete/search-student-autocomplete.component.html"),
                    styles: [__webpack_require__(/*! ./search-student-autocomplete.component.scss */ "./src/app/components/search-student-autocomplete/search-student-autocomplete.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_4__["AccompanieService"]])
            ], SearchStudentAutocompleteComponent);
            return SearchStudentAutocompleteComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/search-student-buttons/search-student-buttons.component.html":
    /*!*****************************************************************************************!*\
  !*** ./src/app/components/search-student-buttons/search-student-buttons.component.html ***!
  \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<div>\r\n    <!-- <div class=\"{{accompSvc.accompenie.businessUnit.scanQrCodePermission ? 'flexbetween' : 'flexCenter'}}\"> -->\r\n    <div class=\"flexCenter margin-bottom-fifteent\">\r\n        <!-- <input type=\"button\" *ngIf=\"accompSvc.accompenie.businessUnit.scanQrCodePermission\" (click)=\"openScanQR()\" class=\"searchStudentBtn\" value=\"דיווח באמצעות ברקוד\"> -->\r\n        <!-- <app-search-student-scan-qrcode *ngIf=\"popupScanQrCode\" (selectedStudent)=\"closedPopup($event)\">\r\n        </app-search-student-scan-qrcode> -->\r\n        <input [ngClass]=\"{schoolbusCss: accompSvc.isSchoolbusTrip==true}\" type=\"button\" (click)=\"openSearchStudentAutocomplete()\" class=\"searchStudentBtn\" value=\"إضافة طالب\">\r\n        <app-search-student-autocomplete *ngIf=\"popupSearchStudent \" (selectedStudent)=\"closedPopup($event) \">\r\n        </app-search-student-autocomplete>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- פופאפ שגיאה -->\r\n<div *ngIf=\"errorAction \">\r\n    <div class=\"popup-overlay \">\r\n        <div class=\"popup-box \">\r\n            <div class=\"content \">\r\n                <div>\r\n                    <div class=\"black-title \">خطأ!</div>\r\n                    <br>\r\n                    <span>{{errorMessage}}</span>\r\n                </div>\r\n                <br><br>\r\n                <div>\r\n                    <input (click)=\"closeErrorPopup() \" class=\"blue-btn \" type=\"button \" style=\" text-align: center; color: white; \" value=\"اغلاق \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <div *ngIf=\"errorAction && errorMessage=='timeRideError' \">\r\n    <div class=\"popup-overlay \">\r\n        <div class=\"popup-box \">\r\n            <div class=\"content \">\r\n                <div>\r\n                    <div class=\"black-title \">خطأ!</div>\r\n                    <br>\r\n                    <span>لا يمكن عمل مسار خارج ساعات العمل</span>\r\n                </div>\r\n                <br><br>\r\n                <div>\r\n                    <input (click)=\"closeErrorPopup() \" class=\"blue-btn \" type=\"button \" value=\"اغلاق \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"errorAction && errorMessage=='createRideError' \">\r\n    <div class=\"popup-overlay \">\r\n        <div class=\"popup-box \">\r\n            <div class=\"content \">\r\n                <div>\r\n                    <div class=\"black-title \">خطأ!</div>\r\n                    <br>\r\n                    <span>אירעה שגיאה ביצירת נסיעה</span>\r\n                </div>\r\n                <br><br>\r\n                <div>\r\n                    <input (click)=\"closeErrorPopup() \" class=\"blue-btn \" type=\"button \" value=\"اغلاق \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

        /***/
    }),

    /***/ "./src/app/components/search-student-buttons/search-student-buttons.component.scss":
    /*!*****************************************************************************************!*\
  !*** ./src/app/components/search-student-buttons/search-student-buttons.component.scss ***!
  \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "input[type=button] {\n  background-color: #1cb845;\n  width: 40%;\n  margin: 1%; }\n\n.popup-box .content {\n  text-align: center; }\n\n.schoolbusCss {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtc3R1ZGVudC1idXR0b25zL0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2gtc3R1ZGVudC1idXR0b25zXFxzZWFyY2gtc3R1ZGVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXN0dWRlbnQtYnV0dG9ucy9zZWFyY2gtc3R1ZGVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1idXR0b25dIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2I4NDU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLnBvcHVwLWJveCAuY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY2hvb2xidXNDc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

        /***/
    }),

    /***/ "./src/app/components/search-student-buttons/search-student-buttons.component.ts":
    /*!***************************************************************************************!*\
  !*** ./src/app/components/search-student-buttons/search-student-buttons.component.ts ***!
  \***************************************************************************************/
    /*! exports provided: SearchStudentButtonsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SearchStudentButtonsComponent", function () {
            return SearchStudentButtonsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/date-helper */ "./src/app/helpers/date-helper.ts");
        /* harmony import */
        var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var src_app_services_loaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loaction.service */ "./src/app/services/loaction.service.ts");


        var SearchStudentButtonsComponent = /** @class */ (function () {
            function SearchStudentButtonsComponent(dialog, filterPipe, accompSvc, locationSvc, activityRoute, router) {
                this.dialog = dialog;
                this.filterPipe = filterPipe;
                this.accompSvc = accompSvc;
                this.locationSvc = locationSvc;
                this.activityRoute = activityRoute;
                this.router = router;
                this.result = "empty";
                this.autocompleteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                this.studentsList = [];
                this.refreshParentData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.updateStudentListInTrip = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.openRideToDriving = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.stopRefreshing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            SearchStudentButtonsComponent.prototype.ngOnInit = function () {
                this.inTrip = this.activityRoute.snapshot.routeConfig.path == "my-trips" ? false : true;
                this.popupSearchStudent = false;
                this.popupScanQrCode = false;
            };
            SearchStudentButtonsComponent.prototype.openScanQR = function () {
                this.popupScanQrCode = true;
                if (!this.inTrip) {
                    this.stopRefreshing.emit(true);
                }
            };
            SearchStudentButtonsComponent.prototype.openSearchStudentAutocomplete = function () {
                this.popupSearchStudent = true;
                if (!this.inTrip) {
                    this.stopRefreshing.emit(true);
                }
            };
            SearchStudentButtonsComponent.prototype.closedPopup = function (selectedStudent) {
                this.popupSearchStudent = false;
                this.popupScanQrCode = false;
                if (selectedStudent != null) {
                    this.onSelectedStudent(selectedStudent.studentId);
                } else if (!this.inTrip) {
                    this.stopRefreshing.emit(false);
                }
            };
            SearchStudentButtonsComponent.prototype.onSelectedStudent = function (studentId) {
                var _this = this;
                if (navigator.onLine) {
                    this.accompSvc.loadData.emit(true);
                    this.currentTrip = null;
                    //אם נמצא בתוך נסיעה - ישלוף את מזהה הנסיעה
                    if (this.inTrip) {
                        this.currentTrip = this.accompSvc.accompenie.trips.find(function (x) {
                            return x.ID == _this.activityRoute.snapshot.params["id"];
                        });
                    } else {
                        var tripsToday = this.filterPipe.transform(this.accompSvc.accompenie.trips, "date", src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_5__["DateHelper"].getTodayDate()).filter(function (x) {
                            return x.statuscode != 3;
                        });
                        if (tripsToday.length > 0) {
                            var nowTime_1 = new Date();
                            var earlyTime = new Date(nowTime_1.getFullYear(), nowTime_1.getMonth(), nowTime_1.getDate(), nowTime_1.getHours(), nowTime_1.getMinutes() - 30, nowTime_1.getSeconds());
                            var latestTime = new Date(nowTime_1.getFullYear(), nowTime_1.getMonth(), nowTime_1.getDate(), nowTime_1.getHours(), nowTime_1.getMinutes() + 30, nowTime_1.getSeconds());
                            var nowHour = nowTime_1.getHours() * 100 + nowTime_1.getMinutes();
                            ///נסיעות בטווח הקרוב
                            var tripInThisHour = tripsToday.filter(function (trip) {
                                // let tripTime = parseInt(trip.hour.replace(":", ""))
                                // return tripTime >= earlyTime.getHours() * 100 + earlyTime.getMinutes() && tripTime < latestTime.getHours() * 100 + latestTime.getMinutes() /*&& trip.statuscode == 1*/;
                                var startTime = parseInt(trip.hour.replace(":", ""));
                                var endTime = parseInt(trip.endHour.replace(":", ""));
                                var earlyTime = new Date(nowTime_1.getFullYear(), nowTime_1.getMonth(), nowTime_1.getDate(), startTime / 100, startTime % 100 - 30, nowTime_1.getSeconds());
                                var latestTime = new Date(nowTime_1.getFullYear(), nowTime_1.getMonth(), nowTime_1.getDate(), endTime / 100, endTime % 100 + 30, nowTime_1.getSeconds());
                                return nowHour >= earlyTime.getHours() * 100 + earlyTime.getMinutes() && nowHour < latestTime.getHours() * 100 + latestTime.getMinutes() /*&& trip.statuscode == 1*/;
                            });
                            //לחפש תלמיד בשעה הקרובה שהתלמיד נמצא בה
                            //אם לא מוצא נסיעה כזו - יקח את הנסיעה הראשונה המתאימה מבחינת השעות
                            if (tripInThisHour.length > 0) {
                                var tripWithStudent = tripInThisHour.find(function (trip) {
                                    return trip.students.some(function (x) {
                                        return x.contactNeedsId == studentId;
                                    });
                                });
                                this.currentTrip = tripWithStudent ? tripWithStudent : null;
                            }
                        }
                    }
                    //יצירת נסיעה
                    if (this.currentTrip == null) {
                        if (navigator.onLine) {
                            this.accompSvc.createTrip().subscribe(function (res) {
                                if (res['error']) {
                                    _this.accompSvc.loadData.emit(false);
                                    _this.errorAction = true;
                                    _this.errorMessage = res['error'];
                                    return;
                                }
                                _this.accompSvc.accompenie.trips.push(res);
                                _this.currentTrip = res;
                                _this.accompSvc.currentRideID = res.ID;
                                try {
                                    //התחלת דיווח לנסיעה
                                    _this.openRideToDriving.emit();
                                } catch (error) {
                                }
                                _this.continueReoportStudents(res, true, studentId);
                            });
                        }
                    } else {
                        if (!this.inTrip) {
                            //התחלת דיווח לנסיעה
                            this.openRideToDriving.emit();
                        }
                        this.continueReoportStudents(this.currentTrip, false, studentId);
                    }
                } else {
                    this.errorAction = true;
                    this.errorMessage = "لا يمكن إضافة طالب في حالة عدم وجود شبكة";
                }
            };
            SearchStudentButtonsComponent.prototype.continueReoportStudents = function (newTrip, isNewTrip, studentId) {
                var _this = this;
                if (navigator.onLine) {
                    this.currentTrip = newTrip;
                    var isStudentExsist = this.currentTrip.students.find(function (x) {
                        return x.contactNeedsId == studentId;
                    });
                    var location = this.locationSvc.getLocationForReport();
                    if (isStudentExsist) {
                        //report
                        this.createReportForStudent(isStudentExsist, location);
                    } else {
                        if (this.inTrip || isNewTrip) {
                            var studentvar = {
                                contactNeedsID: studentId,
                                latitude: location.lat,
                                longitude: location.lang,
                                rideId: this.currentTrip.ID,
                                status: 1
                            };
                            this.accompSvc.accompenie.studentToAdd = studentvar;
                            if (navigator.onLine) {
                                this.accompSvc.addStudentToTrip().subscribe(function (res) {
                                    _this.accompSvc.accompenie.trips.find(function (x) {
                                        return x.ID == _this.currentTrip.ID;
                                    }).students.push(res);
                                    _this.updateStudentListInTrip.emit(_this.currentTrip.ID);
                                    var student = _this.accompSvc.accompenie.trips.find(function (x) {
                                        return x.ID == _this.currentTrip.ID;
                                    }).students.find(function (x) {
                                        return x.contactNeedsId == studentId;
                                    });
                                    _this.currentTrip = _this.accompSvc.accompenie.trips.find(function (x) {
                                        return x.ID == _this.currentTrip.ID;
                                    });
                                    _this.createReportForStudent(student, location);
                                }, function (err) {
                                    _this.accompSvc.loadData.emit(false);
                                    _this.errorAction = true;
                                    _this.errorMessage = err.error.ExceptionMessage;
                                });
                            }
                        }
                    }
                }
            };
            SearchStudentButtonsComponent.prototype.createReportForStudent = function (student, location) {
                for (var _i = 0, _a = this.accompSvc.accompenie.trips; _i < _a.length; _i++) {
                    var x = _a[_i];
                    if (x.ID == this.currentTrip.ID && x.statuscode != 2) {
                        this.accompSvc.startTrackingTrip(this.currentTrip.ID);
                        x.startRide = src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_5__["DateHelper"].getTodayFullDate();
                        var tmpLoc = this.locationSvc.getLocationForReport();
                        x.latitudeStarting = tmpLoc.lat;
                        x.longitudeStarting = tmpLoc.lang;
                        x.statuscode = 2;
                    }
                }
                var index = this.currentTrip.students.indexOf(student);
                this.accompSvc.changeStudentStatus(index, this.currentTrip);
                if (this.inTrip) {
                    this.refreshParentData.emit(this.currentTrip.ID);
                }
                //task 5844 - hide car type page
                // if (!this.currentTrip.carType) {
                //   this.accompSvc.loadData.emit(false);
                //   this.router.navigate(['/prev-start-trip', this.currentTrip.ID]);
                // }
                // else if (!this.inTrip) {
                //   this.accompSvc.loadData.emit(false);
                //   this.router.navigate(['/my-trip', this.currentTrip.ID]);
                // }
                this.accompSvc.loadData.emit(false);
                this.router.navigate(['/my-trip', this.currentTrip.ID]);
                return;
            };
            SearchStudentButtonsComponent.prototype.closeErrorPopup = function () {
                this.errorMessage = "";
                this.errorAction = false;
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], SearchStudentButtonsComponent.prototype, "refreshParentData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], SearchStudentButtonsComponent.prototype, "updateStudentListInTrip", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], SearchStudentButtonsComponent.prototype, "openRideToDriving", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], SearchStudentButtonsComponent.prototype, "stopRefreshing", void 0);
            SearchStudentButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-student-buttons',
                    template: __webpack_require__(/*! ./search-student-buttons.component.html */ "./src/app/components/search-student-buttons/search-student-buttons.component.html"),
                    styles: [__webpack_require__(/*! ./search-student-buttons.component.scss */ "./src/app/components/search-student-buttons/search-student-buttons.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"], src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_7__["AccompanieService"], src_app_services_loaction_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
            ], SearchStudentButtonsComponent);
            return SearchStudentButtonsComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.html":
    /*!*************************************************************************************************!*\
  !*** ./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.html ***!
  \*************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<!--פופאפ בחירת תלמיד מרשימה-->\n<div class=\"popup-overlay\" *ngIf=\"!errorAction\">\n    <div class=\"popup-box\">\n        <div class=\"content\">\n            <div *ngIf=\"showScanQrcode\">\n                <zxing-scanner [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\" (scanError)=\"onscanError($event)\" (permissionResponse)=\"onHasPermission($event)\" (camerasFound)=\"onCamerasFound($event)\" (camerasNotFound)=\"onCamerasNotFound($event)\">\n                </zxing-scanner>\n                <br><br>\n                <div class=\"flexCenter\">\n                    <input (click)=\"closePopup()\" type=\"button\" class=\"cancel-btn\" value=\"اغلاق\">\n                </div>\n            </div>\n\n            <!-- موافق בחירת תלמיד -->\n            <div *ngIf=\"showApprovedStudent\">\n                <div>\n                    <div class=\"black-title\">هل انت متأكد من اختيار الطالب؟</div>\n                    <br>\n                    <span>{{selectedStudentvalue.fullName}}</span>\n                    <br>\n                    <small>{{selectedStudentvalue.address}}</small>\n                </div>\n                <br><br>\n                <div class=\"flexbetween\">\n                    <input (click)=\"approvedStudent()\" class=\"blue-btn\" type=\"button\" value=\"موافق\">\n                    <input (click)=\"DeselectStudent()\" type=\"button\" class=\" cancel-btn\" value=\"اغلاق\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- פופאפ שגיאה -->\n<div *ngIf=\"errorAction\">\n    <div class=\"popup-overlay\">\n        <div class=\"popup-box\">\n            <div class=\"content\">\n                <div>\n                    <div class=\"black-title\">خطأ!</div>\n                    <br>\n                    <span>{{errorMessage}}</span>\n                </div>\n                <br><br>\n                <div>\n                    <input (click)=\"closePopup()\" class=\"blue-btn\" type=\"button\" value=\"اغلاق\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

        /***/
    }),

    /***/ "./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.scss":
    /*!*************************************************************************************************!*\
  !*** ./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.scss ***!
  \*************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "zxing-scanner {\n  max-width: 100%; }\n\nh2 {\n  padding: 0 16px; }\n\n.small-video {\n  max-height: 70vh;\n  width: 100vw;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.popup-box .content {\n  text-align: center; }\n\n.cancel-btn {\n  color: #2B59AC;\n  background-color: white;\n  margin: 10px 0px 5px 0px;\n  padding: 0px 15px;\n  border: 2px solid #2B59AC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtc3R1ZGVudC1zY2FuLXFyY29kZS9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoLXN0dWRlbnQtc2Nhbi1xcmNvZGVcXHNlYXJjaC1zdHVkZW50LXNjYW4tcXJjb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1zdHVkZW50LXNjYW4tcXJjb2RlL3NlYXJjaC1zdHVkZW50LXNjYW4tcXJjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsienhpbmctc2Nhbm5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLnNtYWxsLXZpZGVvIHtcclxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ucG9wdXAtYm94IC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgY29sb3I6ICMyQjU5QUM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJCNTlBQztcclxufSJdfQ== */"

        /***/
    }),

    /***/ "./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.ts":
    /*!***********************************************************************************************!*\
  !*** ./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.ts ***!
  \***********************************************************************************************/
    /*! exports provided: SearchStudentScanQrcodeComponent, ZXingScannerComponent, ZXingScannerModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SearchStudentScanQrcodeComponent", function () {
            return SearchStudentScanQrcodeComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm5/zxing-ngx-scanner.js");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ZXingScannerComponent", function () {
            return _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ZXingScannerModule", function () {
            return _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerModule"];
        });


// import { BarcodeFormat } from '@zxing/library';


        var SearchStudentScanQrcodeComponent = /** @class */ (function () {
            function SearchStudentScanQrcodeComponent(accompSVC) {
                this.accompSVC = accompSVC;
                this.qrResultString = "empty";
                this.currentDevice = null;
                this.selectedStudent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                this.showScanQrcode = true;
                this.showApprovedStudent = false;
                this.errorAction = false;
            }

            SearchStudentScanQrcodeComponent.prototype.ngOnInit = function () {
                this.showScanQrcode = true;
                this.showApprovedStudent = false;
                // this.onCodeResult("{9AE499A9-11A6-E911-A829-000D3A3622E}");
            };
            SearchStudentScanQrcodeComponent.prototype.onCodeResult = function (resultString) {
                var _this = this;
                // alert("onCodeResult");
                //alert(resultString);
                this.qrResultString = resultString;
                this.accompSVC.GetStudentBYIdFromQrCode(this.qrResultString).subscribe(function (res) {
                    _this.selectedStudentvalue = {
                        studentId: res.studentId,
                        address: res.address,
                        fullName: res.fullName,
                        firstName: res.firstName,
                        lastName: res.lastName
                    };
                    _this.showScanQrcode = false;
                    _this.showApprovedStudent = true;
                }, function (err) {
                    //alert(err.error.ExceptionMessage);
                    _this.errorAction = true;
                    _this.errorMessage = "לא נמצא תלמיד";
                });
            };
            SearchStudentScanQrcodeComponent.prototype.clearResult = function () {
                this.qrResultString = null;
            };
            SearchStudentScanQrcodeComponent.prototype.displayCameras = function (res) {
                // alert("displayCameras: " + res);
            };
            SearchStudentScanQrcodeComponent.prototype.onHasPermission = function (param) {
                // alert("onHasPermission: " + param);
            };
            SearchStudentScanQrcodeComponent.prototype.onCamerasFound = function (param) {
                // alert("onCamerasFound");
                // alert(param[0].deviceId);
                // alert(param[1].deviceId);
                this.currentDevice = param[0];
            };
            SearchStudentScanQrcodeComponent.prototype.onCamerasNotFound = function (param) {
                // alert("onCamerasNotFound " + param);
            };
            SearchStudentScanQrcodeComponent.prototype.onscanError = function (error) {
                // alert("onscanError: " + error);
                console.log(error);
            };
            SearchStudentScanQrcodeComponent.prototype.approvedStudent = function () {
                this.showApprovedStudent = false;
                this.selectedStudent.emit(this.selectedStudentvalue);
            };
            SearchStudentScanQrcodeComponent.prototype.DeselectStudent = function () {
                this.showApprovedStudent = false;
                this.showScanQrcode = true;
            };
            SearchStudentScanQrcodeComponent.prototype.closePopup = function (student) {
                this.showApprovedStudent = false;
                this.showScanQrcode = false;
                this.errorAction = false;
                this.selectedStudent.emit();
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], SearchStudentScanQrcodeComponent.prototype, "selectedStudent", void 0);
            SearchStudentScanQrcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-student-scan-qrcode',
                    template: __webpack_require__(/*! ./search-student-scan-qrcode.component.html */ "./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.html"),
                    styles: [__webpack_require__(/*! ./search-student-scan-qrcode.component.scss */ "./src/app/components/search-student-scan-qrcode/search-student-scan-qrcode.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"]])
            ], SearchStudentScanQrcodeComponent);
            return SearchStudentScanQrcodeComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/split-input/split-input.component.html":
    /*!*******************************************************************!*\
  !*** ./src/app/components/split-input/split-input.component.html ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<div>\r\n  <input type=\"text\" #hiddenInput hidden>\r\n  <div class=\"wraper-inputs\" >\r\n   <input *ngFor=\"let i of numberArray\" #inputs (keyup)=\"onChangeInput(i, $event)\" class=\"char-input\" type=\"tel\" maxlength=\"1\">\r\n  </div>\r\n</div>"

        /***/
    }),

    /***/ "./src/app/components/split-input/split-input.component.scss":
    /*!*******************************************************************!*\
  !*** ./src/app/components/split-input/split-input.component.scss ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".wraper-inputs {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  display: -webkit-flex;\n  /* Safari */\n  /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row-reverse; }\n\n.char-input {\n  width: 11%;\n  height: 35px;\n  margin: 20px 3px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxpdC1pbnB1dC9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc3BsaXQtaW5wdXRcXHNwbGl0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0VBQUUsV0FBQTtFQUNjLGdCQUFBO0VBQ3JDLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BsaXQtaW5wdXQvc3BsaXQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcGVyLWlucHV0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAvKiBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyAvKiBTYWZhcmkgNi4xKyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsgIFxyXG59XHJcbi5jaGFyLWlucHV0e1xyXG4gICAgd2lkdGg6IDExJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjogMjBweCAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

        /***/
    }),

    /***/ "./src/app/components/split-input/split-input.component.ts":
    /*!*****************************************************************!*\
  !*** ./src/app/components/split-input/split-input.component.ts ***!
  \*****************************************************************/
    /*! exports provided: SplitInputComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SplitInputComponent", function () {
            return SplitInputComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


        var SplitInputComponent = /** @class */ (function () {
            //smsSubject: Subject<string> = new Subject();
            function SplitInputComponent() {
                this.smsSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
                this.smsInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
            }

            SplitInputComponent.prototype.ngAfterViewInit = function () {
                // if (this.automaticCode) {
                //   this.setSMSCodeInInputs(this.automaticCode);
                // }
                var _this = this;
                this.smsSubscription = this.smsInterval.subscribe(function () {
                    var sms = document.getElementById('smsFromApk');
                    if (sms.value) {
                        // alert(sms.value);
                        _this.setSMSCodeInInputs(sms.value);
                        _this.smsSubscription.unsubscribe();
                    }
                });
            };
            SplitInputComponent.prototype.ngOnInit = function () {
                this.numberArray = Array(this.count).fill(0).map(function (x, i) {
                    return i;
                });
            };
            SplitInputComponent.prototype.setSMSCodeInInputs = function (code) {
                // alert("setSMSCodeInInputs");
                var codesplit = code.match(/.{1,1}/g);
                this.inputs.forEach(function (item, index) {
                    item.nativeElement.value = codesplit[index];
                });
            };
            SplitInputComponent.prototype.onChangeInput = function (index, event) {
                // console.log(index);
                if (index < this.count - 1 && event.keyCode != 8)
                    this.inputs.toArray()[index + 1].nativeElement.focus();
                else if (event.keyCode == 8) {
                }
            };
            SplitInputComponent.prototype.getValue = function () {
                var result = "";
                this.inputs.toArray().forEach(function (e) {
                    result += e.nativeElement.value;
                });
                return result;
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
            ], SplitInputComponent.prototype, "count", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hiddenInput'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], SplitInputComponent.prototype, "hiddenInput", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('inputs'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
            ], SplitInputComponent.prototype, "inputs", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], SplitInputComponent.prototype, "automaticCode", void 0);
            SplitInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-split-input',
                    template: __webpack_require__(/*! ./split-input.component.html */ "./src/app/components/split-input/split-input.component.html"),
                    styles: [__webpack_require__(/*! ./split-input.component.scss */ "./src/app/components/split-input/split-input.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SplitInputComponent);
            return SplitInputComponent;
        }());


        /***/
    }),

    /***/ "./src/app/components/trip-footer/trip-footer.component.html":
    /*!*******************************************************************!*\
  !*** ./src/app/components/trip-footer/trip-footer.component.html ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<footer>\r\n  <div class=\"flex\">\r\n    <div class=\"footer-item\" routerLink=\"/settings\">\r\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M17.6502 10.975C17.6888 10.6625 17.7145 10.3375 17.7145 10C17.7145 9.6625 17.6888 9.3375 17.6373 9.025L19.8102 7.375C20.0031 7.225 20.0545 6.95 19.9388 6.7375L17.8816 3.275C17.753 3.05 17.483 2.975 17.2516 3.05L14.693 4.05C14.153 3.65 13.5872 3.325 12.9572 3.075L12.5715 0.425C12.5329 0.175 12.3143 0 12.0572 0H7.94281C7.68566 0 7.47994 0.175 7.44137 0.425L7.05565 3.075C6.42563 3.325 5.84705 3.6625 5.31989 4.05L2.76126 3.05C2.52982 2.9625 2.25982 3.05 2.13124 3.275L0.0740529 6.7375C-0.0545216 6.9625 -0.00309159 7.225 0.202628 7.375L2.37554 9.025C2.32411 9.3375 2.28553 9.675 2.28553 10C2.28553 10.325 2.31125 10.6625 2.36268 10.975L0.18977 12.625C-0.00309189 12.775 -0.0545215 13.05 0.0611955 13.2625L2.11839 16.725C2.24696 16.95 2.51697 17.025 2.7484 16.95L5.30703 15.95C5.84705 16.35 6.41277 16.675 7.04279 16.925L7.42851 19.575C7.47994 19.825 7.68566 20 7.94281 20H12.0572C12.3143 20 12.5329 19.825 12.5586 19.575L12.9444 16.925C13.5744 16.675 14.153 16.3375 14.6801 15.95L17.2387 16.95C17.4702 17.0375 17.7402 16.95 17.8688 16.725L19.9259 13.2625C20.0545 13.0375 20.0031 12.775 19.7974 12.625L17.6502 10.975ZM10 13.75C7.87852 13.75 6.14277 12.0625 6.14277 10C6.14277 7.9375 7.87852 6.25 10 6.25C12.1215 6.25 13.8572 7.9375 13.8572 10C13.8572 12.0625 12.1215 13.75 10 13.75Z\"\r\n          [attr.fill]=\"active == 'settings'? '#2B59AC' : '#757575'\" />\r\n      </svg>\r\n      <div *ngIf=\"active == 'settings'\" class=\"footer-text\">\r\n       الاعدادات\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-item\">\r\n      <svg width=\"16\" height=\"19\" viewBox=\"0 0 16 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M0 14C0 14.88 0.39 15.67 1 16.22V18C1 18.55 1.45 19 2 19H3C3.55 19 4 18.55 4 18V17H12V18C12 18.55 12.45 19 13 19H14C14.55 19 15 18.55 15 18V16.22C15.61 15.67 16 14.88 16 14V4C16 0.5 12.42 0 8 0C3.58 0 0 0.5 0 4V14ZM3.5 15C2.67 15 2 14.33 2 13.5C2 12.67 2.67 12 3.5 12C4.33 12 5 12.67 5 13.5C5 14.33 4.33 15 3.5 15ZM12.5 15C11.67 15 11 14.33 11 13.5C11 12.67 11.67 12 12.5 12C13.33 12 14 12.67 14 13.5C14 14.33 13.33 15 12.5 15ZM14 9H2V4H14V9Z\"\r\n          [attr.fill]=\"active == 'my-trip'? '#2B59AC' : '#757575'\" />\r\n      </svg>\r\n      <div *ngIf=\"active == 'my-trip'\" class=\"footer-text\">\r\n       سفرياتي\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"footer-item\" style=\"margin-bottom: 37px;\" routerLink=\"/my-trips\">\r\n      <svg width=\"120\" height=\"56\" viewBox=\"0 0 120 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n          d=\"M52 23V21H68V23H52ZM52 27H68V25H52V27ZM68 31H52V29H68V31ZM68 35H52V33H68V35Z\"\r\n          [attr.fill]=\"active == 'my-trips'? '#2B59AC' : '#757575'\" />\r\n      </svg>\r\n\r\n      <div *ngIf=\"active == 'my-trips'\" class=\"footer-text\">\r\n       السفريات\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

        /***/
    }),

    /***/ "./src/app/components/trip-footer/trip-footer.component.scss":
    /*!*******************************************************************!*\
  !*** ./src/app/components/trip-footer/trip-footer.component.scss ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "footer {\n  height: 50px;\n  background: #FFFFFF;\n  box-shadow: 0px 1px 21px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.14);\n  text-align: center; }\n\n.footer-item {\n  width: 33%; }\n\n.footer-text {\n  color: #2B59AC; }\n\n.flex {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmlwLWZvb3Rlci9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHJpcC1mb290ZXJcXHRyaXAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2R0FBNkc7RUFDN0csa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJpcC1mb290ZXIvdHJpcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAyMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG59XHJcbi5mb290ZXItaXRlbXtcclxuICAgIHdpZHRoOiAzMyU7XHJcbn1cclxuLmZvb3Rlci10ZXh0e1xyXG4gICAgY29sb3I6ICMyQjU5QUM7XHJcbn1cclxuLmZsZXh7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

        /***/
    }),

    /***/ "./src/app/components/trip-footer/trip-footer.component.ts":
    /*!*****************************************************************!*\
  !*** ./src/app/components/trip-footer/trip-footer.component.ts ***!
  \*****************************************************************/
    /*! exports provided: TripFooterComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TripFooterComponent", function () {
            return TripFooterComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var TripFooterComponent = /** @class */ (function () {
            function TripFooterComponent() {
            }

            TripFooterComponent.prototype.ngOnInit = function () {
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], TripFooterComponent.prototype, "active", void 0);
            TripFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trip-footer',
                    template: __webpack_require__(/*! ./trip-footer.component.html */ "./src/app/components/trip-footer/trip-footer.component.html"),
                    styles: [__webpack_require__(/*! ./trip-footer.component.scss */ "./src/app/components/trip-footer/trip-footer.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TripFooterComponent);
            return TripFooterComponent;
        }());


        /***/
    }),

    /***/ "./src/app/helpers/date-helper.ts":
    /*!****************************************!*\
  !*** ./src/app/helpers/date-helper.ts ***!
  \****************************************/
    /*! exports provided: DateHelper */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DateHelper", function () {
            return DateHelper;
        });
        var DateHelper = /** @class */ (function () {
            function DateHelper() {
            }

            DateHelper.getTodayDate = function () {
                var now = new Date();
                var dd = String(now.getDate()).padStart(2, '0');
                var mm = String(now.getMonth() + 1).padStart(2, '0');
                var yyyy = now.getFullYear();
                // console.log(yyyy + '-' + mm + '-' + dd);
                return yyyy + '-' + mm + '-' + dd;
            };
            DateHelper.getTodayFullDate = function () {
                var now = new Date();
                var dd = String(now.getDate()).padStart(2, '0');
                var mm = String(now.getMonth() + 1).padStart(2, '0');
                var yyyy = now.getFullYear();
                var ho = String(now.getHours()).padStart(2, '0');
                var mi = now.getMinutes().toString();
                if (mi.length == 1)
                    mi = "0" + mi;
                return yyyy + '-' + mm + '-' + dd + 'T' + ho + ':' + mi + ':00Z';
            };
            // 2019-05-01T06:30:00Z
            DateHelper.getTodayDateShort = function () {
                var now = new Date();
                var dd = String(now.getDate());
                var mm = String(now.getMonth() + 1);
                var yyyy = now.getFullYear();
                return dd + '.' + mm + '.' + yyyy;
            };
            return DateHelper;
        }());


        /***/
    }),

    /***/ "./src/app/models/accompeanie.ts":
    /*!***************************************!*\
  !*** ./src/app/models/accompeanie.ts ***!
  \***************************************/
    /*! exports provided: Accompanie, Trip, Student, Driver, RideReport, _Account, CarType, NotCollectedReason, EventType, ExceptionalEvent, Coordinator, TripType, NewTrip, studentInTrip */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Accompanie", function () {
            return Accompanie;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Trip", function () {
            return Trip;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Student", function () {
            return Student;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Driver", function () {
            return Driver;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RideReport", function () {
            return RideReport;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "_Account", function () {
            return _Account;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarType", function () {
            return CarType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NotCollectedReason", function () {
            return NotCollectedReason;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "EventType", function () {
            return EventType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ExceptionalEvent", function () {
            return ExceptionalEvent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Coordinator", function () {
            return Coordinator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TripType", function () {
            return TripType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NewTrip", function () {
            return NewTrip;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "studentInTrip", function () {
            return studentInTrip;
        });
        var Accompanie = /** @class */ (function () {
            function Accompanie(init) {
                Object.assign(this, init);
                this.trips = [];
            }

            return Accompanie;
        }());

        var Trip = /** @class */ (function () {
            function Trip() {
                this.students = [];
            }

            return Trip;
        }());

        var Student = /** @class */ (function () {
            function Student() {
            }

            return Student;
        }());

        var Driver = /** @class */ (function () {
            function Driver() {
            }

            return Driver;
        }());

        var RideReport = /** @class */ (function () {
            function RideReport() {
            }

            return RideReport;
        }());

        var _Account = /** @class */ (function () {
            function _Account() {
            }

            return _Account;
        }());

        var CarType = /** @class */ (function () {
            function CarType() {
            }

            return CarType;
        }());

        var NotCollectedReason = /** @class */ (function () {
            function NotCollectedReason() {
            }

            return NotCollectedReason;
        }());

        var EventType = /** @class */ (function () {
            function EventType() {
            }

            return EventType;
        }());

        var ExceptionalEvent = /** @class */ (function () {
            function ExceptionalEvent() {
            }

            return ExceptionalEvent;
        }());

        var Coordinator = /** @class */ (function () {
            function Coordinator() {
            }

            return Coordinator;
        }());

// export enum StudentStatus {
//     notCollected = 1, collected = 2, gotDown = 3, waiting = 4
// }
        var TripType;
        (function (TripType) {
            TripType[TripType["collecting"] = 1] = "collecting";
            TripType[TripType["scattering"] = 2] = "scattering";
        })(TripType || (TripType = {}));
        var NewTrip = /** @class */ (function () {
            function NewTrip() {
            }

            return NewTrip;
        }());

        var studentInTrip = /** @class */ (function () {
            function studentInTrip() {
            }

            return studentInTrip;
        }());


        /***/
    }),

    /***/ "./src/app/models/carTypes.ts":
    /*!************************************!*\
  !*** ./src/app/models/carTypes.ts ***!
  \************************************/
    /*! exports provided: CarTypes, CarTypesCategory */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarTypes", function () {
            return CarTypes;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarTypesCategory", function () {
            return CarTypesCategory;
        });
        var CarTypes = /** @class */ (function () {
            function CarTypes() {
            }

            CarTypes.SetCarTypes = function () {
                var carTypeList = [];
                var newCarType = new CarTypes();
                newCarType = new CarTypes(); //2
                newCarType.CarName = "אוטובוס";
                newCarType.CarTypesCategory = CarTypesCategory.Bus;
                newCarType.GuideID = "01325d6b-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "30-36";
                carTypeList.push(newCarType); // אוטובוס 30-36
                newCarType = new CarTypes(); //3
                newCarType.CarName = "אוטובוס";
                newCarType.CarTypesCategory = CarTypesCategory.Bus;
                newCarType.GuideID = "a660b259-562d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "55";
                carTypeList.push(newCarType); // אוטובוס 55
                newCarType = new CarTypes(); //4
                newCarType.CarName = "אוטובוס";
                newCarType.CarTypesCategory = CarTypesCategory.Bus;
                newCarType.GuideID = "a8ab6165-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "60";
                carTypeList.push(newCarType); // אוטובוס 60
                //newCarType = new CarTypes();//5
                //newCarType.CarName = "מונילון";
                //newCarType.CarTypesCategory = CarTypesCategory.Bus;
                //newCarType.GuideID = "60f5e708-1c7b-e911-a819-000d3a479682";
                //newCarType.PassengersNumber = "60";
                //carTypeList.push(newCarType);// מונילון
                newCarType = new CarTypes(); //6
                newCarType.CarName = "מונית";
                newCarType.CarTypesCategory = CarTypesCategory.Taxi;
                newCarType.GuideID = "8a2c3996-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "1";
                carTypeList.push(newCarType); // מונית 1
                newCarType = new CarTypes(); //7
                newCarType.CarName = "מונית";
                newCarType.CarTypesCategory = CarTypesCategory.Taxi;
                newCarType.GuideID = "b4ba2190-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "2";
                carTypeList.push(newCarType); // מונית 2
                newCarType = new CarTypes(); //8
                newCarType.CarName = "מונית";
                newCarType.CarTypesCategory = CarTypesCategory.Taxi;
                newCarType.GuideID = "66ba2190-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "3";
                carTypeList.push(newCarType); // מונית 3
                newCarType = new CarTypes(); //9
                newCarType.CarName = "מונית";
                newCarType.CarTypesCategory = CarTypesCategory.Taxi;
                newCarType.GuideID = "e0578989-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "4";
                carTypeList.push(newCarType); // מונית 4
                newCarType = new CarTypes(); //10
                newCarType.CarName = "מונית";
                newCarType.CarTypesCategory = CarTypesCategory.Taxi;
                newCarType.GuideID = "13478e83-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "7";
                carTypeList.push(newCarType); // מונית 7
                newCarType = new CarTypes(); //11
                newCarType.CarName = "מיניבוס";
                newCarType.CarTypesCategory = CarTypesCategory.MiniBus;
                newCarType.GuideID = "aafa7353-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "10";
                carTypeList.push(newCarType); //מיניבוס 10
                newCarType = new CarTypes(); //12
                newCarType.CarName = "מיניבוס";
                newCarType.CarTypesCategory = CarTypesCategory.MiniBus;
                newCarType.GuideID = "fa699377-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "14";
                carTypeList.push(newCarType); //מיניבוס 14
                newCarType = new CarTypes(); //13
                newCarType.CarName = "מיניבוס";
                newCarType.CarTypesCategory = CarTypesCategory.MiniBus;
                newCarType.GuideID = "f9f38c7d-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "16";
                carTypeList.push(newCarType); //מיניבוס 16
                newCarType = new CarTypes(); //14
                newCarType.CarName = "מיניבוס";
                newCarType.CarTypesCategory = CarTypesCategory.MiniBus;
                newCarType.GuideID = "bef48c7d-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "20";
                carTypeList.push(newCarType); //מיניבוס 20
                newCarType = new CarTypes(); //15
                newCarType.CarName = "מעלון";
                newCarType.CarTypesCategory = CarTypesCategory.ElevatorCar;
                newCarType.GuideID = "bd16349c-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "1";
                carTypeList.push(newCarType); //מעלון 1
                newCarType = new CarTypes(); //16
                newCarType.CarName = "מעלון";
                newCarType.CarTypesCategory = CarTypesCategory.ElevatorCar;
                newCarType.GuideID = "8a16349c-572d-e911-a95c-000d3a454f67";
                newCarType.PassengersNumber = "4";
                carTypeList.push(newCarType); //מעלון 4
                //    newCarType = new CarTypes();//17
                //    newCarType.CarName = "מעלון";
                //    newCarType.CarTypesCategory = CarTypesCategory.ElevatorCar;
                //    newCarType.GuideID = "716ff190-980a-ea11-a811-000d3a4aa0dc";
                //    newCarType.PassengersNumber = "משולב";
                //    carTypeList.push(newCarType);//מעלון משולב
                return carTypeList;
            };
            return CarTypes;
        }());

        var CarTypesCategory;
        (function (CarTypesCategory) {
            CarTypesCategory[CarTypesCategory["Bus"] = 0] = "Bus";
            CarTypesCategory[CarTypesCategory["Taxi"] = 1] = "Taxi";
            CarTypesCategory[CarTypesCategory["MiniBus"] = 2] = "MiniBus";
            CarTypesCategory[CarTypesCategory["ElevatorCar"] = 3] = "ElevatorCar";
        })(CarTypesCategory || (CarTypesCategory = {}));


        /***/
    }),

    /***/ "./src/app/models/log-in.model.ts":
    /*!****************************************!*\
  !*** ./src/app/models/log-in.model.ts ***!
  \****************************************/
    /*! exports provided: LogInModel */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LogInModel", function () {
            return LogInModel;
        });
        var LogInModel = /** @class */ (function () {
            function LogInModel(init) {
                Object.assign(this, init);
            }

            return LogInModel;
        }());


        /***/
    }),

    /***/ "./src/app/pages/contact-us/contact-us.component.html":
    /*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<section>\r\n    <div class=\"header\">\r\n        <div class=\"sub-header flex\">\r\n            <div class=\"header-title flex-big\">\r\n                اتصل بنا\r\n            </div>\r\n            <div (click)=\"goBack()\">\r\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z\" fill=\"white\" />\r\n                </svg>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"margin-top-sixtheen\">\r\n        <div class=\"white-block margin-bottom-fifteent\">\r\n            <div class=\"padding-tan\">\r\n                <div class=\"black-title bold\">مركز الشكاوى بلدية القدس</div>\r\n                <br>\r\n                <div class=\"black-middle-text\">مركز خدمة متاح من الأحد إلى الخميس من 6:30 صباحًا حتى 7:00 مساءً وفي أيام الجمعة من 6:30 صباحًا حتى 1:00 مساءً.</div>\r\n            </div>\r\n            <a [href]=\"'tel:'+ BusinessUnit.phone\">\r\n                <input type=\"button\" class=\"dail-btn\" value=\"اتصال\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"margin-top-sixtheen\" *ngIf=\"coordinator.name\">\r\n        <div class=\"white-block margin-bottom-fifteent\">\r\n            <div class=\"padding-tan\">\r\n                <div class=\"black-title bold\">المسؤول </div>\r\n                <br>\r\n                <div class=\"black-middle-text\"> المركز المسؤول  </div>\r\n                <div class=\"black-middle-text\">{{coordinator.name}} </div>\r\n            </div>\r\n\r\n            <a *ngIf=\"coordinator.phone\" [href]=\"'tel:'+ coordinator.phone\">\r\n                <input type=\"button\" class=\"dail-btn\" value=\"اتصال\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div *ngIf=\"BusinessUnit != undefined\" class=\"margin-top-sixtheen\">\r\n        <div class=\"white-block margin-bottom-fifteent\">\r\n            <div class=\"padding-tan\">\r\n                <div class=\"black-title bold\">יחידה עסקית </div>\r\n                <br>\r\n                <div class=\"black-middle-text\">{{BusinessUnit.name}} </div>\r\n            </div>\r\n\r\n            <a [href]=\"'tel:'+ BusinessUnit.phone\">\r\n                <input type=\"button\" class=\"dail-btn\" value=\"חייג\">\r\n            </a>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n</section>"

        /***/
    }),

    /***/ "./src/app/pages/contact-us/contact-us.component.scss":
    /*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.scss ***!
  \************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".dail-btn {\n  background: #CE0F00;\n  box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.24);\n  border-radius: 4px;\n  width: 100%;\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhaWwtYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0NFMEYwMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNTQsIDEyMywgMjQ1LCAwLjI0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"

        /***/
    }),

    /***/ "./src/app/pages/contact-us/contact-us.component.ts":
    /*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
    /*! exports provided: ContactUsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
            return ContactUsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");


        var ContactUsComponent = /** @class */ (function () {
            function ContactUsComponent(accompSvc) {
                this.accompSvc = accompSvc;
            }

            Object.defineProperty(ContactUsComponent.prototype, "coordinator", {
                get: function () {
                    return this.accompSvc.accompenie.coordinator;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ContactUsComponent.prototype, "BusinessUnit", {
                get: function () {
                    return this.accompSvc.accompenie.businessUnit != (undefined || null) ? this.accompSvc.accompenie.businessUnit : undefined;
                },
                enumerable: true,
                configurable: true
            });
            ContactUsComponent.prototype.ngOnInit = function () {
            };
            ContactUsComponent.prototype.goBack = function () {
                history.go(-1);
            };
            ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact-us',
                    template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
                    styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/pages/contact-us/contact-us.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"]])
            ], ContactUsComponent);
            return ContactUsComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pages/exceptional-event/exceptional-event.component.html":
    /*!**************************************************************************!*\
  !*** ./src/app/pages/exceptional-event/exceptional-event.component.html ***!
  \**************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<section>\r\n    <div class=\"header\">\r\n        <div class=\"sub-header flex\">\r\n            <div class=\"header-title flex-big\">\r\n                التبليغ عن مشكلة  \r\n            </div>\r\n            <div (click)=\"goBack()\">\r\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path d=\"M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z\" fill=\"white\" />\r\n                </svg>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"margin-top-sixtheen\">\r\n        <app-custom-select [title]=\"'نوع المشكلة'\" [options]=\"options\" [isRequired]=\"reasonType==-1&&resonError\" (selected)=\"selectedTypeEvent($event)\">\r\n        </app-custom-select>\r\n        <small>* حقل مطلوب</small>\r\n\r\n\r\n\r\n        <div class=\"margin-bottom-fifteent\">\r\n            <textarea placeholder=\"التفاصيل\" name=\"remark\" [(ngModel)]=\"remark\" [ngClass]=\"{required: reasonType==100000000&&!remark&&remarkError}\"></textarea>\r\n            <small *ngIf=\"reasonType==100000000\">* حقل مطلوب</small>\r\n        </div>\r\n        <div class=\"white-block flex\" (click)=\"file.click()\">\r\n            <img src=\"assets/img/camera.png\" alt=\"\">\r\n            <div class=\"margin-right-ten\">اضافة صورة</div>\r\n        </div>\r\n        <div *ngIf=\"showError\" class=\"error\">בחר/י קובץ מסוג תמונה</div>\r\n        <input (change)=\"selectedimage($event)\" #file type=\"file\" hidden>\r\n        <img [src]=\"img\" *ngIf=\"img\" width=\"200\" height=\"200\" class=\"imgCenter\">\r\n\r\n    </div>\r\n\r\n    <footer>\r\n        <input (click)=\"saveEvent()\" type=\"button\" class=\"choose-btn\" value=\" ارسال\">\r\n    </footer>\r\n\r\n\r\n    <div class=\"popup-overlay\" *ngIf=\"summaryPopup\">\r\n        <div class=\"popup-box\">\r\n            <div class=\"content\">\r\n                <h1>האירוע התקבל בהצלחה</h1>\r\n                <h3>בהליך טיפול</h3>\r\n                <br> <br>\r\n                <input (click)=\"ApprovedAndReturnBackForm()\" class=\"blue-btn\" type=\"button\" value=\"اغلاق\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>"

        /***/
    }),

    /***/ "./src/app/pages/exceptional-event/exceptional-event.component.scss":
    /*!**************************************************************************!*\
  !*** ./src/app/pages/exceptional-event/exceptional-event.component.scss ***!
  \**************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "textarea {\n  margin-top: 30px; }\n\nfooter input {\n  width: 100%;\n  background: #420799; }\n\n.error {\n  color: red;\n  margin-top: 20px;\n  text-align: center; }\n\n.popup-overlay {\n  text-align: center; }\n\n.popup-overlay button {\n    background-color: white;\n    border: 1px black solid;\n    color: black;\n    padding: 16px 32px;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer; }\n\n.required {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhjZXB0aW9uYWwtZXZlbnQvQzpcXEJpdGJvY2tldFByb2plY3RzXFxtZ2FyLWFjY29tcGFuaWVzLWFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxleGNlcHRpb25hbC1ldmVudFxcZXhjZXB0aW9uYWwtZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBSXZCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leGNlcHRpb25hbC1ldmVudC9leGNlcHRpb25hbC1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0MjA3OTk7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwLW92ZXJsYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59Il19 */"

        /***/
    }),

    /***/ "./src/app/pages/exceptional-event/exceptional-event.component.ts":
    /*!************************************************************************!*\
  !*** ./src/app/pages/exceptional-event/exceptional-event.component.ts ***!
  \************************************************************************/
    /*! exports provided: ExceptionalEventComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ExceptionalEventComponent", function () {
            return ExceptionalEventComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/date-helper */ "./src/app/helpers/date-helper.ts");


        var ExceptionalEventComponent = /** @class */ (function () {
            function ExceptionalEventComponent(accompSvc, activityRoute, router) {
                this.accompSvc = accompSvc;
                this.activityRoute = activityRoute;
                this.router = router;
                this.summaryPopup = false;
                this.reasonType = -1;
            }

                 var eventTypeListArabic = {
                    "הוספת ילד/ה לנסיעה": "اضافة طالب الى السفرية",
                    "הסעה מאחרת"   : "تأخر في السفرية",
                    "התנהגות שלילית של תלמיד/נהג"   : "سلوك الطالب / السائق السلبي",
                    "מסלול ארוך"    : "المسار يأخذ الكثير من الوقت",
                    "רכב לא תקין/לא בטיחותי"    : "مركبة غير جيدة / غير آمنة",
                    "איחור מבוגר אחראי לקבלת התלמיד/מסירת התלמיד"    : "تأخر اهل الطالب في  استلام / توصيل الطالب",
                    "אירוע חריג - אחר"   : "حدث غير عادي - آخر",
                 };

            Object.defineProperty(ExceptionalEventComponent.prototype, "options", {
                get: function () {
                     for( var key in this.accompSvc.accompenie.eventTypeList)  {
                        if(eventTypeListArabic[this.accompSvc.accompenie.eventTypeList[key].text] != undefined){
                              this.accompSvc.accompenie.eventTypeList[key].text = eventTypeListArabic[this.accompSvc.accompenie.eventTypeList[key].text];
                        }
                     }
                 //   console.log(this.accompSvc.accompenie.eventTypeList[0].text)
                    return this.accompSvc.accompenie.eventTypeList;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ExceptionalEventComponent.prototype, "model", {
                set: function (value) {
                    this.accompSvc.accompenie = value;
                },
                enumerable: true,
                configurable: true
            });
            ExceptionalEventComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.activityRoute.queryParams.subscribe(function (param) {
                    _this.rideId = param['id'];
                    _this.isFromTrip = param['isFromTrip'];
                });
            };
            ExceptionalEventComponent.prototype.selectedTypeEvent = function (e) {
                this.reasonType = e.value;
            };
            ExceptionalEventComponent.prototype.selectedimage = function (e) {
                var _this = this;
                this.accompSvc.loadData.next(true);
                var mimeType = e.target.files[0].type;
                if (mimeType.match(/image\/*/) == null) {
                    this.showError = true;
                    return;
                }
                this.showError = false;
                var reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onerror = function (_event) {
                    // alert(reader.error)
                };
                reader.onload = function (_event) {
                    _this.fileName = e.target.files[0].name;
                    var canvas = document.createElement("canvas");
                    var img = document.createElement("img");
                    img.src = reader.result;
                    img.width = 300;
                    img.height = 300;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);
                    canvas.width = img.width;
                    canvas.height = img.height;
                    var ctx = canvas.getContext("2d");
                    setTimeout(function () {
                        ctx.drawImage(img, 0, 0, img.width, img.height);
                        _this.img = canvas.toDataURL("image/png");
                        _this.accompSvc.loadData.next(false);
                    }, 1000);
                };
                reader.readAsDataURL(e.target.files[0]);
            };
            ;
            ExceptionalEventComponent.prototype.saveEvent = function () {
                var _this = this;
                try {
                    if (this.img != null) {
                        if (this.img.split(',').length > 0)
                            this.img = this.img.split(',')[1];
                    }
                } catch (error) {
                    console.log("123 " + error);
                }
                try {
                    this.resonError = this.reasonType == null || this.reasonType == undefined || this.reasonType == -1 ? true : false;
                    this.remarkError = this.reasonType == 100000000 && !this.remark ? true : false;
                    if (this.remarkError || this.resonError) {
                        return;
                    }
                    if (this.img != null || this.reasonType != null || (this.remark != "" && this.remark != null))
                        this.accompSvc.accompenie.exceptionalEventList.push({
                            regardingId: this.rideId,
                            caseType: this.reasonType,
                            description: this.remark,
                            image: this.img,
                            fileName: this.fileName,
                            startDate: src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_4__["DateHelper"].getTodayFullDate()
                        });
                    this.img = null;
                } catch (error) {
                    console.log("456 " + error);
                }
                try {
                    this.model = this.accompSvc.accompenie;
                } catch (error) {
                    console.log("678 " + error);
                }
                console.log("0");
                if (this.isFromTrip == 'false') { //אם הגיע לכאן מתוך מחוץ לנסיעה
                    this.accompSvc.updateModelWithEmit(true, function () {
                        _this.summaryPopup = true;
                    });
                } else { //אם הגיע מתוך נסיעה
                    this.accompSvc.addItemToQueue(this.accompSvc.accompenie, true, true, function () {
                        return _this.summaryPopup = true;
                    });
                }
            };
            ExceptionalEventComponent.prototype.ApprovedAndReturnBackForm = function () {
                this.summaryPopup = false;
                if (this.isFromTrip == 'false') { //אם הגיע לכאן מתוך מחוץ לנסיעה
                    this.goBack(); //תחזור אחורה
                } else { //אם הגיע מתוך נסיעה
                    this.router.navigate(['/my-trip', this.rideId]); //תחזור לנסיעה
                }
            };
            ExceptionalEventComponent.prototype.goBack = function () {
                history.go(-1);
            };
            ExceptionalEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-exceptional-event',
                    template: __webpack_require__(/*! ./exceptional-event.component.html */ "./src/app/pages/exceptional-event/exceptional-event.component.html"),
                    styles: [__webpack_require__(/*! ./exceptional-event.component.scss */ "./src/app/pages/exceptional-event/exceptional-event.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], ExceptionalEventComponent);
            return ExceptionalEventComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pages/log-in/log-in.component.html":
    /*!****************************************************!*\
  !*** ./src/app/pages/log-in/log-in.component.html ***!
  \****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<section>\r\n    <div class=\"wrap-log-in-gradient\">\r\n        <div class=\"log-in-gradient\">\r\n            <div *ngIf=\"step == 'log-in'\">\r\n                <div class=\"big-text-gradient\">\r\n                    للتسجيل لأول مرة ، أدخل التفاصيل التالية:\r\n                </div>\r\n                <div class=\"small-text-gradient\">\r\n                   سيتم إرسال رسالة نصية قصيرة تحتوي على رمز التحقق إلى رقم الهاتف هذا\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"step == 'pass'\">\r\n                <div class=\"big-text-gradient\">\r\n                    أدخل رمز التحقق\r\n                    <br> التي تم استلامها في رسالة إلى الرقم المدخل\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div [formGroup]=\"form\" class=\"wrap-log-in-form\" *ngIf=\"step == 'log-in'\">\r\n        <input formControlName=\"tz\" type=\"tel\" placeholder=\": بطاقة الهوية (يشمل الصفر في المقدمة) \">\r\n        <input formControlName=\"phone\" type=\"tel\" placeholder=\"رقم الهاتف\">\r\n        <div class=\"validation\" *ngIf=\"!ctrls['phone'].valid && ctrls['phone'].touched\"> שדה זה נדרש </div>\r\n\r\n        <div class=\"buttens-log-in\">\r\n            <input [disabled]=\"!form.valid\" type=\"button\" (click)=\"logIn('sms')\" value=\"ارسال رسالة SMS \">\r\n            <input [disabled]=\"!form.valid\" type=\"button\" (click)=\"logIn('vocal')\" value=\"تلقي رسالة صوتية\">\r\n        </div>\r\n        <!-- <div>error: {{svc.error}}</div> -->\r\n\r\n        <div class=\"validation\" *ngIf=\"errorMsg == 'notExists'\">المستخدم غير موجود</div>\r\n\r\n    </div>\r\n\r\n    <div class=\"wrap-log-in-form\" *ngIf=\"step == 'pass'\">\r\n\r\n        <app-split-input #splitInput [automaticCode]=\"code\" [count]=\"6\"></app-split-input>\r\n\r\n        <div class=\"buttens-log-in\">\r\n            <input type=\"button\" (click)=\"validteLogInCode(smsCode.getValue())\" value=\"تحقق\">\r\n            <!-- <div>mySms: {{mySms}}</div> -->\r\n\r\n            <!-- <input type=\"button\" (click)=\"svc.autoCompleteSms()\" value=\"תבדוק סמס\"> -->\r\n\r\n\r\n\r\n            <!-- <input type=\"button\" value=\"קבל הודעה בטלפון\"> -->\r\n        </div>\r\n        <div class=\"validation\" *ngIf=\"errorMsg == 'incoorectPassword'\"> סיסמא לא נכונה </div>\r\n\r\n    </div>\r\n\r\n\r\n</section>\r\n<app-load *ngIf=\"load==true\"></app-load>"

        /***/
    }),

    /***/ "./src/app/pages/log-in/log-in.component.scss":
    /*!****************************************************!*\
  !*** ./src/app/pages/log-in/log-in.component.scss ***!
  \****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".wrap-log-in-gradient {\n  position: absolute;\n  height: 175px;\n  overflow-x: hidden;\n  width: 100%;\n  top: 0;\n  right: 0;\n  left: 0; }\n\n.log-in-gradient {\n  position: absolute;\n  top: 0;\n  right: -60px;\n  left: 0;\n  height: 175px;\n  width: 135%;\n  background: linear-gradient(86.42deg, #711BF0 14.13%, #367BF5 85.91%);\n  border-radius: 0px 0px 50% 50%;\n  text-align: center; }\n\n.log-in-gradient div div {\n  margin: 30px 90px 15px 90px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n  color: #FFFFFF;\n  line-height: 20px; }\n\n.log-in-gradient div .small-text-gradient {\n  font-weight: normal;\n  font-size: 13px; }\n\n.wrap-log-in-form {\n  margin-top: 60%; }\n\n.buttens-log-in {\n  margin: 20px 0px;\n  height: 50px; }\n\n.buttens-log-in input:first-child {\n  background: #420799;\n  float: right;\n  padding: 0px 15px; }\n\n.buttens-log-in input:last-child {\n  float: left;\n  background: #2B59AC;\n  padding: 0px 10px; }\n\n@media screen and (max-width: 400px) {\n  .buttens-log-in input:first-child {\n    width: 49%;\n    background: #420799;\n    float: right;\n    padding: 0px 15px; }\n  .buttens-log-in input:last-child {\n    width: 49%;\n    float: left;\n    background: #2B59AC;\n    padding: 0px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9nLWluL0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcbG9nLWluXFxsb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZy1pbi9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFzc2V0c1xcc3R5bGVcXGJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU8sRUFBQTs7QUFFWDtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLE9BQU87RUFDUCxhQUFhO0VBQ2IsV0FBVztFQUNYLHFFQUFxRTtFQUNyRSw4QkFBOEI7RUFDOUIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBR1ksMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQzlCSTtFRCtCSixpQkFBaUIsRUFBQTs7QUFJN0I7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLG1CQ3ZEZ0I7RUR3RGhCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQ3JFWTtJRHNFWixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlL2Jhc2Uuc2Nzcyc7XHJcblxyXG4ud3JhcC1sb2ctaW4tZ3JhZGllbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLmxvZy1pbi1ncmFkaWVudHsgICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIHdpZHRoOiAxMzUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg2LjQyZGVnLCAjNzExQkYwIDE0LjEzJSwgIzM2N0JGNSA4NS45MSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1MCUgNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2ctaW4tZ3JhZGllbnR7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGl2eyAgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCA5MHB4IDE1cHggOTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIFxyXG4ubG9nLWluLWdyYWRpZW50IGRpdiAuc21hbGwtdGV4dC1ncmFkaWVudHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLndyYXAtbG9nLWluLWZvcm17XHJcbiAgICBtYXJnaW4tdG9wOiA2MCU7IFxyXG4gIFxyXG59XHJcbi5idXR0ZW5zLWxvZy1pbntcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmJ1dHRlbnMtbG9nLWluIGlucHV0OmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogIzQyMDc5OTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcbi5idXR0ZW5zLWxvZy1pbiBpbnB1dDpsYXN0LWNoaWxke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1ibHVlO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuYnV0dGVucy1sb2ctaW4gaW5wdXQ6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDIwNzk5O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIH1cclxuICAgIC5idXR0ZW5zLWxvZy1pbiBpbnB1dDpsYXN0LWNoaWxke1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJG1haW4tYmx1ZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIH1cclxuIH1cclxuIiwiJG1haW4tYmx1ZSA6ICMyQjU5QUM7XHJcbiR3aGl0ZSA6ICNGRkZGRkY7XHJcbiRncmF5IDogIzc1NzU3NTtcclxuJGJsYWNrIDogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuXHJcbkBtaXhpbiBib3gtc2hhZG93LW1peGluICgkdG9wLCAkbGVmdCwgJGJsdXIsICRjb2xvcil7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcclxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0tbWl4aW4oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgfVxyXG5cclxuLy8gRVhURU5ERUQgQ0xBU0VTXHJcblxyXG4lZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSJdfQ== */"

        /***/
    }),

    /***/ "./src/app/pages/log-in/log-in.component.ts":
    /*!**************************************************!*\
  !*** ./src/app/pages/log-in/log-in.component.ts ***!
  \**************************************************/
    /*! exports provided: LogInComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
            return LogInComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _models_log_in_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/log-in.model */ "./src/app/models/log-in.model.ts");
        /* harmony import */
        var _services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
        /* harmony import */
        var _log_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in.service */ "./src/app/pages/log-in/log-in.service.ts");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /* harmony import */
        var src_app_components_split_input_split_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/split-input/split-input.component */ "./src/app/components/split-input/split-input.component.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


        var LogInComponent = /** @class */ (function () {
            function LogInComponent(svc, api, accompSvc, router) {
                this.svc = svc;
                this.api = api;
                this.accompSvc = accompSvc;
                this.router = router;
                //online :string;
                this.load = false;
                this.step = 'log-in'; //'pass' 
            }

            Object.defineProperty(LogInComponent.prototype, "user", {
                get: function () {
                    return this.accompSvc.accompenie;
                },
                set: function (value) {
                    this.accompSvc.accompenie = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LogInComponent.prototype, "form", {
                get: function () {
                    return this.svc.form;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LogInComponent.prototype, "ctrls", {
                get: function () {
                    return this.form.controls;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LogInComponent.prototype, "smsSubscription", {
                get: function () {
                    return this.svc.smsSubscription;
                },
                enumerable: true,
                configurable: true
            });
            LogInComponent.prototype.logIn = function (msgType) {
                var _this = this;
                if (navigator.onLine) {
                    this.load = true;
                    this.logInObj = new _models_log_in_model__WEBPACK_IMPORTED_MODULE_1__["LogInModel"](this.form.value); // COMMENT FOR TEST
                    this.logInObj.msgType = msgType;
                    //TEST IT
                    try {
                        //NativeApp.startSmsListener();
                    } catch (_a) {
                    }
                    this.api.post("user/login", this.logInObj) //.pipe(first())
                        .subscribe(function (res) {
                            _this.load = false;
                            // this.accompSvc.closeNoInternetAlert();
                            if (res.message == 'notExists')
                                _this.errorMsg = res.message;
                            else if (res.message == 'success') {
                                _this.svc.autoCompleteSms();
                                _this.svc.smsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (code) {
                                    if (code)
                                        _this.validteLogInCode(code);
                                });
                                _this.step = 'pass';
                            } else {
                                //handle error
                            }
                        }, function (err) {
                            _this.load = false;
                            // this.accompSvc.openNoInternetAlert();
                        });
                }
            };
            LogInComponent.prototype.validteLogInCode = function (code) {
                var _this = this;
                //alert("validteLogInCode");
                var fireBaseToken = document.getElementById('FireBaseToken');
                if (fireBaseToken.value && fireBaseToken.value != "" && fireBaseToken.value != undefined) {
                    this.logInObj.fireBaseDeviceToken = fireBaseToken.value;
                }
                this.load = true;
                this.logInObj.code = code;
                this.api.post("user/ValidateLogInCode", this.logInObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                    .subscribe(function (res) {
                        // this.accompSvc.closeNoInternetAlert();
                        if (res.message == 'incoorectPassword') {
                            _this.errorMsg = res.message;
                            _this.load = false;
                        } else {
                            res.smsOTP = code;
                            _this.user = res;
                            _this.accompSvc.needToGetDataFromAPI = false;
                            _this.accompSvc.checkAppVersion().subscribe(function (res) {
                                _this.load = false;
                                // this.accompSvc.closeNoInternetAlert();
                                if (res.details == 'True') {
                                    _this.router.navigate(['my-trips']);
                                } else {
                              //      _this.router.navigate(['message-page/updateVersion']);
                                    _this.router.navigate(['my-trips']);
                                }
                            }, function (err) {
                                _this.load = false;
                                // this.accompSvc.openNoInternetAlert();
                            });
                        }
                    }, function (err) {
                        _this.load = false;
                        // this.accompSvc.openNoInternetAlert();
                    });
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(src_app_components_split_input_split_input_component__WEBPACK_IMPORTED_MODULE_7__["SplitInputComponent"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_split_input_split_input_component__WEBPACK_IMPORTED_MODULE_7__["SplitInputComponent"])
            ], LogInComponent.prototype, "smsCode", void 0);
            LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-log-in',
                    template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/pages/log-in/log-in.component.html"),
                    providers: [_log_in_service__WEBPACK_IMPORTED_MODULE_5__["LogInService"]],
                    styles: [__webpack_require__(/*! ./log-in.component.scss */ "./src/app/pages/log-in/log-in.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_log_in_service__WEBPACK_IMPORTED_MODULE_5__["LogInService"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
                    _services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
            ], LogInComponent);
            return LogInComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pages/log-in/log-in.service.ts":
    /*!************************************************!*\
  !*** ./src/app/pages/log-in/log-in.service.ts ***!
  \************************************************/
    /*! exports provided: LogInService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LogInService", function () {
            return LogInService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


        var LogInService = /** @class */ (function () {
            function LogInService() {
                this.smsInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
                this.smsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    tz: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
                });
                //  NativeApp.startTrip();
            }

            LogInService.prototype.autoCompleteSms = function () {
                var _this = this;
                /*
                try {
                    NativeApp.startSmsListener();
                } catch (error) {
                    //this.error = ("ERROR: " + error);
                    // setTimeout(() => {
                    //    (<HTMLInputElement>document.getElementById('smsFromApk')).value = '123456'; 
                    //  }, 5000);
                }*/
                this.smsSubscription = this.smsInterval.subscribe(function (counter) {
                    var sms = document.getElementById('smsFromApk');
                    //this.mySms = sms.value;
                    if (sms.value) {
                        var tempSms = sms.value;
                        sms.value = "";
                        _this.smsSubscription.unsubscribe();
                        _this.smsSubject.next(tempSms);
                    }
                    //     if(counter >= 10){  
                    //    this.smsSubscription.unsubscribe();
                    //    this.smsSubject.next(null);
                    // }   
                });
            };
            LogInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], LogInService);
            return LogInService;
        }());


        /***/
    }),

    /***/ "./src/app/pages/message-page/message-page.component.html":
    /*!****************************************************************!*\
  !*** ./src/app/pages/message-page/message-page.component.html ***!
  \****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<div class=\"header\">\r\n    <div class=\"sub-header\">\r\n        <div>\r\n            אפליקצית הסעים (Ver:{{accompSvc.currentVersion}})\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <div *ngIf=\"message == 'updateVersion'\" id=\"updateVersionPopup\" class=\"popup-overlay\">\r\n        <div class=\"popup-box\">\r\n            <div class=\"content\">\r\n                <h2>קיימת גרסה חדשה בחנות</h2>\r\n                <p>ישנה גרסה חדשה בחנות זמינה להורדה, לא ניתן להמשיך ולהשתמש בגרסה הנוכחית</p>\r\n                <a href=\"https://play.google.com/store/apps/details?id=com.mgar.mast.mastapp.melavim&hl=iw&gl=US/\" target=\"_blank\">לחץ כאן למעבר לחנות Google Play</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"message == 'noInternet'\" id=\"NoInternetPopup\" class=\"popup-overlay\">\r\n        <div class=\"popup-box\">\r\n            <div class=\"content\">\r\n                <h2>אין חיבור</h2>\r\n                <p>הפעל את האפליקציה מחדש כאשר תתחדש התקשורת</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

        /***/
    }),

    /***/ "./src/app/pages/message-page/message-page.component.scss":
    /*!****************************************************************!*\
  !*** ./src/app/pages/message-page/message-page.component.scss ***!
  \****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "a {\n  text-decoration: none;\n  color: darkgreen;\n  font-weight: bold; }\n\ndiv {\n  text-align: center; }\n\n.popup-overlay {\n  background: rgba(0, 0, 0, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZS1wYWdlL0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcbWVzc2FnZS1wYWdlXFxtZXNzYWdlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVzc2FnZS1wYWdlL21lc3NhZ2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9wdXAtb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn0iXX0= */"

        /***/
    }),

    /***/ "./src/app/pages/message-page/message-page.component.ts":
    /*!**************************************************************!*\
  !*** ./src/app/pages/message-page/message-page.component.ts ***!
  \**************************************************************/
    /*! exports provided: MessagePageComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MessagePageComponent", function () {
            return MessagePageComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");


        var MessagePageComponent = /** @class */ (function () {
            function MessagePageComponent(accompSvc, activityRoute) {
                this.accompSvc = accompSvc;
                this.activityRoute = activityRoute;
            }

            MessagePageComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.activityRoute.params.subscribe(function (param) {
                    _this.message = param['message'];
                });
            };
            MessagePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-message-page',
                    template: __webpack_require__(/*! ./message-page.component.html */ "./src/app/pages/message-page/message-page.component.html"),
                    styles: [__webpack_require__(/*! ./message-page.component.scss */ "./src/app/pages/message-page/message-page.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
            ], MessagePageComponent);
            return MessagePageComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pages/my-trip/my-trip.component.html":
    /*!******************************************************!*\
  !*** ./src/app/pages/my-trip/my-trip.component.html ***!
  \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n<section>\r\n    <div class=\"header\">\r\n        <div class=\"sub-header flex\">\r\n            <div class=\"header-title\">\r\n               سفرياتي\r\n            </div>\r\n            <div class=\"header-left\" (click)=\"clickEvent()\">\r\n               التبليغ عن مشكلة\r\n            </div>\r\n            <div>\r\n                <svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path\r\n                        d=\"M25.7196 21.5363L25.719 21.5353L16.9959 6.36955C16.9958 6.36943 16.9957 6.36932 16.9957 6.3692C16.5874 5.65783 15.8171 5.25 15.0207 5.25H15.0195C14.2232 5.25 13.4554 5.65635 13.0458 6.36574C13.0458 6.36579 13.0458 6.36585 13.0457 6.3659C13.0457 6.366 13.0456 6.3661 13.0456 6.3662L4.28316 21.5324L4.28151 21.5353C3.88771 22.2221 3.9075 23.0599 4.33822 23.726L4.33876 23.7269C4.76192 24.3798 5.49771 24.75 6.25679 24.75H23.7419C24.5013 24.75 25.2369 24.3817 25.6607 23.7257C26.0914 23.0601 26.1132 22.2224 25.7196 21.5363ZM15.0195 20.4167C14.9249 20.4167 14.8535 20.3815 14.8107 20.3418C14.7691 20.3032 14.7621 20.2702 14.7621 20.25C14.7621 20.2298 14.7691 20.1968 14.8107 20.1582C14.8535 20.1185 14.925 20.0834 15.0195 20.0834C15.113 20.0834 15.1847 20.1183 15.228 20.1585C15.2701 20.1975 15.2768 20.2305 15.2768 20.25C15.2768 20.2702 15.2698 20.3032 15.2283 20.3418C15.1854 20.3815 15.114 20.4167 15.0195 20.4167ZM15.2781 16.7687C15.2781 16.7891 15.2711 16.8219 15.2296 16.8604C15.1866 16.9002 15.1149 16.9353 15.0208 16.9353C14.9256 16.9353 14.8542 16.9 14.8117 16.8606C14.7706 16.8225 14.7634 16.7898 14.7634 16.7687V12.102C14.7634 12.0817 14.7704 12.0488 14.812 12.0102C14.8548 11.9705 14.9262 11.9353 15.0208 11.9353C15.1143 11.9353 15.186 11.9703 15.2293 12.0105C15.2714 12.0494 15.2781 12.0825 15.2781 12.102V16.7687Z\"\r\n                        fill=\"#EE0202\" stroke=\"white\" stroke-width=\"2\" />\r\n                </svg>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"margin-main-content flex margin-bottom-fifteent\">\r\n        <div class=\"middle-text-gray flex-big\">\r\n            {{currentTrip.hour}}\r\n            <br>\r\n            <!-- <div *ngIf=\"item.type == 1\">\r\n                    صباحا\r\n                  </div>\r\n                  <div *ngIf=\"item.type == 2\">\r\n                    ظهرا\r\n                  </div> -->\r\n\r\n            {{address}}\r\n        </div>\r\n        <div>\r\n            <!-- <input (mousedown)=\"popupSubjectClose=true\" *ngIf=\"totalCount == 0\" type=\"button\" class=\"close-trip-btn\" value=\"انهيت السفرية\"> -->\r\n            <input (click)=\"checkAllStudentStatus()\" type=\"button\" class=\"close-trip-btn\" value=\"انهيت السفرية\">\r\n        </div>\r\n    </div>\r\n\r\n    <div [ngClass]=\"{schoolbusExtention: enableSchoolbus}\">\r\n        <app-search-student-buttons (updateStudentListInTrip)=\"getDataFromAccompanySVC($event)\" (refreshParentData)=\"getDataFromAccompanySVC($event)\"></app-search-student-buttons>\r\n        <div class=\"schoolbusDiv\" *ngIf=\"enableSchoolbus\">\r\n            <a [ngClass]=\"{linkDisabled: offline==true}\" (click)=\"openSchoolbusSite()\">\r\n                <img src=\"assets/img/schoolbusIcon.png\" alt=\"Tutorialspoint\" style=\"height:40px;\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"margin-bottom-fiftee margin-top-10\">\r\n        <div style=\"position: relative;\" *ngFor=\"let item of studentList;let i = index;\" [class]=\"'status' + item.status\">\r\n\r\n            <div class=\"v-icon back-v\">\r\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M24.0553 5.73621L12.5937 17.1979L8.06534 12.6804L6.53784 14.2079L12.5937 20.2637L25.5937 7.26371L24.0553 5.73621ZM19.4622 7.26371L17.9347 5.73621L11.0663 12.6045L12.5938 14.132L19.4622 7.26371ZM6.46208 20.2637L0.40625 14.2079L1.94458 12.6804L7.98958 18.7362L6.46208 20.2637Z\"\r\n                        fill=\"white\" />\r\n                </svg>\r\n\r\n            </div>\r\n            <!--\r\n                 (panstart)=\"onPanStart($event)\" (panmove)=\"onPan($event, i)\"\r\n                (panend)=\"onPanEnd($event, i)\" [ngClass]=\"{          \r\n          'swipe' : item.swipe != 0\r\n        }\"\r\n            -->\r\n            <div class=\"accordion-wraper\">\r\n\r\n                <div class=\"accor-inner-wraper\" [ngClass]=\"{             \r\n              'active': item.isActive             \r\n              }\" [ngStyle]=\"{\r\n                'width': 'calc(100% + '+ item.swipe +'px)',\r\n                'margin-right':  + item.swipe+ 'px'              \r\n              }\">\r\n                    <div class=\"accor-title-wraper\">\r\n                        <div class=\"accor-title-right\" (click)=\"item.isActive = !item.isActive\">\r\n                            <i class=\"down accor-arrow\"></i>\r\n                            <div class=\"black-title flex-big\">\r\n                                {{item.name}}\r\n                                <b *ngIf=\"item.hasSpecialPoint\">!</b>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <!-- $event.stopPropagation(); -->\r\n\r\n                        <div class=\"accor-title-middle\">\r\n                            <div *ngIf=\"item.status == 1\" (click)=\"indexStudent=i;popupSubject = 4\" class=\"red-middle-text\">\r\n                                لم يحضر\r\n                            </div>\r\n                            <!-- $event.stopPropagation(); -->\r\n                            <div *ngIf=\"item.status != 1&&item.status!=\t100000002\" (click)=\"cancelIndexStudent = i; popupCancelAction = true\">\r\n                                الغاء\r\n                            </div>\r\n                        </div>\r\n                        <!-- notCollected = 1, collected = 2, gotDown = 3, waiting = 4 -->\r\n                        <div class=\"accor-title-left\">\r\n                            <div class=\"accor-title-left-inner\">\r\n                                <div>\r\n                                    <input type=\"button\" class=\"short-btn not-collected-left\" value=\"حضر\" (click)=\"changeStatus(i)\">\r\n                                    <input type=\"button\" class=\"short-btn collected-left\" value=\"نزل\" (click)=\"changeStatus(i)\">\r\n                                    <input type=\"button\" class=\"short-btn wating-left\" value=\"الغاء\" (click)=\"cancelIndexStudent = i; popupCancelAction = true\">\r\n                                    <div class=\"flex got-down-left\">\r\n                                        <div>نزل</div>\r\n                                        <div class=\"v-icon\">\r\n                                            <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                                    d=\"M24.0553 5.73621L12.5937 17.1979L8.06534 12.6804L6.53784 14.2079L12.5937 20.2637L25.5937 7.26371L24.0553 5.73621ZM19.4622 7.26371L17.9347 5.73621L11.0663 12.6045L12.5938 14.132L19.4622 7.26371ZM6.46208 20.2637L0.40625 14.2079L1.94458 12.6804L7.98958 18.7362L6.46208 20.2637Z\"\r\n                                                    fill=\"white\" />\r\n                                            </svg>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"accor-panel\" [ngClass]=\"item.isActive ? 'active' : ''\">\r\n                        <div class=\"accor-panel-inner\">\r\n                            <div *ngIf=\"item.address\" class=\"small-black-text margin-bottom-five\">\r\n                                عنوان الطالب: {{item.address}}\r\n                                <a *ngIf=\"item.addressLocation!=null\" href=\"https://www.waze.com/ul?ll={{item.addressLocation.lat}},{{item.addressLocation.lang}}&navigate=yes&zoom=17\">\r\n                                    <img class=\"wazeImg\" src=\"assets/img/waze.png\">\r\n                                </a>\r\n                            </div>\r\n                            <div *ngIf=\"item.secondAddress\" class=\"small-black-text margin-bottom-five\">\r\n                                כתובת משנית לתלמיד: {{item.secondAddress}}\r\n                                <a *ngIf=\"item.secondAddressLocation!=null\" href=\"https://www.waze.com/ul?ll={{item.secondAddressLocation.lat}},{{item.secondAddressLocation.lang}}&navigate=yes&zoom=17\">\r\n                                    <img class=\"wazeImg\" src=\"assets/img/waze.png\">\r\n                                </a>\r\n                            </div>\r\n                            <div *ngIf=\"item.liftNeed === true\" class=\"small-black-text margin-bottom-five\">\r\n                                <i class=\"fa fa-car\" aria-hidden=\"true\"></i> נדרש מעלון\r\n                            </div>\r\n                            <div *ngIf=\"item.specialEscortNeed!=''\" class=\"small-black-text margin-bottom-five\">\r\n                                <i class=\"fa fa-wheelchair\" aria-hidden=\"true\"></i> נדרש ליווי {{item.specialEscortNeed}}\r\n                            </div>\r\n                            <div *ngIf=\"item.institution\" class=\"small-gray-text margin-bottom-five\">\r\n                                المدرسة: {{item.institution.name}}, {{item.institution.address}}\r\n                            </div>\r\n                            <div *ngIf=\"item.secondInstitution\" class=\"small-gray-text margin-bottom-five\">\r\n                                المدرسة משני: {{item.secondInstitution.name}}, {{item.secondInstitution.address}}\r\n                            </div>\r\n\r\n                            <div class=\"flex\">\r\n                                <div *ngIf=\"item.fatherPhone!=null||item.motherPhone!=null\" class=\"small-black-text bold flex-big\">\r\n                                   تواصل مع اهل الطالب\r\n                                </div>\r\n                                <div>\r\n                                    <a *ngIf=\"item.fatherPhone!=null\" [href]=\"'tel:'+ item.fatherPhone\">\r\n                                        <img src=\"assets/img/man.png\" alt=\"\">\r\n                                    </a>\r\n\r\n                                    <a *ngIf=\"item.motherPhone!=null\" [href]=\"'tel:'+ item.motherPhone\">\r\n                                        <img src=\"assets/img/woman.png\" alt=\"\">\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <app-trip-footer [active]=\"'my-trip'\"></app-trip-footer>\r\n</section>\r\n\r\n\r\n<!-- TOKEN: <div>{{accompSvc.accompenie.fireBaseDeviceToken}}</div> -->\r\n<!-- popup -->\r\n<div class=\"popup-overlay\" *ngIf=\"popupSubject == 4\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"black-title bold marginBottom\">لم يحضر</div>\r\n            <div class=\"marginBottom\">\r\n                <app-custom-select [title]=\"'السبب'\" [options]=\"options\" [isRequired]=\"selectedReason==undefined&&requiredReason\" (selected)=\"getSelectedReason($event)\">\r\n                </app-custom-select>\r\n                <small>* حقل مطلوب</small>\r\n            </div>\r\n\r\n            <div class=\"marginBottom\">\r\n                <textarea name=\"desc\" [ngClass]=\"{required: selectedReason==100000004 && !reasonDesc && requiredReason}\" [(ngModel)]=\"reasonDesc\" placeholder=\"التفاصيل\">\r\n              </textarea>\r\n                <small *ngIf=\"selectedReason==100000004\">* حقل مطلوب</small>\r\n            </div>\r\n\r\n            <div class=\"flex\">\r\n                <input (click)=\"notCollected()\" class=\"blue-btn\" type=\"button\" value=\"استمرار\">\r\n                <div (click)=\"popupSubject = null;clearNotCollectedFields()\" class=\"popup-cancel-btn\">الغاء</div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--פופאפ האם לבטל את הפעולה-->\r\n<div class=\"popup-overlay\" *ngIf=\"popupCancelAction\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n            <div class=\"black-title\">هل أنت متأكد أنك تريد التراجع؟</div>\r\n            <br><br>\r\n            <div class=\"flex\">\r\n                <input (click)=\"changeStatusBack()\" class=\"blue-btn\" type=\"button\" value=\"نعم\">\r\n                <div (click)=\"popupCancelAction=false\" class=\"popup-cancel-btn\">لا</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"popup-overlay\" *ngIf=\"popupSubjectClose\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"black-title\">هل اكملت السفرية و  قمت بالتحقق من جميع الطلاب  ؟</div>\r\n            <br>\r\n            <!-- <div>פעולה זו תחל את הדיווח עבור הנסיעה הנבחרת</div> -->\r\n            <br>\r\n            <div class=\"flex\">\r\n                <!-- routerLink=\"/prev-start-trip\" -->\r\n                <input (click)=\"closeTripSync()\" class=\"blue-btn\" type=\"button\" value=\" انهاء \">\r\n                <div (click)=\"popupSubjectClose=false\" class=\"popup-cancel-btn\">الغاء</div>\r\n            </div>\r\n            <!-- <br> {{iii}} -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"updateStudentsStatusPopup\" class=\"popup-overlay\" *ngIf=\"updateStudentsStatusPopup\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"black-title\">يجب التاكد من حضور / عدم حضور جميع الطلبة</div>\r\n            <br>\r\n            <div style=\"display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;\" *ngFor=\"let item of studentListToUpdateStatus;\">\r\n                <div> {{item.name}} <small>{{item.address}}</small></div>\r\n                <!-- <div>כתובת: {{item.address}}</div> -->\r\n                <br>\r\n\r\n            </div>\r\n            <br>\r\n            <div id=\"buttonDiv\">\r\n                <button (click)=\"updateStudentsStatusPopup=false\">اغلاق</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

        /***/
    }),

    /***/ "./src/app/pages/my-trip/my-trip.component.scss":
    /*!******************************************************!*\
  !*** ./src/app/pages/my-trip/my-trip.component.scss ***!
  \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".accordion-wraper {\n  padding: 8px 0px;\n  overflow-x: hidden;\n  transition: background-color 0.5s; }\n\n.status1 .accordion-wraper.swipe {\n  background-color: #2FA84F; }\n\n.status100000000 .accordion-wraper.swipe {\n  background-color: #711BF0; }\n\n.status100000002.accordion-wraper.swipe {\n  background-color: #0F7071; }\n\n.accor-inner-wraper {\n  border-radius: 5px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 8px rgba(148, 148, 148, 0.24); }\n\n.accor-title-wraper {\n  align-items: center;\n  display: flex;\n  background-color: white;\n  height: 30px;\n  padding: 10px 0px;\n  font-size: 18px;\n  border-radius: 5px;\n  position: relative;\n  transition: background-color 1s; }\n\n.accor-content-wraper {\n  border-radius: 5px; }\n\n.accor-panel-inner {\n  padding: 10px 0px; }\n\n.accor-panel.active {\n  max-height: 250px; }\n\n.accor-title-right {\n  margin-right: 10px;\n  width: 45%;\n  display: flex;\n  align-items: center; }\n\n.accor-title-middle {\n  width: 25%;\n  text-align: center; }\n\n.accor-title-left-inner {\n  float: left;\n  margin: 9px 10px; }\n\n.accor-title-left {\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: 0;\n  border-radius: 5px 0px 0px 5px;\n  width: calc(30% - 10px); }\n\n.status100000001 .accor-title-left-inner {\n  color: #FFFFFF; }\n\n.status100000001 .accor-title-left {\n  background: #219653;\n  border-radius: 4px; }\n\n.status100000001 .v-icon {\n  display: inline;\n  margin-right: 5px; }\n\nsection {\n  padding: 10px 0px; }\n\n.short-btn {\n  height: 33px;\n  padding: 0px 10px;\n  margin-right: 9px;\n  background: #219653; }\n\n.collected-left {\n  width: 57px;\n  background-color: #420799; }\n\n.wating-left {\n  width: 57px;\n  background-color: #0F7071; }\n\n.margin-main-content {\n  margin-top: 40px; }\n\n.close-trip-btn {\n  background-color: red;\n  letter-spacing: 0.75px;\n  height: 45px;\n  padding: 0px 15px;\n  font-size: 16px;\n  margin-right: 10px; }\n\n.header-title {\n  flex: 2 0 0; }\n\n.header-left {\n  flex: 1 0 0; }\n\n.popup-overlay .blue-btn {\n  width: 100px; }\n\n.not-collected-left {\n  display: none; }\n\n.collected-left {\n  display: none; }\n\n.wating-left {\n  display: none; }\n\n.got-down-left {\n  display: none; }\n\n.status1 .not-collected-left {\n  display: block; }\n\n.status100000000 .collected-left {\n  display: block; }\n\n.status100000001 .got-down-left {\n  display: flex; }\n\n.status100000002 .wating-left {\n  display: block; }\n\n.back-v {\n  position: absolute;\n  top: 20px;\n  right: 10px; }\n\n#updateStudentsStatusPopup {\n  text-align: center; }\n\n#updateStudentsStatusPopup button {\n    background-color: white;\n    border: none;\n    color: black;\n    padding: 16px 32px;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer; }\n\n.blue-btn {\n  padding: 0px; }\n\n#updateStudentsStatusPopup .popup-box {\n  max-height: 80%; }\n\n.wazeImg {\n  height: 25px; }\n\n.marginBottom {\n  margin-bottom: 25px; }\n\n.required {\n  border: 1px solid red; }\n\n.linkDisabled {\n  pointer-events: none;\n  cursor: not-allowed; }\n\n.schoolbusExtention {\n  display: flex;\n  position: relative;\n  justify-content: flex-end; }\n\n.schoolbusExtention .schoolbusDiv {\n    z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktdHJpcC9DOlxcQml0Ym9ja2V0UHJvamVjdHNcXG1nYXItYWNjb21wYW5pZXMtYW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXG15LXRyaXBcXG15LXRyaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlDQUFpQyxFQUFBOztBQUlyQztFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLGtCQUFrQjtFQUVsQixtQkFBbUI7RUFDbkIsaURBQWlELEVBQUE7O0FBR3JEO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFnQnBCO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFIN0I7SUFLUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS10cmlwL215LXRyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uLXdyYXBlciB7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xyXG59XHJcblxyXG4vLyBub3RDb2xsZWN0ZWQgPSAxLCBjb2xsZWN0ZWQgPSAyLCBnb3REb3duID0gMywgd2FpdGluZyA9IDRcclxuLnN0YXR1czEgLmFjY29yZGlvbi13cmFwZXIuc3dpcGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGQTg0RjtcclxufVxyXG5cclxuLnN0YXR1czEwMDAwMDAwMCAuYWNjb3JkaW9uLXdyYXBlci5zd2lwZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzExQkYwO1xyXG59XHJcblxyXG4uc3RhdHVzMTAwMDAwMDAyLmFjY29yZGlvbi13cmFwZXIuc3dpcGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGNzA3MTtcclxufVxyXG5cclxuLy8gd2F0aW5nLWxlZnRcclxuLmFjY29yLWlubmVyLXdyYXBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMTQ4LCAxNDgsIDE0OCwgMC4yNCk7XHJcbn1cclxuXHJcbi5hY2Nvci10aXRsZS13cmFwZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcclxufVxyXG5cclxuLmFjY29yLWNvbnRlbnQtd3JhcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmFjY29yLXBhbmVsLWlubmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4uYWNjb3ItcGFuZWwuYWN0aXZlIHtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uYWNjb3ItdGl0bGUtcmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjb3ItdGl0bGUtbWlkZGxlIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY2Nvci10aXRsZS1sZWZ0LWlubmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA5cHggMTBweDtcclxufVxyXG5cclxuLmFjY29yLXRpdGxlLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMzAlIC0gMTBweCk7XHJcbn1cclxuXHJcbi5zdGF0dXMxMDAwMDAwMDEgLmFjY29yLXRpdGxlLWxlZnQtaW5uZXIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5zdGF0dXMxMDAwMDAwMDEgLmFjY29yLXRpdGxlLWxlZnQge1xyXG4gICAgYmFja2dyb3VuZDogIzIxOTY1MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnN0YXR1czEwMDAwMDAwMSAudi1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4uc2hvcnQtYnRuIHtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NjUzO1xyXG59XHJcblxyXG4uY29sbGVjdGVkLWxlZnQge1xyXG4gICAgd2lkdGg6IDU3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIwNzk5O1xyXG59XHJcblxyXG4ud2F0aW5nLWxlZnQge1xyXG4gICAgd2lkdGg6IDU3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY3MDcxO1xyXG59XHJcblxyXG4ubWFyZ2luLW1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4vLyAuY2xvc2UtdHJpcC1idG4ge1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcclxuLy8gICAgIGNvbG9yOiAjMkI1OUFDO1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcclxuLy8gICAgIGhlaWdodDogNDVweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICMyQjU5QUM7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuLmNsb3NlLXRyaXAtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjc1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBmbGV4OiAyIDAgMDtcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IHtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG59XHJcblxyXG4ucG9wdXAtb3ZlcmxheSAuYmx1ZS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubm90LWNvbGxlY3RlZC1sZWZ0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xsZWN0ZWQtbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ud2F0aW5nLWxlZnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmdvdC1kb3duLWxlZnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN0YXR1czEgLm5vdC1jb2xsZWN0ZWQtbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN0YXR1czEwMDAwMDAwMCAuY29sbGVjdGVkLWxlZnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdGF0dXMxMDAwMDAwMDEgLmdvdC1kb3duLWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnN0YXR1czEwMDAwMDAwMiAud2F0aW5nLWxlZnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5iYWNrLXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiN1cGRhdGVTdHVkZW50c1N0YXR1c1BvcHVwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibHVlLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiN1cGRhdGVTdHVkZW50c1N0YXR1c1BvcHVwIC5wb3B1cC1ib3gge1xyXG4gICAgbWF4LWhlaWdodDogODAlO1xyXG59XHJcblxyXG4ud2F6ZUltZyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmxpbmtEaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5zY2hvb2xidXNFeHRlbnRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAuc2Nob29sYnVzRGl2IHtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxufSJdfQ== */"

        /***/
    }),

    /***/ "./src/app/pages/my-trip/my-trip.component.ts":
    /*!****************************************************!*\
  !*** ./src/app/pages/my-trip/my-trip.component.ts ***!
  \****************************************************/
    /*! exports provided: MyTripComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MyTripComponent", function () {
            return MyTripComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _services_loaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loaction.service */ "./src/app/services/loaction.service.ts");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/date-helper */ "./src/app/helpers/date-helper.ts");
        /* harmony import */
        var src_app_components_location_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/location/location.component */ "./src/app/components/location/location.component.ts");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


        var MyTripComponent = /** @class */ (function () {
            function MyTripComponent(locationSvc, accompSvc, activityRoute, router, locationcomp) {
                var _this = this;
                this.locationSvc = locationSvc;
                this.accompSvc = accompSvc;
                this.activityRoute = activityRoute;
                this.router = router;
                this.locationcomp = locationcomp;
                this.studentList = [];
                this.studentListToUpdateStatus = [];
                this.requiredReason = false;
                this.iii = 0;
                this.updateStudentsStatusPopup = false;
                this.enableSchoolbus = false;
                this.offline = false;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1000 * 1).subscribe(function (x) {
                    _this.offline = !navigator.onLine;
                    ;
                  //  console.log(_this.offline);
                });
                this.accompSvc.setRequestsQueue();
                /*schoolbus*/
                /*
        //for test
        var schoolbusObj = {
          "attendantID": "637b5a737e52e3b2d0fe8980",
          "teamID": "637b5abe7e52e3b2d0fe8984",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdHRlbmRhbnRhIjoiMTIzNDU2NzgyIiwiaWF0IjoxNjcxNTI1MDczLCJleHAiOjE2NzE2MTE0NzN9.a3-j8ugEiA2CZeDjvzJaYCzUClimArAW5z7FQxMUp7k"
        };
        this.enableSchoolbus = true;
        this.accompSvc.isSchoolbusTrip = this.enableSchoolbus;
        //NativeApp.SaveSchoolbusDataInWebView(schoolbusObj.attendantID, schoolbusObj.teamID, schoolbusObj.token);
        */
                //production
                this.accompSvc.getSchoolbusToken().subscribe(function (res) {
                    _this.enableSchoolbus = res != null;
                    // alert(this.enableSchoolbus);
                    _this.accompSvc.isSchoolbusTrip = _this.enableSchoolbus;
                    var schoolbusObj = JSON.parse(res);
                    // alert(schoolbusObj.attendantID + " , " + schoolbusObj.teamID + " , " + schoolbusObj.token);
                  //  NativeApp.SaveSchoolbusDataInWebView(schoolbusObj.attendantID, schoolbusObj.teamID, schoolbusObj.token);
                }, function (err) {
                    alert("שגיאה מול סקולבס: " + err.error.ExceptionMessage);
                });
            }

            MyTripComponent.prototype.ngOnDestroy = function () {
            };
            MyTripComponent.prototype.openSchoolbusSite = function () {
                localStorage.setItem("lastRideId", this.currentTrip.ID);
             //   NativeApp.OpenSchoolbusSite();
            };
            Object.defineProperty(MyTripComponent.prototype, "model", {
                set: function (value) {
                    this.accompSvc.accompenie = value;
                },
                enumerable: true,
                configurable: true
            });

            var notCollectedReasonListArabic = {
                "התלמיד איחר והנהג המשיך בנסיעה"   : "تأخر الطالب واستمر السائق في القيادة",
                "התלמיד לא מגיע ללימודים"   : "لا يأتي الطالب إلى المدرسة",
                "התלמיד יגיע עצמאית למוסד"   : "سيأتي الطالب إلى المؤسسة بشكل مستقل",
                "התלמיד לא נוסע במסלול"   : "الطالب لا ينتمي الى هذه السفرية",
                "אחר – הקלדת טקסט חופשי"   : "سبب اخر",
            };

            Object.defineProperty(MyTripComponent.prototype, "options", {
                get: function () {
                    for( var key in this.accompSvc.accompenie.notCollectedReasonList)  {
                        if(notCollectedReasonListArabic[this.accompSvc.accompenie.notCollectedReasonList[key].text] != undefined){
                              this.accompSvc.accompenie.notCollectedReasonList[key].text = notCollectedReasonListArabic[this.accompSvc.accompenie.notCollectedReasonList[key].text];
                        }
                     }
                    return this.accompSvc.accompenie.notCollectedReasonList;
                },
                enumerable: true,
                configurable: true
            });
            MyTripComponent.prototype.getDataFromAccompanySVC = function (tripId) {
                this.currentTrip = this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == tripId;
                });
                this.studentList = this.currentTrip.students;
                //this.studentList.sort((a, b) => (a.order > b.order) ? 1 : -1)
                this.totalCount = this.studentList.filter(function (s) {
                    return s.status == 100000000 || s.status == 1;
                }).length;
            };
            MyTripComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.activityRoute.params.subscribe(function (param) {
                    _this.tripId = param['id'];
                    _this.rideId = param['id'];
                    _this.getDataFromAccompanySVC(_this.tripId);
                    if (_this.currentTrip.type == 1)
                        _this.address = ' איסוף ל' + _this.currentTrip.rideName;
                    else
                        _this.address = ' פיזור ל' + _this.currentTrip.rideName;
                });
                if (this.studentList.length > 0)
                    this.studentList.forEach(function (x) {
                        return x["swipe"] = 0;
                    });
            };
            // notCollected = 1, collected = 2, gotDown = 3, waiting = 4
            MyTripComponent.prototype.onPanStart = function (event) {
                this.startXswipe = event.center.x;
            };
            MyTripComponent.prototype.onPanEnd = function (event, index) {
                var item = this.studentList[index];
                item.swipe = 0;
                if ((this.startXswipe - event.center.x) > 50) {
                    this.updateStatus(index);
                }
            };
            MyTripComponent.prototype.updateStatus = function (index) {
                var _this = this;
                this.accompSvc.changeStudentStatus(index, this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                }));
                this.getDataFromAccompanySVC(this.tripId);
            };
            MyTripComponent.prototype.checkPrevStatus = function (prev, current) {
                switch (prev) {
                    case 100000000:
                        if (current == 100000001)
                            return 'yes';
                        else if (current == 1)
                            return 'no';
                        break; //collected
                    case 100000001:
                        return 'no';
                        break; //got down
                    case 100000002:
                        return 'no';
                        break; //not collected
                }
            };
            MyTripComponent.prototype.changeStatus = function (index) {
                this.updateStatus(index);
            };
            MyTripComponent.prototype.changeStatusBack = function () {
                var _this = this;
                var student = this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                }).students[this.cancelIndexStudent];
                var item = this.studentList[this.cancelIndexStudent];
                this.status = item.status;
                switch (item.status) {
                    case 100000002:
                    case 100000000:
                        item.status = 1;
                        student.status = 1;
                        break;
                    case 100000001:
                        item.status = 100000000;
                        student.status = 100000000;
                        break;
                }
                this.model = this.accompSvc.accompenie;
                var rideforContact = student.rideforcontactId;
                var status = student.status;
                this.accompSvc.createReport(this.rideId, rideforContact, status, this.status, true);
                this.getDataFromAccompanySVC(this.rideId);
                this.popupCancelAction = false;
            };
            // notCollected = 1, collected = 2, gotDown = 3, waiting = 4
            MyTripComponent.prototype.onPan = function (event, index) {
                var item = this.studentList[index];
                if (event.center.x < this.startXswipe && item.status != 100000001) {
                    item.swipe = this.startXswipe - event.center.x;
                }
            };
            MyTripComponent.prototype.getSelectedReason = function (e) {
                this.selectedReason = e.value;
                this.requiredReason = false;
            };
            MyTripComponent.prototype.notCollected = function () {
                var _this = this;
                if (!this.selectedReason) {
                    this.requiredReason = true;
                    return;
                } else if (this.selectedReason == 100000004 && !this.reasonDesc) {
                    this.requiredReason = true;
                    return;
                }
                var a = this.studentList[this.indexStudent];
                a.status = 100000002;
                this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                }).students[this.indexStudent].notColectedReason = this.selectedReason;
                this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                }).students[this.indexStudent].statusDesc = this.reasonDesc;
                var item = this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                }).students[this.indexStudent];
                this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                }).students[this.indexStudent].status = 100000002;
                var loc = this.locationSvc.getLocationForReport();
                this.accompSvc.accompenie.rideReport.push({
                    rideforContactId: item.rideforcontactId,
                    statusCode: item.status,
                    longitude: loc.lang,
                    latitude: loc.lat,
                    date: src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_5__["DateHelper"].getTodayFullDate(),
                    rideId: this.rideId
                });
                this.model = this.accompSvc.accompenie;
                this.popupSubject = null;
                this.reasonDesc = null;
                // this.accompSvc.updateModelNoReturn(false);
                this.accompSvc.addItemToQueue(this.accompSvc.accompenie, false, false);
                this.totalCount = this.studentList.filter(function (s) {
                    return s.status == 100000000 || s.status == 1;
                }).length;
                // window.location.reload();
                // this.createReport(this.rideId, "ghhg", status, true);
                this.clearNotCollectedFields();
            };
            MyTripComponent.prototype.clearNotCollectedFields = function () {
                this.selectedReason = undefined;
                this.reasonDesc = undefined;
            };
            MyTripComponent.prototype.checkAllStudentStatus = function () {
                this.studentListToUpdateStatus = this.studentList.filter(function (s) {
                    return s.status != 100000001 && s.status != 100000002;
                });
                if (this.studentListToUpdateStatus.length > 0) {
                    this.updateStudentsStatusPopup = true;
                } else {
                    this.updateStudentsStatusPopup = false;
                    this.popupSubjectClose = true;
                }
            };
            //close trip
            MyTripComponent.prototype.closeTrip = function (e) {
                var _this = this;
                this.iii++;
                try {
                    NativeApp.WriteToAnalyticsOnCloseRide();
                } catch (error) {
                }
                this.accompSvc.loadData.emit(true);
                this.accompSvc.stopTrackingTrip();
                var trip = this.accompSvc.accompenie.trips.find(function (t) {
                    return t.ID == _this.tripId;
                });
                trip.endRide = src_app_helpers_date_helper__WEBPACK_IMPORTED_MODULE_5__["DateHelper"].getTodayFullDate();
                trip.statuscode = 3;
                var tmpLoc = this.locationSvc.getLocation(false);
                trip.latitudeEnding = tmpLoc.lastLocation.lat;
                trip.longitudeEnding = tmpLoc.lastLocation.lang;
                this.accompSvc.addItemToQueue(this.accompSvc.accompenie, true, false, function () {
                    _this.router.navigate(['/my-trips']);
                    _this.accompSvc.loadData.emit(false);
                    _this.accompSvc.stopQueueInterval();
                }, function () {
                    _this.router.navigate(['/my-trips']);
                    _this.accompSvc.loadData.emit(false);
                });
                /*this.accompSvc.updateModelWithEmit(false, () => {
          // this.popupSubjectClose = false;
          // this.model = this.accompSvc.accompenie;
          this.router.navigate(['/my-trips']);
          this.accompSvc.loadData.emit(false);
        }, () => {
          // this.popupSubjectClose = false;
          this.router.navigate(['/my-trips']);
          this.accompSvc.loadData.emit(false);
        });*/
            };
            //close trip
            MyTripComponent.prototype.closeTripSync = function (e) {
                this.closeTrip(e);
            };
            MyTripComponent.prototype.clickEvent = function () {
                this.router.navigate(['/exceptional-event'], {queryParams: {id: this.rideId, isFromTrip: true}});
            };
            MyTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-my-trip',
                    template: __webpack_require__(/*! ./my-trip.component.html */ "./src/app/pages/my-trip/my-trip.component.html"),
                    styles: [__webpack_require__(/*! ./my-trip.component.scss */ "./src/app/pages/my-trip/my-trip.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loaction_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"], src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_components_location_location_component__WEBPACK_IMPORTED_MODULE_6__["LocationComponent"]])
            ], MyTripComponent);
            return MyTripComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pages/my-trips/my-trips.component.html":
    /*!********************************************************!*\
  !*** ./src/app/pages/my-trips/my-trips.component.html ***!
  \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n<section>\r\n    <div class=\"header\">\r\n        <div class=\"sub-header\">\r\n            <div class=\"header-title\">\r\n                سفرياتي (Ver:{{accompSvc.currentVersion}})\r\n            </div>\r\n            <div class=\"header-left\">\r\n                {{dateNow}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"header-tabs\">\r\n            <div class=\"header-tabs-item\" (click)=\"showWeekly()\" [ngClass]=\"{'active': tab == 'week'}\">\r\n                <a>\r\n                   الجدول الاسبوعي\r\n                </a>\r\n            </div>\r\n            <div class=\"header-tabs-item\" (click)=\"showDayly()\" [ngClass]=\"{'active': tab == 'day'}\">\r\n                <a>الجدول اليومي</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main-content margin-bottom-fiftee\">\r\n        <div [hidden]=\"filterDate==null\">\r\n            <app-search-student-buttons (stopRefreshing)=\"stopRefreshing($event)\" (openRideToDriving)=\"startReporting(false)\">\r\n            </app-search-student-buttons>\r\n        </div>\r\n        <div class=\"accordion-wraper\" *ngFor=\"let item of trips | filter :'date' : filterDate ;let i = index;  \">\r\n            <div class=\"center-text-gray\" *ngIf=\"prepareNextDate(item.date.split('T')[0], i)\">\r\n                {{item.date.split('T')[0]}}\r\n            </div>\r\n            <div class=\"accor-inner-wraper\" [ngClass]=\"{\r\n        'done' :item.statuscode==3,\r\n        'proccess' : item.statuscode==2,\r\n        'wait':item.statuscode==1,\r\n        'active': item.isActive\r\n        }\">\r\n\r\n                <div (click)=\"item.isActive = !item.isActive\" class=\"accor-title-wraper\">\r\n                    <div class=\"accor-title-right\">\r\n                        <i class=\"down accor-arrow\"></i>\r\n                        <div *ngIf=\"item.type == 1\">\r\n                            صباحا\r\n                        </div>\r\n                        <div *ngIf=\"item.type == 2\">\r\n                            ظهرا\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"accor-title-left\">\r\n                        <div class=\"accor-title-left-inner\">\r\n                            <div>\r\n                                {{item.hour}}\r\n                            </div>\r\n                            <div class=\"v-icon\">\r\n                                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                        d=\"M24.0553 5.73621L12.5937 17.1979L8.06534 12.6804L6.53784 14.2079L12.5937 20.2637L25.5937 7.26371L24.0553 5.73621ZM19.4622 7.26371L17.9347 5.73621L11.0663 12.6045L12.5938 14.132L19.4622 7.26371ZM6.46208 20.2637L0.40625 14.2079L1.94458 12.6804L7.98958 18.7362L6.46208 20.2637Z\"\r\n                                        fill=\"white\" />\r\n                                </svg>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"type-color\"> </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"accor-panel\" [ngClass]=\"item.isActive ? 'active' : ''\">\r\n                    <div class=\"accor-panel-inner\">\r\n                        <div id=\"wrapedFirstLine\" class=\"flexbetween\">\r\n                            <div class=\"small\">\r\n                               المسار\r\n                            </div>\r\n                            <div [hidden]=\"filterDate==null\">\r\n                                <div class=\"event-btn\">\r\n                                    <label>\r\n                                        <input (click)=\"clickEvent(item.ID)\" class=\"event\" type=\"button\"\r\n                                            value=\"  شكوى  \">\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"big\">\r\n                            {{item.rideName}}\r\n                        </div>\r\n                        <div *ngIf=\"item.driver\" id=\"driverDetails\">\r\n                            <span>שם הנהג: </span>\r\n                            <span> {{item.driver.name}} </span>\r\n                            <span *ngIf=\"item.driver.phone && tab == 'day'\">\r\n                                <a [href]=\"'tel:'+ item.driver.phone\">\r\n                                    <img src=\"assets/img/call-driver.svg\" alt=\"\">\r\n                                </a>\r\n                            </span>\r\n                        </div>\r\n                        <div *ngIf=\"item.carNumber\">מספר רכב: {{item.carNumber}}</div>\r\n                        <div class=\"big margin-top-10\">\r\n                            عدد الطلاب : {{item.students.length}}\r\n                        </div>\r\n                        <div [hidden]=\"filterDate==null\">\r\n\r\n                            <input (click)=\"openModal(item)\" type=\"button\" class=\"blue-btn\" value=\"התחל דווח\" [hidden]=\"item.statuscode!=1\">\r\n                            <input (click)=\"openStudentsModal(item)\" type=\"button\" class=\"blue-btn\" style=\"background-color: green;margin-left: 10px;\" value=\"قائمة الطلاب\" [hidden]=\"item.statuscode!=1\">\r\n                            <!-- 1 up  -->\r\n                            <input (click)=\"continueReport(item)\" type=\"button\" class=\"blue-btn\" value=\"الاستمرار\" [hidden]=\"item.statuscode!=2\">\r\n                        </div>\r\n                        <div [hidden]=\"filterDate!=null\">\r\n\r\n                            <input (click)=\"openStudentsModal(item)\" type=\"button\" class=\"blue-btn\" style=\"background-color: green;margin-left: 10px;\" value=\"قائمة الطلاب\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <app-trip-footer [active]=\"'my-trips'\"></app-trip-footer>\r\n\r\n\r\n</section>\r\n\r\n<!-- popup -->\r\n<div class=\"popup-overlay\" *ngIf=\"popupSubject == 'continue'\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"black-title\">האם ברצונך להמשיך?</div>\r\n            <br>\r\n            <div>פעולה זו תחל את הדיווח עבור הנסיעה הנבחרת</div>\r\n            <br>\r\n            <div class=\"small-faded-text\">\r\n                <div>{{rideName}}</div>\r\n                <!-- <div>{{startTime | date : 'hh:mm'}}</div> -->\r\n                <div>{{startTime}}</div>\r\n\r\n            </div>\r\n            <div class=\"flex\">\r\n                <!-- routerLink=\"/prev-start-trip\" -->\r\n                <input (click)=\"startReporting()\" class=\"blue-btn\" type=\"button\" value=\"התחל דווח\">\r\n                <div (click)=\"closePopup()\" class=\"popup-cancel-btn\">الغاء</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"studentsListPopup\" class=\"popup-overlay\" *ngIf=\"popupSubject == 'students'\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"black-title\">תלמידים</div>\r\n            <br>\r\n\r\n            <div style=\"display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;\" *ngFor=\"let item of students;\">\r\n                <div>اسم الطالب: {{item.name}}</div>\r\n                <div *ngIf=\"item.fatherPhone !='' \">هاتف الاب:{{item.fatherPhone}}</div>\r\n                <div *ngIf=\"item.motherPhone !='' \">هاتف الام: {{item.motherPhone}}</div>\r\n                <div>العنوان: {{item.studentAddress}}</div>\r\n                <div *ngIf=\"item.liftNeed === true\"><i class=\"fa fa-car\" aria-hidden=\"true\"></i> مطلوب معلون</div>\r\n                <div *ngIf=\"item.specialEscortNeed!=''\"><i class=\"fa fa-wheelchair\" aria-hidden=\"true\"></i> נדרש ליווי {{item.specialEscortNeed}}\r\n                </div>\r\n\r\n                <br>\r\n\r\n            </div>\r\n            <br>\r\n            <div id=\"buttonDiv\">\r\n                <button (click)=\"closePopup()\">اغلاق</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

        /***/
    }),

    /***/ "./src/app/pages/my-trips/my-trips.component.scss":
    /*!********************************************************!*\
  !*** ./src/app/pages/my-trips/my-trips.component.scss ***!
  \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".accor-inner-wraper {\n  border-radius: 5px;\n  margin-bottom: 15px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 8px rgba(8, 35, 48, 0.24); }\n\n.accor-title-wraper {\n  align-items: center;\n  display: flex;\n  background-color: white;\n  height: 30px;\n  padding: 10px 0px;\n  font-size: 18px;\n  border-radius: 5px;\n  position: relative;\n  transition: background-color 1s; }\n\n.accor-content-wraper {\n  border-radius: 5px; }\n\n.accor-panel {\n  padding: 0px 18px;\n  background-color: white;\n  max-height: 0px;\n  overflow: hidden;\n  transition: max-height 0.3s linear;\n  border-radius: 5px; }\n\n.accor-panel.active {\n  max-height: 300px; }\n\n.accor-panel-inner {\n  padding: 10px 0px; }\n\n.accor-title-right {\n  margin-right: 10px;\n  width: 70%;\n  display: flex;\n  align-items: center; }\n\n.active .accor-arrow {\n  border-color: white; }\n\n.active.wait .accor-title-wraper {\n  color: #FFFFFF;\n  background-color: #F2994A; }\n\n.active.proccess .accor-title-wraper {\n  color: #FFFFFF;\n  background-color: #219653; }\n\n.active.done .accor-title-wraper {\n  color: #FFFFFF;\n  background-color: #069697; }\n\n.accor-panel .small {\n  font-size: 12px; }\n\n.accor-panel .big {\n  font-size: 18px;\n  max-height: 70px;\n  overflow: hidden; }\n\n.accor-panel .blue-btn {\n  float: left;\n  margin: 10px 0px 10px -10px; }\n\n#wrapedFirstLine {\n  text-align: end;\n  align-items: center; }\n\n.event-btn {\n  width: 160px;\n  padding-bottom: 3%;\n  margin-bottom: 10px; }\n\n.event {\n  width: 130px;\n  height: 35px;\n  color: black; }\n\n.svgEvent {\n  width: 5px;\n  float: right;\n  padding-left: 25px;\n  padding-top: 15px; }\n\nlabel {\n  position: relative; }\n\nlabel:before {\n  background-size: cover;\n  content: \"\";\n  position: absolute;\n  left: 12px;\n  top: 3px;\n  bottom: 0;\n  width: 14px;\n  background-image: url('alert.svg');\n  margin-left: 100px;\n  height: 14px; }\n\n@media screen and (max-width: 360px) {\n  label:before {\n    background-size: cover;\n    content: \"\";\n    position: absolute;\n    left: 15px;\n    top: 3px;\n    bottom: 0;\n    width: 14px;\n    background-image: url('alert.svg');\n    margin-left: 100px;\n    height: 14px; }\n  .event {\n    width: 136px;\n    height: 35px;\n    color: black; } }\n\n.accor-title-left-inner {\n  display: flex;\n  float: left;\n  margin: 0px 10px;\n  -webkit-transform: translateY(65%);\n          transform: translateY(65%); }\n\n.done .accor-title-left-inner {\n  color: #FFFFFF;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%); }\n\n.accor-title-left {\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: 0;\n  border-radius: 5px 0px 0px 5px;\n  width: 30%; }\n\n.done .accor-title-left {\n  background-color: #069697; }\n\n.v-icon {\n  display: none; }\n\n.done .v-icon {\n  display: inline;\n  margin-right: 5px; }\n\n.accor-title-left img {\n  margin-right: 10px; }\n\n.type-color {\n  display: none; }\n\n.wait .type-color {\n  display: inline;\n  position: absolute;\n  width: 9px;\n  background-color: #F2994A;\n  height: 100%;\n  left: 0px;\n  border-radius: 5px 0px 0px 5px; }\n\n.proccess .type-color {\n  display: inline;\n  position: absolute;\n  width: 9px;\n  background-color: #219653;\n  height: 100%;\n  left: 0px;\n  border-radius: 5px 0px 0px 5px; }\n\n.wait .type-color-active {\n  display: inline;\n  position: absolute;\n  width: 9px;\n  background-color: #F2994A;\n  height: 100%;\n  left: 0px;\n  border-radius: 5px 0px 0px 5px; }\n\n.proccess .type-color-active {\n  display: inline;\n  position: absolute;\n  width: 9px;\n  background-color: #219653;\n  height: 100%;\n  left: 0px;\n  border-radius: 5px 0px 0px 5px; }\n\nhr {\n  border-top: 1px solid red; }\n\n#driverDetails a {\n  margin-right: 5px; }\n\n#studentsListPopup .popup-box {\n  max-height: 70%; }\n\n#studentsListPopup .black-title {\n  text-align: center; }\n\n#studentsListPopup #buttonDiv {\n  text-align: center; }\n\n#studentsListPopup button {\n  background-color: white;\n  border: none;\n  color: black;\n  padding: 16px 32px;\n  text-align: center;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktdHJpcHMvQzpcXEJpdGJvY2tldFByb2plY3RzXFxtZ2FyLWFjY29tcGFuaWVzLWFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxteS10cmlwc1xcbXktdHJpcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2Q0FBNkMsRUFBQTs7QUFHakQ7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUViLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLCtCQUErQixFQUFBOztBQUduQztFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFLSSxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxrQ0FBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFZaEI7RUFDSTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxrQ0FBb0Q7SUFDcEQsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQUVoQjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWSxFQUFBLEVBQ2Y7O0FBR0w7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUVoQixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksY0FBYztFQUVkLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxNQUFNO0VBQ04sOEJBQThCO0VBQzlCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUV6QixZQUFZO0VBQ1osU0FBUztFQUNULDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUV6QixZQUFZO0VBQ1osU0FBUztFQUNULDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUV6QixZQUFZO0VBQ1osU0FBUztFQUNULDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUV6QixZQUFZO0VBQ1osU0FBUztFQUNULDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGlCQUFpQixFQUFBOztBQUlyQjtFQUVRLGVBQWUsRUFBQTs7QUFGdkI7RUFLUSxrQkFBa0IsRUFBQTs7QUFMMUI7RUFRUSxrQkFBa0IsRUFBQTs7QUFSMUI7RUFXUSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktdHJpcHMvbXktdHJpcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3ItaW5uZXItd3JhcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg4LCAzNSwgNDgsIDAuMjQpO1xyXG59XHJcblxyXG4uYWNjb3ItdGl0bGUtd3JhcGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XHJcbn1cclxuXHJcbi5hY2Nvci1jb250ZW50LXdyYXBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hY2Nvci1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWF4LWhlaWdodDogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBsaW5lYXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hY2Nvci1wYW5lbC5hY3RpdmUge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5hY2Nvci1wYW5lbC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG5cclxuLmFjY29yLXRpdGxlLXJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZSAuYWNjb3ItYXJyb3cge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjdGl2ZS53YWl0IC5hY2Nvci10aXRsZS13cmFwZXIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI5OTRBO1xyXG59XHJcblxyXG4uYWN0aXZlLnByb2NjZXNzIC5hY2Nvci10aXRsZS13cmFwZXIge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NjUzO1xyXG59XHJcblxyXG4uYWN0aXZlLmRvbmUgLmFjY29yLXRpdGxlLXdyYXBlciB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjk2OTc7XHJcbn1cclxuXHJcbi5hY2Nvci1wYW5lbCAuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWNjb3ItcGFuZWwgLmJpZyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFjY29yLXBhbmVsIC5ibHVlLWJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAtMTBweDtcclxufVxyXG5cclxuI3dyYXBlZEZpcnN0TGluZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXZlbnQtYnRuIHtcclxuICAgIC8vbWFyZ2luOiAxMHB4IDBweCA1cHggMHB4OyAgIFxyXG4gICAgLy8gcGFkZGluZzogMjJweCAwcHggMHB4IDBweDtcclxuICAgIC8vaGVpZ2h0OiAzNHB4O1xyXG4gICAgLy9wYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgLy8gZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZXZlbnQge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3ZnRXZlbnQge1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmxhYmVsOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYWxlcnQuc3ZnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC8vIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBsZWZ0OiAxMHB4O1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gYm90dG9tOiAwO1xyXG4gICAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9hbGVydC5zdmcpO1xyXG4gICAgLy8gLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgbGFiZWw6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2FsZXJ0LnN2Zyk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgIH1cclxuICAgIC5ldmVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY2Nvci10aXRsZS1sZWZ0LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDY1JSk7XHJcbn1cclxuXHJcbi5kb25lIC5hY2Nvci10aXRsZS1sZWZ0LWlubmVyIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbn1cclxuXHJcbi5hY2Nvci10aXRsZS1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5kb25lIC5hY2Nvci10aXRsZS1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjk2OTc7XHJcbn1cclxuXHJcbi52LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRvbmUgLnYtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmFjY29yLXRpdGxlLWxlZnQgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnR5cGUtY29sb3Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLndhaXQgLnR5cGUtY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMjk5NEE7XHJcbiAgICA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5wcm9jY2VzcyAudHlwZS1jb2xvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTY1MztcclxuICAgIDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLndhaXQgLnR5cGUtY29sb3ItYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI5OTRBO1xyXG4gICAgO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4ucHJvY2Nlc3MgLnR5cGUtY29sb3ItYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NjUzO1xyXG4gICAgO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4jZHJpdmVyRGV0YWlscyBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vLyAvL3BvcHVwXHJcbiNzdHVkZW50c0xpc3RQb3B1cCB7XHJcbiAgICAucG9wdXAtYm94IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbiAgICAuYmxhY2stdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICNidXR0b25EaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"

        /***/
    }),

    /***/ "./src/app/pages/my-trips/my-trips.component.ts":
    /*!******************************************************!*\
  !*** ./src/app/pages/my-trips/my-trips.component.ts ***!
  \******************************************************/
    /*! exports provided: MyTripsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MyTripsComponent", function () {
            return MyTripsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _services_loaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loaction.service */ "./src/app/services/loaction.service.ts");
        /* harmony import */
        var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/date-helper */ "./src/app/helpers/date-helper.ts");
        /* harmony import */
        var _services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var src_app_components_location_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/location/location.component */ "./src/app/components/location/location.component.ts");
        /* harmony import */
        var _prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../prev-start-trip/prev-start-trip.component */ "./src/app/pages/prev-start-trip/prev-start-trip.component.ts");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /* harmony import */
        var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
        /* harmony import */
        var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
        /* harmony import */
        var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");


        var MyTripsComponent = /** @class */ (function () {
            function MyTripsComponent(locationSvc, accompSvc, router, locationcomp, prevComp, dialog, filterPipe) {
                this.locationSvc = locationSvc;
                this.accompSvc = accompSvc;
                this.router = router;
                this.locationcomp = locationcomp;
                this.prevComp = prevComp;
                this.dialog = dialog;
                this.filterPipe = filterPipe;
                this.prev = [];
                this.students = [];
                this.today = _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].getTodayDate();
                this.showDayly();
                this.dateNow = _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].getTodayDateShort();
                // this.accompSvc.resetGPSCounter();
            }

            MyTripsComponent.prototype.ngOnDestroy = function () {
                this.timer.unsubscribe();
            };
            MyTripsComponent.prototype.stopRefreshing = function (tostop) {
                if (tostop) {
                    this.timer.unsubscribe();
                } else {
                    this.subscribeTimer();
                }
            };
            MyTripsComponent.prototype.subscribeTimer = function () {
                var _this = this;
                this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(60000).subscribe(function () {
                    if (!_this.accompSvc.requestsQueueIntervalSubscribe) {
                        _this.RefreshData(false);
                    }
                });
            };
            Object.defineProperty(MyTripsComponent.prototype, "trips", {
                get: function () {
                    this.orderTodayTripsDate();
                    return this.accompSvc.accompenie.trips;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MyTripsComponent.prototype, "model", {
                set: function (value) {
                    this.accompSvc.accompenie = value;
                },
                enumerable: true,
                configurable: true
            });
            MyTripsComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.accompSvc.isSchoolbusTrip = false;
                if (this.accompSvc.needToGetDataFromAPI) {
                    // this.accompSvc.getDataFromApi();
                    this.RefreshData(true);
                    this.accompSvc.needToGetDataFromAPI = false;
                    var lastRideId = localStorage.getItem("lastRideId");
                    if (lastRideId != null && lastRideId != "") {
                        var item = this.accompSvc.accompenie.trips.find(function (x) {
                            return x.ID == lastRideId;
                        });
                        localStorage.setItem("lastRideId", "");
                        this.continueReport(item);
                    }
                }
                this.subscribeTimer();
                if (navigator.onLine) {
                    // waiting for push token befour update model. after 5 seconds - update anyway 
                    this.accompSvc.setPushToken();
                    this.accompSvc.pushTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(function (res) {
                        _this.accompSvc.updateModelNoReturn(false);
                    });
                }
                //this.orderTripsDate();    
            };
            MyTripsComponent.prototype.RefreshData = function (showLoading) {
                this.accompSvc.updateModelWithEmit(showLoading);
            };
            MyTripsComponent.prototype.orderTodayTripsDate = function () {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.accompSvc.accompenie.trips)) {
                    this.accompSvc.accompenie.trips = this.accompSvc.accompenie.trips.sort(function (date1, date2) {
                        var fullHour1 = parseInt(date1.hour.replace(":", "")); //מקבל את השעה המלאה של הנסיעה
                        var hh1 = Math.floor(fullHour1 / 100); // מקבל את השעה
                        var mm1 = fullHour1 % 100; //מקבל את הדקות
                        var d1 = new Date(date1.date);
                        d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), hh1, mm1, 0);
                        var fullHour2 = parseInt(date2.hour.replace(":", ""));
                        var hh2 = Math.floor(fullHour2 / 100); // מקבל את השעה
                        var mm2 = fullHour2 % 100; //מקבל את הדקות
                        var d2 = new Date(date2.date);
                        d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), hh2, mm2, 0);
                        if (d1 < d2)
                            return -1;
                        return 1;
                    });
                }
            };
            MyTripsComponent.prototype.showDayly = function () {
                this.tab = 'day';
                this.filterDate = this.today;
                // this.prev = [];
            };
            MyTripsComponent.prototype.showWeekly = function () {
                this.tab = 'week';
                this.filterDate = null;
                // this.prev = [];
            };
            MyTripsComponent.prototype.clickEvent = function (tripID) {
                this.router.navigate(['/exceptional-event'], {queryParams: {id: tripID, isFromTrip: false}});
            };
            MyTripsComponent.prototype.prepareNextDate = function (date, index) {
                if (index == 0) {
                    this.prev = [];
                    this.prev.push(date);
                    return true;
                }
                var flag = false;
                this.prev.forEach(function (x) {
                    if (x == date) {
                        flag = true;
                    }
                });
                if (flag)
                    return false;
                else {
                    this.prev.push(date);
                    return true;
                }
            };
            MyTripsComponent.prototype.openModal = function (item) {
                this.timer.unsubscribe();
                // if (new Date().getHours() - new Date(item.date).getHours() < 1) {
                this.popupSubject = 'continue';
                this.rideName = item.rideName;
                if (item.hour.length == 3)
                    item.hour = item.hour.substring(0, 1) + ":" + item.hour.substring(1, 3);
                else if (item.hour.length == 4)
                    item.hour = item.hour.substring(0, 2) + ":" + item.hour.substring(1, 3);
                this.startTime = item.hour;
                this.accompSvc.currentRideID = item.ID;
                // }
            };
            MyTripsComponent.prototype.openStudentsModal = function (item) {
                this.timer.unsubscribe();
                this.popupSubject = 'students';
                this.students = item.students;
            };
            MyTripsComponent.prototype.closePopup = function () {
                this.popupSubject = null;
                this.subscribeTimer();
            };
            MyTripsComponent.prototype.getStudents = function (guid) {
                return this.accompSvc.getContacts(guid);
            };
            MyTripsComponent.prototype.startReporting = function (toNavigate, rideId) {
                if (toNavigate === void 0) {
                    toNavigate = true;
                }
                if (rideId === void 0) {
                    rideId = this.accompSvc.currentRideID;
                }
                try {
                    NativeApp.WriteToAnalyticsOnStartRide();
                } catch (error) {
                }
                this.timer.unsubscribe();
                this.accompSvc.startTrackingTrip(rideId);
                this.popupSubject = null;
                for (var _i = 0, _a = this.accompSvc.accompenie.trips; _i < _a.length; _i++) {
                    var x = _a[_i];
                    if (x.ID == rideId) {
                        x.startRide = _helpers_date_helper__WEBPACK_IMPORTED_MODULE_2__["DateHelper"].getTodayFullDate();
                        var tmpLoc = this.locationSvc.getLocation(false);
                        x.latitudeStarting = tmpLoc.lastLocation.lat;
                        x.longitudeStarting = tmpLoc.lastLocation.lang;
                        x.statuscode = 2;
                    }
                }
                // ??????
                // this.model = this.accompSvc.accompenie;
                //task 5844 - hide car type page
                // if (toNavigate) {
                //   this.router.navigate(['/prev-start-trip', rideId]);
                // }
                if (toNavigate) {
                    this.accompSvc.updateModelNoReturn(true);
                    // this.accompSvc.addItemToQueue(this.accompSvc.accompenie, false, true);
                } else {
                    //כשמגיע מהוספת תלמיד
                    this.accompSvc.updateModelNoReturn(false);
                    // this.accompSvc.addItemToQueue(this.accompSvc.accompenie, false, false);
                }
                if (toNavigate) {
                    this.router.navigate(['/my-trip', rideId]);
                }
            };
            MyTripsComponent.prototype.continueReport = function (item) {
                this.accompSvc.startTrackingTrip(item.ID); //start send location reports
                /*
        אין צורך לשמור אוביקט כי לא בוצעה שום פעולה  בاستمرار נסיעה
        נכתב בזמן פיתוח פתרון חזרה מסקולבס לנסיעה ספציפית
        this.accompSvc.updateModelWithEmit();*/
                item.isActive = false;
                //task 5844 - hide car type page
                // if (item.carType != null)
                //   this.router.navigate(['/my-trip', item.ID]);
                // else this.router.navigate(['/prev-start-trip', item.ID]);
                this.router.navigate(['/my-trip', item.ID]);
            };
            MyTripsComponent.prototype.onSelectedStudent = function (studentId) {
                var tripsToday = this.filterPipe.transform(this.trips, "date", this.today);
                if (tripsToday.length > 0) {
                    //
                } else {
                    //יצירת נסיעה עם פרטים
                    //החזרת פרטי הנסיעה
                    //ניווט למסך סוג רכב
                }
            };
            MyTripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
                    selector: 'app-my-trips',
                    template: __webpack_require__(/*! ./my-trips.component.html */ "./src/app/pages/my-trips/my-trips.component.html"),
                    styles: [__webpack_require__(/*! ./my-trips.component.scss */ "./src/app/pages/my-trips/my-trips.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loaction_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"], _services_accompenie_service__WEBPACK_IMPORTED_MODULE_3__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_components_location_location_component__WEBPACK_IMPORTED_MODULE_6__["LocationComponent"], _prev_start_trip_prev_start_trip_component__WEBPACK_IMPORTED_MODULE_7__["PrevStartTripComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]])
            ], MyTripsComponent);
            return MyTripsComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pages/prev-start-trip/prev-start-trip.component.html":
    /*!**********************************************************************!*\
  !*** ./src/app/pages/prev-start-trip/prev-start-trip.component.html ***!
  \**********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<section>\r\n  <div class=\"header\">\r\n    <div class=\"sub-header flex\">\r\n      <!-- <a *ngIf=\"step == 'choose-bas'\" class=\"close\" routerLink=\"/my-trips\"> </a> -->\r\n      <div *ngIf=\"step == 'choose-bas'\" class=\"header-title\"> בחירת רכב</div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"step == 'choose-bas'\" class=\"margin-top-sixtheen\">\r\n    <div class=\"black-title margin-bottom-fifteent\">יש לבחור תחילה את סוג הרכב</div>\r\n    <div class=\"carTypeContainer\">\r\n    <div *ngFor=\"let TypeCategory of CarTypesCategoryList | enumToArray\" class=\"carTypeComponent container\">\r\n      <!--{{ TypeCategory }}-->\r\n      <app-car-type\r\n      (IsSelectedcarType)=\"OnSelectedCarType($event)\"\r\n  [carType]=\"TypeCategory\">\r\n</app-car-type>\r\n      <!--<label class=\"radioContainer\">{{type.name}}\r\n        <input type=\"radio\" name=\"radio\" (change)=\"radioChange(type.id)\">\r\n        <span class=\"circle\"></span>\r\n      </label>-->\r\n    </div>\r\n  </div>\r\n    <footer>\r\n      <input #btn (click)=\"selectedCarType()\" type=\"button\" class=\"footer-btn \" value=\"בחר\"\r\n        [ngClass]=\"{'disabled':!IsSelectedcarType}\" [disabled]=\"!IsSelectedcarType\">\r\n    </footer>\r\n    <!-- routerLink=\"/my-trip\" -->\r\n \r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n</section>"

        /***/
    }),

    /***/ "./src/app/pages/prev-start-trip/prev-start-trip.component.scss":
    /*!**********************************************************************!*\
  !*** ./src/app/pages/prev-start-trip/prev-start-trip.component.scss ***!
  \**********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = ".choose-btn {\n  margin-top: 75px;\n  background: #420799;\n  width: 100%; }\n\nfooter {\n  height: 50px; }\n\n.footer-btn {\n  width: 100%;\n  background: #2B59AC; }\n\n.carTypeContainer {\n  display: flex;\n  flex-wrap: wrap; }\n\n.container {\n  left: 5%;\n  right: 50.56%;\n  top: 21.88%;\n  bottom: 45.78%;\n  background: #FFFFFF;\n  box-shadow: -5px 16px 24px rgba(8, 35, 48, 0.16);\n  border-radius: 6px;\n  width: 47%;\n  margin-top: 5%;\n  margin-right: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJldi1zdGFydC10cmlwL0M6XFxCaXRib2NrZXRQcm9qZWN0c1xcbWdhci1hY2NvbXBhbmllcy1hbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xccHJldi1zdGFydC10cmlwXFxwcmV2LXN0YXJ0LXRyaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFNbkI7RUFDSSxRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBRWQsbUJBQW1CO0VBQ25CLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXYtc3RhcnQtdHJpcC9wcmV2LXN0YXJ0LXRyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlLWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDIwNzk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZm9vdGVye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5mb290ZXItYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkI1OUFDO1xyXG59XHJcblxyXG4uY2FyVHlwZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmNhclR5cGVDb21wb25lbnR7XHJcbiAgICAvLyB3aWR0aDogNDklO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICByaWdodDogNTAuNTYlO1xyXG4gICAgdG9wOiAyMS44OCU7XHJcbiAgICBib3R0b206IDQ1Ljc4JTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAxNnB4IDI0cHggcmdiYSg4LCAzNSwgNDgsIDAuMTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxODBweDtcclxuICAgIC8vYm9yZGVyOiBzb2xpZCAxcHggJGdyYXk7XHJcbn1cclxuLy8gLmNhclR5cGVDb250YWluZXJ7XHJcbi8vICAgICAvL3dpZHRoOiA0MCU7XHJcbi8vICAgICAvL3BhZGRpbmc6IDclO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyB9XHJcblxyXG4iXX0= */"

        /***/
    }),

    /***/ "./src/app/pages/prev-start-trip/prev-start-trip.component.ts":
    /*!********************************************************************!*\
  !*** ./src/app/pages/prev-start-trip/prev-start-trip.component.ts ***!
  \********************************************************************/
    /*! exports provided: PrevStartTripComponent, EnumToArrayPipe */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PrevStartTripComponent", function () {
            return PrevStartTripComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
            return EnumToArrayPipe;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var src_app_models_carTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/carTypes */ "./src/app/models/carTypes.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


        var PrevStartTripComponent = /** @class */ (function () {
            function PrevStartTripComponent(accompSvc, activityRoute, router) {
                this.accompSvc = accompSvc;
                this.activityRoute = activityRoute;
                this.router = router;
                this.IsSelectedcarType = false;
                this.step = "choose-bas";
                this.headerText = "נסיעה שלי";
            }
            ;
            Object.defineProperty(PrevStartTripComponent.prototype, "CarTypesCategoryList", {
                get: function () {
                    return src_app_models_carTypes__WEBPACK_IMPORTED_MODULE_3__["CarTypesCategory"];
                },
                enumerable: true,
                configurable: true
            });
            // get carsList() {
            //   return this.accompSvc.accompenie.carTypeList;
            // }
            PrevStartTripComponent.prototype.ngOnInit = function () {
                var _this = this;
                this.activityRoute.params.subscribe(function (param) {
                    return _this.currentTripId = param['id'];
                });
            };
            Object.defineProperty(PrevStartTripComponent.prototype, "model", {
                set: function (value) {
                    this.accompSvc.accompenie = value;
                },
                enumerable: true,
                configurable: true
            });
            PrevStartTripComponent.prototype.OnSelectedCarType = function (id) {
                var _this = this;
                this.IsSelectedcarType = true;
                //this.CarTypeGuideID = id;
                this.accompSvc.accompenie.trips.forEach(function (x) {
                    if (x.ID == _this.currentTripId) {
                        x.carType = id;
                    }
                });
            };
            PrevStartTripComponent.prototype.selectedCarType = function () {
                this.model = this.accompSvc.accompenie;
                this.accompSvc.updateModelWithEmit();
                this.router.navigate(['/my-trip', this.currentTripId]);
            };
            PrevStartTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-prev-start-trip',
                    template: __webpack_require__(/*! ./prev-start-trip.component.html */ "./src/app/pages/prev-start-trip/prev-start-trip.component.html"),
                    styles: [__webpack_require__(/*! ./prev-start-trip.component.scss */ "./src/app/pages/prev-start-trip/prev-start-trip.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
            ], PrevStartTripComponent);
            return PrevStartTripComponent;
        }());

        var EnumToArrayPipe = /** @class */ (function () {
            function EnumToArrayPipe() {
            }

            EnumToArrayPipe.prototype.transform = function (data) {
                var keys = Object.keys(data);
                return keys.slice(keys.length / 2);
            };
            EnumToArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'enumToArray'
                })
            ], EnumToArrayPipe);
            return EnumToArrayPipe;
        }());


        /***/
    }),

    /***/ "./src/app/pages/settings/settings.component.html":
    /*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.html ***!
  \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "<section style=\"z-index: 12000;\">\r\n    <div class=\"header\">\r\n        <div>\r\n            <img src=\"assets/img/settings_top_image.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"header-text\">\r\n            <div class=\"title-white margin-bottom-five\"> {{fullName}} مرحبا ، </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"margin-top-230\">\r\n        <div class=\"white-block flex margin-bottom-fifteent\" routerLink=\"/contact-us\">\r\n            <img src=\"assets/img/contact.png\" alt=\"\">\r\n            <div class=\"margin-right-ten\">اتصل بنا</div>\r\n        </div>\r\n        <div class=\"white-block flex margin-bottom-fifteent\" (click)=\"popupSubject = 'logout'\">\r\n            <img src=\"assets/img/logout.png\" alt=\"\">\r\n            <div class=\"margin-right-ten\">تسجيل الخروج</div>\r\n        </div>\r\n        <div class=\"white-block flex margin-bottom-fifteent\" (click)=\"accompSvc.updateModelWithEmit()\">\r\n            <img src=\"assets/img/refresh.png\" alt=\"\">\r\n            <div class=\"margin-right-ten\">تحديث</div>\r\n        </div>\r\n   \r\n        <div class=\"white-block small-black-text padding-five\" >\r\n     <div style=\"text-align: center;\">Translate by Mohamad Shwaeki | shwaeki@gmail.com</div>\r\n        </div>\r\n  </div>\r\n\r\n    <app-trip-footer [active]=\"'settings'\"></app-trip-footer>\r\n\r\n</section>\r\n\r\n\r\n<!-- popup -->\r\n<div class=\"popup-overlay\" *ngIf=\"popupSubject == 'logout'\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n\r\n            <div class=\"small-black-text\"> هل تريد الخروج من التطبيق؟</div>\r\n            <br>\r\n\r\n            <div class=\"flex\">\r\n                <div (click)=\"logout()\" class=\"red-middle-text\">نعم </div>\r\n                <div (click)=\"popupSubject = null\" class=\"popup-cancel-btn\">الغاء</div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"popup-overlay\" *ngIf=\"popupSubject == 'offline'\">\r\n    <div class=\"popup-box\">\r\n        <div class=\"content\">\r\n            <div class=\"small-black-text\"> הינך במצב לא מקוון ,הפעולות האחרונות לא עודכנו במערכת</div>\r\n            <br>\r\n            <div class=\"small-black-text\"> האם ברצונך לצאת בכל זאת?</div>\r\n            <br>\r\n            <div class=\"flex\">\r\n                <div (click)=\"logoutOffline()\" class=\"red-middle-text\">نعم </div>\r\n                <div (click)=\"popupSubject = null\" class=\"popup-cancel-btn\">الغاء</div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

        /***/
    }),

    /***/ "./src/app/pages/settings/settings.component.scss":
    /*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "section {\n  padding: 0px; }\n\n.header {\n  position: unset;\n  margin: -8px; }\n\n.header img {\n  position: relative;\n  width: 100%; }\n\n.header-text {\n  position: absolute;\n  right: 5px;\n  top: 24%; }\n\n.red-middle-text {\n  opacity: 1; }\n\n.popup-overlay .flex {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXEJpdGJvY2tldFByb2plY3RzXFxtZ2FyLWFjY29tcGFuaWVzLWFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUtmO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRLEVBQUE7O0FBT1o7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAtOHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMjMwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogMjQlO1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0yMzAge1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjMwcHg7XHJcbn1cclxuXHJcbi5yZWQtbWlkZGxlLXRleHQge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnBvcHVwLW92ZXJsYXkgLmZsZXgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

        /***/
    }),

    /***/ "./src/app/pages/settings/settings.component.ts":
    /*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
    /*! exports provided: SettingsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
            return SettingsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accompenie.service */ "./src/app/services/accompenie.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


        var SettingsComponent = /** @class */ (function () {
            function SettingsComponent(accompSvc, router) {
                this.accompSvc = accompSvc;
                this.router = router;
                this.loadData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            }

            SettingsComponent.prototype.ngOnInit = function () {
                this.accompSvc.loadData.emit(false);
                this.fullName = this.accompSvc.accompenie.firstName + " " + this.accompSvc.accompenie.lastName;
            };
            SettingsComponent.prototype.logout = function () {
                this.accompSvc.logout();
                this.router.navigate(['/']);
            };
            SettingsComponent.prototype.logoutOffline = function () {
                this.accompSvc.logout();
                this.router.navigate(['/']);
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], SettingsComponent.prototype, "loadData", void 0);
            SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-settings',
                    template: __webpack_require__(/*! ./settings.component.html */ "./src/app/pages/settings/settings.component.html"),
                    styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accompenie_service__WEBPACK_IMPORTED_MODULE_2__["AccompanieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], SettingsComponent);
            return SettingsComponent;
        }());


        /***/
    }),

    /***/ "./src/app/pipes/filter.pipe.ts":
    /*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
    /*! exports provided: FilterPipe */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
            return FilterPipe;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var FilterPipe = /** @class */ (function () {
            function FilterPipe() {
            }

            FilterPipe.prototype.transform = function (items, field, value) {
                if (!items)
                    return [];
                if (!value) {
                    return items;
                }
                if (field == 'date') {
                    var res = items.filter(function (it) {
                        return it[field].split('T')[0] == value;
                    });
                    return res;
                }
                return items.filter(function (it) {
                    return it[field] == value;
                });
            };
            FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'filter'
                }),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], FilterPipe);
            return FilterPipe;
        }());


        /***/
    }),

    /***/ "./src/app/services/accompenie.service.ts":
    /*!************************************************!*\
  !*** ./src/app/services/accompenie.service.ts ***!
  \************************************************/
    /*! exports provided: AccompanieService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AccompanieService", function () {
            return AccompanieService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _loaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaction.service */ "./src/app/services/loaction.service.ts");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var _models_accompeanie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/accompeanie */ "./src/app/models/accompeanie.ts");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
        /* harmony import */
        var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
        /* harmony import */
        var _helpers_date_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/date-helper */ "./src/app/helpers/date-helper.ts");
        /* harmony import */
        var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
        /* harmony import */
        var _components_no_internet_no_internet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/no-internet/no-internet.component */ "./src/app/components/no-internet/no-internet.component.ts");


        var AccompanieService = /** @class */ (function () {
            // CallNative: any = 0;
            function AccompanieService(router, api, _location, appCookie, loc, _snackBar) {
                var _this = this;
                this.router = router;
                this.api = api;
                this._location = _location;
                this.appCookie = appCookie;
                this.loc = loc;
                this._snackBar = _snackBar;
                this.requestsQueueInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1 * 1000);
                this.enableToUseQueue = true;
                this.loadData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                this.isPosting = false;
                this.isGPSActive = true;
                this.GPS_notActiveCounter = 0;
                this.currentRideID = "";
                this.tripTrackerInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10 * 1000);
                this.pushTokenSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
                this.pushTokenInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
                this.pushTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                this.needToGetDataFromAPI = true;
                this.currentVersion = 64;
                this.toRefresh = false;
                this.isSchoolbusTrip = false;
                this.loadData.emit(false);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100).subscribe(function (x) {
                    if (navigator.onLine) {
                        _this.closeNoInternetAlert();
                    } else {
                        _this.openNoInternetAlert();
                    }
                });
            }

            AccompanieService.prototype.setRequestsQueue = function () {
                var _this = this;
                if (!this.requestsQueueIntervalSubscribe || this.requestsQueueIntervalSubscribe.isStopped) {
                    this.requestsQueueIntervalSubscribe = this.requestsQueueInterval.subscribe(function (x) {
                      //  console.log("requestsQueueInterval: " + x);
                        if (_this.enableToUseQueue && navigator.onLine && _this.requestsQueue && _this.requestsQueue.length > 0) {
                            _this.enableToUseQueue = false;
                            var item = _this.requestsQueue.shift();
                            console.log("queue: " + x + ", wait: " + _this.requestsQueue.length + ", reports: " + item.accompanie.rideReport.length + ", rideReportToUpdate:" + item.accompanie.rideReportToUpdate.length);
                            if (item.withResponse) {
                                _this.updateModelWithEmit2(item.accompanie, item.showLoad, item.successCallback, item.errorCallback);
                            } else {
                                _this.updateModelNoReturn2(item.accompanie, item.showLoad, item.successCallback);
                            }
                        }
                    });
                }
            };
            AccompanieService.prototype.stopQueueInterval = function () {
                this.requestsQueueIntervalSubscribe.unsubscribe();
                this.requestsQueueIntervalSubscribe = null;
                this.requestsQueue = [];
            };
            AccompanieService.prototype.showEmmit = function (isopen) {
                this.loadData.emit(isopen);
            };
            Object.defineProperty(AccompanieService.prototype, "accompenie", {
                get: function () {
                    if (this._accompenie)
                        return this._accompenie;
                    var ls = localStorage.getItem("accomp");
                    //var ls = this.appCookie.get("accomp");
                    if (ls && ls != "null" && ls != undefined) {
                        this._accompenie = JSON.parse(ls);
                        return this._accompenie;
                    } else {
                        this.router.navigate(["/"]);
                    }
                    this.router.navigate(["/"]);
                },
                set: function (v) {
                    // console.log(v)
                    localStorage.setItem("accomp", JSON.stringify(v));
                    //this.appCookie.set("accomp", JSON.stringify(v), 365,  '/');
                    this._accompenie = v;
                },
                enumerable: true,
                configurable: true
            });
            AccompanieService.prototype.getContacts = function (guid) {
                var _this = this;
                this.loadData.emit(true);
                this.api.get('GetStudentsInRoute/' + guid).toPromise()
                    .then(function (response) {
                        _this.accompenie.contactsNewRide = response;
                        _this.loadData.emit(false);
                    })
                    .catch(function (msg) {
                    });
            };
            AccompanieService.prototype.checkAppVersion = function () {
                console.log(this.currentVersion);
                return this.api.post("user/CheckAppVersion", 55);
            };
            AccompanieService.prototype.getStudentsForSearch = function (searcVal) {
                // if (searcVal.length < 2) {
                //   return new Observable<any>();
                // }
                var dataToSend = JSON.parse(JSON.stringify({
                    escort_bu: this.accompenie.businessUnit.id,
                    valueSearch: searcVal
                }));
                // console.log("searcVal " + searcVal);
                return this.api.post("user/GetStudentForSearch", dataToSend);
            };
            AccompanieService.prototype.GetStudentBYIdFromQrCode = function (studentId) {
                // if (searcVal.length < 2) {
                //   return new Observable<any>();
                // }
                var dataToSend = JSON.parse(JSON.stringify({
                    escort_bu: this.accompenie.businessUnit.id,
                    valueSearch: studentId
                }));
                // console.log("studentId " + studentId);
                return this.api.post("user/GetStudentBYIdFromQrCode", dataToSend);
            };
            AccompanieService.prototype.createTrip = function () {
                if (this._accompenie == undefined)
                    return;
                this.loadData.emit(true);
                if (this._accompenie.fireBaseDeviceToken == null) { //אם עדיין לא נשלף ערך של טוקן להתראות
                    var fireBaseToken = document.getElementById('FireBaseToken');
                    if (fireBaseToken.value && fireBaseToken.value != "" && fireBaseToken.value != undefined) {
                        this._accompenie.fireBaseDeviceToken = fireBaseToken.value;
                        this._accompenie.isUpdateFireBaseDeviceToken = true;
                    }
                } else {
                    this._accompenie.isUpdateFireBaseDeviceToken = false;
                }
                this._accompeniePostTMP = JSON.parse(JSON.stringify(this._accompenie));
                return this.api.post('user/CreateRide', this._accompeniePostTMP);
            };
            AccompanieService.prototype.addStudentToTrip = function () {
                if (this._accompenie == undefined)
                    return;
                this.loadData.emit(true);
                this._accompeniePostTMP = JSON.parse(JSON.stringify(this._accompenie));
                this._accompenie.studentToAdd = null;
                return this.api.post('user/AddStudentToRide', this._accompeniePostTMP);
            };
            AccompanieService.prototype.getSchoolbusToken = function () {
                if (this._accompenie == undefined)
                    return;
                return this.api.post('user/GetDataForSchoolbus', {
                    "rideId": this.currentRideID,
                    "accompanieTz": this.accompenie.tz
                });
            };
            AccompanieService.prototype.getDataFromApi = function () {
                var _this = this;
                var ls = localStorage.getItem("accomp");
                if (ls == null) {
                    this.accompenie = null;
                    this.router.navigate(["/"]);
                    return;
                }
                var dataLS = JSON.parse(ls);
                this.loadData.emit(true);
                this.api.post('user/GetAccompnieData', JSON.parse(JSON.stringify(dataLS))).subscribe(function (res) {
                    _this.accompenie = res;
                    _this.loadData.emit(false);
                });
            };
            AccompanieService.prototype.addItemToQueue = function (item, withResponse, showLoad, successCallback, errorCallback) {
                if (!this.requestsQueue) {
                    this.requestsQueue = [];
                }
                this.requestsQueue.push({
                    "accompanie": JSON.parse(JSON.stringify(item)),
                    "withResponse": withResponse,
                    "showLoad": showLoad,
                    "successCallback": successCallback,
                    "errorCallback": errorCallback
                });
                this.accompenie = item;
                if (showLoad) {
                    this.loadData.emit(true);
                }
            };
            AccompanieService.prototype.updateModelNoReturn2 = function (accompanieItem, actionLoader, func) {
                var _this = this;
                if (actionLoader === void 0) {
                    actionLoader = true;
                }
                if (this._accompenie == undefined)
                    return;
                // this.accompenie = accompanieItem;
                this._accompeniePostTMP = accompanieItem;
                if (actionLoader)
                    this.loadData.emit(true);
                this._accompeniePostTMP.updateOnly = true;
                this.api.post("user/UpdateModel", this._accompeniePostTMP)
                    .subscribe(function (res) {
                        _this.isPosting = false;
                        _this.enableToUseQueue = true;
                        if (actionLoader)
                            _this.loadData.emit(false);
                        if (func != undefined)
                            func();
                    }, function (error) {
                        _this.loadData.emit(false);
                    });
            };
            AccompanieService.prototype.updateModelWithEmit2 = function (accompanieItem, showLoading, successFunc, errorFunc) {
                var _this = this;
                if (showLoading === void 0) {
                    showLoading = true;
                }
                if (navigator.onLine) {
                    if (this._accompenie == undefined)
                        return;
                    if (this._accompenie.fireBaseDeviceToken == null) { //אם עדיין לא נשלף ערך של טוקן להתראות
                        var fireBaseToken = document.getElementById('FireBaseToken');
                        if (fireBaseToken.value && fireBaseToken.value != "" && fireBaseToken.value != undefined) {
                            this._accompenie.fireBaseDeviceToken = fireBaseToken.value;
                            this._accompenie.isUpdateFireBaseDeviceToken = true;
                        }
                    } else {
                        this._accompenie.isUpdateFireBaseDeviceToken = false;
                    }
                    // this.accompenie = accompanieItem;
                    this._accompeniePostTMP = JSON.parse(JSON.stringify(accompanieItem));
                    if (showLoading) {
                        this.loadData.emit(true);
                    }
                    this._accompeniePostTMP.updateOnly = false;
                    this.api.post("user/UpdateModel", this._accompeniePostTMP)
                        .subscribe(function (res) {
                            if (res == null)
                                console.log("Error: res was returned null");
                            // this.closeNoInternetAlert();
                            _this._accompenie.rideReport = [];
                            _this._accompenie.rideReportToUpdate = [];
                            _this._accompenie.exceptionalEventList = [];
                            _this.accompenie = res;
                            if (showLoading) {
                                _this.loadData.emit(false);
                            }
                            _this.enableToUseQueue = true;
                            if (successFunc != undefined)
                                successFunc();
                        }, function (error) {
                            _this.loadData.emit(false);
                            // this.openNoInternetAlert();
                            if (errorFunc != undefined)
                                errorFunc();
                        });
                }
            };
            AccompanieService.prototype.updateModelWithEmit = function (showLoading, successFunc, errorFunc) {
                var _this = this;
                if (showLoading === void 0) {
                    showLoading = true;
                }
                if (navigator.onLine) {
                    if (this._accompenie == undefined)
                        return;
                    if (this._accompenie.fireBaseDeviceToken == null) { //אם עדיין לא נשלף ערך של טוקן להתראות
                        var fireBaseToken = document.getElementById('FireBaseToken');
                        if (fireBaseToken.value && fireBaseToken.value != "" && fireBaseToken.value != undefined) {
                            this._accompenie.fireBaseDeviceToken = fireBaseToken.value;
                            this._accompenie.isUpdateFireBaseDeviceToken = true;
                        }
                    } else {
                        this._accompenie.isUpdateFireBaseDeviceToken = false;
                    }
                    this.accompenie = this._accompenie;
                    this._accompeniePostTMP = JSON.parse(JSON.stringify(this._accompenie));
                    if (showLoading) {
                        this.loadData.emit(true);
                    }
                    this._accompeniePostTMP.updateOnly = false;
                    this.api.post("user/UpdateModel", this._accompeniePostTMP)
                        .subscribe(function (res) {
                            if (res == null)
                                console.log("Error: res was returned null");
                            // this.closeNoInternetAlert();
                            _this._accompenie.rideReport = [];
                            _this._accompenie.rideReportToUpdate = [];
                            _this._accompenie.exceptionalEventList = [];
                            _this.accompenie = res;
                            if (showLoading) {
                                _this.loadData.emit(false);
                            }
                            if (successFunc != undefined)
                                successFunc();
                        }, function (error) {
                            _this.loadData.emit(false);
                            // this.openNoInternetAlert();
                            if (errorFunc != undefined)
                                errorFunc();
                        });
                }
            };
            AccompanieService.prototype.updateModelNoReturn = function (actionLoader, func) {
                var _this = this;
                if (actionLoader === void 0) {
                    actionLoader = true;
                }
                if (this._accompenie == undefined)
                    return;
                this.accompenie = this._accompenie;
                this._accompeniePostTMP = JSON.parse(JSON.stringify(this._accompenie));
                if (actionLoader)
                    this.loadData.emit(true);
                this._accompeniePostTMP.updateOnly = true;
                this.api.post("user/UpdateModel", this._accompeniePostTMP)
                    .subscribe(function (res) {
                        _this.isPosting = false;
                        // this._accompenie.rideReport = [];
                        // this._accompenie.rideReportToUpdate = [];
                        // this.accompenie = this._accompenie;
                        if (actionLoader)
                            _this.loadData.emit(false);
                        if (func != undefined)
                            func();
                        //this.accompenie.exceptionalEventList = [];
                    }, function (error) {
                        _this.loadData.emit(false);
                        // this.openNoInternetAlert();
                    });
            };
            AccompanieService.prototype.startTrackingTrip = function (rideId) {
                var _this = this;
                if (rideId != undefined) { //rideId = undefined after the GPS error appear- and then we dont want the ride will overide
                    this.currentRideID = rideId;
                }
                var Location = this.loc.getLocation(false);
                this.SetGPSStatus(Location.currentLocation);
                // if (this.isGPSActive) {//the first check
                if (!this.tripTrackerSubscription || this.tripTrackerSubscription.closed) {
                    this.tripTrackerSubscription = this.tripTrackerInterval.subscribe(function (val) {
                        // (<HTMLInputElement>document.getElementById('CallNative')).value = (val + 1) + " : " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
                        _this.updateAccopmpanyLocation();
                    });
                    // }
                } else {
                    this.updateAccopmpanyLocation();
                }
            };
            AccompanieService.prototype.updateAccopmpanyLocation = function () {
                var Location = this.loc.getLocation(false);
                this.SetGPSStatus(Location.currentLocation); //check every time if GPS is still ON
                if (this.isGPSActive) { //GPS is ON 
                    document.getElementById('locationFromAPK').value = ""; //clean value
                    var rep = new _models_accompeanie__WEBPACK_IMPORTED_MODULE_3__["RideReport"]();
                    rep.rideId = this.currentRideID;
                    rep.latitude = Location.lastLocation.lat;
                    rep.longitude = Location.lastLocation.lang;
                    // rep.date = new Date();
                    rep.date = _helpers_date_helper__WEBPACK_IMPORTED_MODULE_9__["DateHelper"].getTodayFullDate();
                    this.api.post('user/UpdateAccompanieLocation', rep).subscribe(function (res) {
                    });
                }
            };
            AccompanieService.prototype.resetGPSCounter = function () {
                // alert(this.GPS_notActiveCounter);
                this.isGPSActive = true;
                this.GPS_notActiveCounter = 0;
            };
            AccompanieService.prototype.SetGPSStatus = function (Location) {
                if (!((Location.lang == 0 && Location.lat == 0)
                    || Location.lat == 0.000 || Location.lang == 0.000
                    || Location.lat == 0 || Location.lat == null)) { //GPS is on
                    this.isGPSActive = true;
                    this.GPS_notActiveCounter = 0;
                } else {
                    this.isGPSActive = false;
                    this.GPS_notActiveCounter++;
                }
                // (<HTMLInputElement>document.getElementById('GPS_notActiveCounter_id')).value = this.GPS_notActiveCounter.toString();
            };
            AccompanieService.prototype.closeGpsPopup = function () {
                this.isGPSActive = false;
                this.GPS_notActiveCounter = 2;
            };
            AccompanieService.prototype.stopTrackingTrip = function () {
                if (!this.tripTrackerSubscription.closed) {
                    this.tripTrackerSubscription.unsubscribe();
                    this.currentRideID = "";
                }
            };
            AccompanieService.prototype.deleteLocalStorage = function () {
                localStorage.clear();
                this.appCookie.deleteAll();
            };
            AccompanieService.prototype.logout = function () {
                this.deleteLocalStorage();
                this.router.navigate(["/"]);
            };
            AccompanieService.prototype.getLoaddataStatus = function () {
                return this.loadData;
            };
            AccompanieService.prototype.openNoInternetAlert = function () {
                this._snackBar.openFromComponent(_components_no_internet_no_internet_component__WEBPACK_IMPORTED_MODULE_11__["NoInternetComponent"], { /*duration: 3000,*/
                    panelClass: ['snackbar']
                });
                // this._snackBar.open("חיבור רשת חלש", "", { panelClass: ['snackbar'] });
            };
            AccompanieService.prototype.closeNoInternetAlert = function () {
                this._snackBar.dismiss();
            };
            AccompanieService.prototype.setPushToken = function () {
                var _this = this;
                /*
                try {
                    NativeApp.getPushToken();
                } catch (error) {
                }*/
                this.pushTokenSubscription = this.pushTokenInterval.subscribe(function (counter) {
                    var token = document.getElementById('pushTokenFromApk');
                    if (token.value) {
                        _this.accompenie.pushToken = token.value;
                        token.value = "";
                    }
                    if (counter >= 5)
                        _this.accompenie.pushToken = "error";
                    if (token.value || counter >= 5) {
                        _this.pushTokenSubscription.unsubscribe();
                        _this.pushTokenSubject.next("null");
                    }
                });
            };
            AccompanieService.prototype.changeStudentStatus = function (index, trip) {
                var item = trip.students[index];
                switch (item.status) {
                    case 100000000:
                        item.status = 100000001;
                        this.accompenie.trips.find(function (t) {
                            return t.ID == trip.ID;
                        }).students[index].status = 100000001;
                        break;
                    case 1:
                        item.status = 100000000;
                        this.accompenie.trips.find(function (t) {
                            return t.ID == trip.ID;
                        }).students[index].status = 100000000;
                        break;
                }
                var rideforContact = this.accompenie.trips.find(function (t) {
                    return t.ID == trip.ID;
                }).students[index].rideforcontactId;
                var status = this.accompenie.trips.find(function (t) {
                    return t.ID == trip.ID;
                }).students[index].status;
                this.createReport(trip.ID, rideforContact, status, null, false);
            };
            AccompanieService.prototype.createReport = function (rideid, rideforContact, status, prevStatus, isCancle) {
                var _this = this;
                var includ = false;
                var latitude;
                var longitude;
                var tmpLoc = this.loc.getLocationForReport();
                document.getElementById('locationFromAPKForReport').value = ""; //clean value
                latitude = tmpLoc.lat;
                longitude = tmpLoc.lang;
                if (this.accompenie.rideReport.length != 0) {
                    this.accompenie.rideReport.forEach(function (x, index) {
                        if (x.rideId == rideid && x.rideforContactId == rideforContact) {
                            includ = true;
                            var result = _this.checkPrevStatus(x.statusCode, status);
                            if (result == 'yes') {
                                _this.accompenie.rideReport.push({
                                    rideforContactId: rideforContact,
                                    statusCode: status,
                                    longitude: longitude,
                                    latitude: latitude,
                                    date: _helpers_date_helper__WEBPACK_IMPORTED_MODULE_9__["DateHelper"].getTodayFullDate(),
                                    rideId: rideid
                                });
                            } else if (result == 'no') {
                                _this.accompenie.rideReport.splice(index, 1);
                            }
                        }
                    });
                }
                if (!includ && status != 1 && !isCancle) {
                    this.accompenie.rideReport.push({
                        rideforContactId: rideforContact,
                        statusCode: status,
                        longitude: longitude,
                        latitude: latitude,
                        date: _helpers_date_helper__WEBPACK_IMPORTED_MODULE_9__["DateHelper"].getTodayFullDate(),
                        rideId: rideid
                    });
                }
                if (isCancle) {
                    var reportToCancel = this.accompenie.rideReportToUpdate.find(function (x) {
                        return x.rideforContactId == rideforContact && x.statusCode == prevStatus;
                    });
                    if (!reportToCancel) {
                        this.accompenie.rideReportToUpdate.push({
                            rideforContactId: rideforContact,
                            statusCode: prevStatus,
                            longitude: longitude,
                            latitude: latitude,
                            date: _helpers_date_helper__WEBPACK_IMPORTED_MODULE_9__["DateHelper"].getTodayFullDate(),
                            rideId: rideid
                        });
                    }
                }
                this.addItemToQueue(this.accompenie, false, false);
                // this.updateModelNoReturn(false);
            };
            AccompanieService.prototype.checkPrevStatus = function (prev, current) {
                switch (prev) {
                    case 100000000:
                        if (current == 100000001)
                            return 'yes';
                        else if (current == 1)
                            return 'no';
                        break; //collected
                    case 100000001:
                        return 'no';
                        break; //got down
                    case 100000002:
                        return 'no';
                        break; //not collected
                }
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])
            ], AccompanieService.prototype, "loadData", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
            ], AccompanieService.prototype, "isPosting", void 0);
            AccompanieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _loaction_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
            ], AccompanieService);
            return AccompanieService;
        }());


        /***/
    }),

    /***/ "./src/app/services/api.service.ts":
    /*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
    /*! exports provided: ApiService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ApiService", function () {
            return ApiService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


        var ApiService = /** @class */ (function () {
            function ApiService(http) {
                this.http = http;
                this.options = {};
                this.base_url = "/WebApi/";
                var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                });
                this.options = httpHeaders;
                try {
                    NativeApp.startTrip();
                } catch (error) {
                }
                this.base_url = "https://accompaniesapi20210712152846.azurewebsites.net/"; //AZURE
                // this.base_url = "https://acconpaniestest.azurewebsites.net/";//AZURE TEST
                // this.base_url = "http://localhost:53388/";// Localhost
            }

            ApiService.prototype.post = function (url, obj) {
                return this.http.post(this.base_url + url, obj, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    return JSON.parse(res);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
            };
            ApiService.prototype.get = function (url) {
                return this.http.get(this.base_url + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    return res = res;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
            };
            ApiService.prototype.postPromise = function (url, obj) {
                return this.http.post(this.base_url + url, obj, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    return JSON.parse(res);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)).toPromise();
            };
            ApiService.prototype.handleError = function (error) {
                console.log('Handling error locally and rethrowing it...', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
            ], ApiService);
            return ApiService;
        }());


        /***/
    }),

    /***/ "./src/app/services/loaction.service.ts":
    /*!**********************************************!*\
  !*** ./src/app/services/loaction.service.ts ***!
  \**********************************************/
    /*! exports provided: LocationService, Location */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LocationService", function () {
            return LocationService;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Location", function () {
            return Location;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var LocationService = /** @class */ (function () {
            function LocationService(api) {
                this.api = api;
                this.lastLocationForReport = new Location(); //{ lang: 2.22, lat: 22.22 };
                this.lastLocation = new Location(); //{ lang: 11.11, lat: 11.11 };;
            }

            LocationService.prototype.getLocation = function (newReqest) {
                if (newReqest === void 0) {
                    newReqest = true;
                }
                this.location = new Location();
                //this.location.lat = 10.000;
                //this.location.lang = 9.000;
                if (newReqest) {
                    try {
                        NativeApp.requestLocation();
                    } catch (error) {
                        this.location.lat = 0.000;
                        this.location.lang = 0.000;
                    }
                }
                var location = document.getElementById('locationFromAPK');
                if (location.value) {
                    var locationArr = location.value.split(',');
                    this.location.lat = Number.parseFloat(locationArr[0]);
                    this.location.lang = Number.parseFloat(locationArr[1]);
                    this.lastLocation = this.location;
                } else {
                    this.location.lat = 0.000;
                    this.location.lang = 0.000;
                }
                // if (this.location.lang == undefined || this.location.lat == undefined) {
                //     this.location.lat = 11.11;
                //     this.location.lang = 22.22;
                // }
                return {"lastLocation": this.lastLocation, "currentLocation": this.location};
            };
            LocationService.prototype.getLocationForReport = function () {
                this.locationReport = new Location();
                var location = document.getElementById('locationFromAPKForReport');
                if (location.value) {
                    var locationArr = location.value.split(',');
                    this.locationReport.lat = Number.parseFloat(locationArr[0]);
                    this.locationReport.lang = Number.parseFloat(locationArr[1]);
                    this.lastLocationForReport = this.locationReport;
                }
                // if (this.locationReport.lang == undefined || this.locationReport.lat == undefined) {
                //     this.locationReport.lat = 33.33;
                //     this.locationReport.lang = 44.44;
                // }
                return this.lastLocationForReport;
            };
            LocationService.prototype.stopLocationTripTracking = function () {
                try {
                    NativeApp.stopTrip();
                } catch (error) {
                }
            };
            LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
            ], LocationService);
            return LocationService;
        }());

        var Location = /** @class */ (function () {
            function Location() {
            }

            return Location;
        }());


        /***/
    }),

    /***/ "./src/environments/environment.ts":
    /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
    /*! exports provided: environment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
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


        /***/
    }),

    /***/ "./src/main.ts":
    /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
        /* harmony import */
        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        }
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
            .catch(function (err) {
                return console.error(err);
            });


        /***/
    }),

    /***/ 0:
    /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! C:\BitbocketProjects\mgar-accompanies-angular\src\main.ts */"./src/main.ts");


        /***/
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map