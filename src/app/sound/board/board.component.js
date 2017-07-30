"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var note_service_1 = require('../services/note.service');
var audio_service_1 = require('../services/audio.service');
var synth_service_1 = require('../services/synth.service');
var directives_1 = require('@angular/core/src/metadata/directives');
var BoardComponent = (function () {
    function BoardComponent(audioService, noteService, synthService) {
        this.audioService = audioService;
        this.noteService = noteService;
        this.synthService = synthService;
        this.waveform = 'square';
        this.audioContext = this.audioService.audioContext;
        this.noteToFrequency = function (note) {
            return Math.pow(2, (note - 69) / 12) * 440.0;
        };
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteService.getNotes()
            .subscribe(function (notes) { return _this.notes = notes; });
    };
    BoardComponent.prototype.switchWaveform = function (waveform) {
        console.log('waveform: ', waveform);
        this.waveform = waveform;
    };
    BoardComponent.prototype.play = function (note) {
        var freq = this.noteToFrequency(note.num).toFixed(3);
        this.value = freq;
        this.date = new Date();
        this.time = this.date;
        this.synthService.play(freq, this.time, this.waveform);
    };
    BoardComponent.prototype.release = function (note) {
        //var freq = this.noteToFrequency(note.num).toFixed(3);
        var freq = this.value;
        this.date = new Date();
        this.time = this.date;
        this.synthService.stop(freq, this.time);
    };
    __decorate([
        directives_1.HostListener('^onmousedown', ['$event.target.value'])
    ], BoardComponent.prototype, "play");
    __decorate([
        directives_1.HostListener('^mouseup', ['$event.target.value'])
    ], BoardComponent.prototype, "release");
    BoardComponent = __decorate([
        core_1.Component({
            selector: 'synth-board',
            templateUrl: './board.component.html',
            styleUrls: ['./board.component.css'],
            providers: [
                audio_service_1.AudioService,
                AudioContext,
                note_service_1.NoteService,
                synth_service_1.SynthService
            ]
        })
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map