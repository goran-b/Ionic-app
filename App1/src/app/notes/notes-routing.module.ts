import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesPage } from './notes.page';
import { NewNoteComponent } from './new-note/new-note.component';
import { DetailsNoteComponent } from './details-note/details-note.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NotesPage
      },
      {
        path: 'new',
        component: NewNoteComponent
      },
      {
        path: 'details/:id',
        component: DetailsNoteComponent
      },
      {
        path: 'edit/:id',
        component: NewNoteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesPageRoutingModule {}
