import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private firestore: AngularFirestore,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router,
    private authService: AuthService, 
    private location: Location) { }

  save(value) {
    let author=this.authService.userId()
    let data = Object.assign({}, value);
    data.author=author
    delete data.id
    if (value.id == null) {
      this.firestore.collection('notes').add(data);
    } else {
      this.firestore.doc('notes/' + value.id).update(data)
    }
    this.location.back();
    this.presentToast('Your data have been saved!')
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 4000
    });
    toast.present();
  }
  delete(id: String) {
    this.deleteWarning(id)
  }

  async deleteWarning(id: String) {
    const alert = await this.alertController.create({
      header: 'Delete Note!',
      message: `<strong>Are you sure</strong>!!!`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (r) => {
            this.deleteInDatabase(id);
          }
        }
      ]
    });

    await alert.present();
  }
  
  deleteInDatabase(id: String) {
    this.firestore.doc('notes/' + id).delete()
    this.router.navigate(['notes'])
    this.presentToast('Your data have been deleted!')
  }

  getNotebyId(id: String) {
    return this.firestore.collection('notes').doc(`${id}`).get()
  }
  
  getUserNotes(){
    let author=this.authService.userId()
    return this.firestore.collection('notes', ref => ref.where("author", '==', author)).snapshotChanges()
  }

  dateStamp() {
    let todayDay = new Date().setHours(0, 0, 0, 0)
    return todayDay
  }
}
