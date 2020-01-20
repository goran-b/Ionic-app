import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule

  ],
  exports: [
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,]
})
export class SharedModule { }
