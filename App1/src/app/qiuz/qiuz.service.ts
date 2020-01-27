import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class QiuzService {
  public urlAddress: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router,public alertController: AlertController) { }


  getCategories() {
    return this.http.get(
      this.urlAddress + '/api_category.php',
    );
  }
  getQuestions(value) {
    this.http.get(
      this.urlAddress + `/api.php?amount=${value.number}&category=${value.category}&difficulty=${value.difficulty}&type=multiple`,
    ).subscribe((r) => {
      this.router.navigateByUrl('/quiz/test', { state: { r, n: value.number } })
    })
  }
  async AlertMessage( numberOfQs,correctQs) {
    const alert = await this.alertController.create({
      header: `You're completed Quiz!`,
      message: `You have ${correctQs} correct answers of ${numberOfQs} questions!`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }
      ]
    });

    await alert.present();
  }
}
