import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  noteValue: string;
  constructor(private _noteService: NotesService) {
    this.noteValue='test'
   }

  ngOnInit() {}

  addNote(){
    if(this.noteValue != ''){
      this._noteService.addNote(new Note({note: this.noteValue}))
      this.noteValue = ''
    }
  }


}
