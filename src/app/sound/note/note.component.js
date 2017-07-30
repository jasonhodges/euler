"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var directives_1 = require('@angular/core/src/metadata/directives');
var synth_service_1 = require("../services/synth.service");
var note_service_1 = require("../services/note.service");
var NoteComponent = (function () {
    function NoteComponent(noteService, synthService) {
        this.noteService = noteService;
        this.synthService = synthService;
    }
    __decorate([
        directives_1.Input()
    ], NoteComponent.prototype, "note");
    NoteComponent = __decorate([
        core_1.Component({
            selector: 'note',
            templateUrl: './note.component.html',
            styleUrls: ['./note.component.css'],
            providers: [note_service_1.NoteService, synth_service_1.SynthService]
        })
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map