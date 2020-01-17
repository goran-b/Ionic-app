import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }


saveData(value: Note){
  console.log(value)
}













}
