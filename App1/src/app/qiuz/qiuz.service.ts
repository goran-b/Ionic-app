import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QiuzService {
  public urlAddress: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }


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
}
