import { Injectable } from '@angular/core';

@Injectable()
export class SynthService {

  oscillator: OscillatorNode;
  gain: GainNode;
  private date;

  audioContext = new AudioContext();
  masterGain = this.audioContext.createGain();

  initialFreq = 2000;
  initialVol = 1;

  private waveform;

  constructor() {
    this.masterGain.connect(this.audioContext.destination);
  }

  play(freq, time, waveform) {

    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.frequency.value = freq;
    this.oscillator.type = waveform;
    this.oscillator.connect(this.audioContext.destination);

    if (time == null){
      this.date = new Date();
      time = this.date;
    }
    // this.gain.gain.value = this.initialVol;
    console.log('synth play: '+ freq + ', ' + time + waveform);
    this.oscillator.start(0);
  }

  stop(freq, time){
    this.oscillator.frequency.value = freq;
    if (time == null){
      this.date = new Date();
      time = this.date;
    }
    console.log('synth stop: '+ freq + ', ' + time);
    this.oscillator.stop(0);
    this.oscillator.disconnect();
  }

}
