import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
import { SharedModule } from '../shared/shared.module';
import { NewNoteComponent } from './new-note/new-note.component';
import { DetailsNoteComponent } from './details-note/details-note.component';
import { ListNoteComponent } from './list-note/list-note.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NotesPageRoutingModule
  ],
  declarations: [
    NotesPage, 
    NewNoteComponent, 
    DetailsNoteComponent,
    ListNoteComponent
  ]
})
export class NotesPageModule {}
