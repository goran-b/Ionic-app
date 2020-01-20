import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  UserNameChange= new Subject<any>();

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public toastController: ToastController,
    private router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.UserNameChange.next(user.displayName)
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  logIn(value) {
    return this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then((result) => {
        this.userData = result.user
        this.router.navigate(['home']);
      }).catch((error) => {
        this.presentToast(error.message)
      })
  }

  signUp(value) {
    return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then((result) => {
        value.id = result.user.uid
        this.saveUserData(value);
        this.userData = result.user
        this.router.navigate(['home']);
      }).catch((error) => {
        this.presentToast(error.message)
      })
  }

  forgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.presentToast('Password reset email sent, check your inbox.');
      }).catch((error) => {
        this.presentToast(error.message)
      })
  }
  getData() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user
  }

  userId() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.uid
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  logOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  saveUserData(user) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: user.displayName
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      console.log(error)
    });
    //Additional data if want to store in DB
    let data = Object.assign({}, user);
    delete data.id
    this.firestore.collection('users').doc(`${user.id}`).set(data);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
