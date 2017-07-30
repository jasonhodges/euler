import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {

  audioContext = new AudioContext();
  masterGain = this.audioContext.createGain();

  constructor() { }

}
