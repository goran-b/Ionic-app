import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss'],
})
export class ListNoteComponent implements OnInit {

  notes: Note[]
  constructor(private noteService: NotesService, private router: Router) { }

  ngOnInit() { 
    this.noteService.getUserNotes().subscribe((r)=>{  
      this.notes=r.map(a => {
        const data = a.payload.doc.data() as Note;
        data.id = a.payload.doc.id;
        data.date=new Date(+data.date);
        return data
      });
      this.notes.sort((a, b) => parseFloat(b.date.toString()) - parseFloat(a.date.toString()))
      this.notes.forEach((data)=>
      data.date=new Date(+data.date))
    })
  }

  details(id:String){
    this.router.navigate(['notes/details/', id])
  }
  edit(id:String){
    this.router.navigate(['notes/edit/', id])
  }
  delete(id:String){
    this.noteService.delete(id)}
  
}
