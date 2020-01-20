import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-details-note',
  templateUrl: './details-note.component.html',
  styleUrls: ['./details-note.component.scss'],
})
export class DetailsNoteComponent implements OnInit {
note: Note
  constructor(    
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private notesService: NotesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.notesService.getNotebyId(id).subscribe((r)=>{
        const data = r.data() as Note;
        data.id = r.id;
        data.date=new Date(+data.date);
        this.note = data        
      })     
    })
  }
  edit(id:String){
    this.router.navigate(['notes/edit/', id])
  }
  delete(id:String){
    this.notesService.delete(id)}
}
