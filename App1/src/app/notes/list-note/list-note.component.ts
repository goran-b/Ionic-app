import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss'],
})
export class ListNoteComponent implements OnInit {

  notes: Note
  constructor() { }

  ngOnInit() { }

  
}
