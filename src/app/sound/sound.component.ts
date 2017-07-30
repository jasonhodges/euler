import { AudioService } from './services/audio.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-sound',
  templateUrl: 'sound.component.html',
  styleUrls: ['sound.component.scss'],
  providers: [
    AudioService
  ]
})

export class SoundComponent implements OnInit {
  title = 'Synth'

  constructor() {}

  ngOnInit() {}
}