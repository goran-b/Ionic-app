import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [FooterComponent],
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
    AngularFirestoreModule,FooterComponent]
})
export class SharedModule { }
