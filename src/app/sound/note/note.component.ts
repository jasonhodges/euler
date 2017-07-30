import { Component, OnInit, Input } from "@angular/core";
import {Note} from './note';
import {SynthService} from "../services/synth.service";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NoteService, SynthService]
})
export class NoteComponent {
  @Input() note: Note;

  constructor(private noteService: NoteService,
              private synthService: SynthService) {
  }

}
