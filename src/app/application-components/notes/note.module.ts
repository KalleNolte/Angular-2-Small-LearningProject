import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { routing } from './notes.routing';

import { NoteComponent } from './note/note.component';
import { MainNoteComponent } from './main-note/main-note.component';
import { NoteFormComponent } from './note-form/note-form.component';

import { NotesService } from './notes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    routing

  ],
  declarations: [    
    NoteComponent,
    MainNoteComponent,
    NoteFormComponent
  ],
  providers: [
    NotesService
  ]
})
export class NoteModule { }
