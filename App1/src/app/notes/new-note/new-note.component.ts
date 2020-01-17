import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  public form: FormGroup;
  note: Note
  edit = false
  constructor(private formBuilder: FormBuilder,
    private notesService: NotesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');

        this.notesService.getNotebyId(id).subscribe((r) => {
          const data = r.data() as Note;
          data.id = r.id;
          data.date = new Date(+data.date);
          this.note = data
          this.edit = true

          this.form = this.formBuilder.group({
            title: [data.title],
            text: [data.text],
            date: [data.date.toISOString()]
          });

        })
      }
    })
    this.form = this.formBuilder.group({
      title: [''],
      text: [''],
      date: ['']
    });
  }
  onSave(form) {

    form.value.date = new Date().setHours(0, 0, 0, 0).toString()
    let data = form.value

    if (this.edit) {
      data.id = this.note.id
    }
    this.notesService.save(data)
    this.form.reset();
  }

}
