import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfPage } from './malf.page';
import { NewMalfComponent } from './new-malf/new-malf.component';
import { HistoryMalfComponent } from './history-malf/history-malf.component';
import { DetailsMalfComponent } from './details-malf/details-malf.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MalfPage
      },
      {
        path: 'new',
        component: NewMalfComponent
      },
      {
        path: 'history',
        component: HistoryMalfComponent
      },
      {
        path: 'details/:id',
        component: DetailsMalfComponent
      },
      {
        path: 'edit/:id',
        component: NewMalfComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfPageRoutingModule { }
