import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.css']
})
export class MainNoteComponent implements OnInit {
  notes: Note[];
  constructor(private _noteService: NotesService) {
    this.notes = this._noteService.getAllNotes()
    console.log(this.notes)
   }

  ngOnInit() {
  }

}
