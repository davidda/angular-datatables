/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular_datatables_directive_1 = require('./angular-datatables.directive');
var DataTablesModule = (function () {
    function DataTablesModule() {
    }
    DataTablesModule = __decorate([
        core_1.NgModule({
            declarations: [angular_datatables_directive_1.DataTableDirective],
            exports: [angular_datatables_directive_1.DataTableDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], DataTablesModule);
    return DataTablesModule;
}());
exports.DataTablesModule = DataTablesModule;
//# sourceMappingURL=angular-datatables.module.js.map