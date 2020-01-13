import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MalfPageRoutingModule } from './malf-routing.module';

import { MalfPage } from './malf.page';
import { SharedModule } from '../shared/shared.module';
import { NewMalfComponent } from './new-malf/new-malf.component';
import { DetailsMalfComponent } from './details-malf/details-malf.component';
import { HistoryMalfComponent } from './history-malf/history-malf.component';
import { LastMalfComponent } from './last-malf/last-malf.component';
import { ListMalfComponent } from './list-malf/list-malf.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MalfPageRoutingModule
  ],
  declarations: [
    MalfPage,
    NewMalfComponent,
    DetailsMalfComponent,
    HistoryMalfComponent,
    LastMalfComponent,
    ListMalfComponent
  ]
})
export class MalfPageModule { }
