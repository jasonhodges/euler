"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SynthService = (function () {
    function SynthService() {
        this.audioContext = new AudioContext();
        this.masterGain = this.audioContext.createGain();
        this.initialFreq = 2000;
        this.initialVol = 1;
        this.masterGain.connect(this.audioContext.destination);
    }
    SynthService.prototype.play = function (freq, time, waveform) {
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.frequency.value = freq;
        this.oscillator.type = waveform;
        this.oscillator.connect(this.audioContext.destination);
        if (time == null) {
            this.date = new Date();
            time = this.date;
        }
        // this.gain.gain.value = this.initialVol;
        console.log('synth play: ' + freq + ', ' + time + waveform);
        this.oscillator.start(0);
    };
    SynthService.prototype.stop = function (freq, time) {
        this.oscillator.frequency.value = freq;
        if (time == null) {
            this.date = new Date();
            time = this.date;
        }
        console.log('synth stop: ' + freq + ', ' + time);
        this.oscillator.stop(0);
        this.oscillator.disconnect();
    };
    SynthService = __decorate([
        core_1.Injectable()
    ], SynthService);
    return SynthService;
}());
exports.SynthService = SynthService;
//# sourceMappingURL=synth.service.js.map