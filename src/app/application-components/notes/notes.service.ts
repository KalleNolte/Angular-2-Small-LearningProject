import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NotesService {
  
  notes: Note[] = [];
  noteStorage = localStorage;

  constructor() {
    this.notes.push(new Note({}))
   }

  getAllNotes(){
    return  JSON.parse(localStorage.getItem('notes'));;
  }

  addNote(note : Note) :void{
    this.notes.push(note);
    this.deleteStorage();
    this.noteStorage.setItem('notes', JSON.stringify(this.notes))
    console.log(this.notes)
  }

  deleteStorage(){
    this.noteStorage.clear();
  }

}
