import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/firestore'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AngularFirestoreModule

  ],
  exports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AngularFirestoreModule,]
})
export class SharedModule { }
