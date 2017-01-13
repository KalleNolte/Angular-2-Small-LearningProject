import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../note';
@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  content: string = 'tolle zweite Notiz'
  constructor() { }

  ngOnInit() {

  }

}
