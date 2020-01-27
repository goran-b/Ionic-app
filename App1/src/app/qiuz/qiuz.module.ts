import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QiuzPageRoutingModule } from './qiuz-routing.module';

import { QiuzPage } from './qiuz.page';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';
import { SetComponent } from './set/set.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QiuzPageRoutingModule
  ],
  declarations: [
    QiuzPage,
    TestComponent, 
    SetComponent
  ]
})
export class QiuzPageModule {}
