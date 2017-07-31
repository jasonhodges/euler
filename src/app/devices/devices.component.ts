import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare const navigator: any;

@Component({
selector: 'app-devices',
templateUrl: './devices.component.html',
styleUrls: ['./devices.component.scss']
})

export class DevicesComponent implements OnInit {
  devices: any[] = null;

  constructor() {}

  ngOnInit() {
    this._fetchDevices();
  }

  private _fetchDevices() {
    Observable
      .fromPromise(navigator.requestMIDIAccess())
      .map((midi: any) => Array.from(midi.inputs))
      .map((devices: any) => devices.map(device => device[1]))
      .subscribe((devices: any) => this.devices = devices);
  }
}
