import { MaterialModule } from './../common/material.module';
import { NoteComponent } from './note/note.component';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { SoundComponent } from './sound.component';
import { NgModule } from "@angular/core";
import SoundRoutes from './sound.routes';

@NgModule({
  declarations: [SoundComponent, BoardComponent, NoteComponent],
  exports: [SoundComponent, BoardComponent, NoteComponent],
  imports: [CommonModule, SoundRoutes, MaterialModule]
})
export default class SoundModule {}