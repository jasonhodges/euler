"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        this.noteData = '../../../app/sound/services/notes.json';
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this.noteData)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getNotes() {
    //   return this.http.get(this.noteData)
    //     .map((res: Response) => res.json());
    // }
    // private extractData(res: Response) {
    //   let body = res.json();
    //   return body.data || { };
    // }
    NoteService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    NoteService = __decorate([
        core_1.Injectable()
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map